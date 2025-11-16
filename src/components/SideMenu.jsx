export function SideMenu({ setPage }) {
  return (
    <div className="w-32 bg-slate-900 text-white p-4 flex flex-col gap-6">
      
      <button 
        className="text-purple-400 hover:text-purple-200"
        onClick={() => setPage("SSR")}
      >
        SSR
      </button>

      <button 
        className="text-yellow-400 hover:text-yellow-200"
        onClick={() => setPage("SR")}
      >
        SR
      </button>

      <button 
        className="text-blue-400 hover:text-blue-200"
        onClick={() => setPage("R")}
      >
        R
      </button>

      
    </div>
  );
}
