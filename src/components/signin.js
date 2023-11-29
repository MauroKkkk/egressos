import { FaFacebookSquare } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { BsMicrosoft } from 'react-icons/bs';
import { useState } from 'react'
import './signinredes.css'
import React from 'react';
import NavBar from './NavBar'
import {Link, Navigate} from 'react-router-dom'




import "./signin.css";
import axios from 'axios';



function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitSignin = () => {
    console.log(email, password)
    axios.post("http://localhost:3001/signin", {
      email: email,
      password: password,
    })
    .then(() => {
      <Navigate to="/Profile" replace={true}/>
    })
  }
  return (
    <>
      <NavBar/>
        <div className="wrap-signin">
          <div className="signin-form">
            <span className="signin-form-title"> Egressos </span>

            <div className="wrap-input">
              <input
                className={email !== "" ? "has-val input" : "input"}
                type="email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Email"></span>
            </div>
            <div className="wrap-input">
              <input
                className={password !== "" ? "has-val input" : "input"}
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Password"></span>
            </div>

            <div className="container-signin-form-btn">
                  <button className="signin-form-btn" onClick={() => submitSignin()}>Sign in</button>
                  <div className="text-center">
                    <span className="txt1">Não possui conta? </span>
                    <Link to="/Cadastro" style={{cursor:'pointer'}} className="txt2">
                      Criar conta
                    </Link>

                  </div>
            </div>
            <h5>Outras opçoes de signin:</h5>
            <ul className="signinIcons">
                <li>
                  <span><FaFacebookSquare style={{width:30,height:50, color:'#3E5D9E', cursor:'pointer'}}/></span>
                </li>
                <li>
                  <span><FcGoogle style={{width:30,height:50,cursor:'pointer'}}/></span>
                </li>
                <li>
                  <span><BsMicrosoft style={{width:30,height:50, color:'#0077B7',cursor:'pointer'}}/></span>
                </li>
            </ul>

            

          </div>
        </div>
        </>
  );
}

export default Signin;