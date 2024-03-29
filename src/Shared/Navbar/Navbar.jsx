import { useState } from "react";
import { createStyles, Header, Group, Burger, Paper, Transition, rem } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Context/UserContext";
import { toast } from "react-hot-toast";
import { FaUserAlt } from "react-icons/fa";
// import BgColorToggler from "../../Components/BgColorToggler/BgColorToggler";
// import { MantineLogo } from "@mantine/ds";

const HEADER_HEIGHT = rem(60);

const useStyles = createStyles((theme) => ({
  root: {
    position: "fixed",
    zIndex: 1,
    backgroundColor: "#11284B",
    // width: "70%",
    // margin: "auto",
  },

  dropdown: {
    backgroundColor: "#11284B",
    color: "#FFF4E6",
    position: "absolute",
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: "hidden",

    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    width: "70%",
    margin: "auto",
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    // color: "#FFF4E6 !important",
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color: "#FFF4E6",
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      color: "#FFA94D",
      transition: "0.3s",
    },

    [theme.fn.smallerThan("sm")]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },
  logo: {
    color: "#FFF4E6",
    fontWeight: "700",
    "&:hover": {
      color: "#FFA94D",
      transition: "0.3s",
    },
  },
}));

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
    toast.success(" logout successfully ");
  };
  const links = [
    { link: "/", label: "Home" },
    { link: "/shop", label: "Shop" },
    { link: "/dashboard", label: "Dashboard" },
    {
      link: "/authentication",
      label: user?.email ? (
        <div onClick={handleLogOut}>
          <FaUserAlt className="h-6 w-6" />
        </div>
      ) : (
        "Register "
      ),
    },
  ];
  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();

  const items = links.map((link) => (
    <Link
      key={link.label}
      to={link.link}
      className={cx(classes.link, {
        [classes.linkActive]: active === link.link,
      })}
      onClick={() => {
        // event.preventDefault();
        setActive(link.link);
        close();
      }}
    >
      {link.label}
    </Link>
  ));

  return (
    <Header height={HEADER_HEIGHT} className={classes.root}>
      <section className={classes.header}>
        <Link to="/" className={classes.logo}>
          GBSEOTools
        </Link>
        <Group className={classes.links}>{items}</Group>
        <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" color="#FFF4E6" />
        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} style={styles}>
              {items}
            </Paper>
          )}
        </Transition>
      </section>
    </Header>
  );
};

export default Navbar;
