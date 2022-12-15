import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/General/App';
import { Provider } from 'react-redux';
import store from './redux/store';
import './index.css';

const root: ReactDOM.Root  = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render( 
    <Provider store={store}>
        <App />  
    </Provider>
);
