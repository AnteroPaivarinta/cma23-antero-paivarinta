import './TodoNote.css';


const TodoNote = (props) => {
    return(
    <div className='TodoNote' key={props.value.id}>
            <div style={{display: 'flex', flexDirection: 'row', alignSelf: 'flex-end', margin: 10}}>
                <input onClick={() => props.remove(props.value, props.index)} type="checkbox" checked={false}  />
                    {props.value.remove === true && <div style={{margin: -15, color:'red', fontSize: 10}}> X</div>} 
            </div>
           
            <div style={{display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'center'}}>
                    <input className='input' onClick={() => props.toggleCompletion(props.value.id)} checked={props.value.complete} type='checkbox'></input>
                    <div key = {props.value.id}>{props.value.text} </div>
            </div>
           
           
        
      </div>
    )
}


export default TodoNote;