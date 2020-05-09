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
import homes from '../../assets/onboarding/homes.svg'
import features from '../../assets/onboarding/features.svg'
import joining from '../../assets/onboarding/joining.svg'
import routesIndex from '../../routes'
import { CTAButton, ContentRow, CenteringBox, Header, HomelyLogo, ImageBox, ContentBox, ContentTitle, ContentCaption } from '../../components'

const Background = styled.div`
  background: #FFFFFF;
  width: 100%;
  display: inline-flex;
  flex-direction: column;
  margin: 0;
`

const Info: React.FC = (props: ComponentProps<any>) => {
  const { t } = useTranslation()

  const { history } = props

  const next = () => {
    history.push(routesIndex.signUp)
  }

  return (
    <Background>
      <Header>
        <HomelyLogo src={Logo} height="60px" alt=""/>
      </Header>

      <ContentRow>
        <ImageBox>
          <img src={homes} width="100%" alt=""/>
        </ImageBox>
        <ContentBox>
          <ContentTitle>{t('pages_welcome_info_welcome')}</ContentTitle>
          <ContentCaption>{t('pages_welcome_info_welcome_content_1')}</ContentCaption>
          <ContentCaption>{t('pages_welcome_info_welcome_content_1')}</ContentCaption>
        </ContentBox>
      </ContentRow>

      <ContentRow>
        <ContentBox>
          <ContentTitle>{t('pages_welcome_info_features')}</ContentTitle>
          <ContentCaption>{t('pages_welcome_info_features_content')}</ContentCaption>
        </ContentBox>
        <ImageBox>
          <img src={features} width="100%" alt=""/>
        </ImageBox>
      </ContentRow>

      <ContentRow>
        <ImageBox>
          <img src={joining} width="100%" alt=""/>
        </ImageBox>
        <ContentBox>
          <ContentTitle>{t('pages_welcome_info_join')}</ContentTitle>
          <ContentCaption>{t('pages_welcome_info_join_content')}</ContentCaption>
        </ContentBox>
      </ContentRow>

      <ContentRow>
        <CenteringBox>
          <CTAButton onClick={next}>{t('pages_welcome_info_getStarted')}</CTAButton>
        </CenteringBox>
      </ContentRow>
    </Background>
  )
}

export default Info