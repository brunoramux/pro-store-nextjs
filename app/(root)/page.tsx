import ProductList from "@/components/shared/product/product-list";

import { getLatestProducts } from "@/lib/actions/product.actions";
import { OutputProductSchema } from "@/lib/validator";
import { ProductOutput } from "@/types";

const Homepage = async () => {
    const results = await getLatestProducts()
    const latestProducts: ProductOutput[] = results.map(result => OutputProductSchema.parse(result));
     
    return (
        <div>
            <h2>Latest Products</h2>
            <ProductList data={latestProducts} title="Latest Products" />
        </div>
    );
}   
 
export default Homepage;