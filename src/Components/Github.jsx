import React, { useEffect, useState } from 'react'

function Github() {

    const [data, setData] = useState([])

    useEffect(() =>{

        fetch('https://api.github.com/users/ashfaqakhtar')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setData(data)
        })

    },[])

  return (
    <div className='text-center m-4 bg-gray-400 text-white p-4 text-3xl'>Github Followers : {data.followers} 
    <img title='Github Profile' src={data.avatar_url} alt="git pic" />
    
    </div>
  )
}

export default Github