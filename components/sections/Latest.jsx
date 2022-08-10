// import NextImage from "next/image";
import { Box, Heading, Link, Stack, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import latests from "@/data/latest.json";

export const Latest = () => {
  const bgColor = useColorModeValue("gray.200", "#1e2732");
  const linkColor = useColorModeValue("blue.500", "blue.400");
  const textColor = useColorModeValue("gray.800", "gray.300");

  return (
    <Box as="section" w="full" minH={48} mt={24}>
      <Heading as="h4" fontSize="3xl" mb={8}>
        Latest?
      </Heading>

      <Text fontSize={["md", "lg"]} color={textColor} mb={8}>
        This latest section may not always update in real time. <i className="twa twa-snowman"></i>
      </Text>

      <Stack direction={["column", "row"]} spacing={8}>
        {latests.map((latest, index) => (
          <Box key={index} borderRadius={25} bgColor={bgColor} textColor={textColor} boxShadow="md" p={8}>
            <VStack align="start" spacing={6}>
              <Link href={latest.url} fontSize={["xl", "2xl"]} fontWeight="semibold" color={linkColor} isExternal>
                {latest.title} <ExternalLinkIcon mx="4px" mb="4px" />
              </Link>
              <Text>{latest.desc}</Text>
              <Text opacity={0.75}>{latest.date}</Text>
            </VStack>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};
