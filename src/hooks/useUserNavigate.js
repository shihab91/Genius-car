import React from 'react'
import { useNavigate } from 'react-router-dom'

const useUserNavigate = services => {
	const navigate = useNavigate()
	const handleNavigate = id => {
		const titles = services
			.filter(service => service._id !== id)
			.map(item => {
				return {
					id: item._id,
					title: item.title,
				}
			})
		navigate(`/services/${id}`, { state: { titles } })
	}
	return handleNavigate
}

export default useUserNavigate
