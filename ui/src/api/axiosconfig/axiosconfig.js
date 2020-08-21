// axios基础配置
import axios from 'axios'

axios.defaults.baseURL = window.siteUrl;
axios.defaults.withCredentials = true;
axios.defaults.timeout = 200000;
axios.defaults.crossDomain = true;
let VueEnv = process.env.NODE_ENV;
let ApiUrl = 'http://127.0.0.1:8000';
if (VueEnv === 'production') {
    ApiUrl = '.'
} else {
    ApiUrl = 'http://127.0.0.1:8000'
}
// axios.defaults.baseURL = ApiUrl;
axios.interceptors.request.use((config) => {
    config.headers['X-Requested-With'] = 'XMLHttpRequest';
    var name = 'csrftoken'
    var cookieValue = 'NOTPROVIDED';
    if (document.cookie && document.cookie != '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) == (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    config.headers['X-CSRFToken'] = cookieValue
    return config
});

axios.interceptors.response.use(response => {
    if (response.status !== 200) {
        return {
            code: response.status,
            message: '请求异常，请刷新重试',
            result: false
        }
    }
    return response.data
}, error => {
    return {
        code: 500,
        message: '未知错误，请刷新重试',
        error: error,
        result: false
    }
});

// 发送请求 (接口路径，参数，请求配置)
export function post(url, params, config) {
    return new Promise((resolve, reject) => {
        axios.post(url, params, config).then(
            res => {
                resolve(res)
            },
            err => {
                reject(err)
            }
        )
            .catch(err => {
                reject(err)
            })
    })
}

export function get(url, params, config) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params,
            config: config
        })
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
    })
}

// 前后端分离开发时重定向配置
// reUrl = '';  不需要重定向
//  reUrl = VueEnv === 'production' ? '' : '/api'; 重定向
export const reUrl = '';
