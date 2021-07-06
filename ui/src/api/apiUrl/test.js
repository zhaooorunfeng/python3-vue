import {
    get,
    reUrl
} from '../axiosconfig/axiosconfig'

// 前端mock测试接口
export default {
    getCategoryList: function(params) {
        return get(reUrl + '/categorylist/mock/', params)
    },
    getCustomList: function(params) {
        return get(reUrl + '/customlist/mock/', params)
    },
    getDefaultFormList: function(params) {
        return get(reUrl + '/defaultform/tablelist/mock/', params)
    },
    getLinuxHostList: function(params) {
        return get(reUrl + '/linux/hostlist/tablelist/mock/', params)
    },
    getLinuxBiznodeTree: function(params) {
        return get(reUrl + '/linus/biznode/treelist/mock/', params)
    },
    getTreeFormTreelist: function(params) {
        return get(reUrl + '/treeform/treelist/mock/', params)
    },
    getLogList: function(params) {
        return get(reUrl + '/loglist/mock/', params)
    }
}
