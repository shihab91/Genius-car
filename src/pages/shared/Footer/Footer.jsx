import React from 'react'
import './Footer.css'
import logo from '../../../assets/footer-logo.svg'
import { AiOutlineGoogle, AiOutlineTwitter, AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai'

const Footer = () => {
	return (
		<footer>
			<div className='container'>
				<div className='footer-container'>
					<div className='info'>
						<img src={logo} alt='' />
						<p>Edwin Diaz is a software and web technologies engineer, a life coach trainer who is also a serial .</p>
						<div className='social-icons'>
							<div className='icon'>
								<AiOutlineGoogle />
							</div>
							<div className='icon'>
								<AiOutlineTwitter />
							</div>
							<div className='icon'>
								<AiOutlineInstagram />
							</div>
							<div className='icon'>
								<AiOutlineLinkedin />
							</div>
						</div>
					</div>
					<div className='footer-link-lists about'>
						<h2>About</h2>
						<ul>
							<li>Home</li>
							<li>Service</li>
							<li>Contact</li>
						</ul>
					</div>
					<div className='footer-link-lists company'>
						<h2>Company</h2>
						<ul>
							<li>Why Car Doctor</li>
							<li>About</li>
						</ul>
					</div>
					<div className='footer-link-lists support'>
						<h2>Support</h2>
						<ul>
							<li>Support Center</li>
							<li>Feedback</li>
							<li>accessibility</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
