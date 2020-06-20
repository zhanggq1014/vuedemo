import request from './request'
// const prev = '/api'

function getSwiperData() {
  return request({
    url: '/api/home/swiper',
    method: 'get'
  })
}
function getRemmondData() {
  return request({
    url: '/api/home/remmond',
    method: 'get'
  })
}
function getPopularData() {
  return request({
    url: '/api/home/popular',
    method: 'get'
  })
}
function getGoodsData(type,page){
  return  request({
    url: '/api/home/goods',
    method: 'get',
    params: {
      type: type,
      page: page
    }
  })
}

export { getSwiperData, getRemmondData, getPopularData,getGoodsData}
