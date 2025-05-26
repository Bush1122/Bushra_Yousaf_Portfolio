// src/components/experimental/ParticleBackground.js
import { useEffect, useRef, useMemo } from "react";
import * as THREE from "three";
import { useTheme } from "../../context/ThemeContext";

// Import SVG icons as strings (you'll need to add these)
const icons = {
  react: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><circle cx="64" cy="64" r="11.4" fill="#61dafb"/><path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.7 7.1 2.4-2.2.8-4.5 1.6-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.2-.8 4.5-1.6 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6.1 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.7-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6z" fill="#61dafb"/><path d="M64 85.1c-11.6 0-21-9.4-21-21s9.4-21 21-21 21 9.4 21 21-9.4 21-21 21zm0-37.1c-8.9 0-16 7.1-16 16s7.1 16 16 16 16-7.1 16-16-7.1-16-16-16z" fill="#61dafb"/></svg>`,
  nodejs: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#83CD29" d="M112.895 30.914L67.175 3.324a7.901 7.901 0 00-7.902 0L13.555 30.914a7.902 7.902 0 00-3.95 6.84v52.492a7.902 7.902 0 003.95 6.84l45.72 27.59a7.902 7.902 0 007.902 0l45.72-27.59a7.902 7.902 0 003.95-6.84V37.754a7.902 7.902 0 00-3.95-6.84zM64 123.07a3.95 3.95 0 01-3.95-3.95v-7.902a3.95 3.95 0 013.95-3.95 3.95 3.95 0 013.95 3.95v7.902A3.95 3.95 0 0164 123.07zm31.6-19.754a3.95 3.95 0 01-3.95 3.95H36.35a3.95 3.95 0 01-3.95-3.95V41.704a3.95 3.95 0 013.95-3.95h55.3a3.95 3.95 0 013.95 3.95v61.612z"/><path fill="#83CD29" d="M64 11.857a3.95 3.95 0 013.95 3.95v7.902a3.95 3.95 0 01-3.95 3.95 3.95 3.95 0 01-3.95-3.95v-7.902a3.95 3.95 0 013.95-3.95z"/><path fill="#fff" d="M64 98.22c-13.856 0-25.13-11.274-25.13-25.13S50.144 47.96 64 47.96s25.13 11.274 25.13 25.13S77.856 98.22 64 98.22zm0-42.36c-9.5 0-17.23 7.73-17.23 17.23s7.73 17.23 17.23 17.23 17.23-7.73 17.23-17.23-7.73-17.23-17.23-17.23z"/><path fill="#fff" d="M64 85.29c-6.765 0-12.27-5.505-12.27-12.27S57.235 60.75 64 60.75s12.27 5.505 12.27 12.27S70.765 85.29 64 85.29zm0-16.54a4.27 4.27 0 100 8.54 4.27 4.27 0 000-8.54z"/></svg>`,
  tailwind: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0" fill="#38b2ac"/></svg>`,
  git: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#F05133" d="M124.737 58.378L69.621 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.68 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314 2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679-3.78 3.78-9.901 3.78-13.683 0-2.842-2.844-3.545-7.019-2.105-10.521L68.574 47.933l-.002 34.341a9.708 9.708 0 012.559 1.828c3.778 3.777 3.778 9.898 0 13.683-3.779 3.777-9.904 3.777-13.679 0-3.778-3.784-3.778-9.905 0-13.683a9.65 9.65 0 013.167-2.11V47.333a9.581 9.581 0 01-3.167-2.111c-2.862-2.86-3.551-7.06-2.083-10.576L41.056 20.333 3.264 58.123c-3.172 3.172-3.172 8.32 0 11.497l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858a8.13 8.13 0 002.473-5.802c0-2.197-.85-4.26-2.473-5.804z"/></svg>`,
  // Add more icons as needed
};

