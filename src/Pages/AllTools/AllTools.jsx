import React, { useContext, useState } from "react";
// import DisplayTools from "../../Components/DisplayTools/DisplayTools";
import "./AllTools.css";
import ToolsModal from "../../Components/ToolsModal/ToolsModal";
import { ApiContext } from "../../Context/DataContext";
// import CartDrawer from "../../Components/CartDrawer/CartDrawer";
// import Marquee from "react-fast-marquee";
// import Payment from "../../Components/Payment/Payment";
import { Badge, Button, Card, Group, Image, Text, Title, createStyles, rem } from "@mantine/core";
// import { FaShoppingCart } from "react-icons/fa";

// import NewDrawer from "../../Components/NewDrawer/NewDrawer";
// import Drawer from "../../Components/Drawer/Drawer";
// import NewDrawer from "../../Components/Drawer/Drawer";
const useStyles = createStyles((theme) => ({
  // wrapper: {
  //   // border: "1px solid gray",
  //   padding: `calc(${theme.spacing.xl} * 2) ${theme.spacing.xl}`,
  //   // paddingTop: rem(80),
  //   // paddingBottom: rem(50),
  //   width: "70%",
  //   margin: "auto",
  //   [theme.fn.smallerThan("md")]: {
  //     width: "100%",
  //     margin: "auto",
  //   },
  // },

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
  const [showMore, setShowMore] = useState(4);
  const { classes } = useStyles();
  const { tools, addToCart } = useContext(ApiContext);
  const [toolDetails, setToolDetails] = useState();

  const handleShowMore = () => {
    setShowMore((preValue) => preValue + 1);
  };

  return (
    <div className="bg-base-100">
      <div>
        <Title className={classes.title}>
          <Text component="span" inherit variant="gradient" gradient={{ from: "teal", to: "blue" }}>
            Showing {showMore} of {tools.length} Tools
          </Text>
        </Title>
      </div>
      <div className={classes.allToolSection}>
        <div className={classes.toolsContainer}>
          {tools.slice(0, showMore).map((tool) => (
            <>
              <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Card.Section>
                  <Image src={tool.image} height={160} alt="Norway" />
                </Card.Section>

                <Group position="apart" mt="md" mb="xs">
                  <Text weight={500}>{tool.name}</Text>
                  <Badge color="pink" variant="light">
                    {tool.status}
                  </Badge>
                </Group>

                <Text size="sm" color="dimmed">
                  {tool.text}
                </Text>

                <Button variant="light" color="teal" fullWidth mt="md" radius="md" onClick={() => addToCart(tool._id)}>
                  add to cart
                </Button>
              </Card>
            </>
          ))}
        </div>

        <div>{toolDetails && <ToolsModal toolDetails={toolDetails} key={toolDetails.id}></ToolsModal>}</div>
      </div>
      <div className="w-1/2 m-auto my-5">
        <Button variant="outline" size="sm" onClick={handleShowMore}>
          show more
        </Button>
      </div>
    </div>
  );
};

export default AllTools;
