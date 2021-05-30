uniform vec2 u_resolution;

varying vec2 v_pos;

void main() {
    v_pos = uv - 0.5;
    if (u_resolution.x < u_resolution.y) {
        v_pos.x *= u_resolution.x / u_resolution.y;
    } else {
        v_pos.y *= u_resolution.y / u_resolution.x;
    }
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
