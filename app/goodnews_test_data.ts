import {ContentfulEntriesResponse, ContentfulItem, ContentfulItemBild} from "./contentful_types.ts";

export const item0_id = "4OYfHs0Ja7OTGn4b5ytVA8";
export const item0_headline = "Canada increases the price of pollution"
export const item0_bild: ContentfulItemBild = {
  "bildSource": "https://www.ecowatch.com/wp-content/uploads/2022/11/prince-edward-island.jpg"
};
export const item0 = (datum: string): ContentfulItem => ({
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
    "id": item0_id,
    "type": "Entry",
    "createdAt": "2022-11-29T16:32:03.542Z",
    "updatedAt": "2022-11-29T16:32:03.542Z",
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
    "datum": datum,
    "headline": item0_headline,
    "layout": "Article",
    ...item0_bild,
    "photoCredit": "Image:   shaunl / E+ / Getty Images via ecowatch.com",
    "teaserText":
      "Canada has updated its carbon pollution pricing system introduced in 2019 to ensure major polluters will pay more for their emissions over time. The changes will also increase funding for families participating in the Climate Action Incentive.",
    "quelle": "ECOWATCH",
    "articleUrl": "https://www.ecowatch.com/canada-pollution-pricing.html",
    "sortKey": 1,
    "language": "en",
    "categoryID": "climate",
  },
});

export const item1_id = "6L66xQsxIHpBLT3LgCxtLe";
export const item1_headline = "One man's mission against trash";
export const item1_bild: ContentfulItemBild = {
  "bildSource": "https://i.guim.co.uk/img/media/3516e35f66c5e1204abeeabc3b6c225f9d153cc8/0_0_6000_4000/master/6000.jpg?width=1010&quality=45&auto=format&fit=max&dpr=2&s=a8301f7352061989679af2a8c24d0784"
};
export const item1 = (datum: string): ContentfulItem => ({
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
    "id": item1_id,
    "type": "Entry",
    "createdAt": "2022-11-29T16:32:03.532Z",
    "updatedAt": "2022-11-29T16:32:03.532Z",
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
    "datum": datum,
    "headline": item1_headline,
    "layout": "Article",
    ...item1_bild,
    "photoCredit": "Image: Plastic Man via theguardian.com",
    "teaserText":
      "On a beach in Senegal that has so much garbage accumulated on it that most of the sand is covered, one man is trying to raise awareness about the dangers of plastic pollution. Plastic man started his mission on World Environment Day in 2011",
    "quelle": "THE GUARDIAN",
    "articleUrl":
      "https://www.theguardian.com/artanddesign/gallery/2022/nov/21/plastic-man-in-senegal-on-mission-against-trash-in-pictures",
    "sortKey": 6,
    "language": "en",
    "categoryID": "climate",
  },
});

export const item2_id = "30ji5QMhXoqljko1cSAHwa";
export const item2_headline = "Fetal monitoring app for remote areas";
export const item2_bild: ContentfulItemBild = {
  "bildManuell": {
    "sys": {
      "type": "Link",
      "linkType": "Asset",
      "id": "2GlEQvbXVValp0jkqKZEqh",
    },
  }
};
export const item2 = (datum: string): ContentfulItem => ({
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
    "id": item2_id,
    "type": "Entry",
    "createdAt": "2022-11-29T16:32:03.518Z",
    "updatedAt": "2022-11-29T16:32:03.518Z",
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
    "datum": datum,
    "headline": item2_headline,
    "layout": "Article",
    ...item2_bild,
    "photoCredit": "Image: screenshot via africanews.com",
    "teaserText":
      "It is not always easy in rural Africa to get regular pregnancy check-ups, and developing countries often struggle with staff shortages. This simple app-linked device can bring fetal monitoring to wherever it is needed.",
    "quelle": "AFRICA NEWS",
    "articleUrl":
      "https://www.africanews.com/2022/11/24/wekebere-the-fetal-monitoring-app-saving-mothers-and-babies/",
    "sortKey": 2,
    "language": "en",
    "categoryID": "global_health",
  },
});

