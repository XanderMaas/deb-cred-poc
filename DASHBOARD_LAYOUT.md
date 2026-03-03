## Financieel Dashboard – Layout & Uitleg (Top → Bottom)

Dit document beschrijft de layout van het financieel dashboard van boven naar beneden. Per onderdeel staat wat je ziet, wat er ongeveer wordt gemeten/berekend en waarom dit relevant is voor een CFO.

---

### 1. Header

- **Wat je ziet**:  
  Titel `Financieel Dashboard` met subtitel “Overzicht van werkkapitaal, debiteuren en crediteuren”.
- **Wat het doet / berekening**:  
  Geen berekening; dit is puur context voor de pagina.
- **Waarom een CFO dit wil zien**:  
  Maakt direct duidelijk dat de focus ligt op werkkapitaalmanagement en het evenwicht tussen debiteuren (AR) en crediteuren (AP).

---

### 2. Top Layer – Rij 1: Kern-KPI’s (4 kaarten)

#### 2.1 Netto Werkkapitaal

- **Wat je ziet**:  
  Kaart met het bedrag `€ 1.250.000` en daaronder de verandering `+4,5% t.o.v. vorige maand`.
- **Wat het doet / berekening (conceptueel)**:  
  Netto werkkapitaal ≈ Vlottende activa (voorraden + debiteuren + liquide middelen) − Kortlopende schulden (voornamelijk crediteuren & kortlopende verplichtingen). De kaart toont de huidige stand en de procentuele verandering t.o.v. de vorige maand.
- **Waarom een CFO dit wil zien**:  
  Netto werkkapitaal laat zien hoeveel liquiditeit er feitelijk ‘vrij’ is om de operatie te draaien en groei te financieren. Een stijging kan positief zijn (meer buffer), maar te veel kapitaal in werkkapitaal kan ook duiden op inefficiëntie (bijvoorbeeld te hoge voorraden of traag incasseren).

#### 2.2 Voorraad

- **Wat je ziet**:  
  Kaart met `€ 600.000` en de mutatie `+3,2% t.o.v. vorige maand`.
- **Wat het doet / berekening (conceptueel)**:  
  Voorraadwaarde (inventory) is doorgaans de boekwaarde van de voorraad op balansdatum (bijv. kostprijs of lagere marktwaarde, afhankelijk van accountingbeleid). De mutatie vergelijkt de voorraadwaarde met de vorige maand.
- **Waarom een CFO dit wil zien**:  
  Voorraad is vaak een van de grootste “cash consumers” in werkkapitaal. Een stijging kan wijzen op groei, seizoenseffecten of inkoopvoordeel, maar ook op risico op veroudering/afwaarderingen en langzamere omloopsnelheid.

#### 2.3 Debiteuren

- **Wat je ziet**:  
  Kaart met `€ 850.000` en de mutatie `+2,1% t.o.v. vorige maand`.
- **Wat het doet / berekening (conceptueel)**:  
  Som van alle openstaande verkoopfacturen (accounts receivable). De procentuele mutatie vergelijkt deze som met de vorige maand.
- **Waarom een CFO dit wil zien**:  
  Geeft direct inzicht in hoeveel geld er bij klanten uitstaat en welk deel van de omzet nog niet in cash is omgezet. Een stijging kan wijzen op groeiende omzet, maar ook op oplopend kredietrisico of vertraagde betalingen.

#### 2.4 Crediteuren

- **Wat je ziet**:  
  Kaart met `€ 420.000` en de mutatie `-1,2% t.o.v. vorige maand`.
- **Wat het doet / berekening (conceptueel)**:  
  Som van alle openstaande inkoopfacturen (accounts payable). De procentuele mutatie vergelijkt deze som met de vorige maand.
- **Waarom een CFO dit wil zien**:  
  Laat zien hoeveel kortetermijnverplichtingen er richting leveranciers openstaan. Een daling kan duiden op snellere betaling (goed voor relaties, mogelijk minder cashbuffer) of op lagere inkoopvolumes.

---

### 3. Top Layer – Rij 2: Cash conversion cycle & opvolging (grafiek + 3 kaarten)

#### 3.1 Cash conversion cycle (grafiek) – DIO / DSO / DPO / Cash gap

