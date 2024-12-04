import styles from "./pop_dens.module.css";
import pop_dens from "../../../public/maps/population/pop_den.png";
import { motion } from "framer-motion";
import { useState } from "react";
import { TbMapRoute } from "react-icons/tb";

const PopDensety = () => {
    const [flip, setFlip] = useState(false);
    const [isLoading, setIsLoading] = useState(true); // State for loading
    const isDevelopment = import.meta.env.MODE === "development";

    return (
        <div
            className={styles.main_container}
            style={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
            }}
        >


            {!isLoading && <button
                onClick={() => setFlip((prevState) => !prevState)}
                className={styles.the_button}
            >
                Flip Card
            </button>}




            <div
                className="App"
                style={{ position: "relative", top: "50px", zIndex: "1" }}
            >
                <motion.div
                    className="card-container"
                    style={{
                        perspective: "1500px",
                        width: "90vw",
                        height: "80vh",
                    }}
                >
                    <motion.div
                        style={{
                            width: "100%",
                            height: "100%",
                            transformStyle: "preserve-3d",
                        }}
                        animate={{ rotateY: flip ? 180 : 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <motion.div
                            className="front"
                            style={{
                                position: "absolute",
                                backfaceVisibility: "hidden",
                                width: "100%",
                                height: "100%",
                            }}
                        >
                            {isLoading && (
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        height: "100%",
                                        backgroundColor: "#f5f5f5",
                                        position: "absolute",
                                        zIndex: 10,
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
                            {!flip && <p style={{
                                position: 'absolute',
                                top: '90%',
                                left: '5%',
                                fontWeight: 'bold',
                                fontSize: '19px'
                            }}>MADE WITH FOLIUM</p>}

                            <iframe

                                src={isDevelopment ? "public/maps/population/index.html" : "maps/population/index.html"}

                                title="Map"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    border: "none",
                                }}
                                onLoad={() => setIsLoading(false)}
                            ></iframe>
                        </motion.div>

                        <motion.div
                            className="back"
                            style={{
                                position: "absolute",
                                backfaceVisibility: "hidden",
                                width: "100%",
                                height: "100%",
                                transform: "rotateY(180deg)",
                            }}
                        >
                            <img
                                src={pop_dens}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "contain",
                                }}
                                alt="Population Density"
                            />
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default PopDensety;
