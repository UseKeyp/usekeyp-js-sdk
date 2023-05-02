import logo from './logo.svg';
import './App.css';
import { LoginPortal } from "@usekeyp/ui-kit";

function App() {
  const onClick = (providerType) => {
    console.log(providerType)
    // custom auth logic depending on the app
  }

  return (
    <div className="App">
      <header className="App-header">
        <LoginPortal
          providers={["TWITTER", "GITHUB", "APPLE"]}
          additionalProviders={["DISCORD", "GOOGLE"]}
          onClick={onClick}
        />
      </header>
    </div>
  );
}

export default App;
