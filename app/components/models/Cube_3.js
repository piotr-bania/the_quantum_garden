import { useGLTF } from '@react-three/drei'

const Cube_3 = (props) => {
    const { nodes, materials } = useGLTF('./models/Cube_3.glb')

    return (
        <mesh
            castShadow
            scale={1}
            position={props.position || [0, 0, 0]}
            geometry={nodes.Cube_3.geometry}
            material={materials['Cube_3']}
        />
    )
}

export default Cube_3