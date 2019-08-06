import { IAnalyzer } from "../Summary";
import { MatchRecord } from "../MatchRecordType";
import { MatchResults } from "../matchResultsEnum";

export class WinAnalyzer implements IAnalyzer {
  constructor(public teamName: string) {}
  run(matchRecords: MatchRecord[]) {
    let wins = 0;
    for (let match of matchRecords) {
      if (
        (match[1] === this.teamName && match[5] === MatchResults.HomeWin) ||
        (match[2] === this.teamName && match[5] === MatchResults.AwayWin)
      ) {
        wins += 1;
      }
    }

    return `${this.teamName} won ${wins} games`;
  }
}
