'use client'

import './hero_canvas.scss'
import { AnimatePresence, motion as m } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, Environment, OrbitControls } from '@react-three/drei'
import Experience from '../experience/Experience'
import { ACESFilmicToneMapping } from 'three'

const Hero_Canvas = () => {
    return (
        <AnimatePresence>
            <m.div
                initial={{opacity: 0}}
                animate={{opacity: 1, transition: {delay: 1, duration: 2}}}
                exit={{opacity: 0, transition: {duration: 1}}}
                className='hero_canvas'
            >
                <Canvas
                    shadows
                    gl={{
                        antialias: true,
                        preserveDrawingBuffer: true,
                        toneMapping: ACESFilmicToneMapping
                    }}
                    dpr={[1, 2]}
                    performance={{min: 0.5, max: 1}}
                >
                    <PerspectiveCamera
                        makeDefault
                        position={[Math.PI * 3, 3, 10]}
                        fov={40}
                    />

                    <Environment
                        files='./environment/satara_night_no_lamps_1k.hdr'
                        background
                        blur={0.5}
                    />

                    {/* <ambientLight intensity={1} /> */}

                    <directionalLight
                        castShadow
                        shadow-mapSize={[2048, 2048]}
                        intensity={10}
                        position={[5, 10, -5]}
                    />

                    <OrbitControls
                        // autoRotate
                        autoRotateSpeed={-.25}
                        // reverseHorizontalOrbit
                        rotateSpeed={0.1}
                        enablePan={false}
                        // enableZoom={false}
                        minPolarAngle={Math.PI / 2.5}
                        maxPolarAngle={Math.PI / 2}
                        minDistance={10}
                        maxDistance={20}
                        enableDamping={true}
                        dampingFactor={0.05}
                    />

                    <Experience />
                </Canvas>
            </m.div>
        </AnimatePresence>
    )
}

export default Hero_Canvas