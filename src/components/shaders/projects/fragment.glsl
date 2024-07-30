varying vec2 vUv;

void main()
{
    vec2 uv = vUv;
    vec4 darkBlue = vec4(0.0, 0.4, 0.2, 1.0);
    vec4 col = mix(vec4(vec3(0.05), 1.), darkBlue, pow(uv.y, 3.));
    gl_FragColor = col;
}