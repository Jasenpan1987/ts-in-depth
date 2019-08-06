import { MatchResults } from "./matchResultsEnum";

export type MatchRecord = [
  Date,
  string,
  string,
  number,
  number,
  MatchResults,
  string
];
