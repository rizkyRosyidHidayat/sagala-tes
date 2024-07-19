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

function getRandomInt() {
  return Math.floor(Math.random() * 400);
}

const data = [
  { name: "SEP", uv: getRandomInt(), pv: getRandomInt() },
  { name: "OCT", uv: getRandomInt(), pv: getRandomInt() },
  { name: "NOV", uv: getRandomInt(), pv: getRandomInt() },
  { name: "DEC", uv: getRandomInt(), pv: getRandomInt() },
  { name: "JAN", uv: getRandomInt(), pv: getRandomInt() },
  { name: "FEB", uv: getRandomInt(), pv: getRandomInt() },
];

const dataWeekly = [
  { name: "17", uv: getRandomInt(), pv: getRandomInt() },
  { name: "18", uv: getRandomInt(), pv: getRandomInt() },
  { name: "19", uv: getRandomInt(), pv: getRandomInt() },
  { name: "20", uv: getRandomInt(), pv: getRandomInt() },
  { name: "21", uv: getRandomInt(), pv: getRandomInt() },
  { name: "22", uv: getRandomInt(), pv: getRandomInt() },
  { name: "23", uv: getRandomInt(), pv: getRandomInt() },
  { name: "24", uv: getRandomInt(), pv: getRandomInt() },
  { name: "25", uv: getRandomInt(), pv: getRandomInt() },
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

export default function RevenueChart() {
  return (
    <SimpleGrid columns={2} gap="20px">
      <Card variant="outline" borderRadius="24px" border="0px">
        <CardHeader as={Flex} alignItems="center">
          <Button
            variant="solid"
            leftIcon={<CalendarIcon color="gray.400" />}
            color="gray.400"
            fontSize="sm"
            bg="gray.50"
          >
            This month
          </Button>
          <Spacer />
          <IconButton
            bg="gray.50"
            aria-label="chart revenue this month"
            icon={<ChartBarIcon className="size-6 text-primary-500" />}
          />
        </CardHeader>
        <CardBody as={Flex} pt="0px" gap="24px">
          <Box flexShrink={0}>
            <Stat>
              <StatLabel color="gray.400">Total Spent</StatLabel>
              <StatNumber color="primary.900">345,670</StatNumber>
              <StatHelpText>
                <StatArrow type="increase" />
                <Text as="b" color="green.400">
                  +23.36%
                </Text>
              </StatHelpText>
            </Stat>
            <Flex alignItems="center" gap="8px">
              <CheckCircleIcon className="size-5 text-green-500" />
              <Text as="b" color="green.400">
                On track
              </Text>
            </Flex>
          </Box>
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
              <YAxis tick={false} axisLine={false} width={10} />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </CardBody>
      </Card>
      <Card variant="outline" borderRadius="24px" border="0px">
        <CardHeader as={Flex} alignItems="center">
          <Heading size="md" color="primary.900">Weekly Revenue</Heading>
          <Spacer />
          <IconButton
            bg="gray.50"
            aria-label="chart revenue this month"
            icon={<ChartBarIcon className="size-6 text-primary-500" />}
          />
        </CardHeader>
        <CardBody pt="0px">
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
