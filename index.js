const CAKE_ORDERED = 'CAKE_ORDERED'  //type property is usually defined as string constants
CAKE_RETURNED = 'CAKE_RETURNED'
function orderCake(){
    return{
        type : CAKE_ORDERED, //action // something that describes what happened in your application
        quantity : 1,   //state
}
}

//Action creator is a function that returns an object


const initialState  ={
    noOfCakes : 10
}

const Reducer = (state = initialState , action)=>{
    switch (action.type){
       case CAKE_ORDERED: 
            return{
                noOfCakes : noOfCakes - 1,
            }
        case CAKE_RETURNED:
            return{
                noOfCakes : noOfCakes + 1
            }
        default: 
        return state
}
}