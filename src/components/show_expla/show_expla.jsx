import styles from "./show_expla.module.css"

import imgTest from '../show_expla/test2.jpg'
import proje1 from "../show_expla/proje1.bmp"
import proje2 from "../show_expla/proje2.bmp"
import proje3 from "../show_expla/proje3.bmp"


import ExplanationCard from "../explanation_card/explanation_card"

const Show_expla = () => {

    const text_proje1 = "ESRI's SDK APIs provide a powerful platform for geospatial applications, offering dynamic capabilities like route analysis, diverse basemaps, and location discovery features. These tools allow users to explore and interact with real-time data in an intuitive manner. With ESRI’s extensive resources, developers can create applications that not only display geographic information but also enable route planning, spatial analysis, and customized visualizations. The ability to integrate various map layers and services makes the ESRI SDK a versatile tool for building dynamic, responsive geospatial applications."

    const text_proje2 = "Using Folium to create dynamic maps is an excellent choice for visualizing real-time air quality data. As users move across the map, they can instantly see how air quality fluctuates in different locations, providing valuable insights into environmental conditions. This dynamic nature allows for more interactive and user-specific exploration of air quality patterns, making it easier to assess potential health risks and take action accordingly. By leveraging Folium’s flexibility, we can provide users with a live experience, enhancing their understanding of air pollution and its impact on different regions."

    const text_proje3 = "Dynamic maps made with Folium offer a level of interactivity and responsiveness that static maps, like those created with QGIS, cannot match. While QGIS excels at precise, detailed visualizations for in-depth analysis, Folium’s dynamic capabilities allow users to explore maps in real-time, zooming in and out, or adjusting parameters to see data change instantaneously. This makes dynamic maps particularly useful for visualizing shifting patterns, such as population density, over large geographic areas, offering a more engaging and informative experience compared to static representations."

    const navi1 = "/"
    const navi2 = "/heat_map"
    const navi3 = "/population_map"


    return (
        <div className={styles.main_container}

        >
            <div className={styles.cards_container}>
                <ExplanationCard image={proje1} text={text_proje1} link={navi1} />
                <ExplanationCard image={proje2} text={text_proje2} link={navi2} />
                <ExplanationCard image={proje3} text={text_proje3} link={navi3} />
            </div>
        </div>
    )
}

export default Show_expla


