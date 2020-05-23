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

interface RegSelector {
  reg: {
    data: {
      email: string
      name: string
    }
  }
}

export const registrationEmail: (state: RegSelector) => string = (state: RegSelector) => state.reg.data.email
export const registrationName: (state: RegSelector) => string = (state: RegSelector) => state.reg.data.name
