import { useGLTF } from '@react-three/drei'

const Sphere_1 = (props) => {
    const { nodes, materials } = useGLTF('./models/Sphere_1.glb')

    return (
        <mesh
            castShadow
            scale={1}
            position={props.position || [0, 0, 0]}
            geometry={nodes.Sphere_1.geometry}
            material={materials['Sphere_1']}
        />
    )
}

export default Sphere_1