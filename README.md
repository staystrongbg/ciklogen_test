# problem

- hocu dinamicki da kreiram stranice koristeci ```url``` properti iz ```data``` kao rutu za svaku...
- da bih izbegao ako je moguce "hardkodovanje" svake stranice (x.js, y.js, z.js...)
- u tome mislim da sam uspeo delimicno.
- **SUCCESS** | kada hoces sa indexa na neku stranicu, bilo preko navigacije ili na ```button``` 'read more' to sljaka. 
- **FAIL** | kad otvoris stranicu i hoces preko navigacije odatle na drugu stranicu ```url``` se promeni ali stranica se ne menja. Tek kad odes u address bar i lupis ```enter``` ili ```refresh``` radi, ali tada pravi request ka serveru i ucitava. 
- ja bih, dakle, da se na klik na ```link``` iz navigacije promeni i stranica ne samo ```url``` i to kao CSR ne SSR

- obrati paznju na ```navigation.js``` i na ```[url].js```
