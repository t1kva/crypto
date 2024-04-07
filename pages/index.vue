<script setup lang="ts">
// FIXME: отступы у бинанса не как на макете
// TODO:  вынести бинансы в компонент и отцентрировать по сайту
</script>
<template>
    <div class="homepage">
        <div class="homepage__container">
            <div class="homepage__left">
                <div class="homepage__top">
                    <div class="homepage__line"></div>
                    <div class="homepage__top-title">
                        Crypto Brains
                    </div>
                </div>
                <div class="homepage__list">
                <h1 class="homepage__list-title">
                    Buy & Sell Crypto Easy With Crypto Brains
                </h1>
                <p class="homepage__list-subtitle">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
                <div class="homepage__buttons">
                    <CryptoButton>Start Now</CryptoButton>
                    <CryptoButton reverse>Beginner’s Guide</CryptoButton>
                </div>
                <div class="homepage__binance">
                    <div class="homepage__binance-stats">
                        <span class="homepage__binance-stats--text">btc / inr</span>
                        <div class="homepage__binance-stats--icon">
                            <img src="../assets/icons/binance.svg" alt="">
                            <span>5,76%</span>
                        </div>
                    </div>
                    <div class="homepage__binance-price">
                        <span class="homepage__binance-price--text">₹ 28,214,25.341</span>
                    </div>
                    <div class="homepage__binance-line"></div>
                </div>
            </div>
            <img class="laptop" src="../assets/icons/laptop.png" alt="">
        </div>
    </div>
</template>


<style lang="scss" scoped>
.homepage {
    &__container {
        display: flex;
        justify-content: space-between;
        padding: 32px 165px 32px 165px;
        background-color: var(--background-color);
    }

    &__top {
        display: flex;
        align-items: center;
    }
    &__line {
        height: 1px;
        width: 40px;
        background-color: var(--color-primary);
        margin-right: 10px; 
    }
    &__top-title {
        color: var(--color-primary);
    }
    &__list {
        max-width: 1000px;
        &-title{
        width: 912px;
        font-size: 96px;
        color: var(--color-white);
        }
        &-subtitle {
        padding-top: 30px;
        color: var(--color-gray);
        font-size: 20px;
        width: 818px;
            
        }
    }
    &__buttons {
        padding-top: 80px;
        display: flex;
        align-items: center;
        gap: 30px;
    }
    .homepage__binance {
    padding-top: 165px;
    display: flex;
    flex-direction: column;
    position: relative;
    &-stats {
        display: flex;
        align-items: center;
        gap: 15px;

        &--text {
            text-transform: uppercase;
            color: var(--color-gray);
        }

        &--icon {
            color: var(--color-green);
        }
    }

    &-price {
        color: var(--color-white);
    }
    }
}

.laptop {
    width: 740px;
    height: 740px;
}
</style>
