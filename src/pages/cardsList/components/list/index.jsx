import { Link } from "react-router-dom";
import dados from './dados.json';
import { useState } from "react";
import styles from './List.module.scss';
import { FiEdit3 } from "react-icons/fi";
import { MdOpenWith, MdDeleteOutline } from "react-icons/md";
export default function List() {
    const [ativo, setAtivo] = useState("");
    const [over, setOver] = useState(null)
    const dadosSegregado = dados.find(item => item.id === over)
    return (
        <div className={`list-group shadow-lg py-2 ${styles.container}`}>
            <div className={styles.titulo}>
                <h1>Quadro de funcionários</h1>
            </div>
            <div className={styles.ctn}>
                <div className={styles.ctn_left}>
                    {dados.map(item => (
                        <Link to="#"
                            className={`list-group-item list-group-item-action d-flex ${ativo === item.name ? `active ${styles.zoom}` : ""} ${styles.lista}`}
                            key={item.name}
                            onClick={() => {
                                setAtivo(item.name);
                                setOver(item.id)
                            }}
                        >
                            <img src="https://curriculo-silk-seven.vercel.app/imagens/banner/perfil.jpg" alt="foto perfil" className={styles.lista_fotoPerfil} />
                            <div className={styles.lista_textos}>
                                <div className={styles.lista_textos_1pg}>
                                    <h5>{item.name}</h5>
                                    <small>{item.profissao}</small>
                                </div>
                                <div className={styles.lista_textos_2pg}>
                                    <small><strong>Data de nascimento: </strong>{item.dataNascimento}</small>
                                    <small><strong>Data de entrada: </strong>{item.dataEntrada}</small>
                                    <div className={styles.lista_textos_2pg_icons}>
                                        <FiEdit3 />
                                        <MdOpenWith />
                                        <MdDeleteOutline data-bs-toggle="modal" data-bs-target="#exampleModal" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className={styles.ctn_rigth}>
                    <div className={styles.ctn_rigth_1ln}>
                        <img src="https://curriculo-silk-seven.vercel.app/imagens/banner/perfil.jpg" alt="foto perfil" />
                        <div className={styles.ctn_rigth_1ln_tx}>
                            <h4>{dadosSegregado.name}</h4>
                            <span>{dadosSegregado.dataNascimento}</span>
                            <span>{dadosSegregado.dataEntrada}</span>
                            <span>{dadosSegregado.profissao}</span>
                        </div>
                    </div>
                    <div className={styles.ctn_rigth_2ln}>
                        <p><strong>Habilidades: </strong>{dadosSegregado.habilidades}</p>
                        <p><strong>Resumo: </strong>{dadosSegregado.resumo}</p>
                    </div>
                </div>
            </div>
            <div class={`modal fade ${styles.popup}`} id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Deleção</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            Você realmente deseja excluir o card?
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Não</button>
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal"
                                onClick={() => alert("Ola")}
                            >Sim</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}