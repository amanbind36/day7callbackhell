function calculate(a,b){

    function operation(a,b,callback){
        callback(a,b)
    }
    function add(a,b){
        console.log(a+b)
    }
    function multiply(a,b){
        console.log(a*b)
    }
operation(a,b,add)
operation(a,b,multiply)

}





calculate(3,4)