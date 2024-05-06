import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Title = styled.h1`
  font-size: 3em;
  color: #333;
  margin-bottom: 20px;
`;

export const Message = styled.p`
  font-size: 1.5em;
  color: #555;
  margin-bottom: 40px;
`;

export const BackButton = styled(Link)`
  text-decoration: none;
  color: #fff;
  background-color: #3498db;
  padding: 10px 20px;
  font-size: 1.2em;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2980b9;
  }
`;
