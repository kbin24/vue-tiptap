<template>
    <el-tooltip :content="title" :show-after="350" effect="dark" placement="top">
        <el-button class="menu-item1" :class="{ 'is-active': isActive ? isActive() : null }" @click="action">
            <svg class="remix">
                <use :xlink:href="`${iconUrl}#ri-${icon}`" />
            </svg>
        </el-button>

    </el-tooltip>

</template>

<script setup>
import remixiconUrl from 'remixicon/fonts/remixicon.symbol.svg'
import { onMounted, ref, defineProps } from 'vue';

const props = defineProps({
    icon: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    action: {
        type: Function,
        required: true
    },
    isActive: {
        type: Function,
        default: null
    }
})

const iconUrl = ref(remixiconUrl)

onMounted(() => {
    console.log(props)
})

</script>

<style lang="scss">
.menu-item1 {
    width: 1.75rem;
    height: 1.75rem;
    color: #0d0d0d;
    border: none;
    background-color: transparent;
    border-radius: .4rem;
    padding: .25rem;
    margin-right: .25rem;

    svg {
        width: 100%;
        height: 100%;
        fill: currentColor;
    }

    // &.is-active,
    // &:hover {
    //     color: #fff;
    //     // background-color: #0d0d0d;
    // }
}
</style>