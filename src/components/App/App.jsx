import TodoList from '../TodoList/TodoList';

import {
  Container,
  Header,
  SearchForm,
  Section,
} from 'components';

export const App = () => {

  return (
    <>
      <Header />
      <Section>
        <Container>
          <SearchForm  />
          <TodoList />
        </Container>
      </Section>
    </>
  );
};
