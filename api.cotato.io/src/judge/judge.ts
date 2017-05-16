import { writeFile } from "./fileWriter";
import * as Spawn from "child_process";

export class Judge {

    constructor() {
    }

    public runCode(problemName: string, code: string) {
        writeFile(`./tmp/${problemName}.py`, code).then(fullPath => {
            const python = Spawn.spawn("python", [fullPath]);
            let output = "";

            python.stdout.on("data", (data) => {
                console.log(data.toString());
            });
        });
    }
}