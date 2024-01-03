import Head from 'next/head'
import { Arrows, Logo } from '../components/Icons'
import Marquee from 'react-fast-marquee'

export default function Home() {
  return (
    <>
      <Head>
        <title>Team 4788</title>
        <meta name="description" content="Curtin FRC, Team 4788's websites" />
      </Head>
      <div className="page">
        <div className="hero-no-padding">
          <div className="column">
            <Logo className="logo" />
            <Marquee speed={25} gradient={false} style={{ opacity: 0.80 }}>
              <h1>Can&apos;t Control//</h1>
            </Marquee>
            <Arrows className="arrows" />
          </div>
        </div>
        <div className='heros'>
          <h2>Who are we?</h2>
          <p>We are a community First Robotics Competition team based out of Curtin University from Western Australia (WA). Founded in 2013 we were the very first First team in WA and have started a variety of First programs here in WA. Along with ths we have also competed very succesfully in FRC for many years. Most Recently in 2023 we began competing at regionals again after COVID and won the Impact award sending us to Champs.</p>
          <h2>More Content</h2>
          <h2>More Content</h2>
          <h2>More Content</h2>
        </div>
      </div>
    </>
  )
}
