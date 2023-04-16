import { useEffect, useRef, useState } from "react";

import Layout from "../../components/layout";
import { Mesh } from "three";
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { useLoader } from "@react-three/fiber";
import { Canvas } from "@react-three/fiber";
import { Suspense, useMemo } from "react";


export default function ThreeDemo() {
    // const containerRef = useRef(null);
    // const [renderer, setRenderer] = useState(new THREE.WebGLRenderer());
    // const [scene, setScene] = useState(new THREE.Scene());
    // const [camera, setCamera] = useState(new THREE.PerspectiveCamera());

    const Model = () => {
        const gltf = useLoader(GLTFLoader, "../scene.gltf");
        const [colorMap, normalMap, roughnessMap] = useLoader(TextureLoader, 
            ["../Textured_baseColor.jpeg", "../Textured_normal.jpeg", "../Textured_metallicRoughness.png"])
        const geometry = useMemo(() => {
            let g;
            gltf.traverse((c) => {
                if (c.type === "Mesh") {
                    const _c = c;
                    g = _c.geometry;
                }
            });
            return g;
        }, [gltf]);
        return (
            <>
                <mesh>
                    <primitive object={gltf.scene} scale={10.0}/>
                    <meshStandardMaterial 
                        colorMap={colorMap}
                        normalMap={normalMap}
                        roughnessMap={roughnessMap}
                    />
                </mesh>
            </>
        )
    }
    // useEffect(() => {
    //     setScene(new THREE.Scene());
    //     setRenderer(new THREE.WebGLRenderer({ antialias: true }));
    //     setCamera(new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.25, 20 ));
        
    //     if (renderer == null){
    //         alert("No renderer");
    //     }
    //     loader(renderer, scene, camera);
    // })

    // TODO: Add interface to protect type error
    function loader(renderer, scene, camera){
        const gltfLoader = new GLTFLoader();
        const url = 'models/Flamingo.glb';
        gltfLoader.load(url, (gltf) => {
            const root = gltf.scene;
            scene.add(root);
            render(renderer, scene, camera);
        })
    }

    // TODO: Add interface to protect type error
    function render(renderer, scene, camera) {
        renderer.render(scene, camera);
    }

    return (
        <Layout>
            <Canvas>
                <Suspense fallback={null}>
                    <Model />
                </Suspense>
            </Canvas>
        </Layout>
    )   
}