import styled from '@emotion/styled';

export const Container = styled.div`
  text-align: center;
  background-color: whitesmoke;
  border-radius: 30px;
  box-shadow: 2px 2px 5px 2px;
`;

export const DescriptionContainer = styled.div`
  padding: 10px;
`;

export const Image = styled.img`
    width: 100%;
    max-width: 100px;
    border-radius: 50px;
    height: auto;
    border: 5px solid cadetblue;
}`;

export const UserName = styled.p`
  font-size: 25px;
  font-weight: 600;
`;

export const TagLoc = styled.p`
  font-size: 20px;
  color: lightslategrey; ;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
    width: 100%;
    padding: 0;
}
`;
export const ListItem = styled.li`
  width: 100%;
  text-align: center;
  list-style: none;
  list-style: none;
  display: flex;
  flex-direction: column;
  border: 3px solid cadetblue;
  border-radius: 50px;
  background-color: whitesmoke;
`;

export const Label = styled.span`
  font-weight: 600;
  color: lightslategrey;
`;

export const Quantity = styled.span`
  font-weight: 600;
`;
