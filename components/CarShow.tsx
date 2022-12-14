import React from 'react'
import { CubeCamera, Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import Ground from './Ground'
import Car from './Car'
import Rings from './Rings'
import Boxes from './Boxes'
import { Bloom, ChromaticAberration, EffectComposer, DepthOfField } from '@react-three/postprocessing'
import {BlendFunction} from 'postprocessing';
import FloatingGrid from './FloatingGrid'


function CarShow() {
  return (
    <>
        <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45}/>

        <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]}/>

        {/* Color */}
        <color args={[0, 0, 0]} attach="background"/>


        {/* Car Model */}
        <CubeCamera resolution={256} >
        {(texture) => (
            <>
            <Environment map={texture}/>
            <Car
            position={[0, -0.015, 0]} 
            castShadow
            receiveShadow
            />
            </>
        )}
        </CubeCamera>

        {/* Rings */}
        <Rings/>

        {/* Boxes */}
        <Boxes/>
        <FloatingGrid/>


        {/* Spotlight */}
        < spotLight
        color={[1, 0.25, 0.7]}
        intensity={1.5}
        angle={0.6}
        penumbra={0.5}
        position={[5, 5, 0]}
        castShadow
        shadowBias={-0.0001}
        />

        <spotLight
        color={[0.14, 0.5, 1]}
        intensity={2}
        angle={0.6}
        penumbra={0.5}
        position={[-5, 5, 0]}
        castShadow
        shadowBias={-0.0001}
        />

        <Ground/>

        <EffectComposer>
            <DepthOfField focusDistance={0.0035} focalLength={0.01} bokehScale={3} height={480}/>
            <Bloom 
            blendFunction={BlendFunction.ADD}
            intensity={1.3}
            width={300}
            height={300}
            kernelSize={5}
            luminanceThreshold={0.15}
            luminanceSmoothing={0.025}
            />
            <ChromaticAberration 
            blendFunction={BlendFunction.NORMAL} // blend mode
            offset={0.0005, 0.0012} // color reset
            />
        </EffectComposer>
        

    </>
  )
}

export default CarShow