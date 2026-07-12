import {AuthBanner} from '../components/AuthBanner';
import {AuthCredential} from '../components/AuthCredential'


export function Auth(){

    return <div style={{display:"flex"}}>
        <div style={{flex:4}}>
 <AuthBanner />
        </div>
      <div style={{flex:6}}>
<AuthCredential/>
      </div>
       
    </div>
}