export const item3_id = "4K3HBJrdDuZq8aWCHoI1D8";
export const item3_headline = "Permanent 4-day work week, same pay?";
export const item3_bildSource = "https://images.unsplash.com/photo-1557425493-6f90ae4659fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80";
export const item3 = (datum: string): ContentfulItem => ({
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
    "id": item3_id,
    "type": "Entry",
    "createdAt": "2022-11-29T16:32:03.510Z",
    "updatedAt": "2022-11-29T16:32:03.510Z",
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
    "datum": datum,
    "headline": item3_headline,
    "layout": "Article",
    "bildSource": item3_bildSource,
    "photoCredit": "Image: Jason Goodman/Unsplash",
    "teaserText":
      "In what is considered a transformative move in the UK labor market, one hundred British companies have signed up for a permanent four-day working week for thousands of employees without reducing their salary. ",
    "quelle": "THE GUARDIAN",
    "articleUrl":
      "https://www.theguardian.com/business/2022/nov/27/a-hundred-uk-companies-sign-up-for-four-day-week-with-no-loss-of-pay",
    "sortKey": 3,
    "language": "en",
    "categoryID": "global_health",
  },
});

export const item4_id = "76S0zb37fQIgLsQGEDWKx2";
export const item4_headline = "New solar panels from panel production dust";
export const item4_bild: ContentfulItemBild = {
  "bildSource": "https://scx2.b-cdn.net/gfx/news/hires/2022/new-solar-panels-from.jpg"
};
export const item4 = (datum: string): ContentfulItem => ({
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
    "id": item4_id,
    "type": "Entry",
    "createdAt": "2022-11-29T16:32:03.501Z",
    "updatedAt": "2022-11-29T16:32:03.501Z",
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
    "datum": datum,
    "headline": item4_headline,
    "layout": "Article",
    ...item4_bild,
    "photoCredit": "Image:  Thor Nielsen via techxplore.com",
    "teaserText":
      'Almost one-third of the silicon crystals used to make solar panels is lost as sawdust during manifacture. A researcher from the Norwegian University of Science and Technology is using this "black gold" to create new panels.',
    "quelle": "TECH XPLORE",
    "articleUrl": "https://techxplore.com/news/2022-11-solar-panels-panel.html",
    "sortKey": 4,
    "language": "en",
    "categoryID": "sustainability",
  },
});

export const item5_id = "3UTszasOtVLraTu5cQv7Kf";
export const item5_headline = "New tool turns handwriting into code";
export const item5_bild: ContentfulItemBild = {
  "bildSource": "https://scx2.b-cdn.net/gfx/news/2022/new-programming-tool-t.jpg"
};
export const item5 = (datum: string): ContentfulItem => ({
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
    "id": item5_id,
    "type": "Entry",
    "createdAt": "2022-11-29T16:32:03.493Z",
    "updatedAt": "2022-11-29T16:32:03.493Z",
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
    "datum": datum,
    "headline": item5_headline,
    "layout": "Article",
    ...item5_bild,
    "photoCredit": "Image: via techxplore.com",
    "teaserText":
      "An innovative pen-based interface that bridges handwritten and textual programming lets users of digital notebooks use drawing canvases or handwritten diagrams to create traditional, digitized computer code.",
    "quelle": "TECH XPLORE",
    "articleUrl": "https://techxplore.com/news/2022-11-tool-code.html",
    "sortKey": 5,
    "language": "en",
    "categoryID": "digitization",
  },
});

export const item6_id = "35lXt1TV8MrslExzsekvVL";
export const item6_headline = "Support us ✨and help us spread optimism!";
export const item6_bild: ContentfulItemBild = {
  "bildManuell": {
    "sys": {
      "type": "Link",
      "linkType": "Asset",
      "id": "2ykn7DSH46uUg1TJc51iJ8",
    },
  }
};
export const item6 = (datum: string): ContentfulItem => ({
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
    "id": item6_id,
    "type": "Entry",
    "createdAt": "2022-11-29T16:32:03.465Z",
    "updatedAt": "2022-11-29T16:32:03.465Z",
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
    "datum": datum,
    "headline": item6_headline,
    "layout": "Article",
    ...item6_bild,
    "photoCredit": "Image: Chris Lawton/Unsplash",
    "teaserText":
      "Thank you for all your support! As days are getting shorter we all need as much good news as we can get! If you can, please support our work with a monthly donation, every little bit helps! Spread the word, and share optimism! Thank you 🧡",
    "quelle": "GOOD NEWS",
    "articleUrl": "https://donorbox.org/good-news-en",
    "sortKey": 7,
    "language": "en",
  },
});

