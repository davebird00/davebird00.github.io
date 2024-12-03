import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Shine = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ref = mountRef.current;
    if (!ref) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer();
    renderer.setClearColor('#205556');
    renderer.setSize(window.innerWidth, window.innerHeight);
    ref.appendChild(renderer.domElement);

    const updateCanvasSize = () => {
      const navbarHeight = 60; 
      renderer.setSize(window.innerWidth, window.innerHeight - navbarHeight);
      camera.aspect = window.innerWidth / (window.innerHeight - navbarHeight);
      camera.updateProjectionMatrix();
    };

    updateCanvasSize();

    const outerRadius = 2; 
    const innerRadius = 1.3; 
    const geometry = new THREE.RingGeometry(innerRadius, outerRadius, 6); 
    const material = new THREE.MeshBasicMaterial({
      color: 0x00aaff, 
      side: THREE.DoubleSide, 
      wireframe: false, 
    });

    const hexagon = new THREE.Mesh(geometry, material);
    scene.add(hexagon);


    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);

      hexagon.rotation.x += 0.001;
      hexagon.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      ref.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full -z-50"/>;
};

export default Shine;
