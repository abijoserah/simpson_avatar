
import './App.css'
import Avatar, { type AvatarProps } from './Avatar'

function App() {

  const Simpsons: AvatarProps[] = [{
    image: "https://www.stickees.com/files/cartoon/the-simpsons/2239-bart-simpson-.png",
    firstName: "Fart",
    lastName: "Simpson"
  },
  {
    image: "https://www.stickees.com/files/cartoon/looney-tunes/2067-tweety-bird-sticker.png",
    firstName: "Tweety",
    lastName: "Bird"
  }
  ]
  return (
    <>
      {Simpsons.map(simpson => <Avatar avatar={simpson} />)}
    </>
  )
}



export default App
