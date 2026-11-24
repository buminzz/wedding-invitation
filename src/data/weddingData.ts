export interface GalleryImage {
  id: string;
  url: string;
  koAlt: string;
  enAlt: string;
  enCaption: string;
}

export interface KoTransportationItem {
  category: '지하철' | '버스' | '자가용 및 주차';
  lines: string[];
}

export interface EnTravelNote {
  heading: string;
  description: string;
}

export interface KoBankAccount {
  id: string;
  relationLabel: string;
  owner: string;
  bankName: string;
  accountNumber: string;
}

export interface KoAccountGroup {
  side: 'groom' | 'bride';
  title: string;
  accounts: KoBankAccount[];
}

export interface KoEditionData {
  pageTitle: string;
  hero: {
    topLabel: string;
    dateBadge: string;
    groomName: string;
    brideName: string;
    englishNames: string;
    photoUrl: string;
    photoAlt: string;
    quote: string;
    inviteLine: string;
    ceremonyDateText: string;
    ceremonyVenueText: string;
  };
  greeting: {
    kicker: string;
    heading: string;
    paragraphs: string[];
    groomFamily: {
      parents: string;
      relation: string;
      child: string;
    };
    brideFamily: {
      parents: string;
      relation: string;
      child: string;
    };
  };
  gallery: {
    kicker: string;
    heading: string;
    items: GalleryImage[];
  };
  location: {
    kicker: string;
    heading: string;
    venueFullName: string;
    roadAddress: string;
    datetimeAndTel: string;
    copyButtonLabel: string;
    copiedToast: string;
    mapPinTitle: string;
    naverMapUrl: string;
    kakaoMapUrl: string;
    tmapUrl: string;
    transport: KoTransportationItem[];
  };
  account: {
    kicker: string;
    heading: string;
    description: string;
    copyButtonLabel: string;
    groups: KoAccountGroup[];
  };
  footer: {
    kakaoButtonLabel: string;
    copyLinkButtonLabel: string;
    copiedLinkToast: string;
    fallbackShareToast: string;
    signOff: string;
  };
}

export interface EnEditionData {
  pageTitle: string;
  hero: {
    volumeLabel: string;
    dateLine: string;
    coupleDisplay: string;
    photoUrl: string;
    photoAlt: string;
    headlineQuote: string;
    venueSummary: string;
  };
  letter: {
    kicker: string;
    heading: string;
    salutation: string;
    paragraphs: string[];
    signOffName: string;
    parentsCreditLine: string;
  };
  weekendSchedule: {
    kicker: string;
    heading: string;
    items: Array<{
      time: string;
      title: string;
      location: string;
      note: string;
    }>;
  };
  gallery: {
    kicker: string;
    heading: string;
    items: GalleryImage[];
  };
  venueAndTravel: {
    kicker: string;
    heading: string;
    venueName: string;
    hallDetail: string;
    date: string;
    copyAddressLabel: string;
    copiedToast: string;
    directionsUrl: string;
    notes: EnTravelNote[];
  };
  footer: {
    noGiftsNote: string;
    shareLinkLabel: string;
    copiedLinkToast: string;
    monogram: string;
  };
}

