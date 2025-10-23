//Dans l'application de la saison 1 sur les props, 
// utilisez un état dans le composant <Avatar /> pour stocker le nombre de donuts
// consommés par chaque personnage au fil de la série.
// Dans <Avatar /> ajoutez un bouton avec un emoji donut 🍩 pour mettre à jour le state. 
// Affichez la valeur du state à côté du bouton dans <Avatar />.

import { useState } from "react"



export default function Avatar({ simpson }) {
    const [DonutEaten, setDonutEaten] = useState(0)
    function DonutNumber() {
        return (setDonutEaten(DonutEaten + 1))
    }
    return (
        <div>
            <img src={simpson.image} />
            <span>{simpson.firstName} {simpson.lastName}</span>
            <button onClick={DonutNumber}>🍩</button>
            <span>{DonutEaten}</span>
        </div>
    )
}