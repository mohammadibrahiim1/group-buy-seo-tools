import React, { useContext, useState } from "react";
// import DisplayTools from "../../Components/DisplayTools/DisplayTools";
import "./AllTools.css";
// import ToolsModal from "../../Components/ToolsModal/ToolsModal";
import { ApiContext } from "../../Context/DataContext";
// import CartDrawer from "../../Components/CartDrawer/CartDrawer";
// import Marquee from "react-fast-marquee";
// import Payment from "../../Components/Payment/Payment";
import { Button, Text, Title, createStyles, getStylesRef, rem } from "@mantine/core";
// import { IconShoppingBag } from "@tabler/icons-react";
import { FaInfoCircle, FaShoppingCart } from "react-icons/fa";
import Modal from "../../Components/Modal/Modal";

// import NewDrawer from "../../Components/NewDrawer/NewDrawer";
// import Drawer from "../../Components/Drawer/Drawer";
// import NewDrawer from "../../Components/Drawer/Drawer";
const useStyles = createStyles((theme) => ({
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

  card: {
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    borderTop: "1px solid #F1F3F5",
    borderLeft: "1px solid #F1F3F5",
    height: "237px",
    overflow: "hidden",

    [`&:hover .${getStylesRef("product_img")}`]: {
      transform: "scale(1.08)",
    },

    "&:hover": {
      boxShadow: "0  5px 6px 0 #DCDCDF",
      transition: " 0.5s",
      transform: "scale(1.01)",
    },

    [`&:hover .${getStylesRef("hover_text")}`]: {
      position: "relative",
      bottom: "30px",
      transition: "0.5s",
    },
    // [`&:hover .${getStylesRef("label")}`]: {
    //   position: "absolute",
    //   top: "30px",
    //   transition: "0.5s",
    // },
  },

  imageSection: {
    padding: theme.spacing.md,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderBottom: `${rem(1)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]}`,
  },

  // label: {
  //   marginBottom: theme.spacing.xs,
  //   lineHeight: 1,
  //   fontWeight: 700,
  //   fontSize: theme.fontSizes.xs,
  //   letterSpacing: rem(-0.25),
  //   textTransform: "uppercase",
  // },

  section: {
    padding: theme.spacing.md,
    borderTop: `${rem(1)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]}`,
  },

  icon: {
    marginRight: rem(5),
    color: theme.colorScheme === "dark" ? theme.colors.dark[2] : theme.colors.gray[5],
  },

  container: {
    maxWidth: "1400px",
    margin: "auto",
  },
  card_container: {
    display: "grid",
    gridTemplateColumns: "repeat(5,1fr)",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #F1F3F5",
    borderRight: "1px solid #F1F3F5",
    position: "relative",
    marginTop: "6px",
    // zIndex: 1,
  },
  product_img: {
    width: "140px",
    height: "140px",
    margin: "auto",
    padding: "30px",
    marginTop: "15px",
    ref: getStylesRef("product_img"),
    backgroundSize: "cover",
    transition: "transform 500ms ease",
  },

  hover_text: {
    ref: getStylesRef("hover_text"),
    transition: "0.5s",
  },

  label: {
    position: "absolute",
    zIndex: -1,
    top: 10,
    right: 10,
    transition: "0.5s",
    "&:hover": {
      color: "orangered",
      cursor: "pointer",
    },
  },
  cart_button: {
    position: "absolute",
    zIndex: -1,
    top: 40,
    right: 10,
    transition: "0.5s",
    "&:hover": {
      color: "orangered",
      cursor: "pointer",
    },
  },
}));

const AllTools = () => {
  const [showMore, setShowMore] = useState(10);
  const { classes } = useStyles();
  const { tools, addToCart } = useContext(ApiContext);
  console.log(tools);
  const [toolDetails, setToolDetails] = useState({});
  console.log(toolDetails);
  const handleShowMore = () => {
    setShowMore((preValue) => preValue + 5);
  };

  const addToolInfo = (selectItem) => {
    setToolDetails(selectItem);
  };

  return (
    <div>
      <div>
        <Title className={classes.title}>
          <Text component="span" inherit>
            Showing {showMore} of {tools.length} Tools
          </Text>
        </Title>
      </div>
      <div>
        <div className={classes.card_container}>
          {tools.slice(0, showMore).map((tool) => (
            <>
              <div className={classes.card}>
                <img className={classes.product_img} src={tool.image} alt={tool.name} />

                <div className={classes.hover_text}>
                  <Text fz="md" c={"#D00906"} fw={700} align="center" pt={50} px={10}>
                    {tool.name}
                  </Text>

                  <Text fz="md" c={"#C1C2C5"} fw={700} align="center">
                    ${tool.price}
                  </Text>
                </div>

                <label className={classes.label} htmlFor="my_modal_6" onClick={() => addToolInfo(tool)}>
                  <FaInfoCircle className="w-5 h-5" />
                </label>

                <div className={classes.cart_button} onClick={() => addToCart(tool)} size="xs" variant="subtle">
                  <FaShoppingCart className="w-5 h-5" />
                </div>
              </div>
            </>
          ))}
        </div>
        <Modal toolDetails={toolDetails}></Modal>
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
