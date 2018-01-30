// Generated by CoffeeScript 2.1.1
  // import { ddbs as dd } from 'ddeyes'
var CFX, PageCenter, enhance, hocMapProps,
  _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import {
  prefixDom
} from 'cfx.dom';

import {
  Layout
} from 'antd';

import {
  mapProps,
  // withProps
  compose
} from 'recompose';

CFX = prefixDom({Layout});

hocMapProps = mapProps((ownerProps) => {
  return _extends({}, ownerProps, {
    style: _extends({}, (ownerProps.style != null ? ownerProps.style : {}), {
      display: 'flex',
      height: '100vh',
      alignItems: 'center',
      justifyContent: 'center'
    })
  });
});

// hocWithProps = withProps
//   createProps: (ownerProps) =>
//     {
//       ownerProps...
//       style: 
//         display: 'flex'
//         height: '100vh'
//         alignItems: 'center'
//         justifyContent: 'center'
//     }
enhance = compose(hocMapProps);

// hocWithProps
PageCenter = enhance((props) => {  // {
  //   createProps
  //   ownerProps...
  // }
  // state
  var c_Layout;
  ({c_Layout} = CFX);
  return c_Layout(props);
});

export default PageCenter;