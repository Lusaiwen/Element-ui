<template>
  <button
    :autofocus="autofocus"
    :type="nativeType"
    @click="e => $emit('click', e)"
    :class="['el-button', type ? `el-button--${type}` : '',
    size ? `el-button--${size}` : '',
    {
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
        'is-disabled': disabled,
      }]"
  >
    <i :class="icon" v-if="icon && !loading"></i>
    <i class="el-icon-loading" v-if="loading"></i>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: 'ElButton',
  props: {
    type: {
      type: String,
      validator: (val) => ['primary', 'success', 'info', 'warning', 'danger', 'text'].includes(val),
    },
    size: {
      type: String,
      validator: (val) => ['medium', 'small', 'mini'].includes(val),
    },
    plain: Boolean,
    round: Boolean,
    circle: Boolean,
    disabled: Boolean,
    icon: String,
    loading: Boolean,
    autofocus: Boolean,
    nativeType: String,
  },
};
</script>
