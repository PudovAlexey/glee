import React, {useState} from 'react'
import Classes from './footer.module.scss'
import Logo from '../Logo/Logo'

function Footer() {
	const [inputValue, setInputValue] = useState('Email Address')

	return (
		<div className = {Classes.footer}>
			<div className = {Classes.footer__top}>
				<ul className = {Classes.footer__list}>
					<li className = {Classes.footer__title}><Logo/></li>
					<li>
						<div>
							<address className = {Classes.footer__address}>
								<span className = {Classes.footer__addressSign}>ADDRESS: 4772 Wines Lane</span>
								<span className = {Classes.footer__addressSign}>Houston, TX 77032</span>
						</address>
							<div>
								<a className = {Classes.footer__contacts} href='tel: +832-347-5843'><span className = {Classes.footer__contactsSign}>Telephone:</span> +832-347-5843</a>
								<a className = {Classes.footer__contacts} href='mailto: contact@Glee.com'><span className = {Classes.footer__contactsSign}>Email:</span> contact@Glee.com</a>
							</div>
						</div>
					</li>
				</ul>

				<ul className = {Classes.footer__list}>
					<li className = {Classes.footer__title}><h3>Services</h3></li>
					<li className = {Classes.footer__item}>About us</li>
					<li className = {Classes.footer__item}>Return Policy</li>
					<li className = {Classes.footer__item}>Our Blog</li>
					<li className = {Classes.footer__item}>Contact Us</li>
					<li className = {Classes.footer__item}>Terms & Condition</li>
				</ul>

				<ul className = {Classes.footer__list}>
					<li className = {Classes.footer__title}><h3>Account</h3></li>
					<li className = {Classes.footer__item}>Your Accaunt</li>
					<li className = {Classes.footer__item}>Checkout</li>
					<li className = {Classes.footer__item}>Login</li>
					<li className = {Classes.footer__item}>Register</li>
				</ul>

				<ul className = {Classes.footer__list}>
					<li className = {Classes.footer__title}><h3>newsletter</h3></li>
					<li className = {Classes.footer__text}>
						Subscribe by our newsletter and get
						update protidin.
					</li>
					<li className = {Classes.footer__list}>
						<input  
						className={Classes.footer__input} 
						type = 'text' 
						value = {inputValue}
						onChange={(event) => setInputValue(event.target.value)}
						/>
						<button className={Classes.footer__button} >Suscribe</button>
					</li>
					<li></li>
				</ul>
			</div>
			<div className = {Classes.footer__bottom}>
				<div className = {Classes.footer__requisites}>
					<span>
						©2020 CopyRight Example. All rights reserved. 
					</span>
				</div>
				<div className = {Classes.footer__menu}>
					<div className = {Classes.footer__menuItem}>Home</div>
					<div className = {Classes.footer__menuItem}>About</div>
					<div className = {Classes.footer__menuItem}>Blog</div>
					<div className = {Classes.footer__menuItem}>Contact</div>
				</div>
			</div>
		</div>
	)
}



export default Footer