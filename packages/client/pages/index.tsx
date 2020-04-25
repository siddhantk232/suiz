import React, { useEffect, useState } from 'react'
import { GoogleLogin, GoogleLoginResponse } from 'react-google-login'
import { useMutation } from '@apollo/react-hooks'
import styled from 'styled-components'
import { useRouter } from 'next/router'

import { withApollo } from '../apollo/apollo'
import { CREATE_USER } from '../graphql'

import Layout from '../components/Layout'
import Card from '../components/Card'

const Index = () => {
  const router = useRouter()

  const [user, setUser] = useState<{
    name: string
    email: string
    imageUrl: string
  }>()
  const [addUser] = useMutation<
    any,
    {
      input: {
        name: string
        email: string
        imageUrl: string
      }
    }
  >(CREATE_USER)

  const handleRegistration = signInWithGoogle => {
    if (user?.name) {
      return router.push('/dashboard')
    }

    signInWithGoogle()
  }

  const responseGoogle = async (res: GoogleLoginResponse) => {
    const {
      profileObj: { name, email, imageUrl }
    } = res

    const data: any = await addUser({
      variables: { input: { email, name, imageUrl } }
    })

    if (data.data.createUser.name) {
      localStorage.setItem('user', JSON.stringify(data.data.createUser))
      router.push('/dashboard')
    }
  }

  useEffect(() => {
    const localUser = JSON.parse(localStorage.getItem('user'))

    if (localUser)
      setUser({
        name: localUser.name,
        email: localUser.email,
        imageUrl: localUser.imageUrl
      })
  }, [])

  return (
    <Layout>
      <header
        style={{
          height: '50vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Title color="#0055ff" size="4" isBrand>
          SUIZ
        </Title>
        <Subtitle>
          A dead simple quiz platform for teachers and students.
        </Subtitle>

        <GoogleLogin
          clientId="475431053484-o4onijc8ibkvdmjfhode3km33r4kgjo3.apps.googleusercontent.com"
          render={renderProps => (
            <Button
              onClick={() => handleRegistration(renderProps.onClick)}
              disabled={renderProps.disabled}
            >
              Get Started
            </Button>
          )}
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
      </header>

      <br />

      <section>
        <Title color="#fff" size="2">
          HOW IT WORKS?
        </Title>

        <br />

        <Card />
        <br />
        <Card />
        <br />
        <Card />
      </section>
    </Layout>
  )
}

const Title = styled.h1`
  margin: 0;
  color: ${({ color }) => color};
  text-align: center;
  font-family: 'Luckiest Guy', cursive;
  font-style: normal;
  font-weight: normal;
  font-size: ${({ size }) => `${size}rem`};
  letter-spacing: ${({ isBrand }) => (isBrand ? '0.17em' : null)};
`

const Subtitle = styled.p`
  margin-top: 5px;
  text-align: center;
  font-family: Luckiest Guy;
  font-style: normal;
  font-weight: normal;
  font-size: 0.8rem;
`

const Button = styled.button`
  border: 0;
  padding: 15px 30px;
  background-color: #0055ff;
  border-radius: 02px;
  color: #fff;
  font-weight: 600;

  &:hover {
    filter: brightness(1.4);
    cursor: pointer;
  }
`

export default withApollo({ ssr: false })(Index)
