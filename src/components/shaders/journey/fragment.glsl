
varying vec2 vUv;

uniform float uTime;
uniform float uAspect;
uniform float uProgress;


// =================================================


// https://lygia.xyz/generative/wavelet

// #include ./rotate2D.glsl
// #include ./random.glsl

mat2 rotate2D(const in float r){
    float c = cos(r);
    float s = sin(r);
    return mat2(c, -s, s, c);
}

float random(in vec2 st) {
// #ifdef RANDOM_SINLESS
//     vec3 p3  = fract(vec3(st.xyx) * RANDOM_SCALE.xyz);
//     p3 += dot(p3, p3.yzx + 33.33);
//     return fract((p3.x + p3.y) * p3.z);
// #else
    return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453);
// #endif
}


float wavelet(vec2 p, float phase, float k) {
    float d = 0.0, s = 1.0, m=0.0, a = 0.0;
    for (float i = 0.0; i < 4.0; i++) {
        vec2 q = p*s;
        a = random(floor(q)) * 1e3;
        // #ifdef WAVELET_VORTICITY
        // a += phase * random(floor(q)) * WAVELET_VORTICITY;
        // #endif
        q = (fract(q) - 0.5) * rotate2D(a);
        d += sin(q.x * 10.0 + phase) * smoothstep(.25, 0.0, dot(q,q)) / s;
        p = p * mat2(0.54,-0.84, 0.84, 0.54) + i;
        m += 1.0 / s;
        s *= k; 
    }
    return d / m;
}

float wavelet(vec3 p, float k) {
    return wavelet(p.xy, p.z, k);
}

float wavelet(vec3 p) {
    return wavelet(p, 1.24);
} 

float wavelet(vec2 p, float phase) {
    return wavelet(p, phase, 1.24);
} 

float wavelet(vec2 p) {
    return wavelet(p, 0.0, 1.24);
} 


// =================================================

vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x) {
     return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

float snoise(vec3 v)
  {
  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

// First corner
  vec3 i  = floor(v + dot(v, C.yyy) );
  vec3 x0 =   v - i + dot(i, C.xxx) ;

// Other corners
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min( g.xyz, l.zxy );
  vec3 i2 = max( g.xyz, l.zxy );

  //   x0 = x0 - 0.0 + 0.0 * C.xxx;
  //   x1 = x0 - i1  + 1.0 * C.xxx;
  //   x2 = x0 - i2  + 2.0 * C.xxx;
  //   x3 = x0 - 1.0 + 3.0 * C.xxx;
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y
  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y

// Permutations
  i = mod289(i);
  vec4 p = permute( permute( permute(
             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

// Gradients: 7x7 points over a square, mapped onto an octahedron.
// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)
  float n_ = 0.142857142857; // 1.0/7.0
  vec3  ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4( x.xy, y.xy );
  vec4 b1 = vec4( x.zw, y.zw );

  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;
  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;
  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

  vec3 p0 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1.xy,h.z);
  vec3 p3 = vec3(a1.zw,h.w);

//Normalise gradients
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

// Mix final noise value
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                dot(p2,x2), dot(p3,x3) ) );
  }


float rand(vec2 co){
    return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453);
}

