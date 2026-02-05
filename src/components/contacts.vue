<script setup>
import {ref, reactive} from "vue";
const form = reactive({
  name: "",
  phone: "",
  message: ""
});

const submitForm = async () => {
  console.log("Данные формы: " , form)
  try {
    await fetch('http://localhost:3000/form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    })


    alert('Заявка отправлена!')

    form.name = ""
    form.phone = ""
    form.message = ""


  } catch (e) {
    console.error(e)
    alert('Ошибка отправки')
  }
}
</script>

<template>
  <section id="contacts">
    <div class="contacts-container">

      <div class="contact-form">
        <h2>Записаться на консультацию</h2>

        <form>
          <input type="text" placeholder="Ваше имя" v-model="form.name" required>
          <input type="tel" placeholder="Телефон" v-model="form.phone" required>
          <textarea placeholder="Опишите вашу ситуацию" v-model="form.message"></textarea>
          <button type="submit" @click="submitForm">Отправить заявку</button>
        </form>
      </div>
      <div class="right_part">
        <div class="first">
          <p>Запишись сейчас, и получи пробную консультацию бесплатно.</p>
        </div>
        <div class="contact-info">
          <h3>Контакты</h3>
          <div class="contact-details">
            <p class="phone">+7 (923) 004-18-97</p>
            <p class="email">nastya.min.05@list.ru</p>
            <p class="location">Томск, Томская область</p>
          </div>

          <div class="social-links">
            <a href="https://t.me/nastasiasunnnn">Telegram</a>
            <a href="https://vk.com/black_witch05">VK</a>
          </div>
        </div>
      </div>


    </div>
  </section>

</template>

<style scoped>
#contacts {
  padding: 100px 20px;
  background: linear-gradient(135deg, #f9f5f0 0%, #f0e6d6 100%);
  font-family: 'Georgia', serif;
}

.contacts-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 60px;
}

/* ===== ФОРМА ===== */
.contact-form {
  background: rgba(255,255,255,0.95);
  border-radius: 25px;
  padding: 45px 60px;
  box-shadow: 0 20px 50px rgba(44, 24, 16, 0.15);
}

.contact-form h2 {
  font-size: 2.4rem;
  color: #2c1810;
  margin-bottom: 30px;
  position: relative;
}

.contact-form h2::after {
  content: '';
  position: absolute;
  bottom: -12px;
  left: 0;
  width: 70px;
  height: 4px;
  background: linear-gradient(90deg, #d4a574, #b5834d);
  border-radius: 2px;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 15px 18px;
  margin-bottom: 18px;
  border-radius: 15px;
  border: 1px solid rgba(44,24,16,0.15);
  font-size: 1.05rem;
  font-family: inherit;
  outline: none;
  transition: border 0.3s ease, box-shadow 0.3s ease;
}

.contact-form textarea {
  resize: none;
  min-height: 120px;
}
.right_part{
  display: flex;
  flex-direction: column;
  justify-content: start;

}
.contact-form input:focus,
.contact-form textarea:focus {
  border-color: #d4a574;
  box-shadow: 0 0 0 3px rgba(212,165,116,0.25);
}

.contact-form button {
  width: 100%;
  padding: 16px;
  border-radius: 30px;
  border: none;
  background: linear-gradient(135deg, #d4a574, #b5834d);
  color: white;
  font-size: 1.15rem;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.contact-form button:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 30px rgba(44,24,16,0.25);
}
.first{
  font-family: Georgia, serif;
  font-size: 26px;
  background: linear-gradient(135deg, #d4a574, #b5834d);
  border-radius: 15px;

  color: white;
  text-align: center;
  max-height: 80px;
}
.first p{
  margin: 10px;
}
/* ===== КОНТАКТЫ ===== */
.contact-info {
  padding: 40px 20px;
}

.contact-info h3 {
  font-size: 1.8rem;
  color: #2c1810;
  margin-bottom: 25px;
}

.contact-details p {
  font-size: 1.1rem;
  color: #3f2a1f;
  margin-bottom: 15px;
  padding-left: 32px;
  position: relative;
}

/* Иконки через CSS */
.contact-details .phone::before,
.contact-details .email::before,
.contact-details .location::before {
  content: '';
  position: absolute;
  left: 0;
  top: 4px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #d4a574;
}

.contact-details .email::before {
  background: #c79a63;
}

.contact-details .location::before {
  background: #b5834d;
}

/* Соцсети */
.social-links {
  margin-top: 30px;
  display: flex;
  gap: 20px;
}

.social-links a {
  text-decoration: none;
  color: #b5834d;
  font-size: 1.05rem;
  position: relative;
}

.social-links a::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: #b5834d;
  transition: width 0.3s ease;
}

.social-links a:hover::after {
  width: 100%;
}

/* ===== АДАПТИВ ===== */
@media (max-width: 900px) {
  .contacts-container {
    grid-template-columns: 1fr;
    padding: 0 20px; /* Добавил внутренние отступы */
  }

  .right_part {
    margin-top: 30px; /* Отделяем блок с контактами */
  }
}

@media (max-width: 480px) {
  #contacts {
    padding: 60px 15px;
  }

  .contact-form {
    padding: 30px 20px;
  }

  .contact-form h2 {
    font-size: 2rem;
  }

  .contact-form input,
  .contact-form textarea {
    padding: 12px 15px;
    font-size: 1rem;
  }

  .contact-form button {
    font-size: 1rem;
    padding: 14px;
  }

  .first {
    font-size: 20px;
    max-height: 70px;
  }

  .contact-info h3 {
    font-size: 1.5rem;
  }

  .contact-details p {
    font-size: 1rem;
    padding-left: 25px;
  }

  .social-links {
    flex-direction: column;
    gap: 12px;
  }
}

/* Новый медиа-запрос для очень маленьких экранов ~390px (iPhone 12) */
@media (max-width: 400px) {
  #contacts {
    padding: 50px 12px;
  }

  .contact-form {
    padding: 25px 15px;
  }

  .contact-form h2 {
    font-size: 1.7rem;
  }

  .contact-form input,
  .contact-form textarea,
  .contact-form button {
    padding: 3px 3px;
    font-size: 0.9rem;
  }

  .first {
    font-size: 18px;
    max-height: 65px;
  }

  .contact-info h3 {
    font-size: 1.3rem;
  }

  .contact-details p {
    font-size: 0.9rem;
    padding-left: 20px;
  }

  .social-links {
    gap: 10px;
  }
}

</style>