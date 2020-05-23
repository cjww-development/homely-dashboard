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

import Auth from '@aws-amplify/auth'
import { signIn, getCurrentSession } from '../../services/AuthService'
import { mockCognitoUser, mockUserSession } from '../fixtures'
import { CognitoUserSession, CognitoIdToken, CognitoAccessToken, CognitoRefreshToken } from 'amazon-cognito-identity-js'

describe('signIn', () => {
  beforeEach(() => {
    jest.resetAllMocks()
    jest.mock('@aws-amplify/auth')
  })

  test('should return a successful AuthResult', async () => {
    const expected = { success: true }

    mockCognitoUser.setSignInUserSession(mockUserSession)

    Auth.signIn = jest.fn().mockImplementationOnce(() => {
      return mockCognitoUser
    })

    const result = await signIn('testUserName', 'testPass')
    expect(result).toEqual(expected)
  })

  test('should return a failed AuthResult', async () => {
    const expected = { success: false, errorMsg: 'PROBLEM_SIGNING_IN' }

    Auth.signIn = jest.fn().mockImplementationOnce(() => {
      throw new Error()
    })

    const result = await signIn('testUserName', 'testPass')
    expect(result).toEqual(expected)
  })
})

describe('getCurrentSession', () => {
  test('return a user session', () => {
    localStorage.getItem = jest.fn().mockImplementationOnce(() => {
      return ''
    })

    const expected = new CognitoUserSession({
      IdToken: new CognitoIdToken({ IdToken: '' }),
      AccessToken: new CognitoAccessToken({ AccessToken: '' }),
      RefreshToken: new CognitoRefreshToken({ RefreshToken: '' })
    })

    const result = getCurrentSession()
    expect(result).toEqual(expected)
  })
})
