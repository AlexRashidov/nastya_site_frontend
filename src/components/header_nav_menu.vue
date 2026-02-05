<script setup>
import {ref, watch} from 'vue'

const isOpen = ref(false)
const closeMenu = () => {
  isOpen.value = false
}

watch(isOpen, (val) => {
  document.body.style.overflow = val ? 'hidden' : ''
})
</script>

<template>
  <button class="menu-btn" @click="isOpen = !isOpen">
    <span class="hamburger" :class="{ open: isOpen }">
      <span></span>
      <span></span>
      <span></span>
    </span>
  </button>

  <div class="wrapper" :class="{ open: isOpen }">
    <ul>
      <li><a @click="() => {closeMenu(); $router.push({name: 'home', hash:'#main'})}">Главная</a></li>
      <li><a @click="() => {closeMenu(); $router.push({name: 'service', hash:'#service'})}">Услуги</a></li>
      <li><a @click="() => {closeMenu(); $router.push({name: 'about', hash:'#about'})}">Обо мне</a></li>
      <li><a @click="() => {closeMenu(); $router.push({name: 'my_exp', hash:'#my_exp'})}">Опыт</a></li>
      <li><a @click="() => {closeMenu(); $router.push({name: 'education', hash:'#education'})}">Образование</a></li>
      <li><a @click="() => {closeMenu(); $router.push({name: 'methodology', hash:'#methodology'})}">Методология</a></li>
      <li><a @click="() => {closeMenu(); $router.push({name: 'FAQ', hash:'#faq'})}">FAQ</a></li>
      <li><a @click="() => {closeMenu(); $router.push({name: 'feedback', hash:'#feedback'})}">Отзывы</a></li>
      <li><a @click="() => {closeMenu(); $router.push({name: 'contacts', hash:'#contacts'})}">Запись</a></li>
    </ul>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Кнопка меню */
.menu-btn {
  position: fixed;
  top: 24px;
  right: 24px;
  z-index: 10000;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  border: none;
  background: #b45a1b; /* акцент сайта */
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  box-shadow: 0 10px 25px rgba(180, 90, 27, 0.3);
  transition: transform 0.2s ease;
  display: flex;
  justify-content: center;
  align-items: center;
}

.menu-btn:hover {
  transform: scale(1.05);
}

/* Создаем гамбургер */
.hamburger {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 25px;
  height: 18px;
  position: relative;

}
.hamburger span {
  display: block;
  width: 100%;
  height: 4px;
  background-color: white;
  border-radius: 2px;
  transition: all 0.3s ease;
}
.hamburger.open span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.hamburger.open span:nth-child(2) {
  opacity: 0;
}

.hamburger.open span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

.hamburger:hover {
  transform: scale(1.1);
}
/* Фон меню */
.wrapper {
  position: fixed;
  inset: 0;
  background: rgba(250, 243, 235, 0.95); /* беж */
  backdrop-filter: blur(1px);
  clip-path: circle(25px at calc(100% - 45px) 45px);
  transition: clip-path 0.5s ease;
  z-index: 9999;
}

.wrapper.open {
  clip-path: circle(150% at 100% 0);
}


/* Открытое состояние */
.wrapper.open {
  clip-path: circle(75%);
}

/* Список */
.wrapper ul {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  list-style: none;
  text-align: center;
}

.wrapper ul li {
  opacity: 0;
  transform: translateY(10px);
  transition: 0.4s;
}

.wrapper ul li a {
  font-size: 32px;
  font-weight: 500;
  text-decoration: none;
  color: #4a2a16;
  padding: 10px 40px;
  border-radius: 999px;
  transition: all 0.3s ease;
}

.wrapper ul li a:hover {
  background: rgba(180, 90, 27, 0.15);
}


.wrapper ul li a:hover::after {
  transform: scaleY(1);
}
.wrapper.open ul li {
  opacity: 1;
  transform: translateY(0);
}

.wrapper.open ul li:nth-child(1) { transition-delay: 0.1s }
.wrapper.open ul li:nth-child(2) { transition-delay: 0.2s }
.wrapper.open ul li:nth-child(3) { transition-delay: 0.3s }
.wrapper.open ul li:nth-child(4) { transition-delay: 0.4s }
.wrapper.open ul li:nth-child(5) { transition-delay: 0.5s }
.wrapper.open ul li:nth-child(6) { transition-delay: 0.6s }
.wrapper.open ul li:nth-child(7) { transition-delay: 0.7s }
.wrapper.open ul li:nth-child(8) { transition-delay: 0.8s }
.wrapper.open ul li:nth-child(9) { transition-delay: 0.9s }

@keyframes rotate {
  from {
    filter: hue-rotate(0deg);
  }
  to {
    filter: hue-rotate(360deg);
  }
}
@media (max-width: 768px) {
  .menu-btn {
    width: 44px;
    height: 44px;
    font-size: 18px;
  }

  .wrapper ul li a {
    font-size: 24px;
    padding: 8px 30px;
  }
}

@media (max-width: 480px) {
  .wrapper ul li a {
    font-size: 20px;
    padding: 6px 20px;
  }
}
@media (max-width: 768px) {
  .wrapper.open {
    clip-path: circle(200% at 95% 5%);
  }
}

@media (max-width: 480px) {
  .wrapper.open {
    clip-path: circle(250% at 90% 5%);
  }
}
</style>
