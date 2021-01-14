import React from "react";
import Classes from './Menu.module.scss'
import {NavLink, useRouteMatch} from 'react-router-dom'
import classNames from 'classnames';
import DropdownItem from "./DropdownItem/DropdownItem";

function Menu(props) {

	return (
		<ul className={Classes.menu}>
		{props.menuList.map(menuitem => {
			return <NavLink 
			className={Classes.menu__link}
			exact
			key={menuitem.id} 
			to={menuitem.Link}
			onClick={() => props.onClickMenuDropdown(menuitem.Page)}
			>
				{menuitem.dropDownList.length ? `${menuitem.Page} +` : menuitem.Page}
				{menuitem.isActiveDropdown ? <DropdownItem menuList = {menuitem.dropDownList} /> : null}
			</NavLink>
		})}
		</ul >
	)
}

export default Menu