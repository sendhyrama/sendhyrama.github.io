/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import data from "@/data/about.json";
import socials from "@/data/socials.json";
import { Box, Grid, Heading, Link, ListItem, Text, UnorderedList, useColorModeValue, VStack } from "@chakra-ui/react";
import BackButton from "@/components/buttons/BackButton";
import { InlineLink } from "@/components/link/InlineLink";
import siteConfig from "@/config/siteConfig";

export default function About() {
  const bgColor = useColorModeValue("gray.200", "#12151d");
  const textColor = useColorModeValue("gray.800", "gray.300");
  const linkColor = useColorModeValue("blue.600", "blue.400");
  const target = siteConfig.links;

  return (
    <>
      <Head>
        <title>About - Sendhyrama's Web</title>
      </Head>

      <Box textAlign="center" mb={10}>
        <Heading as="h1" fontSize="4xl">
          About Me
        </Heading>
      </Box>

      <VStack w="full" bgColor={bgColor} p={["6", "12"]} borderRadius="25px" spacing={[8, 16]}>
        <Box w="full">
          <VStack fontSize={["md", "lg"]} textColor={textColor} lineHeight={1.8} spacing={6}>
            <Text>
              I am Sendhy Ramadhinata, an undergraduate student of Information System, Computer Science Faculty at {" "} <InlineLink href={target.UPNVJT} name="UPN Veteran Jawa Timur"/>{". "}
              <i className="twa twa-flag-indonesia"></i>
            </Text>
            <Text>
              Focusing on technologies for Frontend Web Development with JavaScript-based ecosystems, such as Next.js,
              Chakra UI, and Headless CMS (Contentful, DatoCMS, or the one provided by Netlify).{" "}
              <i className="twa twa-books"></i>
            </Text>
            <Text>
            I have extensive experience in front-end development and love to learn all of new things. 
            I'm currently learning back-end and multi-platform development besides studying university courses as part of my degree.{" "}
              <i className="twa twa-man-technologist"></i>
            </Text>
          </VStack>
        </Box>

        <Grid w="full" templateColumns={["repeat(2, 1fr)", "repeat(4, 1fr)"]} gridGap={4}>
          {data.map((skill) => (
            <Box key={skill.id}>
              <Heading as="h5" fontSize="lg" my={4}>
                {skill.title}
              </Heading>
              <UnorderedList m="unset" textColor={textColor}>
                {skill.items.map((item) => (
                  <ListItem key={item} listStyleType="none" fontSize="md" my={2}>
                    {item}
                  </ListItem>
                ))}
              </UnorderedList>
            </Box>
          ))}
        </Grid>

        <Box w="full">
          <Heading as="h3" fontSize="2xl" mb={6}>
            Socials
          </Heading>

          <UnorderedList m="unset">
            {socials.map((social) => (
              <ListItem key={social.id} listStyleType="none" my={3} textColor={textColor}>
                {social.social} –{" "}
                <Box as="span" textColor={linkColor}>
                  <Link href={social.canonical_url} isExternal>
                    {social.slug}
                  </Link>
                </Box>
              </ListItem>
            ))}
          </UnorderedList>
        </Box>
      </VStack>

      <BackButton backto="/" name="Home" />
    </>
  );
}
