import styles from "./pop_dens.module.css";
import pop_dens from "../../../public/maps/population/pop_den.png";
import { motion } from "framer-motion";
import { useState } from "react";

const PopDensety = () => {
    const [flip, setFlip] = useState(false); // Initialize as false for back-facing initially
    const isDevelopment = import.meta.env.MODE === 'development';

    return (
        <div className={styles.main_container}
            style={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative"
            }}>
            {/* Button outside the card container */}
            <button
                onClick={() => setFlip((prevState) => !prevState)}
                style={{
                    position: "absolute",
                    bottom: "93%", // Position the button above the map container
                    left: "50%",
                    transform: "translateX(-50%)",
                    zIndex: 10, // Make sure the button is always on top of the card
                    padding: "10px 20px", // Increase button size for easier clicking
                    fontSize: "1rem", // Adjust font size for visibility
                    backgroundColor: "#007BFF", // Button background color
                    color: "white", // Button text color
                    border: "none", // Remove button border
                    borderRadius: "5px", // Rounded corners
                    cursor: "pointer", // Pointer cursor on hover
                }}
            >
                Flip Card
            </button>

            <div className="App" style={{ position: "relative" }}>
                <motion.div
                    className="card-container"
                    style={{
                        perspective: "1500px", // Increased perspective for more dramatic effect
                        width: "90vw", // Set width to 90% of the viewport width
                        height: "80vh", // Set height to 80% of the viewport height
                    }}
                >
                    <motion.div
                        style={{
                            width: "100%",
                            height: "100%",
                            transformStyle: "preserve-3d", // Ensure children are positioned in 3D space
                        }}
                        animate={{ rotateY: flip ? 180 : 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <motion.div
                            className="front"
                            style={{
                                position: "absolute",
                                backfaceVisibility: "hidden", // Hide the front when flipped
                                width: "100%",
                                height: "100%",
                            }}
                        >
                            <iframe
                                src={isDevelopment ? "/public/maps/population/index.html" : "/maps/population/index.html"}
                                title="Map"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    border: "none",
                                }}
                            ></iframe>
                        </motion.div>

                        <motion.div
                            className="back"
                            style={{
                                position: "absolute",
                                backfaceVisibility: "hidden", // Hide the back when flipped
                                width: "100%",
                                height: "100%",
                                transform: "rotateY(180deg)", // Initially rotated 180 to show only back when flipped
                            }}
                        >
                            <img
                                src={pop_dens}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "contain", // Changed from 'cover' to 'contain' to show the whole image
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
