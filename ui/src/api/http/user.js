import { get } from '../config'

export default {
    // 获取登录信息
    homeInfo: params => get('/login_info/', params)
}
