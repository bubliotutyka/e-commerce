import Axios from 'axios';

export default class CheckoutService {
  
  static async getDelivery(data) {
      return Axios.post(`/api/deliveryOption`,
              data, {
                  headers: {
                      "Content-type": "application/json"
                  }
              })
          .then(res => {
              return res.data;
          })
          .catch(err => {
              return err;
          });
  }

  static async getPackage() {
      return Axios.get(`/api/packageOption`,
               {
                  headers: {
                      "Content-type": "application/json"
                  }
              })
          .then(res => {
              return res.data;
          })
          .catch(err => {
              return err;
          });
  }


}
