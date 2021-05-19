// Create threejs scene
let scene = new THREE.Scene();

//Create perspective camera
let camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.z = 25;

// Create a Full Screen WebGL Renderer
let renderer = new THREE.WebGLRenderer({canvas: threejs, antialias: true, alpha: true});
renderer.setClearColor("#15203C");
renderer.setSize(window.innerWidth,window.innerHeight);

// document.body.appendChild(renderer.domElement);

// Make sure the project is responsive based on window resizing
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth,window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;

    camera.updateProjectionMatrix();
})

// Add a light
var light1 = new THREE.PointLight(0xFFFFFF, 1.4, 1000)
light1.position.set(120,15,15);
scene.add(light1);

// Defining a variable for objects
var ourObj;

// Create a material
var mtlLoader = new THREE.MTLLoader();
mtlLoader.load('../assets/threejs/asteroid1.mtl', function (materials) {

    materials.preload();

    // Load the object
    var objLoader = new THREE.OBJLoader();
    objLoader.setMaterials(materials);
    objLoader.load('../assets/threejs/asteroid1.obj', function (object) {
        scene.add(object);
        ourObj = object;
        object.position.z -= 370;
        object.rotation.x = 120;

        this.tl = new TimelineMax();
        this.tl.from(ourObj.scale, 2, {y:0, x:0, z:0, ease: Expo.easeOut});
    });
});

var render = function() {
    requestAnimationFrame(render);
    
    // Rotate the objects indefinitely
    ourObj.rotation.z -= .2;

    renderer.render(scene, camera);
}

// Call this to render the entire scene
render();