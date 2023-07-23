import React, { useContext, useState } from "react";
// import DisplayTools from "../../Components/DisplayTools/DisplayTools";
import "./AllTools.css";
import ToolsModal from "../../Components/ToolsModal/ToolsModal";
import { ApiContext } from "../../Context/DataContext";
// import CartDrawer from "../../Components/CartDrawer/CartDrawer";
// import Marquee from "react-fast-marquee";
import Payment from "../../Components/Payment/Payment";
import { Text, Title, createStyles, rem } from "@mantine/core";
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
    // marginTop: theme.spacing.xl,
    color: theme.dark,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    // lineHeight: 1.05,

    fontSize: rem(42),

    marginTop: "25px",
    // marginBottom: "100px",

    // [theme.fn.smallerThan("lg")]: {
    //   maxWidth: "100%",
    //   fontSize: rem(34),
    //   lineHeight: 1.15,
    // },
  },

  // allToolSection: {
  //   width: "70%",
  //   margin: "0 auto",
  // },
  toolsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "12px",
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
}));

const AllTools = () => {
  const { classes } = useStyles();
  const { tools, addToCart } = useContext(ApiContext);
  const [toolDetails, setToolDetails] = useState();

  return (
    <div className="bg-base-100">
      <div>
        <Title className={classes.title}>
          <Text component="span" inherit variant="gradient" gradient={{ from: "teal", to: "blue" }}>
            See Our SEO Tools
          </Text>
        </Title>
      </div>
      <div className={classes.allToolSection}>
        <div className={classes.toolsContainer}>
          {tools.slice(0, 6).map((tool) => (
            <>
              <div class="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden my-4">
                <img class="w-full h-56 p-2 rounded-md object-cover object-center" src={tool.image} alt="avatar" />

                <div class="py-4 px-6">
                  <h1 class="text-xl font-semibold text-primary">{tool.name}</h1>
                  <div className="flex justify-between">
                    <p class="py-2 text-sm text-success font-semibold">{tool.status}</p>
                    <p class="py-2 text-sm text-success font-semibold">{tool.price} BDT</p>
                  </div>
                  <div class="flex justify-between mt-4 text-gray-700">
                    <button class="px-2 text-sm p-1 rounded-md btn-secondary" onClick={() => addToCart(tool)}>
                      add to cart
                    </button>
                    <label
                      onClick={() => setToolDetails(tool)}
                      htmlFor="my-modal-3"
                      className="px-2 text-sm p-1 rounded-md btn-info cursor-pointer"
                    >
                      details
                    </label>
                  </div>

                  <div class="flex items-center mt-4 text-gray-700">
                    <h1 class="px-2 text-sm text-primary font-semibold">limits : {tool?.limit?.slice(0, 23)}...</h1>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>

        <div>{toolDetails && <ToolsModal toolDetails={toolDetails} key={toolDetails.id}></ToolsModal>}</div>
      </div>

      {/* <div>
        <Payment></Payment>
      </div> */}
    </div>
  );
};

export default AllTools;
