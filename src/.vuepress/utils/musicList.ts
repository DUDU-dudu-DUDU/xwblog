// songsData.ts
export interface Song {
  name: string;
  url: string;
  cover: string;
}

export const songs: Song[] = [
  {
    name: "春庭雪",
    url: "http://lv.sycdn.kuwo.cn/0825eee366cb4bb4b9d238c8ea10c731/6707d982/resource/30106/trackmedia/M800002dBQyg2OLWqr.mp3",
    cover: "http://imge.kugou.com/stdmusic/400/20240126/20240126152017724110.jpg"
  },
  {
    name: "猪猪侠",
    url: "https://sharefs.tx.kugou.com/202410102145/48781541be0f3f3b341e1dc034589bc2/v3/d256ab5633d56f1d7a42c89c6d4f378a/yp/full/ap1000_us0_pi409_s2195821443.mp3",
    cover: "http://imge.kugou.com/stdmusic/400/20221207/20221207214918757588.jpg"
  },
  {
    name: "多余的解释",
    url: "http://ra.sycdn.kuwo.cn/7898ff74254ac3cf682e6b793ec436c6/6707dd88/resource/n2/320/15/64/3788453729.mp3",
    cover: "http://imge.kugou.com/stdmusic/400/20230802/20230802060202337727.jpg"

  },
  {
    name: "童话镇",
    url: "http://er.sycdn.kuwo.cn/7083a3300386864d035f4bf71dfc9ceb/6707ddf9/resource/30106/trackmedia/M800001w6tGV0elsc5.mp3",
    cover: "http://imge.kugou.com/stdmusic/400/20240713/20240713155245425879.jpg"
  }
];