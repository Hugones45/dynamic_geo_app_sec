import { useNavigate } from 'react-router-dom';
import styles from './explanation_card.module.css';

const ExplanationCard = ({ image, text, link }) => {

    const navigate = useNavigate()

    return (
        <div className={styles.main_container} style={{ zIndex: 10 }}>

            <div className={styles.adjust_sizes_container}>

                <img
                    className={styles.img_container}
                    src={image}
                    alt="Map"
                    onClick={() => navigate(link)}
                />

                <div style={{
                    background: 'lightblue',
                    padding: '0 20px',
                    height: 'auto',
                    borderRadius: '5px'
                }}>
                    <p>{text}</p>
                </div>
            </div>


        </div>
    );
};

export default ExplanationCard;
