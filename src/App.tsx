
import './App.css'
import Avatar from './Avatar'

function App() {

  const Simpsons = [{
    image: "https://www.stickees.com/files/cartoon/the-simpsons/2239-bart-simpson-.png",
    firstName: "Bart",
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
      {Simpsons.map((eachSim) => <Avatar {...eachSim} />)}
    </>
  )
}



export default App
