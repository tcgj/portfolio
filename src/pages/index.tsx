import "bootstrap/dist/css/bootstrap.min.css";
import "devicon/devicon.min.css";

import * as React from "react";
import { Canvas } from "@react-three/fiber";

import "../css/index.css";
import { Head } from "../components/head";
import { Navbar } from "../components/sections/navbar";
import { Intro } from "../components/sections/intro";
import { Projects } from "../components/sections/projects";
import { About } from "../components/sections/about";
import { Footer } from "../components/sections/footer";

const Index = () => {
    return (
        <>
            <Head />
            <div className="bg" />
            <Canvas>
                {/* <OrbitControls

                        enablePan={false}
                        enableZoom={false}
                        enableDamping
                        dampingFactor={0.5}
                        rotateSpeed={1}
                        maxPolarAngle={Math.PI / 2}
                        minPolarAngle={Math.PI / 2}
                    /> */}
                {/* <ShaderDisplay
                    fragmentShader={fragmentShader.default}
                    width={10}
                    height={10}
                    position={[3, 2, 0]}
                /> */}
                {/* <mesh position={[-5, -1, 0]}>
                        <meshBasicMaterial color="red" />
                        <boxBufferGeometry args={[1, 1, 1]} />
                    </mesh> */}
            </Canvas>
            <div className="scroll-area">
                <Navbar />
                <Intro />
                <Projects />
                <About />
                <Footer />
            </div>
        </>
    );
};

export default Index;
