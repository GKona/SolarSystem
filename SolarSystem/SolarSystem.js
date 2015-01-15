/// <reference path="C:\Users\geri\Documents\GitHub\SolarSystem\SolarSystem\Libs/three.min.js" />
// Filename: SolarSystem.js
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
    // create Sun
    var sunGeometry = new THREE.SphereGeometry(30, 50, 50);
    var sunMaterial = new THREE.MeshLambertMaterial({ color: 0xFF9900 });
    sun = new THREE.Mesh(sunGeometry, sunMaterial);
    //Position Sun
    sun.position.set(0, 0, 0);
    //Add Sun to Scene
    scene.add(sun);

    // create planet's pivot points
    //mercuryPivot = new THREE.Object3D();
    //sun.add(mercuryPivot);

    // create mercury
    var mercuryGeometry = new THREE.SphereGeometry(3.5, 50, 50);
    var mercuryMaterial = new THREE.MeshLambertMaterial({ color: 0x965012 });
    mercury = new THREE.Mesh(mercuryGeometry, mercuryMaterial);
    //Position Sun
    mercury.position.set(50, 0, 0);
    //Add Sun to Scene
    scene.add(mercury);
    //mercuryPivot.add(mercury);
    
    // create venus
    var venusGeometry = new THREE.SphereGeometry(5, 50, 50);
    var venusMaterial = new THREE.MeshLambertMaterial({ color: 0xF2A011 });
    venus = new THREE.Mesh(venusGeometry, venusMaterial);
    //Position Sun
    venus.position.set(75, 0, 0);
    //Add Sun to Scene
    scene.add(venus);
    //mercuryPivot.add(venus);

    // create earth
    var earthGeometry = new THREE.SphereGeometry(5, 50, 50);
    var earthMaterial = new THREE.MeshLambertMaterial({ color: 0x3C9618 });
    earth = new THREE.Mesh(earthGeometry, earthMaterial);
    //Position Sun
    earth.position.set(100, 0, 0);
    //Add Sun to Scene
    scene.add(earth);
    //mercuryPivot.add(earth);
    
    // create mars
    var marsGeometry = new THREE.SphereGeometry(3.5, 50, 50);
    var marsMaterial = new THREE.MeshLambertMaterial({ color: 0xC90E0E });
    mars = new THREE.Mesh(marsGeometry, marsMaterial);
    //Position Sun
    mars.position.set(125, 0, 0);
    //Add Sun to Scene
    scene.add(mars);
    //mercuryPivot.add(mars);

    // create jupiter
    var jupiterGeometry = new THREE.SphereGeometry(8, 50, 50);
    var jupiterMaterial = new THREE.MeshLambertMaterial({ color: 0xD18A0F });
    jupiter = new THREE.Mesh(jupiterGeometry, jupiterMaterial);
    //Position Sun
    jupiter.position.set(185, 0, 0);
    //Add Sun to Scene
    scene.add(jupiter);
    //mercuryPivot.add(mars);

    // create saturn
    var saturnGeometry = new THREE.SphereGeometry(7, 50, 50);
    var saturnMaterial = new THREE.MeshLambertMaterial({ color: 0xD6BB8D });
    saturn = new THREE.Mesh(saturnGeometry, saturnMaterial);
    //Position Sun
    saturn.position.set(220, 0, 0);
    //Add Sun to Scene
    scene.add(saturn);
    //mercuryPivot.add(mars);

    // create uranus
    var uranusGeometry = new THREE.SphereGeometry(6.5, 50, 50);
    var uranusMaterial = new THREE.MeshLambertMaterial({ color: 0xC18DD9 });
    uranus = new THREE.Mesh(uranusGeometry, uranusMaterial);
    //Position Sun
    uranus.position.set(265, 0, 0);
    //Add Sun to Scene
    scene.add(uranus);
    //mercuryPivot.add(mars);

    // create neptune
    var neptuneGeometry = new THREE.SphereGeometry(5.5, 50, 50);
    var neptuneMaterial = new THREE.MeshLambertMaterial({ color: 0x4DC7E3 });
    neptune = new THREE.Mesh(neptuneGeometry, neptuneMaterial);
    //Position Sun
    neptune.position.set(295, 0, 0);
    //Add Sun to Scene
    scene.add(neptune);
    //mercuryPivot.add(mars);

    // create pluto
    var plutoGeometry = new THREE.SphereGeometry(2, 50, 50);
    var plutoMaterial = new THREE.MeshLambertMaterial({ color: 0x947A3D });
    pluto = new THREE.Mesh(plutoGeometry, plutoMaterial);
    //Position Sun
    pluto.position.set(320, 0, 0);
    //Add Sun to Scene
    scene.add(pluto);
    //mercuryPivot.add(mars);

    // position and point the camera to the center of the scene
    camera.position.x = 0;
    camera.position.y = 800;
    camera.position.z = 0;
    camera.lookAt(scene.position);

    // add subtle ambient lighting
    var ambientLight = new THREE.AmbientLight(0x0c0c0c);
    scene.add(ambientLight);

    // add spotlight for the shadows
    var spotLight = new THREE.SpotLight(0xffffff);
    spotLight.position.set(0, 520, 0);
    spotLight.castShadow = true;
    scene.add(spotLight);

}

// call the render function
function animate() {
    //mercuryPivot.rotation.y -= controls.spinSpeed * 0.09;

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