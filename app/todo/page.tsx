// define JSON object (tasks[]) consists of
// id, name, time 

'use client'

import { Updock } from "next/font/google"
import { useState } from "react"
// show tasks on the browser

export default function Todo() {
    // Create 2 state variables called 'name' , 'time'  
    const [name, setName] = useState('')
    const [time, setTime] = useState(0)
    const [tasks, setTasks] = useState([
        { id: 1, name: "Read a book", time: 20 },
        { id: 2, name: "write a program", time: 40 },
        { id: 3, name: "Sleep is the best", time: 90 },
    ])
    const [editID, setEditID] = useState(-1)

    // javascript tradition function
    function foo1() {
        return "foo1"
    }

    // anonynous function
    const foo2 = function () {
        return "foo2"
    }
    // arrow function
    const foo3 = () => {
        return "foo3"
    }
    const foo4 = () => "foo4"

    console.log(`${foo1() + foo2() + foo3() + foo4()}`)


    function addTask() {
        /*setTasks([...tasks,
        {
            id: tasks[tasks.length - 1].id + 1, name, time
        }])*/
        /*
        let id:number;
        if(tasks.length ===0)
         id = 1
        else
        id = tasks[tasks.length-1].id +1*/

        const id = (!tasks.length) ? 1 : tasks[tasks.length - 1].id + 1
        setTasks([...tasks, { id, name, time }])
    }

    function deleteTask(id: number) {
        const temp = tasks.filter((item) => item.id !== id)
        setTasks([...temp])
    }

    function editTask(id: number) {
        const taskIndex = tasks.findIndex(item => item.id === id)
        setEditID(taskIndex)
        setName(tasks[taskIndex].name)
        setTime(tasks[taskIndex].time)
    }

    function updateTask() {
        const temp = tasks;
        temp[editID].name = name
        temp[editID].time = time
        setTasks([...temp])


        setEditID(-1)
        setName("")
        setTime(0)
    }

    return <>
        <h1>Todo</h1>
        <ul>
            {tasks.map((item) =>
                <li key={item.id}>
                    {item.id} : {item.name} : {item.time}
                    <button className="border-2 border-black m-2 p-1"
                        onClick={() => deleteTask(item.id)}>
                        delete
                    </button>
                    <button className="border-2 border-black m-2 p-1"
                        onClick={() => editTask(item.id)}>
                        edit
                    </button>
                </li>)}
        </ul>
        <br />
        <hr />
        {/* Create 2 input textbox for name & time */}
        {/*<button className="border-2 border-black">
            +Task
        </button>*/}
        <h1>Add task</h1>
        Name: {name} <br />
        Time: {time} <br />
        <input
            className="border-2 border-black m-1 text-xl"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
        />
        <br />
        <input
            className="border-2 border-black m-1 text-xl"
            value={time}
            onChange={(e) => setTime(+e.target.value)}
            type="number"
        />
        <br />
        <button
            className="border-2 border-black m-1 p-2"
            onClick={(editID === -1) ? addTask : updateTask}
        > {(editID === -1) ? "Add new" : "update Task"}
        </button>
    </>
}