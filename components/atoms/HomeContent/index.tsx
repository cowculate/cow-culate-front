import { Title, SubTitle, Info, Wrapper } from './stylle'

const TopicPanel: React.FC = () => {
  return (
    <Wrapper>
      <Title>Como usar?</Title>
      <SubTitle>
        - Procure pela área do conhecimento
        <br />- Procure pelo seu problema
      </SubTitle>
      <Info>
        Se não encontrou o seu, não fique triste
        <br />
        Estamos sempre trazendo problemas novos
      </Info>
    </Wrapper>
  )
}

export default TopicPanel
