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

import React, {ComponentProps} from 'react'
import {Redirect, Route} from 'react-router-dom'
import { getCurrentSession } from '../../services/AuthService'
import { CognitoUserSession } from 'amazon-cognito-identity-js'
import routesIndex from '../../routes'

const AuthRoute = (props: ComponentProps<any>) => {
  const { redirect } = props
  const userSession: CognitoUserSession = getCurrentSession()

  return userSession.isValid() ?
    <Route { ...props } /> :
    <Redirect to={redirect} />
}

AuthRoute.defaultProps = {
  redirect: routesIndex.signIn
}

export default AuthRoute