(function ($) {

  "use strict";

  // COLOR MODE

  /* PT EN DE
  $('.language-mobile').click(function () {
    if ($('.color-mode')[0].innerHTML.match("PT-BR")) {
      $('.color-mode')[0].innerHTML = `<img src="./images/flags/us.svg" style="margin-right: 2%;width: 25px;">Language: US-EN`;
      $('.language-mobile')[0].innerHTML = `Language: US-EN`; // Mudar do português para inglês
      let objTranslated = translate("US-EN");
      setTextTranslate(objTranslated);
    } else if($('.color-mode')[0].innerHTML.match("US-EN")){
      $('.color-mode')[0].innerHTML = `<img src="./images/flags/de.svg" style="margin-right: 2%;width: 25px;">Sprache: DE-DE`;
      $('.language-mobile')[0].innerHTML = `Idioma: DE-DE`;      // Mudar do inglês para o alemão
      let objTranslated = translate("DE-DE");
      setTextTranslate(objTranslated);
    } else {
      $('.color-mode')[0].innerHTML = `<img src="./images/flags/br.svg" style="margin-right: 2%;width: 25px;">Idioma: PT-BR`;
      $('.language-mobile')[0].innerHTML = `Language: PT-BR`; // Mudar do alemão para português
      let objTranslated = translate("PT-BR");
      setTextTranslate(objTranslated);
    }
  })
  */

  $('.language-mobile').click(function () {
    if ($('.color-mode')[0].innerHTML.match("PT-BR")) {
      $('.color-mode')[0].innerHTML = `<img src="./images/flags/us.svg" style="margin-right: 2%;width: 25px;">Language: US-EN`;
      $('.language-mobile')[0].innerHTML = `Language: US-EN`; // Mudar do português para inglês
      $('#curriculo-pdf-link')[0].href = `./documents/curriculo_enus.pdf`;

      let objTranslated = translate("US-EN");
      setTextTranslate(objTranslated);
    } else if($('.color-mode')[0].innerHTML.match("US-EN")){
      $('.color-mode')[0].innerHTML = `<img src="./images/flags/br.svg" style="margin-right: 2%;width: 25px;">Idioma: PT-BR`;
      $('.language-mobile')[0].innerHTML = `Language: PT-BR`; // Mudar do inglês para português
      $('#curriculo-pdf-link')[0].href = `./documents/curriculo_ptbr.pdf`;

      let objTranslated = translate("PT-BR");
      setTextTranslate(objTranslated);
    } else {

    }
  })

  /* PT EN DE
  $('.color-mode').click(function () {
    if ($('.color-mode')[0].innerHTML.match("PT-BR")) {
      $('.color-mode')[0].innerHTML = `<img src="./images/flags/us.svg" style="margin-right: 2%;width: 25px;">Language: US-EN`;
      $('.language-mobile')[0].innerHTML = `Language: US-EN`;
      // Mudar do português para inglês
      let objTranslated = translate("US-EN");
      setTextTranslate(objTranslated);

    } else if ($('.color-mode')[0].innerHTML.match("US-EN")) {
      $('.color-mode')[0].innerHTML = `<img src="./images/flags/de.svg" style="margin-right: 2%;width: 25px;">Sprache: DE-DE`;
      $('.language-mobile')[0].innerHTML = `Sprache: DE-DE`;      // Mudar do inglês para o alemão
      let objTranslated = translate("DE-DE");
      setTextTranslate(objTranslated);
    } else {
      $('.color-mode')[0].innerHTML = `<img src="./images/flags/br.svg" style="margin-right: 2%;width: 25px;">Idioma: PT-BR`;
      $('.language-mobile')[0].innerHTML = `Idioma: PT-BR`;      // Mudar do alemão para o português
      let objTranslated = translate("PT-BR");
      setTextTranslate(objTranslated);
    }
  })
  */

  $('.color-mode').click(function () {
    if ($('.color-mode')[0].innerHTML.match("PT-BR")) {
      $('.color-mode')[0].innerHTML = `<img src="./images/flags/us.svg" style="margin-right: 2%;width: 25px;">Language: US-EN`;
      $('.language-mobile')[0].innerHTML = `Language: US-EN`;
      $('#curriculo-pdf-link')[0].href = `./documents/curriculo_enus.pdf`;

      // Mudar do português para inglês
      let objTranslated = translate("US-EN");
      setTextTranslate(objTranslated);
    } else if ($('.color-mode')[0].innerHTML.match("US-EN")) {
      $('.color-mode')[0].innerHTML = `<img src="./images/flags/br.svg" style="margin-right: 2%;width: 25px;">Idioma: PT-BR`;
      $('.language-mobile')[0].innerHTML = `Idioma: PT-BR`;      // Mudar do inglês para o português
      let objTranslated = translate("PT-BR");
      $('#curriculo-pdf-link')[0].href = `./documents/curriculo_ptbr.pdf`;

      setTextTranslate(objTranslated);
    } else {

    }
  })

  // HEADER
  $(".navbar").headroom();

  // PROJECT CAROUSEL
  $('.owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    nav: true
  });

  // SMOOTHSCROLL
  $(function () {
    $('.nav-link, .custom-btn-link').on('click', function (event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 49
      }, 1000);
      event.preventDefault();
    });
  });

  // TOOLTIP
  $('.social-links a').tooltip();


})(jQuery);

