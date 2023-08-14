import React, { useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';

const Pentagon: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered,setHover] = useState(false)


  useEffect(() => {
    if (meshRef.current) {
      const edges = new THREE.EdgesGeometry(meshRef.current.geometry);
      const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 'black', linewidth: 4 }));
      meshRef.current.add(line);
    }
  }, []);

  return (
    <mesh ref={meshRef} onPointerOver={() => setHover(true)} onPointerOut={() => setHover(false)}>
      <circleGeometry args={[1, 5]} /> {/* 1 is the radius, 5 is the number of segments */}
      <meshBasicMaterial color={ hovered ? 'red' : 'white'} />
    </mesh>
  );
};

export const App: React.FC = () => {
  return (
    <Canvas style={{ height: '100vh', width: '100vw' }}>
      <ambientLight />
      <pointLight position={[0, 0, 0]} />
      <Pentagon />
    </Canvas>
  );
};