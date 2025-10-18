'use client'

import React, {useState} from "react";

export default function Home() {
  const [focusName, setFocusName] = useState<string>();
  const [focusDesc, setFocusDesc] = useState<string>();
  const [focusDur, setFocusDur] = useState<number>();
  const [focusMod, setFocusMod] = useState<string>();
  const [focusId, setFocusId] = useState<string>();
  const [prevFocusId, setPrevFocusId] = useState<string>();
  const [excFocusId, setExcFocusId] = useState<string>(); 

  function handleChangeArea(event:React.ChangeEvent<HTMLTextAreaElement>) {
    const durValue = event.target.value;
    const parsedDur = Number(durValue);

    setFocusDur(parsedDur);
    setFocusMod(event.target.value);
  }

  function handleChange(event:React.ChangeEvent<HTMLInputElement>) {
    setFocusName(event.target.value);
    setFocusDesc(event.target.value);
    setFocusId(event.target.value);
    setPrevFocusId(event.target.value);
    setExcFocusId(event.target.value);
  }

  function createFocus(dur:number = 0, mod:string = "", id:string = "", prevId:string = "", excId:string = "") {
    let cost = 0;
    let result = ``;
    
    if (dur % 7 == 0) {
      cost = dur / 7;
    }
    else {
      cost = Math.round(dur / 7);
    }
    
    if (prevId == "" && excId == "") {
      result = `
        focus = {
          id = ${id}
          icon = GFX_focus_${id}
          x = 0 #По горизонтали
          y = 0 #По вертикали
          cost = ${cost}

          available_if_capitulated = no
		
          completrion_reward = {
            ${mod}
          }
        }
      `;
    }
    else if (prevId != "" && excId == "") {
      result = `
        focus = { 
          id = ${id} 
          icon = GFX_focus_${id}
	        prerequisite = { focus = ${prevId} }
          x = 0 #По горизонтали
          y = 1 #По вертикали
	        relative_position_id = ${prevId} ##Наследование позиции
	        cost = ${cost} 

          available_if_capitulated = no
		
          completion_reward = { 
		        ${mod}
	        }		
        }
      `;
    }
    else if (prevId == "" && excId != "") {
      result = `
        focus = {
          id = ${id}
          icon = GFX_focus_${id}
          mutually_exclusive = { focus = ${excId} }
          x = 0 #По горизонтали
          y = 0 #По вертикали
          cost = ${cost}
		
          completrion_reward = {
            ${mod}
          }
        }
      `;
    }

    return result;
  }

  return (
    <>
      <header className="place-items-center">
        <div>
          <h1 className="font-extrabold text-2xl py-3">Focus-Parser</h1>
        </div>
      </header>
      <main className="place-items-center">
        <div className="grid grid-cols-1 gap-3 pt-40 pb-5">
          <input placeholder="Focus Name" type="text" className="w-70 text-black bg-gray-200 rounded-md px-2 font-semibold" value={focusName} onChange={handleChange} />
          <textarea placeholder="Focus Description" className="w-70 h-auto text-black bg-gray-200 rounded-md px-2 font-medium" value={focusDesc} onChange={handleChangeArea} />
          <input type="number" placeholder="Focus Duration" className="w-70 text-black bg-gray-200 rounded-md px-2 font-medium" value={focusDur} onChange={handleChange} />
          <textarea placeholder="Focus Modifier" className="w-70 h-auto text-black bg-gray-200 rounded-md px-2 font-medium" value={focusMod} onChange={handleChangeArea} />
          <input type="text" placeholder="FocusID Example: iva_politfoc_1" className="w-70 text-black bg-gray-200 rounded-md px-2 font-medium" value={focusId} onChange={handleChange} />
          <input type="text" placeholder="Previus FocusID (optional)" className="w-70 text-black bg-gray-200 rounded-md px-2 font-medium" value={prevFocusId} onChange={handleChange} />
          <input type="text" placeholder="Exception FocusID (optional)" className="w-70 text-black bg-gray-200 rounded-md px-2 font-medium" value={excFocusId} onChange={handleChange} />
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
        <div className="bg-gray-200 border-1 w-70 h-auto text-black rounded-md m-5 px-2 whitespace-pre-wrap">
          Country.txt:
          {createFocus(focusDur, focusMod, focusId, prevFocusId, excFocusId)}

          Localisation:
          
        </div>       
      </main>
    </>  
  );
}
