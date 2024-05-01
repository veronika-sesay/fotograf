import { createRoot } from 'react-dom/client';
import { HomePage } from './pages/HomePage';
import './global.css';

// const App = () => {
//   return (
//     <>
//       <header></header>
//       <main>
//         <HomePage />
//       </main>
//       <footer></footer>
//     </>
//   );
// };

createRoot(document.querySelector('#app')).render(<HomePage />);
