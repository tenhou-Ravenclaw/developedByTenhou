// Webアプリ一覧データ
export type AppInfo = {
    title: string;
    description: string;
    url: string;
    image: string; // public配下の画像パス or 外部URL
};

export const apps: AppInfo[] = [
    {
        title: "ポートフォリオサイト",
        description: "自身のプロフィールや制作物をまとめたサイトです。",
        url: "https://portfolio.ten-hou.com",
        image: "/vercel.svg", // 仮画像
    },
    // 今後ここに追加
];
