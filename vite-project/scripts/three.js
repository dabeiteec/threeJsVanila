import * as THREE from 'three';

export let scene, camera, renderer;

export function initThree() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.6, 1000);
    camera.position.z = 5;
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x003049); // Цвет фона
    document.body.appendChild(renderer.domElement);

    // Обработка изменения размера окна
    window.addEventListener('resize', () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    });
}

// Добавление фигуры на сцену
export function addShapeToScene(shape) {
    scene.clear(); 
    scene.add(shape.mesh);
    scene.add(shape.wireframe);
}
