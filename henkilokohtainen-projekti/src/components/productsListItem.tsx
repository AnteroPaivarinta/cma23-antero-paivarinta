import { IProduct, IProductProps } from "../types";
import '../styles/ProductListItem.css';
import Button from 'react-bootstrap/Button';

export const ProductsListItem = (props: IProductProps) => {
    const product: IProduct = props.data;
    return(
        <div className="ProductListItem">
            {product.name} {product.price}$ <Button onClick={() => props.addToCart(product)} size="sm" variant="success">Add to Cart</Button>
        </div>
    )
}