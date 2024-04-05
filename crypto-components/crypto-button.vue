<template>
    <button class="button">
        <slot />
    </button>
</template>

<script>

</script>

<style>
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