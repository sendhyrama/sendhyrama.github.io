import NextImage from "next/image";
import { ButtonGroup, Flex, Heading, IconButton, Link, Stack, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import { VscGithub, VscInfo, VscRocket } from "react-icons/vsc";

export const ProjectCard = ({ project }) => {
  const { title, description, repository, preview, information, thumbnail } = project;
  const { width, height } = project.thumbnail.fields.file.details.image;

  const bgImg = useColorModeValue("gray.400", "gray.700");
  const bgImgHover = useColorModeValue("gray.300", "gray.800");

  const bgColor = useColorModeValue("gray.200", "#12151d");
  const linkColor = useColorModeValue("blue.600", "blue.300");

  return (
    <>
      <Stack direction={["column", "row"]} w="full" minH="270px" bgColor={bgColor} borderRadius={4} spacing={2}>
        <Flex
          w={["full", "50%"]}
          justify="center"
          align="end"
          bgColor={bgImg}
          overflow="hidden"
          transition="0.3s"
          _hover={{ bgColor: bgImgHover }}
        >
          <Flex
            w="92%"
            h="fit-content"
            justify="end"
            align="end"
            pos="relative"
            bottom={["-16px", "-12px"]}
            boxShadow="xl"
            borderRadius={4}
            transition="0.3s"
            overflow="hidden"
            _hover={{ transform: `translate(0, -6px)`, boxShadow: "md", cursor: "pointer" }}
          >
            <NextImage
              width={width}
              height={height}
              objectFit="contain"
              src={"https:" + thumbnail.fields.file.url}
              alt="project thumbnail"
              blurDataURL={"https:" + thumbnail.fields.file.url}
              placeholder="blur"
              quality={90}
            />
          </Flex>
        </Flex>

        <VStack w={["full", "50%"]} align="start" justify="space-between" p={[3, 6]} spacing={[8, 4]}>
          <VStack align="start" spacing={[4, 6]} lineHeight={1.8}>
            <Heading as="h3" fontSize={["xl", "2xl"]} lineHeight={1.6} color={linkColor}>
              {title}
            </Heading>

            <Text opacity={0.75}>{description}</Text>
          </VStack>

          <ButtonGroup w="full" justifyContent="end" variant="ghost" spacing={2} pb={[4, 0]}>
            <Link href={repository} display={repository ? "block" : "none"} isExternal>
              <IconButton colorScheme="gray" aria-label="Repository Button" icon={<VscGithub size={24} />} />
            </Link>

            <Link href={preview} display={preview ? "block" : "none"} isExternal>
              <IconButton colorScheme="blue" aria-label="Preview Button" icon={<VscRocket size={24} />} />
            </Link>

            <Link href={information} display={information ? "block" : "none"} isExternal>
              <IconButton colorScheme="yellow" aria-label="Information Button" icon={<VscInfo size={24} />} />
            </Link>
          </ButtonGroup>
        </VStack>
      </Stack>
    </>
  );
};
