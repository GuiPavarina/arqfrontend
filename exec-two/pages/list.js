export default function List(props) {
    return (
        <ul>
            {props.catFacts.map((test) => (
                <li key={test._id}>{test.text}</li>
            ))}
        </ul>
    )
}
