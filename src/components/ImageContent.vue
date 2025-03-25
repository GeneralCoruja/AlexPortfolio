<script setup>
const BASE = 'AlexPortfolio';

const props = defineProps({
    title: String,
    description: String,
    image : String,
    showButtons: Boolean
})

function getImageUrl(){
    return '/images/' + props.image;
}

</script>

<template>
    <div class="page flex center-content">
        <div class="content-wrapper flex row">
            <div class="content">
                <h1 class="title txt-title-medium">{{ title }}</h1>
                <p class="description txt-large">{{ description }}</p>
                <div v-if="props.showButtons" class="button-wrapper">
                    <a href="./uiux.html" class="button txt-button">See more</a>
                </div>
            </div>
            <div class="image">
                <img :src="getImageUrl()" alt="product_design">
            </div>
        </div>
    </div>
</template>