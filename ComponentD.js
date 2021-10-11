import { useContext } from "react";
import { UserContext } from "./UserContext";




function ComponentD(){
    const value = useContext(UserContext)
    return(
        <div>
            {
                <h1>{value}</h1>
            }
        </div>
    )
}
export default ComponentD;