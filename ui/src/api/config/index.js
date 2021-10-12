import axios from 'axios'
import { errorMessage, xhrErrorHandler } from '@/utils/xhrHandler'

const getToken = () => {
    const DEFAULT_X_CSRFTOKEN = 'NOTPROVIDED'
    const { cookie } = document
    if (cookie && typeof cookie === 'string') {
        const key = window.CSRF_COOKIE_NAME || 'csrftoken'
        const values = cookie.split(';')
        const value = values.find(item => item.includes(key))
        if (!value) return DEFAULT_X_CSRFTOKEN
        return decodeURIComponent(value.split('=')[1] || DEFAULT_X_CSRFTOKEN)
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
        const { data } = response || {}
        /** Note: need to change by the data of api */
        if (data && !data.result) {
            errorMessage(data.message || '请求异常，请刷新重试')
            return Promise.reject(response)
        }
        return Promise.resolve(data)
    },
    error => {
        xhrErrorHandler(error)
        return Promise.reject(error)
    }
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

// put
export const put = (url, data, opts = {}) =>
    new Promise((resolve, reject) => {
        service({
            method: 'PUT',
            url,
            data,
            ...opts
        })
            .then(res => resolve(res))
            .catch(err => reject(err))
    })

// delete
export const remove = (url, params, opts = {}) =>
    new Promise((resolve, reject) => {
        service({
            method: 'DELETE',
            url,
            params,
            ...opts
        })
            .then(res => resolve(res))
            .catch(err => reject(err))
    })
