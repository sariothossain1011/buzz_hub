
import data from '../../../public/data/products.json'
export async function getAllProducts() {
    try {
        const res = await data;
       
        return res;
    } catch (error) {
        console.log("Products data fetch fail")
    }
}
