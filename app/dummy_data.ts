import { ContentfulItem } from "./goodnews.ts";

// generated using http --auth-type bearer --auth $CONTENTFUL_DELIVERY_API_ACCESS_TOKEN https://cdn.contentful.com/spaces/evvo9u5z5a9q/environments/master/entries\?skip\=0\&limit\=100 | jq '.items[]' | jq -s '.'
export const dummyData: ContentfulItem[] = [
  {
    "metadata": {
      "tags": [],
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "evvo9u5z5a9q",
        },
      },
      "id": "2CSSydmCjQ8euJRdZlvnyM",
      "type": "Entry",
      "createdAt": "2022-11-28T14:23:02.929Z",
      "updatedAt": "2022-11-28T14:24:08.001Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment",
        },
      },
      "revision": 2,
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "donationAd",
        },
      },
      "locale": "de-DE",
    },
    "fields": {
      "datum": "2022-11-28",
      "headline": "Another week full of GOODnews ✨ ",
      "layout": "Article",
      "bildManuell": {
        "sys": {
          "type": "Link",
          "linkType": "Asset",
          "id": "2zrcrohGeNwnMHhh7aTcb2",
        },
      },
      "photoCredit": "Image: Chris Lawton/Unsplash",
      "teaserText":
        "We would love to continue giving you GOODnews every day. If you can, please support our work with a monthly donation, every little bit helps! Spread the word, and share optimism! We all need it. Thank you 💛🍂",
      "quelle": "GOOD NEWS",
      "articleUrl": "https://donorbox.org/good-news-en",
      "sortKey": 8,
      "language": "en",
    },
  },
  {
    "metadata": {
      "tags": [],
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "evvo9u5z5a9q",
        },
      },
      "id": "HchDHpoWf6PNlnioyD8Kf",
      "type": "Entry",
      "createdAt": "2022-11-28T14:23:03.362Z",
      "updatedAt": "2022-11-28T14:23:03.362Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment",
        },
      },
      "revision": 1,
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "newsTeaser",
        },
      },
      "locale": "de-DE",
    },
    "fields": {
      "datum": "2022-11-28",
      "headline": "Five hundred species gain protection",
      "layout": "Article",
      "bildSource":
        "https://english.aawsat.com/sites/default/files/styles/article_img_top/public/2022/11/26/_wildlife_conference_86123-8637f-1668441961.jpg?itok=xaQKQLxe",
      "photoCredit": "Image: via aawsat.com",
      "teaserText":
        "The UN Convention on International Trade in Endangered Species of Wild Fauna and Flora, known by its initials as CITES, concluded in Panama last week with valuable new protections established for over 500 precious species.",
      "quelle": "AAWSAT",
      "articleUrl":
        "https://english.aawsat.com/home/article/4009021/un-wildlife-conference-ends-protection-500-species%C2%A0",
      "sortKey": 1,
      "language": "en",
      "categoryID": "animal_rights",
    },
  },
  {
    "metadata": {
      "tags": [],
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "evvo9u5z5a9q",
        },
      },
      "id": "1tpdiJAqneoPC6hvtyzq02",
      "type": "Entry",
      "createdAt": "2022-11-28T14:23:03.353Z",
      "updatedAt": "2022-11-28T14:23:03.353Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment",
        },
      },
      "revision": 1,
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "newsTeaser",
        },
      },
      "locale": "de-DE",
    },
    "fields": {
      "datum": "2022-11-28",
      "headline": "London expands pollution-free zone",
      "layout": "Article",
      "bildSource":
        "https://www.ecowatch.com/wp-content/uploads/2022/11/GettyImages-1236794815-scaled.jpg",
      "photoCredit":
        "Image: Mike Kemp / In Pictures / Getty Images via ecowatch.com",
      "teaserText":
        "Iin a move that will bring cleaner air to five million more Londoners, the city has expanded its ultra-low emissions zone to the entire metro area. Starting next summer, the most polluting vehicles will have to pay to enter metropolitan London.",
      "quelle": "ECOWATCH",
      "articleUrl":
        "https://www.ecowatch.com/london-expands-vehicle-pollution-fee.html",
      "sortKey": 2,
      "language": "en",
      "categoryID": "climate",
    },
  },
  {
    "metadata": {
      "tags": [],
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "evvo9u5z5a9q",
        },
      },
      "id": "3u4UDtkxjs6SDdqVOSWX4r",
      "type": "Entry",
      "createdAt": "2022-11-28T14:23:03.279Z",
      "updatedAt": "2022-11-28T14:23:03.279Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment",
        },
      },
      "revision": 1,
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "newsTeaser",
        },
      },
      "locale": "de-DE",
    },
    "fields": {
      "datum": "2022-11-28",
      "headline": "Indian company invents non-invasive breast scan",
      "layout": "Article",
      "bildManuell": {
        "sys": {
          "type": "Link",
          "linkType": "Asset",
          "id": "5DlC7W7quJFCeZfJsr1nfY",
        },
      },
      "photoCredit": "Image: screenshot via bbc.com",
      "teaserText":
        "Mammography is the best and most reliable way to detect breast cancer. Still, this new, cost-efficient approach makes preventive scans more accessible financially, while AI and thermo-imaging make it less intrusive than a physical examination.",
      "quelle": "BBC",
      "articleUrl": "https://www.bbc.com/news/av/stories-63755128",
      "sortKey": 3,
      "language": "en",
      "categoryID": "global_health",
    },
  },
  {
    "metadata": {
      "tags": [],
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "evvo9u5z5a9q",
        },
      },
      "id": "7s1L5XhjSEbHSKnka7n5SK",
      "type": "Entry",
      "createdAt": "2022-11-28T14:23:03.270Z",
      "updatedAt": "2022-11-28T14:23:03.270Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment",
        },
      },
      "revision": 1,
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "newsTeaser",
        },
      },
      "locale": "de-DE",
    },
    "fields": {
      "datum": "2022-11-28",
      "headline": "UK launches home insulation programme",
      "layout": "Article",
      "bildSource":
        "https://static.euronews.com/articles/stories/07/20/75/82/1100x619_cmsv2_8d0ad0f1-2c1a-5c67-898b-1e8c51c511b8-7207582.jpg",
      "photoCredit": "Image: Insulate Britain via euronews.com",
      "teaserText":
        "After massive protests took the streets last year demanding to fix the UK's energy-leaking housing, the British government will make one billion pounds in funding available for home insulation and other energy efficiency projects.",
      "quelle": "EURONEWS",
      "articleUrl":
        "https://www.euronews.com/green/2022/11/22/uk-government-announces-funds-to-insulate-homes-is-it-proof-that-civil-resistance-works",
      "sortKey": 4,
      "language": "en",
      "categoryID": "sustainability",
    },
  },
  {
    "metadata": {
      "tags": [],
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "evvo9u5z5a9q",
        },
      },
      "id": "57VGa9SRFa4hvy6LmTc1qR",
      "type": "Entry",
      "createdAt": "2022-11-28T14:23:03.260Z",
      "updatedAt": "2022-11-28T14:23:03.260Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment",
        },
      },
      "revision": 1,
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "newsTeaser",
        },
      },
      "locale": "de-DE",
    },
    "fields": {
      "datum": "2022-11-28",
      "headline": "Milestone: hydrogen jet engine test succeeds",
      "layout": "Article",
      "bildSource":
        "https://i.guim.co.uk/img/media/dd1c4cab256b0d0f8ff8e0ad25e47c98df831c22/0_310_8000_4801/master/8000.jpg?width=620&quality=45&dpr=2&s=none",
      "photoCredit": "Image: via theguardian.com",
      "teaserText":
        "In a significant step toward aviation's decarbonization, Rolls Royce and Easyjet have successfully tested a hydrogen-fuelled aircraft engine in ground tests. The green hydrogen was generated by wind and tidal power from Scotland's Orkney Islands.",
      "quelle": "THE GUARDIAN",
      "articleUrl":
        "https://www.theguardian.com/business/2022/nov/28/rolls-royce-easyjet-test-aero-engine-hydrogen",
      "sortKey": 5,
      "language": "en",
      "categoryID": "climate",
    },
  },
  {
    "metadata": {
      "tags": [],
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "evvo9u5z5a9q",
        },
      },
      "id": "583e5upJQDabQpBj4EFINL",
      "type": "Entry",
      "createdAt": "2022-11-28T14:23:03.248Z",
      "updatedAt": "2022-11-28T14:23:03.248Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment",
        },
      },
      "revision": 1,
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "newsTeaser",
        },
      },
      "locale": "de-DE",
    },
    "fields": {
      "datum": "2022-11-28",
      "headline": "Crowdsourced maps for safer streets",
      "layout": "Article",
      "bildSource":
        "https://images.pexels.com/photos/951408/pexels-photo-951408.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "photoCredit": "Image: Travis Sailor/Pexels",
      "teaserText":
        "It's not the first of its kind, but we need more of them. Walk Roll Map is a platform for crowdsourcing micro barriers that affect pedestrians, wheelchair users, parents with buggies, and cyclists, trying to get around their city safely.",
      "quelle": "TREEHUGGER",
      "articleUrl":
        "https://www.treehugger.com/walk-roll-map-help-keep-streets-clear-safe-6831562",
      "sortKey": 6,
      "language": "en",
      "categoryID": "human_rights",
    },
  },
  {
    "metadata": {
      "tags": [],
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "evvo9u5z5a9q",
        },
      },
      "id": "26ITQDtZZUYmhsis4q2uBZ",
      "type": "Entry",
      "createdAt": "2022-11-28T11:57:17.162Z",
      "updatedAt": "2022-11-28T12:42:14.522Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment",
        },
      },
      "revision": 2,
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "newsTeaser",
        },
      },
      "locale": "de-DE",
    },
    "fields": {
      "datum": "2022-11-28",
      "headline": "Vaterschaftsurlaub soll 2024 kommen",
      "layout": "Article",
      "bildManuell": {
        "sys": {
          "type": "Link",
          "linkType": "Asset",
          "id": "2k7B3hpzrJxzwxW4BAvDn6",
        },
      },
      "photoCredit": "Bild: Unsplash / Kelly Sikkema",
      "teaserText":
        "Im Koalitionsvertrag hatte sich die Ampel-Koalition auf einen sogenannten Vaterschaftsurlaub geeinigt. 2024 soll die zweiwöchige, bezahlte Freistellung für frischgebackene Väter in Deutschland nun kommen. Die lohnarbeitsfreie Zeit soll Eltern nach der Geburt unterstützen.",
      "quelle": "TAGESSPIEGEL",
      "articleUrl":
        "https://www.tagesspiegel.de/politik/zwei-wochen-nach-der-geburt-vaterschaftsurlaub-soll-2024-kommen-8930140.html",
      "sortKey": 2,
      "language": "de",
      "categoryID": "education",
    },
  },
  {
    "metadata": {
      "tags": [],
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "evvo9u5z5a9q",
        },
      },
      "id": "7odwmFlzS2nx28HZPwI60N",
      "type": "Entry",
      "createdAt": "2022-11-28T11:57:17.186Z",
      "updatedAt": "2022-11-28T11:57:17.186Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment",
        },
      },
      "revision": 1,
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "newsTeaser",
        },
      },
      "locale": "de-DE",
    },
    "fields": {
      "datum": "2022-11-28",
      "headline": "USA produzieren mehr grüne Energie",
      "layout": "Article",
      "bildManuell": {
        "sys": {
          "type": "Link",
          "linkType": "Asset",
          "id": "3WvFClV32rsT4T2onkM65W",
        },
      },
      "photoCredit": "Bild: Unsplash / Chris Linnett",
      "teaserText":
        "Mehr erneuerbare Energie in den USA: Bis Ende 2022 wird das Land mehr Strom aus erneuerbaren Energiequellen produziert haben als mit Atomkraft oder Kohle. Insgesamt ein Fünftel des Stroms wird laut der Energiebehörde EIA aus Wind-, Sonnen- und Wasserenergie stammen.",
      "quelle": "WDR COSMO",
      "articleUrl":
        "https://www1.wdr.de/mediathek/audio/cosmo/daily-good-news/audio-usa-erzeugen-mehr-strom-aus-erneuerbare-energien-als-aus-kohle-100.html",
      "sortKey": 1,
      "language": "de",
      "categoryID": "sustainability",
    },
  },
  {
    "metadata": {
      "tags": [],
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "evvo9u5z5a9q",
        },
      },
      "id": "HhE7VPWjCY2VK4K9QRG7N",
      "type": "Entry",
      "createdAt": "2022-11-28T11:57:17.140Z",
      "updatedAt": "2022-11-28T11:57:17.140Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment",
        },
      },
      "revision": 1,
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "newsTeaser",
        },
      },
      "locale": "de-DE",
    },
    "fields": {
      "datum": "2022-11-28",
      "headline": "Wie man die Ausbreitung von Darmkrebs verhindern könnte",
      "layout": "Article",
      "bildManuell": {
        "sys": {
          "type": "Link",
          "linkType": "Asset",
          "id": "6r8eYEQKz9oyRPRiapIKUc",
        },
      },
      "photoCredit": "Bild: Unsplash / National Cancer Institute",
      "teaserText":
        "Forscher:innen aus Barcelona haben in einer Studie herausgefunden, wie verhindert werden könnte, dass Darmkrebs in anderen Organen Metastasen bildet. Die sogenannten „High Relapse Cells“ sollten zerstört werden, noch bevor der Primärtumor entfernt wird.",
      "quelle": "TAZ",
      "articleUrl": "https://taz.de/Forschungserfolg-gegen-Darmkrebs/!5895059/",
      "sortKey": 3,
      "language": "de",
      "categoryID": "global_health",
    },
  },
  {
    "metadata": {
      "tags": [],
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "evvo9u5z5a9q",
        },
      },
      "id": "BUpFRacNsGnBzAvf5guq3",
      "type": "Entry",
      "createdAt": "2022-11-28T11:57:17.117Z",
      "updatedAt": "2022-11-28T11:57:17.117Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment",
        },
      },
      "revision": 1,
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "newsTeaser",
        },
      },
      "locale": "de-DE",
    },
    "fields": {
      "datum": "2022-11-28",
      "headline": "London will für bessere Luft sorgen",
      "layout": "Article",
      "bildManuell": {
        "sys": {
          "type": "Link",
          "linkType": "Asset",
          "id": "4BcYoCMuksz11QCz4gNuL",
        },
      },
      "photoCredit": "Bild: IMAGO / MiS",
      "teaserText":
        "Die Luft in London soll besser werden. Um das zu erreichen, will Bürgermeister Sadiq Khan die Niedrigemissionszonen im kommenden Sommer auf ganz London ausweiten. Wer in der Zone kostenlos fahren will, muss bestimmte Auflagen erfüllen  – oder fortan Gebühren zahlen.",
      "quelle": "T-ONLINE",
      "articleUrl":
        "https://www.t-online.de/nachrichten/panorama/id_100087198/londoner-buergermeister-will-dreckige-autos-verbannen.html",
      "sortKey": 5,
      "language": "de",
      "categoryID": "climate",
    },
  },
  {
    "metadata": {
      "tags": [],
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "evvo9u5z5a9q",
        },
      },
      "id": "2Xbt44alffaaMRrEaYDQCp",
      "type": "Entry",
      "createdAt": "2022-11-28T11:57:17.093Z",
      "updatedAt": "2022-11-28T11:57:17.093Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment",
        },
      },
      "revision": 1,
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "newsTeaser",
        },
      },
      "locale": "de-DE",
    },
    "fields": {
      "datum": "2022-11-28",
      "headline": "Borneo: 500. Menschenaffe ausgewildert",
      "layout": "Article",
      "bildManuell": {
        "sys": {
          "type": "Link",
          "linkType": "Asset",
          "id": "6TLnmOir58fi5CpuLgKuki",
        },
      },
      "photoCredit": "Symbolbild: IMAGO / Shotshop",
      "teaserText":
        "Nach jahrelanger Vorbereitung ist der 12-jährige Orang-Utan Ben gemeinsam mit zwei Artgenossen im Regenwald auf Borneo in die Freiheit entlassen worden. Für die Organisation „Borneo Orangutan Survival“ ist er der 500. Orang-Utan, der auf der Insel ausgewildert wurde.",
      "quelle": "TAGESSCHAU",
      "articleUrl":
        "https://www.tagesschau.de/ausland/asien/borneo-orang-utans-101.html",
      "sortKey": 6,
      "language": "de",
      "categoryID": "animal_rights",
    },
  },
  {
    "metadata": {
      "tags": [],
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "evvo9u5z5a9q",
        },
      },
      "id": "6mx5qaVhDg7DH9ouT5O8VO",
      "type": "Entry",
      "createdAt": "2022-11-28T11:57:17.072Z",
      "updatedAt": "2022-11-28T11:57:17.072Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment",
        },
      },
      "revision": 1,
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "newsTeaser",
        },
      },
      "locale": "de-DE",
    },
    "fields": {
      "datum": "2022-11-28",
      "headline": "Japan: Endlich Mülleimer für Männer-Toiletten",
      "layout": "Article",
      "bildManuell": {
        "sys": {
          "type": "Link",
          "linkType": "Asset",
          "id": "4xSBSy5kv4yVt7i0nnl4w0",
        },
      },
      "photoCredit": "Symbolbild: IMAGO / Panthermedia",
      "teaserText":
        "Bislang hat man in Japan nach Mülleimern für Hygiene-Artikel in Männer-Toiletten oft vergeblich gesucht. In Anbetracht der alternden Gesellschaft führen nun immer mehr Orte solche Behälter in öffentlichen Gebäuden ein. In ihnen können z. B. Windeln entsorgt werden.",
      "quelle": "STERN",
      "articleUrl":
        "https://www.stern.de/panorama/hygiene--alterndes-japan-ruestet-herren-toiletten-mit-windeln-auf-32951038.html",
      "sortKey": 7,
      "language": "de",
      "categoryID": "human_rights",
    },
  },
  {
    "metadata": {
      "tags": [],
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "evvo9u5z5a9q",
        },
      },
      "id": "18TvLKxGTQPPcSZxeacVlM",
      "type": "Entry",
      "createdAt": "2022-11-28T11:57:17.051Z",
      "updatedAt": "2022-11-28T11:57:17.051Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment",
        },
      },
      "revision": 1,
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "newsTeaser",
        },
      },
      "locale": "de-DE",
    },
    "fields": {
      "datum": "2022-11-28",
      "headline": "Geschenke unter 35 Euro",
      "layout": "Article",
      "label": "GOOD FAMILY ANZEIGE",
      "bildManuell": {
        "sys": {
          "type": "Link",
          "linkType": "Asset",
          "id": "Ok2kpsZRG25GlKp66Fb0e",
        },
      },
      "teaserText":
        "Geschenke müssen nicht die Welt kosten, um die Welt zu verändern. Zum Beispiel ein Sonnenglas, das faire Arbeitsplätze und sicheres Licht in Südafrika schafft oder eine Trinkflasche, die Plastikmüll vermeidet und Trinkwasserprojekte finanziert.",
      "quelle": "GoodBuy",
      "articleUrl":
        "https://www.goodbuy.eu/collections/nachhaltige-geschenke-bis-35-euro?utm_medium=referral&utm_source=goodnewsapp&utm_campaign=goodnews-28.11.2022&utm_content=collection",
      "sortKey": 4,
      "language": "de",
    },
  },
  {
    "metadata": {
      "tags": [],
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "evvo9u5z5a9q",
        },
      },
      "id": "596d21bSElz87HhEsN5Mc1",
      "type": "Entry",
      "createdAt": "2022-11-28T11:57:17.015Z",
      "updatedAt": "2022-11-28T11:57:17.015Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment",
        },
      },
      "revision": 1,
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "newsTeaser",
        },
      },
      "locale": "de-DE",
    },
    "fields": {
      "datum": "2022-11-28",
      "headline": "Wir brauchen noch einmal euren Support!",
      "layout": "Article",
      "label": "IN EIGENER SACHE",
      "bildManuell": {
        "sys": {
          "type": "Link",
          "linkType": "Asset",
          "id": "2NEW4SNXnSN4S4eunmonWJ",
        },
      },
      "photoCredit": "Bild: Good News",
      "teaserText":
        "Das Ende des Monats ist fast erreicht und wir haben schon 4647,54 Euro von 622 Unterstützer:innen erhalten. Wahnsinn! Damit wir auch Ende des Jahres gute Nachrichten verbreiten können, brauchen wir jedoch weiterhin eure Unterstützung: Jeder Beitrag, egal wie groß oder klein, zählt!",
      "quelle": "GOOD NEWS",
      "articleUrl": "https://goodnews.eu/unterstuetzen/",
      "sortKey": 9,
      "language": "de",
    },
  },
  {
    "metadata": {
      "tags": [],
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "evvo9u5z5a9q",
        },
      },
      "id": "43ZQz7UwKLHvdUkKFvkvu4",
      "type": "Entry",
      "createdAt": "2022-11-25T13:10:19.357Z",
      "updatedAt": "2022-11-25T13:11:43.724Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment",
        },
      },
      "revision": 2,
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "newsTeaser",
        },
      },
      "locale": "de-DE",
    },
    "fields": {
      "datum": "2022-11-25",
      "headline": "Bezahlbarer Wohnraum in Großstädten",
      "layout": "Article",
      "bildManuell": {
        "sys": {
          "type": "Link",
          "linkType": "Asset",
          "id": "4bs9xsjfIbR1d6E7iRX8Js",
        },
      },
      "photoCredit": "Bild: Unsplash / Victor Malyushev",
      "teaserText":
        "Ob kaufen oder mieten – besonders in und um deutsche Großstädte steigen die Preise stetig. Aber es geht auch anders: Die Stadt Wien fördert kommunalen Wohnbau. Der „Ideenimport“-Podcast zeigt Ansätze, wie Wohnen in anderen Ländern bezahlbar bleibt.",
      "quelle": "TAGESSCHAU",
      "articleUrl":
        "https://www.tagesschau.de/multimedia/podcasts/ideenimport-bezahlbares-wohnen-wohnungsbau-101.html",
      "sortKey": 5,
      "language": "de",
      "categoryID": "human_rights",
    },
  },
  {
    "metadata": {
      "tags": [],
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "evvo9u5z5a9q",
        },
      },
      "id": "1OU8cryGK29NgQTgZlv11M",
      "type": "Entry",
      "createdAt": "2022-11-25T13:10:19.470Z",
      "updatedAt": "2022-11-25T13:10:19.470Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment",
        },
      },
      "revision": 1,
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "newsTeaser",
        },
      },
      "locale": "de-DE",
    },
    "fields": {
      "datum": "2022-11-25",
      "headline": "15 neue Nationalparks für Kanada",
      "layout": "Article",
      "bildManuell": {
        "sys": {
          "type": "Link",
          "linkType": "Asset",
          "id": "4jlFB06W94bh6LZyPJniM9",
        },
      },
      "photoCredit": "Bild: Unsplash / Derek Sutton",
      "teaserText":
        "1,2 Milliarden Euro will Kanada künftig für die Anpassung an den Klimawandel ausgeben. Im Rahmen des Aktionsplans will die Regierung unter anderem 15 neue Nationalparks gründen und 30 Prozent der Land- und Wasserflächen unter Schutz stellen.",
      "quelle": "DEUTSCHLANDFUNK NOVA",
      "articleUrl":
        "https://www.deutschlandfunknova.de/nachrichten/klimaanpassung-kanada-plant-15-neue-nationalparks",
      "sortKey": 1,
      "language": "de",
      "categoryID": "climate",
    },
  },
  {
    "metadata": {
      "tags": [],
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "evvo9u5z5a9q",
        },
      },
      "id": "Ki2xRurNUgnn5jg5VwzII",
      "type": "Entry",
      "createdAt": "2022-11-25T13:10:19.452Z",
      "updatedAt": "2022-11-25T13:10:19.452Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment",
        },
      },
      "revision": 1,
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "newsTeaser",
        },
      },
      "locale": "de-DE",
    },
    "fields": {
      "datum": "2022-11-25",
      "headline": "Kauf-Nix-Gruppen: Schenken statt Konsum",
      "layout": "Article",
      "bildManuell": {
        "sys": {
          "type": "Link",
          "linkType": "Asset",
          "id": "54hewS19OTJ22OwZSp9lAe",
        },
      },
      "photoCredit": "Bild: Unsplash / eduard",
      "teaserText":
        "Der Kauf-Nix-Tag am 26. November ist ein konsumkritischer Gegenentwurf zum Black Friday. Weniger kaufen – diese Idee steckt auch hinter den sogenannten Buy-Nothing-Gruppen. Per App oder Social Media werden hier Dinge verschenkt oder kostenlos verliehen.",
      "quelle": "SÜDDEUTSCHE ZEITUNG",
      "articleUrl":
        "https://sz-magazin.sueddeutsche.de/die-loesung-fuer-alles/buy-nothing-kaufnix-konsum-verschenken-leihen-92096",
      "sortKey": 2,
      "language": "de",
      "categoryID": "sustainability",
    },
  },
  {
    "metadata": {
      "tags": [],
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "evvo9u5z5a9q",
        },
      },
      "id": "4enQjaC6lgOcpWnaLWJJFr",
      "type": "Entry",
      "createdAt": "2022-11-25T13:10:19.380Z",
      "updatedAt": "2022-11-25T13:10:19.380Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment",
        },
      },
      "revision": 1,
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "newsTeaser",
        },
      },
      "locale": "de-DE",
    },
    "fields": {
      "datum": "2022-11-25",
      "headline": "Erstmals Ministerin auf dem Cover der Vogue",
      "layout": "Article",
      "bildManuell": {
        "sys": {
          "type": "Link",
          "linkType": "Asset",
          "id": "1OmD2npjPHKnjWntmcpMe6",
        },
      },
      "photoCredit": "Bild: IMAGO / penofoto",
      "teaserText":
        "Schleswig-Holsteins Sozialministerin Aminata Touré ist die jüngste Ministerin Deutschlands und als erste amtierende Ministerin auf dem Titelbild der „Vogue“. In einem Interview spricht sie über ihre Arbeit und will so auch Menschen abseits der Politik erreichen.",
      "quelle": "NDR",
      "articleUrl":
        "https://www.ndr.de/nachrichten/schleswig-holstein/Ministerin-Toure-auf-Vogue-Cover,vogue126.html",
      "sortKey": 3,
      "language": "de",
      "categoryID": "education",
    },
  },
  {
    "metadata": {
      "tags": [],
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "evvo9u5z5a9q",
        },
      },
      "id": "15RvHpcDsv9GpsKVWJYZNl",
      "type": "Entry",
      "createdAt": "2022-11-25T13:10:19.334Z",
      "updatedAt": "2022-11-25T13:10:19.334Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment",
        },
      },
      "revision": 1,
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "newsTeaser",
        },
      },
      "locale": "de-DE",
    },
    "fields": {
      "datum": "2022-11-25",
      "headline": "Mehr Diversität: Der erste Parastronaut",
      "layout": "Article",
      "bildManuell": {
        "sys": {
          "type": "Link",
          "linkType": "Asset",
          "id": "2sFEpjdeddT4WLx8B9hls6",
        },
      },
      "photoCredit": "Symbolbild: Pexels / Pixabay",
      "teaserText":
        "Die europäische Weltraumorganisation „ESA“ hat weltweit zum ersten Mal einen Menschen mit einer körperlichen Behinderung in ein Astronauten-Programm aufgenommen. Es handelt sich hierbei um den ehemaligen britischen Paralympics-Sprinter John McFall.",
      "quelle": "ZEIT ONLINE",
      "articleUrl":
        "https://www.zdf.de/nachrichten/politik/esa-raumfahrt-astronaut-behinderung-100.html",
      "sortKey": 6,
      "language": "de",
      "categoryID": "education",
    },
  },
  {
    "metadata": {
      "tags": [],
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "evvo9u5z5a9q",
        },
      },
      "id": "2LF78DaaUOQkhaRZtfc3of",
      "type": "Entry",
      "createdAt": "2022-11-25T13:10:19.141Z",
      "updatedAt": "2022-11-25T13:10:19.141Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment",
        },
      },
      "revision": 1,
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "newsTeaser",
        },
      },
      "locale": "de-DE",
    },
    "fields": {
      "datum": "2022-11-25",
      "headline": "Science-Fiction designt nachhaltige Zukunft",
      "layout": "Article",
      "bildManuell": {
        "sys": {
          "type": "Link",
          "linkType": "Asset",
          "id": "66OFqSfwuIGsVniEWefsOO",
        },
      },
      "photoCredit":
        "Bild: The Fifth Sacred Thing von Jessica Perlstein via lumosmagazin.ch",
      "teaserText":
        "In den Erzählungen des Science Fiction-Genre „Solarpunk“ ist es der Menschheit gelungen, im Einklang mit der Natur zu leben: Mithilfe sauberer Technologie, nachhaltigen Batteriekonzepten und Kreislaufwirtschaften. Die fiktive Ökowelt skizziert so einen glaubwürdigen Rahmen für eine bessere Welt.",
      "quelle": "1E9 COMMUNITY",
      "articleUrl":
        "https://1e9.community/t/solarglas-solardecken-solarkleidung-design-fuer-unsere-solarpunk-zukunft/18281",
      "sortKey": 7,
      "language": "de",
      "categoryID": "digitization",
    },
  },
  {
    "metadata": {
      "tags": [],
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "evvo9u5z5a9q",
        },
      },
      "id": "4ZELObRgVN44Cm8meaqwcY",
      "type": "Entry",
      "createdAt": "2022-11-25T13:10:19.030Z",
      "updatedAt": "2022-11-25T13:10:19.030Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment",
        },
      },
      "revision": 1,
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "newsTeaser",
        },
      },
      "locale": "de-DE",
    },
    "fields": {
      "datum": "2022-11-25",
      "headline": "Nachhaltigkeit muss auch sozial sein",
      "layout": "Article",
      "label": "GOOD FAMILY ANZEIGE",
      "bildManuell": {
        "sys": {
          "type": "Link",
          "linkType": "Asset",
          "id": "1TYS0ieQ6wGc1zJL0eDye8",
        },
      },
      "teaserText":
        'Rabattschlachten passen eigentlich nicht zu nachhaltigem Konsum. Damit sich aber mehr Menschen umweltfreundliche Produkte und Geschenke leisten können, gibt es bei GoodBuy bis Sonntag mit dem Code "GOOD15" 15% Rabatt. Mehr Infos ...',
      "quelle": "GoodBuy",
      "articleUrl":
        "https://www.goodbuy.eu/pages/aktion?utm_medium=referral&utm_source=goodnewsapp&utm_campaign=goodnews-25.11.2022&utm_content=aktion",
      "sortKey": 4,
      "language": "de",
    },
  },
  {
    "metadata": {
      "tags": [],
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "evvo9u5z5a9q",
        },
      },
      "id": "69J5Xyzze8Hc8jdnAjZPW1",
      "type": "Entry",
      "createdAt": "2022-11-25T13:10:18.999Z",
      "updatedAt": "2022-11-25T13:10:18.999Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment",
        },
      },
      "revision": 1,
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "newsTeaser",
        },
      },
      "locale": "de-DE",
    },
    "fields": {
      "datum": "2022-11-25",
      "headline": "Schönes Wochenende",
      "layout": "Article",
      "label": "IN EIGENER SACHE",
      "bildManuell": {
        "sys": {
          "type": "Link",
          "linkType": "Asset",
          "id": "4bsQJ7KJDm1pYwCbIlMNLC",
        },
      },
      "photoCredit": "Bild: Good News",
      "teaserText":
        "Wir hoffen, wir konnten dir den Start ins Wochenende mit guten Nachrichten versüßen. Damit wir dich auch weiterhin mit Good News versorgen können, benötigen wir deine Unterstützung. Jeder Beitrag zählt! Herzlichen Dank!",
      "quelle": "GOOD NEWS",
      "articleUrl": "https://goodnews.eu/unterstuetzen/",
      "sortKey": 9,
      "language": "de",
    },
  },
  {
    "metadata": {
      "tags": [],
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "evvo9u5z5a9q",
        },
      },
      "id": "2fPKHwjmcs1rIkOA2gi6vX",
      "type": "Entry",
      "createdAt": "2022-11-25T11:35:14.517Z",
      "updatedAt": "2022-11-25T11:42:03.408Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment",
        },
      },
      "revision": 3,
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "newsTeaser",
        },
      },
      "locale": "de-DE",
    },
    "fields": {
      "datum": "2022-11-25",
      "headline": "QR codes as window to animal welfare ",
      "layout": "Article",
      "bildSource":
        "https://scx2.b-cdn.net/gfx/news/hires/2022/qr-codes-on-milk-carto.jpg",
      "photoCredit": "Image: Daniel Quizenco/Unsplash",
      "teaserText":
        "ClearFarm is a digital platform advancing livestock monitoring technology to offer more transparent reporting on animal welfare. A simple QR code could provide consumers with details on the care and well-being of the farm animals.",
      "quelle": "PHYS.ORG",
      "articleUrl":
        "https://phys.org/news/2022-11-qr-codes-cartons-window-livestock.html",
      "sortKey": 4,
      "language": "en",
      "categoryID": "animal_rights",
    },
  },
  {
    "metadata": {
      "tags": [],
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "evvo9u5z5a9q",
        },
      },
      "id": "4OfCFBFxNDEAk8sM6tO4tv",
      "type": "Entry",
      "createdAt": "2022-11-25T11:35:14.504Z",
      "updatedAt": "2022-11-25T11:39:44.077Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment",
        },
      },
      "revision": 2,
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "newsTeaser",
        },
      },
      "locale": "de-DE",
    },
    "fields": {
      "datum": "2022-11-25",
      "headline": "Celebrate the world's first Secondhand Sunday",
      "layout": "Article",
      "bildSource":
        "https://images.unsplash.com/photo-1494908528889-fa8ed729bcd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3003&q=80",
      "photoCredit": "Image: Megan Bucknall/Unsplash",
      "teaserText":
        "Did you know more than ninety percent of people are open to receiving a secondhand gift? Without wanting to promote consumption, there's a new sustainable shopping day cramped between Black Friday and Cyber Monday.",
      "quelle": "INHABITAT",
      "articleUrl":
        "https://inhabitat.com/thrifting-and-gifting-something-extra-nice-secondhand-sunday/",
      "sortKey": 6,
      "language": "en",
      "categoryID": "sustainability",
    },
  },
  {
    "metadata": {
      "tags": [],
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "evvo9u5z5a9q",
        },
      },
      "id": "4OXx5aWzYtH03R8pDrVOGZ",
      "type": "Entry",
      "createdAt": "2022-11-25T11:35:14.560Z",
      "updatedAt": "2022-11-25T11:38:01.789Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment",
        },
      },
      "revision": 2,
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "newsTeaser",
        },
      },
      "locale": "de-DE",
    },
    "fields": {
      "datum": "2022-11-25",
      "headline": "The company drilling for renewable energy",
      "layout": "Article",
      "bildSource":
        "https://www.ecowatch.com/wp-content/uploads/2022/11/rendition.jpg",
      "photoCredit": "Image: Hector Vargas/Quaise Energy via ecowatch",
      "teaserText":
        "An innovative company is developing the technology to drill 10 miles beneath the Earth -not to release fossil fuels, but to access at least a fraction of the vast amount of geothermal energy stored underground that could cover global energy needs.",
      "quelle": "ECOWATCH",
      "articleUrl":
        "https://www.ecowatch.com/geothermal-energy-drilling-company.html",
      "sortKey": 5,
      "language": "en",
      "categoryID": "climate",
    },
  },
  {
    "metadata": {
      "tags": [],
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "evvo9u5z5a9q",
        },
      },
      "id": "6aenBRsJI5ev6jnnqCtxet",
      "type": "Entry",
      "createdAt": "2022-11-25T11:35:14.531Z",
      "updatedAt": "2022-11-25T11:37:47.107Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment",
        },
      },
      "revision": 2,
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "newsTeaser",
        },
      },
      "locale": "de-DE",
    },
    "fields": {
      "datum": "2022-11-25",
      "headline": "A novel approach to prevent muscle loss",
      "layout": "Article",
      "bildSource":
        "https://cdn.zmescience.com/wp-content/uploads/2022/11/MAGENTA-Figure-2-e1668191003422-scaled.jpg",
      "photoCredit": "Image: via zmescience.com",
      "teaserText":
        "Scientists have developed an adhesive soft robot that prevents muscle loss and accelerates recovery after an injury. The device is controlled via electrical wires or laser light and stimulates immobilized muscles to alternately stretch and contract. ",
      "quelle": "ZME SCIENCE",
      "articleUrl":
        "https://www.zmescience.com/science/news-science/scientists-develop-mechanically-active-adhesive-that-prevents-muscle-loss/",
      "sortKey": 3,
      "language": "en",
      "categoryID": "global_health",
    },
  },
  {
    "metadata": {
      "tags": [],
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "evvo9u5z5a9q",
        },
      },
      "id": "16sW4NKutEnnQIv5qgtpLo",
      "type": "Entry",
      "createdAt": "2022-11-25T11:35:14.544Z",
      "updatedAt": "2022-11-25T11:36:19.243Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment",
        },
      },
      "revision": 2,
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "newsTeaser",
        },
      },
      "locale": "de-DE",
    },
    "fields": {
      "datum": "2022-11-25",
      "headline": "France pilots inclusive shared mobility",
      "layout": "Article",
      "bildSource":
        "https://www.intelligenttransport.com/wp-content/uploads/My-project-1-22-2.jpg",
      "photoCredit": "Image: Omni via intelligenttransport.com",
      "teaserText":
        "After French startup Omni created an ingenious solution that allows most wheelchair models to attach to an e-scooter through a universal fixing, TIER Mobility piloted the accessible e-scooters in France and is planning a wider roll-out.",
      "quelle": "INTELLIGENT TRANSPORT",
      "articleUrl":
        "https://www.intelligenttransport.com/transport-news/141309/tier-mobility-pilots-wheelchair-accessible-e-scooters-france/",
      "sortKey": 2,
      "language": "en",
      "categoryID": "human_rights",
    },
  },
  {
    "metadata": {
      "tags": [],
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "evvo9u5z5a9q",
        },
      },
      "id": "3kULTV4sILQ11lKUOtQeMO",
      "type": "Entry",
      "createdAt": "2022-11-25T11:35:44.969Z",
      "updatedAt": "2022-11-25T11:35:44.969Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment",
        },
      },
      "revision": 1,
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "newsTeaser",
        },
      },
      "locale": "de-DE",
    },
    "fields": {
      "datum": "2022-11-25",
      "headline": "Renewables set to surpass coal in the US",
      "layout": "Article",
      "bildSource":
        "https://static.euronews.com/articles/stories/07/21/23/06/1100x619_cmsv2_a015b856-1195-54ce-8a19-55131dc3d37b-7212306.jpg",
      "photoCredit": "Image: Power Shift Solar vie euronews.com",
      "teaserText":
        "For the first time this year, more than a fifth of all electricity by the end of 2022 will come from hydropower, wind, and solar, exceeding coal at 20 percent and nuclear at 19 percent. The only time this has happened before was during pandemic-related shut-downs.",
      "quelle": "EURONEWS",
      "articleUrl":
        "https://www.euronews.com/green/2022/11/24/renewables-to-produce-more-energy-than-coal-in-the-us-for-the-first-time-this-year",
      "sortKey": 1,
      "language": "en",
    },
  },
  {
    "metadata": {
      "tags": [],
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "evvo9u5z5a9q",
        },
      },
      "id": "Afj5K9qiMPSNF5f6NAl6A",
      "type": "Entry",
      "createdAt": "2022-11-25T11:35:14.458Z",
      "updatedAt": "2022-11-25T11:35:14.458Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment",
        },
      },
      "revision": 1,
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "donationAd",
        },
      },
      "locale": "de-DE",
    },
    "fields": {
      "datum": "2022-11-25",
      "headline": "Support us ✨and help us spread optimism!",
      "layout": "Article",
      "bildManuell": {
        "sys": {
          "type": "Link",
          "linkType": "Asset",
          "id": "2ykn7DSH46uUg1TJc51iJ8",
        },
      },
      "photoCredit": "Image: Chris Lawton/Unsplash",
      "teaserText":
        "Thank you for all your support! As days are getting shorter we all need as much good news as we can get! If you can, please support our work with a monthly donation, every little bit helps! Spread the word, and share optimism! Thank you 🧡",
      "quelle": "GOOD NEWS",
      "articleUrl": "https://donorbox.org/good-news-en",
      "sortKey": 7,
      "language": "en",
    },
  },
  {
    "metadata": {
      "tags": [],
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "evvo9u5z5a9q",
        },
      },
      "id": "2LfT93fpdo7Ull1KeypQ31",
      "type": "Entry",
      "createdAt": "2022-11-24T14:33:22.103Z",
      "updatedAt": "2022-11-24T14:33:22.103Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment",
        },
      },
      "revision": 1,
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "newsTeaser",
        },
      },
      "locale": "de-DE",
    },
    "fields": {
      "datum": "2022-11-24",
      "headline": "The Indigenous mom changing the narrative",
      "layout": "Article",
      "bildSource":
        "https://images.pexels.com/photos/917595/pexels-photo-917595.jpeg",
      "photoCredit": "Image: Ashish Sharma/Pexels",
      "teaserText":
        "A growing number of outspoken indigenous community members want to tell their truths about the Thanksgiving story that differ so much from what is still taught in schools. There's much more to learn today than how to stuff a turkey.",
      "quelle": "ABC NEWS",
      "articleUrl":
        '"https://abcnews.go.com/GMA/Living/indigenous-mom-leads-call-learn-truthsgiving/story?id=92481830  "',
      "sortKey": 2,
      "language": "en",
      "categoryID": "education",
    },
  },
  {
    "metadata": {
      "tags": [],
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "evvo9u5z5a9q",
        },
      },
      "id": "6AgRONJx3MwOzJ1u6rOpPz",
      "type": "Entry",
      "createdAt": "2022-11-24T14:33:22.095Z",
      "updatedAt": "2022-11-24T14:33:22.095Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment",
        },
      },
      "revision": 1,
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "newsTeaser",
        },
      },
      "locale": "de-DE",
    },
    "fields": {
      "datum": "2022-11-24",
      "headline": "EPA world's first astronaut with disability ",
      "layout": "Article",
      "bildSource": "https://static.dw.com/image/63865604_1006.jpg",
      "photoCredit": "Image: François Mori via dw.com",
      "teaserText":
        "British Paralympic John McFall has become the first disabled person ever to get astronaut training. He will work closely on a feasibility programme with designers and engineers to see the requirements for him to go into orbit.",
      "quelle": "DEUTSCHE WELLE",
      "articleUrl":
        "https://www.dw.com/en/european-space-agency-names-first-disabled-astronaut/a-63863836",
      "sortKey": 1,
      "language": "en",
      "categoryID": "human_rights",
    },
  },
  {
    "metadata": {
      "tags": [],
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "evvo9u5z5a9q",
        },
      },
      "id": "5khGyTmaJIiN4jq1e740Kp",
      "type": "Entry",
      "createdAt": "2022-11-24T14:33:22.086Z",
      "updatedAt": "2022-11-24T14:33:22.086Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment",
        },
      },
      "revision": 1,
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "newsTeaser",
        },
      },
      "locale": "de-DE",
    },
    "fields": {
      "datum": "2022-11-24",
      "headline": "Transforming science with hashtags",
      "layout": "Article",
      "bildSource":
        "https://i.guim.co.uk/img/media/493d43760217de3c2c3a42e75a73148781d7f3e4/0_0_3333_5000/master/3333.jpg?width=620&quality=45&dpr=2&s=none",
      "photoCredit": "Image: Tara Pixley/High Country News",
      "teaserText":
        "Scientists of color are rewriting the rules of historically colonial institutions in STEM and academia. 27-year-old Earyn McGee is one of them, engaging with her public through games and inspiring a passion for science through social media.",
      "quelle": "THE GUARDIAN",
      "articleUrl":
        "https://www.theguardian.com/us-news/2022/oct/09/findthatlizard-people-of-color-science-earyn-mcgee",
      "sortKey": 3,
      "language": "en",
      "categoryID": "human_rights",
    },
  },
  {
    "metadata": {
      "tags": [],
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "evvo9u5z5a9q",
        },
      },
      "id": "17RgJx7FLu8x7USnYhSXWF",
      "type": "Entry",
      "createdAt": "2022-11-24T14:33:22.078Z",
      "updatedAt": "2022-11-24T14:33:22.078Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment",
        },
      },
      "revision": 1,
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "newsTeaser",
        },
      },
      "locale": "de-DE",
    },
    "fields": {
      "datum": "2022-11-24",
      "headline": "WhatsApp groups help to share food",
      "layout": "Article",
      "bildSource":
        "https://ichef.bbci.co.uk/news/976/cpsprodpb/13FAC/production/_127463818_ursulajuta'sallotmentsurplus-credit-ursulajuta.jpg.webp",
      "photoCredit": "Image: Ursula Juta via bbc.com",
      "teaserText":
        "The cost of living crisis has sent demand for food aid soaring. Food aid can come in many forms and sizes - not all are official food banks. Some food aid initiatives start with a WhatsApp group for friends and neighbors.",
      "quelle": "BBC",
      "articleUrl": "https://www.bbc.com/news/business-63461678",
      "sortKey": 5,
      "language": "en",
      "categoryID": "digitization",
    },
  },
  {
    "metadata": {
      "tags": [],
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "evvo9u5z5a9q",
        },
      },
      "id": "18ldth3gqk9Y1uPXbpDX5W",
      "type": "Entry",
      "createdAt": "2022-11-24T14:33:22.070Z",
      "updatedAt": "2022-11-24T14:33:22.070Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment",
        },
      },
      "revision": 1,
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "newsTeaser",
        },
      },
      "locale": "de-DE",
    },
    "fields": {
      "datum": "2022-11-24",
      "headline": "This map tells you whose land you're on",
      "layout": "Article",
      "bildSource":
        "https://www.masslive.com/resizer/-Xpx7_39CsT-gPGk1ZrInxaKi0M=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/GTXPR2LYEBAVBIPJUXF6Y6T4D4.png",
      "photoCredit": "Image: Native Land Digital via masslive.com",
      "teaserText":
        "Are you living on Indigenous land? The Canadian non-profit Native Land Digital created a website for you to find out. The interactive, global map that shows Indigenous territories at any given location in North America, South America, Africa, and Australia.",
      "quelle": "MASS LIVE",
      "articleUrl":
        "https://www.masslive.com/native-american-news/2022/11/are-you-living-on-indigenous-land-use-this-map-to-find-out.html",
      "sortKey": 6,
      "language": "en",
      "categoryID": "human_rights",
    },
  },
  {
    "metadata": {
      "tags": [],
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "evvo9u5z5a9q",
        },
      },
      "id": "4sMjG2I1i5eshuTl1gtVSd",
      "type": "Entry",
      "createdAt": "2022-11-24T14:33:22.053Z",
      "updatedAt": "2022-11-24T14:33:22.053Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment",
        },
      },
      "revision": 1,
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "donationAd",
        },
      },
      "locale": "de-DE",
    },
    "fields": {
      "datum": "2022-11-24",
      "headline": "Support us ✨and help us spread optimism!",
      "layout": "Article",
      "bildManuell": {
        "sys": {
          "type": "Link",
          "linkType": "Asset",
          "id": "2ykn7DSH46uUg1TJc51iJ8",
        },
      },
      "photoCredit": "Image: Chris Lawton/Unsplash",
      "teaserText":
        "Thank you for all your support! As days are getting shorter we all need as much good news as we can get! If you can, please support our work with a monthly donation, every little bit helps! Spread the word, and share optimism! Thank you 🧡",
      "quelle": "GOOD NEWS",
      "articleUrl": "https://donorbox.org/good-news-en",
      "sortKey": 7,
      "language": "en",
    },
  },
  {
    "metadata": {
      "tags": [],
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "evvo9u5z5a9q",
        },
      },
      "id": "1gChZwgoxOkx3a6XCGQCGn",
      "type": "Entry",
      "createdAt": "2022-11-24T14:33:22.018Z",
      "updatedAt": "2022-11-24T14:33:22.018Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment",
        },
      },
      "revision": 1,
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "newsTeaser",
        },
      },
      "locale": "de-DE",
    },
    "fields": {
      "datum": "2022-11-24",
      "headline": "First Alaska Native in congress wins full-term",
      "layout": "Article",
      "bildManuell": {
        "sys": {
          "type": "Link",
          "linkType": "Asset",
          "id": "4v6hXIZQkk0QH1jSYqMIco",
        },
      },
      "photoCredit": "Image: via indiancountrytoday.com",
      "teaserText":
        "Mary Peltola, Yup’ik, was re-elected in the Alaska House race. Peltola had become the first Alaska Native to serve in Congress, and the first woman to hold Alaska’s House seat with her win of the special election in August this year. ",
      "quelle": "INDIAN COUNTRY TODAY",
      "articleUrl":
        "https://indiancountrytoday.com/news/mary-peltola-1st-alaska-native-in-congress-wins-full-term",
      "sortKey": 4,
      "language": "en",
      "categoryID": "human_rights",
    },
  },
  {
    "metadata": {
      "tags": [],
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "evvo9u5z5a9q",
        },
      },
      "id": "1ZdeN3uBqTw4eKYjR8snQ2",
      "type": "Entry",
      "createdAt": "2022-11-24T14:13:38.557Z",
      "updatedAt": "2022-11-24T14:18:38.861Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment",
        },
      },
      "revision": 2,
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "newsTeaser",
        },
      },
      "locale": "de-DE",
    },
    "fields": {
      "datum": "2022-11-24",
      "headline":
        "Too Good To Go: Wie du als Sales Manager*in Lebensmittel retten kannst",
      "layout": "Article",
      "label": "SPONSORED ARTICLE",
      "bildManuell": {
        "sys": {
          "type": "Link",
          "linkType": "Asset",
          "id": "7CmLWBvy3v003UF7NBYxAv",
        },
      },
      "photoCredit": "Bild: Too Good To Go",
      "teaserText":
        'Rabattschlachten passen eigentlich nicht zu nachhaltigem Konsum. Damit sich aber mehr Menschen umweltfreundliche Produkte und Geschenke leisten können, gibt es bei GoodBuy bis Sonntag mit dem Code "GOOD15" 15% Rabatt. Mehr Infos ...',
      "quelle": "Too Good To Go",
      "articleUrl":
        "https://goodjobs.eu/blog/article/too-good-to-go-wie-du-als-sales-specialist-lebensmittel-retten-kannst",
      "sortKey": 8,
      "language": "de",
    },
  },
  {
    "metadata": {
      "tags": [],
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "evvo9u5z5a9q",
        },
      },
      "id": "4syl8sJs0zKt5DLBszf9z3",
      "type": "Entry",
      "createdAt": "2022-11-24T14:13:38.577Z",
      "updatedAt": "2022-11-24T14:13:38.577Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment",
        },
      },
      "revision": 1,
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "newsTeaser",
        },
      },
      "locale": "de-DE",
    },
    "fields": {
      "datum": "2022-11-24",
      "headline": "Nachhaltigkeit muss auch sozial sein",
      "layout": "Article",
      "label": "GOOD FAMILY ANZEIGE",
      "bildManuell": {
        "sys": {
          "type": "Link",
          "linkType": "Asset",
          "id": "1TYS0ieQ6wGc1zJL0eDye8",
        },
      },
      "photoCredit": "Bild: GoodBuy ",
      "teaserText":
        "Rabattschlachten passen nicht zu nachhaltigem Konsum. Damit sich aber mehr Menschen umweltfreundliche Produkte und Geschenke leisten können, gibt es bei GoodBuy bis Sonntag einen Soli-Rabatt. Mehr dazu ...",
      "quelle": "GoodBuy",
      "articleUrl":
        "https://www.goodbuy.eu/pages/aktion?utm_medium=referral&utm_source=goodnewsapp&utm_campaign=goodnews-24.11.2022&utm_content=aktion",
      "sortKey": 4,
      "language": "de",
    },
  },
  {
    "metadata": {
      "tags": [],
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "evvo9u5z5a9q",
        },
      },
      "id": "4ONpqhCCZdF2r0EB7iTAqI",
      "type": "Entry",
      "createdAt": "2022-11-24T14:13:38.400Z",
      "updatedAt": "2022-11-24T14:13:38.400Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment",
        },
      },
      "revision": 1,
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "newsTeaser",
        },
      },
      "locale": "de-DE",
    },
    "fields": {
      "datum": "2022-11-24",
      "headline": "Südkorea recycelt Biomüll fast vollständig",
      "layout": "Article",
      "bildManuell": {
        "sys": {
          "type": "Link",
          "linkType": "Asset",
          "id": "Z0P3yzlxKgeoHLaoUMt7a",
        },
      },
      "photoCredit": "Bild: Sarah Chai",
      "teaserText":
        "Südkorea recycelt fast 100 Prozent der Lebensmittelabfälle. Im Rahmen eines landesweiten Kompostier-Programms müssen Lebensmittel seit 2013 in speziellen Tüten entsorgt werden. In den Verwertungsanlagen werden die Tüten entfernt und der Biomüll zu Biogas, Tierfutter oder Dünger recycelt.",
      "quelle": "WDR COSMO",
      "articleUrl":
        "https://www1.wdr.de/mediathek/audio/cosmo/daily-good-news/",
      "sortKey": 1,
      "language": "de",
      "categoryID": "sustainability",
    },
  },
  {
    "metadata": {
      "tags": [],
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "evvo9u5z5a9q",
        },
      },
      "id": "1BpI5spWXHDg5V9p6tPTWp",
      "type": "Entry",
      "createdAt": "2022-11-24T14:13:38.384Z",
      "updatedAt": "2022-11-24T14:13:38.384Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment",
        },
      },
      "revision": 1,
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "newsTeaser",
        },
      },
      "locale": "de-DE",
    },
    "fields": {
      "datum": "2022-11-24",
      "headline": "Deutschland: Frauenquote für Verdienstorden ",
      "layout": "Article",
      "bildManuell": {
        "sys": {
          "type": "Link",
          "linkType": "Asset",
          "id": "1qP9P4MHIWVB36XqGruNrB",
        },
      },
      "photoCredit": "Bild: IMAGO / Eventpress",
      "teaserText":
        "Nur etwa ein Drittel der Verdienstorden gingen in den vergangenen Jahren an Frauen – etwa für großes Engagement in Vereinen oder an Universitäten. Bundespräsident Frank-Walter Steinmeier will künftig 40 Prozent der Verdienstorden an Frauen verleihen und appelliert an alle Bürger:innen, mehr weibliche Vorbilder vorzuschlagen.",
      "quelle": "SPIEGEL ONLINE",
      "articleUrl":
        "https://www.spiegel.de/politik/deutschland/frank-walter-steinmeier-will-kuenftig-40-prozent-der-verdienstorden-an-frauen-verleihen-a-b8c27302-41ac-4c55-bb6f-479530c1116a",
      "sortKey": 2,
      "language": "de",
      "categoryID": "education",
    },
  },
  {
    "metadata": {
      "tags": [],
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "evvo9u5z5a9q",
        },
      },
      "id": "3x7yLYgiYUHhmwklzrdYfz",
      "type": "Entry",
      "createdAt": "2022-11-24T14:13:38.369Z",
      "updatedAt": "2022-11-24T14:13:38.369Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment",
        },
      },
      "revision": 1,
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "newsTeaser",
        },
      },
      "locale": "de-DE",
    },
    "fields": {
      "datum": "2022-11-24",
      "headline": "Neue Heimat für Nandus in Norddeutschland",
      "layout": "Article",
      "bildManuell": {
        "sys": {
          "type": "Link",
          "linkType": "Asset",
          "id": "1desmJszwnmy8sn4veenvw",
        },
      },
      "photoCredit": "Bild: IMAGO / BildFunkMV",
      "teaserText":
        "Die Vogel-Gattung Nandus haben in Norddeutschland eine neue Heimat gefunden: Die Population auf den Feldern und Wiesen der Region gilt als die einzige wildlebende in Europa. Ende Oktober wurden 144 Tiere gezählt  – der Bestand des Vogels ist somit gesichert.",
      "quelle": "ZEIT ONLINE",
      "articleUrl":
        "https://www.zeit.de/news/2022-11/18/deutschlands-wilden-nandus-geht-es-gut-144-tiere-gesichtet",
      "sortKey": 3,
      "language": "de",
      "categoryID": "animal_rights",
    },
  },
  {
    "metadata": {
      "tags": [],
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "evvo9u5z5a9q",
        },
      },
      "id": "2zuKdlvk1gelnvbNH2Ut8R",
      "type": "Entry",
      "createdAt": "2022-11-24T14:13:38.353Z",
      "updatedAt": "2022-11-24T14:13:38.353Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment",
        },
      },
      "revision": 1,
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "newsTeaser",
        },
      },
      "locale": "de-DE",
    },
    "fields": {
      "datum": "2022-11-24",
      "headline": "Wie ein wackelnder Pfosten Strom produziert",
      "layout": "Article",
      "bildManuell": {
        "sys": {
          "type": "Link",
          "linkType": "Asset",
          "id": "41rkvCiav3GGTufY7oFIZB",
        },
      },
      "photoCredit": "Bild: Vortex Bladeless via t3n.de",
      "teaserText":
        "Die Windkraftanlagen des spanischen Unternehmens „Vortex Bladeless“ erzeugen Strom nicht aus der Drehbewegung, sondern aus Schwingungen – ohne Rotoren. Die Pfosten seien lautlos, ungefährlich für Vögel und können in bestehende Bebauungen integriert werden.",
      "quelle": "T3N",
      "articleUrl":
        "https://t3n.de/news/windkraftanlage-pfosten-ohne-rotoren-1514540/",
      "sortKey": 5,
      "language": "de",
      "categoryID": "climate",
    },
  },
  {
    "metadata": {
      "tags": [],
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "evvo9u5z5a9q",
        },
      },
      "id": "3bHX8GwaJyG9MICBLjm0E",
      "type": "Entry",
      "createdAt": "2022-11-24T14:13:38.333Z",
      "updatedAt": "2022-11-24T14:13:38.333Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment",
        },
      },
      "revision": 1,
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "newsTeaser",
        },
      },
      "locale": "de-DE",
    },
    "fields": {
      "datum": "2022-11-24",
      "headline": "Grünes Licht für Laborfleisch",
      "layout": "Article",
      "bildManuell": {
        "sys": {
          "type": "Link",
          "linkType": "Asset",
          "id": "6sXjxG1TOqglSWtnUuNcVe",
        },
      },
      "photoCredit": "Bild: Upside Foods via spiegel.de",
      "teaserText":
        "Ist Fleisch aus dem Labor sicher? Ja, so urteilte die amerikanische Lebensmittelbehörde FDA. Demnach wurde das Hähnchenfleisch aus dem Bioreaktor des kalifornischen Herstellers „Upside Foods“ als unbedenklich für den menschlichen Verzehr einstuft.",
      "quelle": "SPIEGEL ONLINE",
      "articleUrl":
        "https://www.spiegel.de/wissenschaft/usa-behoerde-haelt-laborfleisch-fuer-sicher-a-53696696-70bc-4b19-93ef-b1761f1cdc90",
      "sortKey": 6,
      "language": "de",
      "categoryID": "sustainability",
    },
  },
  {
    "metadata": {
      "tags": [],
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "evvo9u5z5a9q",
        },
      },
      "id": "6i3KiOf7wurS1DqRm3ATN9",
      "type": "Entry",
      "createdAt": "2022-11-24T14:13:38.315Z",
      "updatedAt": "2022-11-24T14:13:38.315Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment",
        },
      },
      "revision": 1,
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "newsTeaser",
        },
      },
      "locale": "de-DE",
    },
    "fields": {
      "datum": "2022-11-24",
      "headline": "Roboter fischt Mikroplastik aus Gewässern",
      "layout": "Article",
      "bildManuell": {
        "sys": {
          "type": "Link",
          "linkType": "Asset",
          "id": "3AWiWXBhwjp5ZPC1wDgW30",
        },
      },
      "photoCredit":
        "Bild: © Roboterfisch Gillbert, Robert Siddall via forschung-und-wissen.de ",
      "teaserText":
        "Die Studentin Eleanor Mackintosh hat im Rahmen des „Natural Robotics Contests“ den Fischroboter Gillbert entwickelt, der Gewässer von Mikroplastik befreit. Der Entwurf des Roboters ist Open-Source und kann kostenfrei heruntergeladen werden. Frohes Basteln!",
      "quelle": "FORSCHUNG UND WISSEN",
      "articleUrl":
        "https://www.forschung-und-wissen.de/nachrichten/technik/roboterfisch-befreit-gewaesser-von-mikroplastik-13376850",
      "sortKey": 7,
      "language": "de",
      "categoryID": "digitization",
    },
  },
  {
    "metadata": {
      "tags": [],
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "evvo9u5z5a9q",
        },
      },
      "id": "33K3e6nSxnNZI4GsYAWp5R",
      "type": "Entry",
      "createdAt": "2022-11-24T14:13:38.282Z",
      "updatedAt": "2022-11-24T14:13:38.282Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment",
        },
      },
      "revision": 1,
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "newsTeaser",
        },
      },
      "locale": "de-DE",
    },
    "fields": {
      "datum": "2022-11-24",
      "headline": "Deine Spende hilft, Good News zu verbreiten",
      "layout": "Article",
      "label": "IN EIGENER SACHE",
      "bildManuell": {
        "sys": {
          "type": "Link",
          "linkType": "Asset",
          "id": "2JddwbJDrjXR3FSPZls5ed",
        },
      },
      "photoCredit": "Bild: Good News",
      "teaserText":
        "Liebe Leser*in! Wir wollen Mut machen, Lösungen zeigen und so einen positiven Wandel anstoßen. Dafür brauchen wir deine Unterstützung! Jeder Beitrag, egal wie groß oder klein, hilft uns dabei, gute Nachrichten in die Welt zu tragen. Dafür sagen wir Danke! ",
      "quelle": "GOOD NEWS",
      "articleUrl": "https://goodnews.eu/unterstuetzen/",
      "sortKey": 9,
      "language": "de",
    },
  },
  {
    "metadata": {
      "tags": [],
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "evvo9u5z5a9q",
        },
      },
      "id": "5EKiuUV4TR8N6S8itxXqxf",
      "type": "Entry",
      "createdAt": "2022-11-23T14:31:58.068Z",
      "updatedAt": "2022-11-23T17:20:59.983Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment",
        },
      },
      "revision": 2,
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "newsTeaser",
        },
      },
      "locale": "de-DE",
    },
    "fields": {
      "datum": "2022-11-23",
      "headline": "Sacred rock carvings return to Tasmania",
      "layout": "Article",
      "bildSource":
        "https://i.guim.co.uk/img/media/0e32d5a9a7ef254c3c58c74f4b8be7c49fb7e9dd/0_0_6419_4284/master/6419.jpg?width=1300&quality=45&dpr=2&s=none",
      "photoCredit": "Image: Sarah Rhodes/EPA via theguardian.com",
      "teaserText":
        "After years of negotiations, an official apology, and a formal transferral of ownership to the Tasmanian Aboriginal community in early 2021, the 14,000-year-old petroglyphs, or luwamakuna, are on their way back to where they belong.",
      "quelle": "THE GUARDIAN",
      "articleUrl":
        "https://www.theguardian.com/australia-news/2022/nov/23/back-where-they-belong-sacred-tasmanian-rock-carvings-to-finally-return-home",
      "sortKey": 4,
      "language": "en",
      "categoryID": "human_rights",
    },
  },
  {
    "metadata": {
      "tags": [],
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "evvo9u5z5a9q",
        },
      },
      "id": "KxgKdbygZ9p4hgi7MuMZb",
      "type": "Entry",
      "createdAt": "2022-11-23T14:31:58.050Z",
      "updatedAt": "2022-11-23T17:20:42.227Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment",
        },
      },
      "revision": 2,
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "newsTeaser",
        },
      },
      "locale": "de-DE",
    },
    "fields": {
      "datum": "2022-11-23",
      "headline": "A mind-controlled wheelchair for tetraplegics",
      "layout": "Article",
      "bildSource":
        "https://cdn.the-scientist.com/assets/articleNo/70777/aImg/48652/thought-controlled-wheelchair-800-l.webp",
      "photoCredit":
        "Image: University of Texas at Austin via the-scientist.com",
      "teaserText":
        "Three people with limited to no mobility were able to navigate a specially designed wheelchair through crowded spaces just by thinking about where they wanted to go. An electrode-studded cap translated the user’s thoughts into movement.",
      "quelle": "THE SCIENTIST",
      "articleUrl":
        "https://www.the-scientist.com/news-opinion/tetraplegic-patients-take-mind-controlled-wheelchair-for-a-spin-70777",
      "sortKey": 6,
      "language": "en",
      "categoryID": "global_health",
    },
  },
  {
    "metadata": {
      "tags": [],
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "evvo9u5z5a9q",
        },
      },
      "id": "4NZAPO5O2K7MzN7bdJsaHa",
      "type": "Entry",
      "createdAt": "2022-11-23T14:31:58.094Z",
      "updatedAt": "2022-11-23T14:31:58.094Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment",
        },
      },
      "revision": 1,
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "newsTeaser",
        },
      },
      "locale": "de-DE",
    },
    "fields": {
      "datum": "2022-11-23",
      "headline": "Study: PV windows cut emissions by 40%",
      "layout": "Article",
      "bildSource":
        "https://www.ecowatch.com/wp-content/uploads/2022/11/freedom-tower.jpg",
      "photoCredit": "Image: Tetra Images / Getty Images via ecowatch.com",
      "teaserText":
        "Research has found that shimmering skyscrapers could reduce their energy use and CO2 emissions by as much as 40% by installing thermally efficient photovoltaic windows and even go beyond net zero by including solar panels.",
      "quelle": "ECOWATCH",
      "articleUrl":
        "https://www.ecowatch.com/solar-windows-glass-buildings-energy-emissions.html",
      "sortKey": 1,
      "language": "en",
      "categoryID": "climate",
    },
  },
  {
    "metadata": {
      "tags": [],
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "evvo9u5z5a9q",
        },
      },
      "id": "3LWguXnYIgMsioCItfICOM",
      "type": "Entry",
      "createdAt": "2022-11-23T14:31:58.085Z",
      "updatedAt": "2022-11-23T14:31:58.085Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment",
        },
      },
      "revision": 1,
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "newsTeaser",
        },
      },
      "locale": "de-DE",
    },
    "fields": {
      "datum": "2022-11-23",
      "headline": "New tech reduces shark bycatch by 90%",
      "layout": "Article",
      "bildSource":
        "https://i.guim.co.uk/img/media/011956d75b95515e8f2f1e7382611e9e2c0f7357/0_241_4000_2400/master/4000.jpg?width=620&quality=45&dpr=2&s=none",
      "photoCredit": "Image: FishTek via eurekalert.com",
      "teaserText":
        "Marine scientists have designed a small battery-powered device known as SharkGuard, that emits short electrical pulses as a deterrent. According to a study, the gadget reduced accidental shark bycatch by 91% and stingrays by 71%,",
      "quelle": "EUREKALERT",
      "articleUrl": "https://www.eurekalert.org/news-releases/970950",
      "sortKey": 2,
      "language": "en",
      "categoryID": "animal_rights",
    },
  },
  {
    "metadata": {
      "tags": [],
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "evvo9u5z5a9q",
        },
      },
      "id": "dTlo402U3TZGjsHh04OH2",
      "type": "Entry",
      "createdAt": "2022-11-23T14:31:58.077Z",
      "updatedAt": "2022-11-23T14:31:58.077Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment",
        },
      },
      "revision": 1,
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "newsTeaser",
        },
      },
      "locale": "de-DE",
    },
    "fields": {
      "datum": "2022-11-23",
      "headline": "Nespresso launches paper-based capsules",
      "layout": "Article",
      "bildSource":
        "https://cdn.pixabay.com/photo/2017/01/05/16/23/coffee-capsules-1955627_1280.jpg",
      "photoCredit": "Image: ralfor/PIxabay",
      "teaserText":
        "The company announced its first-ever paper-based home compostable capsule, which is compatible with existing coffee machines. The bio-capsules will pilot in Switzerland and France but are expected to launch in other countries next year.",
      "quelle": "NEW FOOD MAGAZINE",
      "articleUrl":
        "https://www.newfoodmagazine.com/news/170105/nespresso-innovates-compostable-coffee-capsules/",
      "sortKey": 3,
      "language": "en",
      "categoryID": "sustainability",
    },
  },
  {
    "metadata": {
      "tags": [],
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "evvo9u5z5a9q",
        },
      },
      "id": "4LrJMdFGgBuyZYtcJVvA1G",
      "type": "Entry",
      "createdAt": "2022-11-23T14:31:58.059Z",
      "updatedAt": "2022-11-23T14:31:58.059Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment",
        },
      },
      "revision": 1,
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "newsTeaser",
        },
      },
      "locale": "de-DE",
    },
    "fields": {
      "datum": "2022-11-23",
      "headline": "First woman makes Division 1 baseball team",
      "layout": "Article",
      "bildSource":
        "https://media.npr.org/assets/img/2022/11/21/olivia-pichardo-feature-9a9c117c4fb6a8e7119ad23ca0b94cfbf4a09d3c-s1600-c85.webp",
      "photoCredit": "Image: Brown University Athletics via npr.com",
      "teaserText":
        "Olivia Pichardo, an 18-year-old freshman from Queens, New York, made history by becoming the first woman on a Division I baseball roster. Eighteen women have played on college baseball teams to date, but none on the Division I level.",
      "quelle": "NPR",
      "articleUrl":
        "https://www.npr.org/2022/11/22/1138414416/olivia-pichardo-is-the-first-woman-to-make-the-roster-of-division-i-baseball-tea",
      "sortKey": 5,
      "language": "en",
      "categoryID": "human_rights",
    },
  },
  {
    "metadata": {
      "tags": [],
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "evvo9u5z5a9q",
        },
      },
      "id": "6HuNH2vusXY7IR2tUc9cK1",
      "type": "Entry",
      "createdAt": "2022-11-23T14:31:58.016Z",
      "updatedAt": "2022-11-23T14:31:58.016Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment",
        },
      },
      "revision": 1,
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "donationAd",
        },
      },
      "locale": "de-DE",
    },
    "fields": {
      "datum": "2022-11-23",
      "headline": "Support us ✨and help us spread optimism!",
      "layout": "Article",
      "bildManuell": {
        "sys": {
          "type": "Link",
          "linkType": "Asset",
          "id": "2ykn7DSH46uUg1TJc51iJ8",
        },
      },
      "photoCredit": "Image: Chris Lawton/Unsplash",
      "teaserText":
        "Thank you for all your support! As days are getting shorter we all need as much good news as we can get! If you can, please support our work with a monthly donation, every little bit helps! Spread the word, and share optimism! Thank you 🧡",
      "quelle": "GOOD NEWS",
      "articleUrl": "https://donorbox.org/good-news-en",
      "sortKey": 7,
      "language": "en",
    },
  },
  {
    "metadata": {
      "tags": [],
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "evvo9u5z5a9q",
        },
      },
      "id": "4LJE7feriWPNMEGcx0fWzj",
      "type": "Entry",
      "createdAt": "2022-11-23T12:54:22.928Z",
      "updatedAt": "2022-11-23T12:54:22.928Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment",
        },
      },
      "revision": 1,
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "newsTeaser",
        },
      },
      "locale": "de-DE",
    },
    "fields": {
      "datum": "2022-11-23",
      "headline": "DANKE für eure Unterstützung!",
      "layout": "Article",
      "label": "IN EIGENER SACHE",
      "bildManuell": {
        "sys": {
          "type": "Link",
          "linkType": "Asset",
          "id": "1EWHXId9JHjKILPw0kALHg",
        },
      },
      "photoCredit": "Bild: Good News",
      "teaserText":
        "Liebe Good News-Community, ihr seid die Besten! Uns haben bereits 521 Leser*innen mit 4056,97 Euro unterstützt. Wir sind noch nicht ganz bei unserem Ziel. Damit unsere Personal- und Produktionskosten im November annähernd gedeckt sind, brauchen wir weiterhin eure Unterstützung!",
      "quelle": "GOOD NEWS",
      "articleUrl": "https://goodnews.eu/unterstuetzen/",
      "sortKey": 8,
      "language": "de",
    },
  },
  {
    "metadata": {
      "tags": [],
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "evvo9u5z5a9q",
        },
      },
      "id": "7x8Pmk0Rjen2yQPbM2sULP",
      "type": "Entry",
      "createdAt": "2022-11-23T12:54:22.912Z",
      "updatedAt": "2022-11-23T12:54:22.912Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment",
        },
      },
      "revision": 1,
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "newsTeaser",
        },
      },
      "locale": "de-DE",
    },
    "fields": {
      "datum": "2022-11-23",
      "headline": "Sinnvolle Geschenke für Kinder",
      "layout": "Article",
      "label": "GOOD FAMILY ANZEIGE",
      "bildManuell": {
        "sys": {
          "type": "Link",
          "linkType": "Asset",
          "id": "Z2CrGT8YNhERxA3drmqKR",
        },
      },
      "teaserText":
        "Inklusive Malbücher, nachhaltige Spiele, Trinkflaschen von der Maus und diverse Kinderbücher – bei uns findest du einiges, das du den Kleinen unter den Weihnachtsbaum legen kannst.",
      "quelle": "GoodBuy",
      "articleUrl":
        "https://www.goodbuy.eu/collections/geschenke-und-produkte-fuer-kinder?utm_medium=referral&utm_source=goodnewsapp&utm_campaign=goodnews-23.11.2022&utm_content=collection",
      "sortKey": 4,
      "language": "de",
    },
  },
  {
    "metadata": {
      "tags": [],
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "evvo9u5z5a9q",
        },
      },
      "id": "3p6pfTUIwSxEh1SUGVOuiB",
      "type": "Entry",
      "createdAt": "2022-11-23T12:54:22.898Z",
      "updatedAt": "2022-11-23T12:54:22.898Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment",
        },
      },
      "revision": 1,
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "newsTeaser",
        },
      },
      "locale": "de-DE",
    },
    "fields": {
      "datum": "2022-11-23",
      "headline": "Mit dem Klimarechner Energie und Geld sparen",
      "layout": "Article",
      "bildManuell": {
        "sys": {
          "type": "Link",
          "linkType": "Asset",
          "id": "2NU8xy080h78zqe9zuyqjW",
        },
      },
      "photoCredit": "Bild: Unsplash / Olena Sergienko",
      "teaserText":
        "Beim Klimaschutz stellt sich oft das Gefühl ein, dass der eigene kleine Beitrag keinen großen Unterschied macht – ein Trugschluss. Mit dem SZ-Klimarechner kannst du dir berechnen lassen, wie viel CO2 du einsparst, wenn du z. B. vom Auto aufs Rad umsteigen würdest.",
      "quelle": "SÜDDEUTSCHE ZEITUNG",
      "articleUrl":
        "https://www.sueddeutsche.de/projekte/artikel/wissen/klimakrise-autofahren-co2-e800062/",
      "sortKey": 7,
      "language": "de",
      "categoryID": "climate",
    },
  },
  {
    "metadata": {
      "tags": [],
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "evvo9u5z5a9q",
        },
      },
      "id": "507XXAL6hiE1uUYmX28NtL",
      "type": "Entry",
      "createdAt": "2022-11-23T12:54:22.881Z",
      "updatedAt": "2022-11-23T12:54:22.881Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment",
        },
      },
      "revision": 1,
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "newsTeaser",
        },
      },
      "locale": "de-DE",
    },
    "fields": {
      "datum": "2022-11-23",
      "headline": "Entsalzungsanlage produziert Trinkwasser dank Wellenenergie",
      "layout": "Article",
      "bildManuell": {
        "sys": {
          "type": "Link",
          "linkType": "Asset",
          "id": "ckhzK0XBOu0zSwMuC6p0A",
        },
      },
      "photoCredit": "Bild: Oneka via trendsderzukunft.de",
      "teaserText":
        "Die Firma „Oneka“ hat aus recycelten Plastikflaschen eine Anlage entwickelt, die Salzwasser in Trinkwasser umwandelt und mit der Energie von Wellen betrieben wird. So könnten 30.000 bis 50.000 Liter Frischwasser pro Tag produziert werden.",
      "quelle": "TRENDS DER ZUKUNFT",
      "articleUrl":
        "https://www.trendsderzukunft.de/oneka-iceberg-diese-entsalzungsanlage-arbeitet-nur-mit-der-energie-der-wellen/",
      "sortKey": 6,
      "language": "de",
      "categoryID": "sustainability",
    },
  },
  {
    "metadata": {
      "tags": [],
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "evvo9u5z5a9q",
        },
      },
      "id": "7zcIM9ZkrYR8aXpRTuZWK7",
      "type": "Entry",
      "createdAt": "2022-11-23T12:54:22.863Z",
      "updatedAt": "2022-11-23T12:54:22.863Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment",
        },
      },
      "revision": 1,
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "newsTeaser",
        },
      },
      "locale": "de-DE",
    },
    "fields": {
      "datum": "2022-11-23",
      "headline": "Ziegelsteine aus Plastik made in Kenia",
      "layout": "Article",
      "bildManuell": {
        "sys": {
          "type": "Link",
          "linkType": "Asset",
          "id": "3PaoRlTBEKvBmleA7pVqxI",
        },
      },
      "photoCredit": "Bild: Impacc via 1e9.community",
      "teaserText":
        "Unmengen von Plastikmüll in Kenia brachten Nzambi Matee 2017 auf die Idee, ihr Start-up „Gjenge Makers“ zu gründen: Statt teurem Beton nutzt sie zerkleinertes Plastik für die Herstellung von Ziegeln, mit denen Parkplätze, Schulhöfe und Gehwege befestigt werden.",
      "quelle": "1E9 COMMUNITY",
      "articleUrl":
        "https://1e9.community/t/ziegelsteine-aus-plastikmuell-die-erfolgsgeschichte-des-start-ups-gjenge-makers-aus-kenia/18257",
      "sortKey": 5,
      "language": "de",
      "categoryID": "sustainability",
    },
  },
  {
    "metadata": {
      "tags": [],
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "evvo9u5z5a9q",
        },
      },
      "id": "1GqL6S1iX6A7kWOMEUl3TR",
      "type": "Entry",
      "createdAt": "2022-11-23T12:54:22.828Z",
      "updatedAt": "2022-11-23T12:54:22.828Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment",
        },
      },
      "revision": 1,
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "newsTeaser",
        },
      },
      "locale": "de-DE",
    },
    "fields": {
      "datum": "2022-11-23",
      "headline": "Schmerzen lindern ohne Opiate",
      "layout": "Article",
      "bildManuell": {
        "sys": {
          "type": "Link",
          "linkType": "Asset",
          "id": "hX3YSE9XoBUYuY2GAMBQh",
        },
      },
      "photoCredit": "Bild: FAU / Stefan Löber",
      "teaserText":
        "Opiate werden eingesetzt, um starke Schmerzen zu lindern. Sie haben jedoch gravierende Nachteile und können abhängig machen. Eine Forschungsgruppe hat nun Substanzen entwickelt, die Adrenalin- statt Opioid-Rezeptoren aktivieren, und ähnlich schmerzlindernd wirken –  aber ohne gefährliche Nebenwirkungen.",
      "quelle": "SPEKTRUM",
      "articleUrl":
        "https://www.spektrum.de/news/wirkstoffentwicklung-schmerzfrei-ohne-opiate/2078676",
      "sortKey": 3,
      "language": "de",
      "categoryID": "global_health",
    },
  },
  {
    "metadata": {
      "tags": [],
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "evvo9u5z5a9q",
        },
      },
      "id": "1LSL5Rg8NOczZtuFCmxB9Q",
      "type": "Entry",
      "createdAt": "2022-11-23T12:54:22.812Z",
      "updatedAt": "2022-11-23T12:54:22.812Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment",
        },
      },
      "revision": 1,
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "newsTeaser",
        },
      },
      "locale": "de-DE",
    },
    "fields": {
      "datum": "2022-11-23",
      "headline": "Mit Klebeband und Plastikfolie Strom erzeugen",
      "layout": "Article",
      "bildManuell": {
        "sys": {
          "type": "Link",
          "linkType": "Asset",
          "id": "6bbzVBeY7NcGc6ooTH7TKn",
        },
      },
      "photoCredit": "Symbolbild: IMAGO / Panthermedia",
      "teaserText":
        "Doppelseitiges Klebeband und eine alubeschichtete Plastikfolie: Allein mit diesen Alltagsgegenständen ist es Forschenden der University of Alabama gelungen, Strom zu erzeugen. Etwa 400 LEDs konnten dank des triboelektrischen Nanogenerators mit Strom versorgt werden.",
      "quelle": "SCINEXX",
      "articleUrl":
        "https://www.scinexx.de/news/energie/strom-aus-dem-klebeband/",
      "sortKey": 2,
      "language": "de",
      "categoryID": "sustainability",
    },
  },
  {
    "metadata": {
      "tags": [],
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "evvo9u5z5a9q",
        },
      },
      "id": "1VZ8LNg0CGjViWFAR3fLHJ",
      "type": "Entry",
      "createdAt": "2022-11-23T12:54:22.769Z",
      "updatedAt": "2022-11-23T12:54:22.769Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment",
        },
      },
      "revision": 1,
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "newsTeaser",
        },
      },
      "locale": "de-DE",
    },
    "fields": {
      "datum": "2022-11-23",
      "headline": "Die Katholische Kirche lockert ihr Arbeitsrecht",
      "layout": "Article",
      "bildManuell": {
        "sys": {
          "type": "Link",
          "linkType": "Asset",
          "id": "2oS17xPl9FOwAoZSe9sa7c",
        },
      },
      "photoCredit": "Bild: IMAGO / Ralph Peters",
      "teaserText":
        "Die katholische Kirche in Deutschland hat beschlossen, ihr Arbeitsrecht zu lockern. Kirchliche Angestellte, die zum zweiten Mal heiraten oder in einer gleichgeschlechtlichen Ehe leben, müssen in Zukunft beispielsweise keine Kündigung mehr fürchten.",
      "quelle": "TAGESSCHAU",
      "articleUrl":
        "https://www.tagesschau.de/inland/kirchliches-arbeitsrecht-101.html",
      "sortKey": 1,
      "language": "de",
      "categoryID": "human_rights",
    },
  },
  {
    "metadata": {
      "tags": [],
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "evvo9u5z5a9q",
        },
      },
      "id": "6scr3bAZ8Us9Y3shRGgjA2",
      "type": "Entry",
      "createdAt": "2022-11-22T16:43:12.556Z",
      "updatedAt": "2022-11-22T16:43:12.556Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment",
        },
      },
      "revision": 1,
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "newsTeaser",
        },
      },
      "locale": "de-DE",
    },
    "fields": {
      "datum": "2022-11-22",
      "headline": "Kenya bans export of lucrative baobab trees",
      "layout": "Article",
      "bildSource":
        "https://images.unsplash.com/photo-1590426911380-bd4a61d4d3ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2002&q=80",
      "photoCredit": "Image: Jaques Dillies/Unsplash",
      "teaserText":
        "Amid public outcry, Kenya revoked a permit and banned the export of baobab trees until further regularization. The trees can live up to 2,5000 years, their fruit is considered a superfood, and they provide a habitat for numerous species of insects, reptiles, and birds.",
      "quelle": "ALL AFRICA",
      "articleUrl": "https://allafrica.com/stories/202211220291.html",
      "sortKey": 1,
      "language": "en",
      "categoryID": "sustainability",
    },
  },
  {
    "metadata": {
      "tags": [],
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "evvo9u5z5a9q",
        },
      },
      "id": "6l4M4k1QhHiTlpBsnYhQYg",
      "type": "Entry",
      "createdAt": "2022-11-22T16:43:12.548Z",
      "updatedAt": "2022-11-22T16:43:12.548Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment",
        },
      },
      "revision": 1,
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "newsTeaser",
        },
      },
      "locale": "de-DE",
    },
    "fields": {
      "datum": "2022-11-22",
      "headline": "Lost pigeon rediscovered Papua New Guinea",
      "layout": "Article",
      "bildSource":
        "https://www.birdlife.org/wp-content/uploads/2022/11/IMG_0027-scaled.jpg",
      "photoCredit": "Image: via birdlife.org",
      "teaserText":
        "A  pheasant-pigeon subspecies lost to science has been caught on film by a remote camera trap on an island off eastern Papua New Guinea. It's the first time the large, ground-dwelling bird was spotted since described in 1883.",
      "quelle": "BIRD LIFE",
      "articleUrl":
        "https://www.birdlife.org/news/2022/11/21/large-pigeon-lost-to-science-for-140-years-rediscovered-in-papua-new-guinea/",
      "sortKey": 2,
      "language": "en",
      "categoryID": "animal_rights",
    },
  },
  {
    "metadata": {
      "tags": [],
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "evvo9u5z5a9q",
        },
      },
      "id": "596jAUoLjaj7AKYS1MrCEk",
      "type": "Entry",
      "createdAt": "2022-11-22T16:43:12.539Z",
      "updatedAt": "2022-11-22T16:43:12.539Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment",
        },
      },
      "revision": 1,
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "newsTeaser",
        },
      },
      "locale": "de-DE",
    },
    "fields": {
      "datum": "2022-11-22",
      "headline": "New tech destroys tumors with nanobubbles",
      "layout": "Article",
      "bildSource":
        "https://images.pexels.com/photos/220989/pexels-photo-220989.jpeg",
      "photoCredit": "Image: Pixabay/Pexels",
      "teaserText":
        "A new technology developed at Tel Aviv University uses a combination of nanobubbles injected into the bloodstream and ultrasound to destroy cancerous tumors in a targeted, non-invasive manner, apt for patients who are unfit for surgery.",
      "quelle": "PHYS.ORG",
      "articleUrl":
        "https://phys.org/news/2022-11-combination-ultrasound-nanobubbles-cancerous-tumors.html",
      "sortKey": 3,
      "language": "en",
      "categoryID": "global_health",
    },
  },
  {
    "metadata": {
      "tags": [],
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "evvo9u5z5a9q",
        },
      },
      "id": "6NAGZ2M9NdpouD63rqdR04",
      "type": "Entry",
      "createdAt": "2022-11-22T16:43:12.528Z",
      "updatedAt": "2022-11-22T16:43:12.528Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment",
        },
      },
      "revision": 1,
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "newsTeaser",
        },
      },
      "locale": "de-DE",
    },
    "fields": {
      "datum": "2022-11-22",
      "headline": "Detroit is getting two EV-charging roads",
      "layout": "Article",
      "bildSource":
        "https://www.ecowatch.com/wp-content/uploads/2022/11/ewscripps.brightspotcdn.png",
      "photoCredit": "Image: via ecowatch.com",
      "teaserText":
        "The auto capital of America is building the first wireless electric road system in the US, expected to be fully functional by 2023. Two short roads will be equipped with coils that transfer magnetic energy to special receivers mounted under EVs.  ",
      "quelle": "ECOWATCH",
      "articleUrl": "https://www.ecowatch.com/ev-charging-roads-detroit.html",
      "sortKey": 4,
      "language": "en",
      "categoryID": "sustainability",
    },
  },
  {
    "metadata": {
      "tags": [],
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "evvo9u5z5a9q",
        },
      },
      "id": "41j0MYjGADwgnX8nS4gCWJ",
      "type": "Entry",
      "createdAt": "2022-11-22T16:43:12.508Z",
      "updatedAt": "2022-11-22T16:43:12.508Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment",
        },
      },
      "revision": 1,
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "newsTeaser",
        },
      },
      "locale": "de-DE",
    },
    "fields": {
      "datum": "2022-11-22",
      "headline": "A 17,000-student university votes to go vegan",
      "layout": "Article",
      "bildSource":
        "https://vegnews.com/media/W1siZiIsIjMzNzY3L1ZlZ05ld3MuU3RpcmxpbmdVbml2ZXJzaXR5VmVnYW5CeTIwMjUuU3RpcmxpbmdVbml2ZXJzaXR5LTMgKDEpLmpwZyJdLFsicCIsImNyb3BfcmVzaXplZCIsIjE1OTh4OTQ0KzArMCIsIjE2MDB4OTQ2XiIseyJmb3JtYXQiOiJhdmlmIn1dXQ/VegNews.StirlingUniversityVeganBy2025.StirlingUniversity-3%20%281%29.jpg?sha=fffb107ffa6456ed",
      "photoCredit": "Image: Stirling Universtiy via vegnews.com",
      "teaserText":
        "The student union at Scotland's Stirling University has voted to make campus menus 100 percent vegan by 2025 in a collective effort to support a more sustainable food system after a motion put forward by the Plant-Based Universities campaign.",
      "quelle": "VEG NEWS",
      "articleUrl":
        "https://vegnews.com/2022/11/Stirling-university-go-vegan-2025",
      "sortKey": 5,
      "language": "en",
      "categoryID": "sustainability",
    },
  },
  {
    "metadata": {
      "tags": [],
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "evvo9u5z5a9q",
        },
      },
      "id": "3r2xubIfcVB0elgTl9KqTD",
      "type": "Entry",
      "createdAt": "2022-11-22T16:43:12.480Z",
      "updatedAt": "2022-11-22T16:43:12.480Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment",
        },
      },
      "revision": 1,
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "newsTeaser",
        },
      },
      "locale": "de-DE",
    },
    "fields": {
      "datum": "2022-11-22",
      "headline": "PETA wants you to invent vegan wool",
      "layout": "Article",
      "bildSource":
        "https://images.pexels.com/photos/891607/pexels-photo-891607.jpeg",
      "photoCredit": "Image: Pauñ Seling/Pexels",
      "teaserText":
        "Animal rights organization PETA has launched the Vegan Wool Challenge with a one million US Dollar reward, calling on designers and researchers to develop a vegan alternative to sheep's wool with a lower environmental impact.",
      "quelle": "DEZEEN",
      "articleUrl":
        "https://www.dezeen.com/2022/11/22/peta-vegan-wool-challenge/",
      "sortKey": 6,
      "language": "en",
      "categoryID": "animal_rights",
    },
  },
  {
    "metadata": {
      "tags": [],
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "evvo9u5z5a9q",
        },
      },
      "id": "7qYLjJohxlJnCSDVvXitwK",
      "type": "Entry",
      "createdAt": "2022-11-22T16:42:18.110Z",
      "updatedAt": "2022-11-22T16:42:18.110Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment",
        },
      },
      "revision": 1,
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "donationAd",
        },
      },
      "locale": "de-DE",
    },
    "fields": {
      "datum": "2022-11-22",
      "headline": "Thank you for your support! We need it 🌱",
      "layout": "Article",
      "bildManuell": {
        "sys": {
          "type": "Link",
          "linkType": "Asset",
          "id": "3YnH274KxTvzPglrTHzOoc",
        },
      },
      "photoCredit": "Image: Unsplash CC0 Public Domain",
      "teaserText":
        "As a donor-based setup we can't exist without your support! Monthly donations help us to plan ahead of time - and just half  dollar per reader keeps us going. You can't chip in? Follow us on social media, share our app and help us spread the word! We all need good news. Thank you ❤️",
      "quelle": "GOOD NEWS",
      "articleUrl": "https://donorbox.org/good-news-en",
      "sortKey": 8,
      "language": "en",
    },
  },
  {
    "metadata": {
      "tags": [],
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "evvo9u5z5a9q",
        },
      },
      "id": "1EeyZpmfkoKfoz98vCAPbg",
      "type": "Entry",
      "createdAt": "2022-11-22T14:16:21.299Z",
      "updatedAt": "2022-11-22T14:16:21.299Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment",
        },
      },
      "revision": 1,
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "newsTeaser",
        },
      },
      "locale": "de-DE",
    },
    "fields": {
      "datum": "2022-11-22",
      "headline": "Handel mit Horn von Nashörnern bleibt verboten ",
      "layout": "Article",
      "bildManuell": {
        "sys": {
          "type": "Link",
          "linkType": "Asset",
          "id": "5XSiB7VWwKB8SV3knYEpGy",
        },
      },
      "photoCredit": "Bild: Unsplash / redcharlie",
      "teaserText":
        "Freigabe-Versuche auf der Weltartenkonferenz in Panama sind gescheitert: Das 45 Jahre alte Handelsverbot mit Nashorn-Horn bleibt bestehen. Namibia darf zu Naturschutzzwecken Nashörner in natürliche Lebensgebiete in Afrika verteilen – der Export von Jagdtrophäen ist aber ausgeschlossen.",
      "quelle": "ZEIT ONLINE",
      "articleUrl":
        "https://www.zeit.de/wissen/umwelt/2022-11/eswahiti-artenkonferenz-nashoerner-horn-handel-namibia",
      "sortKey": 1,
      "language": "de",
      "categoryID": "animal_rights",
    },
  },
  {
    "metadata": {
      "tags": [],
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "evvo9u5z5a9q",
        },
      },
      "id": "5Hig1Tjv7BvBniVXZInWWX",
      "type": "Entry",
      "createdAt": "2022-11-22T14:16:21.274Z",
      "updatedAt": "2022-11-22T14:16:21.274Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment",
        },
      },
      "revision": 1,
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "newsTeaser",
        },
      },
      "locale": "de-DE",
    },
    "fields": {
      "datum": "2022-11-22",
      "headline": "Mini-Organe auf Mikrochip ersetzen Tierversuche",
      "layout": "Article",
      "bildManuell": {
        "sys": {
          "type": "Link",
          "linkType": "Asset",
          "id": "1IWvLeF0oTuPOApiaD3cqV",
        },
      },
      "photoCredit": "Bild: Pexels / Pixabay",
      "teaserText":
        "Adieu Tierversuche: Miniaturmodelle von Organen, die im Labor hergestellt werden, könnten künftig Versuche mit Tieren in der pharmazeutischen Forschung überflüssig machen. Das Start-up „Norganoid“  hat Mini-Organe auf Mikrochips entwickelt, die die Prozesse im menschlichen Körper realistisch darstellen. ",
      "quelle": "DER STANDARD ",
      "articleUrl":
        "https://www.derstandard.at/story/2000140870875/organe-auf-mikrochips-koennen-tierversuche-ersetzen",
      "sortKey": 2,
      "language": "de",
      "categoryID": "animal_rights",
    },
  },
  {
    "metadata": {
      "tags": [],
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "evvo9u5z5a9q",
        },
      },
      "id": "7CUT4VHd3nAkPh6qw5fZsN",
      "type": "Entry",
      "createdAt": "2022-11-22T14:16:21.252Z",
      "updatedAt": "2022-11-22T14:16:21.252Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment",
        },
      },
      "revision": 1,
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "newsTeaser",
        },
      },
      "locale": "de-DE",
    },
    "fields": {
      "datum": "2022-11-22",
      "headline": "Arktische Tiefsee: Gigantischer CO2-Speicher",
      "layout": "Article",
      "bildManuell": {
        "sys": {
          "type": "Link",
          "linkType": "Asset",
          "id": "6TfQMG8FR088nCdBNxO8hz",
        },
      },
      "photoCredit": "Symbolbid: Pexels / Tolga Ahmetler",
      "teaserText":
        "Laut einer neuen Studie des Alfred-Wegener-Instituts für Polar- und Meeresforschung werden bis zu 3,6 Millionen Tonnen CO2 jedes Jahr in der arktischen Tiefsee gespeichert und dort über Jahrtausende gebunden. Die Antarktis ist somit einer der bedeutendsten Kohlenstoffsenken der Welt. ",
      "quelle": "MDR WISSEN",
      "articleUrl":
        "https://www.mdr.de/wissen/kohlenstoff-speicher-in-arktischer-tiefsee-100.html",
      "sortKey": 3,
      "language": "de",
      "categoryID": "sustainability",
    },
  },
  {
    "metadata": {
      "tags": [],
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "evvo9u5z5a9q",
        },
      },
      "id": "3MR83fiTHpxBZHA3d1i4NT",
      "type": "Entry",
      "createdAt": "2022-11-22T14:16:21.232Z",
      "updatedAt": "2022-11-22T14:16:21.232Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment",
        },
      },
      "revision": 1,
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "newsTeaser",
        },
      },
      "locale": "de-DE",
    },
    "fields": {
      "datum": "2022-11-22",
      "headline": "Endlich da: Die GoodBox Humanity for All",
      "layout": "Article",
      "label": "GOOD FAMILY ANZEIGE",
      "bildManuell": {
        "sys": {
          "type": "Link",
          "linkType": "Asset",
          "id": "4Xmd0Mkr30zKf2ziCGtfwl",
        },
      },
      "photoCredit": "Bild: GoodBuy ",
      "teaserText":
        "Verschiedene Social Startups haben sich zusammengetan und eine limitierte GoodBox erstellt, deren Gewinn gespendet wird. Das bedeutet 10 nachhaltige Produkte für dich und 30 € Spende an SOS Humanity. Zusammen für nur 59,99 €.",
      "quelle": "GoodBuy",
      "articleUrl":
        "https://www.goodbuy.eu/products/goodbox-humanity-for-all?utm_medium=referral&utm_source=goodnewsapp&utm_campaign=goodnews-22.11.2022&utm_content=goodbox",
      "sortKey": 4,
      "language": "de",
    },
  },
  {
    "metadata": {
      "tags": [],
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "evvo9u5z5a9q",
        },
      },
      "id": "39iQucrhCqmvmcoq47AEhE",
      "type": "Entry",
      "createdAt": "2022-11-22T14:16:21.212Z",
      "updatedAt": "2022-11-22T14:16:21.212Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment",
        },
      },
      "revision": 1,
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "newsTeaser",
        },
      },
      "locale": "de-DE",
    },
    "fields": {
      "datum": "2022-11-22",
      "headline": "Neues Medikament für Typ-1-Diabetes wird zugelassen",
      "layout": "Article",
      "bildManuell": {
        "sys": {
          "type": "Link",
          "linkType": "Asset",
          "id": "L1p7riF9Z4SVO8vzx3ZY0",
        },
      },
      "photoCredit": "Bild: Pexesl / Polina Tankilevitch",
      "teaserText":
        "Erstmals wurde ein Medikament zugelassen, das den Ausbruch von Diabetes-Typ-1 verzögern kann. Die amerikanische Arzneimittelbehörde FDA genehmigte die Therapie für Menschen, die frühe Anzeichen der Krankheit zeigen.",
      "quelle": "WDR COSMO",
      "articleUrl":
        "https://www1.wdr.de/mediathek/audio/cosmo/daily-good-news/",
      "sortKey": 5,
      "language": "de",
      "categoryID": "global_health",
    },
  },
  {
    "metadata": {
      "tags": [],
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "evvo9u5z5a9q",
        },
      },
      "id": "7dDyomcSY7491YOvnX3Vzc",
      "type": "Entry",
      "createdAt": "2022-11-22T14:16:21.190Z",
      "updatedAt": "2022-11-22T14:16:21.190Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment",
        },
      },
      "revision": 1,
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "newsTeaser",
        },
      },
      "locale": "de-DE",
    },
    "fields": {
      "datum": "2022-11-22",
      "headline": "Satelittenschüsseln werden zu Solaranlagen",
      "layout": "Article",
      "bildManuell": {
        "sys": {
          "type": "Link",
          "linkType": "Asset",
          "id": "7nxoc6Upa4V5ihwd3W3uF2",
        },
      },
      "photoCredit": "Bild: CKW via trendsderzukuft.de",
      "teaserText":
        "In den Schweizer Alpen sind riesige Satellitenschüsseln stillgelegt worden. Der Abtransport ist zu aufwendig. Die Lösung: Zwei Schweizer Unternehmen haben die ausgedienten Schüsseln mit Solarmodulen ausgestattet, die jährlich ca. 110.000 kWh Ökostrom produzieren können.",
      "quelle": "TRENDS DER ZUKUNFT ",
      "articleUrl":
        "https://www.trendsderzukunft.de/in-den-schweizer-bergen-riesige-satellitenschuessel-wird-zu-gigantischer-solaranlage/",
      "sortKey": 6,
      "language": "de",
      "categoryID": "climate",
    },
  },
  {
    "metadata": {
      "tags": [],
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "evvo9u5z5a9q",
        },
      },
      "id": "4guxtCQ0H6Zd3ASaYmLLXo",
      "type": "Entry",
      "createdAt": "2022-11-22T14:16:21.159Z",
      "updatedAt": "2022-11-22T14:16:21.159Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment",
        },
      },
      "revision": 1,
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "newsTeaser",
        },
      },
      "locale": "de-DE",
    },
    "fields": {
      "datum": "2022-11-22",
      "headline": "Eco-Reederei in den Niederlanden",
      "layout": "Article",
      "bildManuell": {
        "sys": {
          "type": "Link",
          "linkType": "Asset",
          "id": "2RYSnNUixqKMq0yQgR0aEQ",
        },
      },
      "photoCredit": "Bild: Miriam Petzold via enorm-magazin.de",
      "teaserText":
        "Seefahrer Jorne Langelaan will Güter klimaneutral über die Ozeane transportieren – mit der Kraft des Windes. Dafür baut er Segelfrachter in den Niederlanden.",
      "quelle": "GOOD IMPACT",
      "articleUrl":
        "https://enorm-magazin.de/wirtschaft/logistik-transport/segelfrachter-gegen-die-klimakrise",
      "sortKey": 7,
      "language": "de",
      "categoryID": "education",
    },
  },
  {
    "metadata": {
      "tags": [],
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "evvo9u5z5a9q",
        },
      },
      "id": "5JUKsGBxn4dyY9DbDxOFJw",
      "type": "Entry",
      "createdAt": "2022-11-22T14:16:21.112Z",
      "updatedAt": "2022-11-22T14:16:21.112Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment",
        },
      },
      "revision": 1,
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "newsTeaser",
        },
      },
      "locale": "de-DE",
    },
    "fields": {
      "datum": "2022-11-22",
      "headline": "Gutes aus der Tierwelt",
      "layout": "Article",
      "label": "IN EIGENER SACHE",
      "bildManuell": {
        "sys": {
          "type": "Link",
          "linkType": "Asset",
          "id": "2MRD882AI9YhEr8Q932TUU",
        },
      },
      "photoCredit": "Bild: Good News",
      "teaserText":
        "Ich bin Hundemama und mir bricht es das Herz, wenn ich Tiere leiden sehe. Deshalb liegen mir die Good News zum Erhalt des Exportverbots von Nashorn-Horn und der Möglichkeit, durch Technologie auf Tierversuche zu verzichten, besonders am Herzen. Damit wir euch auch weiterhin mit guten Tiernachrichten versorgen können, brauchen wir eure Unterstützung. Vielen Dank und liebe Grüße, Selina ",
      "quelle": "GOOD NEWS",
      "articleUrl": "https://goodnews.eu/unterstuetzen/",
      "sortKey": 8,
      "language": "de",
    },
  },
  {
    "metadata": {
      "tags": [],
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "evvo9u5z5a9q",
        },
      },
      "id": "7JteN9bpqAa1gu9lsDyDr3",
      "type": "Entry",
      "createdAt": "2022-11-21T16:52:45.255Z",
      "updatedAt": "2022-11-21T16:55:53.874Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment",
        },
      },
      "revision": 2,
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "donationAd",
        },
      },
      "locale": "de-DE",
    },
    "fields": {
      "datum": "2022-11-21",
      "headline": "Happy Monday! ✨thank you for your support!",
      "layout": "Article",
      "bildManuell": {
        "sys": {
          "type": "Link",
          "linkType": "Asset",
          "id": "3YnH274KxTvzPglrTHzOoc",
        },
      },
      "photoCredit": "Image: Chris Lawton/Unsplash",
      "teaserText":
        "As days are getting shorter and many of us are facing major challenges, we all need as much good news as we can get. If you can, please support our work, every little bit helps! Spread the word, and share optimism! Take care 🧡",
      "quelle": "GOOD NEWS",
      "articleUrl": "https://donorbox.org/good-news-en",
      "sortKey": 7,
      "language": "en",
    },
  },
  {
    "metadata": {
      "tags": [],
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "evvo9u5z5a9q",
        },
      },
      "id": "1NoJ7OWlz6mbeKCViKWyp9",
      "type": "Entry",
      "createdAt": "2022-11-21T16:52:45.357Z",
      "updatedAt": "2022-11-21T16:55:10.006Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment",
        },
      },
      "revision": 2,
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "newsTeaser",
        },
      },
      "locale": "de-DE",
    },
    "fields": {
      "datum": "2022-11-21",
      "headline": "Threatened shark species finally get protection",
      "layout": "Article",
      "bildSource":
        "https://ichef.bbci.co.uk/news/976/cpsprodpb/AF75/production/_127671944_blacktipreefsharkfrenchpolynesiahannesklosterman-1.jpg.webp",
      "photoCredit": "Image: Hannes Klostermann via bbc.com",
      "teaserText":
        "Two shark families of more than fifty species that make up over half of the trade in shark fins will be given special protection. The landmark vote will finally bring these endangered predators to the list of species protected under global trade rules.",
      "quelle": "BBC",
      "articleUrl": "https://www.bbc.com/news/science-environment-63670072",
      "sortKey": 1,
      "language": "en",
      "categoryID": "animal_rights",
    },
  },
  {
    "metadata": {
      "tags": [],
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "evvo9u5z5a9q",
        },
      },
      "id": "2GmIqfVdaH3XQdBEef3M2d",
      "type": "Entry",
      "createdAt": "2022-11-21T16:52:45.340Z",
      "updatedAt": "2022-11-21T16:52:45.340Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment",
        },
      },
      "revision": 1,
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "newsTeaser",
        },
      },
      "locale": "de-DE",
    },
    "fields": {
      "datum": "2022-11-21",
      "headline": "New floating solar farm follows the sun",
      "layout": "Article",
      "bildSource": "https://ychef.files.bbci.co.uk/1600x900/p0dgctzb.webp",
      "photoCredit": "Image: via bbc.com",
      "teaserText":
        "Proteus, SolarisFloat's artificial island, is a 38-meter-wide circular system comprised of 180 modular, double-sided, floating solar panels that can tilt to follow the sun's trajectory as it arcs across the sky, generating up to 40 percent more energy.",
      "quelle": "BBC",
      "articleUrl":
        "https://www.bbc.com/future/article/20221116-the-floating-solar-panels-that-track-the-sun",
      "sortKey": 2,
      "language": "en",
      "categoryID": "sustainability",
    },
  },
  {
    "metadata": {
      "tags": [],
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "evvo9u5z5a9q",
        },
      },
      "id": "2Y6YVE4nWKQH3H3TW13yrM",
      "type": "Entry",
      "createdAt": "2022-11-21T16:52:45.332Z",
      "updatedAt": "2022-11-21T16:52:45.332Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment",
        },
      },
      "revision": 1,
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "newsTeaser",
        },
      },
      "locale": "de-DE",
    },
    "fields": {
      "datum": "2022-11-21",
      "headline": "FDA approves treatment that delays Diabetes ",
      "layout": "Article",
      "bildSource":
        "https://images.unsplash.com/photo-1599814516324-66aa0bf16425?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
      "photoCredit": "Image: Diabetesmagazijn.nl/Unsplash",
      "teaserText":
        "Last week, the FDA approved a treatment that delays the onset of Type 1 diabetes, saving patients years of taking insulin and monitoring blood sugar. The step is the first towards preventing the disease instead of just managing it.",
      "quelle": "USA TODAY",
      "articleUrl":
        "https://eu.usatoday.com/story/news/health/2022/11/18/fda-approves-teplizumab-delays-onset-diabetes/10721707002/",
      "sortKey": 3,
      "language": "en",
      "categoryID": "global_health",
    },
  },
  {
    "metadata": {
      "tags": [],
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "evvo9u5z5a9q",
        },
      },
      "id": "5fisOhynXSQShQazPeghYI",
      "type": "Entry",
      "createdAt": "2022-11-21T16:52:45.323Z",
      "updatedAt": "2022-11-21T16:52:45.323Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment",
        },
      },
      "revision": 1,
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "newsTeaser",
        },
      },
      "locale": "de-DE",
    },
    "fields": {
      "datum": "2022-11-21",
      "headline": "Mushroom skins for bio-computer chips",
      "layout": "Article",
      "bildSource":
        "https://scx1.b-cdn.net/csz/news/800a/2022/using-mushroom-skin-as-1.jpg",
      "photoCredit": "Image: via techxplore.com",
      "teaserText":
        "A team of researchers has created computer chips by vaporizing metal circuits on mushroom skins. Their organic, flexible nature, sound insulation, and temperature resistance make them an ideal base for biodegradable computer chips. ",
      "quelle": "TECH XPLORE",
      "articleUrl":
        "https://techxplore.com/news/2022-11-mushroom-skin-base-chips.html",
      "sortKey": 4,
      "language": "en",
      "categoryID": "sustainability",
    },
  },
  {
    "metadata": {
      "tags": [],
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "evvo9u5z5a9q",
        },
      },
      "id": "3Lzem6rQSrh5PbZpgKSCRv",
      "type": "Entry",
      "createdAt": "2022-11-21T16:52:45.312Z",
      "updatedAt": "2022-11-21T16:52:45.312Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment",
        },
      },
      "revision": 1,
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "newsTeaser",
        },
      },
      "locale": "de-DE",
    },
    "fields": {
      "datum": "2022-11-21",
      "headline": "Reno casino heats with geothermal energy",
      "layout": "Article",
      "bildSource":
        "https://images.unsplash.com/photo-1512767254318-423c816efbf3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2973&q=80",
      "photoCredit": "Image: Michał Parzuchowski/Unsplash",
      "teaserText":
        "The Peppermill Reno Resort invested over nine million US Dollars in expanding its geothermal water system from a single pool to heating and cooling the entire resort. It paid off in three years, and they have been saving millions ever since.",
      "quelle": "MOTHER JONES",
      "articleUrl":
        "https://www.motherjones.com/environment/2022/11/peppermill-reno-resort-casino-geothermal-heating-cooling/",
      "sortKey": 5,
      "language": "en",
      "categoryID": "sustainability",
    },
  },
  {
    "metadata": {
      "tags": [],
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "evvo9u5z5a9q",
        },
      },
      "id": "3D5lVCqDUOQPykH25YmHYg",
      "type": "Entry",
      "createdAt": "2022-11-21T16:52:45.294Z",
      "updatedAt": "2022-11-21T16:52:45.294Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment",
        },
      },
      "revision": 1,
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "newsTeaser",
        },
      },
      "locale": "de-DE",
    },
    "fields": {
      "datum": "2022-11-21",
      "headline": "Pacifika celebrate loss and damage fund",
      "layout": "Article",
      "bildSource":
        "https://i.guim.co.uk/img/media/9ce3fd486551722b9bc28b012cab0e0d540c33ea/0_270_4079_2449/master/4079.jpg?width=620&quality=45&dpr=2&s=none",
      "photoCredit": "Image: Dominika Zarzycka/NurPhoto/Rex/Shutterstock",
      "teaserText":
        "After three decades of fighting for funds to assist developing nations hit hardest by climate disasters, pacific nations and climate activists are celebrating the establishment of a loss and damage financing mechanism in the Cop27 agreement.",
      "quelle": "THE GUARDIAN",
      "articleUrl":
        "https://www.theguardian.com/world/2022/nov/21/pacific-leaders-celebrate-cop27-victory-on-loss-and-damage-fund-after-decades-of-advocacy",
      "sortKey": 6,
      "language": "en",
      "categoryID": "climate",
    },
  },
  {
    "metadata": {
      "tags": [],
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "evvo9u5z5a9q",
        },
      },
      "id": "60VlPJ4tE3vWmxeKM8VojP",
      "type": "Entry",
      "createdAt": "2022-11-21T12:01:30.462Z",
      "updatedAt": "2022-11-21T12:01:52.448Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment",
        },
      },
      "revision": 2,
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "newsTeaser",
        },
      },
      "locale": "de-DE",
    },
    "fields": {
      "datum": "2022-11-21",
      "headline":
        "Grönemeyer übernimmt einen Monat lang die Kosten der Berliner Tafel",
      "layout": "Article",
      "bildManuell": {
        "sys": {
          "type": "Link",
          "linkType": "Asset",
          "id": "4PkSAf6xceuBRiZqxJ95f3",
        },
      },
      "photoCredit": "Bild: IMAGO / Uwe Steinert",
      "teaserText":
        "Einen Monat lang will Herbert Grönemeyer alle Betriebs- und Unterhaltskosten der Berliner Tafel übernehmen. Das hatte der Sänger am Samstag in der ZDF-Sendung „Wetten, dass…?“ verkündet. Mit knapp 50 Ausgabestellen versorgt die Berliner Tafel ca. 70.000 Menschen.",
      "quelle": "RBB24",
      "articleUrl":
        "https://www.rbb24.de/panorama/beitrag/2022/11/berlin-groenemeyer-uebernimmt-kosten-der-berliner-tafel-.html",
      "sortKey": 1,
      "language": "de",
      "categoryID": "education",
    },
  },
  {
    "metadata": {
      "tags": [],
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "evvo9u5z5a9q",
        },
      },
      "id": "4yFNWlE5FejvKNhAdAOe2C",
      "type": "Entry",
      "createdAt": "2022-11-21T12:01:30.713Z",
      "updatedAt": "2022-11-21T12:01:30.713Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment",
        },
      },
      "revision": 1,
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "newsTeaser",
        },
      },
      "locale": "de-DE",
    },
    "fields": {
      "datum": "2022-11-21",
      "headline": "Schmuck herstellen geht auch nachhaltig",
      "layout": "Article",
      "bildManuell": {
        "sys": {
          "type": "Link",
          "linkType": "Asset",
          "id": "6nBCdHAi4QT2K97bMuoszD",
        },
      },
      "photoCredit": "Bild: Pexels / Jill Burrow",
      "teaserText":
        "Gold aus alten Handys, nachhaltig gezüchtete Perlen, synthetische Diamanten: Bei der Gewinnung von Rohstoffen für das Herstellen von Schmuck ist fairer Handel möglich. Ein Bericht zeigt, wie Glanzstücke ohne Schaden für Mensch und Natur hergestellt werden können.",
      "quelle": "ZDF",
      "articleUrl":
        "https://www.zdf.de/gesellschaft/plan-b/plan-b-gold-richtig-100.html",
      "sortKey": 7,
      "language": "de",
      "categoryID": "sustainability",
    },
  },
  {
    "metadata": {
      "tags": [],
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "evvo9u5z5a9q",
        },
      },
      "id": "zbchvFIlYgfiZEDSGBKg4",
      "type": "Entry",
      "createdAt": "2022-11-21T12:01:30.603Z",
      "updatedAt": "2022-11-21T12:01:30.603Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment",
        },
      },
      "revision": 1,
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "newsTeaser",
        },
      },
      "locale": "de-DE",
    },
    "fields": {
      "datum": "2022-11-21",
      "headline": "Wie geschädigte Muskelzellen im Labor repariert werden",
      "layout": "Article",
      "bildManuell": {
        "sys": {
          "type": "Link",
          "linkType": "Asset",
          "id": "n3qduJ6IMxCTGJCXeDniV",
        },
      },
      "photoCredit": "Bild: IMAGO / Design Pics Editorial",
      "teaserText":
        "Muskeldystrophie ist eine unheilbare Krankheit, bei der die Muskeln nach und nach schwächer werden  – Therapien gibt es bisher keine. Der Neurologin Simone Spuler ist es nun aber gelungen, geschädigte Muskelzellen im Reagenzglas zu reparieren. Der erste Praxistest an Patient:innen ist für 2023 geplant.",
      "quelle": "SÜDDEUTSCHE ZEITUNG",
      "articleUrl":
        "https://sz-magazin.sueddeutsche.de/die-loesung-fuer-alles/muskeldystrophie-therapie-heilung-simone-spuler-charite-92048",
      "sortKey": 6,
      "language": "de",
      "categoryID": "global_health",
    },
  },
  {
    "metadata": {
      "tags": [],
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "evvo9u5z5a9q",
        },
      },
      "id": "48btjUDNfXj9UhLxzh3nJS",
      "type": "Entry",
      "createdAt": "2022-11-21T12:01:30.520Z",
      "updatedAt": "2022-11-21T12:01:30.520Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment",
        },
      },
      "revision": 1,
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "newsTeaser",
        },
      },
      "locale": "de-DE",
    },
    "fields": {
      "datum": "2022-11-21",
      "headline": "Gärtnerplatzviertel in München wird zur Oase",
      "layout": "Article",
      "bildManuell": {
        "sys": {
          "type": "Link",
          "linkType": "Asset",
          "id": "12rRYiAamkRm1Moa7bVxpE",
        },
      },
      "photoCredit": "Bild: IMAGO / imagebroker",
      "teaserText":
        "Die Stadt München möchte ihren Bewohner:innen öffentlichen Raum zurückgeben. Das Gärtnerplatzviertel soll basierend auf dem Konzept aus Barcelona zu einem Superblock umgebaut werden – eine Fußgängerzone, die die Lebensqualität erhöhen soll, ganz ohne Autos.",
      "quelle": "SÜDDEUTSCHE ZEITUNG",
      "articleUrl":
        "https://www.sueddeutsche.de/muenchen/muenchen-superblock-gaertnerplatzviertel-lehel-verkehrsberuhigung-1.5697224",
      "sortKey": 5,
      "language": "de",
      "categoryID": "sustainability",
    },
  },
  {
    "metadata": {
      "tags": [],
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "evvo9u5z5a9q",
        },
      },
      "id": "2AvPLMPlCPYYwLmEVhNo7z",
      "type": "Entry",
      "createdAt": "2022-11-21T12:01:30.499Z",
      "updatedAt": "2022-11-21T12:01:30.499Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment",
        },
      },
      "revision": 1,
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "newsTeaser",
        },
      },
      "locale": "de-DE",
    },
    "fields": {
      "datum": "2022-11-21",
      "headline": "Mehr Schutz und Rechte für queere Menschen",
      "layout": "Article",
      "bildManuell": {
        "sys": {
          "type": "Link",
          "linkType": "Asset",
          "id": "5jgjyvaA3CjO9ls8vxJimI",
        },
      },
      "photoCredit": "Bild: IMAGO / photothek",
      "teaserText":
        "Das Bundeskabinett hat einen bundesweiten Aktionsplan beschlossen, um die Rechte queerer Menschen in Deutschland zu stärken. In Zuge dessen soll das Abstammungs- und Familienrecht modernisiert sowie ein neues Selbstbestimmungsgesetz eingeführt werden.",
      "quelle": "TAGESSCHAU",
      "articleUrl":
        "https://www.tagesschau.de/inland/aktionsplan-queere-menschen-101.html",
      "sortKey": 3,
      "language": "de",
      "categoryID": "human_rights",
    },
  },
  {
    "metadata": {
      "tags": [],
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "evvo9u5z5a9q",
        },
      },
      "id": "1eYHH7y6YdXJVd92dGnn4x",
      "type": "Entry",
      "createdAt": "2022-11-21T12:01:30.481Z",
      "updatedAt": "2022-11-21T12:01:30.481Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment",
        },
      },
      "revision": 1,
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "newsTeaser",
        },
      },
      "locale": "de-DE",
    },
    "fields": {
      "datum": "2022-11-21",
      "headline": "Gezüchtete Korallen pflanzen sich erstmals fort",
      "layout": "Article",
      "bildManuell": {
        "sys": {
          "type": "Link",
          "linkType": "Asset",
          "id": "7J5Bp2NqbH21cI3iiZgLZl",
        },
      },
      "photoCredit": "Bild: Reef Restoration Foundation",
      "teaserText":
        "In den letzten Jahren wurde das Great Barrier Reef in Australien stark beschädigt. Gezüchtete Korallen sollen helfen, es wiederherzustellen. Nun ein erster Meilenstein: Vier Jahre nachdem sie gepflanzt wurden, haben sich die gezüchteten Korallen erstmals in der freien Umwelt fortgepflanzt.",
      "quelle": "FORSCHUNG UND WISSEN",
      "articleUrl":
        "https://www.forschung-und-wissen.de/nachrichten/biologie/fortpflanzung-bei-gezuechteten-korallen-beobachtet-13376851",
      "sortKey": 2,
      "language": "de",
      "categoryID": "animal_rights",
    },
  },
  {
    "metadata": {
      "tags": [],
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "evvo9u5z5a9q",
        },
      },
      "id": "5dmx5b0iwcCS55w17KMtHR",
      "type": "Entry",
      "createdAt": "2022-11-21T12:01:30.427Z",
      "updatedAt": "2022-11-21T12:01:30.427Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment",
        },
      },
      "revision": 1,
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "newsTeaser",
        },
      },
      "locale": "de-DE",
    },
    "fields": {
      "datum": "2022-11-21",
      "headline": "Dir gefällt, was wir tun? Dann unterstütze uns!",
      "layout": "Article",
      "label": "IN EIGENER SACHE",
      "bildManuell": {
        "sys": {
          "type": "Link",
          "linkType": "Asset",
          "id": "5Lq4tA1RdAWXJjml7jW20k",
        },
      },
      "photoCredit": "Bild: Good News",
      "teaserText":
        "Liebe Good News-Community, wir hoffen, ihr seid gut in die neue Woche gestartet! Wir wollen euch auch weiterhin mit den besten Nachrichten des Tages versorgen. Dafür brauchen wir eure Unterstützung! Jeder Beitrag, egal ob groß oder klein, trägt dazu bei, gute Nachrichten in die Welt zu tragen. Vielen Dank!",
      "quelle": "GOOD NEWS",
      "articleUrl": "https://goodnews.eu/unterstuetzen/",
      "sortKey": 8,
      "language": "de",
    },
  },
  {
    "metadata": {
      "tags": [],
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "evvo9u5z5a9q",
        },
      },
      "id": "29jXJSNBg9piVKJp6Tvukk",
      "type": "Entry",
      "createdAt": "2022-11-21T12:01:30.387Z",
      "updatedAt": "2022-11-21T12:01:30.387Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment",
        },
      },
      "revision": 1,
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "newsTeaser",
        },
      },
      "locale": "de-DE",
    },
    "fields": {
      "datum": "2022-11-21",
      "headline": "Gewürze, die einen Unterschied machen",
      "layout": "Article",
      "label": "GOOD FAMILY ANZEIGE",
      "bildManuell": {
        "sys": {
          "type": "Link",
          "linkType": "Asset",
          "id": "5OK9syZ9Ema3yRJsbGg6t1",
        },
      },
      "teaserText":
        "Nicht nur geschmacklich sind die Gewürz(mischungen) von SoulSpice auf einem ganz hohen Level. Auch ihr Impact setzt Maßstäbe: Die Bio-Gewürze werden fair und direkt mit den Erzeuger:innen gehandelt und die Profite entlang der Wertschöpfungskette geteilt.",
      "quelle": "GoodBuy",
      "articleUrl":
        "https://www.goodbuy.eu/collections/soulspice?utm_medium=referral&utm_source=goodnewsapp&utm_campaign=goodnews-21.11.2022&utm_content=goodbrand",
      "sortKey": 4,
      "language": "de",
    },
  },
  {
    "metadata": {
      "tags": [],
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "evvo9u5z5a9q",
        },
      },
      "id": "52Mw5GPmPlaCeaUElw0ams",
      "type": "Entry",
      "createdAt": "2022-11-18T13:33:48.483Z",
      "updatedAt": "2022-11-18T13:39:13.059Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment",
        },
      },
      "revision": 2,
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "newsTeaser",
        },
      },
      "locale": "de-DE",
    },
    "fields": {
      "datum": "2022-11-18",
      "headline": "Hackers build an app to help transit with disabilities",
      "layout": "Article",
      "bildSource":
        "https://images.pexels.com/photos/7443817/pexels-photo-7443817.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "photoCredit": "Image: Harrison Haines/Pexels",
      "teaserText":
        "UnLockedMaps is a web-based program developed in Philadelphia's civic hacker community that allows anyone with mobility issues to see, in real-time, how accessible specific rail transit stations are in six metro areas.",
      "quelle": "TECH XPLORE",
      "articleUrl":
        "https://techxplore.com/news/2022-11-transit-gamble-people-disabilities-philly-born.html",
      "sortKey": 6,
      "language": "en",
      "categoryID": "digitization",
    },
  },
  {
    "metadata": {
      "tags": [],
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "evvo9u5z5a9q",
        },
      },
      "id": "6TMZXOo016VtiC7x0J35tm",
      "type": "Entry",
      "createdAt": "2022-11-18T13:33:48.525Z",
      "updatedAt": "2022-11-18T13:38:24.842Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment",
        },
      },
      "revision": 4,
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "newsTeaser",
        },
      },
      "locale": "de-DE",
    },
    "fields": {
      "datum": "2022-11-18",
      "headline": "Hearts that stopped beating can still save lives",
      "layout": "Article",
      "bildSource":
        "https://images.unsplash.com/photo-1623134915837-d2fdb4f59035?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2971&q=80",
      "photoCredit": "Image: Ali Hajiluyi/Unsplash",
      "teaserText":
        "Innovative devices are making it possible to transplant hearts even after they stop beating by recirculating warm oxygenated blood to keep them beating outside the body after circulatory death, reducing the heart transplant waiting list.",
      "quelle": "EURONEWS",
      "articleUrl":
        "https://www.euronews.com/next/2022/11/01/heart-in-a-box-this-device-revives-hearts-that-stopped-beating-to-use-them-for-transplants",
      "sortKey": 5,
      "language": "en",
      "categoryID": "global_health",
    },
  },
  {
    "metadata": {
      "tags": [],
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "evvo9u5z5a9q",
        },
      },
      "id": "7d8rhtAm5yKHBWOoklGjT3",
      "type": "Entry",
      "createdAt": "2022-11-18T13:33:48.562Z",
      "updatedAt": "2022-11-18T13:33:48.562Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment",
        },
      },
      "revision": 1,
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "newsTeaser",
        },
      },
      "locale": "de-DE",
    },
    "fields": {
      "datum": "2022-11-18",
      "headline": "US plans dam demolitions to save salmon",
      "layout": "Article",
      "bildSource":
        "https://images.unsplash.com/photo-1513309642960-b1d95a1b69f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3062&q=80",
      "photoCredit": "Image: Drew Farewell/Unsplash",
      "teaserText":
        "US regulators have approved the plan to open up hundreds of miles of salmon habitat. The project, driven by native tribes that rely on the river and its salmons, will be the most extensive dam removal and river restoration project ever.",
      "quelle": "THE GUARDIAN",
      "articleUrl":
        "https://www.theguardian.com/environment/2022/nov/17/us-dam-removal-endangered-salmon-klamath-river?CMP=Share_iOSApp_Other",
      "sortKey": 1,
      "language": "en",
      "categoryID": "animal_rights",
    },
  },
  {
    "metadata": {
      "tags": [],
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "evvo9u5z5a9q",
        },
      },
      "id": "XD71F7UwzmHazax6ceJMN",
      "type": "Entry",
      "createdAt": "2022-11-18T13:33:48.551Z",
      "updatedAt": "2022-11-18T13:33:48.551Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment",
        },
      },
      "revision": 1,
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "newsTeaser",
        },
      },
      "locale": "de-DE",
    },
    "fields": {
      "datum": "2022-11-18",
      "headline": "US first: FDA approves lab-grown meat",
      "layout": "Article",
      "bildSource":
        "https://www.newfoodmagazine.com/wp-content/uploads/shutterstock_1999103264-750x500.jpg",
      "photoCredit": "Image: Upside Foods via newfoodmagazine.com",
      "teaserText":
        "Cruelty-free cultivated chicken products are one step closer to becoming available on store shelves after a meat product grown from animal cells in a lab has been declared safe for human consumption for the first time in the US.",
      "quelle": "NEW FOOD MAGAZINE",
      "articleUrl":
        "https://www.newfoodmagazine.com/news/170007/cultured-meat-in-us/",
      "sortKey": 2,
      "language": "en",
      "categoryID": "climate",
    },
  },
  {
    "metadata": {
      "tags": [],
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "evvo9u5z5a9q",
        },
      },
      "id": "6J0B9calGpfIFeVJDGW4BD",
      "type": "Entry",
      "createdAt": "2022-11-18T13:33:48.543Z",
      "updatedAt": "2022-11-18T13:33:48.543Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment",
        },
      },
      "revision": 1,
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "newsTeaser",
        },
      },
      "locale": "de-DE",
    },
    "fields": {
      "datum": "2022-11-18",
      "headline": "France's trains are going solar",
      "layout": "Article",
      "bildSource":
        "https://images.unsplash.com/photo-1558449028-b53a39d100fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
      "photoCredit": "Imager: Chelsea/Unsplash",
      "teaserText":
        "A state-owned railway subsidiary has just signed the largest corporate power purchase agreement in France to date. If all goes as planned, up to 50% of the French railway network will be powered by solar energy by 2026. ",
      "quelle": "CLEAN TECHNICA",
      "articleUrl":
        "https://cleantechnica.com/2022/11/10/solar-powered-trains-for-france/",
      "sortKey": 3,
      "language": "en",
      "categoryID": "sustainability",
    },
  },
  {
    "metadata": {
      "tags": [],
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "evvo9u5z5a9q",
        },
      },
      "id": "6xYWFyhDCgFtOuhCjDWxzq",
      "type": "Entry",
      "createdAt": "2022-11-18T13:33:48.533Z",
      "updatedAt": "2022-11-18T13:33:48.533Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment",
        },
      },
      "revision": 1,
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "newsTeaser",
        },
      },
      "locale": "de-DE",
    },
    "fields": {
      "datum": "2022-11-18",
      "headline": "Wimbledon allows colored undies for women",
      "layout": "Article",
      "bildSource":
        "https://images.unsplash.com/photo-1544298621-35a764866ff0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2592&q=80",
      "photoCredit": "Image: Zoë Reeve/Unsplash",
      "teaserText":
        "As periods are becoming less taboo, female tennis players have shared the stress and distraction of wearing all-white clothing when playing during their periods. Wimbledon listened and will allow dark-colored undershorts.",
      "quelle": "NPR",
      "articleUrl":
        "https://www.npr.org/2022/11/17/1137394181/wimbledon-dress-code-change-white-period-women",
      "sortKey": 4,
      "language": "en",
      "categoryID": "human_rights",
    },
  },
  {
    "metadata": {
      "tags": [],
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "evvo9u5z5a9q",
        },
      },
      "id": "5DnTVlSkwEmH3NbjPZTAye",
      "type": "Entry",
      "createdAt": "2022-11-18T13:33:48.508Z",
      "updatedAt": "2022-11-18T13:33:48.508Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment",
        },
      },
      "revision": 1,
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "donationAd",
        },
      },
      "locale": "de-DE",
    },
    "fields": {
      "datum": "2022-11-18",
      "headline": "We need your support!",
      "layout": "Article",
      "bildManuell": {
        "sys": {
          "type": "Link",
          "linkType": "Asset",
          "id": "6ZQrs23BvSzll4QbxiYcZZ",
        },
      },
      "photoCredit": "Image: Unsplash CC0 Public Domain",
      "teaserText":
        "As a donor-based setup we can't exist without your support! It's been tough to get anywhere near our funding goals these past months, if you can't chip in please follow us on social media and share our app! Spread the word, we all need good news. Thank you❤️",
      "quelle": "GOOD NEWS",
      "articleUrl": "https://donorbox.org/good-news-en",
      "sortKey": 8,
      "language": "en",
    },
  },
  {
    "metadata": {
      "tags": [],
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "evvo9u5z5a9q",
        },
      },
      "id": "4b4mamU5JeklE2u6mTtmeh",
      "type": "Entry",
      "createdAt": "2022-11-18T13:10:07.092Z",
      "updatedAt": "2022-11-18T13:10:07.092Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment",
        },
      },
      "revision": 1,
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "newsTeaser",
        },
      },
      "locale": "de-DE",
    },
    "fields": {
      "datum": "2022-11-18",
      "headline": "Sparen, Schenken, Gutes tun",
      "layout": "Article",
      "label": "GOOD FAMILY ANZEIGE",
      "bildManuell": {
        "sys": {
          "type": "Link",
          "linkType": "Asset",
          "id": "6XiClxqt0qAtVdtQnXX4es",
        },
      },
      "teaserText":
        "Von zart schmelzenden Schoko-Pinguinen bis hinzu kuscheligen Handtüchern: Entdecke kreative und besondere Geschenkideen, die nicht mehr als 10 € kosten und trotzdem der Welt etwas Gutes tun. So macht Schenken Spaß!",
      "quelle": "GoodBuy",
      "articleUrl":
        "https://www.goodbuy.eu/collections/nachhaltige-geschenke-unter-10-euro?utm_medium=referral&utm_source=goodnewsapp&utm_campaign=goodnews-17.11.2022&utm_content=collection",
      "sortKey": 4,
      "language": "de",
    },
  },
  {
    "metadata": {
      "tags": [],
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "evvo9u5z5a9q",
        },
      },
      "id": "17uMwmukQ5Zb4pIEzlUv9i",
      "type": "Entry",
      "createdAt": "2022-11-18T13:10:07.076Z",
      "updatedAt": "2022-11-18T13:10:07.076Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment",
        },
      },
      "revision": 1,
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "newsTeaser",
        },
      },
      "locale": "de-DE",
    },
    "fields": {
      "datum": "2022-11-18",
      "headline": "Schönes Wochenende",
      "layout": "Article",
      "label": "IN EIGENER SACHE",
      "bildManuell": {
        "sys": {
          "type": "Link",
          "linkType": "Asset",
          "id": "4bsQJ7KJDm1pYwCbIlMNLC",
        },
      },
      "photoCredit": "Bild: Good News",
      "teaserText":
        "Mit guten Nachrichten schicken wir euch in Richtung Wochenende. Damit wir euch am Montag wieder mit Good News versorgen können, braucht es euren Support. Wir freuen uns über jeden Beitrag, egal wie groß oder klein! Kommt gut ins Wochenende, eure Sophie und Selina ",
      "quelle": "GOOD NEWS",
      "articleUrl": "https://goodnews.eu/unterstuetzen/",
      "sortKey": 8,
      "language": "de",
    },
  },
];
