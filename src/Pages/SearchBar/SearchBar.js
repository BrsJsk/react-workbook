import React, { useState } from 'react';
import { animated, useSpring } from 'react-spring';
import './searchbar.css';
import PageAbsoluteWrapper from '../../components/PageAbsoluteWrapper';

function SearchBar() {
  const [isExpanded, setExpanded] = useState(false);
  const searchCircleProps = useSpring({
    borderRadius: isExpanded ? 20 : 100,
    width: isExpanded ? 300 : 100,
    config: { duration: 150 },
  });

  const searchBackground = useSpring({
    borderRadius: isExpanded ? 10 : 100,
    width: isExpanded ? 260 : 40,
    config: { duration: 150 },
  });
  return (
    <PageAbsoluteWrapper>
      <header>
        <div id="top_element"></div>
        <div id="main_search_element">
          <animated.div id="search_icon_circle" style={searchCircleProps}>
            <animated.div style={searchBackground} id="search_icon_background">
              <i
                className="fa fa-search action-expand"
                onClick={() => setExpanded(!isExpanded)}
                aria-hidden="true"
              ></i>

              <input type="text" placeholder="Search" />

              <i className="fa fa-times action-collapse" aria-hidden="true"></i>
            </animated.div>
          </animated.div>
        </div>
      </header>
    </PageAbsoluteWrapper>
  );
}

export default SearchBar;
