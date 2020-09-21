

1. Opprette typescript prosjekt
2. Dele på Github
3. Lager branch
   * lager en feilende test
   * commit, push
   * Ny utvikler clone, checkout branch
   * Får test til å kjøre grønt
   * Skriver ny feilende test
   * commit, push
4. Pull request på github for å merge arbeidet

Oppgaven

* Vise lokaliserte meldinger til bruker
* showMessage(english, {
    type: "invalidEmail", email: "johannes@brodwall.com", allowedDomain: ["soprasteria.com", "barentswatch.no"]
  }) => "the email address johannes@brodwall.com should be in one of the domains soprasteria.com, barentswatch.no"

TDD: Så små skritt som mulig
* første skritt: Skriv en statisk melding
* skriv den på et annet språk
* skriv melding basert på "type"
* Skrive parametrisert melding basert på type

TypeScript:

showMessage(english, {type: "invalidEmail", emailAddress: "something@example.com"}) => kompileringsfeil

showMessage(english, {type: "generalError", message: "Something went wrong"})
