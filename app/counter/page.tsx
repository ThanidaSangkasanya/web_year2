//Please show 'num' on the browser
//creat 1 button to +1 to num
//default function component is Server Component

'use client'

import { useState } from "react"


export default function Counter(){

    const [ num , setNum] = useState(1)//Reat hook
//full function  แต่เขียนย่อได้
    function add(){
        console.log('Add function call')
        setNum(num+1)
        console.log("Num: ",num)
    }
    

    return (<>
    <h1>Counter: {num} </h1>
        <button className="border-2 border-black p-2"
        onClick={add}>
            +
        </button>
        <button className="border-2 border-black p-2 m-1"
        //funtionแบบย่อ
        onClick={() => (setNum(num-1))}>
            -
        </button>
        <button className="border-2 border-black p-2 m-1"
        onClick={() => (setNum(0))}>
            0
        </button>
    </>)//JSX
}