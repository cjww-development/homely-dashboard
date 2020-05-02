import Welcome from './pages/onboarding/welcome'
import Location from './pages/onboarding/location'
import './App.css'
import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'


const App: React.FC = () => {
  return (
    <Router>
      <Route path="/setup/welcome" exact component={Welcome} />
      <Route path="/setup/location" exact component={Location} />
    </Router>
  )
}

export default App
