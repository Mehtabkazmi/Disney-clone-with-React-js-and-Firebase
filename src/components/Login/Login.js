import styled from "styled-components";
import React from 'react'
import { Link } from "react-router-dom";
import './login.css';
export default function Login() {
  
  return (
      <div className="container">
      <div className="content">
        <div className="cta">
                  <img className="logoone" src="/images/cta-logo-one.svg" alt="" />
                  <Link to="/" className="signup">GET ALL THERE</Link>
                  <p className="description">Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1.</p>
                  <img src="/images/cta-logo-two.png" alt="" />
        </div>
        <BgImage />
        </div>
    </div>
  )
};
const BgImage = styled.div`
  height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("/images/login-background.jpg");
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
`;