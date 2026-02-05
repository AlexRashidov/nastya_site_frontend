<template>
  <div class="feedback-section" id="feedback">
    <h2>Отзывы</h2>
    <Splide
        :options="options"
        class="reviews-splide"
    >
      <SplideSlide
          v-for="(review, i) in reviews"
          :key="i"
      >
        <div class="card">
          <p class="text">“{{ review.text }}”</p>

          <div class="footer">
            <div>
              <div class="name">{{ review.name }}</div>
              <div class="stars">
                <span v-for="n in 5" :key="n">
                  {{ n <= (review.rating || 5) ? '⭐' : '☆' }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </SplideSlide>
    </Splide>
    <div class="feedback_button">
      <button @click="isModalOpen = true">Оставить отзыв</button>
    </div>
    <div v-if="isModalOpen" class="modal" @click.self="closeModal">
      <div class="modal-content">
        <span class="close" @click="closeModal">×</span>

        <h3>Оставить отзыв</h3>

        <form @submit.prevent="submitReview">
          <label>
            Имя
            <input v-model="form.name" required />
          </label>

          <label>
            Отзыв
            <textarea v-model="form.text" rows="4" required />
          </label>

          <div class="rating">
        <span
            v-for="star in 5"
            :key="star"
            class="star"
            :class="{ active: star <= form.rating }"
            @click="form.rating = star"
        >
          ★
        </span>
          </div>

          <button class="submit-btn" :disabled="!form.rating">
            Отправить
          </button>
        </form>
      </div>
    </div>
  </div>

</template>

<script setup>
import {onMounted, ref} from "vue";
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import '@splidejs/vue-splide/css/skyblue';

const isModalOpen = ref(false);
const form = ref({
  name: '',
  text: '',
  rating: 0,
})

const closeModal = () => {
  isModalOpen.value = false;
}

const submitReview = async () => {
  try {
    const payload = {
      name: form.value.name,
      text: form.value.text,
      rating: form.value.rating,
    };

    const res = await fetch("http://localhost:3000/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const result = await res.json();
    if (result.success) {
      alert("Отзыв отправлен на модерацию!");
      form.value = { name: "", text: "", rating: 0 };
      isModalOpen.value = false;
      // Не добавляем сразу в reviews — ждём одобрения
    } else {
      alert("Ошибка при отправке отзыва");
    }
  } catch (err) {
    console.error(err);
    alert("Ошибка сети");
  }
};

const reviews = ref([])

const options = {
  type: 'loop',
  perPage: 1,
  gap: '24px',
  autoplay: true,
  interval: 4000,
  pauseOnHover: true,
  arrows: false,
  pagination: true,
}

const fetchReviews = async () => {
  try{
    const res = await fetch(`http://localhost:3000/reviews`);
    const data = await res.json();
    reviews.value = data.map(review => ({
      ...review,
    }));
  } catch (error) {
    console.error("Ошибка загрузки отзывов:", error);
  }
};
onMounted(() => {
  fetchReviews();
  setInterval(fetchReviews, 10000);
});

</script>


<style scoped>
.feedback-section {
  min-height: 100vh;
  padding: 20px 20px;
  background: linear-gradient(135deg, #f9f5f0 0%, #f0e6d6 100%);
  font-family: 'Georgia', serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.reviews-splide {
  width: 100%;
  max-width: 520px;
  margin: 0 auto;
}
.feedback_button{
  padding-top: 30px;
}
.feedback_button button{
  padding: 10px;
  width: 100%;
  border-radius: 30px;
  border: none;
  background: linear-gradient(135deg, #d4a574, #b5834d);
  color: white;
  font-size: 1.15rem;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.feedback_button button:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 30px rgba(44,24,16,0.25);
}

h2{
  font-size: 3rem;
  color: #2c1810;
  margin-bottom: 30px;
  position: relative;
}
h2::after{
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
.card {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 22px;
  padding: 28px 30px;
  box-shadow: 0 15px 35px rgba(44, 24, 16, 0.12);
  transition: all 0.35s ease;
  border: 1px solid rgba(255,255,255,0.8);
  display: flex;
  flex-direction: column;
}
.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 25px 55px rgba(44, 24, 16, 0.18);
}

.text {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #5b3f30;
  white-space: pre-line;
}
.text::before {
  content: '“';
  font-size: 3rem;
  color: #d4a574;
  line-height: 0;
  margin-right: 4px;
  vertical-align: -10px;
}

.footer {
  margin-top: 24px;
  display: flex;
  align-items: center;
  gap: 14px;
  padding-top: 16px;
  border-top: 1px solid rgba(181, 131, 77, 0.2);
}


.footer img {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 10px rgba(0,0,0,0.15);
}


.name {
  font-weight: 600;
  color: #2c1810;
  font-size: 1.05rem;
}

.stars {
  font-size: 14px;
  color: #f5a623;
}

:deep(.splide__slide) {
  transition: transform .5s ease, opacity .5s ease;
}

:deep(.splide__pagination__page.is-active) {
  background: #b5834d;
}
/* ===== МОДАЛЬНОЕ ОКНО ===== */

.modal {
  position: fixed;
  inset: 0;
  background: rgba(44, 24, 16, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 16px;
}

.modal-content {
  background: linear-gradient(135deg, #fffaf3, #f3e7d6);
  padding: 30px 28px;
  border-radius: 22px;
  width: 100%;
  max-width: 440px;
  position: relative;
  box-shadow: 0 25px 60px rgba(44, 24, 16, 0.25);
  font-family: 'Georgia', serif;
}

/* Крестик */
.close {
  position: absolute;
  top: 14px;
  right: 18px;
  font-size: 26px;
  cursor: pointer;
  color: #5b3f30;
}

/* ===== ФОРМА ===== */

.modal-content form {
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-top: 10px;
}

.modal-content h3 {
  font-size: 1.6rem;
  color: #2c1810;
  margin-bottom: 10px;
  text-align: center;
}

/* Label + input вертикально */
.modal-content label {
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 14px;
  color: #4a3a2a;
}

/* Поля ввода */
.modal-content input,
.modal-content textarea {
  width: 100%;
  padding: 12px 14px;
  border-radius: 14px;
  border: 1px solid #d6c2a5;
  background: #fff;
  font-family: inherit;
  font-size: 14px;
  color: #2c1810;
  box-sizing: border-box;
}

.modal-content input:focus,
.modal-content textarea:focus {
  outline: none;
  border-color: #b5834d;
  box-shadow: 0 0 0 2px rgba(181, 131, 77, 0.2);
}

/* Текст отзыва */
.modal-content textarea {
  min-height: 110px;
  resize: vertical;
}

/* ===== ЗВЁЗДЫ ===== */

.rating {
  display: flex;
  justify-content: center;
  gap: 8px;
  font-size: 32px;
  margin: 6px 0 2px;
}

.star {
  cursor: pointer;
  color: #d6c2a5;
  transition: transform 0.2s ease, color 0.2s ease;
}

.star:hover {
  transform: scale(1.15);
}

.star.active {
  color: #f5a623;
}

/* ===== КНОПКА ===== */

.submit-btn {
  width: 100%;
  padding: 12px;
  border-radius: 30px;
  border: none;
  background: linear-gradient(135deg, #d4a574, #b5834d);
  color: white;
  font-size: 1.05rem;
  cursor: pointer;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 25px rgba(44, 24, 16, 0.25);
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  box-shadow: none;
}

@media (min-width: 1200px) {
  .reviews-splide {
    max-width: 600px;
  }
}
@media (max-width: 768px) {
  .feedback-section {
    padding: 80px 16px;
  }

  .reviews-splide {
    max-width: 100%;
  }

  .card {
    max-height: none;
  }

  h2 {
    font-size: 2.2rem;
    margin-bottom: 40px;
  }

  .text {
    font-size: 1rem;
  }
}
@media (max-width: 480px) {
  .feedback-section {
    padding: 60px 12px;
  }

  h2 {
    font-size: 1.9rem;
    margin-bottom: 30px;
  }

  .reviews-splide {
    max-width: 100%;
  }

  .card {
    padding: 20px 18px;
  }

  .text {
    font-size: 0.95rem;
  }

  .modal-content {
    padding: 20px 16px;
    max-width: 90%;
  }

  .modal-content h3 {
    font-size: 1.4rem;
  }

  .modal-content input,
  .modal-content textarea {
    font-size: 13px;
  }

  .rating {
    font-size: 26px;
  }

  .submit-btn {
    font-size: 0.95rem;
    padding: 10px;
  }
}

</style>

