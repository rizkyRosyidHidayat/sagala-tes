"use client";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  GridItem,
  SimpleGrid,
  TableContainer,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  Flex,
  Heading,
  Spacer,
  InputGroup,
  InputLeftElement,
  Input,
  Avatar,
  Checkbox,
  TableCaption,
  Center,
  Button,
} from "@chakra-ui/react";
import {
  Bars2Icon,
  CheckCircleIcon,
  MagnifyingGlassIcon,
  PlusIcon,
} from "@heroicons/react/16/solid";
import { Calendar } from "@nextui-org/calendar";
import { parseDate } from "@internationalized/date";
import React, { useReducer, useState } from "react";
import {
  dataTable,
  DataTableType,
  reducerComplexTable,
} from "@/reducer/complex-table";
import DataEmpty from "./DataEmpty";
import TextInput from "./TableEdit/TextInput";
import SelectInput from "./TableEdit/SelectInput";
import NumberInput from "./TableEdit/NumberInput";
import DateInput from "./TableEdit/DateInput";
import { getRandomInt } from "@/utils/helper";

const tableHead = ["NAME", "STATUS", "PROGRESS", "DATE"];

const dataTask = [
  { id: 0, text: "Landing Page Design" },
  { id: 1, text: "Dashboard Builder" },
  { id: 2, text: "Mobile App Design" },
  { id: 3, text: "Illustration" },
  { id: 4, text: "Promotional LP" },
];
const initAddData: DataTableType = {
  id: getRandomInt(1000),
  name: "",
  progress: 0,
  date: "",
  status: "",
};
export default function ComplexTable() {
  const [stateDataTable, dispatchDataTable] = useReducer(reducerComplexTable, {
    data: dataTable,
  });
  const [deletedId, setDeletedId] = useState<number[]>([]);
  function updateDeletedId(checked: boolean, id: number) {
    if (checked) setDeletedId([...deletedId, id]);
    else setDeletedId(deletedId.filter((item) => item !== id));
  }
  const [isAddData, setIsAddData] = useState<boolean>(false);
  const [addData, setAddData] = useState<DataTableType>(initAddData);

  return (
    <SimpleGrid columns={[1, 1, 1, 2, 4, 4]} gap={[2, 2, 4, 4, 5, 5]}>
      <GridItem colSpan={[null, null, 2, 2, 2, 2]}>
        <Card
          variant="outline"
          borderRadius={["12px", "12px", "24px"]}
          border="0px"
          height="100%"
        >
          <CardHeader
            as={Flex}
            flexDirection={["column", "column", "row"]}
            gap={[2, 2, 4]}
            p={[3, 3, 5]}
            alignItems={["flex-start", "flex-start", "center"]}
          >
            <Heading size="md" color="primary.900">
              Complex Table
            </Heading>
            <Spacer />
            <InputGroup width={300} variant="pill">
              <InputLeftElement pointerEvents="none">
                <MagnifyingGlassIcon className="size-5 text-gray-500" />
              </InputLeftElement>
              <Input
                type="text"
                placeholder="Search data"
                onChange={(e) =>
                  dispatchDataTable({ type: "search", payload: e.target.value })
                }
              />
            </InputGroup>
          </CardHeader>
          <CardBody pt={0} px={0} pb={[3, 3, 5]}>
            <TableContainer>
              <Table size="sm">
                {deletedId.length ? (
                  <TableCaption>
                    <Center>
                      <Text as="p" color="red.500" mr="12px">
                        Are you sure to delete {deletedId.length} data ?
                      </Text>
                      <Text
                        as="span"
                        color="red.500"
                        mr="12px"
                        cursor="pointer"
                        className="hover:underline"
                        onClick={() => {
                          dispatchDataTable({
                            type: "delete",
                            payload: deletedId,
                          });
                          setDeletedId([]);
                        }}
                      >
                        YES
                      </Text>
                      <Text
                        as="span"
                        color="gray.400"
                        cursor="pointer"
                        className="hover:underline"
                        onClick={() => setDeletedId([])}
                      >
                        CANCEL
                      </Text>
                    </Center>
                  </TableCaption>
                ) : (
                  <TableCaption py={0}>
                    {isAddData ? (
                      <Button
                        size="sm"
                        colorScheme="gray"
                        variant="ghost"
                        width="50%"
                        onClick={() => {
                          setIsAddData(false);
                          setAddData(initAddData);
                        }}
                      >
                        Cancel
                      </Button>
                    ) : null}
                    <Button
                      size="sm"
                      colorScheme="primary"
                      variant="ghost"
                      width={isAddData ? "50%" : "100%"}
                      leftIcon={<PlusIcon className="size-4" />}
                      onClick={() => {
                        if (isAddData) {
                          setIsAddData(false);
                          dispatchDataTable({ type: "add", payload: addData });
                          setAddData(initAddData);
                        } else setIsAddData(true);
                      }}
                    >
                      {isAddData ? "Save Data" : "Add Data"}
                    </Button>
                  </TableCaption>
                )}
                <Thead>
                  <Tr>
                    {tableHead.map((text, headKey) => (
                      <Th key={headKey} color="gray.400">
                        {text}
                      </Th>
                    ))}
                  </Tr>
                </Thead>
                <Tbody maxHeight="185px" overflowY="auto">
                  {stateDataTable.data.length === 0 ? (
                    <Tr>
                      <Td colSpan={tableHead.length + 1}>
                        <DataEmpty />
                      </Td>
                    </Tr>
                  ) : (
                    stateDataTable.data.map((data, dataKey) => (
                      <Tr key={dataKey}>
                        <Td border={0}>
                          <Flex alignItems="center" gap="8px">
                            <Checkbox
                              isChecked={deletedId.includes(data.id)}
                              colorScheme="primary"
                              onChange={(e) =>
                                updateDeletedId(e.target.checked, data.id)
                              }
                            />
                            <TextInput
                              value={data.name}
                              emitValue={(val) =>
                                dispatchDataTable({
                                  type: "edit",
                                  payload: { ...data, name: val },
                                })
                              }
                            />
                          </Flex>
                        </Td>
                        <Td border={0} fontSize="sm">
                          <SelectInput
                            value={data.status}
                            emitValue={(val) =>
                              dispatchDataTable({
                                type: "edit",
                                payload: { ...data, status: val },
                              })
                            }
                          />
                        </Td>
                        <Td border={0} fontSize="sm">
                          <NumberInput
                            value={data.progress}
                            emitValue={(val) =>
                              dispatchDataTable({
                                type: "edit",
                                payload: { ...data, progress: val },
                              })
                            }
                            max={100}
                            isProgress
                          />
                        </Td>
                        <Td border={0} fontSize="sm">
                          <DateInput
                            value={data.date}
                            emitValue={(val) =>
                              dispatchDataTable({
                                type: "edit",
                                payload: { ...data, date: val },
                              })
                            }
                          />
                        </Td>
                      </Tr>
                    ))
                  )}
                  {isAddData ? (
                    <Tr>
                      <Td border={0}>
                        <TextInput
                          value={addData.name}
                          emitValue={(val) =>
                            setAddData({ ...addData, name: val })
                          }
                          active
                        />
                      </Td>
                      <Td border={0}>
                        <SelectInput
                          value={addData.status}
                          emitValue={(val) =>
                            setAddData({ ...addData, status: val })
                          }
                          active
                        />
                      </Td>
                      <Td border={0}>
                        <NumberInput
                          value={addData.progress}
                          emitValue={(val) =>
                            setAddData({ ...addData, progress: val })
                          }
                          max={100}
                          active
                        />
                      </Td>
                      <Td border={0}>
                        <DateInput
                          value={addData.date}
                          emitValue={(val) =>
                            setAddData({ ...addData, date: val })
                          }
                          active
                        />
                      </Td>
                    </Tr>
                  ) : null}
                </Tbody>
              </Table>
            </TableContainer>
          </CardBody>
        </Card>
      </GridItem>
      <GridItem>
        <Card
          variant="outline"
          borderRadius={["12px", "12px", "24px"]}
          border="0px"
          height="100%"
        >
          <CardHeader p={[3, 3, 5]} as={Flex} alignItems="center" gap="12px">
            <Avatar
              size="sm"
              bg="gray.100"
              icon={<CheckCircleIcon className="size-4 text-primary-500" />}
            />
            <Heading size="md" color="primary.900">
              Tasks
            </Heading>
          </CardHeader>
          <CardBody px={[3, 3, 5]} pb={[3, 3, 5]} pt={0}>
            {dataTask.map((task, taskKey) => (
              <Flex
                key={taskKey}
                alignItems="center"
                gap="12px"
                py={["6px", "6px", "6px", "8px", "12px", "12px"]}
              >
                <Checkbox colorScheme="primary">
                  <Text as="b" ml="8px" fontSize={["xs", "xs", "sm", "sm"]}>
                    {task.text}
                  </Text>
                </Checkbox>
                <Spacer />
                <Bars2Icon className="size-5 text-gray-300 cursor-move" />
              </Flex>
            ))}
          </CardBody>
        </Card>
      </GridItem>
      <GridItem>
        <Card
          variant="outline"
          borderRadius={["12px", "12px", "24px"]}
          border="0px"
          height="100%"
        >
          <Calendar
            classNames={{
              base: "h-full w-full shadow-none",
              content: "w-full",
              headerWrapper: "w-full",
              gridHeader: "shadow-none border-b",
              cellButton: "data-[selected=true]:bg-primary-500",
            }}
            calendarWidth="100%"
            aria-label="Date"
            defaultValue={parseDate("2024-07-20")}
          />
        </Card>
      </GridItem>
    </SimpleGrid>
  );
}
