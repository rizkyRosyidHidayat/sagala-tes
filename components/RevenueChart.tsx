import { getRandomInt } from "@/utils/helper";
import { CalendarIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  IconButton,
  SimpleGrid,
  Spacer,
  Stat,
  StatArrow,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
} from "@chakra-ui/react";
import { ChartBarIcon, CheckCircleIcon } from "@heroicons/react/16/solid";
import { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

const data = [
  { name: "SEP", uv: getRandomInt(400), pv: getRandomInt(400) },
  { name: "OCT", uv: getRandomInt(400), pv: getRandomInt(400) },
  { name: "NOV", uv: getRandomInt(400), pv: getRandomInt(400) },
  { name: "DEC", uv: getRandomInt(400), pv: getRandomInt(400) },
  { name: "JAN", uv: getRandomInt(400), pv: getRandomInt(400) },
  { name: "FEB", uv: getRandomInt(400), pv: getRandomInt(400) },
];

const dataWeekly = [
  { name: "17", uv: getRandomInt(400), pv: getRandomInt(400) },
  { name: "18", uv: getRandomInt(400), pv: getRandomInt(400) },
  { name: "19", uv: getRandomInt(400), pv: getRandomInt(400) },
  { name: "20", uv: getRandomInt(400), pv: getRandomInt(400) },
  { name: "21", uv: getRandomInt(400), pv: getRandomInt(400) },
  { name: "22", uv: getRandomInt(400), pv: getRandomInt(400) },
  { name: "23", uv: getRandomInt(400), pv: getRandomInt(400) },
  { name: "24", uv: getRandomInt(400), pv: getRandomInt(400) },
  { name: "25", uv: getRandomInt(400), pv: getRandomInt(400) },
];

class CustomizedAxisTick extends PureComponent {
  render() {
    const { x, y, stroke, payload }: any = this.props;

    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={0}
          y={0}
          dy={16}
          className="text-xs lg:text-sm"
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

export default function RevenueChart() {
  return (
    <SimpleGrid columns={[1, 1, 1, 1, 2, 2]} gap={[2, 2, 4, 4, 5, 5]}>
      <Card
        variant="outline"
        borderRadius={["12px", "12px", "24px"]}
        border="0px"
      >
        <CardHeader p={[3, 3, 5]} as={Flex} alignItems="center">
          <Button
            variant="solid"
            leftIcon={<CalendarIcon color="gray.400" />}
            color="gray.400"
            fontSize="sm"
            bg="gray.50"
            size={["sm", "sm", "md"]}
          >
            This month
          </Button>
          <Spacer />
          <IconButton
            bg="gray.50"
            aria-label="chart revenue this month"
            icon={
              <ChartBarIcon className="size-6 text-primary-500" />
            }
          />
        </CardHeader>
        <CardBody
          as={Flex}
          flexDirection={["column", "column", "row"]}
          px={[3, 3, 5]}
          pb={[3, 3, 5]}
          pt={0}
          gap="24px"
        >
          <Flex flexDirection={["row", "row", "column"]} flexShrink={0}>
            <Stat flex={["1 1 0%", "1 1 0%", "0"]}>
              <StatLabel color="gray.400" fontSize={["xs", "xs", "sm"]}>
                Total Spent
              </StatLabel>
              <StatNumber
                fontSize={["lg", "lg", "xl", "xl"]}
                color="primary.900"
              >
                345,670
              </StatNumber>
              <StatHelpText fontSize={["xs", "xs", "sm"]}>
                <StatArrow type="increase" />
                <Text as="b" color="green.400">
                  +23.36%
                </Text>
              </StatHelpText>
            </Stat>
            <Flex alignItems="center" gap="8px">
              <CheckCircleIcon className="size-4 lg:size-5 text-green-500" />
              <Text as="b" color="green.400" fontSize={["xs", "xs", "sm"]}>
                On track
              </Text>
            </Flex>
          </Flex>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <Line
                type="bump"
                dataKey="uv"
                strokeWidth={3}
                stroke="#8884d8"
                dot={<></>}
              />
              <Line
                type="bump"
                dataKey="pv"
                strokeWidth={3}
                stroke="#82ca9d"
                dot={<></>}
              />
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={<CustomizedAxisTick />}
              />
              <YAxis tick={false} axisLine={false} width={15} />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </CardBody>
      </Card>
      <Card
        variant="outline"
        borderRadius={["12px", "12px", "24px"]}
        border="0px"
      >
        <CardHeader p={[3, 3, 5]} as={Flex} alignItems="center">
          <Heading size="md" color="primary.900">
            Weekly Revenue
          </Heading>
          <Spacer />
          <IconButton
            bg="gray.50"
            aria-label="chart revenue this month"
            icon={<ChartBarIcon className="size-6 text-primary-500" />}
          />
        </CardHeader>
        <CardBody px={[3, 3, 5]} pb={[3, 3, 5]} pt={0}>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dataWeekly}>
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={<CustomizedAxisTick />}
                scale="point"
              />
              <YAxis tick={false} axisLine={false} width={5} />
              <Tooltip />
              <Bar
                barSize={20}
                background={{ fill: "#F7FAFC" }}
                dataKey="pv"
                stackId="a"
                fill="#8884d8"
              />
              <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </CardBody>
      </Card>
    </SimpleGrid>
  );
}
