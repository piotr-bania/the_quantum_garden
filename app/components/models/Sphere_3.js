import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const Sphere_3 = (props) => {
    const Sphere_3_Ref = useRef()
    const { nodes, materials } = useGLTF('./models/Sphere_3.glb')

    useFrame(() => {
        Sphere_3_Ref.current.rotation.y += 0.002
        Sphere_3_Ref.current.rotation.x -= 0.002
        Sphere_3_Ref.current.rotation.z += 0.001
    })
    return (
        <mesh
            castShadow
            ref={Sphere_3_Ref}
            scale={1}
            position={props.position || [0, 0, 0]}
            geometry={nodes.Sphere_3.geometry}
            material={materials['Sphere_3']}
        />
    )
}

export default Sphere_3