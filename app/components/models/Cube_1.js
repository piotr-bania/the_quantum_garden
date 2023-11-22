import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const Cube_1 = (props) => {
    const Cube_1_Ref = useRef()
    const { nodes, materials } = useGLTF('./models/Cube_1.glb')

    // useFrame(() => {
    //     Cube_1_Ref.current.rotation.y -= 0.001
    // })

    return (
        <mesh
            castShadow
            receiveShadow
            // ref={Cube_1_Ref}
            scale={props.scale || [0, 0, 0]}
            position={props.position || [0, 0, 0]}
            geometry={nodes.Cube_1.geometry}
            material={materials['Cube_1']}
        />
    )
}

export default Cube_1