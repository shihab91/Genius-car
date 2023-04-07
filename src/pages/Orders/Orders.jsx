import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider'
import PageBanner from '../shared/PageBanner/PageBanner'
import { BsXLg } from 'react-icons/bs'
import leftArrow from '../../assets/icons/left-arrow.png'
import deleteIcon from '../../assets/icons/delete.png'
import './Orders.css'
import { useNavigate } from 'react-router-dom'
const Orders = () => {
	const [orders, setOrders] = useState([])
	const { user } = useContext(AuthContext)
	const navigate = useNavigate()
	const url = `http://localhost:5000/orders?email=${user?.email}`

	useEffect(() => {
		fetch(url)
			.then(res => res.json())
			.then(data => setOrders(data))
	}, [user?.email])
	const handleDelete = id => {
		const proceed = window.confirm('Are you sure, you want to cancel this order?')
		if (proceed) {
			fetch(`http://localhost:5000/orders/${id}`, {
				method: 'DELETE',
			})
				.then(res => res.json())
				.then(data => console.log(data))
		}
	}
	return (
		<div className='orders-wrapper'>
			<div className='container'>
				<PageBanner title={'Cart details'} />
				<div className='orders'>
					{orders.map(order => (
						<div className='order' key={order._id}>
							<div className='order-img-name'>
								<BsXLg onClick={() => handleDelete(order._id)} />
								<img src={order.img} alt='' />
								<div>
									<h3>{order.serviceName}</h3>
									<p>color : Orange</p>
								</div>
							</div>
							<h4>{order.price}</h4>
							<h4>{order.date}</h4>
							<button className=' pending' disabled={true}>
								pending
							</button>
						</div>
					))}
				</div>
				<div className='others'>
					<button onClick={() => navigate('/')}>
						<img src={leftArrow} alt='' />
						Continue Shopping
					</button>
					<button>
						<img src={deleteIcon} alt='' />
						Clear Shopping Cart
					</button>
				</div>
			</div>
		</div>
	)
}

export default Orders
