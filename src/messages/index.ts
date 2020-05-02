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
          'pages_welcome_start': 'Lets get started'
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