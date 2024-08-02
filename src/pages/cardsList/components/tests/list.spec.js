import { render } from "@testing-library/react";
import List from "../list";
import { MockedProvider } from "@apollo/client/testing";

describe("list", () => {
    it("Está renderizando corretamente", () => {
        render(
            <MockedProvider>
                <List />
            </MockedProvider>

        )
    })
})