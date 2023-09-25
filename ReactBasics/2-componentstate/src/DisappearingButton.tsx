
interface IDisappear {
    value:number
}


const DisappearingButton = (props: IDisappear) => {
    return(
        <button> { props.value }</button>
    )
}

export default DisappearingButton;