const htmlTemplates = {
    trInvestmentRound:
    '<tr id="{id}">' +
    '    <td><input type="text" id="round-title" value="Round {number}"></td>' +
    '    <td><input type="number" id="fiat" value="1000"></td>' +
    '    <td><input type="number" id="token-price" value="10000"></td>' +
    '    <td><input type="number" id="tokens-amount" value="1000"></td>' +
    '    <td><input type="number" id="investor-share" value="" placeholder="%"></td>' +
    '</tr>' +
    '' +
    '',

    trAgent:
    '<tr id="{id}">' +
    '    <td><input type="text" id="agent-name" value="Agent {number}"></td>' +
    '    <td><input type="number" id="agent-share" value="" placeholder="%"></td> ' +
    '    <td><input type="number" id="tokens-amount" value="10000"></td>' +
    '</tr>' +
    '' +
    '',

    trPoolType:
    '<tr id="{id}">' +
    '    <td><input type="text" id="pool-number" value="{number}"></td>' +
    '    <td>' +
    '        <input type="text" id="pool-type" value="Pool type">' +
    '    </td>' +
    '    <td>' +
    '        <div class="calc-buttons">' +
    '            <button class="calc" id="remove-row">–</button>' +
    '            <button class="calc" id="append-row">+</button>' +
    '        </div>' +
    '    </td>' +
    '</tr>' +
    '' +
    '',

    trPool:
    '<tr id="{id}">' +
    '    <td><input type="text" id="pool-title" value="Pool {number}"></td>' +
    '    <td>' +
    '        <select name="pool-type" id="pool-type">' +
    '            <option value="Pool type">Pool type</option>' +
    '        </select>' +
    '    </td>' +
    '    <td><input type="text" id="pool-share" value="" placeholder="%"></td>' +
    '    <td><input type="text" id="amount" value="10000"></td>' +
    '    <td>' +
    '        <div class="calc-buttons">' +
    '            <button class="calc" id="remove-row">–</button>' +
    '            <button class="calc" id="append-row">+</button>' +
    '        </div>' +
    '    </td>' +
    '</tr>' +
    '' +
    '',

    trVesting:
    '<tr id="{id}"> ' +
    '    <td>' +
    '        <select name="agent-name" id="agent-name">' +
    '            <option value="Agent 1">Agent 1</option>' +
    '            <option value="Agent 2">Agent 2</option>' +
    '        </select>' +
    '    </td>' +
    '    <td><input type="text" id="pool" value="" placeholder="x"></td>' +
    '    <td><input type="text" id="start-vesting" value="" placeholder="x"></td>' +
    '    <td><input type="text" id="end-vesting" value="" placeholder="x"></td>' +
    '    <td><input type="text" id="vesting-coefficient" value="" placeholder="%"></td>' +
    '    <td>' +
    '        <div class="calc-buttons">' +
    '            <button class="calc" id="remove-row">–</button>' +
    '            <button class="calc" id="append-row">+</button>' +
    '        </div>' +
    '    </td>' +
    '</tr>' +
    '' +
    '',

    trUnlocking:
    '<tr id="{id}">' +
    '    <td>' +
    '        <select name="agent-name" id="agent-name">' +
    '            <option value="Agent 1">Agent 1</option>' +
    '            <option value="Agent 2">Agent 2</option>' +
    '        </select>' +
    '    </td>' +
    '    <td><input type="text" id="start-unlocking" value="" placeholder="x"></td>' +
    '    <td><input type="text" id="end-unlocking" value="" placeholder="x"></td>' +
    '    <td><input type="text" id="initial-unlocking" value="" placeholder="x"></td>' +
    '    <td>' +
    '        <div class="calc-buttons">' +
    '            <button class="calc" id="remove-row">–</button>' +
    '            <button class="calc" id="append-row">+</button>' +
    '        </div>' +
    '    </td>' +
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