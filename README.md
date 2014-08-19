### Walidacja w elektronicznym systemie zarządzania osiągnięciami studenta
#### *Mateusz Kwiatkowski*

* [link do aktualnego PDF-a z treścią pracy mgr](https://github.com/Flover/praca_magisterska/raw/master/magisterka.pdf)

#### *Wprowadzenie*
Najcenniejszym walorem komputera i Internetu są przechowywane w nich dane - zarówno
ich ilość, jak i jakość. Ze względu na to, z dnia na dzień, rośnie liczba
użytkowników sieci. Jednocześnie zwiększa się liczebność i różnorodność usług
sieciowych.

Komputer i Internet zmienił, wciąż zmienia naszą codzienność. To prawda oczywista.
Usługi internetowe nie są już domeną urzędów, firm czy handlu. Chcemy za ich pomocą
robić zakupy, obsługiwać konto w banku, a także załatwiać wszelkie formalności w
urzędach. Jest to po prostu wymóg rozwoju cywilizacji, techniki oraz oszczędności
czasu.

Coraz częściej systemy informatyczne wykorzystywane są w edukacji społeczeństwa.
Jeszcze do niedawna na wszystkich uczelniach wyższych stosowano klasyczne indeksy
papierowe, aby zarchiwizować osiągnięcia studentów podczas całego cyklu kształcenia.
Jednak w wyniku rozwoju technologii internetowych coraz częściej rezygnuje się <br>
z klasycznych rozwiązań, zastępując je ich elektronicznymi odpowiednikami.

Dziś wiele szkół i uczelni wprowadziło do obszaru swego funkcjonowania nowoczesny
system ewidencji osiągnięć ucznia czy studenta. W szkołach podstwowych, gimnazjach,
liceach, technikach czy zasadniczych szkołąch zawodowych jest nim tzw. dziennik
elektroniczny. W uczelniach wyższych  nazwano go elektronicznym indeksem. Zjawisko
to stanowi nie lada wyzwanie, ponieważ wiąże się z problemem niezawodnego świadczenia
usług w sieci komputerowej. Odbiorca, w tym przypadku uczeń lub student, musi mieć
pewność, że dane są stałe, prawdziwe, odpowiednio zabezpieczone przed ich utratą
czy nieuprawnionym dostepem. Należy nadmienić, że taki poziom zaufania i poczucia
bezpieczeństwa funkcjonowania systemu, powinna mieć również druga strona - nadawca,
ten który wprowadza owe dane. Jest to tym bardziej ważną kwestią, gdyż coraz częściej
mamy do czynienia ze zdarzeniami, wskazującymi na nieprawidłowe stosowanie sieci
komputerowej lub jej nadużycie.

Rozwiązaniem, które zapewniłoby wzrost poziomu zaufania do korzystania z sieci,
w tym również z elektronicznego systemu zarządzania osiagnieciami ucznia lub studenta
jest, według autora niniejszej pracy, odpowiednie <br> i odpowiedzialne zarządzanie jej
jakością, czemu służy walidacja systemu.

Zjawisko to jest szeroko stosowane w technice i informatyce. Internetowy Słownik
Języka Polskiego wyjaśnia hasło ,,walidacja'' w następujacy sposób: ,,walidacja
(technika) - badanie odpowiedności, trafnośc lub dokładności czegoś''.

Sam termin - ,,walidacja'' pochodzi od angielskiego słowa ,,validate'' i oznacza -
w kontekście informatycznym - sprawdzanie poprawności i zgodności z zadanymi
kryteriami. Jest on stosowany w odniesieniu do danych pochodzących od użytkownika,
jak również w stosunku do zmiennych, obiektów, typów i klas w różnych językach
programowania.

Walidacja jest działaniem, mającym na celu potwierdzenie w sposób udokumentowany
i zgodny z założeniami, że procedury, procesy, urządzenia, materiały, czynności
i systemy, rzeczywiście prowadzą do zaplanowanych wyników. Znana jest także jako
kontrola jakości oprogramowania.

Wprowadzając dane do systemu, użytkownik może - świadomie lub nie - popełnić
pomyłkę. Jeżeli dane odebrane przez użytkownika poddamy przetworzeniu bez weryfikacji,
wówczas, w zależności od odporności aplikacji, możemy mieć do czynienia z różnymi
rodzajami błędów, od drukowania w przeglądarce klienta komunikatów diagnostycznych,
poprzez utratę spójności bazy danych, aż po ujawnienie niepowołanym użytkownikom
informacji poufnych. Z tego powodu nie wolno ignorować wagi problemu.

Aplikacje pozbawione walidacji pozwalają użytkownikowi na wprowadzenie irracjonalnych
danych do systemu. Przykładem takiej aplikacji jest wspomiany przez autora pracy,
elektroniczny indeks. Operacje, takie jak: wystawianie studentowi ocen z ćwiczeń
czy też oceny z egzaminu kończącej edukację z danego przedmiotu, powinny być
odpowiednio walidowane. Dzięki temu nie dojdzie do niepożądanych zjawisk typu:
- student nie uzyskał pozytywnej oceny z ćwiczeń, a otrzymuje ocenę z egzaminu
kończącego przedmiot,
- student otrzymuje ocenę spoza skali oceniania systemu danej uczelni,
- student uzyskuje ocenę od osoby nieuprawnionej do jej wystawienia.

Dlatego też, autor pracy chce zwrócić uwagę na rodzący się problem, związany
z wprowadzeniem przez uczelnie elektronicznego indeksu oraz jego odpowiednim
funkcjonowaniem. Zaproponowanie zastosowania walidacji <br> w elektronicznym systemie
wystawiania ocen usprawni działanie oraz udoskonali jego funkcjonalność.
Korzystając <br> z aplikacji, w której zaimplementowana jest walidacja możemy mieć pewność,
że nie dojdzie do sytuacji, by użytkownik wprowadził błędne dane do systemu.
Należy również zwrócić uwagę na ekonomiczny aspekt walidacji. Mianowicie oszczędność
czasu użytkownika czy zwiększenie efektywności jego pracy.

W celu ukazania i udowodnienia przydatności walidacji podczas korzystania
z elektronicznego systemu zarządzania osiągnięciami studenta, pokazano w pracy
działanie tego zjawiska w aplikacji stworzonej w frameworku \textit{Meteor} oraz
zaprezentowano ułożony pakiet oraz wyjaśniono, jak udostępnić go w prosty, jasny
i zrozumiały sposób.

Tworzenie pakietu walidującego oraz aplikacji - elektroniczny indeks, która korzysta
ze stworzonego w ramach pracy pakietu, oparto na doświadczeniu innych badaczy,
zajmujących się oprogramowaniami komputerowymi, takich jak: Kelly Copley, Tom
Coleman czy Sacha Greif. W pracy umieszczono ponadto uzasadnienie, dlaczego wybrane
technologie, takie jak - Meteor oraz MongoDB, to najbardziej trafny wybór do generowania
pakietu walidacyjnego elektronicznego zarządzania osiągnięciami studenta.

Autor niniejszej pracy miał kontakt z wieloma systemami zarządzania osiągnieciami
studentów, ale w każdym można było doprowadzać do anomalii. Zajęcie się rozwiązaniem
tego problemu jest, z punktu widzenia informatyka interesujące. Efektem pracy może być
nie tylko usprawnienie działania systemu, ale również poczucie, że praca z nim jest
prosta, przyjemna i wręcz intuicyjna.


#### Bibliografia

* [Tom Coleman and Sacha Greif, Discover Meteor: Building Real-Time Javascript Web Apps, First edition, 2013.](http://pl.discovermeteor.com/)
* [Test Driven Development with Meteor](http://www.sitepoint.com/test-driven-development-with-meteor/)
* [Meteor Documentation](http://docs.meteor.com)
