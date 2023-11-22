import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Abstract_Scene_1 = () => {
    const { nodes, materials } = useGLTF('./models/abstract_scene_1.glb')
    console.log(nodes, materials)
    return (
        <>
            <mesh
                receiveShadow
                geometry={nodes.Plane.geometry}
                material={materials['floor']}
                position={nodes.Plane.position}
                rotation={nodes.Plane.rotation}
                scale={nodes.Plane.scale}
            />
            
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cone.geometry}
                material={materials['cone']}
                position={nodes.Cone.position}
                rotation={nodes.Cone.rotation}
                scale={nodes.Cone.scale}
            />

            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cone001.geometry}
                material={materials['cone']}
                position={nodes.Cone001.position}
                rotation={nodes.Cone001.rotation}
                scale={nodes.Cone001.scale}
            />

            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cone002.geometry}
                material={materials['cone']}
                position={nodes.Cone002.position}
                rotation={nodes.Cone002.rotation}
                scale={nodes.Cone002.scale}
            />

            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube001.geometry}
                material={materials['cuboid']}
                position={nodes.Cube001.position}
                rotation={nodes.Cube001.rotation}
                scale={nodes.Cube001.scale}
            />

            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube002.geometry}
                material={materials['cuboid']}
                position={nodes.Cube002.position}
                rotation={nodes.Cube002.rotation}
                scale={nodes.Cube002.scale}
            />

            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube003.geometry}
                material={materials['cuboid']}
                position={nodes.Cube003.position}
                rotation={nodes.Cube003.rotation}
                scale={nodes.Cube003.scale}
            />

            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube004.geometry}
                material={materials['cuboid']}
                position={nodes.Cube004.position}
                rotation={nodes.Cube004.rotation}
                scale={nodes.Cube004.scale}
            />

            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube005.geometry}
                material={materials['cuboid']}
                position={nodes.Cube005.position}
                rotation={nodes.Cube005.rotation}
                scale={nodes.Cube005.scale}
            />

            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube006.geometry}
                material={materials['cuboid']}
                position={nodes.Cube006.position}
                rotation={nodes.Cube006.rotation}
                scale={nodes.Cube006.scale}
            />

            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Sphere.geometry}
                material={materials['ball']}
                position={nodes.Sphere.position}
                rotation={nodes.Sphere.rotation}
                scale={nodes.Sphere.scale}
            />

            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Sphere001.geometry}
                material={materials['ball']}
                position={nodes.Sphere001.position}
                rotation={nodes.Sphere001.rotation}
                scale={nodes.Sphere001.scale}
            />

            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Sphere002.geometry}
                material={materials['ball']}
                position={nodes.Sphere002.position}
                rotation={nodes.Sphere002.rotation}
                scale={nodes.Sphere002.scale}
            />

            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Sphere003.geometry}
                material={materials['ball']}
                position={nodes.Sphere003.position}
                rotation={nodes.Sphere003.rotation}
                scale={nodes.Sphere003.scale}
            />

            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Sphere004.geometry}
                material={materials['ball']}
                position={nodes.Sphere004.position}
                rotation={nodes.Sphere004.rotation}
                scale={nodes.Sphere004.scale}
            />

            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Sphere005.geometry}
                material={materials['ball']}
                position={nodes.Sphere005.position}
                rotation={nodes.Sphere005.rotation}
                scale={nodes.Sphere005.scale}
            />

            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Sphere006.geometry}
                material={materials['ball']}
                position={nodes.Sphere006.position}
                rotation={nodes.Sphere006.rotation}
                scale={nodes.Sphere006.scale}
            />

            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Sphere007.geometry}
                material={materials['ball']}
                position={nodes.Sphere007.position}
                rotation={nodes.Sphere007.rotation}
                scale={nodes.Sphere007.scale}
            />

            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Sphere008.geometry}
                material={materials['ball']}
                position={nodes.Sphere008.position}
                rotation={nodes.Sphere008.rotation}
                scale={nodes.Sphere008.scale}
            />

            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Sphere009.geometry}
                material={materials['ball']}
                position={nodes.Sphere009.position}
                rotation={nodes.Sphere009.rotation}
                scale={nodes.Sphere009.scale}
            />

            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Sphere010.geometry}
                material={materials['ball']}
                position={nodes.Sphere010.position}
                rotation={nodes.Sphere010.rotation}
                scale={nodes.Sphere010.scale}
            />

            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Sphere011.geometry}
                material={materials['ball']}
                position={nodes.Sphere011.position}
                rotation={nodes.Sphere011.rotation}
                scale={nodes.Sphere011.scale}
            />

            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Sphere012.geometry}
                material={materials['ball']}
                position={nodes.Sphere012.position}
                rotation={nodes.Sphere012.rotation}
                scale={nodes.Sphere012.scale}
            />

            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Sphere013.geometry}
                material={materials['ball']}
                position={nodes.Sphere013.position}
                rotation={nodes.Sphere013.rotation}
                scale={nodes.Sphere013.scale}
            />

            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Sphere014.geometry}
                material={materials['ball']}
                position={nodes.Sphere014.position}
                rotation={nodes.Sphere014.rotation}
                scale={nodes.Sphere014.scale}
            />

            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Sphere015.geometry}
                material={materials['ball']}
                position={nodes.Sphere015.position}
                rotation={nodes.Sphere015.rotation}
                scale={nodes.Sphere015.scale}
            />
        </>
    )
}

export default Abstract_Scene_1