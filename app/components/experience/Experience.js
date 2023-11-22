import { Cone } from '@react-three/drei'
import Quantum_Floor from '../models/Quantum_Floor'
import Quantum_Grid from '../models/Quantum_Grid'
import Cone_1 from '../models/Cone_1'
import Cube_1 from '../models/Cube_1'
import Cone_2 from '../models/Cone_2'
import Cube_2 from '../models/Cube_2'
import Cube_3 from '../models/Cube_3'
import Cube_4 from '../models/Cube_4'
import Cube_5 from '../models/Cube_5'
import Cube_6 from '../models/Cube_6'
import Cube_7 from '../models/Cube_7'
import Cylinder_1 from '../models/Cylinder_1'
import Icosphere_1 from '../models/Icosphere_1'
import Icosphere_2 from '../models/Icosphere_2'
import Sphere_1 from '../models/Sphere_1'
import Sphere_2 from '../models/Sphere_2'
import Sphere_3 from '../models/Sphere_3'
import Abstract_Scene_1 from '../scenes/Abstract_Scene_1'

const Experience = () => {
    return (
        <>
            {/* <Abstract_Scene_1 /> */}
            
            <Quantum_Floor position={[0, -.53, 0]} />
            <Quantum_Grid position={[0, -.53, 0]} />
            <Cube_1 position={[5, 0, 5]}  scale={[1, 1, 1]} />
            <Cube_2 position={[5, 0, 3]}  scale={[1, 1, 1]} />
            <Cube_3 position={[5, 0, 1]}  scale={[1, 1, 1]} />
            <Cube_2 position={[5, 0, -1]} scale={[1, 1, 1]} />
            <Cube_7 position={[5, 0, -3]} scale={[1, 1, 1]} />
            <Cube_2 position={[-1, 0, 5]}  scale={[1, 1, 1]} />
            <Cube_3 position={[-1, 0, 3]}  scale={[1, 1, 1]} />
            <Cube_4 position={[-1, 0, 1]}  scale={[1, 1, 1]} />
            <Cube_5 position={[-1, 0, -1]} scale={[1, 1, 1]} />
            <Cube_6 position={[-1, 0, -3]} scale={[1, 1, 1]} />
            <Cube_7 position={[3, 0, 5]}  scale={[1, 1, 1]} />
            <Cube_5 position={[3, 0, 3]}  scale={[1, 1, 1]} />
            <Cube_1 position={[3, 0, 1]}  scale={[1, 1, 1]} />
            <Cube_2 position={[3, 0, -1]} scale={[1, 1, 1]} />
            <Cube_4 position={[3, 0, -3]} scale={[1, 1, 1]} />
            <Cube_3 position={[1, 0, 5]}  scale={[1, 1, 1]} />
            <Cube_5 position={[1, 0, 3]}  scale={[1, 1, 1]} />
            <Cube_6 position={[1, 0, 1]}  scale={[1, 1, 1]} />
            <Cube_3 position={[1, 0, -1]} scale={[1, 1, 1]} />
            <Cube_1 position={[1, 0, -3]} scale={[1, 1, 1]} />
            
            {/* <Cone_1 position={[2, 2, 0]} />
            <Cone_2 position={[-2, 2, 0]} />
            <Cube_1 position={[0, 0, 0]} />
            <Cube_2 position={[0, 0, -2]} />
            <Cube_3 position={[0, 0, 2]} />
            <Cube_4 position={[2, 0, 2]} />
            <Cube_5 position={[-2, 0, 2]} />
            <Cube_6 position={[2, 0, -2]} />
            <Cube_7 position={[-2, 0, -2]} />
            <Cylinder_1 position={[2, .5, 0]} />
            <Icosphere_1 position={[-4, 1, 0]} />
            <Icosphere_2 position={[4, 1, 0]} />
            <Sphere_1 position={[2, 2, 2]} />
            <Sphere_2 position={[-2, 2, -2]} />
            <Sphere_3 position={[0, 2, 0]} /> */}
        </>
    )
}

export default Experience