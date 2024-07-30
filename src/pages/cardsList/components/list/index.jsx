import { Link } from "react-router-dom";
import dados from './dados.json';
import { useState } from "react";

export default function List() {
    const [ativo, setAtivo] = useState("");

    return (
        <div className="list-group">
            {dados.map(item=> (
                <Link to="#" 
                className={`list-group-item list-group-item-action flex-column align-items-start ${ativo === item.name? "active" : ""}`}
                key={item.name}
                onClick={()=> setAtivo(item.name)}
                >
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">{item.name}</h5>
                    <small>3 days ago</small>
                </div>
                <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                <small>Donec id elit non mi porta.</small>
            </Link>
            ))}
        </div>
    )
}