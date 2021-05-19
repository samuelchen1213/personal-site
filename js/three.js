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
    renderer.setSize(window.innerWidth,window.innerHeight);
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
        object.position.z -= 500;
        object.position.y -= 200;
        object.position.x += 490;
        
        object.rotation.x = 120;
        object.rotation.y = 120;
        

        this.tl = new TimelineMax();
        this.tl.from(asteroid1.scale, 2, {delay:3, y:0, x:0, z:0, ease: Expo.easeOut});
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
        object.position.z -= 900;
        object.position.x += 300;
        object.position.y += 300;

        object.rotation.x = 120;
        object.rotation.y = 120;

        this.tl = new TimelineMax();
        this.tl.from(asteroid2.scale, 2, {y: -10, delay:3.5, y:0, x:0, z:0, ease: Expo.easeOut});
    });
});


var render = function() {
    requestAnimationFrame(render);
    
    // Rotate the objects indefinitely
    asteroid1.rotation.y -= .003;
    asteroid1.rotation.x -= .002;
    
    asteroid2.rotation.x -= .003;
    asteroid2.rotation.y -= .002;

    renderer.render(scene, camera);
}

// Call this to render the entire scene
render();