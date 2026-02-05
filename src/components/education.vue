<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Массив дипломов
const diplomas = [
  { src: 'https://kinolog-anastasia.netlify.app/diploma1.png', alt: 'Диплом 1' },
  { src: 'https://kinolog-anastasia.netlify.app/diploma2.png', alt: 'Диплом 2' },
];
</script>

<template>
  <section id="education">
    <h2>Образование</h2>
    <div class="services-grid">
      <div class="service-card">
        <h3>Дипломы и сертификаты</h3>
        <Swiper
            :modules="[Navigation, Pagination, Autoplay]"
            :slides-per-view="1"
            :loop="true"
            :autoWidth="true"
            :autoplay="{ delay: 3000, disableOnInteraction: false }"
            navigation
            pagination
            class="diploma-swiper"
        >
          <SwiperSlide v-for="(diplom, index) in diplomas" :key="index">
            <img :src="diplom.src" :alt="diplom.alt" class="diploma-img" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
</template>

<style scoped>
#education {
  padding: 100px 20px;
  background: linear-gradient(135deg, #f9f5f0 0%, #f0e6d6 100%);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

#education::before,
#education::after {
  content: '';
  position: absolute;
  border-radius: 50%;
  background: rgba(44, 24, 16, 0.03);
}

#education::before {
  top: -100px;
  right: -100px;
  width: 300px;
  height: 300px;
}

#education::after {
  bottom: -50px;
  left: -50px;
  width: 200px;
  height: 200px;
}

#education h2 {
  text-align: center;
  font-family: 'Georgia', serif;
  font-size: 3.2rem;
  color: #2c1810;
  margin-bottom: 40px;
  position: relative;
  display: inline-block;
}

#education h2::after {
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
  display: flex;
  justify-content: center;
  font-family: 'Georgia', serif;
  max-width: 1200px;
  margin: 0 auto;
}

.service-card {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(8px);
  border-radius: 20px;
  padding: 35px 30px;
  margin: 20px;
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
  text-align: center;
}

.diploma-swiper {
  width: auto;         /* ширина по контенту */
  max-width: 600px;    /* ограничение максимальной ширины */
  margin: 0 auto;
  display: block;
}

.diploma-img {
  max-height: 400px;  /* ограничиваем максимальную высоту */
  max-width: 100%;
  border-radius: 12px;
  object-fit: contain; /* чтобы изображение полностью помещалось */
  display: block;
}
/* Планшеты */
@media (max-width: 900px) {
  .services-grid {
    flex-direction: column;
    align-items: center;
  }

  .service-card {
    width: 90%;
    padding: 30px 20px;
  }

  .diploma-swiper {
    max-width: 450px;
  }

  .diploma-img {
    max-height: 300px;
  }
}

/* Мобильные устройства */
@media (max-width: 480px) {
  #education h2 {
    font-size: 2.4rem;
  }

  .service-card {
    padding: 25px 15px;
  }

  .diploma-swiper {
    max-width: 300px;
  }

  .diploma-img {
    max-height: 200px;
  }

  .service-card h3 {
    font-size: 1.3rem;
  }
}
/* Добавляем новый медиа-запрос для узких экранов */
@media (max-width: 400px) {
  #education {
    padding: 60px 12px;
  }

  #education h2 {
    font-size: 2rem;
    margin-bottom: 30px;
  }

  .service-card {
    padding: 20px 12px;
    width: 100%;
    margin: 15px 0;
  }

  .service-card h3 {
    font-size: 1.2rem;
    margin-bottom: 20px;
  }

  .diploma-swiper {
    max-width: 260px;
  }

  .diploma-img {
    max-height: 180px;
  }
}



</style>
