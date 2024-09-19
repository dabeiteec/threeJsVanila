import * as THREE from 'three';

export function createCube() {
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x1c1121 });
    const cube = new THREE.Mesh(geometry, material);
    const wireframeGeometry = new THREE.WireframeGeometry(geometry);
    const wireframeMaterial = new THREE.LineBasicMaterial({ color: 0x000000 });
    const wireframe = new THREE.LineSegments(wireframeGeometry, wireframeMaterial);
    
    return { mesh: cube, wireframe };
}

export function createSphere() {
    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0x3498db });
    const sphere = new THREE.Mesh(geometry, material);
    const wireframeGeometry = new THREE.WireframeGeometry(geometry);
    const wireframeMaterial = new THREE.LineBasicMaterial({ color: 0x000000 });
    const wireframe = new THREE.LineSegments(wireframeGeometry, wireframeMaterial);

    return { mesh: sphere, wireframe };
}

export function createWheel() {
    const geometry = new THREE.TorusGeometry(2.5, 0.5, 16, 100); 
    const material = new THREE.MeshBasicMaterial({ color: 0xff0000 }); 
    const torus = new THREE.Mesh(geometry, material);
    const wireframeGeometry = new THREE.WireframeGeometry(geometry);
    const wireframeMaterial = new THREE.LineBasicMaterial({ color: 0x000000 });
    const wireframe = new THREE.LineSegments(wireframeGeometry, wireframeMaterial);
    return { mesh: torus, wireframe };
}

export function createKnot() {
    const geometry = new THREE.TorusKnotGeometry( 5, 2.5, 100, 200 ); 
    const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } ); 
    const torusKnot = new THREE.Mesh( geometry, material ); 
    torusKnot.scale.set(0.1, 0.1, 0.1);
    const wireframeGeometry = new THREE.WireframeGeometry(geometry);
    const wireframeMaterial = new THREE.LineBasicMaterial({ color: 0x000000 });
    const wireframe = new THREE.LineSegments(wireframeGeometry, wireframeMaterial);
    wireframe.scale.set(0.1, 0.1, 0.1);
    return { mesh: torusKnot, wireframe };
}
