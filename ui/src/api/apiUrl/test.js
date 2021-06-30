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
    },
    get_default_form_list: function(params) {
        return get(reUrl + '/defaultform/tablelist/mock/', params)
    },
    get_linux_host_list: function(params) {
        return get(reUrl + '/linux/hostlist/tablelist/mock/', params)
    },
    get_linux_biznode_tree: function(params) {
        return get(reUrl + '/linus/biznode/treelist/mock/', params)
    }
}
