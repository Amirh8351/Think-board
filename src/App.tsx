import Navbar from "./components/Navbar";
import NotesPage from "./features/notes/pages/NotesPage";

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <NotesPage />
    </div>
  );
}

export default App;
