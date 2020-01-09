# kangoeroes.poef

Progressive Web App voor 'consumer' gebruik van de digitale poef. Gebouwd met Angular.

## Info

- Angular 8
- Angular Material
- PWA support

## Prerequisites

**Zorg dat je voor elk commando steeds in de root map van het project bent met je terminal.**

- Angular CLI
- http-server: `npm install -g http-server`

## Running

**Alle commando's worden uitgevoerd via de terminal in de root van het project.**

### Normal development

Voor normale ontwikkeling van de app, volstaat het om `ng serve` uit te voeren. Optioneel met de `--open` parameter om meteen een browser te openen.
De applicatie is bereikbaar op `localhost:4200`.

### Testen van PWA functionaliteit

Met het normale `ng serve` wordt de PWA versie van de applicatie niet gestart. Voor het testen van specifieke functionaliteit voor een pwa, moet je de applicatie builden voor productie en serven via een lokale http-server.

**Opgelet: de applicatie moet elke opnieuw gebuild worden wanneer je deze manier gebruikt. Er is geen auto reloading.**

1. `ng build --prod`
2. `http-server -c-1 dist/kangoeroes-poef`

De applicatie is bereikbaar op `localhost:8080`.
