varying vec2 vUv;
uniform float uProgress;


#define RANDOM_SCALE vec4(443.897, 441.423, .0973, .1099)

vec2 random2(vec2 p) {
    vec3 p3 = fract(p.xyx * RANDOM_SCALE.xyz);
    p3 += dot(p3, p3.yzx + 19.19);
    return fract((p3.xx + p3.yz) * p3.zy);
}

vec3 random3(vec3 p) {
    p = fract(p * RANDOM_SCALE.xyz);
    p += dot(p, p.yxz + 19.19);
    return fract((p.xxy + p.yzz) * p.zyx);
}

float worley(vec2 p){
    vec2 n = floor( p );
    vec2 f = fract( p );

    // Like .4 looks cool too (originally 1.)
    float dis = 1.;
    for( int j= -1; j <= 1; j++ )
        for( int i=-1; i <= 1; i++ ) {  
                vec2  g = vec2(i,j);
                vec2  o = random2( n + g );
                vec2  delta = g + o - f;
                float d = length(delta);
                dis = min(dis,d);
    }

    return 1.0-dis;
}

float worley(vec3 p) {
    vec3 n = floor( p );
    vec3 f = fract( p );

    float dis = 1.0;
    for( int k = -1; k <= 1; k++ )
        for( int j= -1; j <= 1; j++ )
            for( int i=-1; i <= 1; i++ ) {  
                vec3  g = vec3(i,j,k);
                vec3  o = random3( n + g );
                vec3  delta = g+o-f;
                float d = length(delta);
                dis = min(dis,d);
    }

    return 1.0-dis;
}

void main()
{
    vec3 newPos = position;
    
    
    float scl = .5 + .4 * pow(uProgress, 2.);

    float n = worley(vec2(position.x * 100.0 + .3 *uProgress));

    newPos.x += n * scl;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPos, 1.0);
    vUv = uv;
}