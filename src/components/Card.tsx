import { useDrag } from 'react-dnd'


export function Card( {title,description,id}: any ){
     const [{opacity},dragRef] =useDrag(
        () => ({
            type: "card",
            item: {title,description,id},
            collect: (monitor) =>({
                opacity: monitor.isDragging() ? 0.5:1
            })
        })
     )
     
    return <div ref={dragRef} style={{opacity ,border: "solid 1px black", borderRadius:10,padding:30,margin:20,cursor:"pointer"}}>
         <div style={{margin:10}}>
   {title}
   </div>
   <div  style={{height:1, width:"100%",background:"black"}}> </div>
   <div style={{margin:10}}>
      {description}
  </div>
    </div>
}