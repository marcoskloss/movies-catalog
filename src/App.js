import Sidebar from './components/Sidebar'
import MainSection from './components/MainSection'

import { MoviesProvider } from './contexts/MoviesContext'

import './styles/global.css'

function App() {
  return (
    <div className="App" style={{display: 'flex'}}>
      <MoviesProvider>
        <Sidebar />
        <MainSection />
      </MoviesProvider>
    </div>
  );
}

export default App;
