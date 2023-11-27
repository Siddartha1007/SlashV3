import './App.css';
import './components/custom.css'
import Routing from './components/Routing.js';
import { BrowserRouter } from 'react-router-dom';
import logo from './slash.png';


import {Amplify} from 'aws-amplify';
import {Authenticator, View, Image, useTheme, Text } from '@aws-amplify/ui-react';
import awsExports from './aws-exports.js';
import styled from 'styled-components';
import '@aws-amplify/ui-react/styles.css';

import SiteNav from './components/SiteNav.js';


Amplify.configure(awsExports);

function App() {

  const StyledView = styled(View)`
    padding: 20px;
    background-color: #00AA9B;
    border-radius: 10px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
    margin-bottom: 20px;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
    margin: 20px 0;
    font-size: 18px; 
  `;


  const StyledViewLogo = styled(View)`
    max-width: 600px;
    border-radius: 20%;
    border: 3px solid #00AA9B;
    margin-top: 20px;
    margin-bottom: 20px;
    `;


  const components = {
    Header() {
      const { tokens } = useTheme();
      console.log("logo",logo)
  
      return (
        <StyledViewLogo textAlign="center" padding={tokens.space.large}>
          <Image
            alt="Slash"
            src={logo}
          />
        </StyledViewLogo>
      );
    },
    Footer() {
      const { tokens } = useTheme();
  
      return (
        <StyledView textAlign="center" padding={tokens.space.large}>
        <Text color="white">
          Do you love shopping? Are you in search of some good deals while shopping online? Slash is here to help you look for the best deals! <br /><br />
          Contact Us: SEslash0041@gmail.com <br /><br />
          About Us: <br />
          Siddartha <br />
          Deepika <br />
          Tulasi <br />
          Yogitha <br /><br />
          Licensed by MIT
        </Text>
        
      </StyledView>
      );
    },
  };



  return (
    <div style={{  background:  'linear-gradient(to bottom right, #03514B,#000000, #03514B)', minHeight: '100vh' }}>

    <Authenticator loginMechanisms={['email']} components={components}>
    {({ signOut, user}) => (
      <div>
        <SiteNav logOut={signOut} />  
        <BrowserRouter>
          <Routing></Routing>
        </BrowserRouter>
      </div>
    )}
  </Authenticator>
  </div>

  );
}

export default App;
