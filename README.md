### Walidacja w elektronicznym systemie zarządzania osiągnięciami studenta
#### *Mateusz Kwiatkowski*

* [link do aktualnego PDF-a z treścią pracy mgr](https://github.com/Flover/praca_magisterska/raw/master/magisterka.pdf)

#### *Wprowadzenie*
Wprowadzając dane do systemu, użytkownik może -- świadomie lub nie -- popełnić
pomyłkę. Jeżeli dane odebrane przez użytkownika poddamy przetworzeniu bez walidacji,
wówczas, w zależności od odporności aplikacji, możemy mieć do czynienia z różnymi
rodzajami błędów, od drukowania w przeglądarce klienta komunikatów diagnostycznych,
poprzez utratę spójności bazy danych, aż po ujawnienie niepowołanym użytkownikom
informacji poufnych. Z tego powodu nie wolno ignorować wagi problemu.

Aplikacje pozbawione walidacji pozwalają użytkownikowi na wprowadzenie irracjonalnych
danych do systemu. Przykładem takiej aplikacji jest elektroniczny indeks. Operacje, takie jak: wystawianie studentowi ocen z ćwiczeń
czy też oceny z egzaminu kończącej edukację z danego przedmiotu, dodawanie nowych użytkowników, a także przedmiotów powinny być
odpowiednio walidowane. Dzięki temu nie dojdzie do niepożądanych zjawisk typu:

 - student nie uzyskał pozytywnej oceny z ćwiczeń, a otrzymuje ocenę z egzaminu
kończącego przedmiot,
 - student otrzymuje ocenę spoza skali oceniania systemu danej uczelni,
 - student uzyskuje ocenę od osoby nieuprawnionej do jej wystawienia,
 - nowy przedmiot nie ma przypisanego prowadzącego,
 - tworząc nowego użytkownika nie wprowadzamy wymaganych danych.%



W celu ukazania i udowodnienia przydatności walidacji podczas korzystania
z elektronicznego systemu zarządzania osiągnięciami studenta, pokazano w pracy
działanie tego zjawiska w aplikacji stworzonej w frameworku Meteor oraz
zaprezentowano ułożony pakiet oraz wyjaśniono, jak go udostępnić. W pracy użyto framework Meteor w wersji 1.1.0.3. Jest to framework javascriptowy, który zapewnia aplikacji działanie w czasie rzeczywistym / w skrócie RTA /, dzięki czemu użytkownikom korzystającym z aplikacji widoki aktualizują się natychmiast, gdy w bazie danych zachodzą zmiany. Komplementarnie należy podkreślić, że atutetm tej technologii jest fakt, że wszystko, zarówno back-end jak i front-end, piszemy w taki sam sposób, korzystając jedynie z javascriptu. Meteor pozwala również zaoszczędzić czas, dostarczając deweloperom gotowe rozwiązania w postaci pakietów. W pracy jest on wspierany przez MongoDB. Jest to najpopularniejsza nierelacyjna baza danych. Charakteryzuje się dużą skalowalnością, wydajnością oraz brakiem ściśle zdefiniowanej struktury obsługiwanych baz danych. Zamiast tego, dane składowane są jako dokumenty w stylu JSON, co umożliwia aplikacjom bardziej naturalne ich przetwarzanie, przy zachowaniu możliwości tworzenia hierarchii oraz indeksowania. Meteor od wersji 1.0 dostarcza narzędzie do testowania Velocity. Pozwala ono tworzyć testy w popluranych bibliotekach, takich jak: mocha, jasmine, cucumber czy selenium. W pracy wykorzystana została biblioteka jasmine. Jednak same testy nie wystarczą, aby zapewnić aplikacji poprawne działanie. Korzystając z testów jednostkowych sprawdzamy czy funkcja wykonuje interesującą nas operację prawidłowo, ale bez walidacji wywołanie funkcji może się zakończyć powodzeniem także dla błędnych danych.

Aplikacja korzysta również z szeregu dodatkowych pakietów takich jak:


- Meteor-roles jest to pakiet autoryzujący do frameworka Meteor, który pozwala zarządzać, jakie dane zostaną wysłane do konkretnych grup użytkowników,
- Iron router, którym definiujemy, jak ma wyglądać mapa strony. Działa on zarówno po stronie serwera i klienta. Routing po stronie klienta sprawia, że aplikacja jest naprawdę szybka, gdy już jest załadowana, ponieważ przy każdej zmianie podstrony, nie trzeba jej całej generować,
- Meteor account jest to kompletny pakiet zarządzania kontami użytkowników. Jedną linią kodu można zapewnić aplikacji możliwość logowania, tworzenia kont, walidacji email, przywracania hasła czy logowania się przez zewnętrzne serwisy jak facebook czy twitter. Dodatkowo pakiet daje możliwość dostosowania go pod własne potrzeby,
- Underscore.string jest to pakiet służący do manipulacji stringami,
- Meteor-file-collection to pakiet, który rozszerza system kolekcji, pozwalając obsługiwać także dane z plików.


#### Bibliografia

* [Tom Coleman and Sacha Greif, Discover Meteor: Building Real-Time Javascript Web Apps, First edition, 2013.](http://pl.discovermeteor.com/)
* [Test Driven Development with Meteor](http://www.sitepoint.com/test-driven-development-with-meteor/)
* [Meteor Documentation](http://docs.meteor.com)
