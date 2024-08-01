import styles from './Main.module.scss';
import { SvgLogo } from "../../svg/svgs";
import { Link } from 'react-router-dom';

export default function MainProject() {
    return (
        <section className={styles.main}>
            <div className={styles.main_ctn}>
                <div className={styles.main_ctn_logo}>
                    <SvgLogo />
                    <h1>GraphRH</h1>
                </div>
                <div className={styles.main_ctn_btns}>
                    <Link to="/list">
                        Lista de colaboradores
                    </Link>
                    <Link to="/add">
                        Adicionar colaborador
                    </Link>
                </div>
            </div>
        </section>
    )
}