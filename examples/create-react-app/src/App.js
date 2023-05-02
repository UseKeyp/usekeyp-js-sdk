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
        <h1 className="mb-5">Create React App</h1>
        <code className="mb-10">@usekeyp/ui-kit</code>
        <br />
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
