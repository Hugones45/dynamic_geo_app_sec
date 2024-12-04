import styles from "./heat_map.module.css"


const Heat_map = () => {

    return (
        <div className={styles.main_container}>
            <iframe
                src={"maps/heat_map_air/index.html"}

                title="Map"
                style={{
                    width: "100%",
                    height: "100%",
                    border: "none",
                }}
            ></iframe>
        </div>
    )
}

export default Heat_map