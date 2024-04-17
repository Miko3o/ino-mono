import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'

import { Home } from './Pages/Home/Home';

export const AppContainer = () => {
  return (
    <App/>
  )
}

export const App = () => {

  return (
    <div
      className="app-wrapper"
      data-testid="appTest">
      <BrowserRouter>
        <Routes>
          <Route path="/"element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
