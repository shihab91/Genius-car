import React from 'react'
import logo from '../../../assets/logo.svg'
import { BsHandbag, BsSearchHeart, BsXLg, BsList } from 'react-icons/bs'
import './Header.css'
import { Link } from 'react-router-dom'
const Header = () => {
	return (
		<header>
			<div className='container'>
				<div className='header-container'>
					<div className='logo'>
						<img src={logo} alt='' />
					</div>
					<div className='menu-cross'>
						<div className='icon icon-menu'>
							<BsList />
						</div>
						<div className='icon icon-cross'>
							<BsXLg />
						</div>
					</div>
					<div className='header-links'>
						<ul>
							<li>
								<Link to='/'>Home</Link>
							</li>
							<li>
								<Link to='/about'>About</Link>
							</li>
							<li>
								<Link to='/services'>Services</Link>
							</li>
							<li>
								<Link to='/blog'>Blog</Link>
							</li>
							<li>
								<Link to='/contact'>Contact</Link>
							</li>
						</ul>
					</div>
					<div className='handbag-search-appointment'>
						<div className='icon'>
							<BsHandbag />
						</div>
						<div className='icon'>
							<BsSearchHeart />
						</div>
						<button>Appointment</button>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
