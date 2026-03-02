import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import FAQ from './pages/FAQ'
import TheWatch from './pages/TheWatch'
import ArticlePage from './pages/ArticlePage'
import Contact from './pages/Contact'
import GuideArizonaClimate from './pages/GuideArizonaClimate'
import GuideInsurance from './pages/GuideInsurance'
import GuideWhatIsHomeWatch from './pages/GuideWhatIsHomeWatch'
import GuideSeasonalHomeowner from './pages/GuideSeasonalHomeowner'
import GuideRealEstate from './pages/GuideRealEstate'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<><ScrollToTop /><Home /></>} />
        <Route path="services" element={<><ScrollToTop /><Services /></>} />
        <Route path="about" element={<><ScrollToTop /><About /></>} />
        <Route path="faq" element={<><ScrollToTop /><FAQ /></>} />
        <Route path="the-watch" element={<><ScrollToTop /><TheWatch /></>} />
        <Route path="the-watch/:slug" element={<><ScrollToTop /><ArticlePage /></>} />
        <Route path="contact" element={<><ScrollToTop /><Contact /></>} />
        <Route path="guides/arizona-climate-risks" element={<><ScrollToTop /><GuideArizonaClimate /></>} />
        <Route path="guides/homeowners-insurance-vacant-homes" element={<><ScrollToTop /><GuideInsurance /></>} />
        <Route path="guides/what-is-home-watch" element={<><ScrollToTop /><GuideWhatIsHomeWatch /></>} />
        <Route path="guides/seasonal-homeowner-guide" element={<><ScrollToTop /><GuideSeasonalHomeowner /></>} />
        <Route path="guides/home-watch-real-estate" element={<><ScrollToTop /><GuideRealEstate /></>} />
      </Route>
    </Routes>
  )
}

export default App