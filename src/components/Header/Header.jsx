import {
  createStyles,
  Container,
  Title,
  Text,
  // Button,
  rem,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor: "#11284b",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "700px",
    // backgroundImage:
    //   "linear-gradient(250deg, rgba(130, 201, 30, 0) 0%, #062343 70%), url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80)",
    paddingTop: `calc(${theme.spacing.xl} * 3)`,
    paddingBottom: `calc(${theme.spacing.xl} * 3)`,
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",

    [theme.fn.smallerThan("md")]: {
      flexDirection: "column",
    },
  },

  image: {
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  content: {
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    // marginRight: `calc(${theme.spacing.xl} * 3)`,

    [theme.fn.smallerThan("md")]: {
      marginRight: 0,
    },
  },

  title: {
    color: theme.white,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    lineHeight: 1.05,
    // maxWidth: rem(500),
    fontSize: rem(48),
    textAlign: "center",

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      fontSize: rem(34),
      lineHeight: 1.15,
    },
  },

  description: {
    color: theme.white,
    opacity: 0.75,
    maxWidth: rem(700),
    margin: "auto",
    textAlign: "center",

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
    },
  },

  control: {
    paddingLeft: rem(50),
    paddingRight: rem(50),
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(19),
    width: "50%",
    margin: "auto",

    backgroundColor: "red",
    [theme.fn.smallerThan("md")]: {
      width: "100%",
    },
  },

  iframe: {
    width: "700px",
    height: "300px",
    margin: "auto",
    marginTop: "70px",
    // [theme.fn.largerThan("sm")]: {
    //   width: "750px",
    //   height: "550px",
    // },
    [theme.fn.smallerThan("lg")]: {
      width: "350px",
      height: "190px",
      [theme.fn.largerThan("sm")]: {
        width: "680px",
        height: "320px",
      },
    },
  },
}));

const Header = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              Valuable{" "}
              <Text component="span" inherit variant="gradient" gradient={{ from: "pink", to: "yellow" }}>
                Group Buy SEO Tools
              </Text>{" "}
              Service at Affordable Price
            </Title>

            <Text className={classes.description} mt={30}>
              As a SEO / Digital Marketer / Website owner, you know how important the SEO is. As a result, you're
              looking for ways to improve your ranking on search engines so more users can find you on the World Wide
              Web. 
            </Text>

            {/* <iframe
              class=" 	aspect-ratio: 16 / 9"
              src="https://www.youtube.com/..."
            ></iframe> */}
            <div>
              <iframe
                className={classes.iframe}
                // width="780"
                // height="221"
                // margin=" 0 auto"
                src="https://www.youtube.com/embed/TOfeDuAYUUI"
                title="How to Use Group Buy SEO Tools | Best Group Buy SEO Tools Service 2020 | Digital Services BD"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>

            {/* <Button className={classes.control} variant="filled" mt={25}>
              Get Started
            </Button> */}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
