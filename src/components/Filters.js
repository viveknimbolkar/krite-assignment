import React from "react";
import { Flex, Select, Popover, Button } from "antd";
import { VscSettings } from "react-icons/vsc";
import { FaPeopleLine } from "react-icons/fa6";
import { TbDatabaseShare } from "react-icons/tb";

const content = () => {
  return (
    <div>
      <p>Content</p>
      <p>Content</p>
      <Button type="primary">Apply</Button>
      <Button>Clear</Button>
    </div>
  );
};

function Filters({ data, tags, categories, brands, filter, setFilter }) {
  const { brand, category, tag, sortBy } = filter;
  return (
    <Flex
      align="center"
      justify="space-between"
      className="md:p-4 p-2 md:flex-row flex-col"
    >
      <Flex align="center" gap={10} className="md:flex-nowrap flex-wrap">
        <Select
          onChange={(value) => setFilter({ ...filter, brand: value })}
          value={brand}
          defaultValue="All Brands"
          options={brands}
          className="md:w-fit w-[47%]"
        />
        <Select
          defaultValue="All Categories"
          value={category}
          onChange={(value) => setFilter({ ...filter, category: value })}
          options={categories}
          className="md:w-fit w-[47%]"
        />
        <Select
          value={tag}
          onChange={(value) => setFilter({ ...filter, tag: value })}
          defaultValue="All Tags"
          className="md:w-fit w-[47%]"
          options={tags}
        />
        <Select
          className="md:w-fit w-[50%]"
          value={sortBy}
          onChange={(value) => setFilter({ ...filter, sortBy: value })}
          defaultValue="Sort by"
          style={{
            width: "150px",
          }}
          options={[
            {
              value: "sort-by",
              label: "Sort by",
            },
            {
              value: "price-low-to-high",
              label: "Price: Low to High",
            },
            {
              value: "price-high-to-low",
              label: "Price: High to Low",
            },
            {
              value: "newest",
              label: "Newest",
            },
          ]}
        />
        <Popover content={content} title="Title" trigger="click">
          <Button icon={<VscSettings />} className="md:w-fit w-full">
            Filters
          </Button>
        </Popover>
      </Flex>
      <Flex align="center" className="md:mt-0 mt-3  w-full" gap={10}>
        <Button
          icon={<FaPeopleLine />}
          className="hover:border-black md:w-auto w-[47%]"
        >
          Meeting
        </Button>
        <Button icon={<TbDatabaseShare />} className="md:w-auto w-[47%]">
          Import/Export
        </Button>
      </Flex>
    </Flex>
  );
}

export default Filters;
