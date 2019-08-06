import { CsvFileReader } from "./CsvFileReader";
import { MatchResults } from "../matchResultsEnum";
import { dateStringToDate } from "../utils";

type MatchRecord = [Date, string, string, number, number, MatchResults, string];

export class MatchReader extends CsvFileReader<MatchRecord> {
  mapRow(row: string[]): MatchRecord {
    return [
      dateStringToDate(row[0]) as Date,
      row[1],
      row[2],
      parseInt(row[3], 10),
      parseInt(row[4], 10),
      row[5] as MatchResults,
      row[6]
    ];
  }
}
