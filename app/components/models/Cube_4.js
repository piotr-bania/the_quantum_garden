import { useGLTF } from '@react-three/drei'

const Cube_4 = (props) => {
    const { nodes, materials } = useGLTF('./models/Cube_4.glb')

    return (
        <mesh
            castShadow
            scale={1}
            position={props.position || [0, 0, 0]}
            geometry={nodes.Cube_4.geometry}
            material={materials['Cube_4']}
        />
    )
}

export default Cube_4