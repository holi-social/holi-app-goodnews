import {
  ContentfulEntriesResponse,
  ContentfulItem,
  ContentfulItemBild,
} from "./contentful_types.ts";

export const item0_id = "item0_id";
export const item0_headline = "Canada increases the price of pollution";
export const item0_bildSource =
  "https://www.ecowatch.com/wp-content/uploads/2022/11/prince-edward-island.jpg";
export const item0_teaserText =
  "Canada has updated its carbon pollution pricing system introduced in 2019 to ensure major polluters will pay more for their emissions over time. The changes will also increase funding for families participating in the Climate Action Incentive.";
export const item0_photoCredit =
  "Image:   shaunl / E+ / Getty Images via ecowatch.com";
export const item0_articleUrl =
  "https://www.ecowatch.com/canada-pollution-pricing.html";
export const item0_quelle = "ECOWATCH";
export const item0 = (
  datum: string,
  language: "de" | "en",
  sortKey: number | undefined = undefined,
): ContentfulItem => ({
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
    "bildSource": item0_bildSource,
    "photoCredit": item0_photoCredit,
    "teaserText": item0_teaserText,
    "quelle": item0_quelle,
    "articleUrl": item0_articleUrl,
    "sortKey": sortKey || 1,
    "language": language,
    "categoryID": "climate",
  },
});

export const item1_id = "item1_id";
export const item1_headline = "One man's mission against trash";
export const item1_bild: ContentfulItemBild = {
  "bildSource":
    "https://i.guim.co.uk/img/media/3516e35f66c5e1204abeeabc3b6c225f9d153cc8/0_0_6000_4000/master/6000.jpg?width=1010&quality=45&auto=format&fit=max&dpr=2&s=a8301f7352061989679af2a8c24d0784",
};
export const item1 = (
  datum: string,
  language: "de" | "en",
  sortKey: number | undefined = undefined,
): ContentfulItem => ({
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
    "sortKey": sortKey || 6,
    "language": language,
    "categoryID": "climate",
  },
});

export const item2_id = "item2_id";
export const item2_headline = "Fetal monitoring app for remote areas";
export const item2_bild_url =
  "https://images.ctfassets.net/evvo9u5z5a9q/2GlEQvbXVValp0jkqKZEqh/0271e2aadeb28bb559393bdd5c088b92/Screenshot__37_.png";
export const item2_bild: ContentfulItemBild = {
  "bildManuell": {
    "sys": {
      "type": "Link",
      "linkType": "Asset",
      "id": "2GlEQvbXVValp0jkqKZEqh",
    },
  },
};
export const item2 = (
  datum: string,
  language: "de" | "en",
  sortKey: number | undefined = undefined,
): ContentfulItem => ({
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
    "sortKey": sortKey || 2,
    "language": language,
    "categoryID": "global_health",
  },
});

export const item3_id = "item3_id";
export const item3_headline = "Permanent 4-day work week, same pay?";
export const item3_bildSource =
  "https://images.unsplash.com/photo-1557425493-6f90ae4659fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80";
export const item3 = (
  datum: string,
  language: "de" | "en",
  sortKey: number | undefined = undefined,
): ContentfulItem => ({
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
    "sortKey": sortKey || 3,
    "language": language,
    "categoryID": "global_health",
  },
});

export const item4_id = "item4_id";
export const item4_headline = "New solar panels from panel production dust";
export const item4_bild: ContentfulItemBild = {
  "bildSource":
    "https://scx2.b-cdn.net/gfx/news/hires/2022/new-solar-panels-from.jpg",
};
export const item4 = (
  datum: string,
  language: "de" | "en",
  sortKey: number | undefined = undefined,
): ContentfulItem => ({
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
    "sortKey": sortKey || 4,
    "language": language,
    "categoryID": "sustainability",
  },
});

export const item5_id = "item5_id";
export const item5_headline = "New tool turns handwriting into code";
export const item5_bild: ContentfulItemBild = {
  "bildSource":
    "https://scx2.b-cdn.net/gfx/news/2022/new-programming-tool-t.jpg",
};
export const item5 = (
  datum: string,
  language: "de" | "en",
  sortKey: number | undefined = undefined,
): ContentfulItem => ({
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
    "sortKey": sortKey || 5,
    "language": language,
    "categoryID": "digitization",
  },
});

export const item6_id = "item6_id";
export const item6_headline = "Support us ✨and help us spread optimism!";
export const item6_bild: ContentfulItemBild = {
  "bildManuell": {
    "sys": {
      "type": "Link",
      "linkType": "Asset",
      "id": "2ykn7DSH46uUg1TJc51iJ8",
    },
  },
};
export const item6 = (
  datum: string,
  language: "de" | "en",
): ContentfulItem => ({
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
    "language": language,
  },
});

export const item7_id = "item7_id";
export const item7_headline = "Slowenien stärkt die Pressefreiheit";
export const item7_bildManuell = {
  "sys": {
    "type": "Link",
    "linkType": "Asset",
    "id": "4DQZB6GeZutdteJSy07Mnt",
  },
};
export const item7_2022_11_29 = (
  datum: string,
  language: "de" | "en",
): ContentfulItem => ({
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
    "language": language,
    "categoryID": "education",
  },
});

export const item8_id = "item8_id";
export const item8_title = "Tuvalu gründet digitalen Staat";
export const item8_bild: ContentfulItemBild = {
  "bildManuell": {
    "sys": {
      "type": "Link",
      "linkType": "Asset",
      "id": "4EQK5W49r7UAZPMG3y15RV",
    },
  },
};
export const item8 = (
  datum: string,
  language: "de" | "en",
): ContentfulItem => ({
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
    "language": language,
    "categoryID": "digitization",
  },
});

export const item9_id = "item9_id";
export const item9_headline = "Fair Entspannung";
export const item9_bild: ContentfulItemBild = {
  "bildManuell": {
    "sys": {
      "type": "Link",
      "linkType": "Asset",
      "id": "3q1EpSvM7Db1h8nclZdI0u",
    },
  },
};
export const item9_2022_11_29 = (
  datum: string,
  language: "de" | "en",
): ContentfulItem => ({
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
    "language": language,
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

export const contentfulResponse = (
  skip: number,
  limit: number,
  items: ContentfulItem[],
): ContentfulEntriesResponse => ({
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
  },
});
