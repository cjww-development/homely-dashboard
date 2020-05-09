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

import styled from 'styled-components'

export const CTAButton = styled.button`
  font-size: 4vw;
  font-family: 'Roboto', serif;
  color: #FFFFFF;
  background-color: #562F97;
  border: 5px solid #FFFFFF;
  border-radius: 30px;
  padding: 20px;
  width: 100%;
`

export const OtherButton = styled.button`
  font-size: 4vw;
  font-family: 'Roboto', serif;
  color: #FFFFFF;
  background-color: #CF2274;
  border: 5px solid #FFFFFF;
  border-radius: 30px;
  padding: 15px;
  width: 85%;
  margin-top: 10px;
  margin-bottom: 10px;
`

export const ContentRow = styled.div`
  width: 100%;
  display: inline-flex;
  flex-direction: row;
  margin-top: 50px;
  margin-bottom: 50px;
`

export const CenteringBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Header = styled.div`
  background: #562F97;
  width: 100%;
  color: #FFFFFF;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const HomelyLogo = styled.img`
  margin-top: 20px;
  margin-bottom: 20px;
`

export const ImageBox = styled.div`
  width: 40%;
  margin: 10px;
`

export const ContentBox = styled.div`
  width: 60%;
  padding: 10px;
`

export const ContentTitle = styled.h2`
  font-family: 'Roboto', serif;
  font-size: 3vw;
`
export const ContentCaption = styled.p`
  font-family: 'Roboto Light', serif;
  font-size: 2vw;
`

export const ErrorAlert = styled.div`
  width: 80%;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  height: 40px;
  border: #f90000 solid 2px;
  background-color: #fa4c4c;
  border-radius: 10px;
  color: #FFFFFF;
  font-size: 4vw;
  font-family: Roboto, sans-serif;
  margin-top: 5px;
  margin-bottom: 5px;
`

export const HintAlert = styled.div`
  width: 80%;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  height: 40px;
  border: #008000 solid 2px;
  background-color: #4CA64C;
  border-radius: 10px;
  color: #FFFFFF;
  font-size: 4vw;
  font-family: Roboto, sans-serif;
  margin-top: 5px;
  margin-bottom: 5px;
`
