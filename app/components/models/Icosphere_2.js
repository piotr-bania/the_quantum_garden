import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const Icosphere_2 = (props) => {
    const Icosphere_2_Ref = useRef()
    const { nodes, materials } = useGLTF('./models/Icosphere_2.glb')

    useFrame(() => {
        Icosphere_2_Ref.current.rotation.y -= 0.002
        Icosphere_2_Ref.current.rotation.x -= 0.002
        Icosphere_2_Ref.current.rotation.z += 0.001
    })

    return (
        <mesh
            castShadow
            ref={Icosphere_2_Ref}
            scale={1}
            position={props.position || [0, 0, 0]}
            geometry={nodes.Icosphere_2.geometry}
            material={materials['Icosphere_2']}
        />
    )
}

export default Icosphere_2