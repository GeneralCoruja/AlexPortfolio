<script setup>
import WelcomeItem from '@/components/WelcomeItem.vue';
import SectionTitle from '@/components/SectionTitle.vue';
import ImageContent from '@/components/ImageContent.vue';
</script>

<template>
  <WelcomeItem title="UI/UX" description="As a UX/UI and Product Designer, I create seamless, visually engaging experiences. I blend UX principles with strong interface design to craft intuitive interactions, ensuring digital products are both functional and aesthetically compelling. Need services? Contact me now!"></WelcomeItem>
  <SectionTitle title="What you get"></SectionTitle>
  <ImageContent :showButtons="false" title="Timeless & Intuitive Designs" image="uiux1.png" description="Beautifully crafted designs that feel effortless to use. Every interaction is thoughtfully designed to be natural, seamless, and user-friendly—removing friction and enhancing engagement. The result? Interfaces that just make sense."></ImageContent>
  <ImageContent :showButtons="false" title="Scalable, Accessible, and Consistent Design Kits" image="uiux2.gif" description="For every project, I build a custom, fully interactive component library to ensure consistency and futureproof your product. Every detail is crafted for responsiveness, accessibility, and precision—built for designers and developers who need high-quality, ready-to-use components."></ImageContent>
  <ImageContent :showButtons="false" title="Flows & Prototyping" image="uiux3.gif" description="By applying UX principles and thoughtful design, I create intuitive experiences that enhance user interactions, ensuring digital products are both functional and visually compelling."></ImageContent>
  <ImageContent :showButtons="false" title="Seamless Accessibility for Every User" image="uiux4.png" description="Thoughtfully crafted to align with accessibility standards, ensuring inclusivity and ease of use for all. Every element is designed with clarity, contrast, and usability in mind, creating a seamless experience for diverse users."></ImageContent>


</template>
