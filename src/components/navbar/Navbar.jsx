import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";
import { useState } from "react";
import newHam from "../../assets/menu.svg"
import close from "../../assets/close.svg"

const NavBar = () => {

    const [active, setActive] = useState("")
    const [toggle, setToggle] = useState(false)

    return (
        <header className={styles.main_container}>
            <div className={styles.main_options}>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? `${styles.nav_links} ${styles.active}` : styles.nav_links
                    }
                    to="/"
                >
                    ESRI SDK MAP
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? `${styles.nav_links} ${styles.active}` : styles.nav_links
                    }
                    to="/heat_map"
                >
                    AIR QUALITY
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? `${styles.nav_links} ${styles.active}` : styles.nav_links
                    }
                    to="/population_map"
                >
                    POP DENSETY MAP
                </NavLink>
            </div>

            <div className={styles.about_proje}>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? `${styles.nav_links} ${styles.active}` : styles.nav_links
                    }
                    to="/about_projects"
                >
                    ABOUT THE PROJECTS
                </NavLink>
            </div>

            <div className={styles.hidden}>

                <div className={styles.phrase_and_hamburguer}>
                    <div className={styles.secret__title}>Dynamic Maps</div>


                    <img
                        src={!toggle ? close : newHam}
                        className={styles.img_class}
                        onClick={() => setToggle(!toggle)}
                    />

                </div>

                {!toggle && <div className={styles.nav_container_shrik}>

                    <div className={styles.nav_shirnk_items} >
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? `${styles.nav_links} ${styles.active}` : styles.nav_links
                            }
                            to="/"
                            onClick={() => setToggle(!toggle)}
                        >
                            ESRI SDK MAP
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? `${styles.nav_links} ${styles.active}` : styles.nav_links
                            }
                            to="/heat_map"
                            onClick={() => setToggle(!toggle)}
                        >
                            AIR QUALITY
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? `${styles.nav_links} ${styles.active}` : styles.nav_links
                            }
                            to="/population_map"
                            onClick={() => setToggle(!toggle)}
                        >
                            POP DENSETY MAP
                        </NavLink>

                        <NavLink
                            className={({ isActive }) =>
                                isActive ? `${styles.nav_links} ${styles.active}` : styles.nav_links
                            }
                            to="/about_projects"
                            onClick={() => setToggle(!toggle)}
                        >
                            ABOUT THE PROJECTS
                        </NavLink>
                    </div>

                </div>}
            </div>

        </header>
    );
};

export default NavBar;
