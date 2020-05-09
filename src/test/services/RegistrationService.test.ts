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

import {confirmUser, registerUser, registrationResults, reissueVerificationCode} from '../../services/RegistrationService'
import Auth from '@aws-amplify/auth'

describe('registerUser', () => {
  beforeEach(() => {
    jest.resetAllMocks()
    jest.mock('@aws-amplify/auth')
  })

  const regData = {
    email: 'test@email.com',
    firstName: 'John',
    lastName: 'Smith',
    password: 'testPassword',
    confirmPassword: 'testPassword'
  }

  test('should return a successful RegistrationResult', async () => {
    const expected = registrationResults.success

    Auth.signUp = jest.fn().mockImplementationOnce(() => {
      return {}
    })

    const result = await registerUser(regData)
    expect(result).toEqual(expected)
  })

  test('should return a failed Registration (password mismatch)', async () => {
    const expected = registrationResults.passwordMismatch

    const tmpRegData = { ...regData, confirmPassword: 'mismatch' }

    const result = await registerUser(tmpRegData)
    expect(result).toEqual(expected)
  })
})

describe('confirmUser', () => {
  test('should activate the user', async () => {
    const expected = registrationResults.success

    Auth.confirmSignUp = jest.fn().mockImplementationOnce(() => {
      return {}
    })

    const result = await confirmUser('test@email.com', '000000')
    expect(result).toEqual(expected)
  })
})

describe('reissueVerificationCode', () => {
  test('should return true when the code has been resent', async () => {
    const expected = true

    Auth.resendSignUp = jest.fn().mockImplementationOnce(() => {
      return {}
    })

    const result = await reissueVerificationCode('test@email.com')
    expect(result).toEqual(expected)
  })
})