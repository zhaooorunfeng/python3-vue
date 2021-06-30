import Mock from 'mockjs'
export default ({
    mock
}) => {
    if (!mock) return;
    Mock.mock(window.siteUrl + '/categorylist/mock/', 'get', () => {
        return {
            data: {
                list: [{
                    name1: '数据详情-45838475209349274723342',
                    name2: '文本类型内容',
                    name3: '0.00%',
                    name4: '文本类型详情',
                    name5: 'success',
                    name6: '长文本类型详情长文本类型详情长文本类型详情',
                    name7: '短文本类型详情'
                }, {
                    name1: '数据详情-45838475209349274723342',
                    name2: '文本类型内容',
                    name3: '0.00%',
                    name4: '文本类型详情',
                    name5: 'deadly',
                    name6: '长文本类型详情长文本类型详情长文本类型详情',
                    name7: '短文本类型详情'
                }, {
                    name1: '数据详情-45838475209349274723342',
                    name2: '文本类型内容',
                    name3: '0.00%',
                    name4: '文本类型详情',
                    name5: 'info',
                    name6: '长文本类型详情长文本类型详情长文本类型详情',
                    name7: '短文本类型详情'
                }, {
                    name1: '数据详情-45838475209349274723342',
                    name2: '文本类型内容',
                    name3: '0.00%',
                    name4: '文本类型详情',
                    name5: 'info',
                    name6: '长文本类型详情长文本类型详情长文本类型详情',
                    name7: '短文本类型详情'
                }, {
                    name1: '数据详情-45838475209349274723342',
                    name2: '文本类型内容',
                    name3: '0.00%',
                    name4: '文本类型详情',
                    name5: 'deadly',
                    name6: '长文本类型详情长文本类型详情长文本类型详情',
                    name7: '短文本类型详情'
                }, {
                    name1: '数据详情-45838475209349274723342',
                    name2: '文本类型内容',
                    name3: '0.00%',
                    name4: '文本类型详情',
                    name5: 'warning',
                    name6: '长文本类型详情长文本类型详情长文本类型详情',
                    name7: '短文本类型详情'
                }, {
                    name1: '数据详情-45838475209349274723342',
                    name2: '文本类型内容',
                    name3: '0.00%',
                    name4: '文本类型详情',
                    name5: 'info',
                    name6: '长文本类型详情长文本类型详情长文本类型详情',
                    name7: '短文本类型详情'
                }, {
                    name1: '数据详情-45838475209349274723342',
                    name2: '文本类型内容',
                    name3: '0.00%',
                    name4: '文本类型详情',
                    name5: 'info',
                    name6: '长文本类型详情长文本类型详情长文本类型详情',
                    name7: '短文本类型详情'
                }, {
                    name1: '数据详情-45838475209349274723342',
                    name2: '文本类型内容',
                    name3: '0.00%',
                    name4: '文本类型详情',
                    name5: 'success',
                    name6: '长文本类型详情长文本类型详情长文本类型详情',
                    name7: '短文本类型详情'
                }, {
                    name1: '数据详情-45838475209349274723342',
                    name2: '文本类型内容',
                    name3: '0.00%',
                    name4: '文本类型详情',
                    name5: 'success',
                    name6: '长文本类型详情长文本类型详情长文本类型详情',
                    name7: '短文本类型详情'
                }, {
                    name1: '数据详情-45838475209349274723342',
                    name2: '文本类型内容',
                    name3: '0.00%',
                    name4: '文本类型详情',
                    name5: 'deadly',
                    name6: '长文本类型详情长文本类型详情长文本类型详情',
                    name7: '短文本类型详情'
                }, {
                    name1: '数据详情-45838475209349274723342',
                    name2: '文本类型内容',
                    name3: '0.00%',
                    name4: '文本类型详情',
                    name5: 'warning',
                    name6: '长文本类型详情长文本类型详情长文本类型详情',
                    name7: '短文本类型详情'
                }, {
                    name1: '数据详情-45838475209349274723342',
                    name2: '文本类型内容',
                    name3: '0.00%',
                    name4: '文本类型详情',
                    name5: 'success',
                    name6: '长文本类型详情长文本类型详情长文本类型详情',
                    name7: '短文本类型详情'
                }, {
                    name1: '数据详情-45838475209349274723342',
                    name2: '文本类型内容',
                    name3: '0.00%',
                    name4: '文本类型详情',
                    name5: 'success',
                    name6: '长文本类型详情长文本类型详情长文本类型详情',
                    name7: '短文本类型详情'
                }, {
                    name1: '数据详情-45838475209349274723342',
                    name2: '文本类型内容',
                    name3: '0.00%',
                    name4: '文本类型详情',
                    name5: 'success',
                    name6: '长文本类型详情长文本类型详情长文本类型详情',
                    name7: '短文本类型详情'
                }, {
                    name1: '数据详情-45838475209349274723342',
                    name2: '文本类型内容',
                    name3: '0.00%',
                    name4: '文本类型详情',
                    name5: 'success',
                    name6: '长文本类型详情长文本类型详情长文本类型详情',
                    name7: '短文本类型详情'
                }],
                count: 266,
                code: 200
            }
        }
    })
    Mock.mock(window.siteUrl + '/customlist/mock/', 'get', () => {
        return {
            data: {
                list: [{
                    name1: '名称-checklist',
                    name2: '文本类型内容',
                    name3: '20.00',
                    name4: '文本类型详情',
                    name5: 'success',
                    name6: '长文本类型详情长文本类型详情长文本类型详情长文本类型详情'
                }, {
                    name1: '名称-checklist',
                    name2: '文本类型内容',
                    name3: '20.00',
                    name4: '文本类型详情',
                    name5: 'fail',
                    name6: '长文本类型详情长文本类型详情长文本类型详情长文本类型详情'
                }, {
                    name1: '名称-checklist',
                    name2: '文本类型内容',
                    name3: '20.00',
                    name4: '文本类型详情',
                    name5: 'run',
                    name6: '长文本类型详情长文本类型详情长文本类型详情长文本类型详情'
                }, {
                    name1: '名称-checklist',
                    name2: '文本类型内容',
                    name3: '20.00',
                    name4: '文本类型详情',
                    name5: 'wait',
                    name6: '长文本类型详情长文本类型详情长文本类型详情长文本类型详情'
                }, {
                    name1: '名称-checklist',
                    name2: '文本类型内容',
                    name3: '20.00',
                    name4: '文本类型详情',
                    name5: 'pause',
                    name6: '长文本类型详情长文本类型详情长文本类型详情长文本类型详情'
                }, {
                    name1: '名称-checklist',
                    name2: '文本类型内容',
                    name3: '20.00',
                    name4: '文本类型详情',
                    name5: 'stop',
                    name6: '长文本类型详情长文本类型详情长文本类型详情长文本类型详情'
                }, {
                    name1: '名称-checklist',
                    name2: '文本类型内容',
                    name3: '20.00',
                    name4: '文本类型详情',
                    name5: 'deadly',
                    name6: '长文本类型详情长文本类型详情长文本类型详情长文本类型详情'
                }, {
                    name1: '名称-checklist',
                    name2: '文本类型内容',
                    name3: '20.00',
                    name4: '文本类型详情',
                    name5: 'deadly',
                    name6: '长文本类型详情长文本类型详情长文本类型详情长文本类型详情'
                }, {
                    name1: '名称-checklist',
                    name2: '文本类型内容',
                    name3: '20.00',
                    name4: '文本类型详情',
                    name5: 'deadly',
                    name6: '长文本类型详情长文本类型详情长文本类型详情长文本类型详情'
                }, {
                    name1: '名称-checklist',
                    name2: '文本类型内容',
                    name3: '20.00',
                    name4: '文本类型详情',
                    name5: 'deadly',
                    name6: '长文本类型详情长文本类型详情长文本类型详情长文本类型详情'
                }, {
                    name1: '名称-checklist',
                    name2: '文本类型内容',
                    name3: '20.00',
                    name4: '文本类型详情',
                    name5: 'deadly',
                    name6: '长文本类型详情长文本类型详情长文本类型详情长文本类型详情'
                }, {
                    name1: '名称-checklist',
                    name2: '文本类型内容',
                    name3: '20.00',
                    name4: '文本类型详情',
                    name5: 'deadly',
                    name6: '长文本类型详情长文本类型详情长文本类型详情长文本类型详情'
                }],
                count: 269,
                code: 200
            }
        }
    })
    Mock.mock(window.siteUrl + '/defaultform/tablelist/mock/', 'get', () => {
        return {
            data: {
                list: [{
                    name1: '数据详情-4116546-2021031',
                    name2: '文本类型内容',
                    name3: '0.00%',
                    name4: '文本类型详情',
                    name5: '长文本类型详情长文本类型详情'
                }, {
                    name1: '数据详情-4116546-2021031',
                    name2: '文本类型内容',
                    name3: '0.00%',
                    name4: '文本类型详情',
                    name5: '长文本类型详情长文本类型详情'
                }, {
                    name1: '数据详情-4116546-2021031',
                    name2: '文本类型内容',
                    name3: '0.00%',
                    name4: '文本类型详情',
                    name5: '长文本类型详情长文本类型详情'
                }, {
                    name1: '数据详情-4116546-2021031',
                    name2: '文本类型内容',
                    name3: '0.00%',
                    name4: '文本类型详情',
                    name5: '长文本类型详情长文本类型详情'
                }, {
                    name1: '数据详情-4116546-2021031',
                    name2: '文本类型内容',
                    name3: '0.00%',
                    name4: '文本类型详情',
                    name5: '长文本类型详情长文本类型详情'
                }, {
                    name1: '数据详情-4116546-2021031',
                    name2: '文本类型内容',
                    name3: '0.00%',
                    name4: '文本类型详情',
                    name5: '长文本类型详情长文本类型详情'
                }, {
                    name1: '数据详情-4116546-2021031',
                    name2: '文本类型内容',
                    name3: '0.00%',
                    name4: '文本类型详情',
                    name5: '长文本类型详情长文本类型详情'
                }, {
                    name1: '数据详情-4116546-2021031',
                    name2: '文本类型内容',
                    name3: '0.00%',
                    name4: '文本类型详情',
                    name5: '长文本类型详情长文本类型详情'
                }, {
                    name1: '数据详情-4116546-2021031',
                    name2: '文本类型内容',
                    name3: '0.00%',
                    name4: '文本类型详情',
                    name5: '长文本类型详情长文本类型详情'
                }, {
                    name1: '数据详情-4116546-2021031',
                    name2: '文本类型内容',
                    name3: '0.00%',
                    name4: '文本类型详情',
                    name5: '长文本类型详情长文本类型详情'
                }, {
                    name1: '数据详情-4116546-2021031',
                    name2: '文本类型内容',
                    name3: '0.00%',
                    name4: '文本类型详情',
                    name5: '长文本类型详情长文本类型详情'
                }, {
                    name1: '数据详情-4116546-2021031',
                    name2: '文本类型内容',
                    name3: '0.00%',
                    name4: '文本类型详情',
                    name5: '长文本类型详情长文本类型详情'
                }, {
                    name1: '数据详情-4116546-2021031',
                    name2: '文本类型内容',
                    name3: '0.00%',
                    name4: '文本类型详情',
                    name5: '长文本类型详情长文本类型详情'
                }, {
                    name1: '数据详情-4116546-2021031',
                    name2: '文本类型内容',
                    name3: '0.00%',
                    name4: '文本类型详情',
                    name5: '长文本类型详情长文本类型详情'
                }, {
                    name1: '数据详情-4116546-2021031',
                    name2: '文本类型内容',
                    name3: '0.00%',
                    name4: '文本类型详情',
                    name5: '长文本类型详情长文本类型详情'
                }, {
                    name1: '数据详情-4116546-2021031',
                    name2: '文本类型内容',
                    name3: '0.00%',
                    name4: '文本类型详情',
                    name5: '长文本类型详情长文本类型详情'
                }, {
                    name1: '数据详情-4116546-2021031',
                    name2: '文本类型内容',
                    name3: '0.00%',
                    name4: '文本类型详情',
                    name5: '长文本类型详情长文本类型详情'
                }, {
                    name1: '数据详情-4116546-2021031',
                    name2: '文本类型内容',
                    name3: '0.00%',
                    name4: '文本类型详情',
                    name5: '长文本类型详情长文本类型详情'
                }, {
                    name1: '数据详情-4116546-2021031',
                    name2: '文本类型内容',
                    name3: '0.00%',
                    name4: '文本类型详情',
                    name5: '长文本类型详情长文本类型详情'
                }]
            }
        }
    })
    Mock.mock(window.siteUrl + '/linux/hostlist/tablelist/mock/', 'get', () => {
        return {
            data: {
                list: [{
                    name1: 'default area',
                    name2: 'linux centos',
                    name3: '171.16.100.1',
                    name4: 'VM_0_17j_centos'
                }, {
                    name1: 'default area',
                    name2: 'linux centos',
                    name3: '171.16.100.1',
                    name4: 'VM_0_17j_centos'
                }, {
                    name1: 'default area',
                    name2: 'linux centos',
                    name3: '171.16.100.1',
                    name4: 'VM_0_17j_centos'
                }, {
                    name1: 'default area',
                    name2: 'linux centos',
                    name3: '171.16.100.1',
                    name4: 'VM_0_17j_centos'
                }, {
                    name1: 'default area',
                    name2: 'linux centos',
                    name3: '171.16.100.1',
                    name4: 'VM_0_17j_centos'
                }, {
                    name1: 'default area',
                    name2: 'linux centos',
                    name3: '171.16.100.1',
                    name4: 'VM_0_17j_centos'
                }, {
                    name1: 'default area',
                    name2: 'linux centos',
                    name3: '171.16.100.1',
                    name4: 'VM_0_17j_centos'
                }, {
                    name1: 'default area',
                    name2: 'linux centos',
                    name3: '171.16.100.1',
                    name4: 'VM_0_17j_centos'
                }, {
                    name1: 'default area',
                    name2: 'linux centos',
                    name3: '171.16.100.1',
                    name4: 'VM_0_17j_centos'
                }, {
                    name1: 'default area',
                    name2: 'linux centos',
                    name3: '171.16.100.1',
                    name4: 'VM_0_17j_centos'
                }, {
                    name1: 'default area',
                    name2: 'linux centos',
                    name3: '171.16.100.1',
                    name4: 'VM_0_17j_centos'
                }, {
                    name1: 'default area',
                    name2: 'linux centos',
                    name3: '171.16.100.1',
                    name4: 'VM_0_17j_centos'
                }, {
                    name1: 'default area',
                    name2: 'linux centos',
                    name3: '171.16.100.1',
                    name4: 'VM_0_17j_centos'
                }, {
                    name1: 'default area',
                    name2: 'linux centos',
                    name3: '171.16.100.1',
                    name4: 'VM_0_17j_centos'
                }, {
                    name1: 'default area',
                    name2: 'linux centos',
                    name3: '171.16.100.1',
                    name4: 'VM_0_17j_centos'
                }, {
                    name1: 'default area',
                    name2: 'linux centos',
                    name3: '171.16.100.1',
                    name4: 'VM_0_17j_centos'
                }, {
                    name1: 'default area',
                    name2: 'linux centos',
                    name3: '171.16.100.1',
                    name4: 'VM_0_17j_centos'
                }],
                code: 200,
                count: 29
            }
        }
    })
    Mock.mock(window.siteUrl + '/linus/biznode/treelist/mock/', 'get', () => {
        return {
            data: {
                list: [{
                    id: '1-1',
                    label: '一级 1-1',
                    child: [{
                        id: '1-1-1',
                        label: '一级 1-1-1'
                    }]
                }, {
                    id: '1-2',
                    label: '一级 1-2',
                    child: [{
                        id: '1-2-1',
                        label: '二级 2-1'
                    }, {
                        id: '1-2-2',
                        label: '二级 2-2'
                    }, {
                        id: '1-2-3',
                        label: '二级 2-3',
                        child: [{
                            id: '1-2-3-1',
                            label: '三级 3-1'
                        }, {
                            id: '1-2-3-2',
                            label: '三级 3-2'
                        }]
                    }]
                }, {
                    id: '1-3',
                    label: '一级 1-3',
                    child: [{
                        id: '1-3-1',
                        label: '二级 2-1'
                    }],
                }, {
                    id: '1-4',
                    label: '一级 1-4',
                    child: [{
                        id: '1-4-1',
                        label: '二级 2-1'
                    }],
                }],
                code: 200
            }
        }
    })
}
