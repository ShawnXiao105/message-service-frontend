import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// import Hello from './containers/Hello';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import { enthusiasm } from './reducers/index';
// import { StoreState } from './types/index';
// import { EnthusiasmAction } from "./actions";

// const store = createStore<StoreState, EnthusiasmAction , any, any>(enthusiasm, {
//   enthusiasmLevel: 1,
//   languageName: 'TypeScript',
// });

// ReactDOM.render(
//     <Provider store={store}>
//         <Hello />
//     </Provider>,
//     document.getElementById('root') as HTMLElement
// );

var fixtures = [
    {
        id: 1,
        name: "Inbox",
        emails: [
            {
                id: 1,
                from: "0x00001",
                to: "0x00002",
                subject: "Meeting",
                body: "hi"
            },
            {
                id: 2,
                from: "0x00003",
                to: "0x00002",
                subject: "Intro to React",
                body: "<h1>Intro to React</h1> <img src='https://raw.githubusercontent.com/wiki/facebook/react/react-logo-1000-transparent.png' width=300/)>"
            }
        ]
    }
];

ReactDOM.render(
    <App mailboxes ={ fixtures } />,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
