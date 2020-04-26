import { useEffect, useState } from 'react'
import styled from 'styled-components'

import { Header, Title } from '../components/Header'
import Layout from '../components/Layout'

export default function Dashboard() {
  const [user, setUser] = useState()

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))

    if (user) setUser(user)
  }, [])

  return (
    <Layout>
      <Header>
        <Title size="2.6" color="#fff">
          Welcome <span style={{ color: '#0055ff' }}>{user?.name}</span>
        </Title>
      </Header>

      <Container>
        <Title
          style={{ borderBottom: '1px solid #0055ff', width: '200px' }}
          size="1.8"
        >
          YOUR QUIZZES
        </Title>

        <br />

        <Quizzes>
          <Quiz>
            <div style={{ padding: '20px' }}>
              <Title isBrand color="#0055ff" size="1.5">
                NAME
              </Title>
              <br />

              <p>Visited: 789</p>
              <p>Submitted: 89</p>
              <p>Questions: 12</p>
            </div>

            <div
              style={{ width: '40%', backgroundColor: 'rgb(255, 0, 229)' }}
            ></div>
          </Quiz>
          <Quiz>
            <div style={{ padding: '20px' }}>
              <Title isBrand color="#0055ff" size="1.5">
                NAME
              </Title>
              <br />

              <p>Visited: 789</p>
              <p>Submitted: 89</p>
              <p>Questions: 12</p>
            </div>

            <div
              style={{ width: '40%', backgroundColor: 'rgb(255, 0, 229)' }}
            ></div>
          </Quiz>
          <Quiz>
            <div style={{ padding: '20px' }}>
              <Title isBrand color="#0055ff" size="1.5">
                NAME
              </Title>
              <br />

              <p>Visited: 789</p>
              <p>Submitted: 89</p>
              <p>Questions: 12</p>
            </div>

            <div
              style={{ width: '40%', backgroundColor: 'rgb(255, 0, 229)' }}
            ></div>
          </Quiz>
          <Quiz>
            <div style={{ padding: '20px' }}>
              <Title isBrand color="#0055ff" size="1.5">
                NAME
              </Title>
              <br />

              <p>Visited: 789</p>
              <p>Submitted: 89</p>
              <p>Questions: 12</p>
            </div>

            <div
              style={{ width: '40%', backgroundColor: 'rgb(255, 0, 229)' }}
            ></div>
          </Quiz>
          <Quiz>
            <div style={{ padding: '20px' }}>
              <Title isBrand color="#0055ff" size="1.5">
                NAME
              </Title>
              <br />

              <p>Visited: 789</p>
              <p>Submitted: 89</p>
              <p>Questions: 12</p>
            </div>

            <div
              style={{ width: '40%', backgroundColor: 'rgb(255, 0, 229)' }}
            ></div>
          </Quiz>
          <Quiz>
            <div style={{ padding: '20px' }}>
              <Title isBrand color="#0055ff" size="1.5">
                NAME
              </Title>
              <br />

              <p>Visited: 789</p>
              <p>Submitted: 89</p>
              <p>Questions: 12</p>
            </div>

            <div
              style={{ width: '40%', backgroundColor: 'rgb(255, 0, 229)' }}
            ></div>
          </Quiz>
        </Quizzes>
      </Container>
    </Layout>
  )
}

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
`
const Quiz = styled.div`
  background: #242834;
  border: 2px solid rgb(255, 0, 229);
  box-sizing: border-box;
  box-shadow: 4px -4px 4px #15171ead;
  border-radius: 10px;

  display: flex;
  justify-content: space-between;

  p {
    margin: 5px 0;
    padding: 0;
  }

  &:hover {
    filter: brightness(1.5);
    cursor: pointer;
  }
`

const Quizzes = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 1.5rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 450px) {
    grid-template-columns: 1fr;
  }
`
