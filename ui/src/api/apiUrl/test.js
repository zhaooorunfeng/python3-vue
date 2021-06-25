import {
    get,
    post,
    reUrl
} from '../axiosconfig/axiosconfig'

//前端mock测试接口
export default {
    get_category_list: function(params) {
        return get(reUrl + '/categorylist/mock/', params)
    },
    get_custom_list: function(params) {
        return get(reUrl + '/customlist/mock/', params)
    }
}
