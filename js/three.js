// Create threejs scene
let scene = new THREE.Scene();

//Create perspective camera
let camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.z = 25;

// Create a Full Screen WebGL Renderer
let renderer = new THREE.WebGLRenderer({canvas: threejs, antialias: true, alpha: true});
renderer.setSize(window.innerWidth,window.innerHeight);

// Make sure the project is responsive based on window resizing
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;

    camera.updateProjectionMatrix();
})



// Add a light
var light1 = new THREE.PointLight(0xFFFFFF, 1.7, 1000)
light1.position.set(150,15,15);
scene.add(light1);

// Defining a variable for objects
var asteroid1;
var asteroid2;

// Create asteroid1
var mtlLoader = new THREE.MTLLoader();
mtlLoader.load('../assets/threejs/asteroid1.mtl', function (materials) {

    materials.preload();

    // Load the object
    var objLoader = new THREE.OBJLoader();
    objLoader.setMaterials(materials);
    objLoader.load('../assets/threejs/asteroid1.obj', function (object) {
        scene.add(object);
        asteroid1 = object;
        object.position.z -= 550;
        object.position.y -= 210;
        object.position.x += 560;
        object.scale.set(0.9,0.9,0.9);

        this.tl = new TimelineMax();
        this.tl.from(asteroid1.position, 6, {delay:2.5, x:650, y: -600, z: 400, ease: Back.easeOut});
    });
});

// Create asteroid2
var mtlLoader = new THREE.MTLLoader();
mtlLoader.load('../assets/threejs/asteroid2.mtl', function (materials) {

    materials.preload();

    // Load the object
    var objLoader = new THREE.OBJLoader();
    objLoader.setMaterials(materials);
    objLoader.load('../assets/threejs/asteroid2.obj', function (object) {
        scene.add(object);
        asteroid2 = object;
        object.position.z -= 850;
        object.position.x += 350;
        object.position.y += 300;
        object.scale.set(0.9,0.9,0.9);

        this.tl = new TimelineMax();
        this.tl.from(asteroid2.position, 6, {delay:2.7, y:950, x: -500, z:-1000, ease: Back.easeOut});
    });
});


var render = function() {
    requestAnimationFrame(render);
    
    // Rotate the objects indefinitely
    asteroid1.rotation.y -= .001;
    asteroid1.rotation.x -= .0015;
    
    asteroid2.rotation.x -= .001;
    asteroid2.rotation.y -= .0015;

    renderer.render(scene, camera);
}

// Call this to render the entire scene
render();