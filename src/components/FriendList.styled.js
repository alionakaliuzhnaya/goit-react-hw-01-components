import styled from '@emotion/styled';

export const FriendsList = styled.ul`
  margin-top: 30px;
  list-style: none;
  padding: 0;
`;

export const FriendItem = styled.li`
  height: 100px;
  background-color: whitesmoke;
  margin-bottom: 15px;
  padding: 15px 25px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 50%;
  box-shadow: 2px 2px 5px 2px;
`;
export const Status = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${({ status }) => (status ? 'green' : 'red')};
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: 600;
`;
