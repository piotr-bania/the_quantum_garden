import { useGLTF } from '@react-three/drei'

const Cube_5 = (props) => {
    const { nodes, materials } = useGLTF('./models/Cube_5.glb')

    return (
        <mesh
            castShadow
            scale={1}
            position={props.position || [0, 0, 0]}
            geometry={nodes.Cube_5.geometry}
            material={materials['Cube_5']}
        />
    )
}

export default Cube_5