import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import Mac from "../Mac";
import styles from "./WebDesign.module.scss"

const WebDesign = () => {
  return (
    <>
      <Canvas>
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.6}>
            <Mac />
          </Stage>
          <OrbitControls enableZoom={false} autoRotate />
        </Suspense>
      </Canvas>
      <div className={styles.Desc}>
        We design products with a strong focus on both world class design and
        ensuring your product is a market success.
      </div>
    </>
  );
};

export default WebDesign;
