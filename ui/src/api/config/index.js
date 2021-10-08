import axios from 'axios'

const getToken = () => {
    const DEFAULT_X_CSRFTOKEN = 'NOTPROVIDED'
    const { cookie } = document
    if (cookie && typeof cookie === 'string' && cookie.length > 0) {
        const key = window.CSRF_COOKIE_NAME || 'csrftoken'
        const values = cookie.split(';')
        const value = values.find(item => item.trim().includes(key))
        if (value) {
            return decodeURIComponent(value.split('=')[1]) || DEFAULT_X_CSRFTOKEN
        }
        return DEFAULT_X_CSRFTOKEN
    }
    return DEFAULT_X_CSRFTOKEN
}

// create an axios instance
const service = axios.create({
    baseURL: window.siteUrl,
    withCredentials: true,
    crossDomain: true,
    timeout: 200000
})

// request interceptor
service.interceptors.request.use(config => {
    const token = getToken()
    config.headers['X-csrfToken'] = token
    config.headers['X-Requested-With'] = 'XMLHttpRequest'
    return config
})

// response interceptor
service.interceptors.response.use(
    response => {
        const { status, data } = response
        if (status !== 200) {
            return {
                result: false,
                code: status,
                message: '请求异常，请刷新重试'
            }
        }
        return data
    },
    error => ({
        result: false,
        code: 500,
        message: '未知错误，请刷新重试',
        error: error
    })
)

// get
export const get = (url, params, opts = {}) =>
    new Promise((resolve, reject) => {
        service({
            method: 'GET',
            url,
            params,
            ...opts
        })
            .then(res => resolve(res))
            .catch(err => reject(err))
    })

// post
export const post = (url, data, opts = {}) =>
    new Promise((resolve, reject) => {
        service({
            method: 'POST',
            url,
            data,
            ...opts
        })
            .then(res => resolve(res))
            .catch(err => reject(err))
    })
