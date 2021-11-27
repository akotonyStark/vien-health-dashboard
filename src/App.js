import logo from './logo.svg'
import './App.css'
import Navbar from './components/Navbar'
import Content from './components/Content'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className='wrapper'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='content'>
        <Content />
      </div>
      <div className='sidebar'>
        <Sidebar />
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </div>
  )
}

export default App
