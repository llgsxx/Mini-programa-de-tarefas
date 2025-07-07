import {existsSync, readFileSync, writeFileSync} from "node:fs";
import path from "node:path";
import chalk from "chalk";
import { create } from "node:domain";

const filepath = path.join("./tasks.json");

if (!existsSync(filepath)){
    writeFileSync(filepath, JSON.stringify([]), "utf-8");
}
const data = readFileSync(filepath, {encoding: "utf-8"});
const parsed = JSON.parse(data);

const tasks = new Map(parsed.map(task => [task.name, task]));

export const taskManager = {
    tasks,
    save(){
        const data = Array.from(tasks.values())
        writeFileSync(filepath, JSON.stringify(data, null, 2), "utf-8")
    }, 
    create(task){
        tasks.set(task.name, task);
        this.save()
    },
    toArray(){
        return Array.from(tasks.values());
    },

    colorStatus(status) {
        switch(status) {
            case "Em andamento":
                return chalk.bgHex("#e3923b")(` ${status} `);
            case "Concluida":
                return chalk.bgHex("#44b47e")(` ${status} `);
            case "Cancelada":
                return chalk.bgHex("#e35c3b")(` ${status} `); 
            default:
                return chalk.bgWhite(`${status}`);
        }
    }
    
}