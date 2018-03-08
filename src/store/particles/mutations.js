import {
    CHANGEUSERINFO
} from './const'

let mutations = {
    [CHANGEUSERINFO](state,userinfo){
        state.userinfo = userinfo
    }
}

export default mutations