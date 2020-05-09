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
import profile from '../../assets/onboarding/profile.svg'
import {useTranslation} from 'react-i18next'
import { CTAButton, Header, HomelyLogo, ErrorAlert } from '../../components'
import { registerUser } from '../../services/RegistrationService'


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
`

const InputField = styled.input`
  margin: 10px;
  border: 3px solid #562F97;
  border-radius: 10px;
  font-size: 4vw;
  width: 80%;
  height: 50px;
`

interface FormChange {
  target: { name: string, value: string }
}

const SignUp: React.FC = () => {
  const [email, setEmail] = useState()
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [password, setPassword] = useState()
  const [confirmPassword, setConfirmedPassword] = useState()

  const [inError, setError] = useState(false)
  const [errorMsg, setErrorMsg] = useState()

  const { t } = useTranslation()

  const handleChange = (e: FormChange) => {
    const value = e.target.value
    switch (e.target.name) {
    case 'firstName': setFirstName(value); break
    case 'lastName': setLastName(value); break
    case 'email': setEmail(value); break
    case 'password': setPassword(value); break
    case 'confirmPassword': setConfirmedPassword(value); break
    }
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const registration = await registerUser({ email, firstName, lastName, password, confirmPassword })
    if(registration.success) {
      console.log('Registration success redirecting to account confirmation')
    } else {
      setError(true)
      setErrorMsg(registration.errorMsg)
    }
  }
  
  return (
    <Background>
      <Header>
        <HomelyLogo src={Logo} height="60px" alt=""/>
      </Header>

      <form onSubmit={handleSubmit}>
        <CenteredContent>
          <img src={profile} width="60%" alt=""/>

          <ContentTitle>{t('pages_welcome_signup_title')}</ContentTitle>

          { inError ? <ErrorAlert>{t(errorMsg)}</ErrorAlert>: null }

          <InputField type="text" name="firstName" placeholder={t('pages_welcome_signup_fields_firstname')} value={firstName} onChange={handleChange}/>
          <InputField type="text" name="lastName" placeholder={t('pages_welcome_signup_fields_lastname')} value={lastName} onChange={handleChange}/>
          <InputField type="email" name="email" placeholder={t('pages_welcome_signup_fields_email')} value={email} onChange={handleChange}/>
          <InputField type="password" name="password" placeholder={t('pages_welcome_signup_fields_password')} value={password} onChange={handleChange}/>
          <InputField type="password" name="confirmPassword" placeholder={t('pages_welcome_signup_fields_confirm_password')} value={confirmPassword} onChange={handleChange}/>

          <CTAButton type="submit">{t('pages_welcome_signup_confirm')}</CTAButton>
        </CenteredContent>
      </form>
    </Background>
  )
}

export default SignUp