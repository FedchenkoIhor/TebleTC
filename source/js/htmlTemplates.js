const htmlTemplates = {
    trRound:
    '<tr id="{id}">' +
    '    <td><input type="text" id="round-title" value="Round {number}"></td>' +
    '    <td><input type="text" id="fiat" value="1000"></td>' +
    '    <td><input type="text" id="token-price" value="10000"></td>' +
    '    <td><input type="text" id="tokens-amount" value="1000"></td>' +
    '    <td><input type="text" id="investor-share" value="%"></td>' +
    '</tr>' +
    '' +
    '',

    trAgent:
    '<tr id="{id}">' +
    '    <td><input type="text" id="agent-name" value="Agent {number}"></td>' +
    '    <td><input type="text" id="agent-share" value="%"></td>' +
    '    <td><input type="text" id="tokens-amount" value="10000"></td>' +
    '</tr>' +
    '' +
    '',

    trPool:
    '<tr id="{id}">' +
    '    <td><input type="text" id="pool-title" value="Pool {number}"></td>' +
    '    <td><input type="text" id="pool-type" value="Pool type"></td>' +
    '    <td><input type="text" id="pool-share" value="%"></td>' +
    '    <td><input type="text" id="amount" value="10000"></td>' +
    '    <td><button id="minus">-</button><button id="plus">+</button></td>' +
    '</tr>' +
    '' +
    '',

    trVesting:
    '<tr id="{id}">' +
    '    <td><input type="text" id="agent-name" value="Agent 1"></td>' +
    '    <td><input type="text" id="pool" value="x"></td>' +
    '    <td><input type="text" id="start-vesting" value="x"></td>' +
    '    <td><input type="text" id="end-vesting" value="x"></td>' +
    '    <td><input type="text" id="vesting-coefficient" value="%"></td>' +
    '    <td><button id="minus">-</button><button id="plus">+</button></td>' +
    '</tr>' +
    '' +
    '',

    trUnlocking:
    '<tr id="{id}">' +
    '    <td><input type="text" id="agent-name" value="Agent 1"></td>' +
    '    <td><input type="text" id="start-unlocking" value="x"></td>' +
    '    <td><input type="text" id="end-unlocking" value="x"></td>' +
    '    <td><input type="text" id="initial-unlocking" value="x"></td>' +
    '    <td><button id="minus">-</button><button id="plus">+</button></td>' +
    '</tr>' +
    '' +
    '',

    trAction:
    '<tr id="{id}">' +
    '    <td><input type="text" id="action-number" value="Action {number}"></td>' +
    '    <td><input type="text" id="source" value=""></td>' +
    '    <td><input type="text" id="currency-type" value=""></td>' +
    '    <td><input type="text" id="value-percents" value="%"></td>' +
    '    <td><input type="text" id="destination" value=""></td>' +
    '    <td><input type="text" id="pre-condition" value="Yes/No"></td>' +
    '    <td><button>-</button><button>+</button></td>' +
    '</tr>' +
    '' +
    '',
}