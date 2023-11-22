import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const Cone_1 = (props) => {
    const Cone_1_Ref = useRef()
    const { nodes, materials } = useGLTF('./models/Cone_1.glb')

    useFrame(() => {
        Cone_1_Ref.current.rotation.y += 0.002
    })

    return (
        <mesh
            castShadow
            ref={Cone_1_Ref}
            scale={1}
            position={props.position || [0, 0, 0]}
            geometry={nodes.Cone_1.geometry}
            material={materials['Cone_1']}
        />
    )
}

export default Cone_1