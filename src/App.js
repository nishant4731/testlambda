import Layout from './components/Layout/Layout';
import Home from './components/Home/Home'
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <Layout>
          <Home/>
        </Layout>
      </div>
    </div>
  );
}

export default App;
