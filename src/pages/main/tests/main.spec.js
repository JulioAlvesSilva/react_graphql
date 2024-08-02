import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import MainProject from '..';
import List from '../../cardsList/components/list';
import AddItem from '../../add';

jest.mock('@apollo/client', () => ({
    useMutation: () => [jest.fn()],
    useQuery: () => ({ data: {}, loading: false, error: null }),
    gql: jest.fn(),
}));

describe("main", () => {

    it("Está renderizando a pagina main", () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <MainProject />
            </MemoryRouter>
        );

        expect(screen.getByText("Lista de colaboradores")).toBeInTheDocument();
        expect(screen.getByText("Adicionar colaborador")).toBeInTheDocument();
    });

    it("Ao clicar chamar o link /list", () => {
         render(
            <MemoryRouter initialEntries={['/']}>
                <Routes>
                    <Route path="/" element={<MainProject />} />
                    <Route path="/list" element={<List/>} />
                </Routes>
            </MemoryRouter>
        );
        const btnLista = screen.getByText("Lista de colaboradores");

        fireEvent.click(btnLista);
    });
    it("Ao clicar chamar o link /add", () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <Routes>
                    <Route path="/" element={<MainProject />} />
                    <Route path="/add" element={<AddItem/>} />
                </Routes>
            </MemoryRouter>
        );

        const btnAdd = screen.getByText("Adicionar colaborador");

        fireEvent.click(btnAdd);

        expect(screen.getByText("Formulário de adição")).toBeInTheDocument();
    });
    
});