export const KO_WEDDING_DATA: KoEditionData = {
  pageTitle: 'Eric · 강이든 결혼식에 초대합니다',
  hero: {
    topLabel: 'WEDDING INVITATION',
    dateBadge: '2026. 12. 05. SAT',
    groomName: 'Eric',
    brideName: '강이든',
    englishNames: 'Eric Zaragoza · Eden Kang',
    photoUrl: '',
    photoAlt: '웨딩 메인 사진',
    quote: 'Two souls with but a single thought, two hearts that beat as one.',
    inviteLine:
      '서로의 계절이 되어줄 두 사람의 시작에 소중한 분들을 초대합니다.',
    ceremonyDateText: '2026년 12월 05일 토요일 오후 1시 30분',
    ceremonyVenueText: '구세군 메이페어 커뮤니티 교회 대예배실',
  },
  greeting: {
    kicker: 'INVITATION',
    heading: '소중한 분들을 초대합니다',
    paragraphs: [
      '서로에게 머물 곳이 되어주고,\n서로의 계절을 함께 지나며,\n사랑으로 하나 되는 삶을 시작하려 합니다.',
      '소중한 분들을 모시고\n감사의 마음으로 예배드리며 결혼식을 올립니다.',
      '함께해 주신다면 큰 기쁨이겠습니다.',
    ],
    groomFamily: {
      parents: 'Danielle Zaragoza · Guadalupe Zaragoza',
      relation: '의 장남',
      child: 'Eric',
    },
    brideFamily: {
      parents: '강명원 · 홍동숙',
      relation: '의 장녀',
      child: '이든',
    },
  },
  gallery: {
    kicker: 'GALLERY',
    heading: '우리의 순간',
    items: [
      {
        id: 'g1',
        url: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
        koAlt: '웨딩 사진 1',
        enAlt: 'Portrait in the studio',
        enCaption: 'I. Quiet afternoon light before the vows',
      },
      {
        id: 'g2',
        url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80',
        koAlt: '웨딩 사진 2',
        enAlt: 'Bridal bouquet detail',
        enCaption: 'II. White garden florals and linen',
      },
      {
        id: 'g3',
        url: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=800&q=80',
        koAlt: '웨딩 사진 3',
        enAlt: 'Holding hands',
        enCaption: 'III. Side by side in Seoul',
      },
      {
        id: 'g4',
        url: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80',
        koAlt: '웨딩 사진 4',
        enAlt: 'Outdoor walk together',
        enCaption: 'IV. Late autumn walk',
      },
      {
        id: 'g5',
        url: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=80',
        koAlt: '웨딩 사진 5',
        enAlt: 'Monochrome close-up',
        enCaption: 'V. A shared laugh in monochrome',
      },
      {
        id: 'g6',
        url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80',
        koAlt: '웨딩 사진 6',
        enAlt: 'Golden hour moment',
        enCaption: 'VI. Looking toward November 28',
      },
    ],
  },
  location: {
    kicker: 'LOCATION',
    heading: '오시는 길',
    venueFullName: '구세군 메이페어 커뮤니티 교회 대예배실',
    roadAddress: '5040 N Pulaski Ave Chicago IL 60630',
    datetimeAndTel: '2026년 12월05일 (토) 오후 1시 30분',
    copyButtonLabel: '주소 복사하기',
    copiedToast: '예식장 주소가 복사되었습니다.',
    mapPinTitle: '구세군 메이페어 커뮤니티 교회',
    naverMapUrl: '',
    kakaoMapUrl: '',
    tmapUrl: '',
    transport: [],
  },
  account: {
    kicker: 'CONGRATULATORY GIFT',
    heading: '마음 전하실 곳',
    description:
      '참석이 어려우신 분들을 위해 기재하였습니다.\n너그러운 마음으로 양해 부탁드립니다.',
    copyButtonLabel: '계좌복사',
    groups: [
      {
        side: 'bride',
        title: '신부측 계좌번호',
        accounts: [
          {
            id: 'bride-main',
            owner: '강이든',
            relationLabel: '신부',
            bankName: '신한은행',
            accountNumber: '110-234-724242',
          },
          {
            id: 'bride-father',
            owner: '강명원',
            relationLabel: '신부 아버지',
            bankName: '기업은행',
            accountNumber: '377-140-3260-1011',
          },
          {
            id: 'bride-mother',
            owner: '홍동숙',
            relationLabel: '신부 어머니',
            bankName: '신한은행',
            accountNumber: '110-236-859300',
          },
        ],
      },
    ],
  },
  footer: {
    kakaoButtonLabel: '',
    copyLinkButtonLabel: '',
    copiedLinkToast: '',
    fallbackShareToast: '',
    signOff: 'Eric Zaragoza & Eden Kang',
  },
};

export const EN_WEDDING_DATA: EnEditionData = {
  pageTitle: 'Eric & Eden — Dec 05, 2026',
  hero: {
    volumeLabel: 'WEDDING INVITATION',
    dateLine: 'SATURDAY, DECEMBER 05, 2026',
    coupleDisplay: 'Eric & Eden',
    photoUrl: '',
    photoAlt: 'editorial wedding portrait',
    headlineQuote:
      'Together with their families, Eric and Eden invite you to share in the joy of their marriage.',
    venueSummary: 'The Salvation Army Mayfair Community Church',
  },
  letter: {
    kicker: 'THE INVITATION',
    heading: 'A Note to Our Dear Friends',
    salutation: 'Dear family and friends,',
    paragraphs: [
      'We hope to become a home for one another,\nto walk through every season of life together,\nand to begin a life united in love.',
      'With grateful hearts,\nwe invite you to join us as we worship\nand celebrate our marriage.',
      'It would be a great joy to have you with us.',
    ],
    signOffName: 'With warmth, Eric & Eden',
    parentsCreditLine:
      'Parents of the Groom: Danielle Zaragoza & Guadalupe Zaragoza \nParents of the Bride: Myeongwon Kang & Dongsook Hong',
  },
  weekendSchedule: {
    kicker: 'ORDER OF THE DAY',
    heading: 'Saturday Schedule',
    items: [],
  },
  gallery: {
    kicker: 'SELECTED FRAMES',
    heading: 'Lookbook',
    items: KO_WEDDING_DATA.gallery.items,
  },
  venueAndTravel: {
    kicker: 'VENUE & TRAVEL',
    heading: '',
    venueName: 'The Salvation Army Mayfair Community Church',
    hallDetail: '5040 N Pulaski Ave Chicago IL 60630',
    date: 'SATURDAY, DECEMBER 05, 2026',
    copyAddressLabel: 'Copy Address',
    copiedToast: 'Venue address copied to clipboard.',
    directionsUrl: '',
    notes: [],
  },
  footer: {
    noGiftsNote: 'Your presence on December 05 is the greatest gift of all.',
    shareLinkLabel: 'Copy Invitation Link',
    copiedLinkToast: 'Invitation link copied to clipboard.',
    monogram: 'Eric Zaragoza & Eden Kang',
  },
};
