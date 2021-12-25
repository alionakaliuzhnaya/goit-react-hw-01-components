import styled from '@emotion/styled';

export const Section = styled.section`
  text-align: center;
  margin-top: 30px;
  background-color: whitesmoke;
  border-radius: 30px;
  box-shadow: 2px 2px 5px 2px;
`;

export const StatList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  justify-content: center;
  align-items: center;
`;
const getRandomHexColor = props => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 100px;
  border: 2px solid cadetblue;
  background-color: ${getRandomHexColor};
  border-radius: 25%;
`;
