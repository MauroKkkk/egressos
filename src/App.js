import './App.css';
import React from 'react';
import NavMenu from './components/NavBar';
import Cadastro from './components/signup';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Hero from './components/Profile';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, OAuthProvider, FacebookAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import fire from './components/fire'
import Login from './components/signin'
import Profile from './components/Profile';
import Signup from './components/signup';
import Signin from './components/signin';



function App() {
//   const [user, setUser] = useState('');

//   const [emailError, setEmailError] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const [hasAccount, setHasAccount] = useState(false);
//   const [face, setFace] = useState(false)
//   const [goog, setGoog] = useState(false)
//   const [micro, setMicro] = useState(false)
//   const [idToken, setAccessToken] = useState('')
//   const auth = getAuth();
//   const provider = new OAuthProvider('microsoft.com');

// const microsoft  = () => {

//   signInWithPopup(auth, provider)
//   .then((result) => {
//     setMicro(true)
//     const credential = OAuthProvider.credentialFromResult(result);
//     const accessToken = credential.accessToken;
//     setAccessToken(credential.accessToken)
//     console.log(accessToken)
//     const idToken = credential.idToken;
//     console.log(idToken)
//   })
//   .catch((error) => {
//     alert(error.code)
//   });
// }
//   const facebook = () => {
//     signInWithPopup(auth, new FacebookAuthProvider())
//       .then((res) => {
//         console.log(res)
//         setFace(true)
//       })
//         .catch((err) => setEmail(err.code))

//   }

//   const google = () => {

//     signInWithPopup(auth, new GoogleAuthProvider())
//       .then((res) => {
//         console.log(res)
//         setGoog(true)
//       })
//       .catch((err) =>setEmail(err.code))

//   }



//   const clearInputs = () => {
//     setEmail('');
//     setPassword('');
//   }

//   const clearErrors = () => {
//     setEmailError('');
//     setPasswordError('');
//   }

//   const handleLogin = () => {
//     clearErrors();
//     signInWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       clearInputs()
//       clearErrors();
//       setUser(userCredential.user);
//       // ...
//     })
//     .catch((error) => {

//       const errorCode = error.code;
//       const errorMessage = error.message;
//       alert(errorMessage, errorCode)
//       clearInputs()
//       clearErrors();
//     });
//   }
//   const handleSingup = () => {
//     createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in
//     setUser(userCredential.user);
//     clearInputs()
//     clearErrors();
//     // ...
//   })
//   .catch((error) => {

//     setUser('')
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     alert(errorMessage, errorCode)
//     clearInputs()
//     clearErrors();
//     // ..
//   });
//   }
//   const handleLogout = () => {
//     signOut(auth).then(() => {
//       setUser('')
//       clearInputs()
//       clearErrors();
//     }).catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       alert(errorMessage, errorCode)
//       clearInputs()
//       clearErrors();
//     });
//   }

//   const authListener = () => {
//     onAuthStateChanged(auth, (user) => {
//       if (user) {
//         const uid = user.uid;
//         setUser(uid)
//         clearInputs()
//         clearErrors();

//       } else {
//         setUser('')
//       }
//     });
//   }

//   useEffect(() =>{
//     authListener();
//   })


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/SignUp" element={<Signup/>}/>
        <Route path="/SignIn" element={<Signin/>}/>
        <Route path="/Profile" element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
