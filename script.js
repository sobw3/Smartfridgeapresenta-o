// Aguarda o conteúdo da página carregar completamente antes de rodar qualquer script.
document.addEventListener("DOMContentLoaded", function() {

    // 1. Lógica para alternar conteúdo (Condomínio vs Empresa) com ROLAGEM SUAVE
    const choicebutton = document.querySelectorAll(".choice-button");
    const condoContent = document.querySelector("#content-condominios");
    const empresaContent = document.querySelector("#content-empresas");

    choicebutton.forEach(button => {
        card.addEventListener("click", (event) => {
            // Impede que o clique no botão de link dentro do card acione esta lógica
            if (event.target.classList.contains('choice-button')) {
                return;
            }

            const target = card.getAttribute("data-target");
            let targetElement; // Variável para guardar o elemento que será revelado

            if (target === "condominios") {
                condoContent.classList.remove("hidden");
                empresaContent.classList.add("hidden");
                targetElement = condoContent; // Define o alvo da rolagem
            } else if (target === "empresas") {
                condoContent.classList.add("hidden");
                empresaContent.classList.remove("hidden");
                targetElement = empresaContent; // Define o alvo da rolagem
            }

            // --- NOVA LÓGICA DE ROLAGEM SUAVE ---
            // Após revelar o conteúdo, verificamos se o elemento existe e rolamos a tela até ele.
            if (targetElement) {
                // O valor 'start' alinha o topo do elemento com o topo da janela de visualização.
                // O 'behavior: smooth' cria a animação de rolagem.
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // 2. Animações de Entrada com ScrollTrigger (permanecem as mesmas)
    // Animação do Herói
    gsap.from(".hero-content > *", { duration: 1, y: 30, opacity: 0, stagger: 0.2, delay: 0.2 });
    gsap.from(".hero-visual .placeholder-illustration", { duration: 1.2, opacity: 0, scale: 0.9, delay: 0.5 });
    
    // Animação da Seção de Escolha
    gsap.from(".choice-card", {
        duration: 0.8, y: 50, opacity: 0, stagger: 0.2,
        scrollTrigger: { trigger: "#audience-choice", start: "top 85%" }
    });

    // Animações para o conteúdo de CONDOMÍNIOS
    gsap.utils.toArray('#content-condominios .step, #content-condominios .benefit-card, #content-condominios #faq details').forEach(elem => {
        gsap.from(elem, {
            y: 50, opacity: 0, duration: 0.8,
            scrollTrigger: { trigger: elem, start: "top 85%", toggleActions: "play none none none" }
        });
    });

    // Animação para o conteúdo de EMPRESAS
    gsap.from("#content-empresas .feature-item", {
        y: 50, opacity: 0, duration: 0.8, stagger: 0.2,
        scrollTrigger: { trigger: "#empresas-intro", start: "top 80%" }
    });

    // Animação para a seção de parceria global
    gsap.from("#parceria > *", {
        opacity: 0, y: 40, duration: 1, stagger: 0.3,
        scrollTrigger: { trigger: "#parceria", start: "top 80%" }
    });

    // Animações para as novas seções da home.html
    gsap.from(".diferencial-item", {
        y: 50, opacity: 0, duration: 0.5, stagger: 0.2,
        scrollTrigger: { trigger: "#diferenciais", start: "top 85%" }
    });

    gsap.from("#tecnologia .tecnologia-content > *", {
        x: -50, opacity: 0, duration: 0.8, stagger: 0.2,
        scrollTrigger: { trigger: "#tecnologia", start: "top 70%" }
    });
     gsap.from("#tecnologia .tecnologia-visual", {
        opacity: 0, scale: 0.9, duration: 1,
        scrollTrigger: { trigger: "#tecnologia", start: "top 70%" }
    });

    gsap.from(".testimonial-card", {
        y: 50, opacity: 0, duration: 0.8, stagger: 0.3,
        scrollTrigger: { trigger: "#depoimentos", start: "top 85%" }
    });

});