export const item7_id = "2FUMlivvIzv5tyq8kDQ0MQ";
export const item7_headline = "Slowenien stärkt die Pressefreiheit";
export const item7_bildManuell = {
  "sys": {
    "type": "Link",
    "linkType": "Asset",
    "id": "4DQZB6GeZutdteJSy07Mnt",
  },
};
export const item7_2022_11_29 = (datum: string): ContentfulItem => ({
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
    "id": item7_id,
    "type": "Entry",
    "createdAt": "2022-11-29T14:01:27.982Z",
    "updatedAt": "2022-11-29T14:01:27.982Z",
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
    "datum": datum,
    "headline": item7_headline,
    "layout": "Article",
    "bildManuell": item7_bildManuell,
    "photoCredit": "Bild: Unsplash /  AbsolutVision",
    "teaserText":
      "Es ist nicht gerade gut bestellt um Sloweniens Pressefreiheit: Laut Reporter ohne Grenzen liegt das Land im internationalen Vergleich auf Platz 54. Nun hat die slowenische Bevölkerung in einem Referendum einem Gesetz zugestimmt, das die Pressefreiheit stärken und Redaktionen unabhängig machen soll von politischer Einflussnahme.",
    "quelle": "DEUTSCHLANDFUNK NOVA",
    "articleUrl":
      "https://www.deutschlandfunknova.de/nachrichten/slowenien-gesetz-fuer-freiere-berichterstattung-kann-kommen",
    "sortKey": 1,
    "language": "de",
    "categoryID": "education",
  },
});

export const item8_id = "5QBLHBJKCvXsf2BFEvfVd5";
export const item8_title = "Tuvalu gründet digitalen Staat";
export const item8_bild: ContentfulItemBild = {
  "bildManuell": {
    "sys": {
      "type": "Link",
      "linkType": "Asset",
      "id": "4EQK5W49r7UAZPMG3y15RV",
    },
  }
};
export const item8 = (datum: string): ContentfulItem => ({
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
    "id": item8_id,
    "type": "Entry",
    "createdAt": "2022-11-29T14:01:27.967Z",
    "updatedAt": "2022-11-29T14:01:27.967Z",
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
    "datum": datum,
    "headline": item8_title,
    "layout": "Article",
    ...item8_bild,
    "photoCredit": "Bild: IMAGO / Nature Picture Library",
    "teaserText":
      "Wegen des steigendes Meerespiegels versinkt der Inselstaat Tuvalu im Meer – keine gute Nachricht. Um den Staat jedoch funktionsfähig zu halten, will die Regierung das Land nun digitalisieren. So soll es den Bürger:innen künftig etwa möglich sein, im Metaverse Verwaltungs- und Konsulatsdienste in Anspruch zu nehmen.",
    "quelle": "DEUTSCHE WELLE",
    "articleUrl":
      "https://www.dw.com/de/inselstaat-tuvalu-gr%C3%BCndet-erste-digitale-nation/a-63803995",
    "sortKey": 3,
    "language": "de",
    "categoryID": "digitization",
  },
});

