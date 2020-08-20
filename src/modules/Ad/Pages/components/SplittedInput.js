import React, { useState, useEffect } from 'react';

export default ({ children, splitted: _splitted, networks }) => {
  const [splitted, setSplitted] = useState(_splitted);
  const [renderChildren, setRenderChildren] = useState(children);
  if (React.Children.count(children) > 1) {
    throw 'Children must be only 1';
  }

  useEffect(() => {
    if (!splitted) return setRenderChildren(children);
    const _chidrenToRender = [];

    networks.map((network) => {
      const child = children;
      console.log(child, child.props, child.props.sizes);
      // child.props.sizes = { xs: 6 };
      // child.props['data-network'] = network;

      _chidrenToRender.push(child);
      console.log(child);
    });

    setRenderChildren(_chidrenToRender);
  }, [splitted]);

  return renderChildren;
};
