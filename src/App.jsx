import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import DynamicPage from './pages/DynamicPage'
import Aos from 'aos'
import { useEffect } from 'react'
import CoursesPage from './pages/CoursesPage'
import TeachersPage from './pages/TeachersPage'
import global_uz from './translations/uz/global.json'
import i18next from 'i18next'

function App() {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, [])

  i18next.init({
    interpolation: { escapeValue: false },
    lng: "uz",
    resources: {
      uz: {
        global: global_uz
      },
    },
  });

  return (
    <div className='scroll-smooth text-blue-800'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/courses' element={<CoursesPage />} />
        <Route path='/teachers' element={<TeachersPage />} />
        <Route path='/item/:id' element={<DynamicPage />} />
        <Route path='*' element={<h1 className='mt-44'>404</h1>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
