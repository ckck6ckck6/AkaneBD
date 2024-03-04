const prizeCounts = {
    "全日寵愛券": 0,
    "驚喜約會券": 0,
    "私人廚師券": 0,
    "靈魂交流券": 0,
    "快樂野餐券": 0,
    "禁止手機券": 0,
    "這單免費券": 0,
    "勇敢冒險券": 0,
    "明年再抽券": 0,
    "健康共築券": 0
};
let drawCount = 0;

document.getElementById('drawButton').addEventListener('click', function() {
    // 增加銘謝惠顧以填滿剩餘的50%機率
    const prizes = ["全日寵愛券", "驚喜約會券", "私人廚師券", "靈魂交流券", "快樂野餐券", "禁止手機券", "這單免費券", "勇敢冒險券", "明年再抽券", "健康共築券"];
    const resultIndex = Math.floor(Math.random() * prizes.length);
    const prize = prizes[resultIndex];
    prizeCounts[prize]++;
    drawCount++;
    showResult(prize);
    updateDrawCount();
    updateHistory();
});

function showResult(prize) {
    const resultElement = document.getElementById('result');
    resultElement.textContent = "恭喜妳獲得: " + prize;
    resultElement.classList.remove('hidden');
    resultElement.classList.add('result-show');
}

function updateDrawCount() {
    const drawCountElement = document.getElementById('drawCount');
    drawCountElement.textContent = `已抽次數: ${drawCount}`;
}

function updateHistory() {
    const historyList = document.getElementById('historyList');
    historyList.innerHTML = ''; // 清除历史记录列表
    Object.keys(prizeCounts).forEach(prize => {
        if (prizeCounts[prize] > 0) { // 只展示抽到的奖品
            const listItem = document.createElement('li');
            listItem.textContent = `${prize}: ${prizeCounts[prize]} 次`;
            historyList.appendChild(listItem);
        }
    });
}