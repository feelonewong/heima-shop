import { useMemberStore } from '@/stores'

const baseURL = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'

const httpInterceptor = {
  invoke(options: UniApp.RequestOptions) {
    if (!options.url.startsWith('http')) {
      options.url = baseURL + options.url
    }
    options.timeout = 10 * 1000
    // 添加请求标识
    options.header = {
      ...options.header,
      'source-client': 'miniapp',
    }
    const memberStore = useMemberStore()
    const token = memberStore.profile?.token
    if (token) {
      options.header.Authorization = token
    }
  },
}

uni.addInterceptor('request', httpInterceptor)
uni.addInterceptor('uploadFile', httpInterceptor)

export const http = (options: UniApp.RequestOptions) => {
  return new Promise((resolve, reject) => {
    uni.request({
      ...options,
      success(res: any) {
        if (res.statusCode >= 200 && res.statusCode <= 300) {
          resolve(res.data)
        } else if (res.statusCode === 401) {
          // 401 跳转到登录页
          const member = useMemberStore()
          member.clearProfile()
          uni.navigateTo({
            url: '/pages/login/login',
          })
          reject(res)
        }else {
          uni.showToast({
            icon: 'none',
            title: res.data?.msg || '请求错误'
          })
          reject(res)
        }
      },
      fail(err){
        uni.showToast({
          icon: 'none',
          title: '网络异常'
        })
        reject(err)
      }
    })
  })
}
