import styles from "./esri_sdk.module.css"

const Esri_sdk = () => {
    return (
        <div className={styles.main_container}>
            <iframe
                src="/public/maps/esri_javascript_sdk/index.html"
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

export default Esri_sdk