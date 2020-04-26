import React, { useEffect, useState } from 'react'
import { GoogleLogin, GoogleLoginResponse } from 'react-google-login'
import { useMutation } from '@apollo/react-hooks'
import styled from 'styled-components'
import { useRouter } from 'next/router'

import { withApollo } from '../apollo/apollo'
import { CREATE_USER } from '../graphql'

import Layout from '../components/Layout'
import Card from '../components/Card'
import { Header, Title, Subtitle } from '../components/Header'

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
      <Header>
        <Title center color="#0055ff" size="4" isBrand>
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
      </Header>

      <br />

      <section>
        <Title center color="#fff" size="2">
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
