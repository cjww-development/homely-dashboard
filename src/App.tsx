/*
 * Copyright 2020 CJWW Development
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import Welcome from './pages/onboarding/Welcome'
import Info from './pages/onboarding/Info'
import React from 'react'
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import routesIndex from './routes'

const App: React.FC = () => {
  return (
    <Router>
      <Route exact path="/">
        <Redirect to={routesIndex.welcome}/>
      </Route>
      <Route path={routesIndex.welcome} exact component={Welcome} />
      <Route path={routesIndex.homelyInfo} exact component={Info} />
    </Router>
  )
}

export default App
