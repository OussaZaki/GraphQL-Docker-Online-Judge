import { IOUtil } from "./fileWriter";
import * as Spawn from "child_process";

export class Judge {

    private ioUtil = new IOUtil();
    private output = "";
    constructor() {
    }

    public runCode(problemName: string, code: string) {
        this.ioUtil.writeFile(`./tmp/${problemName}.py`, code).then(fullPath => {
            const python = Spawn.spawn("python3", [fullPath]);
            this.ioUtil.readFile(`./tmp/data.in`).then(data => {
                console.log(data);
                python.stdin.write(data);
                python.stdin.end();
            });

            python.stdout.on("data", (data) => {
                this.output = data.toString();
                this.ioUtil.readFile(`./tmp/data.out`).then(data => {
                    if (data === this.output) {
                        console.log("AC");
                    }
                });
            });
        });
    }
}