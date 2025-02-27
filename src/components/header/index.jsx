import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
export default function HeaderMain() {
    return (
        <section className={styles.headerCt}>
            <nav className={`navbar navbar-expand-lg navbar-light bg-dark p-4 ${styles.header}`}>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">

                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <Link className="nav-link text-light" to="/">Pagina principal <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle text-light" to="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Ordenar por
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" to="">Action</Link></li>
                                <li><Link className="dropdown-item" to="">Another action</Link></li>
                                <li><Link className="dropdown-item" to="">Something else here</Link></li>
                            </ul>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Pesquise aqui" aria-label="Search" />
                        <button className="btn btn-light my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </section>
    )
}