import Head from 'next/head'
import Navbar from '../components/navbar/navbar'
import React from 'react'
import Homeslider from '../components/homeslider/homeslider'
import Aboutme from '../components/aboutme/aboutme'
import Bottombar from '../components/bottombar/bottombar'


//home page
export default function Home() {
  return (
    //this might be scuffed
    <>
    <Head>
      <title>Home - ScottStyslinger.com</title>
      <meta name="keywords" content='Scott Styslinger, Scott, Styslinger'/>
    </Head>
    <Navbar></Navbar>
    <Homeslider></Homeslider>
    <Aboutme></Aboutme>
    <Bottombar></Bottombar>
    </>
  )
}


