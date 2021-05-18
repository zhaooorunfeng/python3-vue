import Vue from 'vue'
import Router from 'vue-router'
import HomeFirst from '@/views/ui_demo/workbench/home_first'
import HomeSecond from '@/views/ui_demo/workbench/home_second'
import HomeThird from '@/views/ui_demo/workbench/home_third'
import SystemSettings from '@/views/ui_demo/workbench/system_settings'
import DefaultForm from '@/views/ui_demo/forms/default_form'
import DrawerForm from '@/views/ui_demo/forms/drawer_form'
import TreeForm from '@/views/ui_demo/forms/tree_form'
import CategoryList from '@/views/ui_demo/lists/category_list'
import CustomList from '@/views/ui_demo/lists/custom_list'
import BusinessNode from '@/views/ui_demo/details/business_node'
import OperationLog from '@/views/ui_demo/details/operation_log'
import ResultPage from '@/views/ui_demo/results/index'
import ExceptionPage from '@/views/ui_demo/exceptions/index'
import ChartPages from '@/views/ui_demo/charts/index'


export let frameRouter = [
    {
        path: '/',
        name: 'HomeFirst',
        component: HomeFirst,
        meta: {
            title: '首页1',
        }
    },
    {
        path: '/home',
        name: 'HomeFirst',
        component: HomeFirst,
        meta: {
            title: '首页1',
        }
    },
    {
        path: '/homeSecond',
        name: 'HomeSecond',
        component: HomeSecond,
        meta: {
            title: '首页2',
        }
    },
    {
        path: '/homeThird',
        name: 'HomeThird',
        component: HomeThird,
        meta: {
            title: '首页3',
        }
    },
    {
        path: '/systemSettings',
        name: 'SystemSettings',
        component: SystemSettings,
        meta: {
            title: '系统设置',
        }
    },
    {
        path: '/defaultForm',
        name: 'DefaultForm',
        component: DefaultForm,
        meta: {
            title: '表单-默认',
        }
    },
    {
        path: '/drawerForm',
        name: 'DrawerForm',
        component: DrawerForm,
        meta: {
            title: '表单-抽屉',
        }
    },
    {
        path: '/treeForm',
        name: 'TreeForm',
        component: TreeForm,
        meta: {
            title: '表单-树',
        }
    },
    {
        path: '/categoryList',
        name: 'CategoryList',
        component: CategoryList,
        meta: {
            title: '分类列表',
        }
    },
    {
        path: '/customList',
        name: 'CustomList',
        component: CustomList,
        meta: {
            title: '自定义内容列表',
        }
    },
    {
        path: '/businessNode',
        name: 'BusinessNode',
        component: BusinessNode,
        meta: {
            title: '业务树-节点详情',
        }
    },
    {
        path: '/operationLog',
        name: 'OperationLog',
        component: OperationLog,
        meta: {
            title: '操作日志',
        }
    },
    {
        path: '/resultPage',
        name: 'ResultPage',
        component: ResultPage,
        meta: {
            title: '结果页'
        }
    },
    {
        path: '/exceptionPage',
        name: 'ExceptionPage',
        component: ExceptionPage,
        meta: {
            title: '异常页'
        }
    },
    {
        path: '/chartPage',
        name: 'ChartPages',
        component: ChartPages,
        meta: {
            title: '图表页'
        }
    }
]

// 导航栏
export const adminRouteConfig = [
    {
        name: '工作台',
        icon: 'iconfont icon-mianxingtubiao-shezhi',
        id: 'workbench',
        children: [
            {
                name: '首页1',
                id: 'HomeFirst',
                active: true,
                url: '/home'
            },
            {
                name: '首页2',
                id: 'HomeSecond',
                url: '/homeSecond'
            },
            {
                name: '首页3',
                id: 'HomeThird',
                url: '/homeThird'
            },
            {
                name: '系统设置页',
                id: 'SystemSettings',
                url: '/systemSettings'
            }
        ]
    },
    {
        name: '列表类',
        icon: 'iconfont icon-mianxingtubiao-riqi',
        id: 'list',
        children: [
            {
                name: '分类列表',
                id: 'CategoryList',
                url: '/categoryList'
            },
            {
                name: '自定义内容列表',
                id: 'CustomList',
                url: '/customList'
            }
        ]
    },
    {
        name: '表单类',
        icon: 'iconfont icon-mianxingtubiao-danju',
        id: 'form',
        children: [
            {
                name: '表单-默认',
                id: 'DefaultForm',
                url: '/defaultForm'
            },
            {
                name: '表单-抽屉',
                id: 'DrawerForm',
                url: '/drawerForm'
            },
            {
                name: '表单-树',
                id: 'TreeForm',
                url: '/treeForm'
            }
        ]
    },
    {
        name: '详情类',
        icon: 'iconfont icon-iconfontgengduo',
        id: 'details',
        children: [
            {
                name: '操作日志',
                id: 'OperationLog',
                url: '/operationLog'
            },
            {
                name: '业务树-节点详情',
                id: 'BusinessNode',
                url: '/businessNode'
            },
        ]
    },
    {
        name: '结果类',
        icon: 'iconfont icon-mianxingtubiao-yanzhonggaojing',
        id: 'result',
        children: [
            {
                name: '结果页',
                id: 'ResultPage',
                url: '/resultPage'
            }
        ]
    },
    {
        name: '异常类',
        icon: 'iconfont icon-mianxingtubiao-tishi',
        id: 'exception',
        children: [
            {
                name: '异常页',
                id: 'ExceptionPage',
                url: '/exceptionPage'
            }
        ]
    },
    {
        name: '图表类',
        icon: 'iconfont icon-tubiaohei',
        id: 'chart',
        children: [
            {
                name: '图表页',
                id: 'ChartPages',
                url: '/chartPage'
            }
        ]
    }
]


export const createAdminRouteConfig = () => adminRouteConfig
