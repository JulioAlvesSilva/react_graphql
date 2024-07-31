import styles from './Form.module.scss';
import dados from './dados.json';

export default function FormAdd() {
    return (
        <section className={styles.formMain}>
            <h2 className='text-center fw-bold'>Formulário de adição</h2>
            <form action="">
                {dados?.map(item => (
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">{item.nome}</label>
                        <input type={item.tipo} class="form-control" id="exampleFormControlInput1" placeholder={item.PlaceHolder} required={item.required} maxLength={item.maxWidth} minLength={item.minWidth} />
                    </div>
                ))}
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Filiado</label>
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Selecione</option>
                        <option value="1">Sim</option>
                        <option value="2">Não</option>
                    </select>
                </div>
                <div></div>
                <div class="mb-3" style={{ width: "90%" }}>
                    <label for="exampleFormControlTextarea1" class="form-label">Digite o resumo do colaborador</label>
                    <textarea class="form-control" style={{ height: "200px" }} id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </form>
        </section>
    )
}