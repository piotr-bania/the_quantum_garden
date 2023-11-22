import { useGLTF } from '@react-three/drei'

const Cylinder_1 = (props) => {
    const { nodes, materials } = useGLTF('./models/Cylinder_1.glb')

    return (
        <mesh
            castShadow
            scale={1}
            position={props.position || [0, 0, 0]}
            geometry={nodes.Cylinder_1.geometry}
            material={materials['Cylinder_1']}
        />
    )
}

export default Cylinder_1