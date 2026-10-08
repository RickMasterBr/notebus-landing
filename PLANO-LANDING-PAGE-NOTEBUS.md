# Plano — Landing Page Provisória do NoteBus

- **Status:** aprovado para elaboração
- **Data:** 2026-10-08
- **Idioma inicial:** pt-BR
- **Domínio:** `notebus.com.br`
- **Hospedagem e DNS:** Cloudflare Pages + Cloudflare DNS
- **Contato principal:** e-mail no domínio, encaminhado/gerido pela estrutura de e-mail da Cloudflare
- **Base:** `AGENTS.md`, `DESIGN.md`, Fase 0 — Descoberta, Marca e Naming, materiais de identidade e alta fidelidade do projeto

---

## 1. Objetivo

Publicar uma landing page provisória, porém visualmente madura e confiável, para o **NoteBus** em `notebus.com.br`.

A página deve funcionar como:

1. presença oficial inicial da marca;
2. explicação clara do produto para pessoas que ainda não o conhecem;
3. base para e-mail profissional, portfólio e candidatura a programas para startups;
4. ponto de contato sem coleta desnecessária de dados pessoais.

A página não é uma tela do app nem uma página de download. O produto está em desenvolvimento; portanto, a função principal é explicar a proposta com honestidade e permitir contato por e-mail.

---

## 2. Decisões fechadas

| Tema | Decisão |
|---|---|
| Nome público | **NoteBus** |
| Idioma da primeira versão | **Português do Brasil (pt-BR)** |
| Domínio | `notebus.com.br` |
| Hospedagem | **Cloudflare Pages** |
| DNS | **Cloudflare DNS** |
| CTA primária | Abrir e-mail para o endereço público do NoteBus |
| Coleta de e-mails | Não entra nesta versão |
| Posicionamento geográfico | Neutro/global; não mencionar Leiria como foco da página inicial |
| Exposição do produto | Usar telas/screenhots do app em desenvolvimento, revisadas para não expor dados reais de terceiros |
| Referência de interface | Apple Maps como referência de clareza, camadas, mapa de fundo e folhas; nunca como cópia de identidade visual |
| Estágio comunicado | “Em desenvolvimento” — sem prometer data, download ou disponibilidade em lojas |

---

## 3. Proposta pública

### 3.1 Mensagem central

> **Saiba quando sair para pegar o ônibus.**
>
> O NoteBus transforma o que você observa no ponto em horários mais úteis para o seu dia.

### 3.2 Explicação curta

O NoteBus é um caderno pessoal de horários de ônibus. A pessoa registra o que acontece na rua, acompanha padrões, compara alternativas e sabe quando estar no ponto.

### 3.3 Diferenciais que podem ser afirmados

- Registro rápido de passagens observadas.
- Organização de horários e alternativas de trajeto.
- Estimativas com variação e nível de confiança, sem prometer precisão falsa.
- Dados do usuário no aparelho.
- Funcionamento offline para a experiência principal.
- Sem conta obrigatória no conceito atual do produto.

### 3.4 Promessas proibidas nesta versão

Não usar na copy, nos mockups ou em metatags:

- “Rastreamento em tempo real”.
- “Localização do ônibus ao vivo”.
- “Previsões exatas”.
- “Sempre acerta”.
- “Integração oficial” ou parceria com operadoras, Apple, Apple Maps, Google Maps, Moovit ou qualquer outra marca.
- “Baixe agora”, badges de App Store/Google Play ou data de lançamento antes de existirem.
- “Inteligência artificial” como promessa do app; ela não é requisito do produto atual.

---

## 4. Restrições de dados e marca

1. **Nunca** publicar dados reais da MOBILIS, tabelas, identificadores, itinerários, logos, mapas, telas com nomes reais de paradas ou qualquer material cuja licença de divulgação não esteja validada.
2. Screenshots reais do app só podem entrar após revisão visual e de dados. Quando houver dúvida, usar cenário fictício.
3. Para a landing, criar um conjunto de dados demonstrativo, por exemplo:
   - cidade: “Cidade Exemplo”;
   - destinos: “Casa”, “Faculdade”, “Centro”;
   - linhas: números e cores inventados;
   - horários e estimativas inventados;
   - mapa abstrato, sem correspondência com uma cidade real.
