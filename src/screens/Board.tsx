import {Appbar} from "../components/Appbar"
import {Card} from "../components/Card"

export function Board(){
    return<div>
    <Appbar/>
     <div style={{display:"flex",padding:30}}>
          <div style={{flex:1, borderRight:"1px dotted black",minHeight:"80vh"}}>
         <Card 
          title="Node to bun migration" 
         description=" Move website from node.js t bun.js we have been trying this from a while but not working out.."
         />
         <Card 
          title="Node to bun migration" 
         description=" Move website from node.js t bun.js we have been trying this from a while but not working out.."
         />
         <Card 
          title="Node to bun migration" 
         description=" Move website from node.js t bun.js we have been trying this from a while but not working out.."
         />
          </div>
          <div style={{flex:1, borderRight:"1px dotted black",minHeight:"80vh"}}>
         <Card 
          title="Node to bun migration" 
         description=" Move website from node.js t bun.js we have been trying this from a while but not working out.."
         />
          </div>
          <div style={{flex:1}}>
           <Card 
          title="Node to bun migration" 
         description=" Move website from node.js t bun.js we have been trying this from a while but not working out.."
         />
          </div>
    </div>
    </div>
}