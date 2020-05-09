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

import React, {ComponentProps, useState} from 'react'
import styled from 'styled-components'
import Logo from '../../assets/homely_logo_horizontal.png'
import verify from '../../assets/onboarding/verify.svg'
import {useTranslation} from 'react-i18next'
import { CTAButton, Header, HomelyLogo, ErrorAlert, OtherButton, HintAlert } from '../../components'
import {registrationEmail, registrationName} from '../../selectors'
import { useSelector } from 'react-redux'
import { confirmUser, reissueVerificationCode } from '../../services/RegistrationService'
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

const ContentTitle = styled.h2`
  font-family: 'Roboto', serif;
  font-size: 7vw;
  text-align: center;
`

const InputField = styled.input`
  margin: 10px;
  border: 3px solid #562F97;
  border-radius: 10px;
  font-size: 4vw;
  width: 80%;
  height: 50px;
  text-align: center;
`

export const ContentCaption = styled.p`
  font-family: 'Roboto Light', serif;
  font-size: 3.5vw;
  text-align: center;
`

interface FormChange {
  target: { name: string, value: string }
}

const ConfirmAccount: React.FC = (props: ComponentProps<any>) => {

  const registeredEmail = useSelector(registrationEmail)
  const registeredName = useSelector(registrationName)


  if(!registeredEmail) {
    const { history } = props
    history.push(routesIndex.signUp)
  }

  const [verificationCode, setVerificationCode] = useState()

  const [inError, setError] = useState(false)
  const [errorMsg, setErrorMsg] = useState()
  const [resent, setResent] = useState()

  const { t } = useTranslation()

  const handleChange = (e: FormChange) => {
    setVerificationCode(e.target.value)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const result = await confirmUser(registeredEmail, verificationCode)
    if(result.success) {
      console.log('Account confirmed!')
    } else {
      setError(true)
      setErrorMsg(result.errorMsg)
    }
  }

  const handleResend = async () => {
    const hasSent: boolean = await reissueVerificationCode(registeredEmail)
    setResent(hasSent)
  }

  return (
    <Background>
      <Header>
        <HomelyLogo src={Logo} height="60px" alt=""/>
      </Header>

      <form onSubmit={handleSubmit}>
        <CenteredContent>
          <img src={verify} width="60%" alt=""/>

          <ContentTitle>{t('pages_welcome_verify_title')}</ContentTitle>

          <ContentCaption>{t('pages_welcome_verify_content', { email: registeredEmail, firstName: registeredName })}</ContentCaption>

          { inError ? <ErrorAlert>{t(errorMsg)}</ErrorAlert>: null }
          { resent ?  <HintAlert>{t('pages_welcome_verify_resend_sent')}</HintAlert> : null}

          <InputField type="text" name="code" placeholder={t('pages_welcome_verify_fields_code')} value={verificationCode} onChange={handleChange}/>

          <OtherButton type="button" onClick={handleResend}>{t('pages_welcome_verify_resend')}</OtherButton>
          <CTAButton type="submit">{t('pages_welcome_verify_confirm')}</CTAButton>
        </CenteredContent>
      </form>
    </Background>
  )
}

export default ConfirmAccount