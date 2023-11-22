import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const Cone_2 = (props) => {
    const Cone_2_Ref = useRef()
    const { nodes, materials } = useGLTF('./models/Cone_2.glb')

    useFrame(() => {
        Cone_2_Ref.current.rotation.y -= 0.002
    })

    return (
        <mesh
            castShadow
            ref={Cone_2_Ref}
            scale={1}
            position={props.position || [0, 0, 0]}
            geometry={nodes.Cone_2.geometry}
            material={materials['Cone_2']}
        />
    )
}

export default Cone_2