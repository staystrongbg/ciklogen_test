# pravila koriscenja aplikacije

- potrebno je imati na svakoj stranici content
- potrebno je imati u data fajlu photos
- ako imamo jednu sliku uz jedan pasus korision image
- ako imamo 2,3 ili 4 slike koristimo image1,image2,image3 dakle image bez sufiksa izostavljamo i dodajemo flag `column:true` koji je zapravo klasa koja postavlja slicice na 50% width, image ih postavlja na 100%
- za pasuse koristimo prop text i ako je prvi pasus u tekstu mozemo postaviti flag `dropcap='x'`

## optional props

### pasus

`blockquote`
`text`
`dropcap`

### images

`image`
or
`image1`
`image2`
`image3`
`image4`
`column`

## objasnjenje

- content na svakoj stranici je potreban jer iz njega **Sablon** komponenta iscitava sadrzaj za tu stranicu(fotke i tekst) / fotke - src / tekst - tekst
- Modal komponenti treba photos iz data fajla / tako pravi niz slika za slajd/ uneti src za svaku sliku
- da bi modal radio pravilno, startIndex mora biti definisan. /prop src === photos.src jer se tako setuje index koji sluzi za slajd funkciju

- ne menja ti document title kad menjas url!

```
<Pasus
  text='string'
  dropcap='<1st Letter>'
  blockquote='string'
/>
<Row
  column=true or false
  image='https://linkToPhoto'
  image1= -||-
  image2= -||-
  image3= -||-
  image4= -||-
/>
```
