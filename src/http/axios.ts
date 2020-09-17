import axios from "axios"
import { message } from 'antd';
let baseURL = process.env.apiUrl
//  创建axios实例
const service = axios.create({
    baseURL: baseURL, // api的base_url
    timeout: 500000 // 请求超时时间
})
// 加载laoding
let loading:any
function endLoading() { //使用Element loading-close 方法
}

//  request拦截器
service.interceptors.request.use((config:any) => {
    if (config.url.indexOf('/ailab/manage/login') === -1) {
        config.headers.common['Authorization'] = `Bearer ${JSON.parse(sessionStorage.userInfo).token}`
    }

    // 上传文件过滤
    // if (config.url.indexOf('uploadImg') !== -1 || config.url.indexOf('/uploadTestInfo') !== -1) {
    //     config.headers.common['Content-Type'] = 'multipart/form-data'
    // }
    return config
}, error => { //请求错误处理   
    Promise.reject(error)
})

//  response拦截器
service.interceptors.response.use(
    (response:any) => { //成功请求到数据  
        const showMessage = response.config.showMessage
        if (loading) {
            endLoading()
        }

        if (response.status === 200) {
            if (response.data.code==='200') {
                if (!showMessage) {
                    // message.success(response.data.msg)
                }
                return response.data
            } else {
                message.error(response.data.msg)
            }
        } else {
            message.error(response.data.msg)
        }
    },
    error => { //响应错误处理console.log('error')      
        return Promise.reject(error)
    }
)

export default service