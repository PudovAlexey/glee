import React, { useEffect } from 'react'
import Classes from './ProductList.module.scss';
import { connect } from "react-redux";
import { showGoods, filterClickHandler } from "../../redux/actions/good";
import NewDesign from './NewDesign/NewDesign'
import WeekGoods from "./WeekGoods/WeekGoods";
import FilterList from "./filterList/FilterList";

function ProductList(props) {

    useEffect(() => {
        props.showGoods(props.category)
    }, [])

    return (
        <div>
            <h2 className={Classes.shop__title}>{props.category}</h2>
            <div className={Classes.shop__filterBox}>

                <FilterList
                    className={Classes.shop__filterBox}
                    filterList={props.goods.goods}
                    category={props.category}
                    filterClickHandler={props.filterClickHandler}
                />

            </div>
            {console.log('week', props.goods.goods.weekGoods)}

            <div className={props.category === 'Products of the week' ? Classes.shop__weekItems : Classes.shop__newItems}>
                {props.category === 'Products of the week' ?
                    <WeekGoods
                        goodsList={props.goods.goods.weekGoods}
                    />
                    :
                    <NewDesign
                        goodsList={props.goods.goods.newGoods} />}
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        goods: state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        showGoods: category => dispatch(showGoods(category)),
        filterClickHandler: (filterItem, category) => dispatch(filterClickHandler(filterItem, category))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)