import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import FAQ from './pages/FAQ'
import TheWatch from './pages/TheWatch'
import ArticlePage from './pages/ArticlePage'
import Contact from './pages/Contact'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="about" element={<About />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="the-watch" element={<TheWatch />} />
        <Route path="the-watch/:slug" element={<ArticlePage />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App