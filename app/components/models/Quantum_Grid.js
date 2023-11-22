import { useGLTF } from '@react-three/drei'

const Quantum_Grid = (props) => {
    const { nodes, materials } = useGLTF('./models/Quantum_Grid.glb')

    return (
        <mesh
            receiveShadow
            ref={Quantum_Grid}
            scale={1}
            position={props.position || [0, 0, 0]}
            geometry={nodes.Quantum_Grid.geometry}
            material={materials['Quantum_Grid']}
        />
    )
}

export default Quantum_Grid