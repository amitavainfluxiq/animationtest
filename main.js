import * as THREE from 'three'; // Import the Three.js library

// Create a new Three.js scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGL1Renderer();

// Set the size of the renderer to match the window size and append it to the HTML body
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Set the background color of the renderer to transparent
renderer.setClearColor(0x000000, 0); // Set background color to transparent

// Set the background image using CSS
document.body.style.backgroundImage = "url('https://i.ibb.co/4gHcRZD/bg3-je3ddz.jpg')";
document.body.style.backgroundSize = "cover";
document.body.style.backgroundPosition = "center";
document.body.style.backgroundRepeat = "no-repeat";

// Listen for window resize events to update the renderer and camera accordingly
window.addEventListener('resize', () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});

// Load a texture image using TextureLoader
const texture = new THREE.TextureLoader().load('./images/bg.jpg');
texture.repeat.set(0.6, 0.9);

// Create a spherical geometry and a basic material with the loaded texture
const geometry = new THREE.SphereGeometry(1, 32, 32); // Create a sphere with radius 1
const material = new THREE.MeshBasicMaterial({
    wireframe: false,
    map: texture
});

// Create a mesh with the geometry and material and add it to the scene
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

// Set the initial position of the camera
camera.position.z = 5;

// Define an animation loop using requestAnimationFrame
function animation() {
    requestAnimationFrame(animation);
    
    // Update the sphere's rotation
    sphere.rotation.x += 0.01;
    sphere.rotation.y += 0.01;
    sphere.rotation.z += 0.01;

    // Render the scene
    renderer.render(scene, camera);
}

// Start the animation loop
animation();
