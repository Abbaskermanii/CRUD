function ModalDelete({ remove, setRemove, user }) {
  if (!remove) return null;

  return (
    <div className="fixed inset-0 ">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm "></div>
      <div className="modal-box absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <form method="dialog">
          <button
            onClick={() => setRemove(false)}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
        </form>
        <h3 className="font-bold text-lg">Delete {user.name}!</h3>
        <p className="py-4">Are you sure you want to delete this user</p>
        <div className="space-x-10">
          <button
            onClick={() => setRemove(false)}
            className="btn btn-outline btn-primary"
          >
            Cancel
          </button>
          <button className="btn btn-primary">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default ModalDelete;
