import React, { useRef, useState } from 'react'
import logo from '../../../assets/logo.svg'
import { BsHandbag, BsSearchHeart, BsXLg, BsList } from 'react-icons/bs'
import './Header.css'
import { Link } from 'react-router-dom'
const Header = () => {
	const [isActive, setIsActive] = useState(false)
	const inputRef = useRef(null)
	return (
		<header>
			<div className='container'>
				<div className='header-container'>
					<div className='logo'>
						<img src={logo} alt='' />
					</div>
					<div className='menu-cross'>
						{!isActive && (
							<div className='icon icon-menu' onClick={() => setIsActive(!isActive)}>
								<BsList />
							</div>
						)}
						{isActive && (
							<div className='icon icon-cross' onClick={() => setIsActive(!isActive)}>
								<BsXLg />
							</div>
						)}
					</div>
					<div className={`header-links ${isActive ? 'active' : ''}`}>
						<ul>
							<li onClick={() => setIsActive(!isActive)}>
								<Link to='/'>Home</Link>
							</li>
							<li onClick={() => setIsActive(!isActive)}>
								<Link to='/about'>About</Link>
							</li>
							<li onClick={() => setIsActive(!isActive)}>
								<Link to='/services'>Services</Link>
							</li>
							<li onClick={() => setIsActive(!isActive)}>
								<Link to='/blog'>Blog</Link>
							</li>
							<li onClick={() => setIsActive(!isActive)}>
								<Link to='/contact'>Contact</Link>
							</li>
							<li onClick={() => setIsActive(!isActive)}>
								<Link to='/login'>Login</Link>
							</li>
						</ul>
					</div>
					<div className='handbag-search-appointment'>
						<div className='icon'>
							<BsHandbag />
						</div>
						<div className='icon search'>
							<input type='text' placeholder='Search....' role='search' ref={inputRef} />
							<BsSearchHeart onClick={() => inputRef.current.focus()} />
						</div>
						<button className='btn-outline-orange'>Appointment</button>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
