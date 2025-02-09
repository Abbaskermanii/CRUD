function ModalUpdate({ update, setUpdate, user }) {
  if (!update) return null;
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
      <div className="modal-box relative p-6 shadow-lg rounded-lg bg-base-200 w-96">
        <h3 className="font-bold text-lg text-center mb-4">
          Update {user.name}!
        </h3>
        <button
          onClick={() => setUpdate(false)}
          className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4"
        >
          ✕
        </button>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            className="input input-bordered w-full bg-base-100"
            placeholder="Username"
            defaultValue={user.name}
          />
          <input
            type="email"
            className="input input-bordered w-full bg-base-100"
            placeholder="Email"
            defaultValue={user.email}
          />
          <input
            type="text"
            className="input input-bordered w-full bg-base-100"
            placeholder="JOb"
            defaultValue={user.job}
          />
          <input
            type="text"
            className="input input-bordered w-full bg-base-100"
            placeholder="Rete"
            defaultValue={user.rete}
          />
          <input
            type="password"
            className="input input-bordered w-full bg-base-100"
            placeholder="Password"
            defaultValue={user.password}
          />

          <div className="flex justify-center space-x-5 mt-4 ">
            <button
              type="button"
              onClick={() => setUpdate(false)}
              className="btn btn-outline btn-primary w-1/3"
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-primary w-1/3">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalUpdate;
