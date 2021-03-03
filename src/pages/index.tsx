import Head from 'next/head';
import { GetServerSideProps } from 'next';

import styles from '../styles/pages/Home.module.css';


import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import { CompletedChallenges } from '../components/CompletedChallenges'
import { Countdown } from '../components/Countdown';
import { ChallengeBox } from '../components/ChallengeBox';
import { CountdownProvider } from '../contexts/CountdownContext';
import { NextScript } from 'next/document';
import { ChallengesProvider } from '../contexts/ChallengesContext';

interface  HomeProps {
  level: number;
  currentExperience:  number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {

  return (
    <ChallengesProvider 
    level={props.level}
    currentExperience={props.currentExperience}
    challengesCompleted={props.challengesCompleted}
    >

    <div className={styles.container}>
      <Head>
          <title> moveit </title>
      </Head>
        <ExperienceBar />

        <CountdownProvider>
          <section>
                <div>
                      <Profile  />
                      <CompletedChallenges  />
                      <Countdown  />                  
                </div>
                <div>   
                      <ChallengeBox />
                </div>
                <div>   
                      
                </div>
          </section>
        </CountdownProvider>
	</div>
  </ChallengesProvider>
  )
}


 export const getServerSideProps: GetServerSideProps = async (ctx) => {

    const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

    // const user = {
    //   level: 1,
    //   currentExperience: 50,
    //   challengesCompleted: 2,
    // }

    // console.log(user);

   return {
     props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
     }
   }
 }

  // Back-end (Ruby) 3 camada

  // Next (Node.js) 1 camada

  // Front-end (React) 2 camada