export const item9_id = "7xZqOC96SbYLCa3Ts3Tbqj";
export const item9_headline = "Fair Entspannung";
export const item9_bild: ContentfulItemBild = {
  "bildManuell": {
    "sys": {
      "type": "Link",
      "linkType": "Asset",
      "id": "3q1EpSvM7Db1h8nclZdI0u",
    },
  }
};
export const item9_2022_11_29 = (datum: string): ContentfulItem => ({
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
    "id": item9_id,
    "type": "Entry",
    "createdAt": "2022-11-29T14:01:27.952Z",
    "updatedAt": "2022-11-29T14:01:27.952Z",
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
    "datum": datum,
    "headline": item9_headline,
    "layout": "Article",
    "label": "GOOD FAMILY ANZEIGE",
    ...item9_bild,
    "photoCredit": "Bild: GoodBuy ",
    "teaserText":
      "Entspanne Körper und Geist durch Akupressur. Die Produkte von Shakti werden von Frauen in Indien hergestellt. Sie profitieren von überdurchschnittlicher Bezahlung, Gesundheitsversorgung und Stipendienprogrammen für ihre Töchter.",
    "quelle": "GoodBuy",
    "articleUrl":
      "https://www.goodbuy.eu/collections/shaktimat?utm_medium=referral&utm_source=goodnewsapp&utm_campaign=goodnews-29.11.2022&utm_content=collection",
    "sortKey": 4,
    "language": "de",
  },
});

const asset_item2 = {
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
    "id": "2GlEQvbXVValp0jkqKZEqh",
    "type": "Asset",
    "createdAt": "2022-11-29T16:27:44.895Z",
    "updatedAt": "2022-11-29T16:27:44.895Z",
    "environment": {
      "sys": {
        "id": "master",
        "type": "Link",
        "linkType": "Environment",
      },
    },
    "revision": 1,
    "locale": "de-DE",
  },
  "fields": {
    "title": "Screenshot (37)",
    "description": "",
    "file": {
      "url":
        "//images.ctfassets.net/evvo9u5z5a9q/2GlEQvbXVValp0jkqKZEqh/0271e2aadeb28bb559393bdd5c088b92/Screenshot__37_.png",
      "details": {
        "size": 3135141,
        "image": {
          "width": 2251,
          "height": 1594,
        },
      },
      "fileName": "Screenshot__37_.png",
      "contentType": "image/png",
    },
  },
};

const asset_item6 = {
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
    "id": "2ykn7DSH46uUg1TJc51iJ8",
    "type": "Asset",
    "createdAt": "2022-11-23T14:30:59.752Z",
    "updatedAt": "2022-11-23T14:31:29.863Z",
    "environment": {
      "sys": {
        "id": "master",
        "type": "Link",
        "linkType": "Environment",
      },
    },
    "revision": 2,
    "locale": "de-DE",
  },
  "fields": {
    "title": "photo-1506903836541-e18b4ba42343",
    "description": "",
    "file": {
      "url":
        "//images.ctfassets.net/evvo9u5z5a9q/2ykn7DSH46uUg1TJc51iJ8/e5921073d184dfa6ca56555e1a220bc4/ryan-christodoulou-XvLLcF_mt7c-unsplash.jpg",
      "details": {
        "size": 364507,
        "image": {
          "width": 1920,
          "height": 2880,
        },
      },
      "fileName": "ryan-christodoulou-XvLLcF_mt7c-unsplash.jpg",
      "contentType": "image/jpeg",
    },
  },
};

const asset_item9 = {
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
    "id": "3q1EpSvM7Db1h8nclZdI0u",
    "type": "Asset",
    "createdAt": "2022-11-29T13:49:56.201Z",
    "updatedAt": "2022-11-29T13:49:56.201Z",
    "environment": {
      "sys": {
        "id": "master",
        "type": "Link",
        "linkType": "Environment",
      },
    },
    "revision": 1,
    "locale": "de-DE",
  },
  "fields": {
    "title": "24",
    "description": "",
    "file": {
      "url":
        "//images.ctfassets.net/evvo9u5z5a9q/3q1EpSvM7Db1h8nclZdI0u/a329363446885437794e8be4aad4d288/24.png",
      "details": {
        "size": 1747534,
        "image": {
          "width": 1080,
          "height": 1080,
        },
      },
      "fileName": "24.png",
      "contentType": "image/png",
    },
  },
};

