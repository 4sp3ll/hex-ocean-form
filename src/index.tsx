import ReactDOM from 'react-dom';
import App from './App';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { reducer as formReducer } from 'redux-form';
// import { composeWithDevTools } from 'redux-devtools-extension';
import 'bootstrap/dist/css/bootstrap.min.css';

const initialState = {
  form: {
    main: {
      anyTouched: '',
      fields: {},
      registeredFields: {},
      values: {}
    }
  }
}

const rootReducer: any = combineReducers({
  form: formReducer,
})

const store = createStore(
  rootReducer ,
  initialState,
  // composeWithDevTools()
)

export type RootState = ReturnType<typeof store.getState>

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
);


