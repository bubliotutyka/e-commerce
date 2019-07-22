import Axios from 'axios';

export default class SubCategorieService {

    static async getAll() {
        return Axios.get("/api/subcategories", {
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
        return Axios.get(`/api/subcategorie/${id}`, {
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
        
        return Axios.post(`/api/subcategorie`,
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
        return Axios.delete(`/api/subcategorie/${id}`, {
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