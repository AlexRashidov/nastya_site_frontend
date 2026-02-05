<script setup>

</script>

<template>
  <section id="methodology">
    <div class="methodology_container">
      <h2>Мой подход к тренировкам</h2>
      <div class="principles">
        <div class="principle">
          <div class="principle-icon icon-heart"></div>
          <h3>Без насилия</h3>
          <p>Только положительное подкрепление</p>
        </div>

        <div class="principle">
          <div class="principle-icon icon-target"></div>
          <h3>Индивидуально</h3>
          <p>Программа под каждую собаку</p>
        </div>

        <div class="principle">
          <div class="principle-icon icon-family"></div>
          <h3>Доступно</h3>
          <p>Объяснение всех аспктов простом языком</p>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
#methodology {
  padding: 100px 20px;
  background: linear-gradient(135deg, #f9f5f0 0%, #f0e6d6 100%);
  position: relative;
}

/* Контейнер */
.methodology_container {
  max-width: 1200px;
  margin: 0 auto;
  font-family: 'Georgia', serif;
  text-align: center;
}

/* Заголовок */
#methodology h2 {
  font-size: 3rem;
  color: #2c1810;
  margin-bottom: 60px;
  position: relative;
  display: inline-block;
}

#methodology h2::after {
  content: '';
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #d4a574, #b5834d);
  border-radius: 2px;
}

/* Сетка принципов */
.principles {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 40px;
}

/* Карточка принципа */
.principle {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 25px;
  padding: 40px 30px;
  box-shadow:
      0 15px 40px rgba(44, 24, 16, 0.12);
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
}

/* Акцент при наведении */
.principle::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
      135deg,
      rgba(212,165,116,0.25),
      transparent
  );
  opacity: 0;
  transition: opacity 0.4s ease;
}

.principle:hover::before {
  opacity: 1;
}

.principle:hover {
  transform: translateY(-10px);
}
.principle-icon {
  width: 64px;
  height: 64px;
  margin: 0 auto 22px;
  border-radius: 50%;
  background: linear-gradient(135deg, #e6c8a0, #d4a574);
  position: relative;
  box-shadow:
      0 10px 25px rgba(44, 24, 16, 0.15);
}
.principle h3 {
  font-size: 1.5rem;
  color: #2c1810;
  margin-bottom: 10px;
}

.principle p {
  font-size: 1.1rem;
  color: #5b3f30;
  line-height: 1.6;
}

/* лёгкое "дыхание" при hover */
.principle:hover .principle-icon {
  transform: scale(1.08);
  transition: transform 0.4s ease;
}
.icon-heart::before,
.icon-heart::after {
  content: '';
  position: absolute;
  width: 18px;
  height: 28px;
  background: white;
  border-radius: 18px 18px 0 0;
  top: 18px;
}

.icon-heart::before {
  left: 20px;
  transform: rotate(-45deg);
}

.icon-heart::after {
  left: 26px;
  transform: rotate(45deg);
}

.icon-target::before {
  content: '';
  position: absolute;
  inset: 14px;
  border: 3px solid white;
  border-radius: 50%;
}

.icon-target::after {
  content: '';
  position: absolute;
  width: 8px;
  height: 8px;
  background: white;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.icon-family::before,
.icon-family::after {
  content: '';
  position: absolute;
  background: white;
  border-radius: 50%;
}

/* головы */
.icon-family::before {
  width: 12px;
  height: 12px;
  top: 16px;
  left: 18px;
  box-shadow: 16px 0 0 white;
}

/* тела */
.icon-family::after {
  width: 28px;
  height: 14px;
  bottom: 16px;
  left: 18px;
  border-radius: 12px 12px 6px 6px;
}

/* Планшеты */
@media (max-width: 1024px) {
  .principles {
    gap: 30px;
  }
  .principle {
    padding: 35px 25px;
  }
}

/* Мобильные устройства */
@media (max-width: 768px) {
  .principles {
    grid-template-columns: 1fr; /* Одна карточка в ряд */
    gap: 20px;
  }
  .principle {
    padding: 30px 20px;
  }
  #methodology h2 {
    font-size: 2.2rem;
  }
  .principle h3 {
    font-size: 1.3rem;
  }
  .principle p {
    font-size: 1rem;
  }
  .principle-icon {
    width: 54px;
    height: 54px;
    margin-bottom: 18px;
  }
}

/* Очень маленькие экраны */
@media (max-width: 480px) {
  #methodology h2 {
    font-size: 1.9rem;
  }
  .principle h3 {
    font-size: 1.2rem;
  }
  .principle p {
    font-size: 0.95rem;
  }
  .principle-icon {
    width: 48px;
    height: 48px;
    margin-bottom: 15px;
  }
}


</style>