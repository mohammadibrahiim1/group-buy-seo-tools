import {
  createStyles,
  Title,
  Container,
  Accordion,
  ThemeIcon,
  MantineProvider,
  getStylesRef,
  rem,
  Text,
} from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    minHeight: rem(820),
    // backgroundImage: `radial-gradient(${theme.colors[theme.primaryColor][6]} 0%, ${
    //   theme.colors[theme.primaryColor][4]
    // } 100%)`,
    // backgroundRepeat: "no-repeat",
    // backgroundPosition: "top left",
    position: "relative",
    color: theme.black,
  },

  title: {
    // color: theme.orange,
    fontSize: 42,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginTop: `calc(${theme.spacing.xl} * 1.5)`,
  },

  item: {
    backgroundColor: theme.white,
    borderBottom: 0,
    borderRadius: theme.radius.md,
    boxShadow: theme.shadows.lg,
    overflow: "hidden",
  },

  control: {
    fontSize: theme.fontSizes.lg,
    padding: `${theme.spacing.lg} ${theme.spacing.xl}`,
    color: theme.black,

    "&:hover": {
      backgroundColor: "transparent",
    },
  },

  content: {
    paddingLeft: theme.spacing.xl,
    lineHeight: 1.6,
    color: theme.black,
  },

  icon: {
    ref: getStylesRef("icon"),
    marginLeft: theme.spacing.md,
  },

  // gradient: {
  //   backgroundImage: `radial-gradient(${theme.colors[theme.primaryColor][6]} 0%, ${
  //     theme.colors[theme.primaryColor][0]
  //   } 100%)`,
  // },

  itemOpened: {
    [`& .${getStylesRef("icon")}`]: {
      transform: "rotate(45deg)",
    },
  },

  button: {
    display: "block",
    marginTop: theme.spacing.md,

    [theme.fn.smallerThan("sm")]: {
      display: "block",
      width: "100%",
    },
  },
}));

const placeholder =
  "It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can’t multiply, and it dies.It has no eyeballs, so it can’t see. It checks its surroundings via the ultrasonic waves it emits from its mouth.";

export const FaqWithBg = () => {
  const { classes } = useStyles();
  return (
    <MantineProvider inherit theme={{}}>
      <div className={classes.wrapper}>
        <Container size="lg">
          <Title
            variant="gradient"
            gradient={{ from: "orange", to: "red", deg: 105 }}
            align="center"
            className={classes.title}
          >
            Frequently Asked Questions
          </Title>
          <Text mb={15} mt={5} variant="gradient" align="center" gradient={{ from: "teal", to: "lime", deg: 105 }}>
            Ask, what you want to know?
          </Text>

          <Accordion
            chevronPosition="right"
            defaultValue="reset-password"
            chevronSize={50}
            variant="separated"
            disableChevronRotation
            chevron={
              <ThemeIcon
                radius="xl"
                variant="gradient"
                gradient={{ from: "orange", to: "red", deg: 105 }}
                // className={classes.gradient}
                size={32}
              >
                <IconPlus size="1.05rem" stroke={1.5} />
              </ThemeIcon>
            }
          >
            <Accordion.Item className={classes.item} value="reset-password">
              <Accordion.Control>How can I reset my password?</Accordion.Control>
              <Accordion.Panel>{placeholder}</Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item className={classes.item} value="another-account">
              <Accordion.Control>Can I create more that one account?</Accordion.Control>
              <Accordion.Panel>{placeholder}</Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item className={classes.item} value="newsletter">
              <Accordion.Control>How can I subscribe to monthly newsletter?</Accordion.Control>
              <Accordion.Panel>{placeholder}</Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item className={classes.item} value="credit-card">
              <Accordion.Control>Do you store credit card information securely?</Accordion.Control>
              <Accordion.Panel>{placeholder}</Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item className={classes.item} value="payment">
              <Accordion.Control>What payment systems to you work with?</Accordion.Control>
              <Accordion.Panel>{placeholder}</Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </Container>
      </div>
    </MantineProvider>
  );
};
