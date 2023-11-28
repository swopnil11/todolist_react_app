import './App.css';
import { TodoWrapper } from './components/TodoWrapper';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <TodoWrapper/>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
