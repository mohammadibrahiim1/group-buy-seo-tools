import { createStyles, ThemeIcon, Text, SimpleGrid, Box, Stack } from "@mantine/core";
import { IconSun, IconPhone, IconMapPin, IconAt } from "@tabler/icons-react";

// type ContactIconVariant = 'white' | 'gradient';

// interface ContactIconStyles {
//   variant: ContactIconVariant;
// }

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: "flex",
    alignItems: "center",
    color: theme.white,
  },

  icon: {
    marginRight: theme.spacing.md,
    // backgroundImage:
    //   variant === "gradient"
    //     ? `linear-gradient(135deg, ${theme.colors[theme.primaryColor][4]} 0%, ${
    //         theme.colors[theme.primaryColor][6]
    //       } 100%)`
    //     : "none",
    backgroundColor: "black",
  },

  title: {
    color: theme.colors.gray[6],
  },

  description: {
    color: theme.black,
  },
}));



function ContactIcon({ icon: Icon, title, description, variant = "gradient", className, ...others }) {
  const { classes, cx } = useStyles({ variant });
  return (
    <div className={cx(classes.wrapper, className)} {...others}>
      {variant === "gradient" ? (
        <ThemeIcon size={40} radius="md" className={classes.icon}>
          <Icon size="1.5rem" />
        </ThemeIcon>
      ) : (
        <Box mr="md">
          <Icon size="1.5rem" />
        </Box>
      )}

      <div>
        <Text size="xs" className={classes.title}>
          {title}
        </Text>
        <Text className={classes.description}>{description}</Text>
      </div>
    </div>
  );
}



const MOCKDATA = [
  { title: "Email", description: "hello@mantine.dev", icon: IconAt },
  { title: "Phone", description: "+49 (800) 335 35 35", icon: IconPhone },
  { title: "Address", description: "844 Morris Park avenue", icon: IconMapPin },
  { title: "Working hours", description: "8 a.m. – 11 p.m.", icon: IconSun },
];

export const ContactIconsList = () => {
  const items = MOCKDATA.map((item, index) => <ContactIcon key={index} {...item} />);
  return <Stack>{items}</Stack>;
};
