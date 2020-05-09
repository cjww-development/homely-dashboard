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

import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const Messages = () => {
  return {
    resources: {
      en: {
        translation: {
          'pages_welcome_punchline': 'You\'re always home',
          'pages_welcome_start': 'What\'s Homely?',

          'pages_welcome_info_welcome': 'Welcome to Homely',
          'pages_welcome_info_welcome_content_1': 'Fold your smart home into one easy to use remote. Control all of your smart bulbs, thermostats, media centers in one place from anywhere.',
          'pages_welcome_info_welcome_content_2': 'With Homely you\'re always home.',
          'pages_welcome_info_features': 'What can Homely do?',
          'pages_welcome_info_features_content': 'As the team releases more and more features we want to flip this question around; what can\'t Homely do? But at the moment you\'ll be able to control your smart lights.',
          'pages_welcome_info_join': 'Ready to join Homely?',
          'pages_welcome_info_join_content': 'Has the thought of being able to control your home with Homely piqued your interest? Click the lets get started button below and we\'ll get you setup.',
          'pages_welcome_info_getStarted': 'Lets get started',

          'pages_welcome_signup_title': 'Lets get you set up',
          'pages_welcome_signup_fields_firstname': 'First name',
          'pages_welcome_signup_fields_lastname': 'Last name',
          'pages_welcome_signup_fields_email': 'Email',
          'pages_welcome_signup_fields_password': 'Password',
          'pages_welcome_signup_fields_confirm_password': 'Confirm password',
          'pages_welcome_signup_confirm': 'Sign up',
          'pages_welcome_signup_errors_existing': 'An account already exists with this email',
          'pages_welcome_signup_errors_pword_mismatch': 'The passwords you\'ve entered do not match',

          'pages_welcome_verify_title': 'Just need to confirm it\'s you',
          'pages_welcome_verify_content': 'Welcome home {{firstName}}, we\'ve sent a verification code to {{email}}. Please wait for the email and type the code in, below.' ,
          'pages_welcome_verify_fields_code': 'Verification code',
          'pages_welcome_verify_resend': 'Resend code',
          'pages_welcome_verify_resend_error': 'There was a problem resending your code',
          'pages_welcome_verify_resend_sent': 'We\'ve sent a new code',
          'pages_welcome_verify_confirm': 'Confirm it\'s you',
          'pages_welcome_verify_errors_failed': 'The verification code was incorrect',
        }
      }
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  }
}

export const Localisation = () => {
  return i18n.use(initReactI18next).init(Messages())
}
