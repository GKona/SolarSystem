/// <reference path="C:\Users\geri\Documents\GitHub\SolarSystem\SolarSystem\Libs/three.min.js" />
// Author: Geri Kona 

//declare global variables
var scene, camera, renderer;
var sun, mercury, venus, earth, mars, jupiter, saturn, uranus, neptune, pluto;
var mercuryPivot, venusPivot, earthPivot, marsPivot, jupiterPivot, saturnPivot, uranusPivot, neptunePivot, plutoPivot;
var moon;
var moonPivot;
var sRings;
var gui, controls;

function init() {

    // create Gui controls
    initGuiControl();

    // create a scene, that will hold all elements such as objects, cameras and lights.
    scene = new THREE.Scene();

    // create a camera, which defines where we're looking at.
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

    // create a render and set the size
    renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(0x000000, 1.0);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMapEnabled = true;

    // add the output of the renderer to the html element
    document.body.appendChild(renderer.domElement);
}

function createGeometry() {
    //Create Sun
    var sunGeometry = new THREE.SphereGeometry(20, 50, 50);
    var sunMaterial = new THREE.MeshLambertMaterial({ color: 0xFF9900 });
    sun = new THREE.Mesh(sunGeometry, sunMaterial);
    //Position Sun
    sun.position.set(0, 0, 0);
    //Add Sun to Scene
    scene.add(sun);

    // position and point the camera to the center of the scene
    camera.position.x = -30;
    camera.position.y = 800;
    camera.position.z = 30;
    camera.lookAt(scene.position);

    // add subtle ambient lighting
    var ambientLight = new THREE.AmbientLight(0x0c0c0c);
    scene.add(ambientLight);

    // add spotlight for the shadows
    var spotLight = new THREE.SpotLight(0xffffff);
    spotLight.position.set(-40, 60, -10);
    spotLight.castShadow = true;
    scene.add(spotLight);

}

// call the render function
function animate() {

    // render using requestAnimationFrame
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

function initGuiControl() {
    controls = {
        spinSpeed: 0.05,
        orbitSpeed: 0.05
    };
    gui = new dat.GUI();
    gui.add(controls, 'spinSpeed', -1, 1);
    gui.add(controls, 'orbitSpeed', -5, 5);
}

window.onload = function () {
    init();
    createGeometry();
    animate();
};