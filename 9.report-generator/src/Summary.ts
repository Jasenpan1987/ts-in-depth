import { MatchRecord } from "./MatchRecordType";
import { WinAnalyzer } from "./analyzers/WinsAnalyzer";
import { ConsoleReports } from "./reports/ConsoleReports";

export interface IAnalyzer {
  run(matchRecords: MatchRecord[]): string;
}

export interface IOutputTarget {
  print(report: string): void;
}

export class Summary {
  constructor(
    private analyzer: IAnalyzer,
    private outputTarget: IOutputTarget
  ) {}

  static createSummaryWonWithConsoleReport(teamName: string): Summary {
    return new Summary(new WinAnalyzer(teamName), new ConsoleReports());
  }

  runAndBuildReport(matchRecords: MatchRecord[]): void {
    const analysis = this.analyzer.run(matchRecords);
    this.outputTarget.print(analysis);
  }
}