const asset_item7 = {
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
    "id": "4DQZB6GeZutdteJSy07Mnt",
    "type": "Asset",
    "createdAt": "2022-11-29T13:45:55.828Z",
    "updatedAt": "2022-11-29T13:45:55.828Z",
    "environment": {
      "sys": {
        "id": "master",
        "type": "Link",
        "linkType": "Environment",
      },
    },
    "revision": 1,
    "locale": "de-DE",
  },
  "fields": {
    "title": "2",
    "description": "",
    "file": {
      "url":
        "//images.ctfassets.net/evvo9u5z5a9q/4DQZB6GeZutdteJSy07Mnt/33cdadcac7a4458f6edd8f5dd42d9328/2.png",
      "details": {
        "size": 1341043,
        "image": {
          "width": 1080,
          "height": 1080,
        },
      },
      "fileName": "2.png",
      "contentType": "image/png",
    },
  },
};

const asset_item8 = {
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
    "id": "4EQK5W49r7UAZPMG3y15RV",
    "type": "Asset",
    "createdAt": "2022-11-29T13:48:07.295Z",
    "updatedAt": "2022-11-29T13:48:07.295Z",
    "environment": {
      "sys": {
        "id": "master",
        "type": "Link",
        "linkType": "Environment",
      },
    },
    "revision": 1,
    "locale": "de-DE",
  },
  "fields": {
    "title": "3",
    "description": "",
    "file": {
      "url":
        "//images.ctfassets.net/evvo9u5z5a9q/4EQK5W49r7UAZPMG3y15RV/c50b2637a37e769558a42d738281741c/3.png",
      "details": {
        "size": 1347111,
        "image": {
          "width": 1080,
          "height": 1080,
        },
      },
      "fileName": "3.png",
      "contentType": "image/png",
    },
  },
};

export const contentfulResponse = (skip: number, limit: number, items: ContentfulItem[]): ContentfulEntriesResponse => ({
  "sys": {
    "type": "Array",
  },
  "total": 13999,
  "skip": skip,
  "limit": limit,
  "items": items,
  "includes": {
    "Asset": [
      asset_item2,
      asset_item6,
      asset_item9,
      asset_item7,
      asset_item8,
    ],
  }
})

export const offset0Limit10: ContentfulEntriesResponse = {
  "sys": {
    "type": "Array",
  },
  "total": 13999,
  "skip": 0,
  "limit": 10,
  "items": [
    item0("2022-11-29"),
    item1("2022-11-29"),
    item2("2022-11-29"),
    item3("2022-11-29"),
    item4("2022-11-29"),
    item5("2022-11-29"),
    item6,
    item7_2022_11_29,
    item8,
    item9_2022_11_29,
  ],
};

// TODO not sure if we need the ones below

export const item10_2022_11_29: ContentfulItem = {
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
    "id": "5FOEi2UkoeNRIhuZ33yits",
    "type": "Entry",
    "createdAt": "2022-11-29T14:01:27.936Z",
    "updatedAt": "2022-11-29T14:01:27.936Z",
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
    "datum": "2022-11-29",
    "headline": "Maniok und traditionelle Hirse erleben Renaissance in Afrika",
    "layout": "Article",
    "bildManuell": {
      "sys": {
        "type": "Link",
        "linkType": "Asset",
        "id": "20MPRDYdAN6QhOZhlfr6wF",
      },
    },
    "photoCredit": "Bild: IMAGO / XINHUA",
    "teaserText":
      "Lediglich sechs Prozent der Agrarflächen in Afrika sind bewässert. 33 der 55 Länder des Kontinents sind auf Hilfslieferungen angewiesen. Durch die Klimakrise und die steigenden Preise für Lebensmittelimporte wird der Anbau von Nutzpflanzen und alten, dürreresistenten Getreidesorten in Afrika immer wichtiger.",
    "quelle": "GOOD IMPACT",
    "articleUrl":
      "https://enorm-magazin.de/landwirtschaft/maniok-und-traditionelle-hirse-erleben-renaissance-in-afrika",
    "sortKey": 5,
    "language": "de",
    "categoryID": "sustainability",
  },
};

