<script setup>
defineProps(['title', 'description']);
</script>

<template>
    <div class="page flex center-content">
        <div class="intro flex col">
            <h1 class="title txt-title-extra-large">{{ title }}</h1>
            <p class="description txt-large">{{description}}</p>
            <div class="button-wrapper flex row">
                <a href="https://www.linkedin.com/in/alexandre-mendes-uiux" class="button txt-button active">Contact
                    me</a>
                <a href="./about.html" class="button txt-button">Know more</a>
            </div>
        </div>
    </div>
</template>
