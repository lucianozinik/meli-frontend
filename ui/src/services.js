import axios from 'axios';
import { mock } from './mock';
export const getProducts = async (search) => {
    console.log("get products",search)
    const url = search
    try {
        //const list = await axios.get(url);
        
        return mock;

    }catch(e){
        console.log("error ",e.response)
    }

}