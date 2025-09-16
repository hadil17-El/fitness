// src/utils/profileStorage.js

export const saveProfileToLocalStorage = (profile) => {
  localStorage.setItem("userProfile", JSON.stringify(profile));
};
/*

🔍 Spiegazione:
Salva un oggetto profile nel localStorage del browser.

JSON.stringify(profile) trasforma l’oggetto in una stringa, perché localStorage può salvare solo stringhe.

"userProfile" è la chiave con cui salvi il profilo: puoi usarla per leggerlo in seguito.

Cosa è?	                                Spiegazione
export	                                Permette di usare la funzione in altri file JavaScript/React.
const	                                Dichiara una costante: la funzione non cambierà.
saveProfileToLocalStorage	            È il nome della funzione che stai creando.
(profile)                           	Il parametro profile è un oggetto che rappresenta il profilo utente (es: nome, età, peso...).
=> { ... }      	                È una funzione freccia: una forma compatta di funzione.

🔹 localStorage
Cosa è?	Spiegazione
localStorage	È una funzionalità del browser che permette di salvare dati localmente, in modo persistente.
📌 È una specie di “memoria del browser” dove puoi salvare dati come stringhe.

🔹 .setItem("userProfile", ...)
Cosa è?                     	Spiegazione
.setItem()                  	È un metodo di localStorage che salva un dato.
"userProfile"	                È la chiave: un nome identificativo con cui salvi il dato. Puoi usarla dopo per recuperarlo.

💡 È come mettere qualcosa in un cassetto con un’etichetta "userProfile".

🔹 JSON.stringify(profile)
Cosa è?             	Spiegazione
JSON.stringify()	    Converte un oggetto JavaScript in una stringa JSON.
profile	                È l’oggetto che contiene i dati del profilo dell’utente.

📌 localStorage può salvare solo stringhe, quindi dobbiamo prima trasformare l'oggetto profile in formato testo (JSON).

Questa funzione:

js
Copia codice
saveProfileToLocalStorage(profile)
Prende un oggetto profile

Lo converte in stringa con JSON.stringify()

Lo salva nel localStorage del browser con la chiave "userProfile"

🧪 Esempio concreto:
js
Copia codice
const profile = {
  nome: "Luca",
  età: 25,
  peso: 70
};

saveProfileToLocalStorage(profile);

Risultato salvato nel browser:
"userProfile": "{\"nome\":\"Luca\",\"età\":25,\"peso\":70}"


*/

export const loadProfileFromLocalStorage = () => {
  const stored = localStorage.getItem("userProfile");
  return stored ? JSON.parse(stored) : null;
};
/*
Parte	                    Spiegazione

loadProfileFromLocalStorage	È il nome della funzione. Serve a caricare i dati salvati.
= () => {                  	È una funzione freccia, senza parametri.

🔁 Quindi questa funzione non riceve nulla, ma prova a recuperare i dati dal localStorage.

Parte	                        Spiegazione
localStorage.getItem(...)	    Legge un dato dal localStorage, usando la chiave "userProfile".
const stored = ...          	Salva nella variabile stored il valore letto (una stringa JSON oppure null se non esiste).
📌 Se il profilo non è stato ancora salvato, questa riga restituirà null.

return stored ? JSON.parse(stored) : null;
Parte	            Spiegazione
stored ? ... : ...	È un operatore ternario: una specie di if.
JSON.parse(stored)	Se stored esiste, lo trasforma da stringa JSON → oggetto JavaScript.
: null	Altrimenti, restituisce null (cioè, profilo non trovato).



🧠 In sintesi:
La funzione:
loadProfileFromLocalStorage()
Cerca di leggere i dati del profilo salvati in precedenza nel localStorage.

Se trova qualcosa:

lo trasforma in oggetto leggibile da JavaScript (con JSON.parse).

Se non trova niente:

restituisce null.
*/