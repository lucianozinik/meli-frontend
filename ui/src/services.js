import axios from 'axios';
import CONSTANTS from './config/constants';

export const getProducts = async search => {
    console.log(CONSTANTS.API_URL)
    const url = CONSTANTS.API_URL + '?=' + search;
    try {
        return await axios.get(url);
    } catch (e) {
        return e.response;
    }
};

export const getProductById = async id => {
    const url = CONSTANTS.API_URL + id;
    try {
        return await axios.get(url);
    } catch (e) {
        return e.response;
    }
};