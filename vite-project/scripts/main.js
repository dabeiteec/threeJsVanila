import { initThree, addShapeToScene, renderer, scene, camera } from './three.js';
import { createCube, createSphere, createKnot, createWheel } from './shapes.js';
import { animateRotate, animateColor, toggleMouseMovement, animatePosition } from './animations.js';

initThree();

let currentShape = null;
let currentWireframe = null;
let isActiveAnimation = {
    rotate: true,
    color: false,
    move: false,
    mouseMove:false
};

function switchShape() {
    const buttons = document.querySelectorAll('.header-btn');
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
        const figure = e.target.textContent.trim();
        let shape;
        if (figure === 'Кубик') {
            shape = createCube();
        } else if (figure === 'Шарик') {
            shape = createSphere();
        } else if (figure === 'Узелок') {
            shape = createKnot();
        } else if (figure === 'Колесо') {
            shape = createWheel();
        }

        if (shape) {
            currentShape = shape.mesh;
            currentWireframe = shape.wireframe;
            addShapeToScene(shape);

            if (isActiveAnimation.rotate) {
            animateRotate(currentShape, currentWireframe, renderer, scene, camera, isActiveAnimation);
            }
        }
        });
    });
}

function switchAnimation() {
    const subtitleButtons = document.querySelectorAll('.subtitle-btn');
    subtitleButtons.forEach(button => {
        button.addEventListener('click', (e) => {
        const action = e.target.textContent.trim();

        if (action === 'Кручу') {
            isActiveAnimation.rotate = !isActiveAnimation.rotate;
            if (isActiveAnimation.rotate) {
            animateRotate(currentShape, currentWireframe, renderer, scene, camera, isActiveAnimation);
            }
        } else if (action === 'Меняю цвета') {
            isActiveAnimation.color = !isActiveAnimation.color;
            if (isActiveAnimation.color) {
            animateColor(currentShape, renderer, scene, camera, isActiveAnimation);
            }
        }  else if (action === 'Двигаюсь за мышкой') {
            isActiveAnimation.mouseMove = !isActiveAnimation.mouseMove;
            if (isActiveAnimation.mouseMove) {
                toggleMouseMovement(currentShape,currentWireframe, renderer, scene, camera, isActiveAnimation);
            } 
        }else if (action === 'Двигаюсь на абум') {
            isActiveAnimation.move = !isActiveAnimation.move;
            if (isActiveAnimation.move) {
            animatePosition(currentShape,currentWireframe, renderer, scene, camera, isActiveAnimation);
            }
        }
        });
    });
}

function setDefaultSettings() {
    const initialShape = createCube();
    currentShape = initialShape.mesh;
    currentWireframe = initialShape.wireframe;
    addShapeToScene(initialShape);
    if (isActiveAnimation.rotate) {
        animateRotate(currentShape, currentWireframe, renderer, scene, camera, isActiveAnimation);
    }
    switchShape();
    switchAnimation();
}
setDefaultSettings();
