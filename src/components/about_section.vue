<script setup>

</script>

<template>
  <section id="about">
    <div class="about-container">
      <div class="about-image">
        <img src="https://nastya-site-frontend.vercel.app/Anastasia.jpg" alt="Профессиональный кинолог Анастасия Конопленко">
      </div>

      <div class="about-content">
        <h2>Профессиональный подход</h2>

        <p>
          Опыт работы с собаками более 5 лет. Индивидуальный подход к каждой собаке
          с учётом породы, возраста и характера.
        </p>

        <div class="certificates_and_education">
          <h3>Сертификаты и образование</h3>
          <ul>
            <li>
              <strong>Среднее специальное образование</strong><br>
              АТКиП — специальность <span>«Кинолог»</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>


<style scoped>
#about {
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

.about-image img {
  width: 100%;
  border-radius: 25px;
  box-shadow:
      0 25px 60px rgba(44, 24, 16, 0.2);
  transition:transform 0.5s ease ;
}
.about-image:hover img {
  transform: scale(1.05);

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
@media (max-width: 900px) {
  .about-container {
    grid-template-columns: 1fr;
    padding: 0 20px; /* Добавим внутренние отступы */
  }

  .about-image {
    max-width: 400px;
    margin: 0 auto 30px; /* Отступ снизу для разделения с текстом */
  }
}

@media (max-width: 480px) {
  .about-content {
    padding: 25px 16px; /* Немного уменьшили padding */
  }

  .about-content h2 {
    font-size: 1.8rem; /* Сделали заголовок чуть меньше */
  }

  .about-content p {
    font-size: 0.95rem;
    line-height: 1.4;
  }

  .certificates_and_education h3 {
    font-size: 1.2rem;
  }

  .certificates_and_education li {
    font-size: 0.9rem;
    padding-left: 18px;
  }
}

/* Новый медиа-запрос для очень маленьких экранов (например iPhone 12) */
@media (max-width: 400px) {
  #about {
    padding: 60px 12px;
  }

  .about-image {
    max-width: 100%;
  }

  .about-content {
    padding: 20px 12px;
  }

  .about-content h2 {
    font-size: 1.6rem;
  }

  .about-content p {
    font-size: 0.9rem;
    line-height: 1.3;
  }

  .certificates_and_education h3 {
    font-size: 1.1rem;
  }

  .certificates_and_education li {
    font-size: 0.85rem;
    padding-left: 14px;
  }
}

</style>