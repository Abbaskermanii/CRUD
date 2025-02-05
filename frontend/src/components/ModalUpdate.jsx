function ModalUpdate() {

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg relative">
        <button
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        >
          ✕
        </button>
        <h3 className="font-bold text-lg text-black"></h3>
        <p className="py-4 text-black"></p>
      </div>
    </div>
  );
}

export default ModalUpdate;
