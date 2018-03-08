import { 
    LOGIN,
    CHANGEUSERINFO
 } from './const'

let actions = {
    [LOGIN]({commit},callback){
        setTimeout(()=>{
            commit(CHANGEUSERINFO,{
                username:"15001227453",
                pwd:'123',
            })
            callback()
        },1000)
    },
}
export default actions