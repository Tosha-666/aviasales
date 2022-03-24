import axios from "axios"

const ticketsLoaded=()=>{
    return dispatch =>{
        dispatch(loading())
    }
    // axios.get
    // return{
    //     type:'FETCH_TICKETS_REQUEST',
    //     payload:ticketsArr
    // }
}

const searchId=(searchId)=>{
    return{
        type:'searchId',
        payload:searchId
    }
}

const filterAll = ()=>{
    return{
        type:'all'
    }
}
const filterWithout = ()=>{
    return{
        type:'without'
    }
}

const filterWithOne =()=>{
    return{
        type:'withOne'
    }
}

const filterWithTwo=()=>{
    return{
        type:'withTwo'
    }
}
const filterWithThree=()=>{
    return{
        type:'withThree'
    }
}

const changeFilterTab=(filter)=>{
    return{
        type:'changeFilter',
        payload:filter
    }
}

const loading=()=>{
    return{
        type:'LOADING'
    }
}

export {ticketsLoaded,searchId,filterAll,filterWithout,filterWithOne,filterWithTwo,filterWithThree, changeFilterTab,loading}