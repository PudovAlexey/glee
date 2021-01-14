import React, { Component } from 'react'
import Classes from './Home.module.scss';
import Slider from '../../tools/slider/Slider';
import classNames from 'classnames'

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}

	render() {
		console.log(this.props)
		return (
			<div>
				<Slider />
				<div className={Classes.home__offer}>
					<div className={Classes.home__offerItem}>
						<div className={Classes.home__offerBox}></div>
						<h3 className={Classes.home__offerTitle}>Support 24/7</h3>
						<p className={Classes.home__offerText}>Support 24/7</p>
					</div>
					<div className={Classes.home__offerItem}>
						<div className={Classes.home__offerBox}></div>
						<h3 className={Classes.home__offerTitle}>Delivery</h3>
						<p className={Classes.home__offerText}>Support 24/7</p>
					</div>
					<div className={Classes.home__offerItem}>
						<div className={Classes.home__offerBox}></div>
						<h3 className={Classes.home__offerTitle}>100% Payment secure</h3>
						<p className={Classes.home__offerText}>Support 24/7</p>
					</div>
				</div>
			</div>
		)
	}

}

export default Home