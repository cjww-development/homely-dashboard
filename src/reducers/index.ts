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

import {combineReducers} from 'redux'
import {SET_VERIFICATION_INFO} from '../actions'

const regInitialState = { data: { email: '', name: '' } }

interface ReducerAction<T> {
  type: string
  data: T
}

type RegistrationAction = ReducerAction<{ email: string, name: string }>

export const registrationReducer = (state = regInitialState, action: RegistrationAction) => {
  switch (action.type) {
    case SET_VERIFICATION_INFO:
      return { ...state, data: action.data}
    default:
      return state
  }
}

const rootReducer = combineReducers({
  reg: registrationReducer
})

export default rootReducer

