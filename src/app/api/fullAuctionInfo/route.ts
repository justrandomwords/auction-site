import { NextRequest } from "next/server";

const fullAuctionsInfo = [
  {
    "id": "78345",
    "title": "Рідкісний колекційний посуд",
    "price": 150,
    "startTime": "2:30:24",
    "history": [
      {
        "amount": 100,
        "name": "Степан",
        "surname": "Бандера",
        "time": "2012-04-23T18:25:43.511Z",
        "increase": 10
      },
      {
        "amount": 150,
        "name": "Олена",
        "surname": "Ковальчук",
        "time": "2015-08-12T09:40:22.789Z",
        "increase": 20
      },
      {
        "amount": 200,
        "name": "Ігор",
        "surname": "Петренко",
        "time": "2018-02-05T14:15:30.243Z",
        "increase": 15
      },
      {
        "amount": 75,
        "name": "Марія",
        "surname": "Шевченко",
        "time": "2020-11-19T20:55:12.632Z",
        "increase": 5
      },
      {
        "amount": 120,
        "name": "Василь",
        "surname": "Козак",
        "time": "2022-06-30T12:10:55.987Z",
        "increase": 8
      },
      {
        "amount": 180,
        "name": "Наталія",
        "surname": "Лисенко",
        "time": "2023-09-18T08:30:40.154Z",
        "increase": 12
      }
    ],
    "images": [
      "https://images.dog.ceo/breeds/hound-english/n02089973_3136.jpg",
      "https://images.dog.ceo/breeds/poodle-miniature/n02113712_317.jpg",
      "https://images.dog.ceo/breeds/chihuahua/n02085620_4572.jpg",
      "https://images.dog.ceo/breeds/stbernard/n02109525_10446.jpg",
      "https://images.dog.ceo/breeds/sharpei/noel.jpg",
      "https://images.dog.ceo/breeds/buhund-norwegian/hakon1.jpg",
      "https://images.dog.ceo/breeds/hound-plott/hhh_plott002.jpg"
    ],
    "descroption": "The condition reports for the lots offered by Santa Fe Art Auction (SFAA) are provided as a courtesy and convenience for potential buyers. The reports are not intended to nor do they substitute for physical examination by a buyer or the buyer's advisors. The condition reports are prepared by SFAA staff members who are not art conservators or restorers, nor do they possess the qualifications needed for comprehensive evaluation. Each condition report is an opinion of the staff member and should not be treated as a statement of fact. The absence of a condition report does not imply anything as to the condition of a particular lot. Buyers are reminded that the limited warranties are set forth in the Terms and Conditions of Sale and do not extend to condition. Each lot is sold as-is."
  },
  {
    "id": "98765",
    "title": "Exquisite Collectible China",
    "price": 300,
    "startTime": "3:45:12",
    "history": [
      {
        "amount": 200,
        "name": "John",
        "surname": "Smith",
        "time": "2014-03-15T12:35:21.123Z",
        "increase": 25
      },
      {
        "amount": 300,
        "name": "Emily",
        "surname": "Johnson",
        "time": "2017-07-28T16:50:44.789Z",
        "increase": 35
      },
      {
        "amount": 400,
        "name": "David",
        "surname": "Anderson",
        "time": "2020-01-10T21:25:32.243Z",
        "increase": 30
      },
      {
        "amount": 150,
        "name": "Sophia",
        "surname": "Taylor",
        "time": "2022-08-03T02:05:12.632Z",
        "increase": 15
      },
      {
        "amount": 240,
        "name": "Christopher",
        "surname": "Brown",
        "time": "2023-12-15T10:20:55.987Z",
        "increase": 20
      },
      {
        "amount": 360,
        "name": "Olivia",
        "surname": "Miller",
        "time": "2024-04-25T14:45:40.154Z",
        "increase": 25
      }
    ],
    "images": [
      "https://images.dog.ceo/breeds/hound-blood/n02088466_5898.jpg",
      "https://images.dog.ceo/breeds/hound-blood/n02088466_5898.jpg",
      "https://images.dog.ceo/breeds/hound-blood/n02088466_5898.jpg",
      "https://images.dog.ceo/breeds/hound-blood/n02088466_5898.jpg",
      "https://images.dog.ceo/breeds/hound-blood/n02088466_5898.jpg",
      "https://images.dog.ceo/breeds/hound-blood/n02088466_5898.jpg",
      "https://images.dog.ceo/breeds/hound-blood/n02088466_5898.jpg"
    ],
    "description": "This extraordinary collection of china is a testament to the craftsmanship of renowned artisans. The pieces have been meticulously curated and are presented in impeccable condition. Potential buyers are encouraged to conduct a physical examination or seek advice from professional advisors. The provided opinions on the condition are based on expertise but do not substitute for comprehensive evaluation by qualified conservators or restorers. The absence of a detailed condition report does not indicate the state of a specific item. Please refer to the Terms and Conditions of Sale for limited warranties. Each piece is sold as-is."
  }
  
]

export async function POST(req: NextRequest) {
    const body = await req.json();
    const fullAuctionInfo = fullAuctionsInfo.find(auctionInfo => auctionInfo.id === body.id)

    return new Response(JSON.stringify(fullAuctionInfo))
}
