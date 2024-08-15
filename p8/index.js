function getUserData(id,callback){
let objects=[
    {id:1,name:"Aman",email:"aman36@gmail"},
    {id:2,name:"Aman Bind",email:"aman36aman@gmail"},
    {id:3,name:"Aman kumar",email:"amankumar36@gmail"},
]
    setTimeout(()=>{
        let findObj=objects.find((obj)=>{
            if(id==obj.id){
                return obj
            }
        })
        callback(findObj)
    },2000)
}

function displayUser(obj){
    console.log(obj)

}

getUserData(4,displayUser)