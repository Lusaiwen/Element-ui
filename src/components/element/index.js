import Row from '@element/row';
import Col from '@element/col';
import Container from '@element/container';
import Aside from '@element/aside';
import Header from '@element/header';
import Footer from '@element/footer';
import Main from '@element/main';
import Icon from '@element/icon';
import Button from '@element/button';
import ButtonGroup from '@element/buttonGroup';
import Link from '@element/link';

const components = [
  Row,
  Col,
  Container,
  Aside,
  Header,
  Footer,
  Main,
  Icon,
  Button,
  ButtonGroup,
  Link,
];

const install = (Vue) => {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

export default {
  install,
  Row,
  Col,
  Container,
  Aside,
  Header,
  Footer,
  Main,
  Icon,
  Button,
  ButtonGroup,
  Link,
};

export {
  install,
  Row,
  Col,
  Container,
  Aside,
  Header,
  Footer,
  Main,
  Icon,
  Button,
  ButtonGroup,
  Link,
};
