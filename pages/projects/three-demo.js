import { useEffect, useRef, useState } from "react";
import Layout from "../../components/layout";
import * as THREE from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';


export default function ThreeDemo() {
    const containerRef = useRef(null);
    const [renderer, setRenderer] = useState(new THREE.WebGLRenderer());
    const [scene, setScene] = useState(new THREE.Scene());
    const [camera, setCamera] = useState(new THREE.PerspectiveCamera());

    useEffect(() => {
        setScene(new THREE.Scene());
        setRenderer(new THREE.WebGLRenderer({ antialias: true }));
        setCamera(new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.25, 20 ));
        
        if (renderer == null){
            alert("No renderer");
        }
        loader(renderer, scene, camera);
    })

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
            {renderer ? renderer.domElement : null}
        </Layout>
    )   
}