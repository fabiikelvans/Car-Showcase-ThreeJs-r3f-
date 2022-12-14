import React from 'react';
import { Physics } from '@react-three/cannon';
import Scene from './Scene';

function Physic() {
  return (
    <Physics
    broadphase='SAP'
    gravity={[0, -2.6, 0]}
    >
        <Scene/>
    </Physics>
  )
}

export default Physic