import React from 'react'
import Child from './Child';


const users=[{id:1,name:'rani',age:20,address:{city:'HYD',state:'TS'}},
{id:2,name:'mahi',age:21,address:{city:'TPT',state:'AND'}},
{id:3,name:'ricky',age:22,address:{city:'AGRA',state:'MP'}},
{id:4,name:'john',age:23,address:{city:'MUMBAI',state:'MP'}},
{id:5,name:'mike',age:24,address:{city:'BNG',state:'KAR'}},
]   


function ListRendering(){
    return(
        <div>

    {
        users.filter(i=>i.id===5).map((e)=>{
            return<Child name={e.name}  age={e.age}/>
        })
       
    }
        </div>
    )

    
    
    



}



export default ListRendering;