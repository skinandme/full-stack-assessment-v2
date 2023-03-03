import React from "react";
import logo from "./logo.svg";
import "./App.css";
import fooApi from "./api/foo";
import ShippingPage from "./pages/ShippingPage";
import BillingPage from "./pages/BillingPage";

function App() {
  const [foo, setFoo] = React.useState<string>();
  const [page, setPage] = React.useState<string>("base");

  const callFoo = async () => {
    setFoo(await fooApi());
  };

  const resetFoo = () => {
    setFoo(undefined);
  };

  return (
    <div className="App">
      <header></header>
      <main className="App-main">
        {(() => {
          switch (page) {
            case "shipping":
              return <ShippingPage onSuccess={setPage} />;
            case "billing":
              return <BillingPage />;
            default:
              return (
                <>
                  <img src={logo} className="App-logo" alt="logo" />
                  <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                  </p>
                  <span>
                    <button onClick={callFoo}>Foo?</button>
                    <button onClick={resetFoo}>Reset</button>
                  </span>
                  <p>{foo}</p>
                  <button onClick={() => setPage("shipping")}>Buy Now</button>
                </>
              );
          }
        })()}
      </main>
    </div>
  );
}

export default App;
