import { CentreLayout } from './app/containers/CentreLayout/index';
import { RickAndMortyApp } from './app/containers/RickAndMortyApp/index';
import './App.css';

function App() {
  return (
    <CentreLayout>
      <RickAndMortyApp />
    </CentreLayout>
  );
}

export default App;
