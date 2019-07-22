import Axios from 'axios';

export default class SpecService {
  static async getAll() {
      return Axios.get("/api/specs", {
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

  static async create(data) {

      return Axios.post(`/api/specs`,
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
  static async getByIdCategori(id) {
      return Axios.get(`/api/categorie/${id}/specs`, {
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
  static async linkSpec(categorie, spec){
    return Axios.post(`/link/${categorie}/${spec}`, {
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
