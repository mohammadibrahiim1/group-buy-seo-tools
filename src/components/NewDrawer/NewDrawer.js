import { useDisclosure } from "@mantine/hooks";
import { Drawer, Button, Group, createStyles } from "@mantine/core";
import CartTool from "../../Pages/Cart/CartTool";
import { useContext } from "react";
import { ApiContext } from "../../Context/DataContext";
const useStyles = createStyles(() => ({
  drawerButton: {
    position: "fixed",
    right: "2%",
  },
}));

const NewDrawer = () => {
  const { classes } = useStyles();
  const [opened, { open, close }] = useDisclosure(false);
  const { cart, handleRemoveProduct } = useContext(ApiContext);

  return (
    <>
      <Drawer opened={opened} onClose={close} position="right" title="Authentication">
        {/* Drawer content */}
        <p>cart</p>

        <div>
          {cart.map((tool) => (
            <CartTool tool={tool} handleRemoveProduct={handleRemoveProduct} key={tool.id}></CartTool>
          ))}
        </div>
      </Drawer>

      <Group className={classes.drawerButton}>
        <Button onClick={open}>Open Drawer</Button>
      </Group>
    </>
  );
};

export default NewDrawer;
