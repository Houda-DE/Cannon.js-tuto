import * as THREE from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import * as dat from 'dat.gui'

const renderer = new THREE.WebGLRenderer()

renderer.setSize(window.innerWidth , window.innerHeight)

document.body.appendChild(renderer.domElement)

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000 
)

const ambientLight = new THREE.AmbientLight(0x333333)
scene.add(ambientLight)

const orbit = new OrbitControls(camera , renderer.domElement)

camera.position.set(-90 , 140 , 140)
orbit.update

const texttureLoader  = new THREE.TextureLoader()


const animate = () => {

    renderer.render(scene , camera)
    
}

renderer.setAnimationLoop(animate)

