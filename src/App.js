import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { createContext } from 'react';
import { Footer } from './components/Footer/Footer';
import { ToastDialog } from './components/ReusableComponents/Toast/ToastDialog';
import { CustomerService } from './Pages/CustomerServicePage';

let UserContext = createContext("test");

function App() {
  let warning = "New to Amazon? Visit the Get started with Amazon page to guide you through your shopping journey with Amazon. You can also enjoy the shopping experience in your language of preference by switching to your desired language (Hindi, Tamil, Telugu, Kannada, Malayalam, Marathi and Bengali). To know more, visit this page."
  return (
    <div className="App">
      <Navbar cartCount="0">
      </Navbar>
      <p>Test Content</p>
      <CustomerService></CustomerService>
      <Footer></Footer>
    </div>
  );
}

export default App;