function setTextTranslate(objTranslated) {
  // NAVBAR
  document.getElementById("navbar-projects").innerHTML = `<span data-hover="${objTranslated.nav.project}">${objTranslated.nav.project}</span>`
  document.getElementById("navbar-experiences").innerHTML = `<span data-hover="${objTranslated.nav.experiences}">${objTranslated.nav.experiences}</span>`
  document.getElementById("navbar-contact").innerHTML = `<span data-hover="${objTranslated.nav.contact}">${objTranslated.nav.contact}</span>`

  // ABOUT
  document.getElementById("wellcome").innerHTML = objTranslated.about.welcome
  document.getElementById("presentation").innerHTML = objTranslated.about.presentation;
  document.getElementById("skils1").innerHTML = objTranslated.about.skils[0];
  document.getElementById("skils2").innerHTML = objTranslated.about.skils[1];
  document.getElementById("skils3").innerHTML = objTranslated.about.skils[2];
  document.getElementById("name_age").innerHTML = objTranslated.about.name_age;
  document.getElementById("about-p1").innerHTML = objTranslated.about.p1;
  document.getElementById("about-p2").innerHTML = objTranslated.about.p2;

  // Projetos;
  document.getElementById("projects-title").innerHTML = objTranslated.projects.title;

  //p1
  for(let i = 0; i < document.getElementsByClassName("title-project1").length; i++) {
    document.getElementsByClassName("title-project1").item(i).innerHTML = objTranslated.projects.list[0].title;
  }
  for(let i = 0; i < document.getElementsByClassName("text-project1").length; i++) {
    document.getElementsByClassName("text-project1").item(i).innerHTML = objTranslated.projects.list[0].text;
  }

  //p2
  for(let i = 0; i < document.getElementsByClassName("title-project2").length; i++) {
    document.getElementsByClassName("title-project2").item(i).innerHTML = objTranslated.projects.list[1].title;
  }
  for(let i = 0; i < document.getElementsByClassName("text-project2").length; i++) {
    document.getElementsByClassName("text-project2").item(i).innerHTML = objTranslated.projects.list[1].text;
  }

  //p3
  for(let i = 0; i < document.getElementsByClassName("title-project3").length; i++) {
    document.getElementsByClassName("title-project3").item(i).innerHTML = objTranslated.projects.list[2].title;
  }
  for(let i = 0; i < document.getElementsByClassName("text-project3").length; i++) {
    document.getElementsByClassName("text-project3").item(i).innerHTML = objTranslated.projects.list[2].text;
  }

  //p4
  for(let i = 0; i < document.getElementsByClassName("title-project4").length; i++) {
    document.getElementsByClassName("title-project4").item(i).innerHTML = objTranslated.projects.list[3].title;
  }
  for(let i = 0; i < document.getElementsByClassName("text-project4").length; i++) {
    document.getElementsByClassName("text-project4").item(i).innerHTML = objTranslated.projects.list[3].text;
  }

  //p5
  for(let i = 0; i < document.getElementsByClassName("title-project5").length; i++) {
    document.getElementsByClassName("title-project5").item(i).innerHTML = objTranslated.projects.list[4].title;
  }
  for(let i = 0; i < document.getElementsByClassName("text-project5").length; i++) {
    document.getElementsByClassName("text-project5").item(i).innerHTML = objTranslated.projects.list[4].text;
  }

  // Experiences 
  document.getElementById("experiences-title").innerText = objTranslated.experiences.title;
  document.getElementById("experiences-professional").innerText = objTranslated.experiences.titleProfessional;
  document.getElementById("experiences-academic").innerText = objTranslated.experiences.titleAcademic;
  // Professional
  document.getElementById("title-professional1").innerText = objTranslated.experiences.professional[0].title;
  document.getElementById("text-professional1").innerText = objTranslated.experiences.professional[0].text;

  document.getElementById("title-professional2").innerText = objTranslated.experiences.professional[1].title;
  document.getElementById("text-professional2").innerText = objTranslated.experiences.professional[1].text;

  document.getElementById("title-professional3").innerText = objTranslated.experiences.professional[2].title;
  document.getElementById("text-professional3").innerText = objTranslated.experiences.professional[2].text;
  // Academic
  document.getElementById("title-academic1").innerText = objTranslated.experiences.professional[0].title;
  document.getElementById("text-academic1").innerText = objTranslated.experiences.professional[0].text;

  document.getElementById("title-academic2").innerText = objTranslated.experiences.professional[1].title;
  document.getElementById("text-academic2").innerText = objTranslated.experiences.professional[1].text;

  // About
  document.getElementById("contact-maptitle").innerHTML = objTranslated.contact.mapTitle;
  document.getElementById("contact-titleinter").innerHTML = objTranslated.contact.titleInter;
  document.getElementById("contact-descriptionlinkedin").innerHTML = objTranslated.contact.descriptionLinkedin;
  document.getElementById("contact-conect").innerHTML = objTranslated.contact.connect;
}

