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

import Auth, { CognitoUser } from '@aws-amplify/auth'
import {CognitoAccessToken, CognitoIdToken, CognitoRefreshToken, CognitoUserSession} from 'amazon-cognito-identity-js'
import { getSessionPrefix } from '../config'

interface AuthResult {
  success: boolean
  errorMsg?: string
}

type SignInRequest = (userName: string, password: string) => Promise<AuthResult>

export const signIn: SignInRequest = async (userName: string, password: string) => {
  try {
    const user: CognitoUser = await Auth.signIn(userName, password)
    return { success: user.getSignInUserSession()?.isValid() || false }
  } catch (e) {
    return { success: false, errorMsg: 'PROBLEM_SIGNING_IN' }
  }
}

export const getCurrentSession: () => CognitoUserSession = () => {
  return new CognitoUserSession({
    IdToken: new CognitoIdToken({ IdToken: localStorage.getItem(`${getSessionPrefix()}.idToken`) || '' }),
    AccessToken: new CognitoAccessToken({ AccessToken: localStorage.getItem(`${getSessionPrefix()}.accessToken`) || '' }),
    RefreshToken: new CognitoRefreshToken({ RefreshToken: localStorage.getItem(`${getSessionPrefix()}.refreshToken`) || '' })
  })
}