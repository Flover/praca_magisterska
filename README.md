### Walidacja w MeteorJS na przykładzie elektronicznego indeksu
#### *Mateusz Kwiatkowski*

* [link do aktualnego PDF-a z treścią pracy mgr](https://github.com/Flover/praca_magisterska/blob/master/magisterka.pdf)

#### *Wprowadzenie*
Jeszcze do niedawna na wszystkich uczelniach stosowano klasyczne indeksy
papierowe, jednak w wyniku rozwoju technologii internetowych coraz częściej
rezygnuje się z klasycznych rozwiązań zastępując je ich elektronicznymi odpowiednikami.

Na każdej uczelni znajduje się wielu studentów oraz wykładowców przez co trzeba
zadbać, aby w momencie gdy wiele osób jednocześnie chce przejrzeć indeks
lub wystawić oceny nie doprowadzić do sytuacji gdy nasza aplikacja nie będzie
w stanie obsłużyć wszystkich osób w jednym czasie. Z pomocą przychodzi nam
javascriptowy framework MeteorJS który w połączeniu z MongoDB zapewni nam
wystarczającą skalowalność aplikacji oraz dostarczy nam sporą ilość gotowych
pakietów które uproszczą stworzenie nowego produktu.

Ponieważ Meteor jest dość nowym frameworkiem, funkcjonalność pakietów które są
dostępne nie jest kompletna. Korzystając z elektronicznego indeksu jedną
z ważniejszych funkcji jest walidacja. Aplikacja nie może dopuścić do sytuacji gdzie
nauczyciel wystawi studentowi ocenę spoza skali czy też wprowadzić niepełne
dane, ale również poprawnie interpetować czy dany użytkownik może wykonać
w danej chwili konkretną akcję. O ile do tej prostszej części walidacji istnieje pakiet to do
tej bardziej zaawansowanej już takiego nie znajdziemy więc będzie trzeba go stworzyć.

#### Bibliografia

* [Mesosphere usage, ](https://github.com/copleykj/Mesosphere)
* [MeteorJS. Meteor docs, ](http://docs.meteor.com/)
