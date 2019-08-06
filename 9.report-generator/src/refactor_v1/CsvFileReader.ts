import fs from "fs";
import path from "path";

export abstract class CsvFileReader<T> {
  data: T[] = [];
  abstract mapRow(row: string[]): T;
  constructor(public fileName: string) {}

  read(): void {
    this.data = fs
      .readFileSync(path.resolve(__dirname, "..", this.fileName), {
        encoding: "utf-8"
      })
      .split("\n")
      .map((row: string): string[] => row.split(","))
      .map(this.mapRow);
  }
}
