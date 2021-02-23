import axios from 'axios'
import { baseUrl } from './_env'

export default{
  // http:// 내ec2주소:3000/list
  list: () => axios.get(`${baseUrl}/wishlist`),
  // http:// 내ec2주소:3000/list/id
  get: (id) => axios.get(`${baseUrl}/wishlist/${id}`),
  // http:// 내ec2주소:3000/list?q=keyword
  search: (keyword) => axios.get(`${baseUrl}/wishlist?q=${keyword}`),
}
