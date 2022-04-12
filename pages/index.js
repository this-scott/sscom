import Head from 'next/head'
import Navbar from '../components/navbar/navbar'
import React from 'react'
import Homeslider from '../components/homeslider/homeslider'
import Aboutme from '../components/aboutme/aboutme'


//home page
export default function Home() {
  return (
    //this might be scuffed
    <>
    <Head>
      <title>ScottStyslinger</title>
      <meta name="keywords" content='Scott Styslinger, Scott, Styslinger'/>
    </Head>
    <Navbar></Navbar>
    <Homeslider></Homeslider>
    <Aboutme></Aboutme>
    </>
  )
}


