# PostsAssignment
Angular beadandó a PHP Programozás órára. Az app az összes elvárt dolgot tudja.
- API-ról adatok
- local storage-be mentés és onnan használat
- Login (username: admin , password: admin)
- Listázás
- CRUD

Ezt az API-t használtam:
https://jsonplaceholder.typicode.com/posts

Az appot WebStorm-ban fejlesztettem.

## Fontosabb megjegyzések
Néha az első cache-elésnél login után manuálisan frissíteni kell az oldalt hogy behozza az adatokat a local storage-ből, de az esetek ~90%-ában teljesen jól működik. Sokáig tesztelgettem, próbálgattam, de még nem jöttem rá mi idézi elő a bugot ami megakasztja a store-olás folyamatát x ms-re.

Nálam az input fieldek megkötésénél valamiért nem vette be a type=... paramétert, így sajnos a userId-nél ahol number-t vár, lehet nem megfelelő inputot is megadni.

## Németh Máté (K5BPCA)
