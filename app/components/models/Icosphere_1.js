import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const Icosphere_1 = (props) => {
    const Icosphere_1_Ref = useRef()
    const { nodes, materials } = useGLTF('./models/Icosphere_1.glb')

    useFrame(() => {
        Icosphere_1_Ref.current.rotation.y += 0.002
        Icosphere_1_Ref.current.rotation.x -= 0.002
        Icosphere_1_Ref.current.rotation.z += 0.001
    })

    return (
        <mesh
            castShadow
            ref={Icosphere_1_Ref}
            scale={1}
            position={props.position || [0, 0, 0]}
            geometry={nodes.Icosphere_1.geometry}
            material={materials['Icosphere_1']}
        />
    )
}

export default Icosphere_1