const TodoNote = (props) => {
    return(
    <div key={props.value.id} style={{backgroundColor: 'purple', width: "30%", height: "100px", margin: 10, display: 'flex', flexDirection: 'row'}}>
        <input onClick={() => props.toggleCompletion(props.value.id)} checked={props.value.complete} type='checkbox'></input>
        <div key = {props.value.id}>{props.value.text} </div>
        <label>
          <input onClick={() => props.remove(props.value, props.index)} type="checkbox" checked={false}  />
          {props.value.remove === true && <div style={{margin: -15, color:'red', fontSize: 10}}> X</div>} 
        </label>
      </div>
    )
}


export default TodoNote;