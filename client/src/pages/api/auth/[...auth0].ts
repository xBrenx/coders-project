import {handleAuth, handleCallback} from "@auth0/nextjs-auth0"
export default handleAuth({
    async callback(req,res){
        try{
            await handleCallback(req,res, { redirectUri:'/' });
        }catch(error) {
            // res.status(error || 500).send(error);
            console.log(error)
        }
    }
})