import { Canvas, useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Model } from "./Model";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import  './App.css'

const App = () => {
  return(
    <div className="App">
      <Canvas style={{
        position: 'relative',
        right:0,
        height:'60%',
        width:'100%',
        overflow: 'hidden',
        margin: 'auto'
      }}>
      <Model1 />
      <OrbitControls />
      <Environment preset="studio"  />
    </Canvas>
    <OverlayContent />
    </div>
  )
}

const OverlayContent = () => {
  return (
    <div >
      <h1>Hello, World!</h1>
      <p>This is an overlay.</p>
      <p>This is another overlay</p>
      <button onClick={()=>console.log("clicked")}>click me</button>
    </div>
  );
};

const Model1 = () => {
  const gltf = useLoader(GLTFLoader, "./test.gltf")
  return (
    <>
    <primitive object={gltf.scene} scale={0.01} />
    </>
  )
}

export default App

