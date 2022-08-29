// import GuestList from "./state/GuestList";
// import EventComponent from "./events/EventComponent";
// import UserSearch from "./state/UserSearch";
// import UserSearch from "./refs/UserSearch";
import { Provider } from "react-redux";
import { store } from "./state";
import RepositoriesList from "./components/RepositoriesList";

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Search for a package</h1>
        <RepositoriesList />
      </div>
    </Provider>
  );
}

export default App;
