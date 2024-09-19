import * as THREE from 'three';

let randomX = Math.random() * 10 - 5;
let randomY = Math.random() * 10 - 5;
let randomZ = Math.random() * 10 - 5;

export function animateRotate(shape, wireframe, renderer, scene, camera, isActiveAnimation) {
    if (!isActiveAnimation.rotate) return;

    requestAnimationFrame(() => animateRotate(shape, wireframe, renderer, scene, camera, isActiveAnimation));

    wireframe.rotation.x += 0.02;
    wireframe.rotation.y += 0.01;
    shape.rotation.x += 0.02;
    shape.rotation.y += 0.01;

    renderer.render(scene, camera);
}

export function animatePosition(shape,currentWireframe, renderer, scene, camera, isActiveAnimation) {
    if (!isActiveAnimation.move) return;

    requestAnimationFrame(() => animatePosition(shape,currentWireframe, renderer, scene, camera, isActiveAnimation));

    shape.position.x += (randomX - shape.position.x) * 0.01;
    currentWireframe.position.x += (randomX - shape.position.x) * 0.01;
    shape.position.y += (randomY - shape.position.y) * 0.01;
    currentWireframe.position.y += (randomY - shape.position.y) * 0.01;
    shape.position.z += (randomZ - shape.position.z) * 0.01;
    currentWireframe.position.z += (randomZ - shape.position.z) * 0.01;
    if (Math.random() < 0.01) {
        randomX = Math.random() * 10 - 5;
        randomY = Math.random() * 10 - 5;
        randomZ = Math.random() * 10 - 5;
    }

    renderer.render(scene, camera);
}

export function animateColor(shape, renderer, scene, camera, isActiveAnimation) {
    if (!isActiveAnimation.color) return;

    requestAnimationFrame(() => animateColor(shape, renderer, scene, camera, isActiveAnimation));

    const color = new THREE.Color();
    color.setHSL((Date.now() % 10000) / 10000, 1, 0.5);
    shape.material.color.set(color);

    renderer.render(scene, camera);
}

export function onMouseMove(shape,currentWireframe, renderer, scene, camera) {
    const handleMouseMove = (event) => {
        const mouse = new THREE.Vector2();
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        shape.position.x = mouse.x * 5;
        currentWireframe.position.x = mouse.x * 5;  
        shape.position.y = mouse.y * 5;
        currentWireframe.position.y = mouse.y * 5; 
        renderer.render(scene, camera);
    };
    return handleMouseMove;
}

export function toggleMouseMovement(shape,currentWireframe, renderer, scene, camera, isActiveAnimation) {
    const handleMouseMove = onMouseMove(shape,currentWireframe, renderer, scene, camera);

    if (isActiveAnimation.mouseMove) {
        window.addEventListener('mousemove', handleMouseMove);
    } 
    return;
}