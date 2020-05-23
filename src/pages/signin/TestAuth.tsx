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

import React, {ComponentProps} from 'react'
import styled from 'styled-components'
import Logo from '../../assets/homely_logo_horizontal.png'
import {Header, HomelyLogo} from '../../components'

const Background = styled.div`
  background: #FFFFFF;
  width: 100%;
  display: inline-flex;
  flex-direction: column;
  margin: 0;
`

const TestAuth: React.FC = (props: ComponentProps<any>) => {
  return (
    <Background>
      <Header>
        <HomelyLogo src={Logo} height="60px" alt=""/>
      </Header>
      <p>You're signed in!</p>
    </Background>
  )
}

export default TestAuth