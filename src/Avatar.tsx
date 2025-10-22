
export default function Avatar({ ...simpson }) {
    return (
        <div>
            <img src={simpson.image} />
            <span>{simpson.firstName} {simpson.lastName}</span>
        </div>
    )
}