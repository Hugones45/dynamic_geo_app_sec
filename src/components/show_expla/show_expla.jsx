import styles from "./show_expla.module.css"

import imgTest from '../show_expla/test2.jpg'
import proje1 from "../show_expla/proje1.bmp"
import proje2 from "../show_expla/proje2.bmp"
import proje3 from "../show_expla/proje3.bmp"


import ExplanationCard from "../explanation_card/explanation_card"

const Show_expla = () => {

    const text_proje1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget augue volutpat, vestibulum ligula fringilla, vehicula mi. Mauris et aliquet erat. Proin sagittis volutpat ipsum vitae placerat. Proin ullamcorper est hendrerit, tristique velit eget, varius elit. Etiam blandit mi et quam posuere, quis malesuada turpis ultrices. Etiam eu fringilla felis, fermentum semper nisl. Sed finibus ornare orci. Vestibulum laoreet porttitor tellus.Cras at pellentesque nunc. Phasellus luctus dolor vitae elementum venenatis. Mauris sodales libero sed feugiat dictum. Etiam eget tempus nibh, quis malesuada est. Mauris vestibulum vel lacus et sagittis. Vestibulum ultrices efficitur dui non dapibus. Sed ut mollis mauris. "

    const navi1 = "/"
    const navi2 = "/heat_map"
    const navi3 = "/population_map"


    return (
        <div className={styles.main_container}

        >
            <div className={styles.cards_container}>
                <ExplanationCard image={proje1} text={text_proje1} link={navi1} />
                <ExplanationCard image={proje2} text={text_proje1} link={navi2} />
                <ExplanationCard image={proje3} text={text_proje1} link={navi3} />
            </div>
        </div>
    )
}

export default Show_expla


