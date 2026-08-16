# Gabriel Bauer | Portfólio

Site de portfólio profissional em uma única página, apresentando projetos, habilidades,
experiência e formas de contato.

## Sobre o projeto

Página estática responsiva que funciona como cartão de visitas digital: apresenta um resumo
técnico, os projetos reais com contexto (problema, solução, stack, papel), a trajetória
profissional/acadêmica em uma timeline única com datas, e links para GitHub, LinkedIn e
currículo em PDF.

## Tecnologias

- **HTML5** — estrutura semântica e acessível (skip link, `aria-current`, JSON-LD)
- **CSS3** — design system próprio (tokens de cor/tipografia), layout responsivo por
  breakpoint, sem framework
- **JavaScript (vanilla)** — menu mobile, revelação ao scroll, scroll-spy do menu e
  carrosséis de imagem nos projetos
- **SVG inline** — ícones e logo/favicon, sem dependência de CDN de terceiros

## Estrutura do repositório

```
Portifolio_Bauer/
├── index.html                 # Página principal (todas as seções)
├── styles.css                 # Design system e estilos
├── script.js                  # Menu, scroll reveal, scroll-spy e carrosséis
├── favicon.svg                # Marca / favicon (monograma "GB")
├── todolist*.jpeg             # Imagens do projeto To Do List
├── hotelfy*.jpg                # Imagens do projeto Hotelfy
├── Soundplayer*.jpg           # Imagens do projeto SoundWave
├── Currículo Gabriel Bauer.pdf
└── README.md                  # Este arquivo
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

| Seção            | Conteúdo                                                                 |
| ----------------- | ------------------------------------------------------------------------ |
| **Hero**          | Apresentação, fatos rápidos (localização, formação, foco) e CTAs        |
| **Sobre**         | Trajetória em texto corrido, direto sobre o momento atual de carreira    |
| **Habilidades**   | Tecnologias agrupadas por capacidade (Frontend, Backend, Mobile, Banco de Dados, Ferramentas) |
| **Projetos**      | 1 projeto em destaque (Hotelfy), 2 projetos secundários com carrossel (SoundWave, To Do List) e 2 projetos complementares em formato texto (Almoxarifado, Cadastro de Cursos) |
| **Experiência**   | Timeline única (educação + estágios + serviço militar) em ordem cronológica, com datas |
| **Contato**       | E-mail, GitHub, LinkedIn e currículo em PDF                              |

## Funcionalidades

- **Menu responsivo** — botão hambúrguer em telas pequenas; links fecham o menu ao clicar
- **Scroll-spy** — o item do menu correspondente à seção visível fica destacado
- **Revelação ao scroll** — seções ganham uma transição sutil ao entrar na viewport
  (`IntersectionObserver`), desativada automaticamente para quem prefere menos animação
  (`prefers-reduced-motion`)
- **Carrosséis nos projetos** — navegação por setas e dots nas galerias de imagens
- **Ano dinâmico** — rodapé exibe o ano atual via JavaScript

## Licença

Uso livre para referência e estudo. Para uso do conteúdo (textos, imagens, dados pessoais),
entre em contato.
