document.addEventListener("DOMContentLoaded", function () {
  // Função para configurar o evento de mouse para cada container
  function configurarEventoDeMouse(
    containerId,
    imageId1,
    imageId2,
    notificationId,
    url
  ) {
    const container = document.getElementById(containerId);
    const image1 = document.getElementById(imageId1);
    const image2 = document.getElementById(imageId2);
    const notification = document.getElementById(notificationId);

    // Manipulador de evento de mouse sobre o container
    container.addEventListener("mouseover", function () {
      image1.style.opacity = 0;
      image2.style.left = "0%";
      notification.style.transform = "translateY(0)";
    });

    // Manipulador de evento de saída do mouse
    container.addEventListener("mouseleave", function () {
      image1.style.opacity = 1;
      image2.style.left = "-100%";
      notification.style.transform = "translateY(-100%)";
    });

    // Manipulador de evento de clique para abrir uma nova página na mesma janela ou guia
    container.addEventListener("click", function () {
      if (url) {
        // Abre a URL na mesma janela ou guia
        window.location.href = url;
      }
    });
  }

  // Configurar eventos para cada container de animação
  configurarEventoDeMouse(
    "container1",
    "image1",
    "image2",
    "notification1",
    "tutorialexcel.html"
  );
  configurarEventoDeMouse(
    "container2",
    "image3",
    "image4",
    "notification2",
    "tutorialpowerpoint.html"
  );
  configurarEventoDeMouse(
    "container3",
    "image5",
    "image6",
    "notification3",
    "tutorialword.html"
  );
});
