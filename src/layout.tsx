import { BrowserRouter, Route, Routes } from 'react-router'
import { Home } from './pages/Home'

export default function RootLayout() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <div
              style={{
                width: '100%',
                minHeight: '100dvh',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Home />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}
