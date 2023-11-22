import { useGLTF } from '@react-three/drei'

const Cube_7 = (props) => {
    const { nodes, materials } = useGLTF('./models/Cube_7.glb')

    return (
        <mesh
            castShadow
            scale={1}
            position={props.position || [0, 0, 0]}
            geometry={nodes.Cube_7.geometry}
            material={materials['Cube_7']}
        />
    )
}

export default Cube_7