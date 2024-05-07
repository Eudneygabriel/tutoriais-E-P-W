document.addEventListener("DOMContentLoaded", function () {
  // Função para configurar o evento de mouse para cada container
  function configurarEventoDeMouse(
    containerId,
    imageId1,
    imageId2,
    notificationId
  ) {
    const container = document.getElementById(containerId);
    const image1 = document.getElementById(imageId1);
    const image2 = document.getElementById(imageId2);
    const notification = document.getElementById(notificationId);

    // Manipulador de evento de mouse sobre o container
    container.addEventListener("mouseover", function () {
      // Quando o mouse está sobre o container, a imagem secundária cobre completamente a imagem inicial
      image1.style.opacity = 0;
      image2.style.left = "0%"; // Ajusta a posição da imagem secundária para cobrir completamente o container
      // Mostra a notificação com animação suave
      notification.style.transform = "translateY(0)";
    });

    // Manipulador de evento de saída do mouse
    container.addEventListener("mouseleave", function () {
      // Quando o mouse sai do container, a imagem inicial volta a ser visível
      image1.style.opacity = 1;
      // A imagem secundária retorna à sua posição inicial
      image2.style.left = "-100%";
      // Esconde a notificação com animação suave
      notification.style.transform = "translateY(-100%)";
    });

    // Manipulador de evento de clique para abrir uma nova página
    container.addEventListener("click", function () {
      // Abre uma nova janela ou guia com o URL fornecido
      window.open(url, "_blank");
    });
  }

  // Configurar eventos para cada container de animação
  configurarEventoDeMouse("container1", "image1", "image2", "notification");
  configurarEventoDeMouse("container2", "image3", "image4", "notification2");
  configurarEventoDeMouse("container3", "image5", "image6", "notification3");
});
