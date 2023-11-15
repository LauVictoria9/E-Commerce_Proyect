import React from 'react';
import { AiOutlinePercentage } from 'react-icons/ai'

function App() {
    const buttonStyling = `flex space-x-3 mr-2 font-semibold bg-gradient-to-r from-orange-500 to-yellow-300
    text-gray-100 rounded-sm ring-2 ring-blue-200 px-6 py-2 hover:text-black mx-8`;

  return (
    <div>
      <div className='grid grid-cols-1 place-items-center'>
        <button
          type='submit'
          className={buttonStyling}>
          <p>Ofertas</p>
          <AiOutlinePercentage size='1.5rem' />
        </button>
      </div>
    </div>
  )
}

export default App