import React, {Component} from 'react';
import Classes from './Header.module.scss';
import Menu from './Menu/Menu'
import Search from '../tools/Search/Search'
import Likes from '../tools/Likes/Likes'
import Cart from '../tools/Cart/Cart'
import PopupMenu from './PopupMenu/PopupMenu'
import Logo from "../Logo/Logo";
import {NavLink, useRouteMatch} from 'react-router-dom'

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			menuList: [
				{Page: 'Home', Link: '/', id: 1, dropDownList: ["Products of the week", "New Design", "Our Insights & Articles"], isActiveDropdown: false},
				{Page: 'About', Link: 'About', id: 2 ,dropDownList: [], isActiveDropdown: false},
				{Page: 'Services', Link: 'Services', id: 3, dropDownList: [], isActiveDropdown: false},
				{Page: 'Pages', Link: 'Pages', id: 4, dropDownList: ["Fonsectetur adipisicing  eiusmod ", "Fonsectetur adipisicing elit,", "Fsectetur adipisicing tempor incididunt ", "vonsectetur adipisicing elit"], isActiveDropdown: false},
				{Page: 'News', Link: 'News', id: 5, dropDownList: [], isActiveDropdown: false},
				{Page: 'Contact', Link: 'Contact', id: 6, dropDownList: [], isActiveDropdown: false},
			]
		}
	}


	onClickMenuDropdown = (clickedPage) => {
		let dropItem = this.state.menuList.map(itemDrop => {
			return clickedPage == itemDrop.Page && itemDrop.dropDownList.length ? {...itemDrop, isActiveDropdown: !itemDrop.isActiveDropdown} : {...itemDrop, isActiveDropdown: itemDrop.isActiveDropdown = false};
		})


		this.setState((state) => {
			return {menuList: dropItem}
		});
	}



	render() {

		console.log(this.props)

		return(
			<header className={Classes.header}>

			<NavLink 
			activeClassName={''} 
			to = {this.state.menuList[0].Link}>
				<Logo/>
			</NavLink>
			<Menu
			menuList = {this.state.menuList}
			onClickMenuDropdown = {this.onClickMenuDropdown}
			/>

			<div className={Classes.header__tools}>
				<Search/>
				<div className={Classes.header__items}>
				<Likes/>
				<Cart/>
				</div>
				<PopupMenu/>	
			</div>
		</header>
		)
	}
}

export default Header;