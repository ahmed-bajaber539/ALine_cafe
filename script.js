// تفعيل AOS
AOS.init({
    duration: 1200,
});

// زر الطلب الآن
document.querySelectorAll('.shop-now, .product-card button').forEach(button => {
    button.addEventListener('click', () => {
        alert('🚀 شكراً لاختيارك Alien Cafe! سنصل إليك قريبًا.');
    });
});
