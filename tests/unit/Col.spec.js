import {
  shallowMount,
} from '@vue/test-utils';
import Col from '@element/col';
import Row from '@element/row';

describe('Col.vue', () => {
  let wrapper;
  let colEle;

  beforeEach(() => {
    wrapper = shallowMount(Col, {
      parentComponent: Row,
    });
    colEle = wrapper.vm.$el;
  });
  it('create', () => {
    expect(colEle.classList).toContain('el-col');
  });

  it('span', async () => {
    await wrapper.setProps({
      span: 6,
    });
    expect(colEle.classList).toContain('el-col-6');
  });

  it('offset', async () => {
    await wrapper.setProps({
      offset: 6,
    });
    expect(colEle.classList).toContain('el-col-offset-6');
  });

  it('push', async () => {
    await wrapper.setProps({
      push: 6,
    });
    expect(colEle.classList).toContain('el-col-push-6');
  });

  it('pull', async () => {
    await wrapper.setProps({
      pull: 6,
    });
    expect(colEle.classList).toContain('el-col-pull-6');
  });

  it('respnsive', async () => {
    await wrapper.setProps({
      sm: {
        span: 4,
        offset: 2,
      },
      md: 8,
      lg: {
        span: 6,
        offset: 3,
      },
    });
    expect(colEle.classList).toContain('el-col-sm-4');
    expect(colEle.classList).toContain('el-col-sm-offset-2');
    expect(colEle.classList).toContain('el-col-md-8');
    expect(colEle.classList).toContain('el-col-lg-6');
    expect(colEle.classList).toContain('el-col-lg-offset-3');
  });
});
