import { isCancel, log, text } from "@clack/prompts";
import { taskManager } from "../manager/tasks.js";
import { mainMenu } from "./main.js";

export async function createTaskMenu() {
    let name; 

    do {
      name = await text({
        message: "Digite o nome da tarefa",
      });
      if (taskManager.tasks.has(name)) {
        log.error("Já existe uma tarefa com esse nome!");
      }
    } while (taskManager.tasks.has(name));

    if(isCancel(name)){
        mainMenu();
        return;
    }

    const task = {
        name, 
        status: "Em andamento", 
        createdAt: new Date().toISOString()
    }
    taskManager.create(task);
    log.success("Tareda criada com sucesso!"); 
    setTimeout(()=> mainMenu, 1000)
}