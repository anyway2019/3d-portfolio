import React, { Suspense,FunctionComponent} from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cube from '../Cube'
import styles from './Who.module.scss'

type SingleContainerProps = {
  children:JSX.Element
}

type MultiContainerProps = {
  children:JSX.Element[]
}
const Section : FunctionComponent<SingleContainerProps> = ({children})=>{
  return (
    <div className={styles.Section}>
      {children}
    </div>
  )
};

const Container : FunctionComponent<MultiContainerProps> = ({children})=>{
  return (
    <div className={styles.Container}>
      {children}
    </div>
  )
};

const Left : FunctionComponent<SingleContainerProps> = ({children})=>{
  return (
    <div className={styles.Left}>
      {children}
    </div>
  )
};

const Right : FunctionComponent<MultiContainerProps> = ({children})=>{
  return (
    <div className={styles.Right}>
      {children}
    </div>
  )
};

type TextProps = {
  children:string
}
const Title : FunctionComponent<TextProps> = ({children})=>{
  return (
    <h1 className={styles.Title}>
      {children}
    </h1>
  )
};

const WhatWeDo : FunctionComponent<MultiContainerProps> = ({children})=>{
  return (
    <div className={styles.WhatWeDo}>
      {children}
    </div>
  )
};

type ImageProps = {
  src:string
}
const Line : FunctionComponent<ImageProps> = ({src})=>{
  return (
    <img src={src} className={styles.Line}/>
  )
};

const Subtitle : FunctionComponent<TextProps> = ({children})=>{
  return (
    <h2 className={styles.Subtitle}>
      {children}
    </h2>
  )
};

const Desc : FunctionComponent<TextProps> = ({children})=>{
  return (
    <p className={styles.Desc}>
      {children}
    </p>
  )
};

const Button : FunctionComponent<TextProps> = ({children})=>{
  return (
    <button className={styles.Button}>
      {children}
    </button>
  )
};



const Who = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[3, 2, 1]} />
              <Cube />
              <OrbitControls enableZoom={false} autoRotate />
            </Suspense>
          </Canvas>
        </Left>
        <Right>
          <Title>Think outside the square space</Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>Who we Are</Subtitle>
          </WhatWeDo>
          <Desc>
            a creative group of designers and developers with a passion for the
            arts.
          </Desc>
          <Button>See our works</Button>
        </Right>
      </Container>
    </Section>
  );
};

export default Who;
