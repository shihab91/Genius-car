import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import useUserNavigate from '../../../hooks/useUserNavigate'

const ServiceCard = ({ service, services }) => {
	const navigate = useNavigate()
	const { title, price, img, _id } = service
	// const handleNavigate = id => {
	// 	const titles = services
	// 		.filter(service => service._id !== id)
	// 		.map(item => {
	// 			return {
	// 				id: item._id,
	// 				title: item.title,
	// 			}
	// 		})
	// 	navigate(`/services/${id}`, { state: { titles } })
	// }
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
