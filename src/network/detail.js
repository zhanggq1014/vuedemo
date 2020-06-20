import request from './request'
function getDetailData(id) {
  return request({
    method: 'get',
    url: '/api/goods/detail',
    params:{
        id
    }
  })
}
export {getDetailData}