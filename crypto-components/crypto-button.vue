<script setup lang="ts">
interface Props {
  reverse?: boolean;
}

const { reverse } = defineProps<Props>();
</script>

<template>
  <div>
    <button class="button" :class="[reverse ? 'button--black' : '']">
      <slot />
    </button>
  </div>
</template>

<style lang="scss">
.button--black.button--black {
  background-color: var(--color-white);
  font-size: 20px;
  font-weight: 400;
  line-height: 32px;
  text-transform: capitalize;
  color: var(--color-white);
  background-color: black;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    background-color: var(--color-white);
    color: var(--color-primary);
  }
}
.button {
  font-size: 20px;
  font-weight: 400;
  line-height: 32px;
  text-transform: capitalize;
  color: var(--color-white);
  background-color: var(--color-primary);
  padding: 13px 26px 13px 26px;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background-color: var(--color-white);
    color: var(--color-primary);
  }
}
</style>
