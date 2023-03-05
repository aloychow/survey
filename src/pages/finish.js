import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Navbar from 'components/Navbar'
import styled from 'styled-components'
import Link from "next/link";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background: #F3F8FE;
  
  justify-content: center;
  align-items: center;
  
  padding: 8rem 3rem;
`

const ContentText = styled.div`
  color: #000;
  font-size: 1.5rem;
  text-align: center;
  
  padding: 2rem 0 1rem 0;
`;

const StartButton = styled.button`
  color: #000;
  font-size: 1.5rem;
  background: #F3F8FE;
  padding: 0.75rem;
  margin-top: 3rem;
  border: 4px solid #000;
  border-radius: 3rem;
  
  &:hover {
    background: #6aaaab;
  }
`

export default function About() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <MainContainer>
        <h1>Thank you!</h1>
        <ContentText>You have come to the end of the survey. You may now close this tab.</ContentText>

      </MainContainer>
    </>
  )
}
