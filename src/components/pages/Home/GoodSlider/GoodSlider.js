import React, { useEffect } from "react";
import Classes from "./GoodSlider.module.scss";
import SliderItem from  './SliderItem/SliderItem'
import {showInSlider} from "../../../../redux/actions/good";
import { connect } from "react-redux";

function GoodSlider(props) {

    useEffect(() => {
        props.showInSlider()
    }, [])
    return (
        <div className={Classes.slider}>
            <SliderItem
            slideInformation = {props.goods.goods.bottomSlider}
            />
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
        showInSlider: () => dispatch(showInSlider()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GoodSlider)