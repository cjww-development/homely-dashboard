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

export const USER_POOL_ID: string | undefined = process.env.REACT_APP_USER_POOL_ID
export const USER_POOL_CLIENT_ID: string | undefined = process.env.REACT_APP_USER_POOL_CLIENT_ID
export const AWS_REGION: string | undefined = process.env.REACT_APP_AWS_REGION

export const getSessionPrefix: () => string = () => {
  const lastAuthUser: string | null = localStorage.getItem(`CognitoIdentityServiceProvider.${USER_POOL_CLIENT_ID}.LastAuthUser`)
  return `CognitoIdentityServiceProvider.${USER_POOL_CLIENT_ID}.${lastAuthUser}`
}