function translate(language) {
  if (language == "PT-BR") {
    return {
      nav: {
        project: "Projetos",
        experiences: "Experiências",
        contact: "Contato"
      },
      about: {
        welcome: "Bem-vindos (as) ao meu portfólio!",
        presentation: "Opa galera, meu nome é Pablo Paiva e sou",
        skils: ["Desenvolvedor Backend", "Desenvolvedor Java", "Profissional DevOps"],
        name_age: "Pablo Paiva, 20 anos",
        p1: "Iniciei minha jornada no mundo na tecnologia bem jovem, com 15 anos, quando entrei no ensino médio integrado à informática no IFRN. Tive diversas experiências e me apaixonei por programar e por solucionar problemas com a ajuda da tecnologia.",
        p2: "Hoje, formado pelo IFRN e com uma ótima base em desenvolvimento, continuei meus passos e estou no bacharelado em Tecnologia da Informação no Instituto Metropole Digital. Tenho interesse na área de engenharia de software, arquitetura de software, infraestrutura de software e em áreas relacionadas a DevOps."
      },
      projects: {
        title: "Projetos que desenvolvi/participei",
        list: [{
          title: "WhoAuthor",
          text: `O WhoAuthor foi um projeto desenvolvido no IFRN ao longo dos anos de 2019 e 2021. O projeto tem como objetivo o desenvolvimento de uma inteligência computacional capaz de reconhecer padrões de escrita de um determinado texto literário e apontar o seu autor. Foi utilizado o Prediction by Parcial Machine (PPM-C) na base da inteligência, bem como a linguagem de programação Java. O relatório completo do projeto pode ser baixado aqui: <a href="./documents/whoauthor.pdf" target="_blank" rel="relatório do WhoAuthor">Relatório do WhoAuthor</a>.`
        },
        {
          title: "Registro de patente do WhoAuthor",
          text: `O WhoAutor (slide anterior) possui duas versões, ambas com patente publicada no Instituto Nacional de Propriedade Industrial (INPI). A primeira é um software desktop feito inteiramente em Java, que foi patenteada em 26/01/2021, com número de registro BR 51 2021 000120 6. A segunda versão possui um backend em Java com o ecossistema do Spring, além de um fronted desenvolvido em TypeScript com o apoio do React.ts e foi patenteada no dia 15/02/2022, seu número de registro é BR 51 2022 000320 1.`
        },
        {
          title: "Robótica",
          text: `Ao longo da minha formação no IFRN, participei de vários projetos envolvendo robótica. Trabalhei com arduíno durante dois anos (2019-2020), entrei em contato com a linguagem de programação do microcontrolador, tive diversas aulas de eletrônica durante esse período, além de montar meu próprio robô com componentes eletrônicos e o próprio arduíno. Participei também como ouvinte na Olimpíada Brasileira de Robótica de 2019 e participei como competidor na Olimpíada de Robótica do IFRN na Semana de Ciência (SECITEX) de 2019. Em 2022, fui monitor de robótica da semana de inverno na seleção do talento metrópole, programa de mentoria do IMD/UFRN.`
        },
        {
          title: "LabCoMU",
          text: `Na primeira semana a partir do meu ingresso no bacharelado em Tecnologia da Informação no IMD/UFRN eu já participava de um projeto de desenvolvimento como membro do Laboratótio de Computação Móvel e Ubíqua (LabCoMU). O projeto era uma parceria entre o IMD e uma empresa internacional protegida por <a href="https://www.docusign.com/pt-br/blog/significado-de-nda-o-que-e-quem-assina-e-como-fazer" target="_blank" rel="noopener noreferrer">NDA</a>. Minha tarefa era criar um ambiente integrado para a equipe de vendas da empresa, um sistema completo, capaz de registrar todas as propostas de venda, solicitações e fluxo de pedidos etc. Participei da equipe de desenvolvimento como programador Fullstack, onde era utilizado o Java com o ecossistema Spring e o Thymeleaf para a interface gráfica. O projeto teve início em abril de 2022 e finalizou em novembro do mesmo ano.`
        },
        {
          title: "REGINA Lab",
          text: `Em dezembro de 2022 ingressei no projeto que faço parte até hoje, como membro do REsearch Group on INternet services and Applications of the future (REGINA Lab). O IMD/UFRN possui uma grande parceria com uma multinacional protegida por <a href="https://www.docusign.com/pt-br/blog/significado-de-nda-o-que-e-quem-assina-e-como-fazer" target="_blank" rel="noopener noreferrer">NDA</a>. O projeto visa a pesquisa e o desenvolvimento de soluções no âmbito da rede de 5ª geração, o 5G. Trabalho como desenvolvedor Backend com Java e Dropwizard, além de realizar várias tarefas de DevOps com ferramentas de conteinerização com o Docker, Podman e Kubernetes, de virtualização com o OpenStack e Open Source MANO, de monitoramento com Grafana e Prometheus, de mensageria como RabbitMQ e com diversos outros conceitos de telecomunicações, redes e desenvolvimento, como KPI, NFV/NFC etc.`
        }
        ]
      },
      experiences: {
        title: "Experiências",
        titleProfessional: "Profissionais",
        titleAcademic: "Acadêmicas",
        professional: [
          {
            title: "Desenvolvedor Frontend",
            text: "Projeto do Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Norte em parceria com a Pechinchou, onde fui membro da equipe de desenvolvimento que produziu um Frontend utilizando React.ts e um aplicativo com React Native."
          },
          {
            title: "Desenvolvedor Fullstack",
            text: "Projeto da Universidade Federal do Rio Grande do Norte, através do Instituto Metrópole Digital e do Laboratório de Computação Móvel e Ubíqua (LabCoMU). Fiz parte do time de desenvolvimento Fullstack, onde no Backend era utilizado Java com o ecossistema Spring, e no Frontend o Thymeleaf."
          },
          {
            title: "Desenvolvedor Backend/DevOps",
            text: "Projeto da Universidade Federal do Rio Grande do Norte, através do Instituto Metrópole Digital e do REsearch Group on INternet services and Applications of the future (REGINA Lab). Faço parte do time de desenvolvimento Backend/DevOps, onde pesquisamos e desenvolvemos soluções no âmbito do 5G, tanto nacional quanto internacionalmente. Utilizo Java com Dropwizard e Kubernetes no desenvolvimento."
          }
        ],
        academic: [
          {
            title: "Técnico em informática",
            text: "Sou técnico em informática pelo Instituto Federal do Rio Grande do Norte (IFRN). Iniciei o ensino médio técnico no ano de 2018 e finalizei em 2021. Tive um contato imersivo em lógica de programação e foi no IFRN que comecei meus estudos em tecnologia."
          },
          {
            title: "Bacharelado em Tecnologia da Informação",
            text: "Ingressei no meu ensino superior na Universidade Federal do Rio Grande do Norte, no Bacharelado em Tecnologia da Informação, em 2022. Estou em um contínuo processo de aprendizagem e adquirindo experiências únicas."
          }
        ]
      },
      contact: {
        mapTitle: "Diga olá!",
        titleInter: "Se interessou em trabalhar comigo? Vamos conversar!",
        descriptionLinkedin: "Entre com contato comigo através do Linkedin ou das redes sociais informadas aqui do lado!",
        connect: `<i class="bi bi-linkedin"></i> Conectar`
      }
    };
  }
  if (language == "US-EN") {
    return {
      nav: {
        project: "Projects",
        experiences: "Experiences",
        contact: "Contact"
      },
      about: {
        welcome: "Welcome to my portfolio!",
        presentation: "Hey folks, my name is Pablo Paiva and I'm",
        skils: ["Backend Developer", "Java Developer", "Professional DevOps"],
        name_age: "Pablo Paiva, 20 years old",
        p1: "I started my journey in the world of technology at a very young age, at the age of 15, when I entered high school integrated with information technology at IFRN. I had different experiences and fell in love with programming and solving problems with the help of technology.",
        p2: "Today, having graduated from IFRN with a strong foundation in development, I have continued my journey and am currently pursuing a Bachelor's degree in Information Technology at the Metropolis Digital Institute. I am particularly interested in the fields of software engineering, software architecture, software infrastructure, and areas related to DevOps."
      },
      projects: {
        title: "Projects I have developed/participated in",
        list: [{
          title: "WhoAuthor",
          text: `WhoAuthor was a project developed at IFRN over the years 2019 and 2021. The project aims to develop a computational intelligence capable of recognizing writing patterns of a given literary text and pointing out its author. Prediction by Partial Machine (PPM-C) was used on the basis of intelligence, as well as the Java programming language. The full project report can be downloaded here: <a href="./documents/whoauthor.pdf" target="_blank" rel="relatório do WhoAuthor">WhoAuthor Report</a>.`
        },
        {
          title: "WhoAuthor patent registration",
          text: `WhoAutor (previous slide) has two versions, both with a patent published at the National Institute of Industrial Property (INPI). The first is a desktop software made entirely in Java, which was patented on 01/26/2021, with registration number BR 51 2021 000120 6. The second version has a backend in Java with the Spring ecosystem, in addition to a frontend developed in TypeScript with the support of React.ts and was patented on 02/15/2022, its registration number is BR 51 2022 000320 1.`
        },
        {
          title: "Robotics",
          text: `Throughout my training at IFRN, I participated in several projects involving robotics. I worked with arduino for two years (2019-2020), got in touch with the microcontroller programming language, took several electronics classes during this period, in addition to assembling my own robot with electronic components and the arduino itself. I also participated as a listener in the 2019 Brazilian Robotics Olympiad and participated as a competitor in the IFRN Robotics Olympiad in the 2019 Science Week (SECITEX). mentorship from IMD/UFRN.`
        },
        {
          title: "LabCoMU",
          text: `In the first week after joining the Bachelor of Information Technology program at IMD/UFRN, I was already participating in a development project as a member of the Laboratory of Mobile and Ubiquitous Computing (LabCoMU). The project was a partnership between IMD and an international company protected by an <a href="https://www.docusign.com/pt-br/blog/significado-de-nda-o-que-e-quem-assina-e-como-fazer" target="_blank" rel="noopener noreferrer">NDA</a>. My task was to create an integrated environment for the company's sales team, a complete system capable of recording all sales proposals, requests, order flow, etc. I participated in the development team as a Fullstack programmer, using Java with the Spring ecosystem and Thymeleaf for the graphical interface. The project started in April 2022 and ended in November of the same year.`
        },
        {
          title: "REGINA Lab",
          text: `In December 2022, I joined the project that I am still a part of today, as a member of the Research Group on Internet Services and Applications of the Future (REGINA Lab). The IMD/UFRN has a significant partnership with a multinational protected by <a href="https://www.docusign.com/pt-br/blog/significado-de-nda-o-que-e-quem-assina-e-como-fazer" target="_blank" rel="noopener noreferrer">NDA</a>. The project aims at researching and developing solutions within the scope of the 5th generation network, 5G. I work as a Backend developer with Java and Dropwizard, in addition to performing various DevOps tasks with containerization tools such as Docker, Podman, and Kubernetes, virtualization with OpenStack and Open Source MANO, monitoring with Grafana and Prometheus, messaging with RabbitMQ, and various other telecommunications, networking, and development concepts such as KPI, NFV/NFC, etc.`
        }
        ]
      },
      experiences: {
        title: "Experiences",
        titleProfessional: "Professionals",
        titleAcademic: "Academics",
        professional: [
          {
            title: "Frontend Developer",
            text: "Project by the Federal Institute of Education, Science and Technology of Rio Grande do Norte in partnership with Pechinchou, where I was a member of the development team that produced a Frontend using React.ts and an application with React Native."
          },
          {
            title: "Fullstack Developer",
            text: "Project of the Federal University of Rio Grande do Norte, through the Metropolis Digital Institute and the Laboratory of Mobile and Ubiquitous Computing (LabCoMU). I was part of the Fullstack development team, where Java with the Spring ecosystem was used on the Backend, and Thymeleaf on the Frontend."
          },
          {
            title: "Backend/DevOps Developer",
            text: "Project of the Federal University of Rio Grande do Norte, through the Metropolis Digital Institute and the Research Group on Internet Services and Applications of the Future (REGINA Lab). I am part of the Backend/DevOps development team, where we research and develop solutions within the scope of 5G, both nationally and internationally. I use Java with Dropwizard and Kubernetes in development."
          }
        ],
        academic: [
          {
            title: "Computer Technician",
            text: "I am a computer technician at the Federal Institute of Rio Grande do Norte (IFRN). I started technical high school in 2018 and finished it in 2021. I had an immersive contact with programming logic and it was at IFRN that I started my studies in technology."
          },
          {
            title: "Bachelor of Information Technology",
            text: "I entered my higher education at the Federal University of Rio Grande do Norte, with the Bachelor of Information Technology, in 2022. I am in a continuous learning process and acquiring unique experiences."
          }
        ]
      },
      contact: {
        mapTitle: "Say Hello!",
        titleInter: "Interested in working with me? Let's talk!",
        descriptionLinkedin: "Get in touch with me through Linkedin or the social networks informed here!",
        connect: `<i class="bi bi-linkedin"></i> Connect`
      }
    };
  }


  if (language == "DE-DE") {
    return {
      nav: {
        project: "Projekte",
        experiences: "Erlebnisse",
        contact: "Kontakt"
      },
      about: {
        welcome: "Willkommen in meinem Portfolio!",
        presentation: "Hey Leute, mein Name ist Pablo Paiva und ich bin",
        skils: ["Backend-Entwickler", "Java Entwickler", "Professionelle DevOps"],
        name_age: "Pablo Paiva, 20 Jahre alt",
        p1: "Meine Reise in die Welt der Technik begann schon sehr früh, im Alter von 15 Jahren, als ich am IFRN ein Gymnasium mit integriertem Informatikunterricht besuchte. Ich machte verschiedene Erfahrungen und verliebte mich in das Programmieren und das Lösen von Problemen mit Hilfe der Technik.",
        p2: "Heute, nach meinem Abschluss am IFRN und mit einer großartigen Basis in der Entwicklung, habe ich meine Schritte fortgesetzt und bin im Bachelor of Information Technology am Instituto Metropole Digital. Ich arbeite derzeit für Lenovo und bin Teil eines sehr kompletten Entwicklungsteams, das mich immer wieder herausfordert und jeden Tag mehr und mehr lernt."
      },
      projects: {
        title: "Projekte, die ich entwickelt habe/an denen ich beteiligt war",
        list: [{
          title: "WhoAuthor",
          text: `WhoAuthor war ein Projekt, das in den Jahren 2019 und 2021 am IFRN entwickelt wurde. Das Projekt zielt darauf ab, eine Computerintelligenz zu entwickeln, die in der Lage ist, Schreibmuster eines bestimmten literarischen Textes zu erkennen und auf seinen Autor hinzuweisen. Auf Basis von Intelligenz wurde Prediction by Partial Machine (PPM-C) sowie die Programmiersprache Java verwendet. Der vollständige Projektbericht kann hier heruntergeladen werden: <a href="./documents/whoauthor.pdf" target="_blank" rel="WhoAuthor-Bericht">WhoAuthor-Bericht</a>.`
        },
        {
          title: "WhoAuthor-Patentanmeldung",
          text: `WhoAutor (vorherige Folie) hat zwei Versionen, beide mit einem Patent, das beim National Institute of Industrial Property (INPI) veröffentlicht wurde. Die erste ist eine vollständig in Java erstellte Desktop-Software, die am 26.01.2021 mit der Registrierungsnummer BR 51 2021 000120 6 patentiert wurde. Die zweite Version verfügt neben einem in entwickelten Frontend über ein Backend in Java mit dem Spring-Ökosystem TypeScript mit Unterstützung von React.ts und wurde am 15.02.2022 patentiert, seine Registrierungsnummer lautet BR 51 2022 000320 1.`
        },
        {
          title: "Robotik",
          text: `Während meiner Ausbildung am IFRN habe ich an mehreren Projekten mit Robotik teilgenommen. Ich habe zwei Jahre lang (2019-2020) mit Arduino gearbeitet, bin mit der Mikrocontroller-Programmiersprache in Kontakt gekommen, habe in dieser Zeit mehrere Elektronikkurse besucht und nebenbei meinen eigenen Roboter mit elektronischen Komponenten und dem Arduino selbst zusammengebaut. Ich habe auch als Zuhörer an der Brasilianischen Robotik-Olympiade 2019 und als Teilnehmer an der IFRN-Robotik-Olympiade in der Wissenschaftswoche 2019 (SECITEX) teilgenommen. Betreuung durch IMD/UFRN.`
        },
        {
          title: "SIEMENS LDA BR",
          text: `In der ersten Woche nach meinem Einstieg in den Bachelorstudiengang Information Technology am IMD/UFRN war ich bereits an einem Entwicklungsprojekt beteiligt. IMD ist eine Partnerschaft mit SIEMENS LDA BR, der nationalen Vertretung der deutschen Firma SIEMENS AG, eingegangen. Meine Aufgabe bestand darin, eine integrierte Umgebung für das Verkaufsteam des Unternehmens zu schaffen, ein vollständiges System, das alle Verkaufsangebote, Anfragen, den Auftragsfluss usw. aufzeichnen kann. Ich war als Fullstack-Programmierer im Entwicklungsteam tätig, wo Java mit Spring verwendet wurde Ökosystem und Thymeleaf für die grafische Oberfläche. Das Projekt startete im April 2022 und endete im November desselben Jahres.`
        },
        {
          title: "LENOVO 5G",
          text: `Im Dezember 2022 trat ich dem Projekt bei, dem ich bis heute angehöre. IMD/UFRN hat eine großartige Partnerschaft mit Lenovo Global, um hier bei UFRN ein Forschungszentrum für Telekommunikation zu schaffen. Ich nehme am Projekt mit dem Titel Intelligent Network Management System for 5G (iNMS 5G) teil. Das Projekt zielt auf die Erforschung und Entwicklung eines Slices-Managers im Rahmen des Netzes der 5. Generation, dem 5G. Ich arbeite als Backend-Entwickler mit Java und Dropwizard, zusätzlich zu verschiedenen DevOps-Aufgaben mit Containerisierungstools wie Docker, Podman und Kubernetes, Virtualisierung mit OpenStack und Open Source MANO, Überwachung mit Grafana und Prometheus und mit mehreren anderen Konzepten der Telekommunikation, Vernetzung und Entwicklung wie KPI, NFV/NFC etc.`
        }
        ]
      },
      experiences: {
        title: "Erlebnisse",
        titleProfessional: "Professionelle",
        titleAcademic: "Akademische",
        professional: [
          {
            title: "Frontend-Entwickler",
            text: "Projekt des Bundesinstituts für Bildung, Wissenschaft und Technologie von Rio Grande do Norte in Partnerschaft mit Pechinchou, wo ich Mitglied des Entwicklungsteams war, das ein Frontend mit React.ts und eine Anwendung mit React Native erstellt hat."
          },
          {
            title: "Fullstack-Entwickler",
            text: "Projekt der Federal University of Rio Grande do Norte, durch das Metrópole Digital Institute, in Partnerschaft mit SIEMENS Aktiengesellschaft - Brasilien. Ich war Teil des Fullstack-Entwicklungsteams, wo das Backend Java mit dem Spring-Ökosystem und dem Frontend Thymeleaf verwendete."
          },
          {
            title: "Backend/DevOps Entwickler",
            text: "Projekt der Federal University of Rio Grande do Norte, durch das Metrópole Digital Institute, in Partnerschaft mit Lenovo. Ich bin Teil des Entwicklungsteams von Lenovo hier in Brasilien, wo wir national und international an 5G-Lösungen forschen und entwickeln. Ich verwende Java mit Dropwizard und Kubernetes in der Entwicklung."
          }
        ],
        academic: [
          {
            title: "Computertechniker",
            text: "Ich bin Computertechniker am Bundesinstitut Rio Grande do Norte (IFRN). Ich habe 2018 mit dem technischen Gymnasium begonnen und es 2021 abgeschlossen. Ich hatte einen intensiven Kontakt mit Programmierlogik und am IFRN begann ich mein Technologiestudium."
          },
          {
            title: "Bachelor in Informationstechnologie",
            text: "Ich habe 2022 meine Hochschulausbildung an der Bundesuniversität Rio Grande do Norte mit dem Bachelor of Information Technology begonnen. Ich befinde mich in einem kontinuierlichen Lernprozess und sammle einzigartige Erfahrungen."
          }
        ]
      },
      contact: {
        mapTitle: "Sag Hallo!",
        titleInter: "Interessiert an einer Zusammenarbeit mit mir? Lass uns reden!",
        descriptionLinkedin: "Kontaktieren Sie mich über Linkedin oder die hier informierten sozialen Netzwerke!",
        connect: `<i class="bi bi-linkedin"></i> Verbinden`
      }
    };
  }
}