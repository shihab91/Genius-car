import React, { useContext } from 'react'
import img from '../../assets/images/login/login.svg'
import facebook from '../../assets/icons/facebook.png'
import linkedIn from '../../assets/icons/linkedin.png'
import google from '../../assets/icons/google.png'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider'
const SignUp = () => {
	const { createUser, user } = useContext(AuthContext)
	const navigate = useNavigate()
	const handleSignUp = e => {
		e.preventDefault()
		const form = e.target
		const email = form.email.value
		const name = form.name.value
		const password = form.password.value
		createUser(email, password)
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
						<h1>Sign Up</h1>
						<form onSubmit={handleSignUp}>
							<div className='input-group'>
								<label htmlFor='name'>Name</label>
								<input type='text' name='name' placeholder='Your Name' required />
							</div>
							<div className='input-group'>
								<label htmlFor='email'>Email</label>
								<input type='email' name='email' placeholder='Your Email' required />
							</div>
							<div className='input-group'>
								<label htmlFor='password'>Password</label>
								<input type='password' name='password' placeholder='Your Password' required />
							</div>
							<button className='btn-fill-orange' style={{ width: '100%' }} type='submit'>
								Sign Up
							</button>
						</form>
						<div className='others-auth'>
							<p>Or Sign Up with</p>
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
								Already have an account? <Link to='/login'>Login</Link>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SignUp
