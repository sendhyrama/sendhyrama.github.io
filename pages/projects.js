import NextLink from "next/link";
import Head from "next/head";
import { Box, Heading, Text, Link, VStack, HStack, Flex, Badge, useColorModeValue } from "@chakra-ui/react";
import BackButton from "@/components/buttons/BackButton";

export const getStaticProps = async () => {
  const defaultEndpoint = "https://dev.to/api/articles?username=sendhyrama";

  const res = await fetch(defaultEndpoint);
  const data = await res.json();

  return {
    props: { posts: data },
    revalidate: 1, //in seconds
  };
};

export default function Blog({ posts }) {
  const badgeVariant = useColorModeValue("solid", "subtle");
  const bgColor = useColorModeValue("gray.200", "#12151d");
  const textColor = useColorModeValue("gray.800", "gray.300");
  const linkColor = useColorModeValue("blue.600", "blue.400");

  return (
    <>
      <Head>
        <title>Projects - Sendhyrama's Web</title>
      </Head>

      <Box textAlign="center" mb={10}>
        <Heading as="h1" fontSize="4xl">
          My Projects
        </Heading>
        <br></br><h1>Under development, coming soon...</h1>
      </Box>

      <VStack w="100%" spacing={6}>
        {/* exclude first post */}
        {posts.slice(0, -1).map((post) => {
          const getDate = new Date(post.published_at);
          const postDate = getDate.toLocaleDateString("en-us", {
            year: "numeric",
            month: "long",
            day: "numeric",
          });

          return (
            <NextLink key={post.id} href={"/blog/" + post.id}>
              <Box
                h="100%"
                w="100%"
                p={8}
                bgColor={bgColor}
                border="1px"
                borderColor="inherit"
                borderRadius="25px"
                cursor="pointer"
                _hover={{
                  textDecoration: "none",
                  borderColor: "blue.400",
                }}
              >
                <Heading as="h3" fontSize={["xl", "2xl"]} textColor={linkColor} lineHeight={1.6}>
                  {post.title}
                </Heading>

                <HStack py={4}>
                  <i className="twa twa-four-o-clock"></i>{" "}
                  <Text fontSize={["sm", "md"]} textColor={textColor}>
                    {postDate}
                  </Text>
                </HStack>

                <HStack w="100%" h="100%" spacing={3} overflowX={["scroll", "hidden"]} pt={4}>
                  {post.tag_list.map((tag) => (
                    <Badge key={tag} py={0.5} px={1} letterSpacing="0.5px" colorScheme="gray" variant={badgeVariant}>
                      {tag}
                    </Badge>
                  ))}
                </HStack>
              </Box>
            </NextLink>
          );
        })}
      </VStack>

      <BackButton backto="/" name="Home" />
    </>
  );
}


// import Head from "next/head";
// import fetchEntries from "@/lib/contentful";
// import { ProjectCard } from "@/components/cards/ProjectCard";
// import { ProjectLink } from "@/components/link/ProjectLink";
// import {
//   Badge,
//   Heading,
//   HStack,
//   Tab,
//   TabList,
//   TabPanel,
//   TabPanels,
//   Tabs,
//   Text,
//   UnorderedList,
//   VStack,
// } from "@chakra-ui/react";

// export async function getStaticProps() {
//   const res = await fetchEntries();
//   const projects = res.map((p) => {
//     return p.fields;
//   });

//   return {
//     props: {
//       projects,
//     },
//   };
// }

// export default function Projects({ projects }) {
//   const TAB_LISTS = ["Websites", "Codes", "Products", "Others"];

//   return (
//     <>
//       <Head>
//         <title>Projects - Sendhyrama's Web</title>
//       </Head>

//       <VStack spacing={16}>
//         <VStack w="full" align="start" spacing={8}>
//           <HStack>
//             <Badge colorScheme="green">new</Badge>
//             <Badge colorScheme="orange">under development</Badge>
//           </HStack>

//           <Heading as="h1">Projects</Heading>
//           <Text opacity={0.75}>Description? TBD.</Text>
//         </VStack>

//         <Tabs
//           lazyBehavior="unmount"
//           isLazy={true}
//           isManual
//           w="full"
//           minH="50vh"
//           size="sm"
//           variant="line"
//           colorScheme="blue"
//           isFitted
//         >
//           <TabList>
//             {TAB_LISTS.map((category, index) => (
//               <Tab key={index} fontWeight="semibold" pb={3}>
//                 {category}
//               </Tab>
//             ))}
//           </TabList>

//           <TabPanels pt={8}>
//             <TabPanel px={0}>
//               <VStack spacing={8}>
//                 {projects.map((project, index) => {
//                   return project.category == "Websites" ? <ProjectCard key={index} project={project} /> : null;
//                 })}
//               </VStack>
//             </TabPanel>

//             <TabPanel px={0}>
//               <VStack spacing={8}>
//                 {projects.map((project, index) => {
//                   return project.category == "Codes" ? <ProjectCard key={index} project={project} /> : null;
//                 })}
//               </VStack>
//             </TabPanel>

//             <TabPanel px={0}>
//               <VStack spacing={8}>
//                 {projects.map((project, index) => {
//                   return project.category == "Products" ? <ProjectCard key={index} project={project} /> : null;
//                 })}
//               </VStack>
//             </TabPanel>

//             <TabPanel px={2}>
//               <VStack align="start" spacing={8}>
//                 <UnorderedList spacing={4}>
//                   {projects.map((project, index) => {
//                     return project.category == "Others" ? <ProjectLink key={index} project={project} /> : null;
//                   })}
//                 </UnorderedList>
//               </VStack>
//             </TabPanel>
//           </TabPanels>
//         </Tabs>
//       </VStack>
//     </>
//   );
// }
