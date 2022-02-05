import Head from 'next/head'
import Navbar from '../components/navbar'
import React from 'react'
import Homeslider from '../components/homeslider'
import Aboutme from '../components/aboutme'


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


