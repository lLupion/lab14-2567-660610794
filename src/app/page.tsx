"use client";
import { Container, Text, Title ,Rating, Textarea, Button, Divider, Group, Pagination} from "@mantine/core";

export default function Home() {
  return (
    <Container size="600px">
      <Title order={2}>Food Review 🍕</Title>
      <Title order={4} mt="sm">Your rating</Title>
      <Rating defaultValue={0} count={5} size="lg"/>

      <Textarea
        fw={300}
        label="Your review"
        placeholder="Do you enjoy eating?"
        mt="xs"
        autosize
        minRows={3}
        maxRows={3}
      />

      <Button fw={500}mt="xs" variant="filled" color="orange">Submit Review</Button>

      <Divider my="md" />

      <Group justify="center" >
        <Title order={4}>Elon Musk</Title>
        <Rating value={5} readOnly size="sm"/>
      </Group>

      <Text size="md" fw={300} ta="center" c="dimmed">
        Best pizza in this world. I give you X score.
      </Text>

      <Divider my="md" />

      <Group justify="center" >
        <Title order={4}>Mark Zuck</Title>
        <Rating value={4} readOnly size="sm"/>
      </Group>

      <Text size="md" fw={300} ta="center" c="dimmed">
        My favourite part is pepperoni
      </Text>

      <Group fw={300} justify="center" mt="md">
        <Pagination  total={20} boundaries={1} defaultValue={1} variant="filled" color="orange" />
      </Group> 


      <Text fw={300} ta="center" my="sm" c="dimmed">
        Copyright © 2024 Wichuda Rotna 660610794
      </Text>
    </Container>
  );
}