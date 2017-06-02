import * as fs from "fs";
import * as Promise from "bluebird";

export class IOUtil {

  constructor() {
  }

  public writeFile(path: string, content: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      fs.writeFile(path, content, err => {
        if (err) {
          reject(err);
        } else {
          resolve(path);
        }
      });
    });
  }

  public readFile(path: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      fs.readFile(path, "utf8", (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }

  public listFiles(path): void {
    fs.readdir(".", (err, files) => {
      files.forEach(file => {
        console.log(file);
      });
    });
  }
}
