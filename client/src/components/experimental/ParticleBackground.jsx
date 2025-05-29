import { useEffect, useRef, useMemo } from "react";
import * as THREE from "three";
import { useTheme } from "../../context/ThemeContext";

// Pre-loaded SVG data URLs (convert your SVGs to data URLs)
const iconDataUrls = {
  react:
    "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTI4IDEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSI2NCIgY3k9IjY0IiByPSIxMS40IiBmaWxsPSIjNjFkYWZiIi8+PHBhdGggZD0iTTEwNy4zIDQ1LjJjLTIuMi0uOC00LjUtMS42LTYuOS0yLjMuNi0yLjQgMS4xLTQuOCAxLjUtNy4xIDIuMS0xMy4yLS4yLTIyLjUtNi42LTI2LjEtMS45LTEuMS00LTEuNi02LjQtMS42LTcgMC0xNS45IDUuMi0yNC45IDEzLjktOS04LjctMTcuOS0xMy45LTI0LjktMTMuOS0yLjQgMC00LjUuNS02LjQgMS42LTYuNCAzLjctOC43IDEzLTYuNiAyNi4xLjQgMi4zLjkgNC43IDEuNyA3LjEgMi40LTIuMi44LTQuNSAxLjYtNi45IDIuM0M4LjIgNTAgMS40IDU2LjYgMS40IDY0czYuOSAxNCAxOS4zIDE4LjhjMi4yLjggNC41IDEuNiA2LjkgMi4zLS42IDIuNC0xLjEgNC44LTEuNSA3LjEtMi4xIDEzLjIuMiAyMi41IDYuNiAyNi4xIDEuOSAxLjEgNCAxLjYgNi40IDEuNiA3LjEgMCAxNi01LjIgMjQuOS0xMy45IDkgOC43IDE3LjkgMTMuOSAyNC45IDEzLjkgMi40IDAgNC41LS41IDYuNC0xLjYgNi40LTMuNyA4LjctMTMgNi42LTI2LjEtLjQtMi4zLS45LTQuNy0xLjUtNy4xIDIuMi0uOCA0LjUtMS42IDYuOS0yLjMgMTIuNS00LjggMTkuMy0xMS40IDE5LjMtMTguOHMtNi44LTE0LTE5LjMtMTguOHpNOTIuNSAxNC43YzQuMSAyLjQgNS41IDkuOCAzLjggMjAuMy0uMyAyLjEtLjggNC4zLTEuNCA2LjYtNS4yLTEuMi0xMC43LTItMTYuNS0yLjUtMy40LTQuOC02LjktOS4xLTEwLjQtMTMgNy40LTcuMyAxNC45LTEyLjMgMjEtMTIuMyAxLjMgMCAyLjUuMyAzLjUuOXpNODEuMyA3NGMtMS44IDMuMi0zLjkgNi40LTYuMSA5LjYtMy43LjMtNy40LjQtMTEuMi40LTMuOSAwLTcuNi0uMS0xMS4yLS40LTIuMi0zLjItNC4yLTYuNC02LTkuNi0xLjktMy4zLTMuNy02LjctNS4zLTEwIDEuNi0zLjMgMy40LTYuNyA1LjMtMTAgMS44LTMuMiAzLjktNi40IDYuMS05LjYgMy43LS4zIDcuNC0uNCAxMS4yLS40IDMuOSAwIDcuNi4xIDExLjIuNCAyLjIgMy4yIDQuMiA2LjQgNi4xIDkuNiAxLjkgMy4zIDMuNyA2LjcgNS4zIDEwLTEuNyAzLjMtMy40IDYuNy01LjMgMTB6bTguMy0zLjNjMS41IDMuNSAyLjcgNi45IDMuOCAxMC4zLTMuNC44LTcgMS40LTEwLjggMS45IDEuMi0xLjkgMi41LTMuOSAzLjYtNiAxLjItMi4xIDIuMy00LjIgMy40LTYuMnptLTguMyAxNi41Yy0yLjQtMi42LTQuNy01LjQtNi45LTguMyAyLjMuMSA0LjYuMiA2LjkuMiAyLjMgMCA0LjYtLjEgNi45LS4yLTIuMiAyLjktNC41IDUuNy02LjkgOC4zem0tMTguNi0xNWMtMy44LS41LTcuNC0xLjEtMTAuOC0xLjkgMS4xLTMuMyAyLjMtNi44IDMuOC0xMC4zIDEuMSAyIDIuMiA0LjEgMy40IDYuMSAxLjIgMi4yIDIuNCA0LjEgMy42IDYuMXptLTctMjUuNWMtMS41LTMuNS0yLjctNi45LTMuOC0xMC4zIDMuNC0uOCA3LTEuNCAxMC44LTEuOS0xLjIgMS45LTIuNSAzLjktMy42IDYtMS4yIDIuMS0yLjMgNC4yLTMuNCA2LjJ6TTY0IDMwLjJjMi40IDIuNiA0LjcgNS40IDYuOSA4LjMtMi4zLS4xLTQuNi0uMi02LjktLjItMi4zIDAtNC42LjEtNi45LjIgMi4yLTIuOSA0LjUtNS43IDYuOS04LjN6bTIyLjIgMjFsLTMuNi02YzMuOC41IDcuNCAxLjEgMTAuOCAxLjktMS4xIDMuMy0yLjMgNi44LTMuOCAxMC4zLTEuMS0yLjEtMi4yLTQuMi0zLjQtNi4yek0zMS43IDM1Yy0xLjctMTAuNS0uMy0xNy45IDMuOC0yMC4zIDEtLjYgMi4yLS45IDMuNS0uOSA2IDAgMTMuNSA0LjkgMjEgMTIuMy0zLjUgMy44LTcgOC4yLTEwLjQgMTMtNS44LjUtMTEuMyAxLjQtMTYuNSAyLjUtLjYtMi4zLTEtNC41LTEuNC02LjZ6IiBmaWxsPSIjNjFkYWZiIi8+PHBhdGggZD0iTTY0IDg1LjFjLTExLjYgMC0yMS05LjQtMjEtMjFzOS40LTIxIDIxLTIxIDIxIDkuNCAyMSAyMS05LjQgMjEtMjEgMjF6bTAtMzcuMWMtOC45IDAtMTYgNy4xLTE2IDE2czcuMSAxNiAxNiAxNiAxNi03LjEgMTYtMTYtNy4xLTE2LTE2LTE2eiIgZmlsbD0iIzYxZGFmYiIvPjwvc3ZnPg==",
  nodejs:
    "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTI4IDEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSIjODNDRDI5IiBkPSJNMTEyLjg5NSAzMC45MTRMNjcuMTc1IDMuMzI0YTcuOTAxIDcuOTAxIDAgMDAtNy45MDIgMEwxMy41NTUgMzAuOTE0YTcuOTAyIDcuOTAyIDAgMDAtMy45NSA2Ljg0djUyLjQ5MmE3LjkwMiA3LjkwMiAwIDAwMy45NSA2Ljg0bDQ1LjcyIDI3LjU5YTcuOTAyIDcuOTAyIDAgMDA3LjkwMiAwbDQ1LjcyLTI3LjU5YTcuOTAyIDcuOTAyIDAgMDAzLjk1LTYuODRWMy43NTRhNy45MDIgNy45MDIgMCAwMC0zLjk1LTYuODR6TTY0IDEyMy4wN2EzLjk1IDMuOTUgMCAwMTMuOTUtMy45NXYtNy45MDJhMy45NSAzLjk1IDAgMDEtMy45NS0zLjk1IDMuOTUgMy45NSAwIDAxLTMuOTUgMy45NXY3LjkwMkEzLjk1IDMuOTUgMCAwMTY0IDEyMy4wN3ptMzEuNi0xOS43NTRhMy45NSAzLjk1IDAgMDEtMy45NSAzLjk1SDM2LjM1YTQuMDQ0IDQuMDQ0IDAgMDEtMy45NS0zLjk1VjQxLjcwNGEzLjk1IDMuOTUgMCAwMTMuOTUtMy45NWg1NS4zYTMuOTUgMy45NSAwIDAxMy45NSAzLjk1djYxLjYxMnoiLz48cGF0aCBmaWxsPSIjODNDRDI5IiBkPSJNNjQgMTEuODU3YTMuOTUgMy45NSAwIDAxMy45NSAzLjk1djcuOTAyYTMuOTUgMy45NSAwIDAxLTMuOTUgMy45NSAzLjk1IDMuOTUgMCAwMS0zLjk1LTMuOTV2LTcuOTAyYTMuOTUgMy45NSAwIDAxMy45NS0zLjk1eiIvPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik02NCA5OC4yMmMtMTMuODU2IDAtMjUuMTMtMTEuMjc0LTI1LjEzLTI1LjEzUzUwLjE0NCA0Ny45NiA2NCA0Ny45NnMyNS4xMyAxMS4yNzQgMjUuMTMgMjUuMTNTNzcuODU2IDk4LjIyIDY0IDk4LjIyem0wLTQyLjM2Yy05LjUgMC0xNy4yMyA3LjczLTE3LjIzIDE3LjIzczcuNzMgMTcuMjMgMTcuMjMgMTcuMjMgMTcuMjMtNy43MyAxNy4yMy0xNy4yMy03LjczLTE3LjIzLTE3LjIzLTE3LjIzeiIvPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik02NCA4NS4yOWMtNi43NjUgMC0xMi4yNy01LjUwNS0xMi4yNy0xMi4yN1M1Ny4yMzUgNjAuNzUgNjQgNjAuNzVzMTIuMjcgNS41MDUgMTIuMjcgMTIuMjdTNzAuNzY1IDg1LjI5IDY0IDg1LjI5em0wLTE2LjU0YTQuMjcgNC4yNyAwIDEwMCA4LjU0IDQuMjcgNC4yNyAwIDAwMC04LjU0eiIvPjwvc3ZnPg==",
  tailwind:
    "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTI4IDEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNjQuMDA0IDI1LjYwMmMtMTcuMDY3IDAtMjcuNzMgOC41My0zMiAyNS41OTcgNi4zOTgtOC41MzEgMTMuODY3LTExLjczIDIyLjM5OC05LjU5NyA0Ljg3MSAxLjIxNCA4LjM1MiA0Ljc0NiAxMi4yMDcgOC42NkM3Mi44ODMgNTYuNjI5IDgwLjE0NSA2NCA5Ni4wMDQgNjRjMTcuMDY2IDAgMjcuNzMtOC41MzEgMzItMjUuNjAyLTYuMzk5IDguNTM2LTEzLjg2NyAxMS43MzUtMjIuMzk5IDkuNjAyLTQuODctMS4yMTUtOC4zNDctNC43NDYtMTIuMjA3LTguNjYtNi4yNy02LjM2Ny0xMy41My0xMy43MzgtMjkuMzk0LTEzLjczOHpNMzIuMDA0IDY0Yy0xNy4wNjYgMC0yNy43MyA4LjUzMS0zMiAyNS42MDJDNi40MDIgODEuMDY2IDEzLjg3IDc3Ljg2NyAyMi40MDIgODBjNC44NzEgMS4yMTUgOC4zNTIgNC43NDYgMTIuMjA3IDguNjYgNi4yNzQgNi4zNjcgMTMuNTM2IDEzLjczOCAyOS4zOTUgMTMuNzM4IDE3LjA2NiAwIDI3LjczLTguNTMgMzItMjUuNTk3LTYuMzk5IDguNTMxLTEzLjg2NyAxMS43My0yMi4zOTkgOS41OTctNC44Ny0xLjIxNC04LjM0Ny00Ljc0Ni0xMi4yMDctOC42NkM1NS4xMjggNzEuMzcxIDQ3Ljg2OCA2NCAzMi4wMDQgNjR6bTAgMCIgZmlsbD0iIzM4YjJhYyIvPjwvc3ZnPg==",
  git: "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTI4IDEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSIjRjA1MTMzIiBkPSJNMTI0LjczNyA1OC4zNzhMNjkuNjIxIDMuMjY0Yy0zLjE3Mi0zLjE3NC04LjMyLTMuMTc0LTExLjQ5NyAwTDQ2LjY4IDE0LjcxbDE0LjUxOCAxNC41MThjMy4zNzUtMS4xMzkgNy4yNDMtLjM3NSA5LjkzMiAyLjMxNCAyLjcwMyAyLjcwNiAzLjQ2MSA2LjYwNyAyLjI5NCA5Ljk5M2wxMy45OTIgMTMuOTkzYzMuMzg1LTEuMTY3IDcuMjkyLS40MTMgOS45OTQgMi4yOTUgMy43OCAzLjc3NyAzLjc4IDkuOSAwIDEzLjY3OS0zLjc4IDMuNzgtOS45MDEgMy43OC0xMy42ODMgMC0yLjg0Mi0yLjg0NC0zLjU0NS03LjAxOS0yLjEwNS0xMC41MjFMNjguNTc0IDQ3LjkzM2wtLjAwMiAzNC4zNDFhOS43MDggOS43MDggMCAwMTIuNTU5IDEuODI4YzMuNzc4IDMuNzc3IDMuNzc4IDkuODk4IDAgMTMuNjgzLTMuNzc5IDMuNzc3LTkuOTA0IDMuNzc3LTEzLjY3OSAwLTMuNzc4LTMuNzg0LTMuNzc4LTkuOTA1IDAtMTMuNjgzYTkuNjUgOS42NSAwIDAwMy4xNjctMi4xMVY0Ny4zMzNhOS41ODEgOS41ODEgMCAwMC0zLjE2Ny0yLjExMWMtMi44NjItMi44Ni0zLjU1MS03LjA2LTItMTAuNTc2TDMuMjY0IDU4LjEyM2MtMy4xNzIgMy4xNzItMy4xNzIgOC4zMiAwIDExLjQ5N2w1NS4xMTcgNTUuMTE0YzMuMTc0IDMuMTc0IDguMzIgMy4xNzQgMTEuNDk5IDBsNTQuODU4LTU0Ljg1OGE4LjEzIDguMTMgMCAwMDIuNDczLTUuODAyYzAtMi4xOTctLjg1LTQuMjYtMi40NzMtNS44MDR6Ii8+PC9zdmc+",
};

