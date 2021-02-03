import Row from './src/Row';

Row.install = (Vue) => {
  Vue.component(Vue.name, Row);
};

export default Row;
