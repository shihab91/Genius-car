import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'

const ServiceCard = ({ service }) => {
	const { title, price, img } = service

	return (
		<div className='service-card'>
			<img src={img} alt='' />
			<h2>{title}</h2>
			<div className='price'>
				<h3>Price: ${price}</h3>
				<AiOutlineArrowRight />
			</div>
		</div>
	)
}

export default ServiceCard
