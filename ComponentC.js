import React from 'react'
import { UserConsumer } from './UserContext'


function ComponentC(){
    return(
        <div>
             <UserConsumer>
            {
                
                (value)=>{
                    return<div>{value}</div>
                    
                }
               

            }
             </UserConsumer>
            
        </div>
    )
}


export default ComponentC;