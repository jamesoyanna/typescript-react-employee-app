import { Employee } from "./features/employee/Employee";
function App() {
  return (
    <>
      <nav className="navbar is-info">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">Typescript Crude Application</a>
        </div>
      </nav>
      <div className="container is-max-desktop">
        <Employee />
      </div>
    </>
  );
}

export default App;
