import React from 'react'
import img from '../../assets/images/login/login.svg'
import './Login.css'
import facebook from '../../assets/icons/facebook.png'
import linkedIn from '../../assets/icons/linkedin.png'
import google from '../../assets/icons/google.png'
import { Link } from 'react-router-dom'
const Login = () => {
	const handleSubmit = e => {
		e.preventDefault()
	}
	return (
		<div className='login-wrapper'>
			<div className='container '>
				<div className='login-container'>
					<div className='login-img'>
						<img src={img} alt='' />
					</div>
					<div className='form-container'>
						<h1>Login</h1>
						<form onSubmit={handleSubmit}>
							<div className='input-group'>
								<label htmlFor='email'>Email</label>
								<input type='email' name='email' placeholder='Your Email' />
							</div>
							<div className='input-group'>
								<label htmlFor='password'>Password</label>
								<input type='password' name='password' placeholder='Your Password' />
							</div>
							<button className='btn-fill-orange' style={{ width: '100%' }} type='submit'>
								Sign In
							</button>
						</form>
						<div className='sign-in-with-others'>
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
								New to site? <Link to='/register'>Register</Link>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Login
