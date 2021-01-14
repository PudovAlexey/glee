import React from 'react'
import Classes from './mainSlide.module.scss'

function mainSlide(props) {

	const sliderPositions = {
		active: {
			transform: 'translateX(0%)',
			transition: 'transform ease 4s'
		},

		prevPosition: {
			transform: 'translateX(-300%)',
			position: 'absolute',
			transition: 'transform ease 4s'
		},

		nextPosition: {
			transform: 'translateX(+300%)',
			position: 'absolute',
			transition: 'transform ease 4s'
		},
	}

return (
	<div style = {props.sliderItem.isPosition == 'active' ? sliderPositions.active : (props.sliderItem.isPosition == 'prev' ? sliderPositions.prevPosition : sliderPositions.nextPosition)} className = {Classes.mainSlide__item}>
		<div className = {Classes.mainSlide__textbox}>
			<h1 className = {Classes.mainSlide__title}>{props.sliderItem.title}</h1>
			<p className = {Classes.mainSlide__text}>{props.sliderItem.text}</p>
			<button className = {Classes.mainSlide__button}>
			<span className = {Classes.mainSlide__buttontext}>{props.sliderItem.actionHandler}</span>
			<span className = {Classes.mainSlide__buttonarrow}>&rarr;</span>
			</button>
		</div>
		<div className = {Classes.mainSlide__itembox}>
			<img src={props.sliderItem.showPicture} alt={props.sliderItem.altPicture}/>
		</div>
	</div>
)
}

export default mainSlide