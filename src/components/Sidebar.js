import React, { useState } from "react";
import { Flex, Avatar, Menu, Drawer } from "antd";
import { CiPen } from "react-icons/ci";
import { IoMdCode } from "react-icons/io";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { CiSquarePlus } from "react-icons/ci";
import { IoIosPeople } from "react-icons/io";
import { GoPlus } from "react-icons/go";
import { TbFolder } from "react-icons/tb";
import { FaBarsStaggered } from "react-icons/fa6";

const Navigation = () => {
  const menus = [
    {
      name: "Design team",
      shortcut: "⌘ + 1",
      icon: <CiPen size={20} />,
    },
    {
      name: "Development team",
      shortcut: "⌘ + 2",
      icon: <IoMdCode size={20} />,
    },
    {
      name: "Marketing team",
      shortcut: "⌘ + 3",
      icon: <HiOutlineSpeakerphone size={20} />,
    },
    {
      name: "Management team",
      icon: <IoIosPeople size={20} />,
    },
  ];

  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  const items = [
    getItem("Products", "sub1", <TbFolder size={20} />, [
      getItem("Roadmap", "g1", null),
      getItem("Feedback", "g2", null),
      getItem("Performance", "g3", null),
      getItem("Team", "g4", null),
      getItem("Analytics", "g4", null),
    ]),
    getItem("Sales", "sub2", <TbFolder size={20} />, [
      getItem("Option 5", "5"),
      getItem("Option 6", "6"),
      getItem("Submenu", "sub3", null, [
        getItem("Option 7", "7"),
        getItem("Option 8", "8"),
      ]),
    ]),
    {
      type: "divider",
    },
    getItem("Design", "sub4", <TbFolder size={20} />, [
      getItem("Option 9", "9"),
      getItem("Option 10", "10"),
      getItem("Option 11", "11"),
      getItem("Option 12", "12"),
    ]),
    getItem("Office ", "sub5", <TbFolder size={20} />),
    getItem("Legal", "sub6", <TbFolder size={20} />),
  ];
  return (
    <>
      <Flex align="center" justify="space-between" className="mb-6">
        <Flex gap={10} align="center">
          <div className="overflow-hidden w-[35px] h-[35px] rounded-md">
            <img
              className="object-fit w-full h-full overflow-hidden"
              src="https://img.freepik.com/free-vector/red-logo-black-background_1195-52.jpg?w=1380&t=st=1711701970~exp=1711702570~hmac=e79321d71347c3af3e6761e2d3a47ccede9690835c487c99e0447e562b74ffa5"
              alt="object"
            />
          </div>
          <div>
            <p className="text-sm">Inc</p>
            <h1 className="font-bold">Innovation Hub</h1>
          </div>
        </Flex>
        <Avatar
          size={40}
          src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="avatar of user"
        />
      </Flex>
      <hr />
      <ul className="mb-3 mt-4">
        {menus.map((menu, index) => (
          <li
            key={index}
            className="flex items-center my-2 cursor-pointer hover:bg-gray-100 px-2 py-1 rounded-md justify-between"
          >
            <Flex align="center" gap={4}>
              {menu.icon}

              <h4 className="font-medium text-base">{menu.name}</h4>
            </Flex>
            <span className="border-[1px] text-xs bg-gray-50 px-1 rounded-md">
              {menu.shortcut}
            </span>
          </li>
        ))}
      </ul>
      <hr />
      <li className="flex items-center my-2 cursor-pointer hover:bg-gray-100 px-2 py-1 rounded-md justify-between">
        <Flex align="center" gap={3}>
          <CiSquarePlus size={20} />
          <h4 className="font-medium text-base">Create Team</h4>
        </Flex>
      </li>
      <hr />
      <li className="flex items-center my-2 cursor-pointer hover:bg-gray-100 px-2 py-1 rounded-md justify-between">
        <Flex
          align="center"
          justify="space-between"
          className=" w-full"
          gap={4}
        >
          <h4 className="font-medium text-base">Folders</h4>
          <GoPlus size={20} />
        </Flex>
      </li>
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        items={items}
      />
      <div>
        <div className="flex items-center my-2 cursor-pointer hover:bg-gray-100 px-2 py-1 rounded-md justify-between">
          <Flex align="center" gap={3}>
            <CiSquarePlus size={20} />
            <h4 className="font-medium text-base">Invite Team</h4>
          </Flex>
        </div>
      </div>
    </>
  );
};

function Sidebar() {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("left");
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const onChange = (e) => {
    setPlacement(e.target.value);
  };

  return (
    <>
      <div className="md:block hidden w-[25%] shadow-md rounded-md p-3 overflow-y-auto">
        <Navigation />
      </div>

      {/* mobile navbar */}
      <Flex
        justify="space-between"
        align="center"
        className="border-[1px] p-3 rounded-md shadow-md md:hidden flex"
      >
        <Flex align="center" gap={15}>
          <div className="overflow-hidden w-[35px] h-[35px] rounded-md">
            <img
              className="object-fit w-full h-full overflow-hidden"
              src="https://img.freepik.com/free-vector/red-logo-black-background_1195-52.jpg?w=1380&t=st=1711701970~exp=1711702570~hmac=e79321d71347c3af3e6761e2d3a47ccede9690835c487c99e0447e562b74ffa5"
              alt="object"
            />
          </div>
          <h2 className="font-bold text-lg">Innovation Club</h2>
        </Flex>
        <FaBarsStaggered onClick={() => setOpen(!open)} size={20} />
      </Flex>
      <Drawer
        title="Basic Drawer"
        placement={placement}
        closable={false}
        onClose={onClose}
        width={300}
        open={open}
        key={placement}
      >
        <Navigation />
      </Drawer>
    </>
  );
}

export default Sidebar;
