import { createBrowserRouter } from 'react-router-dom'
import Main from '../../layout/Main'
import Home from '../../pages/Home/Home/Home'
import Login from '../../pages/Login/Login'
import SignUp from '../../pages/SignUp/SignUp'
import Checkout from '../../pages/Checkout/Checkout'
import ServiceDetails from '../../pages/Home/Services/ServiceDetails'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Main />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/login',
				element: <Login />,
			},
			{
				path: '/signup',
				element: <SignUp />,
			},
			{
				path: '/services/:id',
				element: <ServiceDetails />,
				loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`),
			},
		],
	},
])

export default router
