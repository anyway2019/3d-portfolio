import React, { Suspense } from "react";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Shoe from "../Shoe";
import styles from "./ProductDesign.module.scss";

const ProductDesign = () => {
  return (
    <>
      <Canvas>
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.6}>
            <Shoe />
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

export default ProductDesign;
