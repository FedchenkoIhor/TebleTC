const htmlTemplates = {
    trInvestmentRound:
    '<tr id="{id}">' +
    '    <td><input type="text" id="round-title" value="Round {number}"></td>' +
    '    <td><input type="number" step="any" id="fiat" value="" placeholder="x"></td>' +
    '    <td><input type="number" step="any" id="token-price" value="" placeholder="x"></td>' +
    '    <td><input type="number" step="any" id="tokens-amount" value="" placeholder="x"></td>' +
    '    <td><input type="number" step="any" id="investor-share" value="" placeholder="%"></td>' +
    '</tr>' +
    '' +
    '',

    //

    trAgent:
    '<tr id="{id}">' +
    '    <td><input type="text" id="agent-name" value="Agent {number}"></td>' +
    '    <td><input type="number" id="agent-share" value="" placeholder="%"></td> ' +
    '    <td><input type="number" id="tokens-amount" value="10000"></td>' +
    '</tr>' +
    '' +
    '',

    //

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
    '            {pool-types-options}' +
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

    //

    trVesting:
    '<tr id="{id}"> ' +
    '    <td>' +
    '        <select name="agent-name" id="agent-name">' +
    '           {agent-names-options}' +
    '        </select>' +
    '    </td>' +
    '    <td>' +
    '       <select name="pool-title" id="pool-title">' +
    '          {pool-title-options}' +
    '       </select>' +
    '    </td>' +
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
    '           {agent-names-options}' +
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

    //

    trFarming:
    '' +
    '<tr id="{id}">' +
    '    <td><input type="number" value="{number}" id="number"></td>' +
    '    <td>' +
    '        <select name="agent-name" id="agent-name">' +
    '            {agent-names-options}' +
    '        </select>' +
    '    </td>' +
    '    <td><input type="number" id="agent-share" value="" placeholder="%"></td>' +
    '    <td><input type="number" id="unstaking-factor" value="" placeholder="%"></td>' +
    '    <td><input type="number" id="reward-coefficient" value="" placeholder="%"></td>' +
    '    <td>' +
    '        <select name="pool-for-rewards" id="pool-for-rewards">' +
    '            {pool-title-options}' +
    '        </select>' +
    '    </td>' +
    '    <td>' +
    '        <div class="calc-buttons">' +
    '            <button class="calc" id="remove-row">–</button>' +
    '            <button class="calc" id="append-row">+</button>' +
    '        </div>' +
    '    </td>' +
    '</tr>' +
    '',

    trStaking:
    '' +
    '<tr id="{id}">' +
    '    <td><input type="number" value="{number}" id="number"></td>' +
    '    <td>' +
    '        <select name="agent-name" id="agent-name">' +
    '            {agent-names-options}' +
    '        </select>' +
    '    </td>' +
    '    <td><input type="number" id="agent-share" value="" placeholder="%"></td>' +
    '    <td><input type="number" id="unstaking-factor" value="" placeholder="%"></td>' +
    '    <td><input type="number" id="reward-coefficient" value="" placeholder="%"></td>' +
    '    <td>' +
    '        <select name="pool-for-rewards" id="pool-for-rewards">' +
    '            {pool-title-options}' +
    '        </select>' +
    '    </td>' +
    '    <td>' +
    '        <div class="calc-buttons">' +
    '            <button class="calc" id="remove-row">–</button>' +
    '            <button class="calc" id="append-row">+</button>' +
    '        </div>' +
    '    </td>' +
    '</tr>' +
    '',

    trService:
    '' +
    '<tr id="{id}">' +
    '    <td><input type="number" value="{number}" id="number"></td>' +
    '    <td>' +
    '        <select name="agent-name" id="agent-name">' +
    '            {agent-names-options}' +
    '        </select>' +
    '    </td>' +
    '    <td><input type="number" id="agent-share" value="" placeholder="%"></td>' +
    '    <td><input type="number" id="unstaking-factor" value="" placeholder="%"></td>' +
    '    <td><input type="number" id="reward-coefficient" value="" placeholder="%"></td>' +
    '    <td>' +
    '        <select name="pool-for-rewards" id="pool-for-rewards">' +
    '            {pool-title-options}' +
    '        </select>' +
    '    </td>' +
    '    <td>' +
    '        <div class="calc-buttons">' +
    '            <button class="calc" id="remove-row">–</button>' +
    '            <button class="calc" id="append-row">+</button>' +
    '        </div>' +
    '    </td>' +
    '</tr>' +
    '',

    //

    serviceTableTemplate:
    '<div class="inputs-table choosable calcable choosen" id="{table-id}">' +
    '    <header>' +
    '        <h3 class="table-title">{table-title}</h3>' +
    '        <div class="table-description"></div>' +
    '    </header>' +
    '    <table>' +
    '        <tr>' +
    '            <th>№</th>' +
    '            <th>Agent Name</th>' +
    '            <th>Agent Share</th>' +
    '            <th>Unstaking Factor</th>' +
    '            <th>Reward Coefficient</th>' +
    '            <th>Pool (For Rewards)</th>' +
    '            <th></th>' +
    '        </tr>' +
    '    </table>' +
    '    <button class="submit" id="add-curves">Add curves</button>' +
    '</div>' +
    '' +
    '' +
    '',

    curvesTableTemplate:
    '<div class="inputs-table curveable calcable curved" id="{table-id}">' +
    '    <header>' +
    '        <h3 class="table-title">"{service-name}" Income</h3>' +
    '        <div class="table-description">(Incomes - marketing functions for planned project services)</div>' +
    '    </header>' +
    '    <table>' +
    '        <tr>' +
    '            <th>Curve №</th>' +
    '            <th>Sales Start</th>' +
    '            <th>Sales End</th>' +
    '            <th>Sales Min (USD)</th>' +
    '            <th>Sales Max (USD)</th>' +
    '            <th>Choose Algorithm</th>' +
    '            <th>Angular Coefficient</th>' +
    '            <th>Rising\'s Coefficient</th>' +
    '            <th></th>' +
    '        </tr>' +
    '    </table>' +
    // '    <button class="submit" id="build-project-services">Build Scheme</button>' +
    '</div>' +
    '' +
    '',

    /* <tr id="0">' +
    '            <td><input type="number" id="curve-number" value="{number}"></td>' +
    '            <td><input type="number" id="sales-start" value="4"></td>' +
    '            <td><input type="number" id="sales-end" value="7"></td>' +
    '            <td><input type="number" id="sales-min" value="10000"></td>' +
    '            <td><input type="number" id="sales-max" value="10000"></td>' +
    '            <td>' +
    '                <select name="choose-algorithm" id="choose-algorithm">' +
    '                    <option value="Linear">Linear</option>' +
    '                    <option value="Exponential">Exponential</option>' +
    '                </select>' +
    '            </td>' +
    '            <td><input type="number" id="angular-coefficient" value="0.9"></td>' +
    '            <td><input type="number" id="risings-coefficient" value="0.7"></td>' +
    '            <td>' +
    '                <div class="calc-buttons">' +
    '                    <button class="calc" id="remove-row">–</button>' +
    '                    <button class="calc" id="append-row">+</button>' +
    '                </div>' +
    '            </td>' +
    '        </tr>' + */

    trCurve:
    '<tr id="{id}">' +
    '    <td><input type="number" readonly id="curve-number" value="{number}"></td>' +
    '    <td><input type="number" id="sales-start" value="4"></td>' +
    '    <td><input type="number" id="sales-end" value="7"></td>' +
    '    <td><input type="number" id="sales-min" value="10000"></td>' +
    '    <td><input type="number" id="sales-max" value="10000"></td>' +
    '    <td>' +
    '        <select name="choose-algorithm" id="choose-algorithm">' +
    '            <option value="Linear">Linear</option>' +
    '            <option value="Exponential">Exponential</option>' +
    '        </select>' +
    '    </td>' +
    '    <td><input type="number" id="angular-coefficient" value="0.9"></td>' +
    '    <td><input type="number" id="risings-coefficient" value="0.7"></td>' +
    '    <td>' +
    '        <div class="calc-buttons">' +
    '            <button class="calc" id="remove-row">–</button>' +
    '            <button class="calc" id="append-row">+</button>' +
    '        </div>' +
    '    </td>' +
    '</tr>' +
    '' +
    '',

    serviceNameOption: '<option id="{id}" value="{value}">{text}</option>',

    //

    trAction:
    '<tr id="{id}">' +
    '    <td><input type="text" id="action-number" value="Action {number}"></td>' +
    '    <td><input type="text" id="source" value=""></td>' +
    '    <td>' +
    '       <select name="currency-type" id="currency-type">' +
    '           {pool-types-options}' +
    '        </select>' +
    '    </td>' +
    '    <td><input type="text" id="value-percents" value="" placeholder="%"></td>' +
    '    <td><input type="text" id="destination" value=""></td>' +
    '    <td>' +
    '        <label>' +
    '            <input type="checkbox" id="pre-condition">' +
    '            Yes/No' +
    '        </label>' +
    '</td>' +
    '    <td>' +
    '        <div class="calc-buttons">' +
    '            <button class="calc" id="remove-row">–</button>' +
    '            <button class="calc" id="append-row">+</button>' +
    '        </div>' +
    '    </td>' +
    '</tr>' +
    '' +
    '',

    //

    selectOption: '<option id="{id}" value="{value}">{text}</option>',
}