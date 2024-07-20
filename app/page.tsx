"use client";
import SummaryData from "@/components/SummaryData";
import Header from "../components/Header";
import RevenueChart from "@/components/RevenueChart";
import { Center, Stack, Text } from "@chakra-ui/react";
import CheckTable from "@/components/CheckTable";
import ComplexTable from "@/components/ComplexTable";

export default function Page() {
  return (
    <>
      <Header />
      <Stack spacing={[2, 2, 4, 4, 5, 5]}>
        <SummaryData />
        <RevenueChart />
        <CheckTable />
        <ComplexTable />
      </Stack>
      <Center mt="32px">
        <Text fontSize={["xs", "xs", "sm"]} color="primary.300">
          Made with love &#10084;. By Rizky rosyid hidayat
        </Text>
      </Center>
    </>
  );
}
