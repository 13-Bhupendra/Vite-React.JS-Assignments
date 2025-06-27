import { useState } from "react"

function Button () {
    const [flag,setflag] = useState(false)
    return(
        <button onClick={()=>setflag(!flag)} className="btn btn-outline-primary">
            {!flag ? "Follow" : "Following"}
        </button>
    )
}

export default Button