import * as React from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"

import * as vert from "../shaders/shadertoy.vert"

type ShaderToyProps = {
    fragmentShader: string
} & React.ComponentPropsWithoutRef<"mesh">

type ShaderDisplayProps = {
    width: number
    height: number
} & ShaderToyProps

export const ShaderDisplay = ({
    fragmentShader,
    width,
    height,
    ...meshProps
}: ShaderDisplayProps) => {
    const uniforms = React.useMemo(() => {
        const uniforms = {
            u_time: { value: 0.0 },
            u_resolution: { value: [width, height] }
        }
        return uniforms
    }, [])

    const shaderRef = React.useRef({ uniforms })

    useFrame((state, _) => { // (state, delta) => {}
        if (shaderRef) {
            shaderRef.current!.uniforms.u_resolution.value = [width, height]
            shaderRef.current!.uniforms.u_time.value = state.clock.elapsedTime
        }
    })

    return (
        <mesh {...meshProps}>
            <shaderMaterial vertexShader={vert.default} fragmentShader={fragmentShader} uniforms={uniforms} />
            <planeBufferGeometry args={[width, height]} />
        </mesh>
    )
}

const FullCanvasDisplay = ({
    fragmentShader
}: ShaderToyProps) => {
    const { width, height } = useThree(state => state.viewport)
    return (<ShaderDisplay fragmentShader={fragmentShader} width={width} height={height} />)
}

export const ShaderCanvas = ({
    fragmentShader
}: ShaderToyProps) => {
    return (
        <Canvas orthographic>
            <FullCanvasDisplay fragmentShader={fragmentShader} />
        </Canvas>
    )
}
