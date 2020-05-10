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
import {useTranslation} from 'react-i18next'
import Logo from '../../assets/homely_logo_horizontal.png'
import registered from '../../assets/onboarding/registered.svg'
import { CTAButton, ContentRow, CenteringBox, Header, HomelyLogo } from '../../components'
import {useSelector} from 'react-redux'
import {registrationEmail, registrationName} from '../../selectors'
import routesIndex from '../../routes'

const Background = styled.div`
  background: #FFFFFF;
  width: 100%;
  display: inline-flex;
  flex-direction: column;
  margin: 0;
`

const CenteredContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 30px;
`

const ContentTitle = styled.h1`
  font-family: 'Roboto', sans-serif;
`

const ContentCaption = styled.p`
  font-family: 'Roboto Light', serif;
  font-size: 4vw;
  text-align: center;
`

const Success: React.FC = (props: ComponentProps<any>) => {
  const { t } = useTranslation()

  const registeredEmail = useSelector(registrationEmail)
  const registeredName = useSelector(registrationName)

  if(!registeredEmail || !registeredName) {
    const { history } = props
    history.push(routesIndex.signUp)
  }
  
  return (
    <Background>
      <Header>
        <HomelyLogo src={Logo} height="60px" alt=""/>
      </Header>

      <ContentRow>
        <CenteredContent>
          <img src={registered} width="60%" alt=""/>

          <ContentTitle>{t('pages_welcome_registered_title')}</ContentTitle>

          <ContentCaption>{t('pages_welcome_registered_caption')}</ContentCaption>
        </CenteredContent>
      </ContentRow>

      <ContentRow>
        <CenteringBox>
          <CTAButton>{t('pages_welcome_registered_confirm')}</CTAButton>
        </CenteringBox>
      </ContentRow>
    </Background>
  )
}

export default Success