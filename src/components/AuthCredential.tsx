import { Button } from "./Button"
import { Center } from "./Center"
import {Input} from "./Input"

export function AuthCredential(){
    return <div style={{minHeight:"100vh", display:"flex", alignItems:"center", backgroundColor:"#5811a9"}}>
       <div style={{width:"100%"}}>
        <div style={{fontSize:30,padding:20}}>
        <Center >
      <b>  Log in to WorkSync</b>
        </Center>
        </div>
        <Center >
        Connect to WorkSync with
        </Center>

         <Center >
         
<Input type="text" placeholder="Email" />

</Center>
<Center >
    
<Input type="text" placeholder="Password" />

</Center>
<Center>
    <Button> Login</Button>
</Center>
       </div>
    </div>
}