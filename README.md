# NoteBus Landing

Landing provisória do NoteBus, construída com React + Vite + TypeScript.

## Rodar localmente

```bash
npm install
npm run dev
```

## Gerar build

```bash
npm run build
```

O resultado fica em `dist/`. No Cloudflare Pages, use `npm run build` como comando de build e `dist` como diretório de saída.

## Antes de publicar

- Definir e testar o e-mail público do domínio.
- Atualizar CTA e rodapé em `src/content/site.ts` e nos componentes necessários.
- Revisar dados exibidos nos screenshots e retirar referências que não possam ser divulgadas publicamente.
- Criar uma imagem Open Graph própria e configurar domínio canônico.
