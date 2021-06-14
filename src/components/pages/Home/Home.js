import React, { Component } from 'react'
import Classes from './Home.module.scss';
import classNames from 'classnames'
import Slider from '../../tools/slider/Slider';
import ProductList from "../../productList/ProductList";
import Container from "../../containers/MainContainer/Container";
import GoodSlider from "./GoodSlider/GoodSlider";

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			weekKategory: 'Products of the week',
			newKategory: 'New Design'
		}
	}

	render() {
		console.log(this.props)
		return (
			<div>
				<Slider />
				<div className={Classes.home__offer}>
					<div className={[Classes.home__offerItem, Classes.home__offerItem_Watch].join(' ')}>
						<div className={Classes.home__offerBox}>
							<h3 className={Classes.home__offerTitle}>Support 24/7</h3>
							<p className={Classes.home__offerText}>Contact us 24 hours a day, 7 days a week.</p>
						</div>
					</div>
					<div className={[Classes.home__offerItem, Classes.home__offerItem_Delivery].join(' ')}>
						<div className={Classes.home__offerBox}>
							<h3 className={Classes.home__offerTitle}>Delivery</h3>
							<p className={Classes.home__offerText}>Free shipping on all US order.</p>
						</div>
					</div>
					<div className={[Classes.home__offerItem, Classes.home__offerItem_Sequre].join(' ')}>
						<div className={Classes.home__offerBox}>
							<h3 className={Classes.home__offerTitle}>100% Payment secure</h3>
							<p className={Classes.home__offerText}>We ensure secure payment with PEV.</p>
						</div>
					</div>
				</div>
				<Container>
				<ProductList
					classList = {Classes.home__WeekProducts}
					category={this.state.weekKategory}
				/>
				</Container>
				<GoodSlider/>
				<Container>
				<ProductList
				classList = {Classes.home__NewProducts}
					category={this.state.newKategory}
				/>
				</Container>
			</div>
		)
	}

}

export default Home