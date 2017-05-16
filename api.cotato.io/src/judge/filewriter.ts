import * as fs from "fs";
import * as Promise from "bluebird";
import { Observable } from "rxjs/Observable";

export function writeFile(path, content): Promise<string> {
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

export function listFiles(path) {
  fs.readdir(".", (err, files) => {
    files.forEach(file => {
      console.log(file);
    });
  });
}