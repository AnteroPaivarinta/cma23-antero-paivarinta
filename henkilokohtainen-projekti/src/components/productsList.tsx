import { IProduct, IProductsListProps } from "../types";
import { ProductsListItem } from "./productsListItem";


export const ProductsList = (props: IProductsListProps) => {
    const data: IProduct[] = props.data;
    return (
        <div className="ProductList">
            {data.map((value: IProduct, index:number) => 
                (<ProductsListItem key={index} data={value}  addToCart={props.addToCart} onItemClick={props.onItemClick}/>))
            }
        </div>
    )
}

export default ProductsList;