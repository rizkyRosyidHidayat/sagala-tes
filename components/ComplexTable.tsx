import { formatDate, getRandomInt } from "@/utils/helper";
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
  Progress,
  Avatar,
  Checkbox,
} from "@chakra-ui/react";
import {
  Bars2Icon,
  CheckCircleIcon,
  InformationCircleIcon,
  MagnifyingGlassIcon,
  XCircleIcon,
} from "@heroicons/react/16/solid";
import { Calendar } from "@nextui-org/calendar";
import { parseDate } from "@internationalized/date";

const tableHead = ["NAME", "STATUS", "PROGRESS", "DATE"];
const iconStatus = (status: string) =>
  status === "Approved" ? (
    <CheckCircleIcon className="size-5 text-green-500" />
  ) : status === "Disable" ? (
    <XCircleIcon className="size-5 text-red-500" />
  ) : (
    <InformationCircleIcon className="size-5 text-yellow-500" />
  );
const dataTable = [
  {
    name: "Fried Rice",
    progress: getRandomInt(100),
    status: "Approved",
    date: "2024-05-20",
  },
  {
    name: "Coffe Capuchino",
    progress: getRandomInt(100),
    status: "Disable",
    date: "2024-07-19",
  },
  {
    name: "Hot Wings Chinken",
    progress: getRandomInt(100),
    status: "Error",
    date: "2024-04-23",
  },
  {
    name: "Thai Tea Boba",
    progress: getRandomInt(100),
    status: "Approved",
    date: "2024-11-22",
  },
  {
    name: "Matcha Original",
    progress: getRandomInt(100),
    status: "Approved",
    date: "2024-01-09",
  },
];
const dataTask = [
  { id: 0, text: "Landing Page Design" },
  { id: 1, text: "Dashboard Builder" },
  { id: 2, text: "Mobile App Design" },
  { id: 3, text: "Illustration" },
  { id: 4, text: "Promotional LP" },
];
export default function ComplexTable() {
  return (
    <SimpleGrid columns={4} gap="20px">
      <GridItem colSpan={2}>
        <Card variant="outline" borderRadius="24px" border="0px" height="100%">
          <CardHeader as={Flex} alignItems="center">
            <Heading size="md" color="primary.900">
              Check Table
            </Heading>
            <Spacer />
            <InputGroup width={300} variant="pill">
              <InputLeftElement pointerEvents="none">
                <MagnifyingGlassIcon className="size-5 text-gray-500" />
              </InputLeftElement>
              <Input type="text" placeholder="Search data" />
            </InputGroup>
          </CardHeader>
          <CardBody pt={0} px={0}>
            <TableContainer>
              <Table size="sm">
                <Thead>
                  <Tr>
                    {tableHead.map((text, headKey) => (
                      <Th key={headKey} color="gray.400">
                        {text}
                      </Th>
                    ))}
                  </Tr>
                </Thead>
                <Tbody>
                  {dataTable.map((data, dataKey) => (
                    <Tr key={dataKey}>
                      <Td border={0} fontSize="sm">
                        {data.name}
                      </Td>
                      <Td border={0} fontSize="sm">
                        <Flex alignItems="center" gap="8px">
                          {iconStatus(data.status)}
                          {data.status}
                        </Flex>
                      </Td>
                      <Td border={0} fontSize="sm">
                        <Progress
                          value={data.progress}
                          size="sm"
                          borderRadius="full"
                        />
                      </Td>
                      <Td border={0} fontSize="sm">
                        {formatDate(data.date)}
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </CardBody>
        </Card>
      </GridItem>
      <GridItem colSpan={1}>
        <Card variant="outline" borderRadius="24px" border="0px">
          <CardHeader as={Flex} alignItems="center" gap="12px">
            <Avatar
              size="sm"
              bg="gray.100"
              icon={<CheckCircleIcon className="size-4 text-primary-500" />}
            />
            <Heading size="md" color="primary.900">
              Tasks
            </Heading>
          </CardHeader>
          <CardBody pt={0}>
            {dataTask.map((task, taskKey) => (
              <Flex key={taskKey} alignItems="center" gap="12px" py="12px">
                <Checkbox colorScheme="primary">
                  <Text as="b" ml="8px">
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
      <GridItem colSpan={1}>
        <Card variant="outline" borderRadius="24px" border="0px" height="100%">
          <Calendar
            classNames={{
              base: "h-full w-full shadow-none",
              content: "w-full",
              headerWrapper: "w-full",
              cellButton: "data-[selected=true]:bg-primary-500"
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
