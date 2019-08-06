import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { Summary } from "./Summary";
import { WinAnalyzer } from "./analyzers/WinsAnalyzer";
import { ConsoleReports } from "./reports/ConsoleReports";
import { HtmlReports } from "./reports/HtmlReports";

// use new
const csvReader = new CsvFileReader("football.csv");
const reader = new MatchReader(csvReader);
reader.load();

const manUnitedWonReport = new Summary(
  new WinAnalyzer("Man United"),
  new ConsoleReports()
);

manUnitedWonReport.runAndBuildReport(reader.matches);

const manUnitedWonHtml = new Summary(
  new WinAnalyzer("Man United"),
  new HtmlReports()
);

manUnitedWonHtml.runAndBuildReport(reader.matches);

// use static methods
const matchData = MatchReader.createCsvMatchReader("football.csv");
const wonMatchConsoleReport = Summary.createSummaryWonWithConsoleReport(
  "West Ham"
);

matchData.load();
wonMatchConsoleReport.runAndBuildReport(matchData.matches);
