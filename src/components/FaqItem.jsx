import React from 'react'
import { useState } from 'react';
import clsx from "clsx";
import { SlideDown } from 'react-slidedown';
import 'react-slidedown/lib/slidedown.css';

// activeId is set bydefault null which means no answers will be shown
const FaqItem = ({item, index} ) => {
    const [activeId, setActiveId] = useState(null);
    const active = activeId === item.id;

  return (
    <div className='relative z-2 mb-16'>
      <div className='group relative flex cursor-pointer items-center justify-between gap-10 px-7'
       onClick={() => {
        // and from this onclick event the null value will change
        // from null to index.id which will start showing answers
        //Click on an FAQ item to toggle it between open (show answer)
        // and closed (hide answer).
        //The code keeps track of which item is open using activeId.
        //Clicking the same item twice toggles its state between showing
        // and hiding the answer.
        setActiveId( activeId === item.id ? null : item.id)
       }}>
        <div className='flex-1'>
            <div className='small-compact mb-1.5 text-p3 max-lg:hidden'>
               {index < 10 ? "" : ""}
               {index + 1} 
            </div>
            <div className={clsx("h6 text-p4 transition-colors duration-500 max-md:flex max-md:min-h-20 max-md:items-center", active && "max-lg:text-p1")}>
                {item.question}
            </div>
        </div>

        <div className={clsx("faq-icon relative flex size-12 items-center justify-center rounded-full border-2 border-s2 shadow-400 transition-all duration-500 group-hover:border-s4"
                                , active && "before:bg-p1 after:rotate-0 after:bg-p1")}>
            <div className='g4 size-11/12 rounded-full shadow-300'/>
        </div>
      </div>
      <SlideDown>
      {/* SlideDown is a react feature which make the slide up and down
       animation which is helpful for faq section When activeId is equal
        to item.id it will start showing answers*/}
        {/* When activeId will be equals to item.id it will render the 
        div part otherwise it won't */}
            {activeId === item.id && 
                (<div className="body-3 px-7 py-3.5">{item.answer}</div>)
            }
      </SlideDown>

      <div className={clsx("g5 -bottom-7 -top-7 left-0 right-0 -z-1 rounded-3xl opacity-0 transition-opacity duration-500 absolute", active && "opacity-100")}>
        <div className='g4 absolute inset-0.5 -z-1 rounded-3xl'/>
        <div className='absolute left-8 top-0 h-0.5 w-40 bg-p1'/>
      </div>
    </div>
  )
}

export default FaqItem
