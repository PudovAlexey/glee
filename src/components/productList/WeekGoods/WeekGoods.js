import React from "react";
import Classes from './WeekGoods.module.scss'

function WeekGoods(props) {

    return props.goodsList.map(weekProduct => {
        return (
            <div className = {weekProduct.name === 'Kitchen Chair' ? Classes.week_kitchen : Classes.week}>
                <img 
                src={weekProduct.icon}
                alt={weekProduct.name} 
                className = {Classes.week__Img}/>
                <div className = {Classes.week__textBox}>
                <h6 className = {Classes.week__Title}>{weekProduct.name}</h6>
                <span className = {Classes.week__Price}>{`$${weekProduct.currentPrice.toFixed(2)}`}</span>
                </div>
            </div>)
    })
}

export default WeekGoods