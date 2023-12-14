function BackgroundSelector() {
  return (
    <div className="backdrop-blur bg-white/0 m-5 rounded-3xl drop-shadow-lg shadow-2xl text-gray-100 w-min p-5">
      <h1 className="text-lg">BackgroundSelector</h1>

      <div>
        <img
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e065829d-fc32-4289-a2af-e68fd8cb079d/dg96ekl-7ff10160-9050-4a8a-af06-ad97af46fbe5.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2UwNjU4MjlkLWZjMzItNDI4OS1hMmFmLWU2OGZkOGNiMDc5ZFwvZGc5NmVrbC03ZmYxMDE2MC05MDUwLTRhOGEtYWYwNi1hZDk3YWY0NmZiZTUuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.h94JLLgRA_w2ngBcY_2qXszwKBqz1c5OJDkhl2HWT4Y"
          alt=""
        />
      </div>

        <button className="backdrop-blur bg-white/10 m-5 rounded-3xl drop-shadow-lg shadow-2xl text-gray-100 w-min p-5">Choose Background</button>

      <select name="" id="" className="rounded-lg text-black">
        <option value="" className="">
        🤖🤖🤖
        </option>
        <option value="">background 2</option>
        <option value="">background 3</option>
      </select>
    </div>
  );
}

export default BackgroundSelector;
