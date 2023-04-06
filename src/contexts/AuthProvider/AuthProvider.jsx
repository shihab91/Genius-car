import React, { createContext, useEffect, useState } from 'react'
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import app from '../../firebase/firebase.config'
export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
	const [user, setUser] = useState({})
	const [loading, setLoading] = useState(true)
	const createUser = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password)
	}
	const signIn = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password)
	}
	const signOutUser = () => {
		return signOut(auth)
	}
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, currentUser => {
			setUser(currentUser)
		})
		return unsubscribe
	}, [auth])
	const authInfo = { user, loading, createUser, signIn, signOutUser }
	return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
}

export default AuthProvider
