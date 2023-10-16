export interface IFilterItem {
    name: string,
}

export interface IFilterListProps {
    data: IFilterItem[];
    onSaveFilter: (filter: string) => void;
}

export interface IFilterListItemProps{
    data: IFilterItem;
    onSaveFilter: (filter: string) => void;
}

export interface IProductsListProps {
    addToCart: (item: IProduct) => void;
    data: IProduct[],
}

export interface IProductProps {
    data: IProduct,
    addToCart: (item: IProduct) => void;
}

export interface IProduct {
    id: string,
    name: string,
    price: number,
    picture?: any,
    category: string,
}

export interface IMainProps {
    value?: string,
}