const ParticleBackground = ({ particleDensity = 30 }) => {
  const mountRef = useRef(null);
  const { theme } = useTheme();

  // Create a texture loader
  const textureLoader = useMemo(() => new THREE.TextureLoader(), []);

  // Convert SVG strings to textures
  const iconTextures = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 128;
    canvas.height = 128;
    const ctx = canvas.getContext("2d");

    return Object.keys(icons).map((iconName) => {
      // Create a temporary div to parse SVG
      const div = document.createElement("div");
      div.innerHTML = icons[iconName];
      const svg = div.firstChild;

      // Draw SVG to canvas
      const img = new Image();
      const svgBlob = new Blob([svg.outerHTML], { type: "image/svg+xml" });
      const url = URL.createObjectURL(svgBlob);

      img.src = url;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, 128, 128);

      // Create texture from canvas
      const texture = textureLoader.load(canvas.toDataURL());
      texture.name = iconName;
      return texture;
    });
  }, [textureLoader]);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // Particles configuration
    const particlesCount = Math.min(
      Math.floor((window.innerWidth * window.innerHeight) / 1000),
      particleDensity
    );

    // Create particles with different icons
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.1,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
      vertexColors: true,
    });

    // Create attributes
    const posArray = new Float32Array(particlesCount * 3);
    const colorArray = new Float32Array(particlesCount * 3);
    const sizeArray = new Float32Array(particlesCount);
    const textureIndexArray = new Float32Array(particlesCount);

    // Theme-based colors
    const mainColor = new THREE.Color(theme === "dark" ? 0xffffff : 0x000000);
    const accentColor = new THREE.Color(0x61dafb); // React blue for example

    for (let i = 0; i < particlesCount; i++) {
      // Position
      posArray[i * 3] = (Math.random() - 0.5) * 20;
      posArray[i * 3 + 1] = (Math.random() - 0.5) * 20;
      posArray[i * 3 + 2] = (Math.random() - 0.5) * 20;

      // Color - mix between main and accent color
      const colorMix = Math.random() * 0.3; // Only slight accent coloring
      const color = mainColor.clone().lerp(accentColor, colorMix);
      colorArray[i * 3] = color.r;
      colorArray[i * 3 + 1] = color.g;
      colorArray[i * 3 + 2] = color.b;

      // Size variation
      sizeArray[i] = 0.05 + Math.random() * 0.1;

      // Texture index
      textureIndexArray[i] = Math.floor(Math.random() * iconTextures.length);
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3)
    );
    particlesGeometry.setAttribute(
      "color",
      new THREE.BufferAttribute(colorArray, 3)
    );
    particlesGeometry.setAttribute(
      "size",
      new THREE.BufferAttribute(sizeArray, 1)
    );
    particlesGeometry.setAttribute(
      "textureIndex",
      new THREE.BufferAttribute(textureIndexArray, 1)
    );

    // Create particles system
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // Camera position
    camera.position.z = 5;

    // Animation
    let frameId;
    const animate = () => {
      frameId = requestAnimationFrame(animate);

      // Rotate particles
      particles.rotation.x += 0.0005;
      particles.rotation.y += 0.0007;

      // Move particles in a flow field pattern
      const positions = particlesGeometry.attributes.position.array;
      for (let i = 0; i < particlesCount; i++) {
        const i3 = i * 3;

        // Create flowing movement with Perlin-like noise
        const x = positions[i3];
        const y = positions[i3 + 1];
        const z = positions[i3 + 2];

        positions[i3] += Math.sin(y * 0.1) * 0.001;
        positions[i3 + 1] += Math.cos(x * 0.1) * 0.001;
        positions[i3 + 2] += Math.sin(z * 0.1) * 0.001;

        // Wrap around edges
        if (Math.abs(positions[i3]) > 10) positions[i3] = -positions[i3] * 0.9;
        if (Math.abs(positions[i3 + 1]) > 10)
          positions[i3 + 1] = -positions[i3 + 1] * 0.9;
        if (Math.abs(positions[i3 + 2]) > 10)
          positions[i3 + 2] = -positions[i3 + 2] * 0.9;
      }
      particlesGeometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(frameId);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, [theme, particleDensity, iconTextures]);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none -z-10 opacity-30"
    />
  );
};

export default ParticleBackground;
