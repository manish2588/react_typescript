
type GreetProp={
    name:string;
    age:number;
    obj:{
        town:string
        country:string
    }
}
function Props({name,age,obj}:GreetProp) {
  return (
    <>
   
   
    <h1>Person address is {obj.town},{obj.country}</h1>
    <br/>
    Hello {name} Your age is {age}
    </>
  )
}

export default Props;