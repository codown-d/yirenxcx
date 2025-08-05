    })
    
    const tags = wrapper.findAll('.wd-tag')
    expect(tags.length).toBe(3)
    expect(tags[0].text()).toContain('tag1')
    expect(tags[1].text()).toContain('tag2')
    expect(tags[2].text()).toContain('tag3')
  })

  it('updates tags when modelValue changes', async () => {
    const wrapper = mount(YrTagList, {
      props: {
        modelValue: 'tag1,tag2'
      }
    })
    
    await wrapper.setProps({ modelValue: 'new1,new2,new3' })
    const tags = wrapper.findAll('.wd-tag')
    expect(tags.length).toBe(3)
    expect(tags[0].text()).toContain('new1')
  })

  it('filters out empty tags', async () => {
    const wrapper = mount(YrTagList, {
      props: {
        modelValue: 'tag1,,tag2,'
      }
    })
    
    const tags = wrapper.findAll('.wd-tag')
    expect(tags.length).toBe(2)
  })

  it('applies custom class and type', () => {
    const wrapper = mount(YrTagList, {
      props: {
        modelValue: 'tag1',
        className: 'custom-class',
        type: 'success'
      }
    })
    
    const tag = wrapper.find('.wd-tag')
    expect(tag.classes()).toContain('custom-class')
    expect(tag.attributes('type')).toBe('success')
  })

  it('handles empty input', () => {
    const wrapper = mount(YrTagList, {
      props: {
        modelValue: ''
      }
    })
    
    const tags = wrapper.findAll('.wd-tag')
    expect(tags.length).toBe(0)
  })
})
