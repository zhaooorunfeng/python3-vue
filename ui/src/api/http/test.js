import { get } from '../config'

// Mock
export default {
    getCategoryList: params => get('/categorylist/mock/', params),
    getCustomList: params => get('/customlist/mock/', params),
    getDefaultFormList: params => get('/defaultform/tablelist/mock/', params),
    getLinuxHostList: params => get('/linux/hostlist/tablelist/mock/', params),
    getLinuxBiznodeTree: params => get('/linus/biznode/treelist/mock/', params),
    getTreeFormTreelist: params => get('/treeform/treelist/mock/', params),
    getLogList: params => get('/loglist/mock/', params)
}
