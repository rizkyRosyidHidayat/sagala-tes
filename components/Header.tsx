import {
  Box,
  Flex,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
  Spacer,
  InputGroup,
  InputLeftElement,
  Input,
  Avatar,
} from "@chakra-ui/react";
import { MagnifyingGlassIcon, PaintBrushIcon } from "@heroicons/react/16/solid";
import { BellIcon, InformationCircleIcon } from "@heroicons/react/24/outline";

export default function Header() {
  const listPage = [
    { text: "Pages", link: "#" },
    { text: "Main Dashboard", link: "/" },
  ];
  const icons = (className: string) => [
    <BellIcon key={1} className={className} />,
    <InformationCircleIcon key={2} className={className} />,
    <PaintBrushIcon key={3} className={className} />,
  ];
  return (
    <Box as="header" py="20px">
      <Flex alignItems="center">
        <Box>
          <Breadcrumb>
            {listPage.map((page, pageKey) => (
              <BreadcrumbItem key={pageKey}>
                <BreadcrumbLink fontSize="14px" href={page.link}>
                  {page.text}
                </BreadcrumbLink>
              </BreadcrumbItem>
            ))}
          </Breadcrumb>
          <Text
            as="p"
            fontWeight="700"
            marginTop="-6px"
            fontSize="4xl"
            color="primary.900"
          >
            Main Dashboard
          </Text>
        </Box>
        <Spacer />
        <Box px="12px" py="12px" borderRadius="1000px" bgColor="white">
          <Flex alignItems="center" gap="12px">
            <InputGroup variant="pill">
              <InputLeftElement pointerEvents="none">
                <MagnifyingGlassIcon className="size-5" />
              </InputLeftElement>
              <Input type="text" placeholder="Search..." />
            </InputGroup>
            {icons("size-7 text-gray-400 cursor-pointer")}
            <Avatar
              name="Admin Panel"
              size="md"
              bgColor="primary.500"
              color="white"
            />
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
