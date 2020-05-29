# PostsAssignment
Angular beadandó a PHP Programozás órára. Az app az összes elvárt dolgot tudja.
- API-ról adatok
- local storage-be mentés és onnan használat
- Login (username: admin , password: admin)
- Listázás
- CRUD

Ezt az API-t használtam:
https://jsonplaceholder.typicode.com/posts

## Fontosabb megjegyzések
Valamilyen okból kifolyólag amikor épp olyan kedve van a rendszernek, ha nem kerül frissítésre manuálisan az első belépés után a screen, akkor megakad az initializing subscribe részénél és képes ~60 sec-et is ott várni mire beolvassa a local storage-be az adatokat. Ezt akárhogy próbáltam, sehogy sem tudtam kijavítani, nem jöttem rá miért csinálja. (Használtam setTimeout-ot a post komponensnél ami néha megoldotta, néha meg nem.)

Nálam az input fieldek megkötésénél valamiért nem volt hajlandó figyelembe venni a type=... paramétert, így sajnos a userId-nél ahol number kéne, lehet nem megfelelő inputot is megadni.

## Németh Máté (K5BPCA)
