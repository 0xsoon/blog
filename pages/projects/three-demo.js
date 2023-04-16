import { useEffect, useRef, useState } from "react";

import Layout from "../../components/layout";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { useGLTF, OrbitControls} from "@react-three/drei";


export default function ThreeDemo() {

    const Model = () => {
        const gltf = useGLTF("../adidas_sports_shoe.glb");
        return (
            <>
                <mesh>
                    <primitive object={gltf.scene} scale={1.0}/>
                </mesh>
            </>
        )
    }

    return (
        <Layout>
            <div id="canvas-container" class="h-80">
                <Canvas style={{ background: "#171717" }}>
                    <ambientLight intensity={1} />
                    <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
                    <Suspense fallback={null}>
                        <Model />
                    </Suspense>
                    <OrbitControls />
                </Canvas>
            </div>
        </Layout>
    )   
}