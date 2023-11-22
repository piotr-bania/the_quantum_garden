import React, { use, useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Cube_2 = (props) => {
    const { nodes, materials } = useGLTF('./models/Cube_2.glb')

    return (
        <mesh
            castShadow
            scale={props.scale || [0, 0, 0]}
            position={props.position || [0, 0, 0]}
            geometry={nodes.Cube_2.geometry}
            material={materials['Cube_2']}
        />
    )
}

export default Cube_2