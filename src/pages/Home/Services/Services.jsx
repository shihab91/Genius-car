import React, { useEffect, useState } from 'react'
import './Services.css'
import ServiceCard from './ServiceCard'
import useServices from '../../../hooks/useServices'
const Services = () => {
	const services = useServices()

	return (
		<div className='services-wrapper'>
			<div className='container'>
				<div className='services-info'>
					<h3>Services</h3>
					<h1>Our Service Area</h1>
					<p>the majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable. </p>
				</div>
				<div className='service-card-container'>
					{services.map(service => (
						<ServiceCard service={service} key={service._id} services={services} />
					))}
				</div>
			</div>
		</div>
	)
}

export default Services
