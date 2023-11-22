import { useGLTF } from '@react-three/drei'

const Cube_6 = (props) => {
    const { nodes, materials } = useGLTF('./models/Cube_6.glb')

    return (
        <mesh
            castShadow
            scale={1}
            position={props.position || [0, 0, 0]}
            geometry={nodes.Cube_6.geometry}
            material={materials['Cube_6']}
        />
    )
}

export default Cube_6