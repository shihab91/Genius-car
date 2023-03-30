import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../pages/shared/Footer/Footer'
import Header from '../pages/shared/Header/Header'

const Main = () => {
	return (
		<>
			<Header />
			<main>
				<Outlet />
			</main>
			<Footer />
		</>
	)
}

export default Main
