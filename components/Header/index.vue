<script setup lang="ts">
</script>

<template>
    <header class="header">
        <div class="header__container">
            <NuxtLink to="/">
                <img src="../../assets/icons/logo.svg" />
            </NuxtLink>
            <div class="header__center">
                <ul class="header__center-list">
                    <li class="header__center-list-item">
                        <NuxtLink class="header__link" to="/Market">Market</NuxtLink>
                    </li>
                    <li class="header__center-list-item">
                        <NuxtLink class="header__link" to="/Trade">Trade</NuxtLink>
                    </li>
                    <li class="header__center-list-item">
                        <NuxtLink class="header__link" to="/Earn">Earn</NuxtLink>
                    </li>
                    <li class="header__center-list-item">
                        <NuxtLink class="header__link" to="/About">About</NuxtLink>
                    </li>
                    <li class="header__center-list-item">
                        <NuxtLink class="header__link" to="/Career">Career</NuxtLink>
                    </li>
                </ul>
            </div>
            <div class="header__right">
                <span class="login">log in</span>
                <CryptoButton>sign up</CryptoButton>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
.header {
    &__container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 32px 165px 32px 165px;
        background-color: var(--background-color2);
    }

    &__link {
        color: var(--color-gray);
        font-size: 18px;
        font-weight: 400;
        line-height: 28px;
        transition: 0.5s;

        &:hover {
            color: var(--color-white);
        }
    }

    &__center {
        padding: 0px 40px 0px 40px;

        &-list {
            display: flex;
            align-items: center;
            gap: 30px;
        }
    }

    &__right {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .login {
        color: var(--color-white);
        padding: 13px 26px 13px 26px;
        font-size: 18px;
        font-weight: 400;
        line-height: 32px;
        text-transform: capitalize;
        cursor: pointer;
        transition: 0.5s;

        &:hover {
            color: var(--color-primary);
        }
    }
}
</style>