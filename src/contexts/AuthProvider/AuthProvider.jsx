import React, { createContext, useEffect, useState } from 'react'
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import app from '../../firebase/firebase.config'
export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
	const [user, setUser] = useState({})
	const [loading, setLoading] = useState(true)
	const createUser = (email, password) => {
		createUserWithEmailAndPassword(auth, email, password)
			.then(result => console.log(result.user))
			.catch(err => console.log(err.message))
	}
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, currentUser => {
			console.log(currentUser)
			setUser(currentUser)
		})
		return unsubscribe
	}, [auth])
	const authInfo = { user, loading, createUser, loading }
	return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
}

export default AuthProvider
