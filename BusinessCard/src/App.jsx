import React from 'react'
import './App.css'

export default function App() {
  return (
    <div className='container'>
      <div className="cardContainer">
        <Card />
      </div>
    </div>
  )
}

function Card() {
  return (<div className="card">
    <img className='myImage' src="/gokul-landscape.jpg" alt="Gokul's image in b&W" />
    <div className="info">
      <h1>Gokul Venkatraman</h1>
      <p className='position'>Frontend Developer</p>
      <button><i className="fa fa-envelope" ></i>Email </button>
      <About />
    </div>
    <Footer />
  </div>)
}

function About() {
  return (
    <div className="info2">
      <h2>About</h2>
      <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
      <h2>Intrest</h2>
      <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
    </div>)
}

function Footer() {
  return (<footer>
    <i className="fa-brands fa-twitter"></i>
    <i className="fa-brands fa-facebook"></i>
    <i className="fa-brands fa-linkedin"></i>
    <i className="fa-brands fa-github"></i>
    <i className="fa-brands fa-discord"></i>
  </footer>)
}


