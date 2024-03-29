import React, { useState } from "react";
import { Tag, Avatar, Flex, Table } from "antd";
import { VscCommentDiscussion } from "react-icons/vsc";

const columns = [
  {
    title: "Brand",
    dataIndex: "brand",
    width: "20%",
    className: "md:w-[20%] !w-[200px]",
    render: (brand) => {
      return (
        <Flex align="center" justify="space-between">
          <Flex align="center" gap={10}>
            <img src={brand.logo} width={25} height={25} alt="logo" />
            <h2 className="font-bold">{brand.name}</h2>
          </Flex>
          {brand?.comments ? (
            <Flex align="center" gap={3}>
              <VscCommentDiscussion size={18} />

              <span>{brand.comments}</span>
            </Flex>
          ) : (
            <></>
          )}
        </Flex>
      );
    },
  },
  {
    title: "Description",
    dataIndex: "description",
    width: "20%",
  },
  {
    title: "Members",
    dataIndex: "members",
    render: (members) => {
      return (
        <Avatar.Group
          maxCount={2}
          maxStyle={{ color: "#f56a00", backgroundColor: "#fde3cf" }}
        >
          {members?.map((member, index) => (
            <Avatar key={index} src={member} />
          ))}
        </Avatar.Group>
      );
    },
  },
  {
    title: "Categories",
    dataIndex: "categories",
    width: "20%",
    render: (categories) => {
      return (
        <Flex gap={3} wrap="wrap">
          {categories.map((category, index) => (
            <Tag bordered={false} color={category.color}>
              {category.name}
            </Tag>
          ))}
        </Flex>
      );
    },
  },
  {
    title: "Tags",
    dataIndex: "tags",

    render: (tags) => {
      return (
        <Flex gap={3} wrap="wrap">
          {tags.map((tag, index) => (
            <Tag color="default">{tag}</Tag>
          ))}
        </Flex>
      );
    },
  },
  {
    title: "Next Meeting",
    dataIndex: "nextMeeting",
    render: (nextMeeting) => {
      return (
        <Flex gap={3} wrap="wrap">
          {nextMeeting.map((meeting, index) => (
            <Tag color={meeting.color}>{meeting.name}</Tag>
          ))}
        </Flex>
      );
    },
  },
];

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {},
  getCheckboxProps: (record) => ({
    disabled: record?.disabled,
    name: record.brand.name,
  }),
};

const TableWrapper = ({ data, searchText, filter, setFilter }) => {
  const [selectionType, setSelectionType] = useState("checkbox");

  // search based on searched text
  const filteredData = data.filter((item) => {
    if (item.brand.name.toLowerCase().includes(searchText.toLowerCase())) {
      return item;
    }
  });

  return (
    <div>
      <Table
        tableLayout="fixed"
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        columns={columns}
        dataSource={filteredData}
        scroll={{
          x: 1000,
        }}
      />
    </div>
  );
};
export default TableWrapper;
