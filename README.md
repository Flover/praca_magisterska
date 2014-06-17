### Walidacja w aplikacjach Meteor
#### *Mateusz Kwiatkowski*

* [link do aktualnego PDF-a z treścią pracy mgr](https://github.com/Flover/praca_magisterska/raw/master/magisterka.pdf)

#### *Wprowadzenie*
Meteor jest frameworkiem który bazuje na pakietach. Jego pierwsza odsłona miała miejsce w grudniu 2011 roku pod nazwą Skybreak.
Z kolei w styczniu 2012 roku twórcy postanowili zmienić nazwę na Meteor.

Obecnie Meteor jest dostępny w wersji beta, dlatego jego
podstawowa funkcjonalność nie jest kompletna. Można zwiększyć jego możliwości dodając pakiety, które otrzymujemy
od twórców Meteora oraz od społeczności.
Jedną z podstawowych funkcji jakiej Meteor domyślnie nie posiada jest walidacja, ale powstał już pakiet, który doskonale radzi
sobie z podstawową walidacją co ma zastosowanie między innymi w elektronicznym indeksie.

Jeszcze do niedawna na wszystkich uczelniach stosowano klasyczne indeksy
papierowe, jednak w wyniku rozwoju technologii internetowych coraz częściej
rezygnuje się z klasycznych rozwiązań zastępując je ich elektronicznymi odpowiednikami.
Korzystając z elektronicznego indeksu jedną z ważniejszych funkcji jest właśnie walidacja. Aplikacja nie może dopuścić do
sytuacji gdzie nauczyciel wystawi studentowi ocenę spoza skali czy też wprowadzi niepełne dane, ale również musi
poprawnie interpetować czy dany użytkownik może wykonać w danej chwili konkretną akcję. O ile do tej pierwszej, a zarazem prostszej części
walidacji istnieje pakiet to do tej drugiej, bardziej zaawansowanej już takiego nie znajdziemy więc będzie trzeba go stworzyć ułatwiając tym samym
użytkowanie elektronicznego indeksu na uczelni.

Na każdej uczelni znajduje się wielu studentów oraz wykładowców przez co nie można dopuścić do sytuacji gdy nasza
aplikacja nie będzie w stanie obsłużyć wszystkich osób w jednym czasie. Z pomocą przychodzi nam javascriptowy
framework MeteorJS który w połączeniu z bazą danych MongoDB zapewni nam wystarczającą skalowalność
aplikacji oraz dostarczy nam sporą ilość gotowych pakietów, które uproszczą stworzenie nowego produktu.

#### Bibliografia

* [Tom Coleman and Sacha Greif, Discover Meteor: Building Real-Time Javascript Web Apps, First edition, 2013.](http://pl.discovermeteor.com/)
* [Test Driven Development with Meteor](http://www.sitepoint.com/test-driven-development-with-meteor/)
* [Meteor Documentation](http://docs.meteor.com)
