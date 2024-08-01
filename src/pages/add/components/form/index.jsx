import { useState } from 'react';
import styles from './Form.module.scss';
import dados from './dados.json';
import { useMutation } from '@apollo/client';
import { CREATE_CLIENTE, GET_CLIENTES } from '../../../../services/query';

export default function FormAdd() {

    const [createCliente] = useMutation(CREATE_CLIENTE, {
        refetchQueries: [{ query: GET_CLIENTES }],
        onCompleted: () => {
            alert("Colaborador cadastrado com sucesso");
        },
        onError: (error) => {
            console.error("Falha ao cadastrar o colaborador", error)
            alert("Erro ao cadastrar o colaborador")
        }
    });

    const [formulario, setFormulario] = useState({
        nome: '',
        telefone: '',
        profissao: '',
        salario: '',
        dataNascimento: '',
        habilidades: '',
        filiado: '',
        resumo: ''
    });

    const capChange = (id, value) => {
        setFormulario(prev => ({
            ...prev,
            [id]: value
        }))
    }

    async function submit(e) {
        e.preventDefault();
        await submitDB();
        setFormulario({
            nome: '',
            telefone: '',
            profissao: '',
            salario: '',
            dataNascimento: '',
            habilidades: '',
            filiado: '',
            resumo: ''
        });
    }

    async function submitDB() {
        try {
            await createCliente({
                variables: {
                    nome: formulario.nome,
                    telefone: formulario.telefone,
                    profissao: formulario.profissao,
                    salario: parseFloat(formulario.salario),
                    dataNascimento: formulario.dataNascimento,
                    habilidades: formulario.habilidades,
                    filiado: formulario.filiado === "1",
                    resumo: formulario.resumo
                }
            });
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <section className={styles.formMain}>
            <h2 className='text-center fw-bold'>Formulário de adição</h2>
            <form onSubmit={submit}>
                <ul>
                    {dados?.map(item => (
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">{item.nome}</label>
                            <input
                                type={item.tipo}
                                name={item.id}
                                class="form-control"
                                id="exampleFormControlInput1"
                                placeholder={item.PlaceHolder}
                                required={item.required}
                                maxLength={item.maxWidth}
                                minLength={item.minWidth}
                                onChange={(e) => capChange(item.id, e.target.value)}
                                value={formulario[item.id]}
                            />
                        </div>
                    ))}
                    <div class="mb-3">
                        <label htmlFor='filiado' for="exampleFormControlInput1" class="form-label">Filiado</label>
                        <select
                            id='filiado'
                            class="form-select"
                            aria-label="Default select example"
                            value={formulario.filiado}
                            defaultValue=""
                            onChange={(e) => capChange('filiado', e.target.value)}
                        >
                            <option selected value="">Selecione</option>
                            <option value="1">Sim</option>
                            <option value="2">Não</option>
                        </select>
                    </div>
                    <div></div>
                    <div class="mb-3" style={{ width: "90%" }}>
                        <label for="exampleFormControlTextarea1" class="form-label">Digite o resumo do colaborador</label>
                        <textarea
                            class="form-control"
                            style={{ height: "200px" }}
                            id="exampleFormControlTextarea1"
                            rows="3"
                            onChange={(e) => capChange('resumo', e.target.value)}
                            value={formulario.resumo}
                        ></textarea>
                    </div>
                </ul>
                <button type="submit" class="btn btn-success">Enviar</button>
            </form>
        </section>
    )
}