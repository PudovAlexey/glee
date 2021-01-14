import React from 'react';
import Classes from "./Container.module.scss";

function Container(props) {

	return(

		<div className={Classes.Container}>
			{props.children}
		</div>
	)
}

export default Container