export const item11_2022_11_29: ContentfulItem = {
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
    "id": "4iVAO4lqiaFQJwoZUoAmMt",
    "type": "Entry",
    "createdAt": "2022-11-29T14:01:27.921Z",
    "updatedAt": "2022-11-29T14:01:27.921Z",
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
    "datum": "2022-11-29",
    "headline": "Die größte Solaranlage Berlins kommt",
    "layout": "Article",
    "bildManuell": {
      "sys": {
        "type": "Link",
        "linkType": "Asset",
        "id": "3KiCwIIXudhXgsuepqMNim",
      },
    },
    "photoCredit": "Bild: IMAGO / Schöning",
    "teaserText":
      "Auf den Dächern der Messehallen Berlin entsteht die größte Solaranlage der Hauptstadt: Auf der umgerechnet etwa sieben Fußballfelder großen Fläche sollen künftig jährlich fünf Gigawattstunden Strom erzeugt werden – genug, um etwa 2000 Zwei-Personen-Haushalte ein Jahr lang zu versorgen.",
    "quelle": "BERLINER ZEITUNG",
    "articleUrl":
      "https://www.bz-berlin.de/berlin/charlottenburg-wilmersdorf/daecher-der-messe-berlin-werden-zur-groessten-solaranlage-der-stadt-2",
    "sortKey": 6,
    "language": "de",
    "categoryID": "climate",
  },
};

export const item12_2022_11_29: ContentfulItem = {
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
    "id": "2i9gcqaOegNfBI2hE4nDlK",
    "type": "Entry",
    "createdAt": "2022-11-29T14:01:27.904Z",
    "updatedAt": "2022-11-29T14:01:27.904Z",
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
    "datum": "2022-11-29",
    "headline": "Verbot von Stopfleber im britischen Königshaus",
    "layout": "Article",
    "bildManuell": {
      "sys": {
        "type": "Link",
        "linkType": "Asset",
        "id": "7zjCfPa424DCpIrTtHaGsR",
      },
    },
    "photoCredit": "Bild: Pexels / Pixabay",
    "teaserText":
      "König Charles III. hat sich bereits als Prinz für den Umwelt- und Tierschutz eingesetzt. Nun hat er laut Tierrechtsorganisation Peta die umstrittene Delikatesse Foie gras aus allen königlichen Residenzen verbannt. Kritiker:innen setzen sich seit Langem dafür ein, Stopfleber aus ethischen Gründen zu verbieten. ",
    "quelle": "WATSON",
    "articleUrl":
      "https://www.watson.de/nachhaltigkeit/gute%20nachricht/582249884-koenig-charles-verbannt-lieblingsessen-von-prinzessin-kate-aus-palast",
    "sortKey": 7,
    "language": "de",
    "categoryID": "animal_rights",
  },
};

export const item13_2022_11_29: ContentfulItem = {
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
    "id": "7z9BYqKWIQSE6e38xQfbeb",
    "type": "Entry",
    "createdAt": "2022-11-29T14:01:27.886Z",
    "updatedAt": "2022-11-29T14:01:27.886Z",
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
    "datum": "2022-11-29",
    "headline": "Artenschutz für Wölfe wirkt",
    "layout": "Article",
    "bildManuell": {
      "sys": {
        "type": "Link",
        "linkType": "Asset",
        "id": "1ncsN0cYbnEIm52VP91DqG",
      },
    },
    "photoCredit": "Bild: IMAGO / McPHOTO",
    "teaserText":
      "Aus der Sicht des Artenschutzes eine gute Nachricht: Der Wolf hat sich seit seiner Rückkehr nach Deutschland 1998 stetig ausbreiten können. So ist die Anzahl der Wolfsrudel im Jahr 2022 bundesweit auf 161 und die Anzahl der Wolfspaare auf 43 gestiegen.",
    "quelle": "SPEKTRUM",
    "articleUrl":
      "https://www.spektrum.de/news/woelfe-breiten-sich-in-deutschland-weiter-aus/2081601",
    "sortKey": 2,
    "language": "de",
    "categoryID": "animal_rights",
  },
};

