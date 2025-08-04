import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import { useMessage } from 'wot-design-uni'
import YrModalPicker from './yr-modal-picker.vue'

jest.mock('wot-design-uni')

describe('YrModalPicker.vue', () => {
  it('renders list items', () => {
    const wrapper = mount(YrModalPicker, {
      props: {
        modelValue: 'item1,item2',
      },
    })

    expect(wrapper.findAll('.flex').length).toBe(2)
  })

  it('removes item from list', async () => {
    const wrapper = mount(YrModalPicker, {
      props: {
        modelValue: 'item1,item2',
      },
    })

    await wrapper.find('wd-icon').trigger('click')
    expect(wrapper.vm.list).toEqual(['item2'])
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
  })

  it('adds item to list', async () => {
    const mockPrompt = jest.fn().mockResolvedValue({ value: 'newItem' })
    ;(useMessage as jest.Mock).mockReturnValue({
      prompt: mockPrompt,
    })

    const wrapper = mount(YrModalPicker)
    await wrapper.vm.addItem()

    expect(mockPrompt).toHaveBeenCalled()
    expect(wrapper.vm.list).toEqual(['newItem'])
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
  })

  it('watches modelValue changes', async () => {
    const wrapper = mount(YrModalPicker, {
      props: {
        modelValue: '',
      },
    })

    await wrapper.setProps({ modelValue: 'item1,item2' })
    expect(wrapper.vm.list).toEqual(['item1', 'item2'])
  })
})
