import {useAuth0} from '@auth0/auth0-react'
import { useRouter } from 'next/router'
function Profile(){
    const{user, isLoading, isAuthenticated}=useAuth0();
    const router=useRouter();
    if(isLoading){
        return(
            <div>Loading....</div>
        )
    }
    if(!isAuthenticated){
        router.push('/');
        return null;
    }
    return(
        <div>
            <h1>Profile</h1>
            <p>Welcome, {user.name}</p>
        </div>
    )
}
export default Profile;