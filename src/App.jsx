import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import {  RouterProvider } from 'react-router-dom';

import Footer from './components/Footer/Footer.jsx';

import router from './Router/Router.jsx'

// import { IntlProvider } from 'react-intl';
function App() {
  return (

    
     <div className="App">

       <Navbar />
       <RouterProvider router={router}/>
      
     
       <Footer />
     </div>
    
  );
}

export default App;