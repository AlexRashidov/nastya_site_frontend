<script setup>

</script>

<template>
  <section id="faq">
    <h2>Частые вопросы</h2>
    <div class="faq-list">
      <details class="faq-item">
        <summary>С какого возраста можно дрессировать собаку?</summary>
        <p>Начинать обучение можно с 3–4 месяцев, с учётом возраста, характера и уровня развития щенка.</p>
      </details>
      <details class="faq-item">
        <summary>Сколько длится одно занятие?</summary>
        <p>Стандартное занятие длится 60 минут, но обязательно отталкиваемся от состояния собаки.</p>
      </details>
      <details class="faq-item">
        <summary>Можно ли дрессировать взрослую собаку?</summary>
        <p>Да, можно. Возраст не является ограничением — обучение эффективно и для взрослых собак, просто может потребоваться чуть больше времени и терпения.</p>
      </details>
      <details class="faq-item">
        <summary>Что делать, если собака уже имеет плохие привычки?</summary>
        <p>Это не проблема. На занятиях мы выявляем причины нежелательного поведения и постепенно корректируем его с помощью безопасных и эффективных методов.</p>
      </details>
      <details class="faq-item">
        <summary>Что делать, если у меня нет опыта с собаками?
        </summary>
        <p>Это не проблема. Я всё подробно объясню и научу вас правильно взаимодействовать с собакой на каждом этапе обучения.</p>
      </details>
      <details class="faq-item">
        <summary>Есть ли пробное занятие?</summary>
        <p>Да, пробное занятие возможно. На нём вы познакомитесь со мной, форматом работы и получите первые рекомендации по обучению собаки.</p>
      </details>


    </div>
  </section>
</template>

<style scoped>
#faq {
  padding: 100px 20px;
  background: linear-gradient(135deg, #f0e6d6 0%, #f9f5f0 100%);
  font-family: 'Georgia', serif;
}

/* Заголовок */
#faq h2 {
  text-align: center;
  font-size: 3rem;
  color: #2c1810;
  margin-bottom: 60px;
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);
}

#faq h2::after {
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

/* Список */
.faq-list {
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 25px;
}

/* Карточка вопроса */
.faq-item {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  padding: 25px 30px;
  box-shadow: 0 15px 35px rgba(44, 24, 16, 0.12);
  transition: all 0.35s ease;
  border: 1px solid rgba(255,255,255,0.8);
}

/* Hover */
.faq-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 25px 55px rgba(44, 24, 16, 0.18);
}

/* Summary */
.faq-item summary {
  font-size: 1.35rem;
  color: #2c1810;
  cursor: pointer;
  list-style: none;
  position: relative;
  padding-right: 40px;
}

/* Убираем стандартный маркер */
.faq-item summary::-webkit-details-marker {
  display: none;
}

/* Плюс / минус */
.faq-item summary::after {
  content: '+';
  position: absolute;
  right: 0;
  top: 0;
  font-size: 1.8rem;
  color: #b5834d;
  transition: transform 0.3s ease;
}

.faq-item[open] summary::after {
  transform: rotate(45deg);
}

/* Ответ */
.faq-item p {
  margin-top: 18px;
  font-size: 1.1rem;
  line-height: 1.7;
  color: #5b3f30;
}

/* Плавность */
.faq-item p {
  animation: fadeIn 0.4s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Адаптив */
/* Планшеты */
@media (max-width: 768px) {
  #faq h2 {
    font-size: 2.4rem;
  }

  .faq-item summary {
    font-size: 1.2rem;
  }

  .faq-item p {
    font-size: 1rem;
  }

  .faq-list {
    gap: 20px;
    padding: 0 10px;
  }
}

/* Мобильные устройства */
@media (max-width: 480px) {
  #faq h2 {
    font-size: 2rem;
  }

  .faq-item summary {
    font-size: 1.1rem;
    padding-right: 35px;
  }

  .faq-item p {
    font-size: 0.95rem;
  }

  .faq-item {
    padding: 20px 15px;
  }
}
@media (max-width: 400px) {
  #faq {
    padding: 60px 12px; /* уменьшаем отступы */
  }

  #faq h2 {
    font-size: 1.9rem;
    margin-bottom: 40px;
  }

  .faq-list {
    gap: 18px;
  }

  .faq-item {
    padding: 18px 15px; /* уменьшаем внутренние отступы */
  }

  .faq-item summary {
    font-size: 1.05rem;
    padding-right: 30px; /* меньше места справа для плюсика */
  }

  .faq-item p {
    font-size: 0.9rem;
    line-height: 1.5;
  }
}


</style>