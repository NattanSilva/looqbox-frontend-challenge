import { BrowserRouter, Route, Routes } from 'react-router'
import { Home } from './pages/Home'

export default function RootLayout() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
