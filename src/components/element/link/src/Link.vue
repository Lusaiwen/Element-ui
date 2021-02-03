<template>
  <a
    class="el-link"
    :href="href"
    :class="['el-link', type ? `el-link--${type}` : '',
    {
      'is-underline': underline && !disabled,
      'is-disabled': disabled,
    }]"
    @click="handleClick"
  >
    <i v-if="icon" :class="icon"></i>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </a>
</template>

<script>
export default {
  name: 'ElLink',
  props: {
    href: String,
    type: String,
    disabled: Boolean,
    underline: {
      type: Boolean,
      default: true,
    },
    icon: String,
  },
  methods: {
    handleClick(e) {
      this.$emit('click', e);
    },
  },
};
</script>

<style scoped>
.el-link {
  margin-right: 10px;
}
</style>
