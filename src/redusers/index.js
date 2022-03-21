const initialState={
    searchID:'',
    tickets:[],
    filterAll:false,
    without:false,
    withOne:false,
    withTwo:false,
    withThree:false,

}

const reduser = (state=initialState, action)=>{
    switch (action.type) {
        case 'loaded':
            return{
                tickets:action.payload
            }
            default:
                return state
                
            
    }
}