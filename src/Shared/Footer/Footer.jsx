import { createStyles, Text, ActionIcon, Group, rem } from "@mantine/core";
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: rem(160),
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
    borderTop: `${rem(1)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]}`,
  },

  logo: {
    maxWidth: rem(400),

    [theme.fn.smallerThan("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    [theme.fn.smallerThan("lg")]: {
      maxWidth: rem(300),
    },
  },

  description: {
    marginTop: rem(5),

    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
      textAlign: "center",
    },
  },

  inner: {
    width: "70%",
    margin: "auto",
    display: "flex",
    justifyContent: "space-between",

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
    [theme.fn.smallerThan("lg")]: {
      width: "90%",
      margin: "auto",

      // flexDirection: "column",
      // alignItems: "center",
    },
  },

  groups: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    // flexWrap: "wrap",

    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  wrapper: {
    width: rem(160),
  },

  link: {
    display: "block",
    color: theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[6],
    fontSize: theme.fontSizes.sm,
    paddingTop: rem(3),
    paddingBottom: rem(3),

    "&:hover": {
      textDecoration: "underline",
    },
  },

  title: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: `calc(${theme.spacing.xs} / 2)`,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },

  afterFooter: {
    // width: "50%",
    // margin: "auto",
    // display: "flex",
    // justifyContent: "space-between",
    // alignItems: "center",
    marginTop: theme.spacing.xl,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    borderTop: `${rem(1)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]}`,

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
    },
  },

  social: {
    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
    },
  },
}));

const data = [
  {
    links: [
      { label: "Shop", link: "/Shop" },
      { label: "Contact", link: "/Contact" },
      { label: "Privacy & Policy", link: "/Privacy & policy" },
      { label: "About", link: "/About" },
    ],
  },
];
const Footer = () => {
  const { classes } = useStyles();

  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text key={index} className={classes.link} component="a" href={link.link} onClick={() => link.link}>
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <section className={classes.inner}>
        <div className={classes.logo}>
          <Text fz={18} fw={600} c={"#FF922B"}>
            {" "}
            GBSBTools
          </Text>

          <Text size="xs" color="dimmed" className={classes.description}>
            GroupBuySEO offers affordable SEO tools for collective purchases, enabling access to premium resources at a
            fraction of the cost.
          </Text>
        </div>
        <Group spacing={0} className={classes.social} position="right" noWrap>
          <ActionIcon size="lg">
            <IconBrandTwitter size="1.5rem" stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandYoutube size="1.5rem" stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandInstagram size="1.5rem" stroke={1.5} />
          </ActionIcon>
        </Group>
        <div className={classes.groups}>{groups}</div>
      </section>
      <section className={classes.afterFooter}>
        <Text color="dimmed" size="sm" align="center">
          © 2023 Author Safiul Alom. All rights reserved.
        </Text>
      </section>
    </footer>
  );
};

export default Footer;
