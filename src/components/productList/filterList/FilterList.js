import React from "react";
import Classes from "./FilterList.module.scss";

function FilterList(props) {
    return (
        props.filterList.filteredItems.map(filterItem => {
            console.log('check', filterItem)
            return <button
                style={props.category == 'Products of the week' && filterItem === props.filterList.isActiveFilterWeek || props.category == 'New Design' && filterItem === props.filterList.isActiveFilterNew
                    ? { color: '#000' }
                    :
                    { color: '#8b8b8b' }}
                className={Classes.filterButton}
                onClick={() => props.filterClickHandler(filterItem, props.category)}>
                {filterItem}

            </button>
        })
    )
}

export default FilterList