import Axios from 'axios';

export default class SearchService {
    static async search(keyword){
        return Axios.get('/api/search/'+keyword)
        .then(res => {
            return(res);
        })
        .catch(err => {
            return({err: err})
        })
    }
    static async searchByCategory(obj){
        return Axios.get('/api/search/categorie/'+obj.categorie_id+'/'+obj.keyword)
        .then(res => {
            return(res)
        })
        .catch(err => {
            return({err: err})
        })
    }
}