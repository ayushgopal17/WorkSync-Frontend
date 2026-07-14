import {useDrop} from 'react-dnd'

export function BoardsSection(props){
 
const [{isOver,canDrop},drop]=useDrop({
 
     accept:["card"],
     drop: props.OnDrop,
    
     collect: (monitor)=>({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop()
     }),

})


    return <div ref={drop} style={{flex:1,borderRight: "1px dotted black",minHeight:"80vh" }}>
{props.children}
    </div>
}