import { NextRequest } from "next/server";

const shortAuctionInfo = [
    {
      "id": "78345",
      "title": "Рідкісний колекційний посуд",
      "price": 150,
      "startTime": "2:30:24",
      "image": "https://images.dog.ceo/breeds/hound-plott/hhh_plott002.jpg"
    },
    {
      "id": "45394",
      "title": "Живописна картина \"Сонячні полонини\"",
      "price": 300,
      "startTime": "1:45:10",
      "image": "https://images.dog.ceo/breeds/redbone/n02090379_4609.jpg"
    },
    {
      "id": "73543",
      "title": "Античний ковдрацький ковбойський капелюх",
      "price": 75,
      "startTime": "0:45:50",
      "image": "https://images.dog.ceo/breeds/spaniel-irish/n02102973_3282.jpg"
    },
    {
      "id": "78368",
      "title": "Ексклюзивний ручний вишиваний одяг",
      "price": 200,
      "startTime": "3:15:36",
      "image": "https://images.dog.ceo/breeds/ovcharka-caucasian/IMG_20190611_152047.jpg"
    },
    {
      "id": "93778",
      "title": "Старовинний годинник XVIII століття",
      "price": 500,
      "startTime": "4:10:15",
      "image": ""
    },
    {
      "id": "83459",
      "title": "Колекційна фігурка зібрана на Марсі",
      "price": 1000,
      "startTime": "6:20:42",
      "image": "https://images.dog.ceo/breeds/malinois/n02105162_5924.jpg"
    },
    {
      "id": "32739",
      "title": "Ексклюзивний набір вин відомого винороба",
      "price": 250,
      "startTime": "1:55:30",
      "image": "https://images.dog.ceo/breeds/stbernard/n02109525_11445.jpg"
    },
    {
      "id": "15766",
      "title": "Стріт-арт графіті \"Місто майбутнього\"",
      "price": 120,
      "startTime": "0:25:18",
      "image": "https://images.dog.ceo/breeds/spaniel-cocker/n02102318_11605.jpg"
    },
    {
      "id": "348578",
      "title": "Раритетний вінтажний фотоапарат",
      "price": 180,
      "startTime": "2:05:12",
      "image": "https://images.dog.ceo/breeds/clumber/n02101556_3707.jpg"
    },
    {
      "id": "16734",
      "title": "Лімітована серія автографованої книги",
      "price": 80,
      "startTime": "1:10:05",
      "image": "https://images.dog.ceo/breeds/hound-basset/n02088238_7487.jpg"
    },
    {
      "id": "47935",
      "title": "Елегантний дизайнерський стілець",
      "price": 120,
      "startTime": "3:40:15",
      "image": "https://images.dog.ceo/breeds/dalmatian/cooper2.jpg"
    },
    {
      "id": "7863",
      "title": "Високоякісний велосипед для гірських походів",
      "price": 450,
      "startTime": "2:15:30",
      "image": "https://images.dog.ceo/breeds/tervuren/shadow_and_lake.jpg"
    },
    {
      "id": "45378",
      "title": "Екзотичний сорт кави з Ефіопії",
      "price": 30,
      "startTime": "1:00:55",
      "image": "https://images.dog.ceo/breeds/shiba/kurosuke01.jpg"
    },
    {
      "id": "45378",
      "title": "Унікальна керамічна скульптура",
      "price": 280,
      "startTime": "4:25:40",
      "image": "https://images.dog.ceo/breeds/pyrenees/n02111500_8729.jpg"
    },
    {
      "id": "10768",
      "title": "Новий модний смартфон зі складним екраном",
      "price": 800,
      "startTime": "5:50:10",
      "image": "https://images.dog.ceo/breeds/terrier-toy/n02087046_4575.jpg"
    },
    {
      "id": "93145",
      "title": "Ексклюзивна колекція дитячих книг з підписом автора",
      "price": 150,
      "startTime": "1:30:20",
      "image": "https://images.dog.ceo/breeds/mix/marco2.jpg"
    },
    {
      "id": "34867",
      "title": "Престижний членський квиток до спортивного клубу",
      "price": 200,
      "startTime": "0:55:45",
      "image": "https://images.dog.ceo/breeds/mountain-bernese/n02107683_4633.jpg"
    },
    {
      "id": "88341",
      "title": "Аутентичний килим із Сходу",
      "price": 350,
      "startTime": "2:10:05",
      "image": "https://images.dog.ceo/breeds/mix/cheyenne2.jpg"
    },
    {
      "id": "69453",
      "title": "Декоративний камінь для садового ландшафту",
      "price": 70,
      "startTime": "3:15:30",
      "image": "https://images.dog.ceo/breeds/newfoundland/n02111277_160.jpg"
    },
    {
      "id": "99456",
      "title": "Електричний скейтборд з вбудованим Bluetooth-динаміком",
      "price": 180,
      "startTime": "1:20:15",
      "image": "https://images.dog.ceo/breeds/entlebucher/n02108000_2739.jpg"
    }
]

export async function GET(req: NextRequest) {
    return new Response(JSON.stringify(shortAuctionInfo))
}
