import React, { useEffect, useState } from 'react'
import './Services.css'
import ServiceCard from './ServiceCard'
const Services = () => {
	const [services, setServices] = useState([])
	useEffect(() => {
		fetch('./services.json')
			.then(res => res.json())
			.then(data => setServices(data))
	}, [])

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
						<ServiceCard service={service} key={service._id} />
					))}
				</div>
			</div>
		</div>
	)
}

export default Services
