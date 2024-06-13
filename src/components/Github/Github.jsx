import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'

function Github() {
    const [data,setData] = useState([]);
    useEffect(()=> {
        fetch('https://api.github.com/users/hiteshchoudhary')
        .then(res => res.json())
        .then(
            data=>{
                console.log(data);
                setData(data);
            }
        )
    },[])


  return (
    <div className=' text-center m-4 bg-gray-400 text-white p-4 text-3xl flex flex-col '>Github followers: {data.followers}
        <img src={data.avatar_url} alt="" width="300" className=' m-4' />

    </div>
  )
}

export default Github