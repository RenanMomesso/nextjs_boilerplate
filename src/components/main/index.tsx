import * as S from './styles'

const Main = ({
  title = 'React Avançado',
  description = 'Typescript, React, Nextjs, GraphQL'
}) => (
  <S.Wrapper>
    <S.Logo
      src="/images/home.svg"
      alt="Imagem de um atomo e React avançado ao lado, de cores brancas e de fundo vermelho "
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration src="/images/foto.png" />
  </S.Wrapper>
)

export default Main
