const CAKE_ORDERED = 'CAKE_ORDERED'  //type property is usually defined as string constants

function orderCake(){
    return{
        type : CAKE_ORDERED, //action // something that describes what happened in your application
        quantity : 1,   //state
}
}

//Action creator is a function that returns an object