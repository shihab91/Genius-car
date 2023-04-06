import React, { useContext } from 'react'
import { useLoaderData } from 'react-router-dom'
import PageBanner from '../shared/PageBanner/PageBanner'
import ScrollToTop from '../shared/ScrollToTop/ScrollToTop'
import './Checkout.css'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider'
import { Toaster, toast } from 'react-hot-toast'
const Checkout = () => {
	const { _id, price, title } = useLoaderData()
	const { user } = useContext(AuthContext)
	const handlePlaceOrder = e => {
		e.preventDefault()
		const form = e.target
		const name = `${form.firstName.value} ${form.lastName.value}`
		const phone = form.phone.value
		const email = form.email.value || 'unregistered'
		const message = form.message.value
		const order = {
			service: _id,
			serviceName: title,
			price,
			customer: name,
			email,
			phone,
			message,
		}
		if (phone.length < 10) {
			alert('phone numbers should be 10 characters or longer')
		} else {
			fetch('http://localhost:5000/orders', {
				method: 'POST',
				headers: {
					'content-type': 'application/json',
				},
				body: JSON.stringify(order),
			})
				.then(res => res.json())
				.then(data => {
					if (data.acknowledged) {
						toast.success('Successfully ordered!')
						form.reset()
					}
				})
				.catch(er => console.log(er.message))
		}
	}
	return (
		<ScrollToTop>
			<Toaster position='top-center' reverseOrder={false} />
			<div className='checkout-wrapper'>
				<div className='container'>
					<PageBanner title='Checkout' />
					<div className='checkout-container'>
						<div className='form-container'>
							<form onSubmit={handlePlaceOrder}>
								<div className='inputs'>
									<input name='firstName' type='text' placeholder='First Name' required />
									<input name='lastName' type='text' placeholder='Last Name' required />
									<input name='phone' type='number' placeholder='Your Phone' required />
									<input name='email' type='email' placeholder='Your Email' defaultValue={user?.email} readOnly />
								</div>
								<textarea name='message' id='' cols='30' rows='10' placeholder='Your Message'></textarea>
								<button className='btn-fill-orange' type='submit'>
									Order Confirm
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</ScrollToTop>
	)
}

export default Checkout
