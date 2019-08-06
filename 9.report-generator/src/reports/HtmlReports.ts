import { IOutputTarget } from "../Summary";
import fs from "fs";
import path from "path";

export class HtmlReports implements IOutputTarget {
  print(report: string) {
    const html = `
      <div>
        <h1>Analysis Output</h1>
        <div>
          ${report}
        </div>
      </div>
    `;
    fs.writeFileSync("report.html", html);
  }
}
