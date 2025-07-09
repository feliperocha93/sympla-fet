import { useState } from "react";
import useData from "./useData";

function App() {
  const [count, setCount] = useState(0)
  const { data } = useData()

  console.log(data)

  const {
    // available,
    description,
    image,
    price,
    title,
  } = data || {}

  return (
    <div className='flex flex-col h-screen bg-[#F1F5F9]'>
      {/* Logo */}
      <div className="flex justify-center p-6 bg-white">
        <img src="https://www.sympla.com.br/discovery-assets/icons/logo-sympla.svg" alt="logo" className='w-24 h-8' />
      </div>

      {/* Card */}
      <div className="flex flex-col justify-center pt-8 max-w-lg mx-auto px-3">
        <div>
          <img className="rounded-t-lg" src={image} alt="" />
        </div>

        <div className='flex flex-col p-4 bg-white rounded-b-lg'>
          <div className='flex flex-col mb-6'>
            <h1 className='text-2xl font-bold mb-3'>{title}</h1>
            <p className='text-sm text-[#383838]'>{description}</p>
          </div>

          <div className='flex flexl p-4 justify-between items-center'>
            <div className='flex flex-col gap-2'>
              <span>Preço unitário</span>
              <span className="text-xl font-bold text-[#00A1FC]">R$ {(price !== undefined ? (price / 100).toFixed(2) : '')}</span>
              <span >Total: R$ {(price !== undefined ? (price / 100 * count).toFixed(2) : '')}</span>
            </div>

            <div className='flex gap-4 items-center '>
              <button className='bg-gray-200 w-8 h-8 rounded-lg cursor-pointer hover:bg-gray-300' onClick={() => setCount(count + 1)}>+</button>
              <span>{count}</span>
              <button disabled={count === 0} className='bg-gray-200 w-8 h-8 rounded-lg cursor-pointer hover:bg-gray-300' onClick={() => setCount(count - 1)}>-</button>
            </div>
          </div>

          <button className='bg-[#00A1FC] text-white p-2 rounded-lg cursor-pointer hover:bg-[#00A1FC]/80'>Comprar ingresso</button>
        </div>
      </div>
    </div>
  )
}

export default App
