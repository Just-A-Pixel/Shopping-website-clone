// import React, { useState, useRef, useEffect, Suspense } from "react";
// import { Canvas, useFrame, useLoader } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// // import { PerspectiveCamera } from '@react-three/drei'

// let mouseX = 0;
// let mouseY = 0;

// let targetX = 0;
// let targetY = 0;

// const windowX = window.innerWidth / 2;
// const windowY = window.innerHeight / 2;

// function onDocumentMouseMove (event){
//     mouseX = (event.clientX - windowX)
//     mouseY = (event.clientY - windowY)

//     console.log(mouseY)
// }

// const Model = () => {
//     const gltf = useLoader("gltf/scene.gltf", true);
//     return <primitive object = {gltf.scene} dispose = {null} />
// }

// function Box(props) {
//   const mesh = useRef();

//   const [hovered, setHover] = useState(false);
//   const [active, setActive] = useState(false);

//   useFrame(() => {
//     mesh.current.rotation.y += 0.01;
//   });

//   useEffect(() => {
//     //   document.addEventListener('mousemove', onDocumentMouseMove)
//   },[])

//   return (
//     <mesh
//       {...props}
//       ref={mesh}
//       scale={[1.5, 1.5, 1.5]}
//       onClick={(e) => setActive(!active)}
//       onPointerOver={(e) => setHover(true)}
//       onPointerOut={(e) => setHover(false)}
//     >
//       <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
//       <meshStandardMaterial
//         metalness={0.1}
//         attach="material"
//         color={"#f4511e"}
//       />
//       {/* <Model /> */}
//     </mesh>
//   );
// }



// export default function Threed() {
//   const mesh = useRef();

//   return (
//     <div>
//       <Canvas>
//           {/* <Suspense fallback = {null}> */}
//           <OrbitControls />
//         <ambientLight intensity={0.5} />
//         <spotLight position={[10, 15, 10]} />
//         {/* <Box /> */}
//         <Model />
//           {/* </Suspense> */}
        
//       </Canvas>
//     </div>
//   );
// }
