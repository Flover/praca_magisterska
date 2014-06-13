### Walidacja w MeteorJS na przykładzie elektronicznego indeksu
#### *Mateusz Kwiatkowski*

* [link do aktualnego PDF-a z treścią pracy mgr](https://github.com/Flover/praca_magisterska/raw/master/magisterka.pdf)

#### *Wprowadzenie*
Meteor jest frameworkiem który bazuje na pakietach. Pierwsza odsłona miała miejsce w grudniu 2011 roku pod nazwą Skybreak.
W styczniu 2012 twórcy postanowili zmienić nazwe na Meteor. Obecnie ciągle znajduje się w wersji beta, więc jego
podstawowa funkcjonalność nie jest kompletna. Można zwiększyć jego możliwości dodając pakiety, które otrzymujemy
od twórców Meteora oraz od społeczności. Jedną z podstawowych funkcji jakiej Meteor domyślnie nie posiada jest walidacja,
ale powstał już pakiet, który doskonale radzi sobie z podstawową walidacją.

Jeszcze do niedawna na wszystkich uczelniach stosowano klasyczne indeksy
papierowe, jednak w wyniku rozwoju technologii internetowych coraz częściej
rezygnuje się z klasycznych rozwiązań zastępując je ich elektronicznymi odpowiednikami.
Korzystając z elektronicznego indeksu jedną z ważniejszych funkcji jest walidacja. Aplikacja nie może dopuścić do
sytuacji gdzie nauczyciel wystawi studentowi ocenę spoza skali czy też wprowadzić niepełne dane, ale również
poprawnie interpetować czy dany użytkownik może wykonać w danej konkretną akcję. O ile do tej prostszej części
walidacji istnieje pakiet to do tej bardziej zaawansowanej już takiego nie znajdziemy więc będzie trzeba go stworzyć.

Na każdej uczelni znajduje się wielu studentów oraz wykładowców przez co trzeba zadbać. W momencie
gdy wiele osób jednocześnie chce przejrzeć indeks lub wystawić oceny nie można dopuścić do sytuacji gdy nasza
aplikacja nie będzie w stanie obsłużyć wszystkich osób w jednym czasie. Z pomocą przychodzi nam javascriptowy
framework \textbf{MeteorJS} który w połączeniu z bazą danych \textbf{MongoDB} zapewni nam wystarczającą skalowalność
aplikacji oraz dostarczy nam sporą ilość gotowych pakietów, które uproszczą stworzenie nowego produktu.

#### Bibliografia

* [Mesosphere usage, 2014](https://github.com/copleykj/Mesosphere)
* [MeteorJS. Meteor docs, 2014](http://docs.meteor.com/)
