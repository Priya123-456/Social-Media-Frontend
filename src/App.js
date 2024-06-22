import Messanger from "./components/Messanger";
import AccountProvider from "./components/Context/AccountProvider"

import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {

  const clientId='put your client id';
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
     <Messanger/>
     </AccountProvider>
    </GoogleOAuthProvider>
    
  );
}

export default App;
