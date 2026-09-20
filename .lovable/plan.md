# Plano — Portfólio de fotografia Arthur Vilefort

## Resultado
Transformar o modelo atual em um portfólio fotográfico integralmente em português, mantendo o parallax, as animações, a grade editorial e a navegação existente.

## Implementação
1. **Identidade e navegação**
   - Aplicar “Arthur Vilefort”, marca “A.V.” e “Portfólio de sessões de fotos” no início, na página Sobre e nos metadados.
   - Traduzir textos visíveis, mensagens, rótulos acessíveis e página de erro.
   - Atualizar o menu para Início, Fotos, Inspirações, Sobre e Contato.

2. **Conteúdo local das sessões**
   - Criar `src/lib/sessoes.ts` como fonte única para Londres, Inhotim e Igreja, com seis imagens locais por sessão.
   - Criar os diretórios em `public/fotos/` e imagens provisórias leves, usando caminhos derivados de `import.meta.env.BASE_URL`.
   - Criar `/fotos` com cartões das sessões e `/fotos/:sessao` com a respectiva galeria e visualização ampliada.

3. **Página inicial aleatória**
   - Alimentar o parallax e a grade exclusivamente pelas sessões locais.
   - Sortear uma seleção nova por carregamento, sem repetição e distribuída entre as três sessões.
   - Direcionar cada imagem à sessão correspondente.

4. **Inspirações**
   - Criar `src/lib/inspiracoes.ts` com conteúdo factual e prudente.
   - Criar `/inspiracoes` com biografias, retratos provisórios e quadros neutros para obras famosas.
   - Usar links oficiais da Magnum para Cartier-Bresson e manter os links de Araquém vazios para preenchimento posterior.

5. **Sobre, contato e acabamento**
   - Refazer Sobre com a identidade fornecida sem inventar dados pessoais.
   - Manter Contato local, sem gravação em banco de dados.
   - Aplicar carregamento tardio, textos alternativos e layouts adequados a celular e desktop.

## Verificação
- Conferir rotas, navegação, seleção aleatória e abertura das fotos.
- Verificar visualmente a página inicial e as novas páginas em desktop e celular.
- Fazer uma busca final por referências e textos antigos.
