import React from 'react'
import ChildMap from './ChildMap'


const Map=()=>{
    const items=[
    {id:1,rate:20,quant:2},
    {id:2,rate:30,quan:4}]

return(
    <div>
        {
            items.map((i)=>{
               <ChildMap items={items}/>

            })
}

    </div>
)
}




export default Map;