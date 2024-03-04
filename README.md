# Autókozmetikai műhely projekt

## Készítették: Pásztor Márk, Plavecz Barnabás és Bogárdi Benedek.

- Grafikus munka, mosógépszerelés, illetve style presetek készítője, kijelölt tesztelő - `Bogárdi Benedek`
- Szöveges tartalomért, illetve az adatok létrehozásáért és frontenddel összekapcsolásért felelős: - `Plavecz Barnabás`
- Kód készítője, projektmenedzser - `Pásztor Márk`

### [Github Pages oldal](https://pasztor-mark.github.io/szteszt-projekt/#)

## A projekt fő jellemzői

- [Vite](https://vitejs.dev) + [TypeScript](https://www.typescriptlang.org) és [React](https://react.dev) rendszerekkel felépített weblap
- Projektmenedzsment a [GitHub Projects](https://github.com/users/pasztor-mark/projects/1) felületen történt.
- A verziókontrollt szintén a [GitHub](https://github.com/pasztor-mark/szteszt-projekt) szolgáltatta.
## Amikre figyeltünk
- Egyenlő munkamegoszlás az erősségeknek megfelelően
- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) használata
- Munkaidő elosztása, hogy elkerüljük a határidő előtti crunch-ot
- Projektleírásban előírt pontok követése

## Kész termék tulajdonságai
- `Autókozmetikai cég teljesen funkcionális weboldala`
  - `Fő komponensek`
      - `Navigációs sáv` - elérhetővé teszi a lapok közötti navigációt
      - `Footer` - Leírás, impresszum, admnisztrátori felületre navigáló gomb
  - `Főoldal` - egyszerű, figyelemfelkeltő landing oldal
  - `Admin oldal` - backendről szedett adatok módosítása hitelesítéssel kiegészítve
    - `CRUD funkciók` - Táblázatos megoldással az adminisztrátor tud létrehozni, olvasni, frissíteni vagy törölni adatokat. 
  - `Rólunk` - csapatot és céget bemutató oldal
    - `Idővonal` - Teljesen skálázható, reszponzív idővonal-sáv.
  - `Galéria oldal` - néhány projektről képek és leírások
    - `Előtte/utána képkártyák` - slider segítségével szemlélteti a különbséget a cég egy termékének első és utolsó fázisa között.
  - `Árak` - külső adatbázisból szerzett adatok alapján felépített szolgáltatásokat leíró oldal
    -  `Árkártya` - Egy nevet, minimum-maximum árakat és leírást tartalmazó kártya, amely adatonként felépül az oldalon.
    -  `Email árajánlat` - Csak dekoratív okokból került oda. Nem funkcionális.
  - `Kapcsolat` - Elérhetőségeket kilistázó oldal
    - `Google Maps beágyazás` - A projekt konzolban kijelzett hibáinak ~100%-áért felelős
    - `Elérhetőség kártyák` - Külső adatbázisból szerzett adatok alapján épül fel az oldalon.