4. Não usar logotipos de terceiros como elemento visual.
5. “Apple Maps” é referência de padrões de interação e leitura visual, não uma fonte para copiar telas, ícones, mapas, tipografia ou identidade.

---

## 5. Arquitetura da página

A landing será uma página única, com navegação por âncoras e sete áreas principais.

| Ordem | Área | Objetivo | Conteúdo principal |
|---:|---|---|---|
| 0 | Cabeçalho | Identificar a marca e permitir navegação | Símbolo/marca, links de âncora, CTA de contato |
| 1 | Hero | Explicar a proposta em poucos segundos | Headline, texto curto, CTA e mockup principal |
| 2 | Problema | Criar reconhecimento da dor | Três situações reais de quem depende de ônibus |
| 3 | Como funciona | Simplificar o fluxo do produto | Registrar → aprender → decidir |
| 4 | Produto | Mostrar que há um produto concreto | Três telas/mockups do app |
| 5 | Princípios | Transmitir privacidade, autonomia e confiança | Offline, dados no aparelho, estimativas honestas |
| 6 | Encerramento | Reforçar estágio e abrir canal de contato | “Em desenvolvimento” + CTA para e-mail |
| 7 | Rodapé | Oferecer contexto e links básicos | Copyright, e-mail, privacidade e aviso de independência |

---

## 6. Seção por seção

### 6.1 Cabeçalho

**Objetivo:** apresentar o NoteBus com sobriedade e manter navegação simples.

**Elementos:**

- símbolo ou monograma provisório “NB”;
- nome `NoteBus`;
- links: `Como funciona`, `Princípios`, `Sobre`;
- botão/CTA: `Falar com o NoteBus`;
- destino do CTA: `mailto:hello@notebus.com.br` ou o endereço final definido no domínio.

**Comportamento:**

- topo transparente no início;
- após rolagem, superfície translúcida, discreta e com leve blur;
- no celular, navegação compacta e alvos de toque com mínimo de 44 × 44 px;
- foco de teclado sempre visível;
- sem menu complexo se a página tiver poucas âncoras.

---

### 6.2 Hero

**Objetivo:** responder imediatamente “o que é e por que importa?”.

**Copy inicial:**

> **Saiba quando sair para pegar o ônibus.**
>
> O NoteBus transforma o que você observa no ponto em horários mais úteis para o seu dia.
>
> Registre passagens, compare alternativas e veja quando estar no ponto — mesmo sem internet.

**CTA:**

> **Falar com o NoteBus**

**Microtexto:**

> Em desenvolvimento. Sem cadastro obrigatório no app.

**Composição visual:**

- fundo de mapa abstrato, original e inventado;
- texto à esquerda no desktop e antes do mockup no mobile;
- mockup de iPhone à direita/abaixo;
- mockup mostra uma tela de destino com uma opção de trajeto e estimativa;
- uma folha inferior translúcida ajuda a conectar a landing à linguagem de mapas e bottom sheets do app.

**Dados de demonstração obrigatoriamente fictícios:**

- destino: “Faculdade”;
- horários fictícios, por exemplo: `Sair às 08:03`, `Esteja no ponto às 08:11`, `Chega ~08:42`;
- confiança: `Média`;
- nomes de ruas, pontos e linhas totalmente inventados.

---

### 6.3 Problema

**Título sugerido:**

> **Horário publicado não é sempre o horário que acontece.**

**Texto de apoio:**

> Quando a rotina depende de ônibus, uma tabela sozinha nem sempre responde ao que importa: quando sair, qual opção ainda dá tempo de pegar e quando você deve chegar.

**Três cartões:**

| Cartão | Título | Copy |
|---|---|---|
| 1 | Horários que não batem | “A tabela diz uma coisa. A rua mostra outra.” |
| 2 | Anotações espalhadas | “Você até registra no WhatsApp ou nas notas, mas não enxerga um padrão.” |
| 3 | Escolhas sob pressão | “Perdeu uma linha? O primeiro ônibus nem sempre é a melhor opção.” |

**Direção visual:**

- cartões claros, com bastante respiro;
- ícones lineares próprios e consistentes;
- sem personagens genéricos, bancos de imagem corporativos ou emoji;
- fundo cartográfico muito sutil, com contraste suficiente para leitura.

---

### 6.4 Como funciona

**Título sugerido:**

> **Seu caderno de horários, feito para a rua.**

**Fluxo:**

