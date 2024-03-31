import DataTable from "./components/table";
import data from "./data.json";

function App() {
  return (
    <div className="App">
      <DataTable data={data} />
    </div>
  );
}

export default App;
