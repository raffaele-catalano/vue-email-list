Vue Email List
===
> Attraverso l’apposita `API` di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all’interno di una lista.

## Development
- Strutturazione del *markup* basilare (`html`, `css`, `js`);
- Importati *framework* e *librerie* : (`bootstrap`, `vue`, `axios`);
- Impostata la *function* `getMailList()` ed *invocata* nel `mounted()`;
- Implementate in `html` le condizioni necessarie (`v-for` *&* `v-if`/`v-else`); 
- Aggiunta di un `setTimeout` all'interno della *function* `getMailList()`;
- Rimozione del `setTimeout` e del richiamo alla *function* `getMailList()` in `mounted()`;
- Aggiunta del *button* **Generate** al cui `@click` viene richiamata la *function* `getMailList()`;
- Aggiunta della *function* `resetMailList()`, la quale "svuota" l'array principale;
- Aggiunta del *button* **Reset** al cui `@click` viene richiamata la *function* `resetMailList()`;
- Aggiunti commenti all'interno dell'intero codice + correzioni minime.