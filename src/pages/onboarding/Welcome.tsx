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
import Logo from '../../assets/homely_logo.png'
import {useTranslation} from 'react-i18next'
import routesIndex from '../../routes'
import { CTAButton } from '../../components'

const Background = styled.div`
  background: #44188C;
  width: 100%;
  height: 100vh;  
  display: flex;
  justify-content: center;
  align-items: center; 
  overflow-x: hidden;
  margin: 0;  
`

const CenterDiv = styled.div`
  width: 60%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
`

const Punchline = styled.p`
  color: #FFFFFF;
  font-size: 4vw;
  font-family: 'GochiHand', serif;
  text-align: center;
`

const HomelyLogo = styled.div`
  width: 40%;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center; 
`

const Welcome: React.FC = (props: ComponentProps<any>) => {
  const { t } = useTranslation()

  const { history } = props

  const next = () => {
    history.push(routesIndex.homelyInfo)
  }

  return (
    <Background>
      <CenterDiv>
        <HomelyLogo>
          <img src={Logo} height="100%" alt=""/>
        </HomelyLogo>
        <Punchline>{t('pages_welcome_punchline')}</Punchline>
        <CTAButton onClick={next}>{t('pages_welcome_start')}</CTAButton>
      </CenterDiv>
    </Background>
  )
}

export default Welcome
