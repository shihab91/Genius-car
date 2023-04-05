import React from 'react'
import { useLoaderData, useLocation } from 'react-router-dom'
import './ServiceDetails.css'
import { AiOutlineArrowRight } from 'react-icons/ai'
import ScrollToTop from '../../shared/ScrollToTop/ScrollToTop'
const ServiceDetails = () => {
	const { img, title, description, facility } = useLoaderData()
	const location = useLocation()
	const otherServices = location.state?.titles
	const steps = [
		{
			id: 1,
			title: 'step one',
			step: 'Select the service',
		},
		{
			id: 2,
			title: 'step two',
			step: 'Enter your details',
		},
		{
			id: 3,
			title: 'step three',
			step: 'Confirm your booking',
		},
	]

	return (
		<ScrollToTop>
			<div className='service-details-wrapper'>
				<div className='container'>
					<div className='service-details-banner'>
						<h1>Service Details</h1>
						<div className='breadcrumb'>Home / Service Details</div>
					</div>
					<div className='service-details-info-container'>
						<div className='service-details-info'>
							<img src={img} alt='' />
							<h1 className='title'>{title}</h1>
							<p className='description'>{description}</p>
							<div className='facilities'>
								{facility.map(item => (
									<div className='facility-card' key={item.name}>
										<h3>{item.name}</h3>
										<p>{item.details}</p>
									</div>
								))}
							</div>
							<p className='random'>
								There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a
								passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
							</p>
							<div className='process'>
								<h1>3 Simple Steps to Process</h1>
								<p>
									First, select the services you need and add them to your cart. Next, enter your payment and contact details, making sure to review everything before submitting. Finally, once your payment is confirmed, you'll receive a confirmation
									email with the details of your order. By following these three steps, you can easily and securely process your payment for car servicing.
								</p>
								<div className='steps'>
									{steps.map(step => (
										<div className='step' key={step.id}>
											<div className='number'>
												<p>{step.id}</p>
											</div>
											<h3>{step.title}</h3>
											<p>{step.step}</p>
										</div>
									))}
								</div>
							</div>
						</div>
						<div className='others-info'>
							<div className='other-services'>
								<h1>Services</h1>
								<div className='services'>
									{otherServices.map((service, index) => (
										<div
											className='service'
											key={index}
											onClick={() => {
												handleNavigate(service.id)
											}}>
											<p>{service.title}</p>
											<AiOutlineArrowRight />
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</ScrollToTop>
	)
}

export default ServiceDetails
