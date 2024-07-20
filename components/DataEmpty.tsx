import { Center, Text } from "@chakra-ui/react";
import { CircleStackIcon } from "@heroicons/react/16/solid";

export default function DataEmpty() {
  return (
    <Center py="20px">
      <CircleStackIcon className="size-5 text-gray-400" />
      <Text as="b" color="gray.400" ml="12px">Data is empty</Text>
    </Center>
  )
}