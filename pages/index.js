import Head from 'next/head'
import Navbar from '../components/navbar/navbar'
import React from 'react'
import Homeslider from '../components/homeslider/homeslider'
import Aboutme from '../components/aboutme/aboutme'
import Bottombar from '../components/bottombar/bottombar'
import Overhaul from '../components/overhaul/overhaul'


//home page
export default function Home() {
  return (
    //this might be scuffed
    <>
    <Head>
      <title>Home - ScottStyslinger.com</title>
      <meta name="keywords" content='Scott Styslinger, Scott, Styslinger'/>
    </Head>
    <Overhaul></Overhaul>
    </>
  )
}


