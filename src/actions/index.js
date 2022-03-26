import axios from "axios"
import Aviasalesapi from "../api"
const apiService = new Aviasalesapi()

const ticketsLoaded=()=>{
    return dispatch =>{
        dispatch(loading())
        // apiService.getResourse()
         axios.get('https://front-test.beta.aviasales.ru/search')
            .then (res=>{
                const searchId=res.data.searchId
                console.log(res.data.searchId);
                // const searchId=res.data.searchId
                let iterrateNumber=10
                let tickets=[]
                const getTickets=(requireId)=>{
                    axios.get(`https://front-test.beta.aviasales.ru/tickets?searchId=${requireId}`)
                    .then(res=>{
                        console.log(res);
                        if (res.status===200){ 
                            if (res.data.stop===false){   
                                console.log(res);
                                
                                tickets.push(...res.data.tickets)
                                console.log(tickets);
                                getTickets(searchId)
                            } if (res.data.stop===true) {
                                tickets.push(...res.data.tickets)
                                // console.log(searchId);
                                dispatch(addTickets(tickets))
                            }}
                        if(res.status===500){
                            if(iterrateNumber>0)
                            console.log(res);
                            iterrateNumber-=1
                            getTickets(searchId)
                           }
                        }
                    )
                    .catch(err=> {
                        if (err.response.status){
                            getTickets(searchId)
                        }
                         dispatch(addFailure(err.message));
                      })}
                      getTickets(searchId)
            })
    }
   
    // return{
    //     type:'FETCH_TICKETS_REQUEST',
    //     payload:ticketsArr
    // }
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

const loading=()=>{
    return{
        type:'LOADING'
    }
}

export {ticketsLoaded,searchId,filterAll,filterWithout,filterWithOne,filterWithTwo,filterWithThree, changeFilterTab,loading,addFailure,addTickets}