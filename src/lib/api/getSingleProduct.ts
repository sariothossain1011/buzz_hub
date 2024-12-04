
import data from '../../../public/data/products.json'
export default async function getSingleProduct(id: any) {
    try {
        const product = data.find(product => product.id === parseInt(id)) || null;
        if (!product) {
            throw new Error(`Prodcut with id ${id} not found`);
        }
        return product;
    } catch (error) {
        console.log("get single product fail",error)
    }
}
