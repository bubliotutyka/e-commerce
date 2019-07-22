import Axios from 'axios';

export default class ProductService {
  static async getAll()
  {
    return Axios.get("/api/products", {headers : {"Content-type": "application/json"}})
      .then(res => {
        return res.data;
      })
      .catch(err => {
        return err;
      });
  }

  static async getById(id)
  {
    return Axios.get(`/api/product/${id}`)
      .then(res => {
        return res.data.data;
      })
      .catch(err => {
        return err;
      });
  }

  static async create(data)
  {
    return Axios.post(`/api/product`, data, {headers: {'Content-Type': 'multipart/form-data' }})
      .then(res => {
        return res.data;
      })
      .catch(err => {
        return err;
      });
  }

  static async update(id, data)
  {
    return Axios.put(`/api/product/${id}`, data, {headers: {'Content-Type': 'multipart/form-data' }})
      .then(res => {
        return res.data;
      })
      .catch(err => {
        return err;
      });
  }

  static async delete(id)
  {
    return Axios.delete(`/api/product/${id}`)
      .then(res => {
        return res.data;
      })
      .catch(err => {
        return err;
      });
  }

  static async visited(id)
  {
    return Axios.get(`/api/product/${id}/visit`)
      .then(res => {
        return res.data;
      })
      .catch(err => {
        return err;
      });
  }

  static async getByPopularity()
  {
    return Axios.get(`/api/products/popular`)
      .then(res => {
        return res.data;
      })
      .catch(err => {
        return err;
      });
  }

  static async updateQuantity(id, quantity)
  {
    return Axios.post(`/api/product/${id}/quantity`, { quantity }, {headers: {'Content-Type': "application/json" }})
      .then(res => {
        return res.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
}