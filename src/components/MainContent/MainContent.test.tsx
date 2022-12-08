import React from "react";
import { render, screen } from "@testing-library/react";
// import userEvent from '@testing-library/user-event'
import "@testing-library/jest-dom/extend-expect";

import { MainContent } from "./MainContent";

/*
[CT01] - Validar se uma função está sendo disparada ao clicar no botão “Buscar”. 
[CT02] - Validar se ao pesquisar um usuário válido, aparece as informações de usuário e repositórios públicos dele no sistema. 
[CT03] - Validar se o sistema mostra uma mensagem de erro ao pesquisar um usuário inválido.
[CT04] - Validar se o sistema  mostra uma mensagem de erro ao clicar no botão “Buscar” sem nada escrito no campo de input. 
*/

describe("teste", () => {
  it("should function has called when Buscar button is clicked", () => {
    render(<MainContent />);

    const buscar = screen.getByText("Buscar");
    expect(buscar).toBeInTheDocument();

    // userEvent.click
  });
});
