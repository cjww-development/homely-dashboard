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
import SignUp from './pages/onboarding/SignUp'
import ConfirmAccount from './pages/onboarding/ConfirmAccount'
import React from 'react'
import {Localisation} from './messages'
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import routesIndex from './routes'
import { Auth } from '@aws-amplify/auth'
import { AWS_REGION, USER_POOL_ID, USER_POOL_CLIENT_ID } from './config'

Auth.configure({
  region: AWS_REGION,
  userPoolId: USER_POOL_ID,
  userPoolWebClientId: USER_POOL_CLIENT_ID,
})

const App: React.FC = () => {

  Localisation()

  return (
    <Router>
      <Route exact path="/">
        <Redirect to={routesIndex.welcome}/>
      </Route>
      <Route path={routesIndex.welcome} exact component={Welcome} />
      <Route path={routesIndex.homelyInfo} exact component={Info} />
      <Route path={routesIndex.signUp} exact component={SignUp}/>
      <Route path={routesIndex.confirmAccount} exact component={ConfirmAccount} />
    </Router>
  )
}

export default App
