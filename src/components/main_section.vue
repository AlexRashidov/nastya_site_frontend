<script setup>
// Можно добавить интерактивность позже
</script>

<template>
  <div class="main_section" id="main">
    <div class="container">
      <!-- Левая часть с изображением -->
      <div class="left_part">
        <div class="img_container">
          <img
              src="https://kinolog-anastasia.netlify.app/main_section.jpg"
              alt="Анастасия и Геральд"
              class="main-image"
          >
          <!-- Декоративный элемент на изображении -->
          <div class="image-overlay"></div>
        </div>
      </div>

      <!-- Правая часть с текстом -->
      <div class="right_part">
        <div class="text_container">
          <!-- Декоративный элемент перед текстом -->
          <div class="text-decoration">
            <div class="decoration-line"></div>
            <div class="paw-icon">🐾</div>
            <div class="decoration-line"></div>
          </div>

          <!-- Основной текст -->
          <h1 class="main-title">
            <span class="name-highlight">Анастасия</span> и
            <span class="dog-highlight">Геральд</span>
          </h1>

          <p class="text">
            Гармония человека и собаки через профессиональную кинологию
          </p>

          <!-- Подзаголовок или доп. текст -->
          <p class="subtext">
            Профессиональные услуги кинолога с индивидуальным подходом к каждой собаке
          </p>

          <!-- Кнопка -->
          <button class="cta-button" @click="$router.push({name: 'contacts', hash:'#contacts'})">
            Записаться на консультацию
          </button>

          <!-- Контактная информация -->
          <div class="contact-info">
            <div class="contact-item">
              <span class="contact-icon"><img src="https://kinolog-anastasia.netlify.app/phone_icon.png"></span>
              <span>+7 (923) 004-18-97</span>
            </div>
            <div class="contact-item">
              <span class="contact-icon"><img src="https://kinolog-anastasia.netlify.app/gmail_icon.png"></span>
              <span>nastya.min.05@list.ru</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Декоративные элементы фона -->
    <div class="background-elements">
      <div class="bg-circle circle-1"></div>
      <div class="bg-circle circle-2"></div>
      <div class="bg-paw paw-1">🐾</div>
      <div class="bg-paw paw-2">🐾</div>
    </div>
  </div>
</template>

<style scoped>
.main_section {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  min-height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #f9f5f0 0%, #f0e6d6 100%);
  padding:0 ;
}

.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  max-width: 1400px;
  width: 100%;
  position: relative;
  z-index: 2;
}

/* Левая часть с изображением */
.left_part {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}

.img_container {
  position: relative;
  width: 100%;
  max-width: 600px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(139, 69, 19, 0.15);
  transform: perspective(1000px) rotateY(-5deg);
  transition: transform 0.5s ease;
}

.img_container:hover {
  transform: perspective(1000px) rotateY(0deg);
}

.img_container img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.5s ease;
}

.img_container:hover img {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, rgba(139, 69, 19, 0.1), transparent);
  pointer-events: none;
}

/* Правая часть с текстом */
.right_part {
  flex: 1;
  display: flex;
  justify-content: flex-start;
}

.text_container {
  max-width: 500px;
  padding: 2rem;
}

.text-decoration {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.decoration-line {
  height: 2px;
  flex-grow: 1;
  background: linear-gradient(90deg, #8B4513, #D2691E);
}

.paw-icon {
  font-size: 1.5rem;
  opacity: 0.7;
}

.main-title {
  font-family: 'Georgia', serif;
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  color: #2c1810;
}

.name-highlight {
  color: #8B4513;
  position: relative;
  display: inline-block;
}

.name-highlight::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 3px;
  background: #D2691E;
  border-radius: 2px;
}

.dog-highlight {
  color: #D2691E;
  font-style: italic;
}

.text {
  font-family: 'Tahoma', 'Geneva', 'Verdana', sans-serif;
  font-size: 1.8rem;
  line-height: 1.6;
  color: #4a3520;
  margin-bottom: 2rem;
  padding-left: 0.5rem;
  border-left: 3px solid #D2691E;
}

.subtext {
  font-family: 'Tahoma', 'Geneva', 'Verdana', sans-serif;
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 2.5rem;
  line-height: 1.5;
}

.cta-button {
  background: linear-gradient(135deg, #8B4513, #D2691E);
  color: white;
  border: none;
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  font-family: 'Tahoma', sans-serif;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(139, 69, 19, 0.3);
  margin-bottom: 2rem;
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(139, 69, 19, 0.4);
  background: linear-gradient(135deg, #D2691E, #8B4513);
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(139, 69, 19, 0.2);
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-family: 'Tahoma', sans-serif;
  color: #555;
  font-size: 0.95rem;
}

.contact-icon {
  font-size: 1.2rem;
}
.contact-icon img{
  width: 35px;
  height: 35px;
}

/* Декоративные элементы фона */
.background-elements {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.bg-circle {
  position: absolute;
  border-radius: 50%;
  background: rgba(210, 105, 30, 0.05);
}

.circle-1 {
  width: 300px;
  height: 300px;
  top: 10%;
  right: 5%;
}

.circle-2 {
  width: 200px;
  height: 200px;
  bottom: 15%;
  left: 5%;
}

.bg-paw {
  position: absolute;
  font-size: 2rem;
  opacity: 0.1;
}

.paw-1 {
  top: 20%;
  left: 10%;
}

.paw-2 {
  bottom: 20%;
  right: 15%;
}

/* Адаптивность */
@media (max-width: 1200px) {
  .container {
    gap: 3rem;
  }
  .main-title {
    font-size: 3rem;
  }
  .text {
    font-size: 1.6rem;
  }
  .img_container {
    max-width: 500px;
  }
}

@media (max-width: 992px) {
  .container {
    flex-direction: column;
    gap: 2.5rem;
  }

  .left_part, .right_part {
    justify-content: center;
    text-align: center;
  }

  .main-title {
    font-size: 2.5rem;
  }
  .text {
    font-size: 1.4rem;
    padding-left: 0;
    border-left: none;
  }
  .subtext {
    font-size: 1rem;
  }
  .img_container {
    max-width: 80%;
    transform: none;
  }
}

@media (max-width: 768px) {
  .main_section {
    padding: 1rem;
  }
  .text_container {
    padding: 1rem;
  }
  .main-title {
    font-size: 2rem;
  }
  .text {
    font-size: 1.2rem;
  }
  .subtext {
    font-size: 0.95rem;
  }
  .cta-button {
    width: 100%;
    padding: 0.9rem;
    font-size: 1rem;
  }
  .img_container {
    max-width: 100%;
    margin: 0 auto;
  }
  .background-elements {
    display: none; /* прячем декоративные элементы на маленьких экранах */
  }
}

@media (max-width: 480px) {
  .main-title {
    font-size: 1.8rem;
  }
  .text {
    font-size: 1.1rem;
  }
  .subtext {
    font-size: 0.9rem;
  }
  .cta-button {
    font-size: 0.95rem;
    padding: 0.8rem;
  }
}
</style>