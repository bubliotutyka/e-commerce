import Axios from 'axios';

export default class PromotionService {
  static async getAll()
  {
    return Axios.get("/api/promo", {headers : {"Content-type": "application/json"}})
      .then(res => {
        return res.data;
      })
      .catch(err => {
        return err;
      });
  }

  static async getById(id)
  {
    return Axios.get(`/api/promo/${id}`)
      .then(res => {
        return res.data.data;
      })
      .catch(err => {
        return err;
      });
  }

  static async create(data)
  {
    return Axios.post(`/api/promo`, data)
      .then(res => {
        return res.data;
      })
      .catch(err => {
        return err;
      });
  }

  static async update(id, data)
  {
    return Axios.put(`/api/promo/${id}`, data)
      .then(res => {
        return res.data;
      })
      .catch(err => {
        return err;
      });
  }

  static async delete(id)
  {
    return Axios.delete(`/api/promo/${id}`)
      .then(res => {
        return res.data;
      })
      .catch(err => {
        return err;
      });
  }
}