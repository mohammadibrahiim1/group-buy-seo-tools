import { Grid, Text, createStyles } from "@mantine/core";
import React from "react";
import AllTools from "../AllTools/AllTools";
import Header from "../../Components/Header/Header";
import NewDrawer from "../../Components/NewDrawer/NewDrawer";
// import { ContactUs } from "../ContactUs/ContactUs";
import ContactUs from "../ContactUs/ContactUs";
const useStyles = createStyles(() => ({
  container: {
    width: "70%",
    margin: "auto",
    // display: "flex",
    // justifyContent: "space-between",
    // alignItems: "center",
  },
}));

const Shop = () => {
  const { classes } = useStyles();
  return (
    <div>
      <Header></Header>
      <section className={classes.container}>
        <Grid>
          <Grid.Col span={3}>
            <Text>
              <ContactUs></ContactUs>
            </Text>
          </Grid.Col>
          <Grid.Col span={8}>
            <AllTools></AllTools>
          </Grid.Col>
          <Grid.Col span={1}>
            <NewDrawer></NewDrawer>
          </Grid.Col>
        </Grid>
      </section>
    </div>
  );
};

export default Shop;
