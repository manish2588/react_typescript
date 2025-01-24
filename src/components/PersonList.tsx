
type PersonList={
    list:{
        name:string,
        class:string
    }[]
}
function PersonList({list}:PersonList) {
  return (
    <div>
        {
            list.map((item,index)=><div key={index}>
             Name:{item.name}
             <br/>
             Class : {item.class}
            </div>)
        }
    </div>
  )
}

export default PersonList;