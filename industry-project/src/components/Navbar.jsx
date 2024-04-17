import React from 'react'
import weShineLogo from '../image/weshinelogo.png';
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">
                <img src={weShineLogo} alt="Logo" width="50" height="50" class="d-inline-block align-text-top" style={{margin:"0px 10px"}}/>
                <span style={{fontSize:"30px","color":"white"}}>WeShine</span>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/home">Home</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="/register">Register</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="/addcandidate">Apply</a>
                </li>
                <li class="nav-item">
                <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
      
    </div>
  )
}

export default Navbar
