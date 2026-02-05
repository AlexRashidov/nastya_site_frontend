<script setup>
import main_section from "@/components/main_section.vue"
import about_section from "@/components/about_section.vue"
import methodology_section from "@/components/methodology_section.vue"
import FAQ from "@/components/FAQ.vue"
import contacts from "@/components/contacts.vue"
import Service from "@/components/service.vue";
import Footer from "@/components/footer.vue";
import header_nav_menu from "@/components/header_nav_menu.vue";
import gerald_and_anastasia from "@/components/Gerald_and_Anastasia.vue";
import education from "@/components/education.vue";
import Feedback from "@/components/feedback.vue";
</script>

<template>
<div class="app_container" style="padding: 0; margin: 0;">
  <header_nav_menu></header_nav_menu>
  <main_section></main_section>
  <service></service>
  <about_section></about_section>
  <gerald_and_anastasia></gerald_and_anastasia>
  <education></education>
  <methodology_section></methodology_section>
  <FAQ></FAQ>
  <feedback></feedback>
  <contacts></contacts>
  <Footer></Footer>
</div>
</template>

<style >
html,body{
  margin: 0 !important;
  padding: 0 !important;
  overflow-x: hidden !important;
}
</style>
