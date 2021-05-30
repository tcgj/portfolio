precision mediump float;
precision mediump int;

uniform float u_time;

varying vec2 v_pos;

#define EPSILON 0.00001
#define MAX_STEPS 100
#define SURFACE_DIST 0.000001
#define MAX_DIST 100.0

// Scene
vec3 lightPos = vec3(0, 5, 6);

float getDist(vec3 p) {
    vec4 sphere = vec4(0, 1, 6, 0.5);
    float ds = length(p - sphere.xyz) - sphere.w;
    vec3 a = vec3(2, 2, 7);
    vec3 b = vec3(2,4,7);
    float h = min(1.0, max(0.0, dot(p-a,b-a)/dot(b-a,b-a)));
    float dseg = length(p-a-(b-a)*h) - 0.5;
    float dp = p.y;
    // return min(dp,ds);
    return min(min(dp, ds), dseg);
}

vec3 getNormal(vec3 p) {
    float d = getDist(p);
    vec2 e = vec2(0.001, 0);

    vec3 n = d - vec3(
        getDist(p-e.xyy),
        getDist(p-e.yxy),
        getDist(p-e.yyx));
    return normalize(n);
}

float march(vec3 o, vec3 d) {
    float o_dist = 0.0;
    for (int i = 0; i < MAX_STEPS; ++i) {
        vec3 p = o + o_dist * d;
        float s_dist = getDist(p);
        o_dist += s_dist;
        if (s_dist < SURFACE_DIST || o_dist > MAX_DIST) {
            break;
        }
    }
    return o_dist;
}

float getLight(vec3 p, vec3 n) {
    vec3 l = normalize(lightPos - p);

    float diffuse = saturate(dot(l, n));
    float d = march(p + EPSILON * n, l);
    if (d < length(lightPos - p)) {
        diffuse = 0.0;
    }
    return diffuse;
}

void main() {
    lightPos.xz += vec2(sin(u_time), cos(u_time));
    vec2 uv = v_pos;

    vec3 o = vec3(0, 2, 0);
    vec3 d = normalize(vec3(uv, 1));

    float dist = march(o, d);
    if (dist > MAX_DIST)
        discard;

    vec3 p = o + dist * d;
    vec3 n = getNormal(p);
    float dif = getLight(p, n);

    vec3 col = vec3(dif);

    gl_FragColor = vec4(col, 1.0);
}
