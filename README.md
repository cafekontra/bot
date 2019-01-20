# Café Kontra Bot
Der Discord-Bot für den Server mit Funcommands und weiteren Features.

## Einfach Commands hinzufügen
Der Bot besitzt eine komfortable Möglichkeit, einfache "Text"-Commands hinzuzufügen. Das funktioniert wie folgt:
* Erstelle eine JSON (.json)-Datei in Deinem commands-Ordner
* Zum Erstellen kannst Du folgende Vorlage benutzen:
  ```json
  "name": {
        "name": "name",
        "alias": ["alias", "alias"],
        "output": {
            "without": "Nachricht, wenn keine Argumente übergeben sind",
            "with": "Nachricht, wenn Argumente vorhanden sind (kann weggelassen werden, wenn es nicht benötigt wird)" 
        }
   }
  ```
  * Der Key `name` steht für den Namen des Commands, der mit dem Prefix eingegeben werden muss, um den Command auszuführen
  * Der Key `alias` steht für die Aliase des Commands, also andere Namen für den Command. Das kann auch komplett weggelassen werden.
  * Der Key `output` steht für das, was der Bot senden soll. Im Template oben stehen die Erläuterungen von `without` und `with`
  * [**WIP**] In Zukunft wird noch der Key `time` hinzugefügt, wo in Sekunden angegeben werden kann, wann der Command ausgeführt werden darf (z.B. nur alle 10 Sekunden).
 
## Nutzung des Bots
Der Bot darf für die **private** Nutzung* frei verwendet werden. Falls Du den Bot auf Deinem Server verwenden möchtest, bitten wir Dich, uns zu kontaktieren. Das kannst Du zum Beispiel per Privatnachricht an DwarfLop#0021.
* unter "privater Nutzung" verstehen wir Discord-Server, die nicht mit mit einer öffentlichen Community in Verbindung gebracht werden. Das sind zum Beispiel Server in kleinen Kreisen, z.B. mit Freund*innen.

#### Hinweis zum Command-Handler
Der Command-Handler wurde zu Teilen vom npm-Modul djs-commands (https://www.npmjs.com/package/djs-commands) übernommen. Die Möglichkeit, Commands über JSON-Dateien hinzuzufügen, wurde exklusiv ergänzt. Das NPM-Modul besitzt keine Lizenz, deswegen ist diese hier nicht angegeben.
