export interface ISortable {
  length: number;
  compare: (idx: number) => boolean;
  swap: (idx: number) => void;
}
