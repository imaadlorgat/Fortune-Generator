let generatedMessage = ''
const baseString = 'You'
const buildingBlock1 = ['will be married', 'will find prospective opportunities', 'will know fear', 'will experience great calamnity', 'will find harmony']
const buildingBlock2 = ['before the sun crosses planet 852a293-C', 'when the wise one draws his last breath', 'when jesus permits', 'when the time is right', 'if you donate your last dollar']

function generateMessage() {
    let message = baseString;
    let block1 = buildingBlock1[Math.floor(Math.random() * buildingBlock1.length)];
    let block2 = buildingBlock2[Math.floor(Math.random() * buildingBlock2.length)]
    message = message + ' ' + block1 + ' ' + block2;
    document.getElementById('fortune').textContent = message;


}