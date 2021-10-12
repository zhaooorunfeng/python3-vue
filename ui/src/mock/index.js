import test from './test.js'

/**
 * @description 格式化Mock接口返回的数据
 * @param {{data:any,result:boolean,messge:string}}
 * @returns {{data:any,result:boolean,messge:string}}
 */
export const formatResult = ({ data, result = true, messge = 'woops!' }) => ({
    result,
    data,
    messge
})

/**
 * 模拟数据mock
 *
 * mock是否开启模拟数据拦截
 */

const options = {
    mock: true
}
test(options)
