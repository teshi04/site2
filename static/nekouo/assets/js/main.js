var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

renderer.setClearColor(0x2196f3, 1);
renderer.gammaOutput = true;

var light = new THREE.DirectionalLight("#c1582d", 1);
var ambient = new THREE.AmbientLight("#85b2cd");
light.position.set(40, 70, 90).normalize();
scene.add(light);
scene.add(ambient);

var loader = new THREE.GLTFLoader();
loader.load('assets/model/nekouo.glb', function (gltf) {
    scene.add(gltf.scene);
    renderer.render(scene, camera);
}, undefined, function (error) {
    console.error(error);
});

camera.position.x = 10;
camera.position.y = 0;
camera.position.z = 0;

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.autoRotate = true;

tick();

function tick() {
    controls.update()
    controls.autoRotateSpeed = 10
    renderer.render(scene, camera);
    requestAnimationFrame(tick);
}