1. **Registre**
   - “Viu o ônibus passar? Salve a passagem em poucos toques.”
2. **Aprenda**
   - “O NoteBus combina suas observações e horários conhecidos para encontrar um padrão.”
3. **Decida**
   - “Veja alternativas e saiba quando sair para chegar melhor.”

**Direção visual:**

- linha de percurso esquemática ligando os três passos;
- pontos e traços com cores de rota discretas e acessíveis;
- no mobile, a linha passa a ser vertical;
- animação de desenho de rota é opcional e deve respeitar `prefers-reduced-motion`.

---

### 6.5 Produto em ação

**Título sugerido:**

> **Menos dúvida no ponto. Mais clareza para seguir.**

**Objetivo:** demonstrar as capacidades do produto com telas concretas, sem transformar a seção em catálogo de recursos.

| Ordem | Tela | Título público | Explicação |
|---:|---|---|---|
| 1 | Início / ponto | Veja o que vem no seu ponto | Horários próximos, atalhos e acesso rápido ao registro. |
| 2 | Registrar embarque | Registre o que realmente aconteceu | Uma passagem observada passa a fazer parte do seu histórico. |
| 3 | Destino / trajeto | Escolha pelo horário em que você chega | Compare opções e saiba quando sair para não perder a melhor alternativa. |

**Composição desktop:**

- tela central maior;
- duas telas secundárias em profundidade leve;
- sem carrossel;
- cada tela acompanha título e texto curto.

**Composição mobile:**

- cada mockup aparece em sequência vertical;
- texto imediatamente antes ou depois da imagem;
- nunca reduzir screenshots até o texto da interface ficar ilegível.

---

### 6.6 Princípios

**Título sugerido:**

> **Feito para ser seu.**

| Princípio | Copy pública |
|---|---|
| Seus dados, no seu aparelho | “O NoteBus foi pensado para funcionar sem conta obrigatória. Suas anotações continuam sob seu controle.” |
| Funciona mesmo sem sinal | “O essencial fica disponível offline — inclusive quando você está no ponto.” |
| Estimativas honestas | “Em vez de fingir certeza, o app mostra variação e confiança quando os dados ainda são poucos.” |

**Faixa opcional, sujeita a revisão de produto:**

> Sem feed. Sem depender de uma operadora para funcionar.

A frase “sem anúncios invasivos” só entra se for uma decisão pública duradoura de monetização e comunicação.

---

### 6.7 Encerramento

**Título sugerido:**

> **O NoteBus está a caminho.**

**Copy:**

> Estamos desenvolvendo a primeira versão do NoteBus. Quer acompanhar o projeto ou contar como você organiza seus horários de ônibus?

**CTA:**

> **Falar com o NoteBus**

**Destino:**

`mailto:hello@notebus.com.br`

Se esse endereço ainda não estiver configurado, usar provisoriamente o endereço corporativo definido no domínio e trocar antes da publicação final.

---

### 6.8 Rodapé

**Conteúdo mínimo:**

- `© 2026 NoteBus`;
- `notebus.com.br`;
- e-mail público;
- link para página de privacidade;
- GitHub e LinkedIn somente se existirem e estiverem prontos para serem públicos;
- aviso curto: “NoteBus é um projeto independente e não é afiliado a operadoras de transporte.”

---

## 7. Sistema visual

### 7.1 Direção

A landing deve refletir o produto, não parecer uma página genérica de startup:

- mapa abstrato como contexto;
- superfícies e cartões como camadas de informação;
- tipografia clara e forte;
- muito espaço em branco;
- cores neutras/pastéis e cores de linhas usadas com função;
- tom calmo, prático, preciso e humano.

### 7.2 Regras

- Reutilizar os princípios da identidade e dos tokens do projeto sempre que forem aplicáveis à web.
- Não inventar uma marca paralela para a landing.
- Preferir pilha de fontes do sistema para leveza e coerência com o app, a menos que a identidade final estabeleça uma fonte própria.
- Usar escala de espaçamento baseada em 4: 4, 8, 16, 24 e 32, expandida quando necessário para seções grandes.
- Usar raios e sombras discretos; a hierarquia deve vir primeiro de contraste, posição e espaço.
- Cores de linha não podem ser o único canal para comunicar diferença de rotas/estados.
- Ícones devem ser SVGs próprios ou de licença comprovada, com traço consistente.
- Não usar emoji como ícone de interface.

