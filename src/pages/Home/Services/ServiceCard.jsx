import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

const ServiceCard = ({ service }) => {
	const navigate = useNavigate()
	const { title, price, img, _id } = service

	return (
		<div className='service-card' onClick={() => navigate(`/services/${_id}`)}>
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
