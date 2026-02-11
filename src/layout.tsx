import { Provider as ReduxProvider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router'
import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
import { Pokemons } from './pages/Pokemons'
import { store } from './store'

export default function RootLayout() {
  return (
    <ReduxProvider store={store}>
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
                <Navbar title='Pokemons' />
                <Pokemons />
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </ReduxProvider>
  )
}
