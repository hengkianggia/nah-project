import React from 'react'

const Left = () => {
  return (
    <div className='w-[10%] h-[100vh] bg-red-400 flex flex-col gap-4'>
      <LeftItem/>
      <LeftItem/>
      <LeftItem/>
      <LeftItem/>
      <LeftItem/>
      <LeftItem/>
    </div>
  )
}

export default Left

const LeftItem = () => {
  return <div className="w-full h-[70px] bg-blue-200">popo</div>;
};