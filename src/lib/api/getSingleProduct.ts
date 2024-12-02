
import data from '../../../public/data/products.json'
export default async function getSingleProduct(id: number) {
    try {
        const product = data.find(product => product.id == id);
        if (!product) {
            throw new Error(`Prodcut with id ${id} not found`);
        }
        return product;
    } catch (error) {
        console.log(error)
    }
}
