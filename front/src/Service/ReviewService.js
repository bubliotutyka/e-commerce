import Axios from 'axios';

export default class ReviewService {
  static async create(id, review)
  {
    return Axios.post(`/api/product/${id}/review`, review, {headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${localStorage.eToken}`,
      }})
      .then(res => {
        return res.data;
      })
      .catch(err => {
        console.log(err);
      });
  }

  static async getAllByProductId(id)
  {
    return Axios.get(`/api/product/${id}/review`, {headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${localStorage.eToken}`,
      }})
      .then(res => {
        return res.data;
      })
      .catch(err => {
        console.log(err);
      });
  }

  static async upDown(id, data)
  {
    return Axios.post(`/api/review/${id}/poce`, data, {headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${localStorage.eToken}`,
      }})
      .then(res => {
        return res.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
}