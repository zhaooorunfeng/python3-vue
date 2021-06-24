import Mock from 'mockjs'
export default ({mock}) => {
  if (!mock) return;
  Mock.mock('/test/mock', 'get', () => {
    return {
      data: {
		  msg: '测试mock',
		  code: 200
	  }
    }
  })

}