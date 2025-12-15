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
        image: "/icon/tenhouPortfolioIcon.svg", // 仮画像
    },
    {
        title: "講義に役立つWebアプリ",
        description: "講義に役立つWebアプリをまとめたサイトです。",
        url: "https://comprehensionchecker.ten-hou.com",
        image: "/icon/comprehensionCheckerIcon.svg",
    },
    {
        title: "JavaからUMLet対応コードのコンバーター",
        description: "JavaのソースコードからUMLet形式のクラス図コードを生成するツールです。",
        url: "https://convert-java-to-umlet.ten-hou.com/",
        image: "/icon/javaToUmletConverterIcon.svg", // 仮画像
    },
    {
        title: "タスク分割アプリ",
        description: "タスクを頭で抱え込まずに優先順位をつけて整理できるアプリです。",
        url: "https://task.ten-hou.com/",
        image: "/icon/webTechLearningSupportIcon.svg", // 仮画像
    },
];
