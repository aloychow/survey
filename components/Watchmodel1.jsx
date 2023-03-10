import { Canvas } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Suspense } from 'react';
import { useLoader } from 'react-three-fiber';
import { TextureLoader } from 'three';

function Watchmodel1()
{
    const gltf = useLoader(GLTFLoader, '/3dModel1/scene.gltf');
    const texture=useLoader(TextureLoader,'/3dModel1/textures/texture.png');
    return (
    <group>
      <mesh
        receiveShadow
        castShadow
        position={[0,0,0]}
      >
        <primitive object={gltf.scene}
        scale={[35,35,35]}
        rotation={[0,0,0]}
        />
        <meshStandardMaterial map={texture}
        />


        
        
      </mesh>
    </group>
  );
}
1
export default Watchmodel1