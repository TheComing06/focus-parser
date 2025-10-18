
export default function Home() {
  return (
    <>
    <header className="place-items-center">
        <div>
          <h1 className="font-extrabold text-2xl py-3">Focus-Parser</h1>
        </div>
      </header>
      <main className="place-items-center">
        <div className="grid grid-cols-1 gap-3 pt-40 pb-5">
          <input placeholder="Focus Name" type="text" className="w-60 text-black bg-gray-200 rounded-md px-2 font-semibold" />
          <textarea placeholder="Focus Description" className="w-60 h-auto text-black bg-gray-200 rounded-md px-2 font-medium" />
          <input type="number" placeholder="Focus Duration" className="w-60 text-black bg-gray-200 rounded-md px-2 font-medium" />
          <textarea placeholder="Focus Modifier" className="w-60 h-auto text-black bg-gray-200 rounded-md px-2 font-medium" />
        </div>
        <button className="grid grid-cols-1 
        text-2xl 
        w-60 h-10 
        text-white bg-stone-800 
        rounded-md 
        font-bold 
        hover:scale-125
        hover:shadow-md
        hover:border-1
        transition-transform duration-400 ease-in-out">
          Parse
        </button>
        <div className="bg-gray-200 border-1 w-60 h-auto text-black rounded-md m-5 px-2 break-words">
          Result
        </div>       
      </main>
    </>  
  );
}
