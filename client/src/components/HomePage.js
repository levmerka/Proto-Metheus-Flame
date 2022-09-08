import React from 'react'
import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react'
import { MdTabletAndroid, MdDesktopWindows, } from "react-icons/md"
import { AiOutlineApple } from "react-icons/ai"
import './Mystyle.css';




export default function Welcome({setLoggedIn}) {
    // All functional components must have a return method that contains JSX.
    // We return all the JSX inside a parent element with a className of "container".
    function login (){
      setLoggedIn(true)
    }
    return (
        <div id="wrapper">
        <div id="left">
          <div id="signin">
            <div className="logo">
              <img src="https://d28htnjz2elwuj.cloudfront.net/wp-content/uploads/2016/06/28120545/Prometheus_Featured.jpg" />
            </div>
            <form>
              <div>
                <label>Email or Username</label>
                <input type="text" className="text-input" />
              </div>
              <div>
                <label>Password</label>
                <input type="password" className="text-input" />
              </div>
              <button onClick={login} className="primary-btn">Sign In</button>
            </form>
            <div className="links">
              <a href="#">Forgot Password</a>
              <a href="#">Sign in with Google</a>
            </div>
            <div className="or">
              <hr className="bar" />
              <span>OR</span>
              <hr className="bar" />
            </div>
            <a href="#" className="secondary-btn">Create an account</a>
           
          </div>

          <div className='Android'>
          <MdTabletAndroid /> <MdDesktopWindows /> <AiOutlineApple /> 
          </div>
                 
          
         
          
          <footer id="main-footer">
            <p>Copyright &copy; All Rights Reserved</p>
            <div>
              <a href="#">Terms of use</a> | <a href="#">Privacy Policy</a>
            </div>
          </footer>
        </div>
        <div id="right">
          <div id="showcase">
            <div className="showcase-content">
              <h1 className="showcase-text">
                Let's share files <strong>together</strong>
              </h1>
              <a href="#" className="secondary-btn">Start a FREE 10-day trial</a>
            </div>
          </div>
        </div>
      </div>
    );
  }