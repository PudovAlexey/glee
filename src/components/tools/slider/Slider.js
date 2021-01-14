import React, { useEffect, useState, useRef, useLayoutEffect } from 'react';
import Classes from './slider.module.scss'
import MainSlide from './mainSlide/mainSlide'

function Slider(props) {


	const [slider, setSlider] = useState(
		{
			mainSlider: {
				slidesToShow: 3,
				slidesToScroll: 1,
				dots: true,
				arrows: false,
				sliderItems: [
					{ id: 1, title: 'Smart and trendy', text: '1 Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor  incididunt', showPicture: '../images/items/slider-item-1.png', altPicture: 'sofa', actionHandler: 'Shop Now', isPosition: 'active'},
					{ id: 2, title: 'Smart and trendy', text: '2 Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt', showPicture: '../images/items/slider-item-1.png', altPicture: 'sofa', actionHandler: 'Shop Now', isPosition:  'prev'},
					{ id: 3, title: 'Smart and trendy', text: '3 Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt', showPicture: '../images/items/slider-item-1.png', altPicture: 'sofa', actionHandler: 'Shop Now', isPosition:  'prev'},
					{ id: 4, title: 'Smart and trendy', text: '4 Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt', showPicture: '../images/items/slider-item-1.png', altPicture: 'sofa', actionHandler: 'Shop Now', isPosition:  'prev'},
					{ id: 5, title: 'Smart and trendy', text: '5 Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt', showPicture: '../images/items/slider-item-1.png', altPicture: 'sofa', actionHandler: 'Shop Now', isPosition:  'prev'},
					{ id: 6, title: 'Smart and trendy', text: '6 Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt', showPicture: '../images/items/slider-item-1.png', altPicture: 'sofa', actionHandler: 'Shop Now', isPosition:  'prev'},
				]
			},
			shopSlider: {}
		}
	)

	// useEffect(() => {
	// 	slider.mainSlider.slidesToShow ? 
	// })


	let svitchSlideDots = (slide) => {
		let showSliders = slider.mainSlider.slidesToShow
		let scrollSliders = slider.mainSlider.slidesToScroll

		let sliderPosition = slider.mainSlider.sliderItems.map((sliderItem, slideIndex, slideArr) => {
			if (sliderItem.id >= slide.id && sliderItem.id <= slide.id + showSliders - 1) {
				return {...sliderItem, isPosition: 'active'}
			} else if (sliderItem.id > slideArr.length - showSliders && sliderItem.id <= slideArr.length) {
				return {...sliderItem, isPosition: 'active'}
			} else if (sliderItem.id < slide.id) {
				return {...sliderItem, isPosition: 'prev'}
			} else if (sliderItem.length <= slide.id) {
			} else {
				return {...sliderItem, isPosition: 'next'}
			}
		})



			const newSlider = JSON.parse(JSON.stringify(slider))
			newSlider.mainSlider.sliderItems = sliderPosition
			setSlider(newSlider)
	}


	let styles = {
		isActiveDot: {
			backgroundColor: 'rgba(255, 255, 255, 1)'
		}
	}

	let sliderDots = slider.mainSlider.sliderItems.map(sliderDot => {
		return <li
			style={sliderDot.isPosition == 'active' ? styles.isActiveDot : null}
			key={sliderDot.id}
			className={Classes.slick__dot}
			onClick={() => svitchSlideDots(sliderDot)}
		>{sliderDot.id}</li>
	})

	return (
		<div className={Classes.slick__wrap}>
			<div className={Classes.slick__track}>
				{slider.mainSlider.sliderItems.map(sliderItem => {
					return  <MainSlide
						sliderItem={sliderItem}
					/>
				})}
			</div>
			<ul className={Classes.slick__dots}>
				{slider.mainSlider.dots ? sliderDots : null}
			</ul>
		</div>
	)

}

export default Slider