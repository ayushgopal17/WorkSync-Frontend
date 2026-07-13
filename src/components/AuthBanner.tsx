 import logo from "../assets/logo.png"
import {Center} from "./Center"


export function AuthBanner(){
    return <div style={{minHeight:"100vh", backgroundColor:"black",alignItems:"center",display:"flex"}}>
        <div style={{width: "100%"}}>
       <Center>
<img src={logo} alt="Worksync logo" style={{width:375,height:125}}/>
 </Center>
  <Center>
        <div style={{color:"white", fontWeight:400,fontFamily:"Inter",fontSize:30,padding:20,textAlign:"center"}}> Build a board, get the job done before anyone else
</div>
        </Center>
    
       </div>
    </div>
}