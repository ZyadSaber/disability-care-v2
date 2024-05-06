import { memo } from "react";
import { Container, Title, Message, BackButton } from "./styled";

const NotFoundPage = memo(() => (
    <Container>
        <Title>404</Title>
        <Message>Page not found</Message>
        <BackButton to="/">Go back to home</BackButton>
    </Container>
));

export default NotFoundPage;