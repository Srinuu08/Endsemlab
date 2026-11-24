import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'

function Home() {
  return <section className="page"><p className="eyebrow">WELCOME</p><h2>Welcome to E-Commerce Website</h2><p>Explore our store using the navigation menu.</p> <img
        src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500"
        alt="Laptop"
        width="200"
        
      /><p>price 30k</p>
      <img
        src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500"
        alt="Mobile"
        width="200"
      />
      <p>price 20k</p></section>
}

function Products() {
  return <section className="page"><p className="eyebrow">OUR STORE</p><h2>Our Products</h2><div className="products"><article>Electronics</article><article>Clothing</article><article>Books</article></div></section>
}

function About() {
  return <section className="page"><p className="eyebrow">WHO WE ARE</p><h2>About Us</h2><p>We make online shopping simple and convenient.</p></section>
}

function Contact() {
  return <section className="page"><p className="eyebrow">GET IN TOUCH</p><h2>Contact Us</h2><p>Email: support@example.com</p></section>
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <header className="header"><h1>College Navigation Website</h1><p>Your simple navigation destination</p></header>
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/products">About</Link>
          <Link to="/about">Info</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <div className="layout">
          <aside className="sidebar"><h3>Categories</h3><p>Hero</p><p>Nav</p><p>Maps</p><p>Info</p></aside>
          <main className="main"><Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes></main>
        </div>
        <footer className="footer">© 2026 My Shopping Store. All Rights Reserved.</footer>
      </div>
    </BrowserRouter>
  )
}
