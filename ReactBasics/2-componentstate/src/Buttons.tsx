const Buttons = () => {
    const arr = []
    for(let i = 1; i <= 5 ; i++){
        arr.push(<button> Button {i} </button>)
    }
    
    return(
        <div>
            {arr}
        </div>
    )
}

export default Buttons;