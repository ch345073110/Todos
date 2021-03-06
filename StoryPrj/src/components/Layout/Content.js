// Generated by CoffeeScript 2.1.1
  // import { ddbs as dd } from 'ddeyes'
var BreadcrumbItem, CFX, Content, Footer, Header,
  objectWithoutKeys = function(o, ks) { var res = {}; for (var k in o) ([].indexOf.call(ks, k) < 0 && {}.hasOwnProperty.call(o, k)) && (res[k] = o[k]); return res; };

import {
  prefixDom
} from 'cfx.dom';

import {
  Layout,
  Breadcrumb
} from 'antd';

({Header, Content, Footer} = Layout);

BreadcrumbItem = Breadcrumb.Item;

CFX = prefixDom({'div': 'div', Breadcrumb, BreadcrumbItem, Header, Content, Footer});

export default (arg) => {
  var breadcrumb, c_Breadcrumb, c_BreadcrumbItem, c_Content, c_Footer, c_Header, c_div, content, footer, header, props;
  ({content} = arg);
  props = objectWithoutKeys(arg, ['content']);
  ({header, breadcrumb, footer} = props);
  ({c_div, c_Breadcrumb, c_BreadcrumbItem, c_Header, c_Content, c_Footer} = CFX);
  return [
    ...(header ? [
      c_Header({
        key: 'MainContentHeader',
        style: {
          background: '#fff',
          padding: 0
        }
      },
      header)
    ] : []),
    c_Content.apply(null,
    [
      {
        key: 'MainContentContent',
        style: {
          margin: '0 16px'
        }
      },
      ...(breadcrumb ? [
        c_Breadcrumb.apply(null,
        [
          {
            style: {
              margin: '12px 0'
            }
          },
          ...(breadcrumb.reduce((r,
          c,
          i) => {
            return [
              ...r,
              c_BreadcrumbItem({
                key: `breadcrumb_${i}`
              },
              c)
            ];
          },
          []))
        ])
      ] : []),
      c_div({
        style: {
          padding: 24,
          background: '#fff',
          minHeight: 360
        }
      },
      content)
    ]),
    ...(footer ? [
      c_Footer({
        key: 'MainContentFooter',
        style: {
          textAlign: 'center'
        }
      },
      footer)
    ] : [])
  ];
};
