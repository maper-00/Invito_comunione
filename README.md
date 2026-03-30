# Comunione Fede - Invito Prima Comunione Lorenzo

Progetto web per l'invito interattivo della Prima Comunione di Lorenzo.

## Struttura del Progetto

```
Comunione_Fede/
├── index.html           # File HTML puro (struttura)
├── css/
│   └── styles.css       # Stili CSS (design e layout)
├── js/
│   └── script.js        # JavaScript (interattività)
├── images/              # Cartella per le foto
├── README.md            # Questo file
```

## File Description

### `index.html`
Contiene unicamente la struttura HTML del progetto:
- Sezione intro con busta e sigillo in cera
- Sezione invito con dettagli evento
- Due modal popup (chiesa e location)

### `css/styles.css`
Contiene tutto lo styling:
- Variabili CSS per colori (oro, avorio, etc.)
- Animazioni (shimmer, fadeUp, pulse, etc.)
- Stili per: intro, invito, bottoni, modal
- Responsive design

### `js/script.js`
Contiene la logica interattiva:
- `openEnvelope()` - Apre la busta
- `openModal()` - Apre un modal
- `closeModal()` - Chiude un modal
- `closeModalOutside()` - Chiude il modal quando si clicca fuori

## Utilizzo

1. Apri `index.html` in un browser
2. Clicca sul sigillo in cera per aprire l'invito
3. Clicca sui bottoni per visualizzare i dettagli
4. Usa Google Maps per navigare verso le location

## Font

Il progetto utilizza font da Google Fonts:
- **Playfair Display** - Titoli eleganti
- **Cormorant Garamond** - Testi italici sofisticati
- **Montserrat** - Testi body e etichette

## Colori

I colori principali sono definiti come variabili CSS in `styles.css`:
- Oro (#b8952a, #d4af4a)
- Avorio (#faf6ee, #f3ece0)
- Testi (#3a2a10, #6b5530)
