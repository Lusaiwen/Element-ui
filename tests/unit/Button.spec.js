import Button from '@element/button';
import { shallowMount } from '@vue/test-utils';

describe('Button.vue', () => {
  let wrapper;
  let buttonEle;

  beforeEach(() => {
    wrapper = shallowMount(Button);
    buttonEle = wrapper.vm.$el;
  });
  it('create', () => {
    expect(buttonEle.classList).toContain('el-button');
  });

  it('size', async () => {
    await wrapper.setProps({
      size: 'mini',
    });

    expect(buttonEle.classList).toContain('el-button--mini');
  });

  it('type', async () => {
    await wrapper.setProps({
      type: 'primary',
    });

    expect(buttonEle.classList).toContain('el-button--primary');
  });

  it('plain', async () => {
    await wrapper.setProps({
      plain: true,
    });

    expect(buttonEle.classList).toContain('is-plain');
  });

  it('round', async () => {
    await wrapper.setProps({
      round: true,
    });

    expect(buttonEle.classList).toContain('is-round');
  });

  it('circle', async () => {
    await wrapper.setProps({
      circle: true,
    });

    expect(buttonEle.classList).toContain('is-circle');
  });

  it('disabled', async () => {
    await wrapper.setProps({
      disabled: true,
    });

    expect(buttonEle.classList).toContain('is-disabled');
  });

  it('loading', async () => {
    await wrapper.setProps({
      loading: true,
    });

    expect(wrapper.html()).toContain('<i class="el-icon-loading"></i>');
  });

  it('icon', async () => {
    await wrapper.setProps({
      icon: 'el-icon-edit',
    });

    expect(wrapper.html()).toContain('<i class="el-icon-edit"></i>');
  });

  it('autofocus', async () => {
    await wrapper.setProps({
      autofocus: true,
    });

    expect(wrapper.attributes('autofocus')).toEqual('autofocus');
  });

  it('native-type', async () => {
    await wrapper.setProps({
      nativeType: 'submit',
    });

    expect(wrapper.attributes('type')).toEqual('submit');
  });

  it('click', async () => {
    await wrapper.trigger('click');
    expect(wrapper.emitted().click).toBeTruthy();
  });
});
