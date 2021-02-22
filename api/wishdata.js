import axios from 'axios'
import { baseUrl } from './_env'

export default{
  // http:// 내ec2주소:3000/list
  list: () => axios.get(`${baseUrl}/wishdata`),
  // http:// 내ec2주소:3000/list/id
  get: (id) => axios.get(`${baseUrl}/wishdata/${id}`),
  // http:// 내ec2주소:3000/list?q=keyword
  search: (keyword) => axios.get(`${baseUrl}/wishdata?q=${keyword}`),
}
