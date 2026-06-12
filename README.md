# Kelly Celeste — Site

Site institucional (one-page) da **Kelly Celeste Contabilidade**.
HTML, CSS e JavaScript puros — sem build e sem dependências.

## Como rodar localmente

É um site estático. Você pode abrir o `index.html` direto no navegador, mas o
ideal é servir a pasta (assim as fontes e o Open Graph funcionam como em produção):

```bash
# Servidor local simples (Python 3)
python3 -m http.server 8000
# Depois acesse: http://localhost:8000
```

Ou, se preferir abrir direto:

```bash
open index.html
```

## Estrutura

```
index.html        → a página
kelly-site.css    → estilos (tema, layout e responsividade)
kelly-site.js     → menu mobile (hambúrguer)
favicon.svg       → ícone da aba
og-image.png      → imagem de compartilhamento (WhatsApp/Facebook/LinkedIn)
design/           → artefatos do Claude Design (logos, mockups) — NÃO fazem parte do site
```

## Pendências (placeholders a substituir)

Tudo marcado com `*` no site é **conteúdo de exemplo** e deve ser trocado pelos
dados reais antes de divulgar:

- **WhatsApp** — atualmente `5511999990000` (procure por `wa.me/55…` no `index.html`)
- **CRC, e-mail, Instagram e endereço** (seção "Sobre", contato e rodapé)
- **Foto da Kelly** — hero e seção "Sobre" estão com placeholder
- **Depoimentos** reais (hoje são exemplos)
- **Domínio** nas tags `canonical` e Open Graph do `index.html` (hoje `kellyceleste.com.br` como exemplo)
