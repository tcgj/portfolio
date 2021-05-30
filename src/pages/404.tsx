import * as React from "react"

import { Navbar } from "../components/sections/navbar"
import { Footer } from "../components/sections/footer"
import { ShaderCanvas } from "../components/shadercanvas"
import * as fragmentShader from "../shaders/basic.frag"

export default function Error() {
    return (
        <div>
            <Navbar />
            <h1>404</h1>
            <p>Page Not Found</p>
            <div id="canvas-container" style={{ width: "100%", height: "600px" }}>
                <ShaderCanvas fragmentShader={fragmentShader.default} />
            </div>
            <Footer />
        </div >
    )
}
