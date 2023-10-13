import { IFilterItem, IFilterListProps } from "../types";
import FilterListItem from "./filterListItem";
import '../styles/FilterList.css';

export const FilterList = (props: IFilterListProps) => {
    const data:IFilterItem[] = props.data;
    return(
        <div className="FilterList">
            {data.map((value, index) => {
                return(
                    <FilterListItem key={index} data={value} onSaveFilter={props.onSaveFilter}/>
                )
            })}
        </div>
    )
}

export default FilterList;