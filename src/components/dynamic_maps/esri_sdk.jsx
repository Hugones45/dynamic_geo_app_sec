import styles from "./esri_sdk.module.css";
import { motion } from "framer-motion";
import { TbMapRoute } from "react-icons/tb";
import { useState } from "react";

const Esri_sdk = () => {
    const [isLoading, setIsLoading] = useState(true); // State for loading
    const isDevelopment = import.meta.env.MODE === "development";

    return (
        <div className={styles.main_container} style={{ position: "relative" }}>
            {isLoading && (
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                        backgroundColor: "#f5f5f5",
                        position: "absolute",
                        zIndex: -1,
                        width: "100%",
                        top: 0,
                    }}
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                        }}
                    >
                        <TbMapRoute size={80} color="#555" />
                    </motion.div>
                    <span
                        style={{
                            position: "absolute",
                            top: "60%",
                            fontSize: "1.5rem",
                            color: "#555",
                        }}
                    >
                        Loading...
                    </span>
                </div>
            )}
            <iframe
                src={
                    isDevelopment
                        ? "public/maps/esri_javascript_sdk/index.html"
                        : "/maps/esri_javascript_sdk/index.html"
                }
                title="Map"
                style={{
                    width: "100%",
                    height: "100%",
                    border: "none",
                }}
                onLoad={() => setIsLoading(false)}
            ></iframe>
        </div>
    );
};

export default Esri_sdk;
