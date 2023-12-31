import Logo from "./img/logo-oficina-do-micro.png";

export default function Footer() {
  return (
    <footer class="footer">
      <nav class="footer-navbar">
        <img src={Logo} alt="Logo da Hytech Vale" class="footer-navbar-logo" />
        <div class="footer-navbar-complementos">
          <p>
            © 2023 Oficina do Micro. Todos os direitos reservados | Site
            Desenvolvido por
            <a
              target="_blank"
              class="footer-navbar-complementos-link"
              href="https://www.linkedin.com/in/paulo-gabriel-bom-sucesso-machado-592236230/"
            >
              &nbsp;Paulo Gabriel
            </a>
          </p>
          <address>
            R. Dr. Lúcio Malta, 393 - Loja 47 - Centro, Jacareí - SP,
            <a
              target="_blank"
              class="footer-navbar-complementos-link"
              href="https://www.google.com/maps/place/OFICINA+DO+MICRO/@-23.3035782,-45.9695351,15z/data=!4m6!3m5!1s0x94cdcbe08cfd486f:0xbb117272cf5918d5!8m2!3d-23.3035782!4d-45.9695351!16s%2Fg%2F11grrc1xff?entry=ttu"
            >
              &nbsp;12327-703
            </a>
          </address>
        </div>
        <a href="#top" class="footer-navbar-link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="bi bi-arrow-up-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z" />
          </svg>
        </a>
      </nav>
    </footer>
  );
}
