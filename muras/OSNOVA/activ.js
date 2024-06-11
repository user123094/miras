// Получаем элементы навигационного меню
const navLinks = document.querySelectorAll('nav ul li a');

// Добавляем эффект анимации к навигационному меню
navLinks.forEach(link => {
  link.addEventListener('mouseover', () => {
    link.classList.add('hover');
  });
  link.addEventListener('mouseout', () => {
    link.classList.remove('hover');
  });
});

// Получаем элементы разделов сайта
const sections = document.querySelectorAll('main section');

// Добавляем эффект анимации к разделам сайта
sections.forEach(section => {
  section.addEventListener('mouseover', () => {
    section.classList.add('active');
  });
  section.addEventListener('mouseout', () => {
    section.classList.remove('active');
  });
});

// Добавляем эффект анимации к заголовкам разделов
const headings = document.querySelectorAll('main section h2');
headings.forEach(heading => {
  heading.addEventListener('mouseover', () => {
    heading.classList.add('animated');
  });
  heading.addEventListener('mouseout', () => {
    heading.classList.remove('animated');
  });
});