import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider'

const Orders = () => {
	const [orders, setOrders] = useState([])
	const { user } = useContext(AuthContext)
	const url = `http://localhost:5000/orders?email=${user?.email}`

	useEffect(() => {
		fetch(url)
			.then(res => res.json())
			.then(data => setOrders(data))
	}, [user?.email])
	return <div>this is orders</div>
}

export default Orders
