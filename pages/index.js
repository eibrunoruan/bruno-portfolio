import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import thumbYouTube from '../public/images/links/youtube.png'
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Olá, Sou apenas um desenvolvedor freelancer brasileiro
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Bruno Ruan
          </Heading>
          <p>Artesão Digital ( Desenvolvedor / Designer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/takuya.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Bruno é um desenvolvedor freelancer brasileiro fullstack, morrador de
          uma pacata cidadela chamada Massaranduba no estado de Santa-Catarina. 
          Seu conhecimento é concentrado em desenvolvedor web, focado em 
          Javascript e React com famosos{' '}
          <NextLink href="/works/inkdrop" passHref scroll={false}>
            <Link>ProjetosWeb</Link>
          </NextLink>
          . Tem experiências com artes digitais e modelagem de objetos 3d.
          Veja seu  &quot;
          <NextLink href="https://twitch.tv/eibrunoruan" passHref>
            <Link target="_blank">Portfolio</Link>
          </NextLink>
          &quot; de Artes Digiais.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Meu portfólio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2004</BioYear>
          Nascido em Massaranduba (SC), Brasil.
        </BioSection>
        <BioSection>
          <BioYear>2023</BioYear>
          Iniciou o bacharelado em Ciências da Computação&apos; na Universidade Regional de
          Blumenau (FURB) no estado de Santa-Catarina no Brasil
          (Started a Bachelor's degree in Computer Science at the Regional University of Blumenau (FURB) in the state of Santa Catarina in Brazil)
        </BioSection>
        <BioSection>
          <BioYear>2023</BioYear>
          Aberto a Comissões! Brasil (Massaranduba-SC)
        </BioSection>
        <BioSection>
          <BioYear>2023 em diante</BioYear>
          Trabalhando como Freelancer
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Arte, Musica,{' '}
          <Link href="https://twitch.tv/eibrunoruan" target="_blank">
            Streams
          </Link>
          , Desenhos,{' '}
          <Link href="https://aaaaaaaaaaaa.com/" target="_blank">
            Fotografia
          </Link>
          , 
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Redes Sociais
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/eibrunoruan" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @eibrunoruan
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/eibrunoru4n" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @eibrunoruan (Pessoal)
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/craftzdog" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @petrysoftwares (Empresarial)
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/eibrunoruan" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @eibrunoruan
              </Button>
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://twitch.tv/eibrunoruan"
            title="Robo para Whatsapp"
            thumbnail={thumbYouTube}
          >
            Projeto de Robô para a plataforma (Whatsapp)
          </GridItem>
          <GridItem
            href="https://twitch.tv/eibrunoruan"
            title="Bruno'S API"
            thumbnail={thumbInkdrop}
          >
            API simples para React
          </GridItem>
        </SimpleGrid>

        <Box align="center" my={4}>
          <NextLink href="/posts" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Postagens Populares
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
