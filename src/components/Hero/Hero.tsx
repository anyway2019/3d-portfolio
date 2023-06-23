import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import Navbar from "../Navbar";
import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <div className={styles.Section}>
      <div className={styles.Container}>
        <div className={styles.Left}>
          <div className={styles.Title}>Think. Make. Solve.</div>
          <div className={styles.WhatWeDo}>
            <img className={styles.Line} src="./img/line.png" />
            <div className={styles.Subtitle}>What we Do</div>
          </div>
          <div className={styles.Desc}>
            we enjoy creating delightful, human-centered digital experiences.
          </div>
          <button className={styles.Button}>Learn More</button>
        </div>
        <div className={styles.Right}>
          <Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={2.4}>
                <MeshDistortMaterial
                  color="#3d1c56"
                  attach="material"
                  distort={0.5}
                  speed={2}
                />
              </Sphere>
            </Suspense>
          </Canvas>
          <img className={styles.Img} src="./img/moon.png" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
