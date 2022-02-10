
import './App.css';
import '@aws-amplify/ui-react/styles.css';
import {AmplifyProvider} from '@aws-amplify/ui-react';
import {FormCheckout} from './ui-components'

function App() {
  return (
    <AmplifyProvider>
        <FormCheckout width={"100vw"}/>
  </AmplifyProvider>
  );
}

export default App;
