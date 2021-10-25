import styled from 'styled-components'

const Loading = styled.div`
  width:150px;
  height:150px;
  background:linear-gradient(-45deg, red, orange);
  border-radius: 150px 150px 0px 150px;
  transform:rotate(-135deg);
  animation:.1s flame infinite;
  filter:blur(10px);
  position:relative;
  box-shadow:17px 20px 90px #700;
  border:45px solid black;
  border-left-width:25px;
  border-top-width:25px;

  &:after,
  &:before{
    content:'';
    width:100px;
    height:100px;
    display:block;
    position:absolute;
    background:linear-gradient(-45deg, red, orange);
    animation:.2s flame infinite;
    transform:scale(.8) rotate(20deg);
    border-radius: 100px 100px 0px 100px;
    top:20px;
  }
  &:before{
    top:0;
    animation-duration:.09s;
    transform:scale(.9) rotate(-15deg) translate(10px, 0px);
  }
}
`

export default Loading
