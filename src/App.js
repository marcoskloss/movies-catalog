import Sidebar from './components/Sidebar'
import MainSection from './components/MainSection'

import './styles/global.css'

function App() {
  return (
    <div className="App" style={{display: 'flex'}}>
      <Sidebar />
      <MainSection />
    </div>
  );
}

export default App;
