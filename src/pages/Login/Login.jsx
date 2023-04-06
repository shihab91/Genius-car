import React, { useContext } from 'react'
import img from '../../assets/images/login/login.svg'
import './Login.css'
import facebook from '../../assets/icons/facebook.png'
import linkedIn from '../../assets/icons/linkedin.png'
import google from '../../assets/icons/google.png'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider'
const Login = () => {
	const { user, signIn } = useContext(AuthContext)
	const navigate = useNavigate()
	const handleLogin = e => {
		e.preventDefault()
		const form = e.target
		const email = form.email.value
		const password = form.password.value
		signIn(email, password)
			.then(result => {
				form.reset()
				navigate('/')
			})
			.catch(err => console.log(err.message))
	}
	return (
		<div className='auth-wrapper'>
			<div className='container '>
				<div className='auth-container'>
					<div className='auth-img'>
						<img src={img} alt='' />
					</div>
					<div className='form-container'>
						<h1>Login</h1>
						<form onSubmit={handleLogin}>
							<div className='input-group'>
								<label htmlFor='email'>Email</label>
								<input type='email' name='email' placeholder='Your Email' required />
							</div>
							<div className='input-group'>
								<label htmlFor='password'>Password</label>
								<input type='password' name='password' placeholder='Your Password' required />
							</div>
							<button className='btn-fill-orange' style={{ width: '100%' }} type='submit'>
								Sign In
							</button>
						</form>
						<div className='others-auth'>
							<p>Or Sign in with</p>
							<div className='icons'>
								<div className='icon'>
									<img src={facebook} alt='' />
								</div>
								<div className='icon'>
									<img src={linkedIn} alt='' />
								</div>
								<div className='icon'>
									<img src={google} alt='' />
								</div>
							</div>
							<p>
								New to site? <Link to='/signup'>Sign Up</Link>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Login
