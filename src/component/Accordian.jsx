import React, { useState } from 'react'

export const Accordian = () => {
const [accordian, setAccordian] = useState('')

    const handleCLick = (accor) => {
        setAccordian(accordian === accor ? "" : accor)
        
    }

  return (
    <div className=''>
        <div>
        <h1 onClick={() => handleCLick('first')}>Accordian item #1</h1>
        {accordian === 'first' ? 'this is the first accordian you clicled' : ''}
        </div>

        <div>
        <h1 onClick={() => handleCLick('second')}>Accordian item #2</h1>
        {accordian === 'second' ? 'this is the second accordian you clicled' : ''}
        </div>

        <div>
        <h1 onClick={() => handleCLick('third')}>Accordian item #3</h1>
        {accordian === 'third' ? 'this is the third accordian you clicled' : ''}
        </div>
        
    </div>
  )
}
