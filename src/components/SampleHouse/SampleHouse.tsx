import { Canvas, useFrame } from '@react-three/fiber'
import { Suspense, useState, useRef, useEffect } from 'react'
import {
  Environment,
  Html,
  useProgress,
  CameraControls
} from '@react-three/drei'
import * as THREE from 'three'
import Houses2 from './Houses2'
const { DEG2RAD } = THREE.MathUtils

const Lights = () => {
  return (
    <>
      <directionalLight position={[3.3, 1.0, 4.4]} castShadow />
      <ambientLight color="#c8cb80" visible={true} />
    </>
  )
}

const Loader = () => {
  const { progress } = useProgress()
  return <Html center>{progress} % loaded</Html>
}

const Scene = () => {
  const [loaded, setLoaded] = useState(false)
  const cameraControlsRef = useRef<CameraControls | null>(null)
  const cameraChangeHandler = (num: string) => {
    if (cameraControlsRef.current) {
      switch (num) {
        case 'load':
          cameraControlsRef.current.dollyTo(10, true)
          cameraControlsRef.current.rotateAzimuthTo(30 * DEG2RAD, true)
          cameraControlsRef.current.rotatePolarTo(80 * DEG2RAD, true)

          break
        case 'A':
          cameraControlsRef.current.moveTo(0, 0, 0, true)
          cameraControlsRef.current.rotateAzimuthTo(30 * DEG2RAD, true)
          cameraControlsRef.current.rotatePolarTo(80 * DEG2RAD, true)
          cameraControlsRef.current.maxAzimuthAngle = 80 * DEG2RAD
          cameraControlsRef.current.minAzimuthAngle = -80 * DEG2RAD
          break
        case 'B':
          cameraControlsRef.current.moveTo(0, 0, -10, true)
          cameraControlsRef.current.rotateAzimuthTo(160 * DEG2RAD, true)
          cameraControlsRef.current.rotatePolarTo(60 * DEG2RAD, true)
          cameraControlsRef.current.maxAzimuthAngle = 200 * DEG2RAD
          cameraControlsRef.current.minAzimuthAngle = 120 * DEG2RAD
          break
        default:
          break
      }
    }
  }

  useEffect(() => {
    setLoaded(true)
  }, [])

  useEffect(() => {
    if (loaded) {
      cameraChangeHandler('load')
    }
  }, [loaded])

  useFrame(() => {
    // cameraControlsRef.current?.moveTo(0, 0, -10, true)
    // cameraControlsRef.current?.rotateAzimuthTo(160 * DEG2RAD, true)
    // cameraControlsRef.current?.rotatePolarTo(60 * DEG2RAD, true)
    // cameraControlsRef.current?.forward(1, true)
  })

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Environment
          files="https://cdn.jsdelivr.net/gh/Sean-Bradley/React-Three-Fiber-Boilerplate@environment/public/img/venice_sunset_1k.hdr"
          background
          blur={0.5}
        />
        <Houses2 />
        <axesHelper args={[50]} />
      </Suspense>
      <Lights />
      <CameraControls
        ref={cameraControlsRef}
        distance={40}
        minDistance={2.5}
        smoothTime={1}
        maxDistance={10}
        maxAzimuthAngle={80 * DEG2RAD}
        minAzimuthAngle={-80 * DEG2RAD}
        maxPolarAngle={80 * DEG2RAD}
        azimuthAngle={-40 * DEG2RAD}
        polarAngle={60 * DEG2RAD}
      />
    </>
  )
}

const SampleHouse = () => {
  return (
    <Canvas shadows>
      <Scene />
    </Canvas>
  )
}

export default SampleHouse
