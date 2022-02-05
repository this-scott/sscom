import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import React from 'react'
import Homeslider from '../components/homeslider'
import Aboutme from '../components/aboutme'

//home page
export default function Home() {
  return (
    //this might be scuffed
    <>
    <Navbar>
      <Head>
        <title>sscom</title>
      </Head>
    </Navbar>
    <Homeslider></Homeslider>
    <Aboutme></Aboutme>
    </>
  )
}
