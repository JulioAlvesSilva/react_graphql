import { Link } from 'react-router-dom';
export default function HeaderMain() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark p-4">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                
                <Link className="navbar-brand text-light" to="#">Hidden brand</Link>
                
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <Link className="nav-link text-light" to="#">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-light" to="#">Link</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-light" to="#">Disabled</Link>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Pesquise aqui" aria-label="Search"/>
                        <button className="btn btn-light my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}