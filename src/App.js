import Sidebar from './components/Sidebar'
import MoviesSection from './components/MoviesSection'

import { MoviesProvider } from './contexts/MoviesContext'

import './styles/global.css'

function App() {
  return (
    <div className="App" style={{display: 'flex'}}>
      <MoviesProvider>
        <Sidebar />
        <MoviesSection />
      </MoviesProvider>
    </div>
  );
}

export default App;
