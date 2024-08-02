import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import EditCardFc from '../..';

jest.mock('@apollo/client', () => ({
    useMutation: () => [jest.fn()],
    gql: jest.fn(),
}));

describe("EditCard", () => {

    it("A página de edição está renderizando", () => {
        render(
            <MemoryRouter>
                <EditCardFc />
            </MemoryRouter>
        );

        expect(screen.getByText('Formulário de edição')).toBeInTheDocument();

        expect(screen.getByLabelText(/Nome/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Telefone/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Profissão/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Salário/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Data de Nascimento/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Habilidades/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Filiado/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Digite o resumo do colaborador/i)).toBeInTheDocument();
    });

    it("Deve permitir preencher e submeter o formulário", async () => {
        render(
            <MemoryRouter>
                <EditCardFc />
            </MemoryRouter>
        );
        fireEvent.change(screen.getByLabelText(/Nome/i), { target: { value: 'Teste Nome' } });
        fireEvent.change(screen.getByLabelText(/Telefone/i), { target: { value: '1234567890' } });
        fireEvent.change(screen.getByLabelText(/Profissão/i), { target: { value: 'Desenvolvedor' } });
        fireEvent.change(screen.getByLabelText(/Salário/i), { target: { value: '1000' } });
        fireEvent.change(screen.getByLabelText(/Data de Nascimento/i), { target: { value: '2000-01-01' } });
        fireEvent.change(screen.getByLabelText(/Habilidades/i), { target: { value: 'React' } });
        fireEvent.change(screen.getByLabelText(/Filiado/i), { target: { value: '1' } });
        fireEvent.change(screen.getByLabelText(/Digite o resumo do colaborador/i), { target: { value: 'Resumo do colaborador' } });

        fireEvent.click(screen.getByText('Enviar'));
    });
});
