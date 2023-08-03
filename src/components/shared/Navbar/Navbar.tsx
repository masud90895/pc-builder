import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Avatar,
} from "@nextui-org/react";
import { ChevronDown } from "../icons/icons";
import Image from "next/image";

interface NavbarPageProps {
  key: string;
  label: string;
}

const NavbarPage = () => {
  const items: NavbarPageProps[] = [
    {
      key: "Processor",
      label: "Processor",
    },
    {
      key: "Motherboard",
      label: "Motherboard",
    },
    {
      key: "Storage device",
      label: "Storage device",
    },
    {
      key: "Monitor",
      label: "Monitor",
    },
    {
      key: "Others",
      label: "Others",
    },
  ];
  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
  };

  return (
    <Navbar
      shouldHideOnScroll
      isBordered
      className="max-w-[1920px] w-full bg-[#ffffff] px-2 md:px-6"
      maxWidth="full"
    >
      <header className="bg-[#ffffff] w-full">
        <div className="mx-auto  px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <Link className="block md:flex gap-2 text-[#ce24b4] items-center" href="/">
                <span className="sr-only">Home</span>
                <Image
                  src="https://i.ibb.co/W5sRzg6/a6c67360ed7472ee57ea422f578774a0-removebg-preview.png"
                  alt="logo"
                  width={50}
                  height={50}
                ></Image>
                <p className="hidden md:block font-semibold text-2xl font-serif">
                  PC BUILDER
                </p>
              </Link>
            </div>

            <div className="md:flex md:items-center md:gap-12">
              <div className="flex items-center gap-4">
                <Dropdown>
                  <NavbarItem>
                    <DropdownTrigger>
                      <Button
                        disableRipple
                        className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                        endContent={icons.chevron}
                        radius="sm"
                        variant="light"
                      >
                        Categories
                      </Button>
                    </DropdownTrigger>
                  </NavbarItem>
                  <DropdownMenu
                    aria-label="ACME features"
                    className="w-[340px]"
                    itemClasses={{
                      base: "gap-4",
                    }}
                  >
                    {items?.map((item: NavbarPageProps) => (
                      <DropdownItem key={item?.key}>
                        <Link
                          className="w-full"
                          href={`${item?.key
                            .toLowerCase()
                            .split(/[\s_]+/)
                            .map((word, index) => {
                              if (index === 0) {
                                return word;
                              } else {
                                return (
                                  word.charAt(0).toUpperCase() + word.slice(1)
                                );
                              }
                            })
                            .join("")}`}
                        >
                          <p className="text-gray-500">{item?.key}</p>
                        </Link>
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                </Dropdown>
                <div className="sm:flex sm:gap-4">
                  <Link
                    className="rounded-md bg-[#ce24b4] px-5 py-2.5 text-sm font-medium text-white shadow "
                    href="/login"
                  >
                    Login
                  </Link>

                  <div className="hidden sm:flex">
                    <Link
                      className="rounded-md bg-[#fae5f7] px-5 py-2.5 text-sm font-medium text-[#ce24b4] border border-[#ce24b4] "
                      href="/register"
                    >
                      Register
                    </Link>
                  </div>
                </div>

                <Dropdown placement="bottom-end">
                  <NavbarItem>
                    <DropdownTrigger>
                      <Avatar
                        isBordered
                        as={Link}
                        href="#"
                        className="transition-transform"
                        color="secondary"
                        name="Jason Hughes"
                        size="sm"
                        src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                      />
                    </DropdownTrigger>
                  </NavbarItem>
                  <DropdownMenu aria-label="Profile Actions" variant="flat">
                    <DropdownItem key="profile" className="h-14 gap-2">
                      <p className="font-semibold">Signed in as</p>
                      <p className="font-semibold">zoey@example.com</p>
                    </DropdownItem>
                    <DropdownItem key="settings">My Build</DropdownItem>

                    <DropdownItem key="logout" color="danger">
                      Log Out
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
      </header>
    </Navbar>
  );
};

export default NavbarPage;