### 7.3 Tema

- Implementar modo claro e escuro usando `prefers-color-scheme`.
- O tema escuro não é inversão automática: superfícies, contraste, bordas, mapa de fundo e cores de linha precisam ser revisados individualmente.
- O usuário pode, futuramente, receber um seletor manual; ele não é obrigatório para a primeira publicação.

---

## 8. Acessibilidade e qualidade

A primeira landing deve nascer acessível. Critérios mínimos:

- contraste AA de texto e controles;
- estrutura semântica correta (`header`, `main`, `section`, `footer`; sequência coerente de `h1` a `h3`);
- link “Pular para o conteúdo” para teclado e leitor de tela;
- foco visível;
- navegação por teclado integral;
- alvo mínimo de toque de 44 × 44 px;
- `alt` descritivo em screenshots que comunicam algo e `alt=""` em imagens decorativas;
- nenhuma informação essencial apenas dentro de imagem;
- compatibilidade com aumento de fonte e zoom;
- layout validado em 320 px, 375 px, 768 px e desktop amplo;
- transições curtas e opcionais;
- `prefers-reduced-motion: reduce` elimina animações não essenciais;
- performance sem vídeo automático, sliders ou bibliotecas visuais pesadas.

---

## 9. SEO, compartilhamento e infraestrutura

### 9.1 Metadados iniciais

**Título da aba:**

> NoteBus — Seu caderno de horários de ônibus

**Meta description:**

> O NoteBus ajuda você a registrar horários reais de ônibus, comparar alternativas e saber quando sair para o ponto. Em desenvolvimento.

### 9.2 Open Graph

Preparar:

- `og:title`;
- `og:description`;
- `og:image` original, sem dados de terceiros;
- `og:url` com URL canônica;
- `twitter:card` com imagem grande.

### 9.3 Domínio e Cloudflare

1. Adicionar o domínio ao Cloudflare.
2. Alterar os nameservers no Registro.br conforme instrução do Cloudflare.
3. Criar o projeto no Cloudflare Pages e conectar ao repositório.
4. Configurar `notebus.com.br` como domínio principal.
5. Configurar `www.notebus.com.br` para redirecionar ao domínio principal, ou o inverso; escolher apenas uma URL canônica.
6. Confirmar HTTPS ativo e redirecionamento HTTP → HTTPS.
7. Testar o e-mail do domínio antes da publicação final.
8. Criar registros SPF/DKIM/DMARC conforme a solução de e-mail escolhida.

### 9.4 Analytics

Não adicionar analytics na primeira versão por padrão.

Se no futuro forem necessários, escolher uma solução com coleta mínima e documentar claramente na política de privacidade. A landing não deve coletar dados pessoais sem finalidade e base comunicada.

---

## 10. Implementação recomendada

### 10.1 Arquitetura

- Página estática, sem backend nesta versão.
- Hospedagem no Cloudflare Pages.
- Repositório separado ou diretório claramente separado do app mobile, para não misturar dependências e ciclos de deploy.
- CSS próprio com variáveis/tokens; evitar frameworks visuais pesados.
- Conteúdo estruturado para futura tradução, mesmo começando apenas com pt-BR.

### 10.2 Stack

Opção recomendada:

- **Astro** para landing estática rápida, leve e simples de publicar no Cloudflare Pages;
- CSS moderno ou CSS Modules;
- SVGs locais;
- imagens otimizadas em AVIF/WebP quando fizer sentido;
- componentes pequenos e sem JavaScript desnecessário.

Alternativa aceitável:

- Next.js com exportação estática, se houver uma razão clara para compartilhar infraestrutura ou conhecimento com outro projeto.

### 10.3 Critérios técnicos

- Sem formulário, banco de dados ou API nesta primeira versão.
- CTA por `mailto:`.
- Sem dependência de fontes externas se não forem estritamente necessárias.
- Imagens carregadas de forma responsiva e com dimensões declaradas para evitar layout shift.
- Lighthouse como referência, não como objetivo isolado: priorizar experiência real, acessibilidade e conteúdo correto.

---

## 11. Etapas de trabalho

