import { isCancel, select } from "@clack/prompts";
import { createTaskMenu } from "./create.js";

export async function mainMenu() {
  const option = await select({
    mensage: "Escolha o que deseja fazer",
    options: [
      { label: "Criar nova tarefa", value: "create" },
      { label: "Listar tarefas", value: "list" },
      { label: "Sair", value: "end" },
    ],
  });

  if (isCancel(option)) return;

  switch (option) {
    case "create": {
    createTaskMenu()
      return;
    }
    case "list": {
      return;
    }
    default: {
      outro("Fim do Programa!");
    }
  }
}
