import './App.css';
import './components/custom.css'
import Routing from './components/Routing.js';
import { BrowserRouter } from 'react-router-dom';

import {Amplify} from 'aws-amplify';
import {Authenticator} from '@aws-amplify/ui-react';
import awsExports from './aws-exports.js';

import '@aws-amplify/ui-react/styles.css';

import SiteNav from './components/SiteNav.js';

Amplify.configure(awsExports);

function App() {
  return (
    <Authenticator loginMechanisms={['email']}>
    {({ signOut, user}) => (
      <div>
        <SiteNav logOut={signOut} />  
        <BrowserRouter>
          <Routing></Routing>
        </BrowserRouter>
      </div>
    )}
  </Authenticator>
  );
}

export default App;
