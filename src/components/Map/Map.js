
function Map (props) {
    let names = props.name

    return (
        <>
            <ul>{
                names.map((name) => <li>{name}</li>)}
                <li>{props.year}</li>
            </ul>
        </>
    )
}
export default Map