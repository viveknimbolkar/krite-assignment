import React from "react";
import { CiSearch } from "react-icons/ci";
import { Input, Flex } from "antd";
import { AiOutlineComment } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";

function Header({ searchText, setSearchText }) {
  return (
    <div className="flex items-center justify-between w-full h-16 md:px-8 md:gap-0 gap-3 border-b-[1px]">
      <div className="flex items-center">
        <div className="md:ml-4 text-lg font-bold">Products</div>
      </div>
      <Flex align="center" gap={10}>
        <Input
          placeholder="Search for..."
          searchText={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          prefix={<CiSearch />}
        />
        {/* Uer <Link/> component in case of using react-router-dom */}
        <a href="#">
          <AiOutlineComment
            className="border-[1px] rounded-md p-[4px]"
            size={30}
          />
        </a>
        <a href="#">
          <IoSettingsOutline
            className="border-[1px] rounded-md p-[4px]"
            size={30}
          />
        </a>
      </Flex>
    </div>
  );
}

export default Header;
