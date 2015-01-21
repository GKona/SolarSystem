/// <reference path="C:\Users\geri\Documents\GitHub\SolarSystem\SolarSystem\Libs/three.min.js" />
// Filename: SolarSystem.js
// Author: Geri Kona 

//declare global variables
var scene, camera, renderer;
var sun, mercury, venus, earth, mars, jupiter, saturn, uranus, neptune, pluto;
var mercuryPivot, venusPivot, earthPivot, marsPivot, jupiterPivot, saturnPivot, uranusPivot, neptunePivot, plutoPivot;
var moon, deimos, phobos;
var moonPivot, deimosPivot, phobosPivot;
var sRings;
var gui, controls;
var orbitMoons = true;
var orbitPlanets = true;

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
    // Create Sun
    var sunGeometry = new THREE.SphereGeometry(30, 50, 50);
    var sunMaterial = new THREE.MeshLambertMaterial({ color: 0xFF9900 });
    sun = new THREE.Mesh(sunGeometry, sunMaterial);
    //Position Sun
    sun.position.set(0, 0, 0);
    //Add Sun to Scene
    scene.add(sun);

    // Create planet's pivot points
    mercuryPivot = new THREE.Object3D();
    sun.add(mercuryPivot);
    venusPivot = new THREE.Object3D();
    sun.add(venusPivot);
    earthPivot = new THREE.Object3D();
    sun.add(earthPivot);
    marsPivot = new THREE.Object3D();
    sun.add(marsPivot);
    jupiterPivot = new THREE.Object3D();
    sun.add(jupiterPivot);
    saturnPivot = new THREE.Object3D();
    sun.add(saturnPivot);
    uranusPivot = new THREE.Object3D();
    sun.add(uranusPivot);
    neptunePivot = new THREE.Object3D();
    sun.add(neptunePivot);
    plutoPivot = new THREE.Object3D();
    sun.add(plutoPivot);

    // Create Mercury
    var mercuryGeometry = new THREE.SphereGeometry(3.5, 50, 50);
    var mercuryMaterial = new THREE.MeshLambertMaterial({ color: 0x965012 });
    mercury = new THREE.Mesh(mercuryGeometry, mercuryMaterial);
    // Position Mercury
    mercury.position.set(50, 0, 0);
    // Add Mercury to Scene
    scene.add(mercury);
    mercuryPivot.add(mercury);
    
    // Create Venus
    var venusGeometry = new THREE.SphereGeometry(5, 50, 50);
    var venusMaterial = new THREE.MeshLambertMaterial({ color: 0xF2A011 });
    venus = new THREE.Mesh(venusGeometry, venusMaterial);
    // Position Venus
    venus.position.set(75, 0, 0);
    // Add Venus to Scene
    scene.add(venus);
    venusPivot.add(venus);

    // Create Earth
    var earthGeometry = new THREE.SphereGeometry(5, 50, 50);
    var earthMaterial = new THREE.MeshLambertMaterial({ color: 0x0066FF });
    earth = new THREE.Mesh(earthGeometry, earthMaterial);
    // Position Earth
    earth.position.set(100, 0, 0);
    // Add Earth to Scene
    scene.add(earth);
    earthPivot.add(earth);

    // Create Moon's pivot point
    moonPivot = new THREE.Object3D();
    earth.add(moonPivot);

    // Create Moon
    var moonGeometry = new THREE.SphereGeometry(2, 50, 50);
    var moonMaterial = new THREE.MeshLambertMaterial({ color: 0xC2C2A3 });
    moon = new THREE.Mesh(moonGeometry, moonMaterial);
    // Position Moon
    moon.position.set(10, 0, 0);
    // Add Moon to Scene
    scene.add(moon);
    moonPivot.add(moon);
    
    // Create Mars
    var marsGeometry = new THREE.SphereGeometry(3.5, 50, 50);
    var marsMaterial = new THREE.MeshLambertMaterial({ color: 0xC90E0E });
    mars = new THREE.Mesh(marsGeometry, marsMaterial);
    // Position Mars
    mars.position.set(125, 0, 0);
    // Add Mars to Scene
    scene.add(mars);
    marsPivot.add(mars);

    // Create Deimos' pivot point
    deimosPivot = new THREE.Object3D();
    mars.add(deimosPivot);
    deimosPivot.rotation.x = 45;

    // Create Deimos
    var deimosGeometry = new THREE.SphereGeometry(1.5, 50, 50);
    var deimosMaterial = new THREE.MeshLambertMaterial({ color: 0xB1C5CC });
    deimos = new THREE.Mesh(deimosGeometry, deimosMaterial);
    // Position Deimos
    deimos.position.set(5, 0, 0);
    // Add Deimos to Scene
    scene.add(deimos);
    deimosPivot.add(deimos);
    
    // Create Phobos' pivot point
    phobosPivot = new THREE.Object3D();
    mars.add(phobosPivot);
    phobosPivot.rotation.x = 100;

    // Create Phobos
    var phobosGeometry = new THREE.SphereGeometry(1.5, 50, 50);
    var phobosMaterial = new THREE.MeshLambertMaterial({ color: 0x751212 });
    phobos = new THREE.Mesh(phobosGeometry, phobosMaterial);
    // Position Phobos
    phobos.position.set(10, 0, 0);
    // Add Phobos to Scene
    scene.add(phobos);
    phobosPivot.add(phobos);
    

    // Create Jupiter
    var jupiterGeometry = new THREE.SphereGeometry(8, 50, 50);
    var jupiterMaterial = new THREE.MeshLambertMaterial({ color: 0xD18A0F });
    jupiter = new THREE.Mesh(jupiterGeometry, jupiterMaterial);
    // Position Jupiter
    jupiter.position.set(185, 0, 0);
    // Add Jupiter to Scene
    scene.add(jupiter);
    jupiterPivot.add(jupiter);

    // Create Saturn
    var saturnGeometry = new THREE.SphereGeometry(7, 50, 50);
    var saturnMaterial = new THREE.MeshLambertMaterial({ color: 0xD6BB8D });
    saturn = new THREE.Mesh(saturnGeometry, saturnMaterial);
    // Position Saturn
    saturn.position.set(220, 0, 0);
    //Add Saturn to Scene
    scene.add(saturn);
    saturnPivot.add(saturn);

    // Create Saturn's Rings
    var saturnRingsGeometry = new THREE.RingGeometry(35, 20, 30);
    var saturnRingsMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    sRings = new THREE.Mesh(saturnRingsGeometry, saturnRingsMaterial);
    sRings.rotation.set(0, 15, 0);
    scene.add(sRings);
    saturn.add(sRings);

    // Create Uranus
    var uranusGeometry = new THREE.SphereGeometry(6.5, 50, 50);
    var uranusMaterial = new THREE.MeshLambertMaterial({ color: 0xC18DD9 });
    uranus = new THREE.Mesh(uranusGeometry, uranusMaterial);
    // Position Uranus
    uranus.position.set(265, 0, 0);
    // Add Uranus to Scene
    scene.add(uranus);
    uranusPivot.add(uranus);

    // Create Neptune
    var neptuneGeometry = new THREE.SphereGeometry(5.5, 50, 50);
    var neptuneMaterial = new THREE.MeshLambertMaterial({ color: 0x4DC7E3 });
    neptune = new THREE.Mesh(neptuneGeometry, neptuneMaterial);
    // Position Neptune
    neptune.position.set(295, 0, 0);
    // Add Neptune to Scene
    scene.add(neptune);
    neptunePivot.add(neptune);

    // Create Pluto
    var plutoGeometry = new THREE.SphereGeometry(2, 50, 50);
    var plutoMaterial = new THREE.MeshLambertMaterial({ color: 0x947A3D });
    pluto = new THREE.Mesh(plutoGeometry, plutoMaterial);
    // Position Pluto
    pluto.position.set(320, 0, 0);
    // Add Pluto to Scene
    scene.add(pluto);
    plutoPivot.add(pluto);

    // position and point the camera to the center of the scene
    camera.position.x = 0;
    camera.position.y = 700;
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
    if (orbitPlanets) {
        mercuryPivot.rotation.y -= controls.orbitSpeed * 0.5;
        venusPivot.rotation.y -= controls.orbitSpeed * 0.45;
        earthPivot.rotation.y -= controls.orbitSpeed * 0.4;
        marsPivot.rotation.y -= controls.orbitSpeed * 0.35;
        jupiterPivot.rotation.y -= controls.orbitSpeed * 0.3;
        saturnPivot.rotation.y -= controls.orbitSpeed * 0.25;
        uranusPivot.rotation.y -= controls.orbitSpeed * 0.2;
        neptunePivot.rotation.y -= controls.orbitSpeed * 0.15;
        plutoPivot.rotation.y -= controls.orbitSpeed * 0.1;
    }
    
    if (orbitMoons) {
        moonPivot.rotation.y -= controls.orbitSpeed * 0.6;
        deimosPivot.rotation.y -= controls.orbitSpeed * 0.9;
        phobosPivot.rotation.y -= controls.orbitSpeed * 0.6;
    }

    //spin(earth);

    // render using requestAnimationFrame
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

function spin(planet) {
    planet.rotation.x += controls.spinSpeed;
    planet.rotation.y += controls.spinSpeed;
    planet.rotation.z += controls.spinSpeed;
}

function initGuiControl() {
    controls = new function() {
        this.spinSpeed = 0.01;
        this.orbitSpeed = 0.05;
        this.OrbitMoons = function () {
            if (orbitMoons) {
                orbitMoons = false;
            }
            else if (!orbitMoons) {
                orbitMoons = true;
            }
        };
        this.OrbitPlanets = function () {
            if (orbitPlanets) {
                orbitPlanets = false;
            }
            else if (!orbitPlanets) {
                orbitPlanets = true;
            }
        };
        }
    gui = new dat.GUI();
    gui.add(controls, 'spinSpeed', -1, 1);
    gui.add(controls, 'orbitSpeed', -5, 5);
    gui.add(controls, 'OrbitMoons');
    gui.add(controls, 'OrbitPlanets');
}

window.onload = function () {
    init();
    createGeometry();
    animate();
};