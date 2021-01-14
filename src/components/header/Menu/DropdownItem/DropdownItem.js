import React from "react";
import Classes from './DropdownItem.module.scss'


function DropdownItem(props) {

	let dropItem = props.menuList.map((item) => {
		return (
			<li className={Classes.dropdown__item} key={item.toString()}>{item}</li>
		)
	})

	return (
		<div className={Classes.dropdown__wrapper}>
			<ul className={Classes.dropdown__list}>
				{dropItem}
			</ul>
		</div>
	)
}

export default DropdownItem