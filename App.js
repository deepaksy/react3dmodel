import { useAspect, useTexture, useVideoTexture } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Fragment, Suspense } from "react";

const App = () => {
  return (
    <Fragment>
      <Canvas orthographic>
        <Scene />
      </Canvas>
      <OverlayContent />
    </Fragment>
  );
};

const OverlayContent = () => {
  return (
    <div style={{
      position: 'absolute',
      top: '20px',
      left: '20px',
      zIndex: 1, // Ensures overlay is on top
      color: 'white',
      pointerEvents: 'auto' // Allow interaction
    }}>
      <h1>Hello, World!</h1>
      <p>This is an overlay.</p>
      <p>This is another overlay</p>
      <button onClick={()=>console.log("clicked")}>click me</button>
    </div>
  );
};

function Scene() {
  const size = useAspect(1800, 1000);
  return (
    <mesh scale={size}>
      <planeGeometry />
      <Suspense fallback={<FallbackMaterial url={"10.jpg"} />}>
        <VideoMaterial url="10.mp4" />
      </Suspense>
    </mesh>
  );
}

function VideoMaterial({ url }) {
  const texture = useVideoTexture(url);
  return <meshBasicMaterial map={texture} toneMapped={false} />;
}

function FallbackMaterial({ url }) {
  const texture = useTexture(url);
  return <meshBasicMaterial map={texture} toneMapped={false} />;
}

export default App;
