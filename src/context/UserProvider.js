import { useState,createContext } from "react";
/*
✅ Qui creiamo il contenitore del contesto.

Sarà usato da useContext(UserContext) per accedere ai dati ovunque.
.createContext():è una funzione di react,serve per creare un contenutore di dati globali accessibile per qualsiasi componente.

.UserContext: è la costante che contiene il contesto creato. e viene poi usata in due modi:
Come Provider: <UserContext.Provider> → per dare i dati ai figli.

Come Consumer: useContext(UserContext) → per leggere quei dati
*/
export const UserContext = createContext();//Cosa fa: Crea un contesto chiamato UserContext.
/*
✅ Questa è una funzione che fornisce il contesto.

children sono tutti i componenti dell’app che vivranno dentro questo contesto.


🧠 Cos'è un contenitore nel contesto di React Context?
Quando diciamo che UserContext.Provider è un contenitore, 
intendiamo che racchiude o incapsula i componenti figli (children) e 
fornisce loro un accesso ai valori definiti nel value (in questo caso, user e setUser).

UserContext è il contesto che hai creato con createContext().

UserContext.Provider è il componente speciale che fornisce (provide) il valore del contesto.

value={{ user, setUser }} è il pacchetto di dati che sarà disponibile a tutti i componenti "figli" che consumeranno il contesto.

{children} rappresenta i componenti figli che saranno "contenuti" nel contesto, e quindi potranno accedere a quei valori.
*/
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

/*
🧠 Obiettivo del UserContext
Avere uno stato globale dell’utente disponibile in ogni componente della tua app (come Profile.jsx), senza dover passare i dati manualmente da genitore a figlio.

 In React, il contesto (context) è un meccanismo per condividere dati globali (come utente loggato, tema, lingua...) tra componenti, senza doverli passare manualmente a ogni livello.

Se vuoi far sapere a tutti chi è l'utente loggato, hai due scelte:

❌ Passare il dato a mano a ogni figlio (props chaining) – scomodo:

js
Copia
Modifica
<App>
  <Layout user={user}>
    <Sidebar user={user}>
      <Profile user={user} />
✅ Usare un contesto – comodo e centralizzato:

js
Copia
Modifica
<UserContext.Provider value={{ user }}>
  <App />
E in ogni componente:

js
Copia
Modifica
const { user } = useContext(UserContext);



🧩 1. Contesto (Context)
Il contesto (Context) è un meccanismo di React che permette di condividere dati (es. l’utente loggato, il tema, la lingua) tra componenti senza passare props manualmente a ogni livello.

Viene creato con createContext().
📦 2. Contenitore (Provider / Container)
Il contenitore è il componente che avvolge altri componenti e fornisce loro un contesto.

In React Context, questo è il Context.Provider.

Esempio:
<ThemeContext.Provider value="dark">
  <MyComponent />
</ThemeContext.Provider>
Qui, ThemeContext.Provider è il contenitore.

MyComponent è contenuto dentro il Provider, quindi può usare useContext(ThemeContext) per leggere "dark".

*/