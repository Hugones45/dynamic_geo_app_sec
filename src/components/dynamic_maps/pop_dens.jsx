import styles from "./pop_dens.module.css"

const PopDensety = () => {
    return (
        <div className={styles.main_container}>
            <iframe
                src="/public/maps/population/index.html"
                title="Map"
                style={{
                    width: "80%",
                    height: "80%",
                    border: "none",
                }}
            ></iframe>
        </div>
    )
}

export default PopDensety