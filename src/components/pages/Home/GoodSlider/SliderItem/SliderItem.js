import React from 'react'
import Classes from './SliderItem.module.scss'

let SliderItem = (props) => {
    return props.slideInformation.map(sliderItem => {
        return (
            <div className = {Classes.SliderItem}>

                <div className = {Classes.SliderItem__textBox}>
                <img
                className = {Classes.SliderItem__img}
                src = {sliderItem.icon}
                alt = {sliderItem.name}
                />
                    <h6 className = {Classes.SliderItem__title}>{sliderItem.name}</h6>
                    <p className = {Classes.SliderItem__text}>{sliderItem.description}</p>
                    <button>Viev More</button>
                </div>

            </div>
        )
    })
}

export default SliderItem