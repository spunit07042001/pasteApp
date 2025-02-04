import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';
import { addToPastes, updateToPastes } from '../Redux/pasteSlice';

const ViewPaste = () => {

  const {id} = useParams();
  const allPastes = useSelector((state) => state.paste.pastes);

  const paste = allPastes.filter((p) => p._id === id)[0];

  return (
    <div>
    <div className='flex flex-row gap-7 place-content-between'>
    <input 
    disabled 
    type="text" 
    placeholder='enter title here' 
    value={paste.title} 
    onChange={(e)=>{
        setTitle(e.target.value)
    }} 
   />

</div>
  <div className='mt-8' >
      <textarea disabled className='rounded-2xl mt-4, min-w-[500px] p-4' value={paste.content} placeholder='enter content here' onChange={(e)=>{setValue(e.target.value)}} rows={20} />
  </div>
</div>  
 )
}

export default ViewPaste