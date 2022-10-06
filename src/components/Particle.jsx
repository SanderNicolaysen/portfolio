// import Particles from 'react-tsparticles';
// import { loadFull } from 'tsparticles';
// import { useCallback } from 'react';

// function Particle() {
//   const particlesInit = useCallback(async (engine) => {
//     // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
//     // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
//     // starting from v2 you can add only the features you need reducing the bundle size
//     await loadFull(engine);
//   }, []);

//   const particlesLoaded = useCallback(async (container) => {}, []);
//   return (
//     <Particles
//       id="tsparticles"
//       init={particlesInit}
//       loaded={particlesLoaded}
//       options={{
//         fpsLimit: 120,
//         interactivity: {
//           events: {
//             onClick: {
//               enable: true,
//               mode: 'push',
//             },
//             onHover: {
//               enable: false,
//               mode: 'repulse',
//             },
//             resize: false,
//           },
//           modes: {
//             push: {
//               quantity: 4,
//             },
//             repulse: {
//               distance: 200,
//               duration: 0.4,
//             },
//           },
//         },
//         particles: {
//           color: {
//             value: '#363C4A',
//           },
//           links: {
//             color: '#363C4A',
//             distance: 150,
//             enable: true,
//             opacity: 0.5,
//             width: 1,
//           },
//           collisions: {
//             enable: true,
//           },
//           move: {
//             directions: 'none',
//             enable: true,
//             outModes: {
//               default: 'bounce',
//             },
//             random: false,
//             speed: 0.2,
//             straight: false,
//           },
//           number: {
//             density: {
//               enable: true,
//               area: 800,
//             },
//             value: 50,
//           },
//           opacity: {
//             value: 0.2,
//           },
//           shape: {
//             type: 'circle',
//           },
//           size: {
//             value: { min: 1, max: 5 },
//           },
//         },
//         detectRetina: true,
//       }}
//     />
//   );
// }

// export default Particle;
