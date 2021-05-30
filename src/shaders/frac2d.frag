precision mediump float;
precision mediump int;

uniform float u_time;

varying vec2 v_pos;

#define PI 3.14159265358979
#define EPSILON 0.00001
#define MAX_STEPS 100
#define SURFACE_DIST 0.000001
#define MAX_DIST 100.0

float sdSphere(vec3 pos, float rad) {
    return length(pos) - rad;
}

mat2 rotate(float a) {
    float s = sin(a);
    float c = cos(a);
    return mat2(c, -s, s, c);
}

float map(vec3 pos) {
    float t = u_time;
    // Center spheres
    // Rotate ray
    pos.xy *= rotate(t);
    float numSpheres = 6.0;
    float radPerSph = 2.0*PI / numSpheres;
    float theta = mod(atan(pos.y, pos.x) + radPerSph / 2.0, radPerSph) - radPerSph / 2.0;
    vec3 q = vec3(length(pos.xy) * vec2(cos(theta), sin(theta)), pos.z);
    float d = sdSphere(q - vec3(0.1 * sin(t) + 0.1, 0.0, 0.0), 0.02);

    return d;
}

vec3 getNormal(vec3 pos) {
    vec2 e = vec2(0.0001, 0.0);
    return vec3(
        map(pos + e.xyy) - map(pos - e.xyy),
        map(pos + e.yxy) - map(pos - e.yxy),
        map(pos + e.yyx) - map(pos - e.yyx)
    );
}

float march(vec3 ro, vec3 rd) {
    float t = 0.0;
    for (int i = 0; i < MAX_STEPS; ++i) {
        vec3 pos = ro + t * rd;
        float d = map(pos);
        if (d < EPSILON)
            break;

        t += d;
        if (t > MAX_DIST) {
            t = -1.0;
            break;
        }
    }
    return t;
}

void main() {
    vec2 uv = v_pos;

    float f = 1.5;
    vec3 ro = vec3(0, 0, f);
    vec3 rd = normalize(vec3(uv, -f));

    float t = march(ro, rd);
    if (t == -1.0)
        discard;

    vec3 p = ro + t * rd;
    vec3 n = getNormal(p);

    vec3 col = vec3(t);

    gl_FragColor = vec4(col, 1.0);
}
