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

import React from 'react'
import { render } from '@testing-library/react'
import Welcome from '../../../pages/onboarding/Welcome'

test('Render welcome page', () => {
  const { getByText } = render(<Welcome/>)

  const punchLine = getByText(/You're always home/i)
  expect(punchLine).toBeDefined()

  const startButton = getByText(/What's Homely?/i)
  expect(startButton).toBeDefined()
})