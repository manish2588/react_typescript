type ButtonProps={
    handleClick:()=>void;
    handleClick2:(event:React.MouseEvent<HTMLButtonElement>)=>void
}

function EventProps({handleClick,handleClick2}:ButtonProps) {
  return (
    <div>EventProps
        <br/>
        <button onClick={handleClick2}>Event type</button>
        <button onClick={handleClick}>Alert Message</button>
    </div>
  )
}

export default EventProps;