- **Wat je ziet**:  
  Lijngrafiek met vier curves:  
  - **DIO** (Days Inventory Outstanding)  
  - **DSO** (Days Sales Outstanding)  
  - **DPO** (Days Payables Outstanding)  
  - **Cash gap (Cash Conversion Cycle)** = DIO + DSO − DPO
- **Wat het doet / berekening (conceptueel)**:  
  - DIO: gemiddelde aantal dagen dat voorraden op de plank liggen.  
  - DSO: gemiddelde aantal dagen tussen factureren en betaling door klanten.  
  - DPO: gemiddelde aantal dagen tot het betalen van leveranciers.  
  - CashGap: de totale doorlooptijd waarin cash ‘vast’ zit in voorraad en debiteuren, minus het uitstel dat bij crediteuren wordt gerealiseerd.
- **Waarom een CFO dit wil zien**:  
  De Cash Conversion Cycle is een kernmaat voor werkkapitaalefficiëntie. Verlaging van CCC betekent sneller cashvrijmaken en minder externe financiering nodig. De trendlijn over 12 maanden maakt structurele verbeteringen of verslechteringen zichtbaar.

#### 3.2 Cash conversion cycle (dagen) (KPI)

- **Wat je ziet**:  
  Kaart met `58 dagen` en wijziging `-2,0 dagen t.o.v. vorige maand`.
- **Wat het doet / berekening (conceptueel)**:  
  Punt-in-tijd weergave van \(CCC = DIO + DSO - DPO\). Het getal is dezelfde logica als in de grafiek, maar dan als “headline” KPI.
- **Waarom een CFO dit wil zien**:  
  Maakt het eenvoudiger om dagelijks/wekelijks te sturen op werkkapitaal zonder de volledige grafiek te interpreteren. De delta t.o.v. vorige maand laat zien of verbeterprogramma’s effect hebben.

#### 3.3 Huidig vervallen vorderingen

- **Wat je ziet**:  
  Kaart met `€ 150.000`, tekst “17,6% van totaal uitstaand” en mutatie `+1,3% t.o.v. vorige maand`.
- **Wat het doet / berekening (conceptueel)**:  
  Som van alle facturen die de afgesproken betalingstermijn zijn gepasseerd, gedeeld door de totale openstaande debiteuren. Dit levert het percentage vervallen vorderingen op.
- **Waarom een CFO dit wil zien**:  
  Een stijgend aandeel vervallen vorderingen is direct signaal van incassorisico en mogelijke toekomstige afboekingen. Het stuurt acties richting creditmanagement (herinneringen, betalingsafspraken, limietbeheer).

#### 3.4 Gemiddeld achterstallig

- **Wat je ziet**:  
  Kaart met `14 dagen` en subtitel “Bovenop reguliere betalingstermijn”.
- **Wat het doet / berekening (conceptueel)**:  
  Gemiddeld aantal dagen dat facturen te laat worden betaald ten opzichte van de afgesproken betalingstermijn. Vaak berekend als gemiddelde days past due over alle vervallen facturen.
- **Waarom een CFO dit wil zien**:  
  Laat zien hoe strak het incassoproces is. Een stijgende trend betekent dat klanten structureel later betalen, wat direct impact heeft op de liquiditeit en kan duiden op verslechterende klantkwaliteit of interne opvolgingsproblemen.

---

### 4. Middelste Laag – Kolom 1: Debiteuren (Accounts Receivable)

#### 4.1 Debiteuren-KPI’s: DSO & Collection Efficiency Index

- **DSO (Days Sales Outstanding)**  
  - **Wat je ziet**:  
    Kaart met `38 dagen` en wijziging `-2,0 dagen t.o.v. vorige maand`.  
  - **Wat het doet / berekening (conceptueel)**:  
    DSO ≈ (Gemiddeld openstaande debiteuren / Jaaromzet op krediet) × 365. Toont hoe lang het gemiddeld duurt voordat omzet wordt geïncasseerd.  
  - **Waarom een CFO dit wil zien**:  
    Een dalende DSO betekent snellere incasso en een gezondere cashpositie. Vergelijking met sectorbenchmarks geeft aan of het kredietbeleid en de uitvoering competitief zijn.

