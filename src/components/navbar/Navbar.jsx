import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";

const NavBar = () => {
    return (
        <header className={styles.main_container}>
            <div style={{ display: 'flex', gap: '10%', zIndex: 1 }}>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? `${styles.nav_links} ${styles.active}` : styles.nav_links
                    }
                    to="/"
                >
                    SDK MAP
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? `${styles.nav_links} ${styles.active}` : styles.nav_links
                    }
                    to="/heat_map"
                >
                    HEAT MAP
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? `${styles.nav_links} ${styles.active}` : styles.nav_links
                    }
                    to="/population_map"
                >
                    Population Map
                </NavLink>
            </div>

            <div>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? `${styles.nav_links} ${styles.active}` : styles.nav_links
                    }
                    to="/about_projects"
                >
                    About the Projects
                </NavLink>
            </div>

        </header>
    );
};

export default NavBar;
