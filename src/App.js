import React from 'react';
import 'antd/dist/antd.css';
import { Link, Route, Switch, useLocation } from 'react-router-dom';
import SimpleCardsList from './Pages/SimpleCardsList/SimpleCardsList';
import TransitionCardsList from './Pages/SimpleCardsList/TransitionCardsList';
import SearchBar from './Pages/SearchBar/SearchBar';
import Movies from './Pages/Movies/Movies';
import {
  AppstoreOutlined,
  CheckOutlined,
  IdcardOutlined,
  MailOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import { animated, useTransition } from 'react-spring';
import Todo from './Pages/Todo/Todo';

function App() {
  const location = useLocation();

  const transitions = useTransition(location, (location) => location.pathname, {
    from: { opacity: 0, marginLeft: -50 },
    enter: { opacity: 1, marginLeft: 0 },
    leave: { opacity: 0, marginLeft: 50 },
  });

  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item key="cards" icon={<MailOutlined />}>
          <Link to="/">Cards</Link>
        </Menu.Item>
        <Menu.Item key="cardsTransition" icon={<IdcardOutlined />}>
          <Link to="/transition">Cards transition</Link>
        </Menu.Item>

        <Menu.Item key="search" icon={<SearchOutlined />}>
          <Link to="/search">Search</Link>
        </Menu.Item>

        <Menu.Item key="movies" icon={<AppstoreOutlined />}>
          <Link to="/movies">Movies</Link>
        </Menu.Item>

        <Menu.Item key="todo" icon={<CheckOutlined />}>
          <Link to="/todo">Todo</Link>
        </Menu.Item>
      </Menu>

      {transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={props}>
          <Switch location={item}>
            <Route path="/transition">
              <TransitionCardsList />
            </Route>

            <Route path="/search">
              <SearchBar />
            </Route>

            <Route path="/movies">
              <Movies />
            </Route>

            <Route path="/todo">
              <Todo />
            </Route>

            <Route path="/">
              <SimpleCardsList />
            </Route>
          </Switch>
        </animated.div>
      ))}
    </div>
  );
}

export default App;
