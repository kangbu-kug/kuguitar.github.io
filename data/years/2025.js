// 2025년
KUG.addYear({
  year: 2025,

  // 회장단 — "이름 (학과학번)"
  officers: {
    gen: 52,
    president: ["김재현 (경영24)"],
    vice: ["계민지 (심리24)", "윤지호 (보건환경21)"],
    treasurer: ["이한결 (컴퓨터21)"]
  },

  // 공지사항
  notices: [
    {
      id: "51-welcome",
      category: "재학생",
      tag: "연주회",
      title: "제51회 신입생환영연주회 날짜 및 리허설 일정",
      date: "2025-01-22",
      body: [
        "안녕하세요, 고전기타부 51기 회장 김재현입니다.",
        "제51회 신입생환영연주회 날짜와 리허설 일정이 다음과 같이 확정되어 알려드리고자 합니다.",
        { h: "제51회 신입생환영연주회" },
        { list: ["일시: 3월 7일 금요일 오후 7시", "장소: 고려대학교 인촌기념관 대강당"] },
        { h: "리허설 일정" },
        {
          list: [
            "1차 리허설: 1월 25일 오후 4시 / 학생회관 6층 연습장",
            "2차 리허설: 2월 13일 오후 7시 / 4.18기념관 B106호",
            "3차 리허설: 3월 2일 오후 3시 / 4.18기념관 B106호"
          ]
        },
        "2, 3차 리허설의 경우 학생회관 리모델링으로 인해 4.18기념관 지하 연습실에서 진행하려고 계획 중이나, 아직 장소 대관이 확보되지 않아 추후 변경될 시 정정하겠습니다.",
        "또한 동방 이사가 모두 마무리되어 현재 제2동방에서 합주 연습을 하고 있습니다. 새로운 환경에서 열심히 연습하고 있는 부원들을 위해 많은 관심과 응원 부탁드립니다!"
      ]
    },
    {
      id: "2024-account",
      category: "재학생",
      tag: "공시",
      title: "2024년 분기별 회계보고서",
      date: "2025-01-04",
      body: ["2024년 분기별 회계보고서를 공시합니다. 상세 내용은 첨부파일을 참고해 주세요."],
      attachment: {
        label: "고전기타부 분기별 회계보고서_2024.pdf",
        url: "https://www.notion.so/0cd09e04d6b14b729cf1884717717d58"
      }
    }
  ],

  // 연주회 (날짜순)
  concerts: [
    {
      "id": "1c057cbc",
      "slug": "2025_spring",
      "title": "51회 신입생환영연주회 (’25)",
      "type": "신입",
      "date": "2025-03-07",
      "venue": "고려대 인촌기념관",
      "conductor": "김한결(50)",
      "poster": "assets/posters/1c057cbc.webp",
      "video": "https://youtu.be/uFv-dJQ0rGg",
      "pamphlet": 12,
      "program": [
        {
          "performers": "김진혁(49) 김세린(51) 김재현(51)",
          "pieces": [
            {
              "title": "Habanera",
              "composer": "Georges Bizet (arr. William Kanengiser)",
              "videos": [
                {
                  "url": "https://www.youtube.com/watch?v=Q3XktN2rPtE",
                  "length": "2:17"
                }
              ]
            },
            {
              "title": "Salut d’Amour",
              "composer": "Edward Elgar (arr. 허견)",
              "videos": [
                {
                  "url": "https://www.youtube.com/watch?v=_ipkNxa2k2Y",
                  "length": "3:27"
                }
              ]
            }
          ]
        },
        {
          "performers": "박연수(50) 안정언(50) 유다영(50)",
          "pieces": [
            {
              "title": "Last Carnival",
              "composer": "都留 教博(Norihiro Tsuru) (arr. 허견)",
              "videos": [
                {
                  "url": "https://www.youtube.com/watch?v=9Eh_QuLcmyM",
                  "length": "4:26"
                }
              ]
            },
            {
              "title": "Flower Dance",
              "composer": "DJ Okawari (arr. 박연수)",
              "videos": [
                {
                  "url": "https://www.youtube.com/watch?v=45IYHDuZrc0",
                  "length": "4:42"
                }
              ]
            }
          ]
        },
        {
          "performers": "이현민(50) 양찬우(51) 정소윤(51) 허권(51)",
          "pieces": [
            {
              "title": "Irlandaise",
              "composer": "Claude Bolling (arr. 서윤일)",
              "videos": [
                {
                  "url": "https://www.youtube.com/watch?v=AsTUBf6CfwM",
                  "length": "3:14"
                }
              ]
            },
            {
              "title": "Toki wo Koete, from movie “Be with You”",
              "composer": "Matsutani Suguru (arr. 채정민)"
            }
          ]
        },
        {
          "performers": "김한결(50) 이인서(50) 조연우(50) 조현웅(50)",
          "pieces": [
            {
              "title": "Moon River",
              "composer": "Henri Mancini (arr. 弘和 佐藤(Hirokazu Sato))",
              "videos": [
                {
                  "url": "https://www.youtube.com/watch?v=kwMY83yokDg",
                  "length": "4:00"
                }
              ]
            },
            {
              "title": "Waltz of the Flowers from “The Nutcracker” Suite",
              "composer": "Pyotr Ilyich Tchaikovsky (arr. Andrew York)",
              "videos": [
                {
                  "url": "https://www.youtube.com/watch?v=IKtGBHzGpxs",
                  "length": "6:13"
                }
              ]
            }
          ]
        },
        {
          "performers": "지휘 김한결(50)",
          "pieces": [
            {
              "title": "Mansion Dance Battle (Kartrider OST)",
              "composer": "StudioEIM (arr. 김한결)",
              "videos": [
                {
                  "url": "https://www.youtube.com/watch?v=vnpVbH3L0EM",
                  "length": "2:28"
                }
              ]
            },
            {
              "title": "Music from LA LA LAND",
              "composer": "Justin Hurwitz (arr. 김주형)",
              "videos": [
                {
                  "url": "https://www.youtube.com/watch?v=G5G05yit9EU",
                  "length": "5:04"
                }
              ]
            },
            {
              "title": "Eine Kleine Nachtmusik",
              "composer": "Wolfgang Amadeus Mozart (arr. 김한결 after 허견)",
              "videos": [
                {
                  "url": "https://www.youtube.com/watch?v=uFv-dJQ0rGg",
                  "length": "5:53"
                }
              ]
            },
            {
              "title": "Merry Christmas Mr. Lawrence",
              "composer": "坂本 龍一(Ryuichi Sakamoto) (arr. 김한결)",
              "videos": [
                {
                  "url": "https://www.youtube.com/watch?v=k8RfVvJzfmA",
                  "length": "5:02"
                }
              ]
            }
          ],
          "roster": [
            "1st 조연우(50) 신지영(45) 김진혁(49) 강두현(51) 노우진(51) 정소윤(51)",
            "2nd 김도연(50) 장현종(50) 권지웅(51) 이장일(51) 허권(51)",
            "3rd 양찬우(51) 조현웅(50) 김재현(51) 박지현(51) 윤지호(51)",
            "4th 이한결(51) 김재원(50) 이인서(50) 김태완2(51) 정혜진(51)",
            "Cb 이현민(50) 박연수(50)",
            "Per 유다영(50) 이성윤(51)"
          ]
        }
      ],
      "nid": "1c057cbcfe7380f88845f37bd097f87c",
      "playlist": {
        "id": "PLu2Ylf-tHP2P0YT3x7ArC6YOm30erc78z",
        "title": "2025 신입생환영연주회",
        "tracks": [
          {
            "v": "IKtGBHzGpxs",
            "t": "Waltz of the Flowers from 'The Nutcracker' - Tchaikovsky(arr. by Andrew York)",
            "d": 373
          },
          {
            "v": "kwMY83yokDg",
            "t": "Moon River - Henry Mancini(arr. by Hirokazu Sato)",
            "d": 240
          },
          {
            "v": "Xxd6TMp5Nwo",
            "t": "시간을 넘어서(時を越えて) from Movie '지금 만나러 갑니다' - Matsutani Suguru(arr. by 채정민)",
            "d": 334
          },
          {
            "v": "AsTUBf6CfwM",
            "t": "Irlandaise - Claude Bolling(arr. by 서윤일)",
            "d": 194
          },
          {
            "v": "45IYHDuZrc0",
            "t": "Flower Dance - DJ Okawari(arr. by 박연수)",
            "d": 282
          },
          {
            "v": "9Eh_QuLcmyM",
            "t": "Last Carnival - Tsuru Norihiro(arr. by 허견)",
            "d": 266
          },
          {
            "v": "_ipkNxa2k2Y",
            "t": "Salut d'Amour - Edward Elgar(arr. by 허견)",
            "d": 207
          },
          {
            "v": "Q3XktN2rPtE",
            "t": "Habanera from Opera 'Carmen' - G. Bizet(arr. by William Kanengiser)",
            "d": 137
          },
          {
            "v": "k8RfVvJzfmA",
            "t": "Merry Christmas Mr. Lawrence - Ryuichi Sakamoto(arr. by 김한결)",
            "d": 302
          },
          {
            "v": "uFv-dJQ0rGg",
            "t": "Eine Kleine Nachtmusik K.525 - I. Allegro - W. A. Mozart(arr. by 김한결 after 허견)",
            "d": 353
          },
          {
            "v": "G5G05yit9EU",
            "t": "Music From LA LA LAND - Justin Hurwitz(arr. by 김주형)",
            "d": 304
          },
          {
            "v": "vnpVbH3L0EM",
            "t": "Kartrider Mansion Dance Battle - Studio EIM(arr. by 김한결)",
            "d": 148
          }
        ]
      }
    },
    {
      "id": "29c57cbc",
      "slug": "2025_fall",
      "title": "52회 정기연주회 (’25)",
      "type": "정기",
      "date": "2025-08-23",
      "venue": "고려대 418기념관",
      "conductor": "김도영(47)",
      "poster": "assets/posters/29c57cbc.webp",
      "video": "https://youtu.be/-mk0mEdSxDs",
      "pamphlet": 12,
      "program": [
        {
          "performers": "권결(52) 권지웅(51) 김태완2(51) 허권(51)",
          "pieces": [
            {
              "title": "Tears in Heaven",
              "composer": "Eric Clapton (arr. 볕좋은마당)",
              "videos": [
                {
                  "url": "https://www.youtube.com/watch?v=VmuSOQZUSo0",
                  "length": "4:46"
                }
              ]
            },
            {
              "title": "Ponyo on the Cliff by the Sea",
              "composer": "久石 譲(Joe Hisaishi) (arr. Nobuyuki Hirakura)",
              "videos": [
                {
                  "url": "https://www.youtube.com/watch?v=q7CAP8U6NfI",
                  "length": "2:28"
                }
              ]
            }
          ]
        },
        {
          "performers": "김도연(50) 김재현(51) 김태완2(51) 허권(51)",
          "pieces": [
            {
              "title": "The Swan LK243",
              "composer": "Catriona McKay (arr. M.Baker)",
              "videos": [
                {
                  "url": "https://www.youtube.com/watch?v=22V0vZfIRpA",
                  "length": "4:58"
                }
              ]
            },
            {
              "title": "The Merry-go-round of Life",
              "composer": "久石 譲(Joe Hisaishi) (arr. Nobuyuki Hirakura)",
              "videos": [
                {
                  "url": "https://www.youtube.com/watch?v=nOSysAXq_Jk",
                  "length": "3:13"
                }
              ]
            }
          ]
        },
        {
          "performers": "김도영(47) 김현지(49) 김재현(51) 임선재(51)",
          "pieces": [
            {
              "title": "Romance No.1",
              "composer": "Francis Kleynjans (arr. Seo Yunil)",
              "videos": [
                {
                  "url": "https://www.youtube.com/watch?v=Hm1aPqYKW6c",
                  "length": "2:36"
                }
              ]
            },
            {
              "title": "Rainy Walk",
              "composer": "Akis Filios",
              "videos": [
                {
                  "url": "https://www.youtube.com/watch?v=WNGWNLbIUtk",
                  "length": "2:27"
                }
              ]
            }
          ]
        },
        {
          "performers": "송지민 민승현 김영훈",
          "pieces": [
            {
              "title": "Pirates of the Caribbean Suite",
              "composer": "Klaus Badelt, Geoff Zanelli, Hans Zimmer (arr. Nathan Bredeson)",
              "videos": [
                {
                  "url": "https://www.youtube.com/watch?v=UpwP1164qmQ",
                  "length": "9:41"
                }
              ]
            }
          ]
        },
        {
          "performers": "지휘 김도영(47)",
          "pieces": [
            {
              "title": "Ue o Muite Aruko, from the Movie ‘From Up on Poppy Hill’",
              "composer": "Hachidai Nakamura (arr. Nobuyuki Hirakura)",
              "videos": [
                {
                  "url": "https://www.youtube.com/watch?v=8sDcQAsVKjU",
                  "length": "4:37"
                }
              ]
            },
            {
              "title": "Try everything, from the Movie ‘Zootopia’",
              "composer": "Sia Furler, Tor Hermansen, Mikkel Eriksen (arr. 신지영)",
              "videos": [
                {
                  "url": "https://www.youtube.com/watch?v=QI6_VElpYmw",
                  "length": "3:03"
                }
              ]
            },
            {
              "title": "Viva la vida",
              "composer": "Coldplay (arr. 신지영)",
              "videos": [
                {
                  "url": "https://www.youtube.com/watch?v=-mk0mEdSxDs",
                  "length": "4:54"
                }
              ]
            },
            {
              "title": "Radetzky-Marsch, Op.228",
              "composer": "Johann Strauss Sr. (arr. 허견)",
              "videos": [
                {
                  "url": "https://www.youtube.com/watch?v=zwPHZVWbaf8",
                  "length": "4:00"
                }
              ]
            }
          ],
          "roster": [
            "1st 이한결(51) 이승현(46) 김태완2(51) 윤지호(51) 김은솔(52) 김재용(52) 이채연(52)",
            "2nd 권결(52) 김도연(50) 김재현(51) 남혜진(52) 안홍규(52) 정민찬(52)",
            "3rd 허권(51) 조연우(50) 임선재(51) 김지우(52) 김한주(52) 이슬아(52)",
            "4th 권지웅(51) 김진혁(49) 이건우1(52) 김지섭(52) 박준용(52) 이성곤(52)",
            "Cb 계민지(51) 정혜진(51)",
            "Per 신지영(45) 유다영(50) 이장일(51)"
          ]
        }
      ],
      "nid": "29c57cbcfe7380049d4cc528694fcd30",
      "playlist": {
        "id": "PLu2Ylf-tHP2Prk_knZZEJBCZUqLGs2RzB",
        "title": "2025 제 52회 정기연주회",
        "tracks": [
          {
            "v": "8sDcQAsVKjU",
            "t": "Ue o Muite Aruko(上を向いて歩こう) – Hachidai Nakamura",
            "d": 277
          },
          {
            "v": "QI6_VElpYmw",
            "t": "Try Everything (from the Movie ‘Zootopia’)",
            "d": 183
          },
          {
            "v": "-mk0mEdSxDs",
            "t": "Viva la Vida – Coldplay(arr. 신지영)",
            "d": 294
          },
          {
            "v": "zwPHZVWbaf8",
            "t": "Radetzky Marsch, Op.228 – Johann Strauss Sr.(arr. 허견)",
            "d": 240
          },
          {
            "v": "VmuSOQZUSo0",
            "t": "Tears in Heaven – Eric Clapton(arr. 볕좋은마당)",
            "d": 286
          },
          {
            "v": "q7CAP8U6NfI",
            "t": "Ponyo on the Cliff by the Sea – Joe Hisaishi(arr. Nobuyuki Hirakura)",
            "d": 148
          },
          {
            "v": "22V0vZfIRpA",
            "t": "The Swan LK243 – Catriona McKay(arr. M.Baker)",
            "d": 298
          },
          {
            "v": "nOSysAXq_Jk",
            "t": "The Merry-go-round of Life – Joe Hisaishi(arr. Nobuyuki Hirakura)",
            "d": 193
          },
          {
            "v": "Hm1aPqYKW6c",
            "t": "Romance No.1 – Francis Kleynjans(arr. 서윤일)",
            "d": 156
          },
          {
            "v": "WNGWNLbIUtk",
            "t": "Rainy Walk – Akis Filios",
            "d": 147
          },
          {
            "v": "UpwP1164qmQ",
            "t": "Pirates of the Caribbean Suite",
            "d": 581
          }
        ]
      }
    }
  ]
});
