import { NotebookPen, Plus } from "lucide-react";

export default function Navbar() {
  return (
    <header >
      <nav >
        <div>
          <div>
            <NotebookPen size={24} />
          </div>
          <h1>
            Think Board
          </h1>
        </div>
        <button>
            <Plus size={20} />
            <span>New Note</span>
        </button>
      </nav>
    </header>
  );
}
