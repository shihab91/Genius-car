import React from 'react'
import './About.css'
import aboutImg from '../../../assets/images/about_us/about.png'
const About = () => {
	return (
		<div className='about-wrapper'>
			<div className='container'>
				<div className='about-container'>
					<img src={aboutImg} alt='' className='about-img' />
					<div className='about-info'>
						<h3>About Us</h3>
						<h1>We are qualified & of experience in this field</h1>
						<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
						<p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
						<button className='btn-fill-orange'>Get More Info</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About
