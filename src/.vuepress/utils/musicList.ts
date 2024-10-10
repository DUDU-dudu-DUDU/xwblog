// songsData.ts
export interface Song {
  name: string;
  url: string;
  cover: string;
}

export const songs: Song[] = [
  {
    name: "春庭雪",
    url: "https://webfs.kugou.com/202410102220/97c6585353ac3079a3e2b1ac32b39385/v3/b526db8b5c42542770985078de58b38b/yp/p_0_960135/ap1014_us0_mii0w1iw8z2ai2iphcu80ooo2ki81120_pi406_mx592511557_s1566420773.mp3",
    cover: "http://imge.kugou.com/stdmusic/400/20240126/20240126152017724110.jpg"
  },
  {
    name: "猪猪侠",
    url: "https://sharefs.tx.kugou.com/202410102145/48781541be0f3f3b341e1dc034589bc2/v3/d256ab5633d56f1d7a42c89c6d4f378a/yp/full/ap1000_us0_pi409_s2195821443.mp3",
    cover: "http://imge.kugou.com/stdmusic/400/20221207/20221207214918757588.jpg"
  },
  {
    name: "多余的解释",
    url: "https://webfs.kugou.com/202410102220/014cce4d79bdb95ae9e179a4d0c2f556/v3/34d67ecd8f608874d7119eba6bd9ac2f/yp/p_0_960119/ap1014_us0_mii0w1iw8z2ai2iphcu80ooo2ki81120_pi406_mx32157564_s3606226928.mp3",
    cover: "http://imge.kugou.com/stdmusic/400/20230802/20230802060202337727.jpg"

  },
  {
    name: "童话镇",
    url: "https://webfs.kugou.com/202410102221/005c7fad8f46c3431495d22020ac2cd5/v3/dbf4c9254e435bd743eef04b98094ffa/yp/p_0_960549/ap1014_us0_mii0w1iw8z2ai2iphcu80ooo2ki81120_pi406_mx647254610_s2798201891.mp3",
    cover: "http://imge.kugou.com/stdmusic/400/20240713/20240713155245425879.jpg"
  }
];