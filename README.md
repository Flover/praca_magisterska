### Walidacja w aplikacjach Meteor
#### *Mateusz Kwiatkowski*

* [link do aktualnego PDF-a z treścią pracy mgr](https://github.com/Flover/praca_magisterska/raw/master/magisterka.pdf)

#### *Wprowadzenie*
Walidacja jest działaniem mającym na celu potwierdzenie w sposób udokumentowany
i zgodny z założeniami, że procedury, procesy, urządzenia, materiały,
czynności i systemy rzeczywiście prowadzą do zaplanowanych wyników. Znana
jest także jako kontrola jakości oprogramowania. Wykorzystuje się ją w naukach
technicznych oraz informatyce.

Aplikacje pozbawione walidacji pozwalają użytkownikowi na wprowadzenie
irracjonalnych danych do systemu. Przykładem takiej aplikacji jest elektroniczny
indeks. Operacje takie jak wystawianie studentowi ocen z ćwiczeń czy też
wystawienie oceny końcowej z egzaminu gdy student nie posiada pozytywnej oceny
z danych zajęć powinny być odpowiednio walidowane i nie dopuszczać do sytuacji
gdy student otrzymuje ocenę z poza skali lub od osoby do tego nieupoważnionej.
Jeszcze do niedawna na wszystkich uczelniach stosowano klasyczne indeksy papie-
rowe, jednak w wyniku rozwoju technologii internetowych coraz częściej rezygnu-
je się z klasycznych rozwiązań zastępując je ich elektronicznymi odpowiednikami.
Zastosowanie walidacji w elektronicznym systemie wystawiania ocen udoskonali
jego funkcjonalność, a także usprawni działanie danej aplikacji. Nie dopuści
również do wprowadzenia błędnych danych do systemu oszczędzając tym samym
czas użytkownika, a także zwiększy jego efektywność. Miałem kontakt z wieloma
systemami zarządzania osiągnieciami studentów, ale w każdym można było
doprowadzać do anomalii, a samo działanie takiej aplikacji również pozostawiało
wiele do życzenia, dlatego postanowiłem zająć się tym tematem, aby usprawnić
działanie takiego systemu oraz żeby praca na nim była przyjemna,
prosta i intuicyjna.

Postaram się udowodnić jak bardzo przydatna jest walidacja pokazując jej dzia-
łanie w aplikacji stworzonej w frameworku Meteor. Pokażę również na czym polega
stworzenie pakietu i udostepnienie go w prosty sposób. Opierając się na doświad-
czeniach innych badaczy takich jak Kelly Copleyczy Tom Coleman i Sacha Greif
napiszę pakiet walidujący oraz aplikację Elektroniczny Indeks, która będzie
korzystać ze stworzonego w ramach pracy pakietu. Napiszę także dlaczego uważam
Meteor oraz MongoDB jako najlepszy wybór.

#### Bibliografia

* [Tom Coleman and Sacha Greif, Discover Meteor: Building Real-Time Javascript Web Apps, First edition, 2013.](http://pl.discovermeteor.com/)
* [Test Driven Development with Meteor](http://www.sitepoint.com/test-driven-development-with-meteor/)
* [Meteor Documentation](http://docs.meteor.com)
