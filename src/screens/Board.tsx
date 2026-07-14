import {Appbar} from "../components/Appbar"
import {Card} from "../components/Card"
import {BoardsSection} from "../components/BoardsSection"
import { useState } from "react"

export function Board(){

    const [pendingTask,setPendingTask]= useState([{id:"1",title:"Node to bun migration",description:"Move website from node.js t bun.js we have been trying this from a while but not working out.."},{id:"2",title:"Node to bun migration",description:"Move website from node.js t bun.js we have been trying this from a while but not working out.."},{id:"3",title:"Node to bun migration",description:"Move website from node.js t bun.js we have been trying this from a while but not working out.."}]) 
    const [onGoingTask,setOnGoingTask]=useState([{id:"4",title:"Node to bun migration",description:"Move website from node.js t bun.js we have been trying this from a while but not working out.."}]) 
    const [doneTask,setDoneTask]= useState([{id:"5",title:"Node to bun migration",description:"Move website from node.js t bun.js we have been trying this from a while but not working out.."},{id:"6",title:"Node to bun migration",description:"Move website from node.js t bun.js we have been trying this from a while but not working out.."}])

    return<div>
    <Appbar/>
     <div style={{display:"flex",padding:30}}>
          <div style={{flex:1, borderRight:"1px dotted black",minHeight:"80vh"}}>
            <BoardsSection OnDrop={(item)=>{
            console.log(item)
         
            setPendingTask(p=> p.filter(x=> x.id != item.id))
             setOnGoingTask(p=> p.filter(x=> x.id != item.id))
              setDoneTask(p=> p.filter(x=> x.id != item.id))
              setPendingTask(p=> [...p,item])
        
            }}>
         
       {pendingTask.map(task=> <Card
       id={task.id}
        title= {task.title}
        description={task.description}/>
       )}
              </BoardsSection >
          </div>
          <div style={{flex:1, borderRight:"1px dotted black",minHeight:"80vh"}}>
            <BoardsSection OnDrop={(item)=>{
            console.log(item)
         
            setPendingTask(p=> p.filter(x=> x.id != item.id))
             setOnGoingTask(p=> p.filter(x=> x.id != item.id))
              setDoneTask(p=> p.filter(x=> x.id != item.id))
              setOnGoingTask(p=> [...p,item])
        
            }}>
           
       {onGoingTask.map(task=> <Card
       id={task.id}
        title= {task.title}
        description={task.description}/>
       )}
         </BoardsSection>
          </div>
         
          <div style={{flex:1}}>
          <BoardsSection OnDrop={(item)=>{
            console.log(item)
         
            setPendingTask(p=> p.filter(x=> x.id != item.id))
             setOnGoingTask(p=> p.filter(x=> x.id != item.id))
              setDoneTask(p=> p.filter(x=> x.id != item.id))
              setDoneTask(p=> [...p,item])
        
            }}>
           
       {doneTask.map(task=> <Card
       id={task.id}
        title= {task.title}
        description={task.description}/>
       )}
         </BoardsSection>
          </div>
    </div>
    </div>
}