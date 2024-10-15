// songsData.ts
export interface Song {
  name: string;
  url: string;
  cover: string;
}

export const songs: Song[] = [
  {
    name: "春庭雪",
    url: "http://music.163.com/song/media/outer/url?id=2634876793.mp3",
    cover: "http://imge.kugou.com/stdmusic/400/20240126/20240126152017724110.jpg"
  },
  {
    name: "猪猪侠",
    url: "http://music.163.com/song/media/outer/url?id=34324641.mp3",
    cover: "http://imge.kugou.com/stdmusic/400/20221207/20221207214918757588.jpg"
  },
  {
    name: "多余的解释",
    url: "https://freetyst.nf.migu.cn/public/product7th/productB25/2020/08/0316/2012%E5%B9%B412%E6%9C%8805%E6%97%A5%E6%B5%B7%E8%9D%B6%E5%94%B1%E7%89%87%E5%86%85%E5%AE%B9%E5%87%86%E5%85%A58%E9%A6%96/%E6%A0%87%E6%B8%85%E9%AB%98%E6%B8%85/MP3_128_16_Stero/60058623029165243.mp3",
    cover: "http://imge.kugou.com/stdmusic/400/20230802/20230802060202337727.jpg"

  },
  {
    name: "童话镇",
    url: "https://freetyst.nf.migu.cn/public/product9th/product46/2024/08/2317/2024%E5%B9%B407%E6%9C%8823%E6%97%A511%E7%82%B929%E5%88%86%E5%86%85%E5%AE%B9%E5%87%86%E5%85%A5%E7%94%B3%E4%BC%97%E6%96%87%E5%8C%961%E9%A6%96915191/%E6%A0%87%E6%B8%85%E9%AB%98%E6%B8%85/MP3_128_16_Stero/63293800633173647.mp3",
    cover: "http://imge.kugou.com/stdmusic/400/20240713/20240713155245425879.jpg"
  }
];