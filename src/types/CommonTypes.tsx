export type TableDataType = {
  ticket: { title: string; subtitle: string };
  status: string;
  createdAt: Date;
  replies: { userImg: string; userName: string; isStaf: boolean }[];
}[];

export type useFilterType = {
  filterType: "input" | "select";
  value: string;
  data?: TableDataType;
};
