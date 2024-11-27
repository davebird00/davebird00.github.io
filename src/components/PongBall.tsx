import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';


const PongBall = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    const updateCanvasSize = () => {
      const navbarHeight = 60; 
      renderer.setSize(window.innerWidth, window.innerHeight - navbarHeight);
      camera.aspect = window.innerWidth / (window.innerHeight - navbarHeight);
      camera.updateProjectionMatrix();
    };
    updateCanvasSize();
    renderer.setClearColor('#205556');
    mountRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.SphereGeometry(1, 32, 32);

    const light = new THREE.DirectionalLight(0xF4EFE6, 0.05);
    light.position.set(0, 5, 5);
    scene.add(light);

    const ambientLight = new THREE.AmbientLight(0x404040, 0.1);
    scene.add(ambientLight);

    const material = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec3 vNormal;
        varying vec3 vPosition;

        void main() {
          vNormal = normalize(normalMatrix * normal);
          vPosition = vec3(modelViewMatrix * vec4(position, 1.0));
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        uniform vec3 lightPosition;
        varying vec3 vNormal;
        varying vec3 vPosition;

        void main() {
          vec3 lightDir = normalize(lightPosition - vPosition);
          float diff = max(dot(vNormal, lightDir), 0.0);
          vec3 ambient = vec3(0.1, 0.1, 0.1);
          vec3 diffuse = vec3(1.0, 1.0, 1.0) * diff;
          vec3 color = ambient + diffuse;
          gl_FragColor = vec4(color, 1.0);
        }
      `,
      uniforms: {
        time: { value: 0 },
        lightPosition: { value: light.position },
      },
    });

    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    camera.position.z = 5;

    let velocityY = 0;
    let positionY = 2;

    const animate = (time: number) => {
      material.uniforms.time.value = time / 1000;
      velocityY += -0.0009;  // Gravity
      positionY += velocityY;

      if (positionY <= 0) {
        positionY = 0;
        velocityY *= -1; // Bounce effect
      }

      sphere.position.y = positionY;
      sphere.rotation.x += 0.01;
      sphere.rotation.y += 0.01;

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate(0);

    const handleResize = () => {
      updateCanvasSize();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full -z-50"/>;
};

export default PongBall;
