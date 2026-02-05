<script setup>

</script>

<template>
  <footer id="footer">
    <div class="footer-content">
      <div class="footer-logo">
        <h3>Анастасия Конопленко</h3>
        <p>Профессиональный кинолог</p>
      </div>
      <p class="copyright">© 2024 Все права защищены</p>
    </div>
  </footer>

</template>

<style scoped>
#footer {
  padding: 60px 20px 50px;
  background: linear-gradient(145deg, #6f4e37, #8c6e4a);
  color: #f5f0e8;
  font-family: 'Georgia', serif;
  box-shadow: inset 0 0 60px rgba(255, 255, 255, 0.08);
  border-top: 3px solid #d4a574;
}

.footer-content {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
}

/* Логотип и подпись */
.footer-logo h3 {
  font-size: 2.1rem;
  font-weight: 600;
  margin-bottom: 6px;
  text-shadow: 0 1px 3px rgba(0,0,0,0.25);
}

.footer-logo p {
  font-size: 1.1rem;
  font-style: italic;
  color: #d8c3a5;
  text-shadow: 0 1px 3px rgba(0,0,0,0.2);
}


.footer-nav a {
  color: #f5f0e8;
  font-size: 1.1rem;
  text-decoration: none;
  padding: 6px 10px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 10px rgba(0,0,0,0.12);
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  user-select: none;
}

.footer-nav a:hover {
  background-color: #d4a574;
  color: #3a241a;
  box-shadow: 0 4px 15px rgba(212, 165, 116, 0.7);
}

/* Копирайт */
.copyright {
  width: 100%;
  margin-top: 40px;
  text-align: center;
  font-size: 0.9rem;
  color: #e1d7c6;
  font-weight: 300;
  letter-spacing: 0.03em;
  user-select: none;
  text-shadow: 0 1px 2px rgba(0,0,0,0.1);
}

/* Адаптив */
/* Адаптив */
@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    text-align: center;
    gap: 20px;
  }

  .footer-nav {
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
  }

  .footer-logo h3 {
    font-size: 1.8rem;
  }

  .footer-logo p {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  #footer {
    padding: 40px 15px 30px;
  }

  .footer-logo h3 {
    font-size: 1.5rem;
  }

  .footer-logo p {
    font-size: 0.9rem;
  }

  .copyright {
    font-size: 0.8rem;
    margin-top: 25px;
  }

  .footer-nav a {
    font-size: 1rem;
    padding: 5px 8px;
  }
}


</style>