export const item14_2022_11_29: ContentfulItem = {
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
    "id": "49wFaIr1yn2Kw59fVUMb7h",
    "type": "Entry",
    "createdAt": "2022-11-29T14:01:27.851Z",
    "updatedAt": "2022-11-29T14:01:27.851Z",
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
    "datum": "2022-11-29",
    "headline": "Good News braucht deine Unterstützung!",
    "layout": "Article",
    "bildManuell": {
      "sys": {
        "type": "Link",
        "linkType": "Asset",
        "id": "4MNq4pi9xV8PPPZ6sCAgwx",
      },
    },
    "photoCredit": "Bild: Good News",
    "teaserText":
      "Yay, ihr seid die Besten! 💚 Wir haben es dank euch fast geschafft, uns fehlen noch 392,08 Euro und dann haben wir den großen Teil unserer Kosten für diesen Monat gedeckt! Wir sagen DANKE, eure Good News Redaktion.",
    "quelle": "GOOD NEWS",
    "articleUrl": "https://goodnews.eu/unterstuetzen/",
    "sortKey": 9,
    "language": "de",
  },
};

export const item15_2022_11_28: ContentfulItem = {
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
    "updatedAt": "2022-11-29T14:00:21.157Z",
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
    "headline": "Wir brauchen noch einmal euren Support!",
    "layout": "Article",
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
};

export const item16_2022_11_28: ContentfulItem = {
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
};

export const item17_2022_11_28: ContentfulItem = {
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
};

export const item18_2022_11_28: ContentfulItem = {
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
};

export const item19_2022_11_28: ContentfulItem = {
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
};

