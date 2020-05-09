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

export const registrationResults = {
  success: { success: true },
  passwordMismatch: { success: false, errorMsg: 'pages_welcome_signup_errors_pword_mismatch' },
  userAlreadyExists: { success: false, errorMsg: 'pages_welcome_signup_errors_existing' },
  verificationFailed: { success: false, errorMsg: 'pages_welcome_verify_errors_failed' }
}

export interface RegistrationResult {
  success: boolean
  errorMsg?: string
}

export interface RegistrationData {
  email: string,
  firstName: string,
  lastName: string,
  password: string,
  confirmPassword: string
}

export const registerUser: (regData: RegistrationData) => Promise<RegistrationResult> = async (regData: RegistrationData) => {
  const { email, password, confirmPassword } = regData

  if(password !== confirmPassword)
    return registrationResults.passwordMismatch

  const signUpData = {
    username: email,
    password,
    attributes: {
      given_name: regData.firstName,
      family_name: regData.lastName,
      email
    }
  }

  try {
    await Auth.signUp(signUpData)
    return registrationResults.success
  } catch (e) {
    switch(e.code) {
      case 'UsernameExistsException':
        return registrationResults.userAlreadyExists
      default:
        return { success: false, errorMsg: e.code }
    }
  }
}

export const confirmUser: (email: string, code: string) => Promise<RegistrationResult> = async (email: string, code: string) => {
  try {
    await Auth.confirmSignUp(email, code)
    return registrationResults.success
  } catch (e) {
    return registrationResults.verificationFailed
  }
}

export const reissueVerificationCode: (email: string) => Promise<boolean> = async (email: string) => {
  try {
    await Auth.resendSignUp(email)
    return true
  } catch (e) {
    return false
  }
}


