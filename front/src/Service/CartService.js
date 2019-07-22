// import Axios from 'axios';

export default class CartService {

  // static async getById(id) {
  //   return Axios.get(`/api/categorie/${id}`, {
  //     headers: {
  //       "Content-type": "application/json"
  //     }
  //   })
  //   .then(res => {
  //     return res.data;
  //   })
  //   .catch(err => {
  //     return err;
  //   });
  // }

  // static async create(data) {
  //   return Axios.post(`/api/categorie`,
  //     data, {
  //       headers: {
  //         "Content-type": "application/json"
  //       }
  //     })
  //   .then(res => {
  //     return res.data;
  //   })
  //   .catch(err => {
  //     return err;
  //   });
  // }

  // static async update(id, data) {
  //   return Axios.put(`/api/categorie/${id}`,
  //     data, {
  //       headers: {
  //         "Content-type": "application/json"
  //       }
  //     })
  //   .then(res => {
  //     return res.data;
  //   })
  //   .catch(err => {
  //     return err;
  //   });
  // }

  // static async delete(id) {
  //   return Axios.delete(`/api/categorie/${id}`, {
  //     headers: {
  //       "Content-type": "application/json"
  //     }
  //   })
  //   .then(res => {
  //     return res.data;
  //   })
  //   .catch(err => {
  //     return err;
  //   });
  // }

  static getCartContent() {
    return JSON.parse(localStorage.getItem('cart'));
  }

  static newCartItem({id, name, image, price, quantity = 1}) {
    return {
      id,
      name,
      image,
      quantity,
      price,
    }
  }

  static saveCart(cartContent) {
    localStorage.setItem('cart', JSON.stringify(cartContent));
  }
}