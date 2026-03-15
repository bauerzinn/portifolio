# Gabriel Bauer | Portfólio

Site de portfólio profissional em uma única página, apresentando formação, habilidades, projetos e formas de contato.

## Sobre o projeto

Página estática responsiva que funciona como cartão de visitas digital: resume a trajetória acadêmica, as tecnologias utilizadas e projetos (To Do List, Curso Java, Hotelfy), com navegação por seções e links para GitHub e contato.

## Tecnologias

- **HTML5** — estrutura semântica e acessível
- **CSS3** — layout, animações e responsividade
- **JavaScript (vanilla)** — menu mobile, revelação ao scroll e carrosséis nos projetos
- **Lucide Icons** — ícones (carregados via CDN no HTML)

## Estrutura do repositório

```
Portifolio_Bauer/
├── index.html      # Página principal (todas as seções)
├── styles.css      # Estilos globais e componentes
├── script.js       # Menu, scroll reveal e carrosséis
├── 1.png           # Logo / favicon
├── todolist*.jpeg  # Imagens do projeto To Do List
├── hotelfy*.PNG    # Imagens do projeto Hotelfy
└── README.md       # Este arquivo
```

## Como rodar localmente

1. Clone o repositório (ou baixe os arquivos):

   ```bash
   git clone <url-do-repositorio>
   cd Portifolio_Bauer
   ```

2. Abra o `index.html` no navegador:
   - Dando duplo clique no arquivo, ou
   - Com um servidor local, por exemplo:
     ```bash
     npx serve .
     ```
     Depois acesse o endereço exibido no terminal (geralmente `http://localhost:3000`).

Não é necessário instalar dependências: o projeto usa apenas HTML, CSS e JavaScript.

## Seções do site

| Seção       | Conteúdo                                              |
|------------|--------------------------------------------------------|
| **Hero**   | Apresentação e CTAs (Ver Projetos, Contato)           |
| **Sobre**  | Texto sobre você e cards (Base Acadêmica, Interesse, Objetivo) |
| **Habilidades** | Grid de tecnologias (Python, Java, HTML, CSS, JS, Flutter, SQL, Git) |
| **Projetos** | Cards com carrossel de imagens e links para GitHub   |
| **Formação** | Linha do tempo (TADS e Ciência da Computação)        |
| **Carreiras** | Objetivo profissional e disponibilidade             |
| **Contato** | Links (GitHub, LinkedIn, e-mail) e ano no rodapé     |

## Funcionalidades

- **Menu responsivo** — botão hambúrguer em telas pequenas; links fecham o menu ao clicar
- **Revelação ao scroll** — seções ganham animação ao entrar na viewport (IntersectionObserver)
- **Carrosséis nos projetos** — navegação por setas e dots nas galerias de imagens
- **Ano dinâmico** — rodapé exibe o ano atual via JavaScript
- **Favicon** — ícone do site na aba do navegador (`1.png`)

## Licença

Uso livre para referência e estudo. Para uso do conteúdo (textos, imagens, dados pessoais), entre em contato.
