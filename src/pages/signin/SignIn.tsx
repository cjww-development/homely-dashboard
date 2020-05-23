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
import {CTAButton, Header, HomelyLogo, ErrorAlert} from '../../components'
import login from '../../assets/signin/login.svg'
import { signIn } from '../../services/AuthService'
import {useTranslation} from 'react-i18next'
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

const SignIn: React.FC = (props: ComponentProps<any>) => {

  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

  const [inError, setError] = useState(false)

  const { t } = useTranslation()

  const { history } = props

  const handleChange = (e: FormChange) => {
    const value = e.target.value
    switch (e.target.name) {
      case 'username': setUsername(value); break
      case 'password': setPassword(value); break
    }
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const signedIn = await signIn(username, password)
    setError(!signedIn.success)
    if(signedIn.success) {
      history.push(routesIndex.testAuth)
    }
  }

  return (
    <Background>
      <Header>
        <HomelyLogo src={Logo} height="60px" alt=""/>
      </Header>

      <form onSubmit={handleSubmit}>
        <CenteredContent>
          <img src={login} width="60%" alt=""/>

          <ContentTitle>{t('pages_signin_title')}</ContentTitle>

          { inError ? <ErrorAlert>{t('pages_signin_error')}</ErrorAlert> : null }

          <InputField type="text" name="username" placeholder="User name" value={username} onChange={handleChange}/>
          <InputField type="password" name="password" placeholder="Password" value={password} onChange={handleChange}/>

          <CTAButton type="submit">{t('pages_signin_confirm')}</CTAButton>
        </CenteredContent>
      </form>
    </Background>
  )
}

export default SignIn