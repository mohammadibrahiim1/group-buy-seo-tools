import { useDisclosure } from "@mantine/hooks";
import { Drawer, Button, Group, createStyles } from "@mantine/core";
import CartTool from "../../Pages/Cart/CartTool";
import { useContext } from "react";
import { ApiContext } from "../../Context/DataContext";
import { FaShoppingCart } from "react-icons/fa";
const useStyles = createStyles(() => ({
  drawerButton: {
    position: "fixed",
    top: "70%",
    left: "93%",
    width: "115px",
    backgroundColor: "orangered",
    borderRadius: "5px",
  },
}));

const NewDrawer = () => {
  const { classes } = useStyles();
  const [opened, { open, close }] = useDisclosure(false);
  const { cart, handleRemoveProduct } = useContext(ApiContext);

  return (
    <>
      <Drawer opened={opened} onClose={close} position="right" size={"sm"} title="Authentication">
        {/* Drawer content */}
        <p>cart</p>

        <div>
          {cart.map((tool) => (
            <CartTool tool={tool} handleRemoveProduct={handleRemoveProduct} key={tool.id}></CartTool>
          ))}
        </div>
      </Drawer>

      <Group className={classes.drawerButton}>
        <Button size="xs" variant="gradient" gradient={{ from: "orange", to: "red" }} onClick={open}>
          <FaShoppingCart className=" h-5 w-5 mr-2" /> <span className="text-sm">See Cart</span>
        </Button>
      </Group>
    </>
  );
};

export default NewDrawer;
