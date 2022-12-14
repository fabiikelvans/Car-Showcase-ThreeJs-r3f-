import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Head from 'next/head'
import Image from 'next/image'
import { Suspense } from 'react'
import CarShow from '../components/CarShow'
import Physic from '../components/physics/Physics'
import Scene from '../components/physics/Scene'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
      <Suspense fallback={null}>
        <Canvas shadows>
          <Physic/>
        </Canvas>
      </Suspense>
      </div>
    </div>
  )
}
