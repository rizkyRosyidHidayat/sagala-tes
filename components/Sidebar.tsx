"use client";
import {
  Box,
  Divider,
  Flex,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import {
  ChartBarIcon,
  HomeIcon,
  UserIcon,
  LockClosedIcon,
} from "@heroicons/react/16/solid";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function Sidebar() {
  const [selectedMenu, setSelectedMenu] = useState("");
  const selectIcon = (icon: string) => {
    if (icon === "home") return HomeIcon;
    else if (icon === "cart") return ShoppingCartIcon;
    else if (icon === "chart") return ChartBarIcon;
    else if (icon === "user") return UserIcon;
    else if (icon === "lock") return LockClosedIcon;
  };
  const menus = [
    { icon: "home", text: "Main Dashboard", link: "" },
    { icon: "cart", text: "NFT Marketplace", link: "cart" },
    { icon: "chart", text: "Data Tables", link: "chart" },
    { icon: "user", text: "Profile", link: "user" },
    { icon: "lock", text: "Sign In", link: "lock" },
    { icon: "home", text: "RTL Admin", link: "admin" },
  ];

  return (
    <Box
      as="aside"
      position="sticky"
      top="0px"
      w={300}
      bg="white"
      paddingX="20px"
      paddingBottom="20px"
      flexShrink={0}
      minH="100vh"
    >
      {/* sidebar header */}
      <Flex justifyContent="center" paddingY="20px">
        <Image
          src={"/sagala.png"}
          alt="logo"
          style={{ width: "auto", height: "auto" }}
          width={100}
          height={0}
          priority
        />
      </Flex>
      <Divider />
      {/* sidebar menu */}
      <List marginTop="20px">
        {menus.map((menu, menuKey) => {
          const isSelected = menu.link === selectedMenu;
          return (
            <ListItem
              onClick={() => setSelectedMenu(menu.link)}
              className="group"
              key={menuKey}
              cursor="pointer"
              paddingY="8px"
              sx={{
                position: "relative",
                display: "flex",
                ":after": {
                  content: '""',
                  height: "80%",
                  backgroundColor: "primary.500",
                  borderRadius: "3px",
                  width: "4px",
                  position: "absolute",
                  top: "50%",
                  transform: "translateY(-50%)",
                  right: "0px",
                  visibility: isSelected ? "visible" : "hidden",
                },
              }}
            >
              <ListIcon
                as={selectIcon(menu.icon)}
                color={isSelected ? "primary.500" : "gray.400"}
                className="group-hover:text-primary-500 duration-150"
                fontSize="20px"
                marginRight="16px"
              />
              <Text
                as={isSelected ? "b" : "span"}
                color={isSelected ? "gray.800" : "gray.400"}
                className="group-hover:text-gray-800 duration-150"
              >
                {menu.text}
              </Text>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
}
