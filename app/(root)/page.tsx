import ProductList from "@/components/shared/product/product-list";
import sampleData from "@/db/sample-data";

const Homepage = () => {
    return (
        <div>
            <h2>Latest Products</h2>
            <ProductList title="teste" data={sampleData.products} />
        </div>
    );
}
 
export default Homepage;