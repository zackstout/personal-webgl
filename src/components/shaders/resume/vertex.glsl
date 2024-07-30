varying vec2 vUv;
uniform float uProgress;

void main()
{
    vec3 newPos = position;
    // wow just scale this from like .1 to 3. with scroll
    float scl = 1.3 + .4 * uProgress;
    newPos.y += scl * pow(sin(position.x * 100.0 + position.y * 70.0 + uProgress), 1.);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPos, 1.0);
    vUv = uv;
}