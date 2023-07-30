import React, { useContext, useState } from "react";
// import DisplayTools from "../../Components/DisplayTools/DisplayTools";
import "./AllTools.css";
import ToolsModal from "../../Components/ToolsModal/ToolsModal";
import { ApiContext } from "../../Context/DataContext";
// import CartDrawer from "../../Components/CartDrawer/CartDrawer";
// import Marquee from "react-fast-marquee";
// import Payment from "../../Components/Payment/Payment";
import { Badge, Button, Card, Group, Image, Text, Title, createStyles, rem } from "@mantine/core";
import { IconShoppingBag } from "@tabler/icons-react";
import { MdInfo } from "react-icons/md";
import Modal from "../../Components/Modal/Modal";

// import NewDrawer from "../../Components/NewDrawer/NewDrawer";
// import Drawer from "../../Components/Drawer/Drawer";
// import NewDrawer from "../../Components/Drawer/Drawer";
const useStyles = createStyles((theme) => ({
  card_container: {
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "14px",
  },

  card: {
    width: "262px",
    height: "299px",
    border: "1px solid #f8f8f8",
    "&:hover": {
      boxShadow: "0 8px 16px 0 rgba(0,0,0,0.1), 0 5px 20px 0 rgba(0,0,0,0.1) ",
      transition: "0.3s",
    },
  },

  card_footer_container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "12px",
    marginTop: "10px",
  },

  btn: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: "9px",
    paddingLeft: "7px",
    borderRadius: "11px",
    cursor: "pointer",
    color: "#FF7F7F",
    backgroundColor: "#FFF !important",
    border: "1px solid #FFF",
    boxShadow: "0 8px 16px 0 rgba(0,0,0,0.1), 0 5px 20px 0 rgba(0,0,0,0.1) ",

    "&:hover": {
      backgroundColor: "#FF7F7F !important",
      border: "1px solid #FF7F7F",
      color: "#FFFFFF",
      transition: ".5s",
    },
  },

  item: {
    display: "flex",
  },

  itemIcon: {
    padding: theme.spacing.xs,
    marginRight: theme.spacing.md,
  },

  itemTitle: {
    marginBottom: `calc(${theme.spacing.xs} / 2)`,
  },

  supTitle: {
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: 800,
    fontSize: theme.fontSizes.sm,
    color: theme.fn.variant({ variant: "light", color: theme.primaryColor }).color,
    letterSpacing: rem(0.5),
  },

  title: {
    lineHeight: 1,
    textAlign: "start",
    color: theme.dark,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 500,
    fontSize: rem(16),
    marginTop: "90px",
  },

  toolsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "12px",
    marginTop: "5px",
  },

  description: {
    textAlign: "center",
    marginTop: theme.spacing.xs,
  },

  highlight: {
    backgroundColor: theme.fn.variant({
      variant: "light",
      color: theme.primaryColor,
    }).background,
    padding: rem(5),
    paddingTop: 0,
    borderRadius: theme.radius.sm,
    display: "inline-block",
    color: theme.colorScheme === "dark" ? theme.white : "inherit",
  },
  showMoreButton: {
    width: "115px",
    backgroundColor: "orangered",
    borderRadius: "5px",
  },
}));

const AllTools = () => {
  const [showMore, setShowMore] = useState(8);
  const { classes } = useStyles();
  const { tools, addToCart } = useContext(ApiContext);
  console.log(tools);
  const [toolDetails, setToolDetails] = useState({});
  console.log(toolDetails);
  const handleShowMore = () => {
    setShowMore((preValue) => preValue + 4);
  };

  const addToolInfo = (selectItem) => {
    setToolDetails(selectItem);
  };

  return (
    <div>
      <div>
        <Title className={classes.title}>
          <Text component="span" inherit variant="gradient" gradient={{ from: "teal", to: "blue" }}>
            Showing {showMore} of {tools.length} Tools
          </Text>
        </Title>
      </div>
      <div>
        <div className={classes.toolsContainer}>
          {tools?.slice(0, showMore)?.map((tool) => (
            <>
              <Card className={classes.card} padding="lg" radius="md" shadow="sm">
                <Card.Section>
                  <Image src={tool.image} height={160} alt={tool.name} />
                  <div className="p-3">
                    <div className="flex justify-between items-center ">
                      <Text fz="sm" weight={700}>
                        {tool.name}
                      </Text>
                      <Badge color="pink" variant="light">
                        {tool.status}
                      </Badge>
                    </div>

                    <div className="flex justify-between items-center pt-2 ">
                      <Text size="xs" color="dimmed">
                        Limit: {tool.limit?.slice(0, 30)}...
                      </Text>
                      <label htmlFor="my_modal_6" onClick={() => addToolInfo(tool)}>
                        <MdInfo className="cursor-pointer hover:text-[#FF7F7F] duration-700" />
                      </label>
                    </div>

                    <div className={classes.card_footer_container}>
                      <Text size="lg" color="dark" weight={700}>
                        ${tool.price}
                      </Text>
                      <label onClick={() => addToCart(tool)} className={classes.btn}>
                        <IconShoppingBag height={16} />
                        <Text weight={700} size={"sm"}>
                          add
                        </Text>
                      </label>
                    </div>
                  </div>
                </Card.Section>
                <Modal toolDetails={toolDetails}></Modal>
              </Card>
            </>
          ))}
        </div>
      </div>
      <div className="text-center mt-5">
        <Button variant="outline" size="sm" onClick={handleShowMore}>
          show more
        </Button>
      </div>
    </div>
  );
};

export default AllTools;
