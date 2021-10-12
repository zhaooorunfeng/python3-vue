import Mock from 'mockjs'
import { formatResult } from './index.js'

// 改配置用于阻止mock忽略cookie
Mock.XHR.prototype.withCredentials = true

export default ({ mock }) => {
    if (!mock) return
    const random = Mock.Random
    Mock.mock(window.siteUrl + '/categorylist/mock/', 'get', () => {
        const list = []
        for (let i = 0; i < 50; i++) {
            list.push({
                name1: random.ctitle(),
                name2: '文本类型内容',
                name3: '0.00%',
                name4: random.ctitle(),
                name5: 'success',
                name6: random.ctitle(10, 25),
                name7: random.ctitle(1, 10)
            })
        }
        return formatResult({ data: { list, count: list.length } })
    })
    Mock.mock(window.siteUrl + '/customlist/mock/', 'get', () => {
        const list = []
        for (let i = 0; i < 21; i++) {
            list.push({
                name1: `${random.ctitle()}-checklist`,
                name2: random.ctitle(),
                name3: '20.00',
                name4: random.ctitle(),
                name5: 'success',
                name6: random.ctitle(10, 25)
            })
        }
        return formatResult({ data: { list, count: list.length } })
    })
    Mock.mock(window.siteUrl + '/defaultform/tablelist/mock/', 'get', () => {
        const list = []
        for (let i = 0; i < 50; i++) {
            list.push({
                name1: `数据详情-${random.integer(1, 999)}`,
                name2: random.ctitle(),
                name3: `${random.natural(0, 100)}%`,
                name4: random.ctitle(),
                name5: random.ctitle(10, 25)
            })
        }
        return formatResult({ data: { list } })
    })
    Mock.mock(window.siteUrl + '/linux/hostlist/tablelist/mock/', 'get', () => {
        const list = []
        for (let i = 0; i < 50; i++) {
            list.push({
                name1: 'default area',
                name2: 'linux centos',
                name3: `171.16.100.${i}`,
                name4: 'VM_0_17j_centos'
            })
        }
        return formatResult({ data: { list } })
    })
    Mock.mock(window.siteUrl + '/linus/biznode/treelist/mock/', 'get', () => {
        const list = [
            {
                id: '1-1',
                label: '一级 1-1',
                child: [
                    {
                        id: '1-1-1',
                        label: '一级 1-1-1'
                    }
                ]
            },
            {
                id: '1-2',
                label: '一级 1-2',
                child: [
                    {
                        id: '1-2-1',
                        label: '二级 2-1'
                    },
                    {
                        id: '1-2-2',
                        label: '二级 2-2'
                    },
                    {
                        id: '1-2-3',
                        label: '二级 2-3',
                        child: [
                            {
                                id: '1-2-3-1',
                                label: '三级 3-1'
                            },
                            {
                                id: '1-2-3-2',
                                label: '三级 3-2'
                            }
                        ]
                    }
                ]
            },
            {
                id: '1-3',
                label: '一级 1-3',
                child: [
                    {
                        id: '1-3-1',
                        label: '二级 2-1'
                    }
                ]
            },
            {
                id: '1-4',
                label: '一级 1-4',
                child: [
                    {
                        id: '1-4-1',
                        label: '二级 2-1'
                    }
                ]
            }
        ]
        return formatResult({ data: { list } })
    })
    Mock.mock(window.siteUrl + '/treeform/treelist/mock/', 'get', () => {
        const list = [
            {
                id: 'Mozambique',
                label: 'Mozambique',
                child: [
                    {
                        id: 'New Tomas',
                        label: 'New Tomas',
                        child: [
                            {
                                id: 'North Andreane',
                                label: 'North Andreane',
                                child: [
                                    {
                                        id: 'South Wilmer',
                                        label: 'South Wilmer',
                                        child: [
                                            {
                                                id: 'aaa',
                                                label: 'aaa'
                                            }
                                        ]
                                    },
                                    {
                                        id: 'Beierstad',
                                        label: 'Beierstad',
                                        child: [
                                            {
                                                id: 'Charlie Alvarez',
                                                label: 'Charlie Alvarez'
                                            },
                                            {
                                                id: 'Richard Rodgers',
                                                label: 'Richard Rodgers'
                                            },
                                            {
                                                id: 'Gene Massey',
                                                label: 'Gene Massey'
                                            },
                                            {
                                                id: 'Harvey Fitzgerald',
                                                label: 'Harvey Fitzgerald'
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id: 'Lake Marietta',
                        label: 'Lake Marietta',
                        child: [
                            {
                                id: 'bbb',
                                label: 'bbb'
                            }
                        ]
                    }
                ]
            },
            {
                id: 'Lebanon',
                label: 'Lebanon',
                child: [
                    {
                        id: 'ccc',
                        label: 'ccc'
                    }
                ]
            },
            {
                id: 'Venezuela',
                label: 'Venezuela',
                child: [
                    {
                        id: 'ddd',
                        label: 'ddd'
                    }
                ]
            },
            {
                id: 'Bulgaria',
                label: 'Bulgaria',
                child: [
                    {
                        id: 'eee',
                        label: 'eee'
                    }
                ]
            },
            {
                id: 'Equatorial Guinea',
                label: 'Equatorial Guinea',
                child: [
                    {
                        id: 'fff',
                        label: 'fff'
                    }
                ]
            }
        ]
        return formatResult({ data: { list } })
    })
    Mock.mock(window.siteUrl + '/loglist/mock/', 'get', () => {
        const list = []
        for (let i = 0; i < 50; i++) {
            list.push({
                name1: 'admin_user',
                name2: '数据详情-4116546-20210319015422321341',
                name3: '修改',
                name4: `${random.datetime()}`,
                name5: random.title(10, 20)
            })
        }
        return formatResult({ data: { list, count: list.length } })
    })
}
