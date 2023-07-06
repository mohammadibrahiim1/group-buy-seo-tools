import React from "react";
import "./Tool.css";
import { Badge, Button, Card, Group, Image, Text } from "@mantine/core";

const Tool = ({ tool }) => {
  const { image, name, price, status, limit } = tool;
  //   console.log(tool);
  return (
    <div>
      <Card shadow="sm" padding="lg" radius="md" withBorder h={350} w={310}>
        <Card.Section component="a" href="https://mantine.dev/">
          <Image src={image} height={160} alt="Norway" />
        </Card.Section>

        <Group position="apart" mt="md" mb="xs">
          <Text weight={500}>{name}</Text>
          <div>
            <Badge color="pink" variant="light" mr={4}>
              ${price}
            </Badge>
            <Badge color="pink" variant="light">
              {status}
            </Badge>
          </div>
        </Group>

        <Text size="sm" color="dimmed">
          {limit.slice(0, 18)}...
        </Text>

        <div className="flex justify-between items-center mt-10">
          <Button variant="light" color="red" fullWidth mt="md" radius="md">
            Add to cart
          </Button>
          <Button variant="light" color="red" fullWidth mt="md" radius="md">
            Read more
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Tool;
