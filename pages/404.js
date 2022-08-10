import Head from "next/head";
import NextLink from "next/link";
import { VStack, Heading, Link , Box} from "@chakra-ui/react";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>404 - Sendhyrama's Web</title>
      </Head>


      <Box textAlign="center" mb={10}>
        <Heading as="h1" fontSize="5xl">
          404
        </Heading>
      </Box>

      <VStack alignItems="center" justifyContent="center" minH="5vh">
        <Heading as="h1" mb={10}>
          There isn't a page site here 😜
        </Heading>
        <NextLink href="/" passHref>
          <Link fontSize="xl" fontWeight="semibold" m={4} color="gray.400">
            &larr; Back to Home
          </Link>
        </NextLink>
      </VStack>
    </>
  );
}
