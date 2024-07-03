
document.addEventListener('DOMContentLoaded', () => {
    const images = [
        'images/TOP_IA.webp',
        'images/Nyama04.webp',
        'images/Nyama19.webp',
        'images/Nyama01.webp'
    ]; 

    const mainImage = document.getElementById('main-image');
    let previousIndex = -1; // 前の画像のインデックスを保存

    setInterval(() => {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * images.length);
        } while (randomIndex === previousIndex); // 前の画像と同じインデックスが選ばれた場合は再度選び直す

        previousIndex = randomIndex; // 現在のインデックスを前のインデックスとして保存
        mainImage.style.opacity = 0;

        setTimeout(() => {
            mainImage.src = images[randomIndex];
            mainImage.style.opacity = 1;
        }, 1000); // 1秒のフェードアウト時間を設定
    }, 6000); // 6秒ごとに画像を切り替える
});
