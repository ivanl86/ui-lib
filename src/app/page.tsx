import { Box } from "./lib/ui/box";
import { Heading, Highlight, StyledText, Text } from "./lib/ui/text";
import { Center, Circle, Flex, Grid, Square, Stack } from "./lib/ui/layout";
import { Input } from "./lib/ui/input";
import { Button } from "./lib/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="p-12">
      <Box h={24} w={"full"} maxW={96} bg="primary" color="pale">
        This is a box
      </Box>
      <Box aspectRatio="21/9" w={"full"} bg="success">
        This is a 21/9 box
      </Box>
      <Flex
        h={44}
        bg="danger"
        // direction="col-r"
        // place={{ content: "center", items: "center", self: "center" }}
        // textAlign="center"
        gap={4}
      >
        <Box>This is the first nested box</Box>
        <Box>This is the second nested box</Box>
        <Box>This is the third nested box</Box>
        <Box>This is the fourth nested box</Box>
      </Flex>

      <Stack
        // w={"full"}
        // reverse
        // place={{ content: "center", items: "center" }}
        gap={4}
      >
        <Box>This is the first nested box</Box>
        <Box>This is the second nested box</Box>
        <Box>This is the third nested box</Box>
        <Box>This is the fourth nested box</Box>
      </Stack>

      <Button variant="link" size="xl" color="success" className="">
        <Link href="/">This is a button</Link>
      </Button>

      <Input
        variant="filled"
        maxW={"xl"}
        size="lg"
        color="secondary"
        // disabled
        placeholder="This is an input"
        className="my-4"
      />

      <Text
        bg="secondary"
        text="3xl"
        weight="light"
        maxLine={3}
        textAlign="start"
        color="pale"
        transform="lower"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi voluptate
        accusamus ipsum odit ipsa qui asperiores beatae sit eos quisquam quod
        illo reiciendis placeat quos illum enim, sunt non voluptates.
      </Text>

      <StyledText as="mark" text="3xl">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, fugiat.
        Accusamus dolores exercitationem iusto sapiente aspernatur beatae eum
        totam facere quis officia ut, eligendi, voluptate, vel tenetur delectus
        fuga corrupti!
      </StyledText>

      <Heading as="h1" text="9xl">
        H1
      </Heading>
      <Heading text="8xl">H2</Heading>
      <Heading as="h3" text="7xl">
        H3
      </Heading>
      <Heading as="h4" text="6xl">
        H4
      </Heading>
      <Heading as="h5" text="5xl">
        H5
      </Heading>
      <Heading as="h6" text="4xl">
        H6
      </Heading>

      <Highlight
        query="highlight"
        qBg="yellow"
        qText="6xl"
        qWeight="bold"
        // qMaxLine={2}
        // qTextAlign="end"
        // qColor="secondary"
        qTransform="upper"
        bg="success"
        text="4xl"
        weight="light"
        maxLine={6}
        // textAlign="center"
        color="primary" // need to specify text color
        transform="cap"
      >
        This is a highlighted text. Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Nobis quis a consequuntur, maiores eligendi ab labore.
        Repudiandae illum corrupti sit ut nemo reprehenderit. Repellat
        consequatur voluptatum libero laboriosam totam praesentium!
      </Highlight>

      <Center h={44} bg="primary">
        <div>This is a centered box</div>
      </Center>

      <Square bg="success">This is a square</Square>

      <Circle bg="success">This is a circle</Circle>

      <Grid text="xl" cols={2} gap={4} className="overflow-hidden">
        <Grid.Item bg="primary" colSpan={2} className="overflow-hidden">
          This is the first nested grid
        </Grid.Item>
        <Grid.Item bg="primary" rowSpan={2} className="overflow-hidden">
          This is the second nested grid
        </Grid.Item>
        <Grid.Item bg="primary" className="overflow-hidden">
          This is the third nested grid
        </Grid.Item>
        <Grid.Item bg="primary" className="overflow-hidden">
          This is the fourth nested grid
        </Grid.Item>
        <Grid.Item bg="primary" className="overflow-hidden">
          This is the fifth nested grid
        </Grid.Item>
        <Grid.Item bg="primary" className="overflow-hidden">
          This is the sixth nested grid
        </Grid.Item>
        <Grid.Item bg="primary" className="overflow-hidden">
          This is the seventh nested grid
        </Grid.Item>
      </Grid>
    </div>
  );
}
