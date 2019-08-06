import { MatchResults } from "./matchResultsEnum";
import { dateStringToDate } from "./utils";
import { MatchRecord } from "./MatchRecordType";
import { CsvFileReader } from "./CsvFileReader";

interface IDataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  matches: MatchRecord[] = [];
  constructor(public reader: IDataReader) {}

  static createCsvMatchReader(fileName: string) {
    return new MatchReader(new CsvFileReader(fileName));
  }
  load() {
    this.reader.read();
    this.matches = this.reader.data.map(
      (row: string[]): MatchRecord => [
        dateStringToDate(row[0]) as Date,
        row[1],
        row[2],
        parseInt(row[3], 10),
        parseInt(row[4], 10),
        row[5] as MatchResults,
        row[6]
      ]
    );
  }
}
