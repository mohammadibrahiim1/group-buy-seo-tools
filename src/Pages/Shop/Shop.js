import { Grid, Text, createStyles } from "@mantine/core";
import React from "react";
import AllTools from "../AllTools/AllTools";
import Header from "../../Components/Header/Header";
import NewDrawer from "../../Components/NewDrawer/NewDrawer";
// import { ContactUs } from "../ContactUs/ContactUs";
// import ContactUs from "../ContactUs/ContactUs";
import { FaqWithBg } from "../../Components/FAQ/FAQ";
import { ContactIcons, ContactIconsList } from "../ContactUs/ContactUs";
// import { ContactUs } from "../ContactUs/ContactUs";
const useStyles = createStyles(() => ({
  container: {
    // display: "grid",
    // gridTemplateColumns: "repeat(2,1fr)",
    // justifyContent: "space-between",
    // alignItems: "center",
    width: "70%",
    margin: "auto",
  },
}));

const Shop = () => {
  const { classes } = useStyles();
  return (
    <div>
      <Header></Header>
      <section className={classes.container}>
        <Grid>
          <Grid.Col span={2}>
            <Text>
              <ContactIconsList></ContactIconsList>
            </Text>
          </Grid.Col>
          <Grid.Col span={10}>
            <AllTools></AllTools>
          </Grid.Col>
        </Grid>
      </section>
      <section>
        <div>
          <NewDrawer></NewDrawer>
        </div>
      </section>
      <section>
        <FaqWithBg></FaqWithBg>
      </section>
    </div>
  );
};

export default Shop;
