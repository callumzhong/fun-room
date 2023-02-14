import { Canvas, useFrame } from '@react-three/fiber'
import { useState, useRef, useEffect, lazy } from 'react'
import {
  Environment,
  Html,
  useProgress,
  CameraControls
} from '@react-three/drei'
import * as THREE from 'three'
import MultiAnglePanel from './MultiAnglePanel'
import CAMERA_ANGLES from './CAMERA_ANGLES.json'
import Houses2 from './Houses2'

const { DEG2RAD } = THREE.MathUtils

// const Houses2 = lazy(async () => {
//   await new Promise((resolve) => setTimeout(resolve, 3000))
//   return import('./Houses2')
// })

const Lights = () => {
  return (
    <>
      <directionalLight position={[3.3, 1.0, 4.4]} castShadow />
      <ambientLight color="#c8cb80" visible={true} />
    </>
  )
}

type Annotation = {
  move: {
    x: number
    y: number
    z: number
  }
  azimuthAngle: number
  polarAngle: number
  maxAzimuthAngle: number
  minAzimuthAngle: number
}

const Scene = ({
  annotationIndex,
  isRedraw
}: {
  annotationIndex: number
  isRedraw: boolean
}) => {
  const [loaded, setLoaded] = useState(false)
  const cameraControlsRef = useRef<CameraControls | null>(null)
  const cameraChangeHandler = (annotation: Annotation) => {
    if (cameraControlsRef.current) {
      cameraControlsRef.current.moveTo(
        annotation.move.x,
        annotation.move.y,
        annotation.move.z,
        true
      )
      cameraControlsRef.current.rotateAzimuthTo(
        annotation.azimuthAngle * DEG2RAD,
        true
      )
      cameraControlsRef.current.rotatePolarTo(
        annotation.polarAngle * DEG2RAD,
        true
      )
      cameraControlsRef.current.maxAzimuthAngle =
        annotation.maxAzimuthAngle * DEG2RAD
      cameraControlsRef.current.minAzimuthAngle =
        annotation.minAzimuthAngle * DEG2RAD
    }
  }
  const { progress } = useProgress()

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        setLoaded(true)
      }, 200)
    }
  }, [progress])

  useEffect(() => {
    if (loaded && cameraControlsRef.current) {
      cameraControlsRef.current.dollyTo(10, true)
      cameraControlsRef.current.rotateAzimuthTo(30 * DEG2RAD, true)
      cameraControlsRef.current.rotatePolarTo(80 * DEG2RAD, true)
    }
  }, [loaded])

  useFrame(() => {
    if (isRedraw) {
      cameraChangeHandler(CAMERA_ANGLES[annotationIndex].annotation)
    }
  })

  return (
    <>
      {/* <Suspense
        fallback={
          <Html fullscreen>
            <Loading progress={progress} />
          </Html>
        }> */}
      <Environment
        files="https://cdn.jsdelivr.net/gh/Sean-Bradley/React-Three-Fiber-Boilerplate@environment/public/img/venice_sunset_1k.hdr"
        background
        blur={0.5}
      />
      <Houses2 />
      <Lights />
      {/* </Suspense> */}
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
  const [annotationIndex, setAnnotationIndex] = useState(0)
  const [isRedraw, setIsRedraw] = useState(false)
  const redrawHandler = () => {
    setIsRedraw(false)
  }

  const annotationHandler = (idx: number) => {
    setIsRedraw(true)
    setAnnotationIndex(idx)
  }

  return (
    <>
      <MultiAnglePanel annotationHandler={annotationHandler} />
      <div className="relative z-0 h-full">
        <Canvas onPointerDown={redrawHandler} onWheel={redrawHandler} shadows>
          <Scene isRedraw={isRedraw} annotationIndex={annotationIndex} />
        </Canvas>
      </div>
    </>
  )
}

export default SampleHouse
