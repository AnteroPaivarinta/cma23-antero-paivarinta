import { IFilterItem, IFilterListItemProps } from "../types";
import '../styles/FilterListItem.css';


export const FilterItem = (props: IFilterListItemProps) => {
    const item: IFilterItem = props.data;
    return (
        <div onClick={() => props.onSaveFilter(item.name)} className="FilterListItem">
            {item.name} 
        </div>
    )
}

export default FilterItem;