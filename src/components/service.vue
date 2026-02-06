<script setup>

</script>

<template>
  <section id="service">
    <h2>Предоставляемые услуги</h2>
    <div class="services-grid">
      <!-- Карточки услуг -->
      <div class="service-card">
        <h3>Очная консультация</h3>

        <ul>
          <li>Встреча в удобном для вас месте/оборудованном зале</li>
          <li>Рекомендации и ответы на вопросы</li>
          <li>Практические упражнения</li>
          <li>Домашние задания</li>
          <li>Полная онлайн поддержка</li>
        </ul>
        <p>Цена: 1500 рублей.</p>
      </div>

      <div class="service-card">
        <h3>Онлайн консультация</h3>
        <ul>
          <li>Созвон по видео связи</li>
          <li>Рекомендации и ответы на вопросы</li>
          <li>Практические упражнения</li>
          <li>Домашние задания</li>
          <li>Полная онлайн поддержка</li>
        </ul>
        <p>Цена: 1000 рублей.</p>
      </div>


    </div>
  </section>
</template>

<style scoped>
#service {
  padding: 100px 20px;
  background: linear-gradient(135deg, #f9f5f0 0%, #f0e6d6 100%);
  position: relative;
  overflow: hidden;
}
#service::before {
  content: '';
  position: absolute;
  top: -100px;
  right: -100px;
  width: 300px;
  height: 300px;
  background: rgba(44, 24, 16, 0.03);
  border-radius: 50%;
}
#service::after {
  content: '';
  position: absolute;
  bottom: -50px;
  left: -50px;
  width: 200px;
  height: 200px;
  background: rgba(44, 24, 16, 0.03);
  border-radius: 50%;
}


#service h2 {
  text-align: center;
  font-family: 'Georgia', serif;
  font-size: 3.2rem;
  color: #2c1810;
  margin-bottom: 20px;
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);
}
#service h2::after {
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

.services-grid {
  font-size: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-family: 'Georgia', serif;
  max-width: 1200px;
  margin: 60px auto 0;
  flex-wrap: wrap;
  gap: 20px;
  padding-right: 35px;

}
.service-card {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(8px);
  border-radius: 20px;
  padding: 35px 30px;
  margin: 20px ;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.8);
  box-shadow:
      0 10px 30px rgba(44, 24, 16, 0.08),
      0 1px 0 rgba(255, 255, 255, 0.5) inset;
}

.service-card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 20px;
  background: linear-gradient(135deg, transparent, rgba(212,165,116,0.25));
  opacity: 0;
  transition: opacity 0.4s ease;
}

.service-card:hover::before {
  opacity: 1;
}
.service-card:hover {
  transform: translateY(-10px) scale(1.04);
  box-shadow:
      0 25px 60px rgba(44, 24, 16, 0.18),
      0 0 0 1px rgba(212,165,116,0.3);
}

.service-card h3 {
  font-size: 1.6rem;
  color: #2c1810;
  margin-bottom: 25px;
  position: relative;
}

.service-card p {
  font-size: 1.1rem;
  color: #6b4b3a;
  margin-bottom: 15px;
}

.service-card ul {
  padding-left: 18px;
  color: #3f2a1f;
}

.service-card li {
  margin-bottom: 8px;
}
/* Адаптивность для планшетов и мобильных устройств */
@media (max-width: 1024px) {
  .services-grid {
    flex-wrap: wrap;
    justify-content: center;
  }
  .service-card {
    width: 45%; /* Две карточки в ряд на планшете */
    margin: 15px;
  }
}

@media (max-width: 768px) {
  .services-grid {
    flex-direction: column;
    align-items: center;
  }
  .service-card {
    width: 90%; /* Одна карточка в ряд на мобильных */
    margin: 10px 0;
  }
}

@media (max-width: 480px) {
  #service h2 {
    font-size: 2.2rem;
  }
  .service-card h3 {
    font-size: 1.4rem;
  }
  .service-card p, .service-card li {
    font-size: 1rem;
  }
}

</style>