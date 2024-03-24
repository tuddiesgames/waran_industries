import {
  IonApp,
  setupIonicReact
} from '@ionic/react';
import React from 'react';
import Header from './common/Header.tsx';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <Header />
  </IonApp>
);

export default App;
