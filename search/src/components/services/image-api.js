import axios from 'axios';

const URL = "https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=";
const PAGE = "&page=";
const KEY = "&per_page=4&key=13241537-06d8871706b8937518ecf25ca";
export const ImageAxiosApi = (query, page) => {
    console.log('object', URL + query + PAGE + page + KEY);
    return axios.get(URL + query + PAGE + page + KEY);
}


