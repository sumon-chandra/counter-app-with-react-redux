import { Provider } from 'react-redux';
import Counter from './components/Counter';
import DynamicCounter from './components/DynamicCounter';
import store from './redux/store';

function App() {

  return (
    <Provider store={store}>
      <Counter />
      <DynamicCounter />
    </Provider>
  );
}

export default App;
