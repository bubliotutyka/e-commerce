import Axios from 'axios';

export default class ProductService {

    static async getAll() {
        return Axios.get("/api/categories", {
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

    static async getById(id) {
        return Axios.get(`/api/categorie/${id}`, {
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
        return Axios.post(`/api/categorie`,
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

    static async update(id, data) {
        return Axios.put(`/api/categorie/${id}`,
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

    static async delete(id) {
        return Axios.delete(`/api/categorie/${id}`, {
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