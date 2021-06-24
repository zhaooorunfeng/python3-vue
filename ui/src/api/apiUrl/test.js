// 获取登录信息！！！勿动
import {get, post, reUrl} from '../axiosconfig/axiosconfig'

// 返回在vue模板中的调用接口
export default {
    //----GET-------------------------------------------------------------
    //获取登录信息！！！
    get_category_list: function (params) {
        return get(reUrl + '/categorylist/mock/', params)
    }
}
