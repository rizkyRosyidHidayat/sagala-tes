import { getRandomInt } from "@/utils/helper";

export type DataTableType = {
  id: number;
  name: string;
  progress: number;
  status: string;
  date: string;
};

export let dataTable: DataTableType[] = [
  {
    id: 3,
    name: "Fried Rice",
    progress: getRandomInt(100),
    status: "Approved",
    date: "2024-05-20",
  },
  {
    id: 5,
    name: "Coffe Capuchino",
    progress: getRandomInt(100),
    status: "Disable",
    date: "2024-07-19",
  },
  {
    id: 12,
    name: "Hot Wings Chinken",
    progress: getRandomInt(100),
    status: "Error",
    date: "2024-04-23",
  },
  {
    id: 6,
    name: "Thai Tea Boba",
    progress: getRandomInt(100),
    status: "Approved",
    date: "2024-11-22",
  },
  {
    id: 9,
    name: "Matcha Original",
    progress: getRandomInt(100),
    status: "Approved",
    date: "2024-01-09",
  },
];

export function reducerComplexTable(
  state: {
    data: DataTableType[];
  },
  action: {
    type: "search" | "delete" | "edit" | "add";
    payload?: string | number[] | DataTableType;
  }
) {
  if (action.type === "search") {
    const payload = action.payload as string | undefined;
    const search = payload?.toLocaleLowerCase() ?? "";
    return {
      ...state,
      data: dataTable.filter((item) =>
        item.name.toLocaleLowerCase().includes(search)
      ),
    };
  } else if (action.type === "delete") {
    const payload = action.payload as number[] | undefined;
    const deletedId = payload || [];
    const result = dataTable.filter((item) => !deletedId.includes(item.id));
    dataTable = result;
    return {
      ...state,
      data: dataTable,
    };
  } else if (action.type === "edit" && action.payload) {
    const payload = action.payload as DataTableType;
    const result = dataTable.map((item) => {
      if (item.id === payload.id) return payload;
      else return item;
    });
    dataTable = result;
    return {
      ...state,
      data: dataTable,
    };
  } else if (action.type === "add" && action.payload) {
    const payload = action.payload as DataTableType;
    
    if (dataTable.findIndex((item) => item.id === payload.id) === -1)
      dataTable = [...dataTable, payload];
    return {
      ...state,
      data: dataTable,
    };
  }
  throw Error("Action is out of range");
}