- **Collection Efficiency Index (CEI)**  
  - **Wat je ziet**:  
    Kaart met `94%` en stijging `+1,0 pp t.o.v. vorige maand`.  
  - **Wat het doet / berekening (conceptueel)**:  
    CEI ≈ (Feitelijke geïnde bedragen / Verwacht in te vorderen bedragen) × 100%. Meet hoe effectief het incassoproces is binnen de periode.  
  - **Waarom een CFO dit wil zien**:  
    Hoge CEI betekent dat bijna alles wat theoretisch geïncasseerd had moeten worden, ook daadwerkelijk is binnengekomen. Dit is een directe kwaliteitsmaatstaf voor credit control.

#### 4.2 Top 10 Debiteuren – Donut & Tabel

- **Wat je ziet**:  
  - Donutgrafiek met de verdeling van de top-10 debiteuren naar saldo.  
  - Tabel met per debiteur: naam, saldo en aantal facturen.
- **Wat het doet / berekening (conceptueel)**:  
  Sorteert debiteuren op openstaand saldo, toont het absolute bedrag en het relatieve aandeel per klant in de totale AR-top-10.
- **Waarom een CFO dit wil zien**:  
  Helpt concentratierisico te identificeren (een paar grote klanten kunnen een groot deel van het werkkapitaal bepalen). Stuurt discussies over kredietlimieten, zekerheden en relatiebeheer.

#### 4.3 Ouderdomsanalyse Debiteuren

- **Wat je ziet**:  
  Staafdiagram met buckets: `Niet vervallen`, `1–30 dagen`, `31–60 dagen`, `61–89 dagen`, `90+ dagen` met bedragen per bucket.
- **Wat het doet / berekening (conceptueel)**:  
  Verdeelt de openstaande debiteurenportefeuille over ouderdomscategorieën op basis van due date. De waarden zijn de som van de factuurbedragen per bucket.
- **Waarom een CFO dit wil zien**:  
  Ouderdomsanalyse is de basis voor risicobeoordeling, provisioning (voorzieningen voor dubieuze debiteuren) en prioritering van incassotrajecten. Een toenemend 90+ segment is een rood waarschuwingssignaal.

#### 4.4 Top 10 Achterstallige Debiteuren (Tabel)

- **Wat je ziet**:  
  Tabel met per debiteur: naam, totaal achterstallig bedrag, aantal facturen, verdeling over leeftijds-buckets (1–30d, 31–60d, 61–89d, 90+d), historiek “te laat” en gemiddelde tijd te laat.
- **Wat het doet / berekening (conceptueel)**:  
  - Selecteert debiteuren met hoogste achterstallige saldi.  
  - Splits per klant de bedragen naar ouderdomscategorie.  
  - Toont historisch aantal keren te laat en gemiddelde days past due.
- **Waarom een CFO dit wil zien**:  
  Maakt het mogelijk om gericht te sturen op probleemklanten. Combineert bedrag, ouderdom en historisch gedrag om prioriteiten voor acties (belactie, herstructurering, kredietstop) te bepalen.

#### 4.5 Verwachte handelsuitstroom (per week)

- **Wat je ziet**:  
  Staafdiagram “Verwachte handelsuitstroom” per week (met maand zichtbaar in de tooltip).
- **Wat het doet / berekening (conceptueel)**:  
  Toont de verwachte cash-out (betalingen aan leveranciers) op basis van geplande due dates & betaalgedrag, geaggregeerd per week.
- **Waarom een CFO dit wil zien**:  
  Ondersteunt korte termijn cashplanning door inzicht te geven in wanneer welke pieken in uitgaande kasstromen worden verwacht. Belangrijk voor liquiditeitsplanning, gebruik van kredietfaciliteiten en timing van investeringen.

---

### 5. Middelste Laag – Kolom 2: Crediteuren (Accounts Payable)

#### 5.1 Crediteuren-KPI’s: DPO & Tijdige Betalingsgraad

- **DPO (Days Payables Outstanding)**  
  - **Wat je ziet**:  
    Kaart met `41 dagen` en wijziging `+1,5 dagen t.o.v. vorige maand`.  
  - **Wat het doet / berekening (conceptueel)**:  
    DPO ≈ (Gemiddeld openstaande crediteuren / Jaarinkopen op krediet) × 365. Geeft aan hoe lang het gemiddeld duurt voordat het bedrijf leveranciers betaalt.  
  - **Waarom een CFO dit wil zien**:  
    Hogere DPO betekent langere financiering door leveranciers maar kan ook spanningen in de supply chain veroorzaken. Het is een belangrijke hefboom binnen de Cash Conversion Cycle.

