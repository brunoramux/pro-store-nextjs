import { cn } from "@/lib/utils";

const ProductPrice = ({ value, className}: { value: number; className?: string }) => {
    const stringValue = value.toFixed(2);
    const [whole, fraction] = stringValue.split(".");

    return ( 
        <p className={cn('text-2xl', className)}>
            <span className="text-xs align-super">$</span>
            {whole}
            <span className="text-xs align-super">.{fraction}</span>
        </p>
     );
}
 
export default ProductPrice;