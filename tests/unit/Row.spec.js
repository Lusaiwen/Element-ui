import {
  shallowMount,
} from '@vue/test-utils';
import Row from '@element/row';

describe('Row.vue', () => {
  let wrapper;
  let rowEle;

  beforeEach(() => {
    wrapper = shallowMount(Row);
    rowEle = wrapper.vm.$el;
  });

  it('create', () => {
    expect(rowEle.classList).toContain('el-row');
  });

  it('gutter', async () => {
    await wrapper.setProps({ gutter: '20' });
    expect(rowEle.style.marginLeft).toBe('-10px');
  });

  it('type', async () => {
    await wrapper.setProps({ type: 'flex' });
    expect(rowEle.classList).toContain('el-row--flex');
  });

  it('justify', async () => {
    await wrapper.setProps({ justify: 'space-around' });
    expect(rowEle.classList).toContain('is-justify-space-around');
  });

  it('align', async () => {
    await wrapper.setProps({ align: 'middle' });
    expect(rowEle.classList).toContain('is-align-middle');
  });
});
