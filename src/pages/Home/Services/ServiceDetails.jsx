import React from 'react'
import { useLoaderData } from 'react-router-dom'
import serviceDetailsBannerImg from '../../../assets/images/services/4.jpg'
import './ServiceDetails.css'
const ServiceDetails = () => {
	const { img, title } = useLoaderData()

	return (
		<div className='service-details-wrapper'>
			<div className='container'>
				<div className='service-details-banner'>
					<h1>Service Details</h1>
					<div className='breadcrumb'>Home/Service Details</div>
				</div>
				<div className='service-details-info-container'>
					<div className='service-details-info'>
						<img src={img} alt='' />
						<h1 className='title'>{title}</h1>
					</div>
					<div className='others-info'>others something</div>
				</div>
			</div>
		</div>
	)
}

export default ServiceDetails
