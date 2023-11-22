import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Quantum_Floor = (props) => {
    const { nodes, materials } = useGLTF('./models/Quantum_Floor.glb')

    return (
        <mesh
            receiveShadow
            scale={1}
            position={props.position || [0, 0, 0]}
            geometry={nodes.Quantum_Floor.geometry}
            material={materials['Quantum_Floor']}
        />
    )
}

export default Quantum_Floor