- **Tijdige Betalingsgraad**  
  - **Wat je ziet**:  
    Kaart met `89%` en verandering `+0,8 pp t.o.v. vorige maand`.  
  - **Wat het doet / berekening (conceptueel)**:  
    Percentage van facturen dat binnen of vóór de afgesproken betalingstermijn wordt voldaan.  
  - **Waarom een CFO dit wil zien**:  
    Meet de betrouwbaarheid richting leveranciers. Een gezonde balans is nodig: voldoende uitstel voor cashmanagement, maar niet zodanig dat relaties of leveringsvoorwaarden onder druk komen.

#### 5.2 Top 10 Crediteuren – Donut & Tabel

- **Wat je ziet**:  
  - Donutgrafiek met de verdeling van de top-10 crediteuren naar openstaand saldo.  
  - Tabel met per crediteur: naam, saldo en aantal facturen.
- **Wat het doet / berekening (conceptueel)**:  
  Sorteert leveranciers op openstaand saldo en toont hun relatieve aandeel in de totale AP-top-10.
- **Waarom een CFO dit wil zien**:  
  Laat concentratierisico aan de inkoopkant zien (afhankelijkheid van enkele grote leveranciers). Helpt bij onderhandelingen over betaalcondities, volumekortingen en strategische partnerschappen.

#### 5.3 Ouderdomsanalyse Crediteuren

- **Wat je ziet**:  
  Staafdiagram met dezelfde buckets als bij debiteuren (`Niet vervallen`, `1–30 dagen`, `31–60 dagen`, `61–89 dagen`, `90+ dagen`) maar dan voor crediteuren.
- **Wat het doet / berekening (conceptueel)**:  
  Verdeelt de openstaande leveranciersschulden over ouderdomscategorieën op basis van due date.
- **Waarom een CFO dit wil zien**:  
  Laat zien in hoeverre het bedrijf betaaltermijnen maximaal benut of juist structureel te laat betaalt. Belangrijk voor reputatie, leverage in onderhandelingen en risicobeheersing (bijv. blokkering door leveranciers).

#### 5.4 Top 10 Achterstallige Crediteuren (Tabel)

- **Wat je ziet**:  
  Tabel met per crediteur: naam, totaal achterstallig bedrag, aantal facturen, verdeling over ouderdomsbuckets, historisch “te laat” en gemiddelde tijd te laat.
- **Wat het doet / berekening (conceptueel)**:  
  - Selecteert leveranciers met de grootste achterstallige bedragen.  
  - Splits per leverancier naar ouderdomsbuckets.  
  - Toont historisch betalingsgedrag en gemiddelde vertraging.
- **Waarom een CFO dit wil zien**:  
  Helpt gericht te sturen op leveranciersrelaties met verhoogd spanningsniveau. Ondersteunt beslissingen over prioritering van betalingen, herfinanciering en eventuele heronderhandeling van voorwaarden.

#### 5.5 Verwachte handelsinstroom (per week)

- **Wat je ziet**:  
  Staafdiagram “Verwachte handelsinstroom” per week (met maand zichtbaar in de tooltip).
- **Wat het doet / berekening (conceptueel)**:  
  Toont de verwachte cash-in (betalingen van klanten) op basis van openstaande facturen, betalingstermijnen en historisch betaalgedrag, geaggregeerd per week.
- **Waarom een CFO dit wil zien**:  
  In combinatie met de verwachte handelsuitstroom vormt dit een forward-looking cashforecast voor de korte termijn. Geeft direct zicht op potentiële liquiditeitskrapte of overschotten, en ondersteunt beslissingen over werkkapitaalfinanciering, investeringen en dividendbeleid.

---

### 6. Samenvattend

- **Bovenste laag**: Hoog-over werkkapitaal en totale AR/AP-posities.  
- **Middelste laag – grafieken & KPI’s**: Dynamiek in dagen (DIO/DSO/DPO/CCC) en vervallen vorderingen.  
- **Debiteuren-kolom**: Detailinzicht in klantconcentratie, veroudering, achterstalligheid en verwachte instroom.  
- **Crediteuren-kolom**: Detailinzicht in leveranciersconcentratie, betalingsgedrag, achterstalligheid en verwachte uitstroom.  

Samen geven deze elementen een compleet beeld van de kwaliteit én timing van kasstromen – precies de informatie waar een CFO dagelijks op stuurt.

