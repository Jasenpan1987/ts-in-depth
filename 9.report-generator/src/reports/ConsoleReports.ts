import { IOutputTarget } from "../Summary";

export class ConsoleReports implements IOutputTarget {
  print(report: string) {
    console.log("===== Report =====");
    console.log(report);
  }
}
