const initialState={
    tickets:[],
    loading:true,
    all:false,
    without:false,
    withOne:false,
    withTwo:false,
    withThree:false,
    filterTab:'fastest',
    error:false,
    errorIndicator:''
}

const reduser = (state=initialState, action)=>{
    switch (action.type) {
        case 'FETCH_TICKETS_REQUEST':
            return{
                tickets:action.payload
            }
        case 'FETCH_TICKETS_SUCCESS':
            return{ 
                ...state, tickets:action.payload,loading:false,error:false
            }
        case 'FETCH_TICKETS_FAILURE':
            return{
                ...state,error:true,errorIndicator:action.payload
            }
        case 'all':
            return state.all?{...state,all:false, without:false, withOne:false,withTwo:false,withThree:false }:{
                ...state, all:true, without:true, withOne:true,withTwo:true,withThree:true}
        case 'without':
            if (state.without){
                return {...state,all:false, without:false
                }}else{
                    if (state.withOne&&state.withTwo&&state.withThree)
                    return{...state,without:true,all:true}
                    else return{...state,without:true,}
                }
  
        case 'withOne':
            if (state.withOne){
                return {...state,all:false, withOne:false
                }}else{
                    if (state.without&&state.withTwo&&state.withThree)
                    return{...state,withOne:true,all:true}
                    else return{...state,withOne:true,}
                }
        case 'withTwo':
            if (state.withTwo){
                return {...state,all:false, withTwo:false
                }}else{
                    if (state.without&&state.withOne&&state.withThree)
                    return{...state,withTwo:true,all:true}
                    else return{...state,withTwo:true,}
                }
        case 'withThree':
            if (state.withThree){
                return {...state,all:false, withThree:false
                }}else{
                    if (state.without&&state.withOne&&state.withTwo)
                    return{...state,withThree:true,all:true}
                    else return{...state,withThree:true,}
                }
        case 'changeFilter':
            return{
                ...state,
                filterTab:action.payload
            }
            default:
                return state

        case 'LOADING':
            return{
                ...state,
                loading:true
            }
    }
}
export {reduser}