import { Link } from "react-router-dom";
import { useState } from "react";
import { DELETE_CLIENTE, GET_CLIENTES } from '../../../../services/query';
import styles from './List.module.scss';
import { FiEdit3 } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { FaBirthdayCake } from "react-icons/fa";
import { MdWorkHistory } from "react-icons/md";
import { FaHelmetSafety } from "react-icons/fa6";
import { useMutation, useQuery } from "@apollo/client";
export default function List() {
    
    const { loading, error, data } = useQuery(GET_CLIENTES);

    const [deleteCliente] = useMutation(DELETE_CLIENTE, {
        refetchQueries: [{ query: GET_CLIENTES }],
        onCompleted: () => {
            alert("Cliente deletado com sucesso");
        },
        onError: (error) => {
            console.error("Erro ao deletar cliente:", error);
            alert("Erro ao deletar cliente");
        }
    });
    const [ativo, setAtivo] = useState("");
    const [over, setOver] = useState(null);
    const [deletarID, setDeletarID] = useState("");

    if (loading) return <p>Carregando...</p>;
    if (error) return <p>Erro: {error.message}</p>;

    const dadosClientes = data.getClientes;

    function formatDate(dateString) {
        const date = new Date(Number(dateString));
        const dateLocal = date.toLocaleDateString('pt-BR')
        return dateLocal
    }
    const dadosSegregado = dadosClientes?.find(item => item.id === over);

    async function deletarClienteID(id) {
        try {
            await deleteCliente({
                variables: { id }
            });
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className={`list-group shadow-lg py-2 ${styles.container}`}>
            <div className={styles.titulo}>
                <h1>Quadro de funcionários</h1>
            </div>
            <div className={styles.ctn}>
                <div className={styles.ctn_left}>
                    {dadosClientes?.map(item => (
                        <Link to="#"
                            className={`list-group-item list-group-item-action d-flex ${ativo === item.id ? `active ${styles.zoom}` : ""} ${styles.lista}`}
                            key={item.name}
                            onClick={() => {
                                setAtivo(item.id);
                                setOver(item.id)
                            }}
                        >
                            <img src="https://curriculo-silk-seven.vercel.app/imagens/banner/perfil.jpg" alt="foto perfil" className={styles.lista_fotoPerfil} />
                            <div className={styles.lista_textos}>
                                <div className={styles.lista_textos_1pg}>
                                    <h5>{item.nome}</h5>
                                    <small>{item.profissao}</small>
                                </div>
                                <div className={styles.lista_textos_2pg}>
                                    <small><strong>Data de nascimento: </strong>{formatDate(item.dataNascimento)}</small>
                                    <small><strong>Data de entrada: </strong>{formatDate(item.dataEntrada)}</small>
                                    <div className={styles.lista_textos_2pg_icons}>
                                        <FiEdit3 />
                                        <MdDeleteOutline
                                            data-bs-toggle="modal"
                                            data-bs-target="#exampleModal"
                                            onClick={() => setDeletarID(item.id)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className={styles.ctn_rigth}>
                    {dadosSegregado ?
                        <>
                            <div className={styles.ctn_rigth_1ln}>
                                <img src="https://curriculo-silk-seven.vercel.app/imagens/banner/perfil.jpg" alt="foto perfil" />
                                <div className={styles.ctn_rigth_1ln_tx}>
                                    <h4 className="d-flex align-items-center">{dadosSegregado.name}</h4>
                                    <span className="d-flex align-items-center"><FaBirthdayCake className="me-2" /> {formatDate(dadosSegregado.dataNascimento)}</span>
                                    <span className="d-flex align-items-center"><MdWorkHistory className="me-2" />{formatDate(dadosSegregado.dataEntrada)} </span>
                                    <span className="d-flex align-items-center"><FaHelmetSafety className="me-2" />{dadosSegregado.profissao}</span>
                                </div>
                            </div>
                            <div className={styles.ctn_rigth_2ln}>
                                <p><strong>Habilidades: </strong>{dadosSegregado.habilidades}</p>
                                <p><strong>Resumo: </strong>{dadosSegregado.resumo}</p>
                                <p><strong>Filiado(a): </strong>{dadosSegregado.sindicalista ? "Sim" : "Não"}</p>
                            </div>
                        </> :
                        <h3 className="text-center mt-4 fw-bold">Clique em algum card</h3>
                    }
                </div>
            </div>
            <div className={`modal fade ${styles.popup}`} id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Deleção</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Você realmente deseja excluir o card?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Não</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal"
                                onClick={() => deletarClienteID(deletarID)}
                            >Sim</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}