| Fase | Entrega | Critério de aceite |
|---:|---|---|
| 1 | Brief fechado | Decisões deste plano confirmadas e registradas |
| 2 | Copy completa | Todos os textos aprovados antes do layout final |
| 3 | Inventário de ativos | Screenshots revisados, dados fictícios, ícones, marca provisória e mapa abstrato definidos |
| 4 | Wireframe | Layout desktop e mobile validados sem depender de acabamento visual |
| 5 | Sistema visual web | Tokens, tipografia, grid, componentes e estados documentados |
| 6 | Implementação | Página estática responsiva, com links e CTA funcionais |
| 7 | QA | Testes de celular, desktop, teclado, foco, contraste, tema e redução de movimento |
| 8 | Publicação | DNS, HTTPS, domínio canônico, e-mail e metadados verificados |
| 9 | Pós-publicação | Revisar carregamento, prévias de compartilhamento e erros de links |

---

## 12. Ordem detalhada de execução

### Etapa A — Conteúdo

1. Revisar e aprovar a copy deste plano.
2. Definir o e-mail público final: preferencialmente `hello@notebus.com.br`.
3. Definir o destino do segundo CTA, se houver: nesta versão ele pode não existir.
4. Escrever texto de privacidade mínimo para a landing.
5. Definir o texto de “Sobre” e o aviso de projeto independente.

### Etapa B — Ativos

1. Revisar os screenshots disponíveis do app.
2. Separar o que pode aparecer publicamente.
3. Criar dados fictícios para qualquer screenshot que tenha dados reais.
4. Escolher ou criar um monograma provisório NB.
5. Criar mapa vetorial abstrato próprio.
6. Criar favicon e imagem Open Graph.

### Etapa C — Wireframe e design

1. Desenhar hero desktop e mobile.
2. Posicionar todas as seções em uma grade responsiva.
3. Definir ritmo vertical, larguras de texto e tamanhos de mockup.
4. Aplicar sistema de cor, tipografia, superfícies e iconografia.
5. Desenhar tema escuro.
6. Revisar contraste e leitura em mobile antes de codificar.

### Etapa D — Desenvolvimento

1. Criar o projeto Astro.
2. Estruturar componentes: `Header`, `Hero`, `Problem`, `HowItWorks`, `ProductShowcase`, `Principles`, `Contact`, `Footer`.
3. Configurar variáveis de design e modo escuro.
4. Implementar layout mobile-first.
5. Inserir imagens com dimensões, descrição e carregamento adequado.
6. Implementar âncoras, foco e `mailto:`.
7. Adicionar metadados, Open Graph, favicon e `robots.txt`/`sitemap` quando aplicável.

### Etapa E — QA e lançamento

1. Conferir cada seção em tela pequena, média e grande.
2. Testar navegação somente por teclado.
3. Testar `prefers-reduced-motion` e `prefers-color-scheme`.
4. Verificar contraste com ferramenta adequada.
5. Testar CTA de e-mail no computador e celular.
6. Publicar preview no Cloudflare Pages.
7. Apontar domínio, confirmar HTTPS e URL canônica.
8. Testar preview do link em WhatsApp, LinkedIn e Discord.
9. Fazer uma última revisão de dados reais, promessas indevidas e links quebrados.

---

## 13. Critérios de aceite da versão 0.1

A landing estará pronta para publicar quando:

- [ ] Abrir corretamente em `https://notebus.com.br`.
- [ ] Explicar o NoteBus sem depender de contexto externo.
- [ ] Não prometer recurso que o produto não entrega.
- [ ] Não expor dados, marcas ou mapas de terceiros sem autorização.
- [ ] Ter CTA funcional para e-mail no domínio.
- [ ] Funcionar bem em celular e desktop.
- [ ] Ter contraste e foco de teclado adequados.
- [ ] Respeitar redução de movimento.
- [ ] Ter tema claro e escuro revisados.
- [ ] Ter título, description, favicon e Open Graph configurados.
- [ ] Usar HTTPS e URL canônica.
- [ ] Ter rodapé com contato e política de privacidade mínima.
- [ ] Manter tom prático, honesto e não exagerado.

---

## 14. Próximo artefato

O próximo passo é produzir, nesta ordem:

1. **Copy final, seção por seção**;
2. **Wireframe textual desktop e mobile**;
3. **Inventário dos screenshots e dados fictícios necessários**;
4. **Especificação visual web**;
5. Implementação.

Nenhuma tela pública deve ser publicada antes da revisão de dados demonstrativos e da confirmação de que o e-mail público do domínio está funcionando.
