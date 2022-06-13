import styled from "styled-components";

export const PageBody = styled.div`
  box-sizing: border-box;
  font-family: 'Muli', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
`

export const Container = styled.div`
  display: flex;
  width: 90vw;
  
  @media (max-width: 480px) {}
  width: 100vw;
`

interface IPanelProps {
    imgUrl: string
    id: string
}

export const Panel = styled.div`
  // @ts-ignore
  background-image: url(${(props: IPanelProps) => props.imgUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 80vh;
  border-radius: 50px;
  color: #fff;
  cursor: pointer;
  flex: 0.5;
  margin: 10px;
  position: relative;;
  -webkit-transition: all 700ms ease-in;

  h3 {
    font-size: 24px;
    position: absolute;
    bottom: 20px;
    left: 20px;
    margin: 0;
    opacity: 0;
  }

  &.active {
    flex: 5;
    h3 {
      opacity: 1;
      transition: opacity 0.3s ease-in 0.4s;
    }
  }
  
  @media (max-width: 480px) {
    &:nth-of-type(4),
    &:nth-of-type(5) {
      display: none;
    }
  }
`