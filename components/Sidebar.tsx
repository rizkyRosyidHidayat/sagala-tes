"use client";
import {
  Box,
  Divider,
  Flex,
  List,
  ListIcon,
  ListItem,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import Image from "next/image";
import {
  ChartBarIcon,
  HomeIcon,
  UserIcon,
  LockClosedIcon,
} from "@heroicons/react/16/solid";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

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

  const [isLowerSm, setIsLowerSm] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    if (window)
      window.addEventListener("resize", () => {
        if (window.innerWidth <= 480) setIsLowerSm(true);
        else setIsLowerSm(false);
      });
    setMounted(true);
  }, []);
  if (typeof window === "undefined" && mounted) return;
  return (
    <Box
      as="aside"
      position="sticky"
      top="0px"
      overflow="hidden"
      w={["auto", "auto", "auto", "auto", "auto", 300]}
      className="translate-all duration-150"
      bg="white"
      paddingLeft={["12px", "12px", "12px", "12px", "16px", "20px"]}
      paddingRight={["0px", "0px", "0px", "0px", "0px", "20px"]}
      paddingBottom="20px"
      flexShrink={0}
      minH="100vh"
    >
      {/* sidebar header */}
      <Flex
        justifyContent="center"
        paddingY="20px"
        display={["none", "none", "none", "none", "none", "flex"]}
      >
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
              <Tooltip
                label={menu.text}
                placement="right"
                isDisabled={isLowerSm}
                bg="primary.100"
                color="primary.900"
              >
                <ListIcon
                  as={selectIcon(menu.icon)}
                  color={isSelected ? "primary.500" : "gray.400"}
                  className="group-hover:text-primary-500 duration-150 lg:text-lg xl:text-xl"
                  marginRight={["12px", "12px", "12px", "12px", "16px", "16px"]}
                />
              </Tooltip>
              <Text
                display={["none", "none", "none", "none", "none", "block"]}
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
