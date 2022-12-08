import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";

import { MainContent } from "./MainContent";

describe("teste", () => {
  it("[CT01] - Validar se uma função está sendo disparada ao clicar no botão “Buscar”.", () => {
    const myMock = jest.fn();

    render(<MainContent />);

    const buscar = screen.getByText("Buscar");
    expect(buscar).toBeInTheDocument();

    userEvent.click(buscar);

    setTimeout(() => {
      expect(myMock).toHaveBeenCalledTimes(1);
    }, 1000);
  });

  it("[CT02] - Validar se ao pesquisar um usuário válido, aparece as informações de usuário e repositórios públicos dele no sistema.", () => {
    const payLoad = {
      name: "Válid user",
      id: 1,
    };
    render(<MainContent />);
    const buscar = screen.getByText("Buscar");
    expect(buscar).toBeInTheDocument();

    const input = screen.getByTestId("input-search");
    expect(input).toBeInTheDocument();
    
    userEvent.paste(payLoad.name);
    userEvent.click(buscar);

    setTimeout(() => {
      expect(payLoad).toHaveBeenCalledTimes(1);
    }, 1000);
  });

  it("[CT03] - Validar se o sistema mostra uma mensagem de erro ao pesquisar um usuário inválido.", () => {
    render(<MainContent />);

    const buscar = screen.getByText("Buscar");
    expect(buscar).toBeInTheDocument();

    const input = screen.getByTestId("input-search");
    expect(input).toBeInTheDocument();

    userEvent.paste("jshjfdsgjkghfgjdfhgjd");

    userEvent.click(buscar);

    setTimeout(() => {
      expect(
        "Usuário inválido! Por favor, tente novamente com outro usuário."
      ).toBeInTheDocument();
    }, 1000);
  });

  it("[CT04] - Validar se o sistema  mostra uma mensagem de erro ao clicar no botão “Buscar” sem nada escrito no campo de input.", () => {
    render(<MainContent />);

    const buscar = screen.getByText("Buscar");
    expect(buscar).toBeInTheDocument();

    userEvent.click(buscar);

    setTimeout(() => {
      expect(
        "Usuário inválido! Por favor, tente novamente com outro usuário."
      ).toBeInTheDocument();
    }, 1000);
  });
});
