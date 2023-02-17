## Project Name

Fun Room  
用於民宿出租的靜態網頁，概念上以 3D 模型的方式介紹民宿吸引旅客。

## Technologies

- React
- React Query
- React Three Fiber
- React Router
- PhotoSwipe
- Tailwind CSS
- Firebase
- React Transition Group

## Project Screen Shot(s)

![Screenshot 2023-02-17 at 14-22-23 FUN ROOM](https://user-images.githubusercontent.com/103582829/219751843-9fbefb59-e3ca-4040-8e31-9f225f338fab.png)
![Screenshot 2023-02-18 at 02-29-40 FUN ROOM - https __fun-room vercel app_](https://user-images.githubusercontent.com/103582829/219752120-ac6fe971-1373-4651-b4df-80b24440a976.png)
![Screenshot 2023-02-18 at 02-30-57 FUN ROOM - https __fun-room vercel app_ - https __fun-room vercel app_room_single](https://user-images.githubusercontent.com/103582829/219752625-10af9fbc-e800-4fae-90be-8d43eb551a20.png)

## Installation and Setup Instructions

下載專案前，請先安裝 `node` 與 `yarn`

```
git clone https://github.com/callumzhong/fun-room.git
```

設置 .env.local 用於串接 Firebase 民宿資料

```
VITE_FIREBASE_API_KEY=xxx
VITE_FIREBASE_AUTH_DOMAIN=xxx
VITE_FIREBASE_PROJECT_ID=xxx
VITE_FIREBASE_STORAGE_BUCKET=xxx
VITE_FIREBASE_MESSAGING_SENDER_ID=xxx
VITE_FIREBASE_APP_ID=xxx
VITE_MEASUREMENT_ID=xxx

```

安裝:

`yarn install`

啟動伺服器:

`yarn dev`

訪問應用程式:

`localhost:5173`

## Reflection

這是我第一個有關 3D 模型的專案，需要涵蓋所學的技術如模型載入、燈光、陰影、鏡頭轉向位移，另外 Blender 3D電腦圖形軟體的運用也是其重點，最初的構想是使用者以環繞的方式瀏覽3D民宿的外觀，透過導覽列連結可以查看房型介紹頁面。決定完後我以 `vite` 構建 `react-ts` 模板並安裝相關的套件後進行 10 天的開發旅程。

很快的我迎上第一個挑戰3D民宿怎麼做？怎麼處理？ 我找尋許久後找到 sketchfab.com 網站有提供授權的民宿模型，與下載 Blender 軟體後花了幾天研究模型編輯、React Three Fiber 套件。不幸的是它不斷地消耗我的時程，我只能減少房型介紹頁的數量取消雙人房、豪華雙人房、雙床房、豪華雙床房及訂房機制，這些屬於其他專案已實現過的功能。

後端則是串接 Firebase，透過 React Query Firebase 實作此功能後順利串接完介紹頁面，整體來說這項專案核心透過 React Three Fiber 載入 GlB 模型渲染，以 A / B 鏡頭移動瀏覽前院及後院的佈置，在下一次疊代我計畫需求是更大量的使用3D技術，互動式的瀏覽房型介紹讓鏡頭走進民宿內的佈置。




