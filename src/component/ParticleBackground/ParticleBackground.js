import React from 'react';
import Particles from 'react-particles-js';
import ParticleConfig from '../ParticlejsConfig/particle.config';

export default function ParticleBackground(){
    return (
        <div style={{height:'0px'}}>
            <Particles params={ParticleConfig}></Particles>
        </div>
    );
}