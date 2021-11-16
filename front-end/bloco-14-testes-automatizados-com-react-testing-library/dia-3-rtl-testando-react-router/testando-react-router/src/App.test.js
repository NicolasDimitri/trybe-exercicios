import React from "react";
import { screen } from "@testing-library/react";
import renderWithRouter from "./renderWithRouter";
import App from "./App";
import userEvent from "@testing-library/user-event";

describe("deve renderizar o componente App", () => {
  let history;
  beforeEach(() => {
    ({ history } = renderWithRouter(<App />));
  });
  it("teste", () => {
    const homeTitle = screen.getByRole("heading", {
      level: 1,
      name: "Você está na página Início",
    });
    expect(homeTitle).toBeInTheDocument();
  });
  it("deve render o componente sobre", () => {
    const aboutLink = screen.getByRole("link", { name: /sobre/i });
    expect(aboutLink).toBeInTheDocument();
    userEvent.click(aboutLink);

    const { pathname } = history.location;
    expect(pathname).toBe("/about");
    const aboutTitle = screen.getByRole("heading", {
      name: /você está na página sobre/i,
    });
    expect(aboutTitle).toBeInTheDocument();
  });
  it('deve retornar a pagina NotFound', () => {
    history.push('/paginanaoexistente')
    const notFoundTitle = screen.getByRole('heading', {name: /página não encontrada/i})
    expect(notFoundTitle).toBeInTheDocument()
  })
});
