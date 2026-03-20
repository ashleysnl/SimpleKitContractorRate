# Contractor Effective Hourly Rate Calculator

Static SimpleKit tool for comparing a contractor's stated hourly rate against their adjusted annual income and effective hourly rate after unpaid vacation and self-paid benefits.

## What it includes

- shared SimpleKit core shell integration
- existing Google Analytics head snippet
- contractor rate calculator with paid versus unpaid vacation handling
- employer-paid versus self-paid benefits handling
- effective hourly rate calculation using full-year standard working hours
- shareable URL state for saved scenarios
- educational copy, FAQ, related tools, and disclaimer sections

## File structure

```text
/
  index.html
  assets/
    css/
      styles.css
    js/
      app.js
      simplekit-tool-links.js
  calculator-spec.yaml
  README.md
```

## Core model

- nominal annual income = hourly rate × hours per week × weeks per year
- paid weeks are reduced only when vacation is unpaid
- self-paid benefits are subtracted after the unpaid-vacation adjustment
- effective hourly rate uses full-year standard working hours so contract offers can be compared on a like-for-like basis

## Local development

This is a static site. Open [index.html](/Users/AshleySkinner/Documents/00_Engineering/04_Code/50_SimpleKit App Factory/workspaces/rate-calculator/index.html) in a browser or serve the repo with any simple static file server.

## Deployment notes

Keep these integrations intact when deploying:

- `https://core.simplekit.app/core.css`
- `https://core.simplekit.app/core.js`
- the Google Analytics snippet in `index.html`
- shared shell mount points such as `data-simplekit-header`, `data-simplekit-support`, and `data-simplekit-footer`

## Related SimpleKit links

Live related-tool URLs come from:

- `assets/js/simplekit-tool-links.js`
