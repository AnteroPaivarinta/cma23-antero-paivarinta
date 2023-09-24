const Planets = (props) => {
    const mapping = props.planetList.map((value) => <tr> <td> {value.name} </td> <td> {value.climate} </td> </tr>)
    return(
        <table>
            <tr>
                <th>Name</th>
                <th>Planet</th>
            </tr>
            { mapping }
        </table>
    )
}

export default Planets;