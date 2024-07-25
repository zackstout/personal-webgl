
varying vec2 vUv;

uniform float uTime;

void main()
{
    vec2 uv = vUv;


    gl_FragColor = vec4(vUv, .5, 1.);


}