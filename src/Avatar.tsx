export interface AvatarProps {
    image: string
    firstName: string
    lastName: string
}

export default function Avatar(props: { avatar: AvatarProps }) {
    const { firstName, image, lastName } = props.avatar
    return (
        <div>
            <img src={image} />
            <span>{firstName} {lastName}</span>
        </div>
    )
}