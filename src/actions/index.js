// import Aviasalesapi from "../api"
import API from '../api'
// const apiService = new Aviasalesapi()

const ticketsLoaded=()=>{
     return dispatch =>{
        dispatch(loading(true))
        // apiService.getResourse()
          API.get('search')
            .then (res=>{
                const searchId=res.data.searchId
                let iterrateNumber=10
                let tickets=[]
                const getTickets=(requireId)=>{
                    API.get(`tickets?searchId=${requireId}`)
                    .then(res=>{
                        // console.log(res);
                        if (res.status===200){ 
                            if (res.data.stop===false){   
                                tickets.push(...res.data.tickets)
                                dispatch(addTickets(tickets))
                                getTickets(searchId)
                            } if (res.data.stop===true) {
                                tickets.push(...res.data.tickets)
                                console.log(tickets);
                                dispatch(loading(false))
                                dispatch(addTickets(tickets))
                            }}
                        }
                    )
                    .catch(err=> {
                        if (err.response.status===500){
                            if (iterrateNumber>0){
                                iterrateNumber-=1
                                getTickets(searchId)
                            }else {
                                dispatch(addFailure(err.message))
                                console.log(err.response.status)
                            }
                        if (err.response.status===404){
                            dispatch(addFailure(err.message))
                        }
                            }
                      })}
                      getTickets(searchId)
            })
    }
}

const addFailure=(err)=>{
    return{
        type:'FETCH_TICKETS_FAILURE',
        payload:{err}

    }
}

const addTickets=(ticketsArr)=>{
    return{
        type:'FETCH_TICKETS_SUCCESS',
        payload:ticketsArr
    }
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

const loading=(load)=>{
    return{
        type:'LOADING',
        payload:load
    }
}

const showMore=()=>{
    return{
        type:'SHOW_MORE'
    }
}

export {ticketsLoaded,searchId,filterAll,filterWithout,filterWithOne,filterWithTwo,filterWithThree, changeFilterTab,loading,addFailure,addTickets,showMore}