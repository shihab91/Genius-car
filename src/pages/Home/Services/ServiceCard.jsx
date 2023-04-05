import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import useUserNavigate from '../../../hooks/useUserNavigate'

const ServiceCard = ({ service, services }) => {
	const { title, price, img, _id } = service
	const handleNavigate = useUserNavigate(services)
	return (
		<div className='service-card' onClick={() => handleNavigate(_id)}>
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
