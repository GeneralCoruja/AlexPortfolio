<script setup>
import WelcomeItem from '@/components/WelcomeItem.vue';
import SectionTitle from '@/components/SectionTitle.vue';
import ImageContent from '@/components/ImageContent.vue';
import Apps from '@/components/Apps.vue';
import DesignedFor from '@/components/DesignedFor.vue';
</script>

<template>
  <WelcomeItem title="Alexandre Mendes" description="Hey! I’m Alexandre. I’m a 27 year old Designer from Portugal. </br>(SIIIIII) As a
                    UX/UI and Product Designer, I create seamless, visually engaging experiences."></WelcomeItem>
  <SectionTitle title="What I do"></SectionTitle>
  <ImageContent title="UI/UX & Product Design" image="product_design.png" description="As a UX/UI and Product Designer, I create seamless, visually engaging experiences. I blend UX principles with strong interface design to craft intuitive interactions, ensuring digital products are both functional and aesthetically compelling."></ImageContent>
  <ImageContent title="Logo/Brand Design" image="coiso.png" description="As a Brand and Logo Designer, I create visually striking, memorable
                        identities. I blend strategy with design to craft logos and branding that are both impactful and
                        timeless, ensuring strong brand recognition and cohesion."></ImageContent>
  <Apps></Apps>
  <DesignedFor></DesignedFor>
</template>
