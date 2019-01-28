import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

import avatar from '../images/avatar.jpg'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          Hello, <br /> I'm Rishabh.
        </BigTitle>
        <Subtitle>I'm a creative full stack web developer and a Computer Science graduate.</Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>Projects</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="Sabrang 2K19"
            link="https://github.com/Abhi2707/Sabrang-carnival-2K18"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            This project is a website of my college cultural fest!
          </ProjectCard>
          <ProjectCard
            title="Spardha 2K19"
            link="https://github.com/RJ-1998/Spardha"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            This project is a website for my college sport fest!
          </ProjectCard>
          <ProjectCard
            title="Cloud App"
            link="https://github.com/RJ-1998/Cloud-Network-Design-Application"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
            It's a small cloud based small web app! Just another learinig project.
          </ProjectCard>
          <ProjectCard
            title="AQI App"
            link="https://github.com/RJ-1998/AQI_APP"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
            A JSON API based web app which I am currently working on!
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt="John Doe" />
          <AboutSub>
            So you want to see how creative I am! Go on. Read the whole thing below and find out. But before you read
            just make sure there's nothing on your right shoulder. Just kidding!😜
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          This is my story of which you are just a 🔗link to a new lesson! My life's a great 📚book which has a lot of
          chapters to tell. If you wanna know about all my life, then you have to be a very good friend of mine😊. So,
          I'm a CS engineer and I ❤ programming and I like to edit photos using photoshop (sometimes I make 🤑money out
          of photoshop). I'm a professional web developer and designer and I like to build great websites just like
        this one. Checkout footer to connect with me!
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:rishabhjain16@jklu.edu.in">Hi</a> or find me on other platforms:{' '}
            <a href="https://github.com/RJ-1998">Github</a> &{''}
            <a href="https://twitter.com/U_CanCall_Me_RJ">Twitter</a>
          </ContactText>
        </Inner>
      </Contact>
    </Parallax>
  </>
)

export default Index
