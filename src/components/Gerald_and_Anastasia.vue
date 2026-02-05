<script setup>

</script>

<template>
  <section id="my_exp">
    <div class="about-container">
      <div class="about-image">
        <img src="https://kinolog-anastasia.netlify.app/gerald_and_anastasia.jpg" alt="Анастасия">
      </div>

      <div class="about-content">
        <h2>Мой опыт</h2>

        <p>
          Мой путь в кинологию начался с собственной собаки с выраженными поведенческими проблемами — от гипервозбудимости до агрессии к людям. Как и многие владельцы, я не понимала, как наладить контакт с собакой, добиться послушания на улице и спокойного поведения дома.

          Со временем, благодаря обучению и практическому опыту, мне удалось выстроить устойчивую связь с собакой и скорректировать поведение. Сегодня мой пёс уверенно выполняет подзыв, спокойно остаётся дома один, комфортно взаимодействует с людьми и может гулять без поводка, оставаясь рядом со мной.
          <br>

          Этот опыт позволил мне выстроить эффективную систему обучения, которая помогает владельцам лучше понимать своих собак и добиваться стабильного результата в реальной жизни.
        </p>

        <div class="certificates_and_education"></div>
      </div>
    </div>
  </section>
</template>


<style scoped>
#my_exp {
  padding: 100px 20px;
  background: linear-gradient(135deg, #f0e6d6 0%, #f9f5f0 100%);
  position: relative;
}

.about-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 60px;
  align-items: center;
  font-family: 'Georgia', serif;
}

/* Фото */

.about-image {
  position: relative;
}

.about-image:hover img {
  transform: scale(1.05);

}

.about-image img {
  width: 100%;
  border-radius: 25px;
  box-shadow:
      0 25px 60px rgba(44, 24, 16, 0.2);
  transition: transform 0.5s ease;
}

/* Контент */
.about-content {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 25px;
  padding: 45px 40px;
  box-shadow:
      0 15px 40px rgba(44, 24, 16, 0.1);
  position: relative;
}

/* Заголовок */
.about-content h2 {
  font-size: 2.6rem;
  color: #2c1810;
  margin-bottom: 25px;
  position: relative;
}

.about-content h2::after {
  content: '';
  position: absolute;
  bottom: -12px;
  left: 0;
  width: 70px;
  height: 4px;
  background: linear-gradient(90deg, #d4a574, #b5834d);
  border-radius: 2px;
}

/* Текст */
.about-content p {
  font-size: 1.15rem;
  color: #5b3f30;
  line-height: 1.7;
  margin-bottom: 35px;
}

/* Образование */
.certificates_and_education {
  border-top: 1px solid rgba(44, 24, 16, 0.1);
  padding-top: 25px;
}

.certificates_and_education h3 {
  font-size: 1.5rem;
  color: #2c1810;
  margin-bottom: 15px;
}

.certificates_and_education ul {
  list-style: none;
  padding: 0;
}

.certificates_and_education li {
  font-size: 1.1rem;
  color: #3f2a1f;
  padding-left: 28px;
  position: relative;
}

.certificates_and_education li::before {
  content: "🎓";
  position: absolute;
  left: 0;
  top: 2px;
}

.certificates_and_education span {
  color: #b5834d;
  font-weight: bold;
}

/* Адаптив */
/* Планшеты */
@media (max-width: 900px) {
  .about-container {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .about-image {
    max-width: 400px;
    margin: 0 auto;
  }

  .about-content {
    padding: 35px 25px;
  }
}

/* Мобильные устройства */
@media (max-width: 600px) {
  .about-content h2 {
    font-size: 2rem;
  }

  .about-content p {
    font-size: 1rem;
    line-height: 1.5;
  }

  .certificates_and_education h3 {
    font-size: 1.3rem;
  }

  .certificates_and_education li {
    font-size: 1rem;
    padding-left: 24px;
  }

  .about-content {
    padding: 25px 20px;
  }
}

/* Очень маленькие экраны */
@media (max-width: 400px) {
  .about-content h2 {
    font-size: 1.7rem;
  }

  .about-content p {
    font-size: 0.95rem;
  }

  .certificates_and_education li {
    font-size: 0.9rem;
    padding-left: 20px;
  }
}

</style>