  useConnect: () => ({
    changeConnect: vi.fn(),
    getGuanZhuJobSeekerFn: vi.fn(),
  }),
}))

// Mock utils
vi.mock('@/utils', () => ({
  navigateToSub: vi.fn(),
}))

describe('SeekerDetails.vue', () => {
  let wrapper

  beforeEach(() => {
    // Reset mocks before each test
    vi.clearAllMocks()
    wrapper = mount(SeekerDetails)
  })

  it('loads user data correctly', async () => {
    const mockUserData = { id: 1, name: 'Test User', age: 25, sex: 1, teChang: 'Developer' }
    getUserInfo.mockResolvedValue({ data: mockUserData })
    getGuanZhuJobSeekerFn.mockResolvedValue([])

    await wrapper.vm.loadUserData()
    await nextTick()

    expect(getUserInfo).toHaveBeenCalled()
    expect(wrapper.vm.userInfo).toEqual(mockUserData)
  })

  it('handles collect action correctly', async () => {
    const mockUserData = { id: 1 }
    wrapper.vm.userInfo = mockUserData
    wrapper.vm.collect = false

    await wrapper.vm.handleCollect()

    expect(useConnect().changeConnect).toHaveBeenCalledWith(
      { shouCangJobSeekerId: Number(mockUserData.id) },
      false,
      expect.any(Function)
    )
  })

  it('handles contact action correctly', () => {
    const mockUserData = { id: 1 }
    wrapper.vm.userInfo = mockUserData

    wrapper.vm.handleContact()

    expect(navigateToSub).toHaveBeenCalledWith(
      `/chat/chat?toUserID=im_seeker_${mockUserData.id}`
    )
  })

  it('computes title1 correctly', () => {
    const mockUserData = { age: 25, sex: 1, teChang: 'Developer' }
    wrapper.vm.userInfo = mockUserData

    expect(wrapper.vm.title1).toBe('25 岁 • 男 • Developer')
  })
})
