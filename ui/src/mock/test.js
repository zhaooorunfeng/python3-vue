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
}