export const offset10limit10: ContentfulEntriesResponse = {
  "sys": {
    "type": "Array",
  },
  "total": 13999,
  "skip": 10,
  "limit": 10,
  "items": [
    item10_2022_11_29,
    item11_2022_11_29,
    item12_2022_11_29,
    item13_2022_11_29,
    item14_2022_11_29,
    item15_2022_11_28,
    item16_2022_11_28,
    item17_2022_11_28,
    item18_2022_11_28,
    item19_2022_11_28,
  ],
  "includes": {
    "Asset": [
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
          "id": "1ncsN0cYbnEIm52VP91DqG",
          "type": "Asset",
          "createdAt": "2022-11-29T13:59:43.515Z",
          "updatedAt": "2022-11-29T13:59:43.515Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment",
            },
          },
          "revision": 1,
          "locale": "de-DE",
        },
        "fields": {
          "title": "1",
          "description": "",
          "file": {
            "url":
              "//images.ctfassets.net/evvo9u5z5a9q/1ncsN0cYbnEIm52VP91DqG/b1e4897f0ceee86a38ad24483c50b8e0/1.png",
            "details": {
              "size": 2050160,
              "image": {
                "width": 1080,
                "height": 1080,
              },
            },
            "fileName": "1.png",
            "contentType": "image/png",
          },
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
          "id": "20MPRDYdAN6QhOZhlfr6wF",
          "type": "Asset",
          "createdAt": "2022-11-29T13:51:17.680Z",
          "updatedAt": "2022-11-29T13:51:17.680Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment",
            },
          },
          "revision": 1,
          "locale": "de-DE",
        },
        "fields": {
          "title": "5",
          "description": "",
          "file": {
            "url":
              "//images.ctfassets.net/evvo9u5z5a9q/20MPRDYdAN6QhOZhlfr6wF/2629767aa26d27d24c12f1939ea1273e/5.png",
            "details": {
              "size": 2728348,
              "image": {
                "width": 1080,
                "height": 1080,
              },
            },
            "fileName": "5.png",
            "contentType": "image/png",
          },
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
          "id": "2NEW4SNXnSN4S4eunmonWJ",
          "type": "Asset",
          "createdAt": "2022-11-28T11:51:35.654Z",
          "updatedAt": "2022-11-28T11:51:35.654Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment",
            },
          },
          "revision": 1,
          "locale": "de-DE",
        },
        "fields": {
          "title": "Spendenkampagne (8)",
          "file": {
            "url":
              "//images.ctfassets.net/evvo9u5z5a9q/2NEW4SNXnSN4S4eunmonWJ/1e5402d682817cc4d121a4c1a238d8c2/Spendenkampagne__8_.png",
            "details": {
              "size": 91525,
              "image": {
                "width": 1080,
                "height": 1080,
              },
            },
            "fileName": "Spendenkampagne (8).png",
            "contentType": "image/png",
          },
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
          "id": "2zrcrohGeNwnMHhh7aTcb2",
          "type": "Asset",
          "createdAt": "2022-11-28T14:22:18.299Z",
          "updatedAt": "2022-11-28T14:22:18.299Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment",
            },
          },
          "revision": 1,
          "locale": "de-DE",
        },
        "fields": {
          "title": "pexels-brigitte-tohm-287222",
          "description": "",
          "file": {
            "url":
              "//images.ctfassets.net/evvo9u5z5a9q/2zrcrohGeNwnMHhh7aTcb2/edb551ad36043a863202c824a92a7a3f/pexels-brigitte-tohm-287222.jpg",
            "details": {
              "size": 124069,
              "image": {
                "width": 1280,
                "height": 853,
              },
            },
            "fileName": "pexels-brigitte-tohm-287222.jpg",
            "contentType": "image/jpeg",
          },
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
          "id": "3KiCwIIXudhXgsuepqMNim",
          "type": "Asset",
          "createdAt": "2022-11-29T13:54:39.597Z",
          "updatedAt": "2022-11-29T13:54:39.597Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment",
            },
          },
          "revision": 1,
          "locale": "de-DE",
        },
        "fields": {
          "title": "6",
          "description": "",
          "file": {
            "url":
              "//images.ctfassets.net/evvo9u5z5a9q/3KiCwIIXudhXgsuepqMNim/e812c627414896f3be73ed0c5107000a/6.png",
            "details": {
              "size": 1803127,
              "image": {
                "width": 1080,
                "height": 1080,
              },
            },
            "fileName": "6.png",
            "contentType": "image/png",
          },
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
          "id": "4MNq4pi9xV8PPPZ6sCAgwx",
          "type": "Asset",
          "createdAt": "2022-11-29T14:01:05.306Z",
          "updatedAt": "2022-11-29T14:01:05.306Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment",
            },
          },
          "revision": 1,
          "locale": "de-DE",
        },
        "fields": {
          "title": "Spendenkampagne",
          "description": "",
          "file": {
            "url":
              "//images.ctfassets.net/evvo9u5z5a9q/4MNq4pi9xV8PPPZ6sCAgwx/a8d0bb498aacc4eb8440b1189b227bdc/Spendenkampagne.png",
            "details": {
              "size": 92132,
              "image": {
                "width": 1080,
                "height": 1080,
              },
            },
            "fileName": "Spendenkampagne.png",
            "contentType": "image/png",
          },
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
          "id": "5DlC7W7quJFCeZfJsr1nfY",
          "type": "Asset",
          "createdAt": "2022-11-28T14:11:29.579Z",
          "updatedAt": "2022-11-28T14:11:29.579Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment",
            },
          },
          "revision": 1,
          "locale": "de-DE",
        },
        "fields": {
          "title": "Screenshot (35)",
          "description": "",
          "file": {
            "url":
              "//images.ctfassets.net/evvo9u5z5a9q/5DlC7W7quJFCeZfJsr1nfY/3f3db45e6a68a30fa01ae6ae1c28ebbc/Screenshot__35_.png",
            "details": {
              "size": 3727154,
              "image": {
                "width": 3000,
                "height": 2000,
              },
            },
            "fileName": "Screenshot (35).png",
            "contentType": "image/png",
          },
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
          "id": "7zjCfPa424DCpIrTtHaGsR",
          "type": "Asset",
          "createdAt": "2022-11-29T13:57:56.099Z",
          "updatedAt": "2022-11-29T13:57:56.099Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment",
            },
          },
          "revision": 1,
          "locale": "de-DE",
        },
        "fields": {
          "title": "4",
          "description": "",
          "file": {
            "url":
              "//images.ctfassets.net/evvo9u5z5a9q/7zjCfPa424DCpIrTtHaGsR/001d7bac2331f03f73ba2bff92ae6c0c/4.png",
            "details": {
              "size": 1753420,
              "image": {
                "width": 1080,
                "height": 1080,
              },
            },
            "fileName": "4.png",
            "contentType": "image/png",
          },
        },
      },
    ],
  },
};
