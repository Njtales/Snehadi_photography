// import React, { useState } from 'react';
// import { HiMenuAlt4, HiX } from 'react-icons/hi';
// import { motion } from 'framer-motion';

// import { images } from '../../constants';
// import './Navbar.scss';

// const Navbar = () => {
//   const [toggle, setToggle] = useState(false);

//   return (
//     <nav className="app__navbar">
//       <div>
//         <a href='https://njtales.com/' className="app__navbar-logoletter">
//           <img className="app__navbar-logoletter" src={images.letter_n} alt="letter_n" />

//         </a>
//       </div>
//       <div>
//         <a href='https://njtales.com/' className="app__navbar-logoname">

//           {/* <img className="app__navbar-logoname" src={images.logo} alt="logo" /> */}
//         </a>
//       </div>

//       <ul className="app__navbar-links">
//         {['home', 'work', 'about', 'contact'].map((item) => (
//           <li className="app__flex p-text" key={`link-${item}`}>
//             <div />
//             <a href={`#${item}`}>{item}</a>
//           </li>
//         ))}
//       </ul>

//       <div className="app__navbar-menu">
//         <HiMenuAlt4 onClick={() => setToggle(true)} />

//         {toggle && (
//           <motion.div
//             style={{ opacity:0 }} // updated
//             whileInView={{ x: [300, 0], opacity:[0.9,1] }} // updated later
//             transition={{ duration: 0.85, ease: 'easeOut' }}
//           >
//             <HiX onClick={() => setToggle(false)} />
//             <ul>
//               {['home', 'work', 'about', 'contact'].map((item) => (
//                 <li key={item}>
//                   <a href={`#${item}`} onClick={() => setToggle(false)}>
//                     {item}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
