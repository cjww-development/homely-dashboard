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
import styled from 'styled-components'
import {useTranslation} from 'react-i18next'
import {Localisation} from '../../messages'
import Logo from '../../assets/homely_logo_horizontal.png'
import homes from '../../assets/onboarding/homes.svg'
import features from '../../assets/onboarding/features.svg'
import joining from '../../assets/onboarding/joining.svg'

Localisation()

const Background = styled.div`
  background: #FFFFFF;
  width: 100%;
  height: 100vh;  
  display: inline-flex;
  flex-direction: column;
  margin: 0;
`

const Header = styled.div`
  background: #562F97;
  width: 100%;
  color: #FFFFFF;
  display: flex;
  justify-content: center;
  align-items: center;
`

const HomelyLogo = styled.img`
  margin-top: 20px;
  margin-bottom: 20px;
`

const ContentRow = styled.div`
  width: 100%;
  display: inline-flex;
  flex-direction: row;
  margin-top: 50px;
  margin-bottom: 50px;
`
const ImageBox = styled.div`
  width: 40%;
  margin: 10px;
`

const ContentBox = styled.div`
  width: 60%;
  padding: 10px;
`

const ContentTitle = styled.h2`
  font-family: 'Roboto', serif;
  font-size: 3vw;
`
const ContentCaption = styled.p`
  font-family: 'Roboto Light', serif;
  font-size: 2vw;
`

const CenteringBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const GetStarted = styled.button`
  font-size: 4vw;
  font-family: 'Roboto', serif;
  color: #FFFFFF;
  background-color: #562F97;
  border: 5px solid #FFFFFF;
  border-radius: 30px;
  padding: 20px;
  width: 100%;
`



const Info: React.FC = () => {
  const { t } = useTranslation()

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
          <GetStarted>{t('pages_welcome_info_getStarted')}</GetStarted>
        </CenteringBox>
      </ContentRow>
    </Background>
  )
}

export default Info