const ParticleBackground = ({ particleDensity = 30 }) => {
  const mountRef = useRef(null);
  const { theme } = useTheme();

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

    // Create texture loader
    const textureLoader = new THREE.TextureLoader();

    // Load textures from data URLs
    const textures = Object.values(iconDataUrls).map((url) => {
      return textureLoader.load(url);
    });

    // Particles configuration
    const particlesCount = Math.min(
      Math.floor((window.innerWidth * window.innerHeight) / 1000),
      particleDensity
    );

    // Create particles
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

    // Theme-based colors
    const mainColor = new THREE.Color(theme === "dark" ? 0xffffff : 0x000000);
    const accentColor = new THREE.Color(0x61dafb);

    for (let i = 0; i < particlesCount; i++) {
      // Position
      posArray[i * 3] = (Math.random() - 0.5) * 20;
      posArray[i * 3 + 1] = (Math.random() - 0.5) * 20;
      posArray[i * 3 + 2] = (Math.random() - 0.5) * 20;

      // Color
      const colorMix = Math.random() * 0.3;
      const color = mainColor.clone().lerp(accentColor, colorMix);
      colorArray[i * 3] = color.r;
      colorArray[i * 3 + 1] = color.g;
      colorArray[i * 3 + 2] = color.b;

      // Size
      sizeArray[i] = 0.05 + Math.random() * 0.1;
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

    // Create particles system
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // Camera position
    camera.position.z = 5;

    // Animation
    let frameId;
    const animate = () => {
      frameId = requestAnimationFrame(animate);

      particles.rotation.x += 0.0005;
      particles.rotation.y += 0.0007;

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
  }, [theme, particleDensity]);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none -z-10 opacity-30"
    />
  );
};

export default ParticleBackground;
