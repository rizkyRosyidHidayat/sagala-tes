"use client";
import { formatDate, getRandomInt } from "@/utils/helper";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Checkbox,
  Circle,
  Flex,
  GridItem,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  SimpleGrid,
  Spacer,
  Stat,
  StatArrow,
  StatHelpText,
  StatLabel,
  StatNumber,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { PureComponent, useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const tableHead = ["NAME", "PROGRESS", "QUANTITY", "DATE"];
type DataTableType = {
  name: string;
  progress: string;
  quantity: number;
  date: string;
};
const dataTable: DataTableType[] = [
  {
    name: "Fried Rice",
    progress: getRandomInt(100) + "%",
    quantity: getRandomInt(2000),
    date: "2024-05-20",
  },
  {
    name: "Coffe Capuchino",
    progress: getRandomInt(100) + "%",
    quantity: getRandomInt(2000),
    date: "2024-07-19",
  },
  {
    name: "Hot Wings Chinken",
    progress: getRandomInt(100) + "%",
    quantity: getRandomInt(2000),
    date: "2024-04-23",
  },
  {
    name: "Thai Tea Boba",
    progress: getRandomInt(100) + "%",
    quantity: getRandomInt(2000),
    date: "2024-11-22",
  },
  {
    name: "Matcha Original",
    progress: getRandomInt(100) + "%",
    quantity: getRandomInt(2000),
    date: "2024-01-09",
  },
];

const dataVisitors = [
  { name: "00", uv: getRandomInt(400) },
  { name: "04", uv: getRandomInt(400) },
  { name: "08", uv: getRandomInt(400) },
  { name: "12", uv: getRandomInt(400) },
  { name: "14", uv: getRandomInt(400) },
  { name: "16", uv: getRandomInt(400) },
  { name: "18", uv: getRandomInt(400) },
];

const dataPie = [
  { name: "Group A", value: getRandomInt(400) },
  { name: "Group B", value: getRandomInt(400) },
  { name: "Group C", value: getRandomInt(400) },
];

const COLORS = ["#8884D8", "#82CA9D", "#0098e5"];

class CustomizedAxisTick extends PureComponent {
  render() {
    const { x, y, stroke, payload }: any = this.props;

    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={0}
          y={0}
          dy={16}
          fontSize={14}
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#A0AEC0"
        >
          {payload.value}
        </text>
      </g>
    );
  }
}

export default function CheckTable() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <></>;
  return (
    <SimpleGrid columns={[1, 1, 1, 2, 4, 4]} gap={[2, 2, 4, 4, 5, 5]}>
      <Box as={GridItem} colSpan={[null, null, 2, 2, 2, 2]}>
        <Card
          variant="outline"
          borderRadius={["12px", "12px", "24px"]}
          border="0px"
        >
          <CardHeader
            as={Flex}
            flexDirection={["column", "column", "row"]}
            gap={[2, 2, 4]}
            p={[3, 3, 5]}
            alignItems={["flex-start", "flex-start", "center"]}
          >
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
          <CardBody pt={0} px={0} pb={[3, 3, 5]}>
            <TableContainer>
              <Table>
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
                      <Td border={0}>
                        <Checkbox colorScheme="primary">
                          <Text as="span" fontSize="sm">
                            {data.name}
                          </Text>
                        </Checkbox>
                      </Td>
                      <Td border={0} fontSize="sm">
                        {data.progress}
                      </Td>
                      <Td border={0} fontSize="sm">
                        {data.quantity}
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
      </Box>
      <Box as={GridItem}>
        <Card
          variant="outline"
          borderRadius={["12px", "12px", "24px"]}
          border="0px"
          height="100%"
        >
          <CardBody p={[3, 3, 5]}>
            <Flex
              flexDirection="column"
              height="100%"
              justifyContent="space-between"
            >
              <Stat>
                <Flex alignItems="center">
                  <StatLabel color="gray.400" fontSize={["xs", "xs", "sm"]}>
                    Daily Traffic
                  </StatLabel>
                  <Spacer />
                  <StatHelpText
                    mb={0}
                    as="b"
                    color="green.400"
                    fontSize={["xs", "xs", "sm"]}
                  >
                    <StatArrow type="increase" />
                    23.36%
                  </StatHelpText>
                </Flex>
                <Flex alignItems="center">
                  <StatLabel color="gray.400" fontSize={["xs", "xs", "sm"]}>
                    Visitors
                  </StatLabel>
                  <Spacer />
                  <StatNumber
                    fontSize={["lg", "lg", "xl", "xl"]}
                    color="primary.900"
                  >
                    3.454
                  </StatNumber>
                </Flex>
              </Stat>
              <Spacer />
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={dataVisitors}>
                  <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#8884D8" stopOpacity={1} />
                      <stop offset="100%" stopColor="#82CA9D" stopOpacity={1} />
                    </linearGradient>
                  </defs>
                  <XAxis
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    tick={<CustomizedAxisTick />}
                    scale="point"
                  />
                  <YAxis tick={false} axisLine={false} width={10} />
                  <Tooltip />
                  <Bar barSize={20} dataKey="uv" fill="url(#colorUv)" />
                </BarChart>
              </ResponsiveContainer>
            </Flex>
          </CardBody>
        </Card>
      </Box>
      <Box as={GridItem}>
        <Card
          variant="outline"
          borderRadius={["12px", "12px", "24px"]}
          border="0px"
          height="100%"
        >
          <CardBody p={[3, 3, 5]}>
            <Flex alignItems="center">
              <Heading color="primary.900" size="sm">
                Your Pie Chart
              </Heading>
              <Spacer />
              <Menu>
                <MenuButton
                  as={Flex}
                  fontSize="14"
                  color="gray.400"
                  cursor="pointer"
                >
                  <Text as="span" mr="4px">
                    Monthly
                  </Text>
                  <ChevronDownIcon />
                </MenuButton>
                <MenuList>
                  <MenuItem color="gray.400" fontSize="14px">
                    Monthly
                  </MenuItem>
                  <MenuItem color="gray.400" fontSize="14px">
                    Weekly
                  </MenuItem>
                  <MenuItem color="gray.400" fontSize="14px">
                    Daily
                  </MenuItem>
                </MenuList>
              </Menu>
            </Flex>
            <Center>
              <PieChart width={250} height={250}>
                <Pie
                  data={dataPie}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {dataPie.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </Center>
          </CardBody>
          <CardFooter p={[3, 3, 5]} justifyContent="space-between">
            {dataPie.map((data, key) => (
              <Box key={key}>
                <Flex alignItems="center" gap="8px">
                  <span
                    style={{ background: COLORS[key] }}
                    className={`w-2 h-2 inline-block rounded-full`}
                  ></span>
                  <Text color="gray.400" fontSize={["xs", "xs", "sm"]}>
                    {data.name}
                  </Text>
                </Flex>
                <Text as="b" fontSize={["md", "md", "lg"]}>
                  {data.value}
                </Text>
              </Box>
            ))}
          </CardFooter>
        </Card>
      </Box>
    </SimpleGrid>
  );
}
