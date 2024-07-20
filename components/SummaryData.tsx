import {
  Avatar,
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  SimpleGrid,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { ChartBarIcon, ChevronDownIcon } from "@heroicons/react/16/solid";
import {
  CurrencyDollarIcon,
  DocumentDuplicateIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";

type BoxDataProps = {
  rightEl?: React.ReactNode;
  leftEl?: React.ReactNode;
  title: string;
  subtitle: string;
  descEl?: React.ReactNode;
};

const BoxData = ({
  rightEl,
  title,
  subtitle,
  descEl,
  leftEl,
}: BoxDataProps) => (
  <Box
    bgColor="white"
    borderRadius={["12px", "12px", "24px"]}
    px={[3, 3, "20px"]}
    py={[3, 3, "16px"]}
  >
    <Flex alignItems="center" gap="16px">
      {rightEl}
      <Box>
        <Text as="p" fontSize={["xs", "xs", "sm"]} color="gray.400">
          {subtitle}
        </Text>
        <Text as="b" fontSize={["lg", "lg", "xl", "2xl"]} color="primary.900">
          {title}
        </Text>
        {descEl}
      </Box>
      <Spacer />
      {leftEl}
    </Flex>
  </Box>
);

export default function SummaryData() {
  return (
    <SimpleGrid columns={[1, 1, 2, 2, 3, 3]} gap={[2, 2, 4, 4, 5, 5]}>
      <BoxData
        rightEl={
          <Avatar
            size={["sm", "md", "md", "lg"]}
            bg="gray.50"
            icon={
              <ChartBarIcon className="text-primary-500 size-6 lg:size-9" />
            }
          />
        }
        title={`Rp ${(350000.4).toLocaleString("id-ID")}`}
        subtitle="Earnings"
      />
      <BoxData
        rightEl={
          <Avatar
            size={["sm", "md", "md", "lg"]}
            bg="gray.50"
            icon={
              <CurrencyDollarIcon className="text-primary-500 size-6 lg:size-9" />
            }
          />
        }
        title={`Rp ${(64300.55).toLocaleString("id-ID")}`}
        subtitle="Spend this month"
      />
      <BoxData
        title={`Rp ${(350.4).toLocaleString("id-ID")}`}
        subtitle="Earnings"
        descEl={
          <Box as="p" fontSize={["xs", "xs", "sm"]}>
            <Text as="b" color="green.400">
              +23%
            </Text>{" "}
            <Text as="span" color="gray.400">
              since last month
            </Text>
          </Box>
        }
      />
      <BoxData
        title={`Rp ${(1500.4).toLocaleString("id-ID")}`}
        subtitle="Your Balance"
        leftEl={
          <Menu>
            <MenuButton>
              <Flex alignItems="center" mr="-8px" gap="8px">
                <Avatar
                  size={["sm", "md", "md", "lg"]}
                  src="/us-flag.svg"
                  icon={
                    <PlusCircleIcon className="text-white size-6 lg:size-9" />
                  }
                />
                <ChevronDownIcon className="size-6 text-gray-400" />
              </Flex>
            </MenuButton>
            <MenuList>
              <MenuItem as={Flex}>
                <Text fontSize="sm" color="gray.400">
                  Dollar
                </Text>
                <Spacer />
                <Avatar size="2xs" src="/us-flag.svg" />
              </MenuItem>
              <MenuItem as={Flex}>
                <Text fontSize="sm" color="gray.400">
                  Rupiah
                </Text>
                <Spacer />
                <Avatar size="2xs" src="/id-flag.svg" />
              </MenuItem>
            </MenuList>
          </Menu>
        }
      />
      <BoxData
        rightEl={
          <Avatar
            size={["sm", "md", "md", "lg"]}
            bgGradient="linear-gradient(90deg, rgb(68, 129, 235) 0%, rgb(4, 190, 254) 100%)}"
            icon={<PlusCircleIcon className="text-white size-6 lg:size-9" />}
          />
        }
        title={"154"}
        subtitle="New Task"
      />
      <BoxData
        rightEl={
          <Avatar
            size={["sm", "md", "md", "lg"]}
            bg="gray.50"
            icon={
              <DocumentDuplicateIcon className="text-primary-500 size-6 lg:size-9" />
            }
          />
        }
        title={"3154"}
        subtitle="Total Projects"
      />
    </SimpleGrid>
  );
}
