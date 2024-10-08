'use client'
import { iam } from "@/utils/req"

export default ()=>{
    const click = async()=>{
       await iam()
       
    }
    return(
        <button
        onClick={()=>{click()}}
        ></button>
    )
}