
import React, { useEffect, useState } from 'react'
import { Layout } from '../components/Wrappers/Layout'
import { Tab } from '../components/Tab'
import { HorizontalSlider } from '../components/HorizontalSlider'
import axios from 'axios'
import { BookDetails } from '../components/BookDetails/BookDetails'
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons'
import { ActionButton } from '../components/Buttons/ActionButton'
import { Logout } from '../components/Logout'

export const MainScreen = () => {

  const mockRespuesta = { "accessInfo": { "accessViewStatus": "SAMPLE", "country": "AR", "embeddable": true, "epub": { "acsTokenLink": "http://books.google.com.ar/books/download/The_Google_Story_2018_Updated_Edition-sample-epub.acsm?id=zyTCAlFPjgYC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api", "isAvailable": true }, "pdf": { "isAvailable": false }, "publicDomain": false, "quoteSharingAllowed": false, "textToSpeechPermission": "ALLOWED", "viewability": "PARTIAL", "webReaderLink": "http://play.google.com/books/reader?id=zyTCAlFPjgYC&hl=&printsec=frontcover&source=gbs_api" }, "etag": "C0hmn0pLY8c", "id": "zyTCAlFPjgYC", "kind": "books#volume", "layerInfo": { "layers": [[Object]] }, "saleInfo": { "buyLink": "https://play.google.com/store/books/details?id=zyTCAlFPjgYC&rdid=book-zyTCAlFPjgYC&rdot=1&source=gbs_api", "country": "AR", "isEbook": true, "listPrice": { "amount": 1976.43, "currencyCode": "ARS" }, "offers": [[Object]], "retailPrice": { "amount": 1976.43, "currencyCode": "ARS" }, "saleability": "FOR_SALE" }, "selfLink": "https://www.googleapis.com/books/v1/volumes/zyTCAlFPjgYC", "volumeInfo": { "allowAnonLogging": true, "authors": ["David A. Vise", "Mark Malseed"], "averageRating": 3.5, "canonicalVolumeLink": "https://play.google.com/store/books/details?id=zyTCAlFPjgYC", "categories": ["Business & Economics / Entrepreneurship", "Computers / Information Technology", "History / Modern / 20th Century / General"], "contentVersion": "2.3.2.0.preview.2", "description": "<b> <b>The definitive, bestselling account of the company that changed the way we work and live, updated for the twentieth anniversary of Google’s founding with analysis of its most recent bold moves to redefine the world—and its even more ambitious plans for the future.</b><br></b><br>Moscow-born Sergey Brin and Midwest-born Larry Page dropped out of graduate school at Stanford University to, as they said, “change the world” through a powerful search engine that would organize every bit of information on the Web for free. <i>The Google Story</i> takes you deep inside the company’s wild ride from an idea that struggled for funding in 1998 to a firm that today rakes in billions in profits. Based on scrupulous research and extraordinary access to Google, this fast-moving narrative reveals how an unorthodox management style and a culture of innovation enabled a search-engine giant to shake up Madison Avenue, clash with governments that accuse it of being a monopoly, deploy self-driving cars to forever change how we travel, and launch high-flying Internet balloons. Unafraid of controversy, Google is surging ahead with artificial intelligence that could cure diseases but also displace millions of people from their jobs, testing the founders’ guiding mantra: DON’T BE EVIL.<br><b><br>Praise for <i>The Google Story<br></i></b><i><br></i>“[The authors] do a fine job of recounting Google’s rapid rise and explaining its search business.”<b>—<i>The New York Times<br></i></b><br>“An intriguing insider view of the Google culture.”<b>—<i>Harvard Business Review<br></i></b><br>“An interesting read on a powerhouse company . . . If you haven’t read anything about one of today’s most influential companies, you should. If you don’t read <i>The Google Story,</i> you’re missing a few extra treats.”<b>—<i>USA Today<br></i></b><br>“Fascinating . . . meticulous . . . never bogs down.”<b>—<i>Houston Chronicle</i></b>", "dimensions": { "height": "24.00 cm" }, "imageLinks": { "large": "http://books.google.com/books/content?id=zyTCAlFPjgYC&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE72XYCDd4tsmwfxSN0jX9WW_W77D1770OrVfbGbz6yI1JcPuWF6e15vBiF6ix-R47dztCOS7KzMEfrW3P9fjstBTbeBbyuzi-cyDHuW8_u1V3vqqFBLW8xFxEifUxAfFaMO-MXvO&source=gbs_api", "medium": "http://books.google.com/books/content?id=zyTCAlFPjgYC&printsec=frontcover&img=1&zoom=3&edge=curl&imgtk=AFLRE71plKClDQxCn3GZiHyCeXoGM6DML9Kb4TnAIlNx4gZ0253JC6A_ynkYcCBFIzrzfvMhIr5dKmvjY2LNG8m43HNnDbZrbxWY5WCR1yM__5ZQMisxMtNsLu9k9IAaDUQg0wtYsmLR&source=gbs_api", "small": "http://books.google.com/books/content?id=zyTCAlFPjgYC&printsec=frontcover&img=1&zoom=2&edge=curl&imgtk=AFLRE73We-sxS91S_gLJOw8zIDpvTBb8jvHtXNS8EdFLgznFs4sshbmQRDV1qLqGomfnBHU9j2H50Fgku8axLWBq7SVBFrnPtI2P4Ifr0SIu6PlU90hLjfGIbWJYPwJar_hrDz2YUqo2&source=gbs_api", "smallThumbnail": "http://books.google.com/books/content?id=zyTCAlFPjgYC&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE73vHA4j8RYOMEeDFO9cKNADXkWh2F3AtSrYcmK78kQ2PPLhfdlyZ4z9yzF5w_-Hicd96-uiEnDqRN8H0JU-CzO0jH42cLBexwLw0fBc1Xhr1x5XXIiN_yEvaVD0Ofo0PEW6s9Ny&source=gbs_api", "thumbnail": "http://books.google.com/books/content?id=zyTCAlFPjgYC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE73VgT8MPV0F1TeARMozvgDKMNo66pyXOlXeUkLbfuKhlLHXhqu6GfIg-7evLniJjjLck87VifQ3srqKZFRjoLLOpcc8qlBxdib-mixGkq6tS8O9x1m5WvJoM4sbh4Y-0bmuBzao&source=gbs_api" }, "industryIdentifiers": [[Object], [Object]], "infoLink": "https://play.google.com/store/books/details?id=zyTCAlFPjgYC&source=gbs_api", "language": "en", "maturityRating": "NOT_MATURE", "pageCount": 384, "panelizationSummary": { "containsEpubBubbles": false, "containsImageBubbles": false }, "previewLink": "http://books.google.com.ar/books?id=zyTCAlFPjgYC&hl=&source=gbs_api", "printType": "BOOK", "printedPageCount": 394, "publishedDate": "2005-11-15", "publisher": "Random House Publishing Group", "ratingsCount": 21, "readingModes": { "image": false, "text": true }, "subtitle": "Inside the Hottest Business, Media, and Technology Success of Our Time", "title": "The Google Story (2018 Updated Edition)" } }

  const [response, setResponse] = useState()
  const [responseBook, setResponseBook] = useState()
  const { volumeInfo } = mockRespuesta

  useEffect(() => {
    axios.get("https://www.googleapis.com/books/v1/volumes?q=javascript:keyes&key=AIzaSyBqdKbsgfYO5uB5z-51C2QgDthKGHSl-mQ").then( data =>{
      setResponse(data.data.items)
    })
  },[])

  useEffect(() => {
    axios.get("https://www.googleapis.com/books/v1/volumes/zyTCAlFPjgYC?key=AIzaSyBqdKbsgfYO5uB5z-51C2QgDthKGHSl-mQ").then( data =>{
      setResponseBook(data.data.volumeInfo)
    })
  },[])

  const [isSecureEntry, setIsSecureEntry] = useState<boolean>(true)
  return (
    <Layout>
      <Logout/>
      <Tab/>
      <HorizontalSlider movies={ response }/>
      <ActionButton text={ 'Add to List' } icon={ faSquarePlus } /> 
      <BookDetails movieFull={ volumeInfo }/>
    </Layout>
  )
}
