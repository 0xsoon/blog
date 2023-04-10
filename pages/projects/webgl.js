import { useEffect, useRef } from "react";
import Layout from "../../components/layout";

export default function WebGl() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const gl = canvas.getContext("webgl");
        if (gl == null){
            alert("Unable to initialize WebGL." 
            + "Your browser or machine may not support it.");
            return;
        }
        // Set clear color to black, fully opaque
        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        // Clear the color buffer with specified clear color
        gl.clear(gl.COLOR_BUFFER_BIT);
    }, [])
    
    return (
        <Layout>
            <canvas ref={canvasRef} id="glcanvas" width="640" height="480"></canvas>
        </Layout>
    )
}