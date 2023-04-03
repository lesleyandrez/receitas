# Página de receitas

Estou criando essas páginas como um experimento para estudar o [Astro](https://astro.build/). Meu objetivo é descobrir o poder e a facilidade que essa ferramenta oferece para criar páginas simples e de alto desempenho.

Para o processo de construção, pretendo usar MDX e ReactJS, e em produção, apenas JavaScript Vanilla. Em relação ao CSS, ainda não decidi o que usar, mas a princípio, pretendo utilizar CSS Vanilla e explorar as funcionalidades do Astro para ajudar a isolar o CSS de cada página, evitando conflitos e permitindo a reutilização de partes de código durante o desenvolvimento.

Fique à vontade para explorar minhas receitas e dar feedback sobre a página. Obrigado por visitar!

## Tecnologia

 - Obviamente HTML, CSS e JavaScript
 - Astro
 - ReactJS
 - MDX
 - Github Pages como hospedagem estática
 - Travis ou Githu Actions como CI

## Recursos para as páginas de receitas
 
 - [ ] Apresentação do título e breve descrição com fotos
 - [ ] Fotos da receita pronta
 - [ ] Evitar que o dispositivo entre em repouso com a página aberta e em foco
 - [ ] Lista de ingredientes
    - [ ] Permitir alternar entre unidades de medidas como por exmeplo: xícaras, mililitros ou gramas
 - [ ] Lista de modo de preparo
    - [ ] Possibilidade de iniciar um timer em uma determinada etapa
        - [ ] O timer não pode ser um simples setInterval rodando na thread principal para não perder precisão
        - [ ] Deve emitir um aviso sonoro ao terminar
        - [ ] Disparar notificação que o timer se encerrou, mesmo se o usuário sair da página (Background Synchronization API)
 - [ ] Para ambas as listas
    - [ ] Possibilidade de marcar/desmarcar os itens
    - [ ] Persistir o estado de marcado e desmarcado entre atualizações de página

## Comandos

Comandos para rodar o projeto a partir do terminal.

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Instala as dependencias                          |
| `npm run dev`          | Inicia servidor local em `localhost:3000`        |
| `npm run build`        | Constrói páginas para produção em `./dist/`      |
