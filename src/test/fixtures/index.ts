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

import { CognitoUserPool, CognitoUserSession, CognitoIdToken, CognitoAccessToken, CognitoRefreshToken } from 'amazon-cognito-identity-js'
import {CognitoUser} from '@aws-amplify/auth'
import jwt from 'jsonwebtoken'

export const mockCognitoUser = new CognitoUser({
  Username: 'testUserName',
  Pool: new CognitoUserPool({
    UserPoolId: 'eu-west-2_testPoolD',
    ClientId: 'testClientId'
  })
})

const idToken: string = jwt.sign(
  {
    'cognito:username': 'test@email.com',
    email_verified: true,
    given_name: 'test',
    family_name: 'testName',
    email: 'test@email.com'
  },
  'test-secret',
  {
    expiresIn: '1h',
    subject: 'test@email.com',
  }
)

export const mockUserSession = new CognitoUserSession({
  IdToken: new CognitoIdToken({ IdToken: idToken }),
  AccessToken: new CognitoAccessToken({ AccessToken: idToken }),
  RefreshToken: new CognitoRefreshToken({ RefreshToken: idToken })
})
