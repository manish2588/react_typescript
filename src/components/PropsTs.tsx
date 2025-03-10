type Student={
    name:string,
    classes:string
}

function PropsTs({name,classes}:Student) {
  return (
    <div>
        <h1>Student</h1>
        <p>
            {name}
        </p>
        <p>
            {classes}
        </p>
    </div>
  )
}

export default PropsTs