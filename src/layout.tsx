import { BrowserRouter, Route, Routes } from 'react-router'
import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
import { Pokemons } from './pages/Pokemons'

export default function RootLayout() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <div className='w-full min-h-dvh flex flex-col'>
              <Home />
            </div>
          }
        />
        <Route
          path='/pokemons'
          element={
            <div className='w-full min-h-dvh flex flex-col'>
              <Navbar title='Pokémons' />
              <Pokemons />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}
