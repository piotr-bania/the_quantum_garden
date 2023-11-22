import { useGLTF } from '@react-three/drei'

const Sphere_2 = (props) => {
    const { nodes, materials } = useGLTF('./models/Sphere_2.glb')

    return (
        <mesh
            castShadow
            scale={1}
            position={props.position || [0, 0, 0]}
            geometry={nodes.Sphere_2.geometry}
            material={materials['Sphere_2']}
        />
    )
}

export default Sphere_2