vec3 hsv2rgb(vec3 c)
{
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

// ======================================================

void main()
{
    vec2 uv = vUv;
    uv.x *= uAspect;

    // Used for village and forest
    vec3 sky = vec3(.7, .8, .9);
    vec3 darksky = vec3(.2, .2, .9);

    vec3 gold = vec3(.8, .5, .2); // gold
    vec3 mag = vec3(.9, .1, .9); // mag

    vec3 c = vec3(0.0);

// The background that shows for everything and loops through hues
    for (int i=0; i < 9; i++){
        vec2 tgt = vec2(.5 + rand(uv), .5 + rand(uv));
        tgt.x *= uAspect;

        float x = .002 / distance(uv, tgt);
        // c += vec3(x);

        c += hsv2rgb(vec3(.7 + uProgress * 1.15, 1., x));
    }

    // Because we have 7 sections.
    float timeInterval = 1./7.;

    // The stars
    float starTime = timeInterval * 1.;
    float starTransition = .1;

   


    if (uProgress < starTime + starTransition){
       
    


    for (int i=0; i < 12; i++){
        // vec2 tgt = vec2(.5 + rand(uv), .5 + rand(uv));

        float offset = -1. * rand(vec2(i * 7)) * .1;

        // OK! This makes circle come in from .1 to .2, then out from .2 to .3
        float s1 = smoothstep(starTime - starTransition, starTime + offset, uProgress);
        float s2 = smoothstep(starTime + starTransition, starTime + offset, uProgress);




        // vec2 ctr = vec2(float(i) / 10. * uAspect, .5);
        vec2 ctr = vec2(1.5 - rand(vec2(i * 30)), rand(vec2(i + 12)));

        ctr.x = ctr.x * .5 + .75;
        ctr.y = ctr.y * .5 + 0.25;

        // Oooh yeah max them POP OUT!
        ctr = mix(vec2(.5 * uAspect, .5), ctr, s1);

        float e1 = distance(uv,ctr);
        // float e1 = distance(uv, tgt);
        e1 = step(e1, .15);

        float r = 0.0005 + 0.0015 * rand(vec2(i + 3));
        r += .0003 * sin(uTime * 2. + float(i) * 3.);

        vec3 c1 = hsv2rgb(vec3(.6 + .25 * rand(vec2(i)), 1., r / distance(uv, ctr)));

        // c += vec3(e1 * s1 * s2);
        c += c1 * e1 * s1 * s2;
    }

    }
   
   // ======================================================
   

   // Mountains
    float mtnTime = timeInterval * 1.9;
    float mtnTransition = .1;

    if (uProgress < mtnTime + mtnTransition && uProgress > mtnTime - mtnTransition){
    
    vec2 uvC = uv;
    uvC *= 40.;
    uvC = floor(uvC);
    float offset = uvC.x + uvC.y;
    offset = floor(offset);

    float t = mtnTime + 0.01 * 0.;

    float ms1 = smoothstep(t - mtnTransition, t, uProgress);
    float ms2 = smoothstep(t + mtnTransition, t, uProgress);


    // Vaporwave sun:
   

    vec3 mtn = gold;
    mtn = mix(mtn, mag, uv.y - .2); // subtract more to make more gold

    float d = distance(uv, vec2(.5 * uAspect, .5));
    float sunSize = .2;
    sunSize = mix(0., sunSize, ms1);

    // Oh wow this is nice, makes it "explode" away
    float distort = 1.;
    // Nice this is more what I wanted. Both are cool though.
    distort = snoise(vec3(20. * vec2(uv.x - .5 * uAspect, uv.y - .5), 1.)) * .2;
    sunSize += mix(0., distort, 1. - ms2);

    mtn = mix(mtn, vec3(0.05), 1. - step(d, sunSize));


    // Cool grass-like or city-like things, but not very mountain like...
    // float yVal = .3;
    // yVal += snoise(vec3(floor(uv.x * 20.), uProgress * .5, 1.)) * .05;
    // vec3 bg = vec3(.3, .8, .6);
    // bg.b -= rand(vec2(floor(uv.x * 20.))) * .5;
    // bg.r += rand(vec2(floor(uv.x * 20.))) * .5;
    // float co = step(uv.y, yVal);
    // c += bg * co * ms1 * ms2;


    for (int i=0; i < 16; i++){
        float w = .6 + rand(vec2(i)) * .4;
        float xx = rand(vec2(i + 2)) * 2.;
        float y = .1 + rand(vec2(i + 1)) * .1;

        y += mix(0., .2, pow(ms1, .5));
        y -= mix(.2, 0., pow(ms2, .5));

        vec3 bg = vec3(.3, .8, .6);
        bg.b += rand(vec2(i + 20)) * .6 * cos(uTime * .3 + float(i));

        // Whoa unintentional supernova lol... ok fixed it
        float amt = step(abs(uv.x - xx), w);

        // Changing... yesss pretty close, ish.
        amt = step(abs(uv.x -xx), w * -1. * (uv.y - y));

        // c += bg * ms1 * ms2 * amt;

        // Yeah nice, rather than additive, this causes opaque feeling to each mountain. But sun still over laps which feels cool.
        c = mix(c, bg, ms1 * ms2 * amt);
    }


    // vec3 mtn = vec3(uv, .5);
    c += mtn * ms1 * ms2;

  }

   // ======================================================

    // Trees
    float treeTime = timeInterval * 3.;
    float treeTransition = .1;


    if (uProgress < treeTime + treeTransition && uProgress > treeTime - treeTransition){

    float ts1 = smoothstep(treeTime - treeTransition, treeTime, uProgress);
    float ts2 = smoothstep(treeTime + treeTransition, treeTime, uProgress);
    float timeOffset = cos(uTime * .2 + uv.x * uv.x) * .4;
    vec3 tree = mix(sky, darksky, 1. - uv.y + timeOffset);
    // Changing.... to moss....
    // Ok now let's iterate it....
    // TODO: Not really helping
    vec3 moss1 = vec3(.2, .8, .2);
    vec3 moss2 = vec3(.4, .9, .1);

    tree = mix(moss1, moss2, wavelet(uv * 8., (ts1 - ts2) * 12.));
    // for (int i=0; i < 2; i++){
    //     tree = mix(tree, moss2, wavelet(uv * 3. * float(i), (ts1-ts2*ts2) * 4.));
    // }



    // Background honestly magically turned out kind of ok as like tree rings... 
    // Yeah really still want to use it...
    float size = snoise(vec3(uv, 1. + (ts1 + ts2) * .3));
    vec3 treeBg = vec3(.7, .3, .3);
    float treeBg2 = snoise(vec3(floor(uv * size * (8. + 4. * cos((ts1 + ts2) * .3))), 1.)) * .5;
    treeBg.g += treeBg2 * .2;


    // Lol cool but not quite...
    // tree = mix(tree, treeBg, (ts1 - ts2) * 8. + uv.y * 2.);

    // Cutting between bark tree and tree mosss stuff ..
    // Note that 2.5 doesn't quite work on SD, to show both -- changing to 3 to tarnsition to wood faster
    tree = mix(tree, treeBg, step(uv.x + uv.y, 5.2 + (pow(ts1, .3) - ts2) * 20.));


    c += tree * ts1 * ts2;
    }

   // ======================================================

    // Village
    float villageTime = timeInterval * 3.6;
    float villageTransition = .1;

    if (uProgress < villageTime + villageTransition && uProgress > villageTime - villageTransition){


    float vs1 = smoothstep(villageTime - villageTransition, villageTime, uProgress);
    float vs2 = smoothstep(villageTime + villageTransition, villageTime, uProgress);

    vec3 village = mix(darksky, sky, 1. - uv.y);

    float goldOffset = .3;
    float magOffset = .6;
    village = mix(village, gold, goldOffset + (1.2 * vs1 - uv.y) * 1.);

    village = mix(village, vec3(1., .2, .1), magOffset + 2.5 * pow(1. - vs2, 4.) - uv.y * 3.);


    // I actually like this a lot.. Add some lights? Just a big ass hill hahhaa
    // float cityY = snoise(vec3(uv.x, 1., 1.)) * 3.;

    // Also love this, cactus cities
    float cityY = snoise(vec3(uv.x * 10., 1., 1.)) * 3.;
    
    float pp = uProgress * 3.;

    cityY = snoise(vec3(floor(uv.x * 100. + 50. * cos(pp * .1)) * (.02 + .01 * cos(pp * .2)), 2., 3. + .2 * cos(pp))* 3.);

    village = mix(village, vec3(.05), step(uv.y, cityY));

    c += village * vs1 * vs2;

    }

   // ======================================================

    // Tide Pools
    // Huh should be 5. ... but want to make city disappear faster
    float tideTime = timeInterval * 4.5;
    float tideTransition = .1;


    if (uProgress < tideTime + tideTransition && uProgress > tideTime - tideTransition){


    float tps1 = smoothstep(tideTime - tideTransition, tideTime, uProgress);
    float tps2 = smoothstep(tideTime + tideTransition, tideTime, uProgress);



    vec3 tide = vec3(uv, .5);
    vec3 slate = vec3(.44, .5, .86);
    vec3 seaweed = vec3(.2, .5, .1);
    vec3 cerulean = vec3(0., .48, .65);
    vec3 slate2 = vec3(.2, .3, .3);


    float rockyNoise = snoise(vec3(uv * 15., .5));
    rockyNoise = step(rockyNoise, .6);
    vec3 rock = mix(seaweed, slate2, rockyNoise);

    float edgeNoise = snoise(vec3(uv.y * 70., 1., 2.));
    edgeNoise += snoise(vec3(uv.y * 2., 3., 4. + uProgress * 2.)) * 7.;

    // For tide pools on left, uv.x - 1.4 was good here
    edgeNoise = step(edgeNoise * .005, uv.x - 1.);
    vec3 bg = mix(seaweed, vec3(1.) - vec3(.8,.8,.9), edgeNoise);

    float bgNoise = snoise(vec3(uv * 4., 1.));
    bgNoise += snoise(vec3(uv * 10., 2. + uProgress * 3.)) * (tps1);
    bgNoise = pow(bgNoise, 3.);
    bgNoise = abs(bgNoise);
    bgNoise = smoothstep(.25, .26, bgNoise);
    // Brighten pools slightly vs the ocean color
    tide = mix(rock, cerulean * 1.1, bgNoise);

    vec3 edge = vec3(1.) - vec3(.8, .8, .9);
    float waterNoise = snoise(vec3(uv * 4., 1. + uProgress * 5.));
    waterNoise += snoise(vec3(uv * 60., 3. + uProgress * 2.));
    waterNoise = step(waterNoise, 1.2);

    // Add pink to clouds
    vec3 cloud = vec3(1.);
    cloud = mix(cloud, vec3(1., .8, .8), rand(floor(uv * 8.)));

  // TODO: add a touch of green to ocean 
    edge = mix(cloud, cerulean, waterNoise);

    // Make it so tide pools are on right, not competing with text
    // tide = mix(tide, edge, edgeNoise);
    tide = mix(edge, tide, edgeNoise);

    c += tide * tps1 * tps2;

    }

   // ======================================================

    // Depths
    float diveTime = timeInterval * 5.5;
    float diveTransition = .1;


    if (uProgress < diveTime + diveTransition && uProgress > diveTime - diveTransition){

    float ds1 = smoothstep(diveTime - diveTransition, diveTime, uProgress);
    float ds2 = smoothstep(diveTime + diveTransition, diveTime, uProgress);


    vec3 deep = vec3(.05, .05, .3);

    vec3 mid = vec3(.1, .15, .35);

    float waterCut = .5 + sin(uv.x * .9) * (.2 + uProgress * .1);
    waterCut = step(waterCut, .4 + ds2 - uv.y);


    vec3 dive = vec3(uv, .5);
    dive = deep;

    // dive = mix(deep, mid, waterCut);

    for (int i=0; i < 14; i++){
        float freq = rand(vec2(float(i) / 2.)) * pow(uProgress, 1.1) * ds1;
        float wc = .5 + sin(uv.x * freq * float(i)) * (rand(vec2(i)) + uProgress * 1.2 * (rand(vec2(i + 1))));
        wc = step(wc, .1 * float(i) / 14. + (uProgress - .6) * 4. - uv.y);

        float brightness = .2 + .6 * float(i) / 6.;
        dive = mix(dive, mid * brightness, wc);
    }
    c += dive * ds1 * ds2;

    }


   // ======================================================

    // c = vec3(vUv, .5);
    gl_FragColor = vec4(c, 1.);


}