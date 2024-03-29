import React from "react";

// lazy load the components
const Header = React.lazy(() => import("./Header"));
const Filters = React.lazy(() => import("./Filters"));
const TableWrapper = React.lazy(() => import("./TableWrapper"));

function Dashboard() {
  const [filter, setFilter] = React.useState({
    brand: "All Brands",
    category: "All Categories",
    tag: "All Tags",
    sortBy: "Sort by",
  });

  const [searchText, setSearchText] = React.useState("");

  const data = [
    {
      key: "1",
      brand: {
        logo: "https://cdn-icons-png.flaticon.com/512/5968/5968770.png",
        name: "Wix",
        comments: 12,
      },
      description: "Website Builder Software for Business and Personal Use",
      members: [
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
        "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg",
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
      ],
      categories: [
        {
          name: "Category 1",
          color: "#722ed1",
        },
        {
          name: "Category 2",
          color: "#fadb14",
        },
      ],
      tags: ["#business", "#personal", "#website"],
      nextMeeting: [
        {
          name: "Tomorrow",
          color: "blue",
        },
        {
          name: "In 2 days",
          color: "green",
        },
        {
          name: "After Lunch",
          color: "purple",
        },
        {
          name: "In 30 minutes",
          color: "red",
        },
      ],
    },

    {
      key: "2",
      brand: {
        logo: "https://cdn3.iconfinder.com/data/icons/social-media-2068/64/_shopping-1024.png",
        name: "Shopify",
        comments: 3,
      },
      description: "Customer Relationship Management (CRM) Software",
      members: [
        "https://randomuser.me/api/portraits/men/23.jpg",
        "https://randomuser.me/api/portraits/men/45.jpg",
        "https://randomuser.me/api/portraits/men/67.jpg",
        "https://randomuser.me/api/portraits/men/89.jpg",
      ],
      categories: [
        {
          name: "Category 6",
          color: "#ffb400",
        },
        {
          name: "Category 7",
          color: "#01a049",
        },
      ],
      tags: ["#business", "#website"],
      nextMeeting: [
        {
          name: "In 30 minutes",
          color: "red",
        },
      ],
    },
    {
      key: "3",
      brand: {
        logo: "https://yt3.googleusercontent.com/Q7_UCD6oHd-4_Ib45h-Vi1YQBw49-bwLU80W1Va2OJJ0IK15vEYEBTi2U4TdqkYmxfDlqXIz=s176-c-k-c0x00ffffff-no-rj",
        name: "Mailchimp",
        comments: 7,
      },
      description: "Social Media Management Tool for Marketing Professionals",
      members: [
        "https://randomuser.me/api/portraits/men/56.jpg",
        "https://randomuser.me/api/portraits/men/78.jpg",
      ],
      categories: [
        {
          name: "Category 2",
          color: "#ee4d2e",
        },
      ],
      tags: ["#marketing", "#personal"],
      nextMeeting: [
        {
          name: "After Lunch",
          color: "purple",
        },
      ],
    },
    {
      key: "4",
      brand: {
        logo: "https://cdn.icon-icons.com/icons2/2699/PNG/512/paypal_logo_icon_168055.png",
        name: "Paypal",
        comments: 3,
      },
      description: "Customer Relationship Management (CRM) Software",
      members: [
        "https://randomuser.me/api/portraits/men/23.jpg",
        "https://randomuser.me/api/portraits/men/45.jpg",
        "https://randomuser.me/api/portraits/men/67.jpg",
        "https://randomuser.me/api/portraits/men/89.jpg",
      ],
      categories: [
        {
          name: "Category 6",
          color: "#ffb400",
        },
        {
          name: "Category 7",
          color: "#01a049",
        },
      ],
      tags: ["#business", "#website"],
      nextMeeting: [
        {
          name: "In 30 minutes",
          color: "red",
        },
      ],
    },
    {
      key: "5",
      brand: {
        logo: "https://i.gadgets360cdn.com/large/disney_plus_hotstar_logo_1583901149861.jpg",
        name: "Disney+Hotstar",
        comments: 7,
      },
      description: "Social Media Management Tool for Marketing Professionals",
      members: [
        "https://randomuser.me/api/portraits/men/56.jpg",
        "https://randomuser.me/api/portraits/men/78.jpg",
      ],
      categories: [
        {
          name: "Category 2",
          color: "#ee4d2e",
        },
      ],
      tags: ["#marketing", "#personal"],
      nextMeeting: [
        {
          name: "After Lunch",
          color: "purple",
        },
      ],
    },
  ];

  // get brands
  const brands = data.map((item) => {
    return {
      label: item.brand.name,
      value: item.brand.name.charAt(0).toUpperCase() + item.brand.name.slice(1),
    };
  });

  // get filtered data based on what input want
  const getFilteredData = (want) => {
    return data.reduce((acc, item) => {
      item[want].forEach((element) => {
        if (want === "categories") {
          if (!acc.find((t) => t.label === element.name)) {
            acc.push({
              label: element.name,
              value: element.name,
            });
          }
        }
        if (want === "tags") {
          if (!acc.find((t) => t.label === element)) {
            acc.push({
              label: element,
              value: element,
            });
          }
        }
      });
      return acc;
    }, []);
  };

  return (
    <div className="w-full shadow-md rounded-md">
      <Header searchText={searchText} setSearchText={setSearchText} />
      <Filters
        data={data}
        brands={brands}
        categories={getFilteredData("categories")}
        tags={getFilteredData("tags")}
        filter={filter}
        setFilter={setFilter}
      />
      <TableWrapper
        searchText={searchText}
        data={data}
        filter={filter}
        setFilter={setFilter}
      />
    </div>
  );
}

export default Dashboard;
