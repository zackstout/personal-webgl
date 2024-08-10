varying vec2 vUv;
uniform float uProgress;

precision highp float;

void main()
{
    vec3 newPos = position;
    // wow just scale this from like .1 to 3. with scroll
    float scl = .4 + .00004 * 0.;

    // Using 1.  - uProgress * .1 as power is cool...
    // Wow changing this is nuts, the position.y scaler... up to 70...
    newPos.y += scl * pow(sin(position.x * 3.0 + position.y * 31.0), 1.);

    newPos.x += scl  * 0. * pow(sin(position.x * .2 + position.y * 2.0 + uProgress * 0.), 1.);

    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPos, 1.0);
    vUv = uv;
}