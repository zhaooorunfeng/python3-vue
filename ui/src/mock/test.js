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
                    name5: 'error',
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
                    name5: 'error',
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
                    name5: 'error',
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
}
