import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbPortfolio from '../public/images/contents/youtube-how-to-build-portfolio.jpg'
import thumbHowToUseInkdrop from '../public/images/contents/youtube-how-to-use-inkdrop.jpg'
import thumbFishWorkflow from '../public/images/contents/youtube-fish-workflow.jpg'
import thumbMyDeskSetup from '../public/images/contents/youtube-my-desk-setup.jpg'
import thumb500PaidUsers from '../public/images/contents/blog-500-paid-users.jpg'
import thumbFinancialGoal from '../public/images/contents/blog-financial-goal.png'
import thumbHowToPriceYourself from '../public/images/contents/blog-how-to-price-yourself.jpg'
import thumb50xFaster from '../public/images/contents/youtube-50x-faster.jpg'

const Posts = () => (
  <Layout title="Postagens">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Postagens Populares
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Teste 1"
            thumbnail={thumbPortfolio}
            href="https://twitch.tv/eibrunoruan"
          />
          <GridItem
            title="Teste 2"
            thumbnail={thumbHowToUseInkdrop}
            href="https://twitch.tv/eibrunoruan"
          />
          <GridItem
            title="Teste 3"
            thumbnail={thumbFishWorkflow}
            href="https://twitch.tv/eibrunoruan"
          />
          <GridItem
            title="Teste 4"
            thumbnail={thumbMyDeskSetup}
            href="https://twitch.tv/eibrunoruan"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Teste 5"
            thumbnail={thumb500PaidUsers}
            href="https://twitch.tv/eibrunoruan"
          />
          <GridItem
            title="Teste 6"
            thumbnail={thumbFinancialGoal}
            href="https://twitch.tv/eibrunoruan"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.5}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Teste 7"
            thumbnail={thumbHowToPriceYourself}
            href="https://twitch.tv/eibrunoruan"
          />
          <GridItem
            title="Teste 8"
            thumbnail={thumb50xFaster}
            href="https://twitch.tv/eibrunoruan"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
