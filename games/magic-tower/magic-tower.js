(function () {
  const langStorageKey = 'webgamestation-lang';

  const translations = {
    zh: {
      'controls.toggle': {
        text: '中 / EN',
        attrs: {
          'aria-label': '切换中文与英文界面',
          title: '切换中文与英文界面',
        },
      },
      'nav.links': {
        attrs: {
          'aria-label': '作者链接',
        },
      },
      'nav.author': {
        attrs: {
          'aria-label': '作者主页',
          title: '作者主页',
        },
      },
      'nav.repo': {
        attrs: {
          'aria-label': 'GitHub 仓库',
          title: 'GitHub 仓库',
        },
      },
      'crumbs.home': {
        text: '返回首页',
      },
      'hero.tags.rpg': 'RPG',
      'hero.tags.strategy': '策略',
      'hero.tags.retro': '复古冒险',
      'hero.title': '魔塔试炼',
      'hero.description': '引导勇者穿梭魔塔楼层，合理分配生命与攻击，战胜怪物并开启逃生之门。每一步抉择都决定通关命运。',
      'hero.meta.grid': '7×7 楼层布局',
      'hero.meta.controls': '方向键与触控操作',
      'hero.meta.goal': '开启大门即可通关',
      'panel.heading': '塔内试炼',
      'panel.description': '利用方向键或触控按钮在魔塔内移动。与怪物战斗前评估血量与属性，收集钥匙开启大门，迈向更高的楼层。',
      'game.status.ready': '利用方向键或下方按钮开始探索魔塔。',
      'game.status.moved': '向{{direction}}移动。',
      'game.status.wall': '厚重的石墙挡住了去路。',
      'game.status.locked': '大门紧闭，需要一把钥匙。',
      'game.status.combat-win': '击败 {{monster}}，继续前进！',
      'game.status.blocked': '攻击力不足，无法击破 {{monster}}。',
      'game.status.defeat': '勇者在战斗中力竭倒下……',
      'game.status.pickup': '获得 {{item}}。',
      'game.status.victory': '成功开启大门，通往下一层的阶梯出现！',
      'scoreboard.heading': '冒险状态',
      'stats.hp': '生命',
      'stats.attack': '攻击',
      'stats.defense': '防御',
      'stats.keys': '钥匙',
      'stats.coins': '金币',
      'stats.floor': '楼层',
      'log.heading': '事件记录',
      'log.start': '勇者踏入魔塔，试炼正式开始。',
      'log.move': '向{{direction}}探索。',
      'log.pickup.key': '拾取钥匙，当前共有 {{count}} 把。',
      'log.pickup.potion': '饮下生命药剂，恢复 {{value}} 生命。',
      'log.pickup.attack': '攻击提高 {{value}} 点。',
      'log.pickup.defense': '防御提高 {{value}} 点。',
      'log.pickup.coin': '收集到 {{value}} 枚金币。',
      'log.combat.win': '击败 {{monster}}，损失 {{loss}} 生命。',
      'log.combat.blocked': '{{monster}} 的防御过高，需要更强攻击。',
      'log.combat.defeat': '被 {{monster}} 击败，试炼失败。',
      'log.door.locked': '没有钥匙，无法开启大门。',
      'log.door.open': '使用钥匙开启了大门。',
      'log.victory': '通关本层！勇者准备继续攀登。',
      'log.reset': '试炼重置，属性恢复初始状态。',
      'controls.up': '上',
      'controls.down': '下',
      'controls.left': '左',
      'controls.right': '右',
      'controls.restart': '重新开始',
      'controls.pad': {
        attrs: {
          'aria-label': '方向控制',
          title: '方向控制',
        },
      },
      'rules.heading': '玩法说明',
      'rules.item1': '箭头/WASD 控制勇者移动，与怪物同格会自动结算战斗。',
      'rules.item2': '击败怪物可获得金币，拾取道具提升能力或恢复生命值。',
      'rules.item3': '需要钥匙才能开启大门，开启后即视为通关本层。',
      'footer.tagline': 'WebGameStation · 魔塔试炼。',
      'direction.up': '上方',
      'direction.down': '下方',
      'direction.left': '左侧',
      'direction.right': '右侧',
      'item.key': '一把钥匙',
      'item.potion': '生命药剂',
      'item.attack': '锋利长剑',
      'item.defense': '护盾碎片',
      'item.coin': '一袋金币',
      'entity.hero': '勇者',
      'entity.wall': '石墙',
      'entity.empty': '地砖',
      'entity.door': '大门',
      'entity.stairs': '通往下一层的阶梯',
      'entity.key': '钥匙',
      'entity.potion': '生命药剂',
      'entity.attack': '攻击之剑',
      'entity.defense': '守护徽章',
      'entity.coin': '金币袋',
      'entity.monster.slime': '史莱姆',
      'entity.monster.guard': '塔卫',
    },
    en: {
      'controls.toggle': {
        text: 'EN / 中',
        attrs: {
          'aria-label': 'Toggle English and Chinese interface',
          title: 'Toggle English and Chinese interface',
        },
      },
      'nav.links': {
        attrs: {
          'aria-label': 'Author links',
        },
      },
      'nav.author': {
        attrs: {
          'aria-label': 'Author homepage',
          title: 'Author homepage',
        },
      },
      'nav.repo': {
        attrs: {
          'aria-label': 'GitHub repository',
          title: 'GitHub repository',
        },
      },
      'crumbs.home': {
        text: 'Back to home',
      },
      'hero.tags.rpg': 'RPG',
      'hero.tags.strategy': 'Strategy',
      'hero.tags.retro': 'Retro adventure',
      'hero.title': 'Tower Trial',
      'hero.description': 'Guide the hero through the tower, balance health and strength, defeat monsters, and unlock the exit. Every decision shapes the run.',
      'hero.meta.grid': '7×7 floor layout',
      'hero.meta.controls': 'Keyboard & touch controls',
      'hero.meta.goal': 'Open the gate to escape',
      'panel.heading': 'Trial inside the tower',
      'panel.description': 'Use the arrow keys or touch buttons to move. Judge battles carefully, collect keys for the gate, and press deeper into the tower.',
      'game.status.ready': 'Use the arrow keys or the on-screen pad to begin exploring.',
      'game.status.moved': 'Moved toward the {{direction}}.',
      'game.status.wall': 'A solid wall blocks the path.',
      'game.status.locked': 'The gate is locked—you need a key.',
      'game.status.combat-win': 'Defeated the {{monster}}. Onward!',
      'game.status.blocked': 'Your attack can’t break through the {{monster}}.',
      'game.status.defeat': 'The hero fell in battle…',
      'game.status.pickup': 'Collected {{item}}.',
      'game.status.victory': 'The gate opens and stairs to the next floor appear!',
      'scoreboard.heading': 'Adventure stats',
      'stats.hp': 'HP',
      'stats.attack': 'Attack',
      'stats.defense': 'Defense',
      'stats.keys': 'Keys',
      'stats.coins': 'Coins',
      'stats.floor': 'Floor',
      'log.heading': 'Event log',
      'log.start': 'The hero steps into the tower and the trial begins.',
      'log.move': 'Explored toward the {{direction}}.',
      'log.pickup.key': 'Picked up a key—{{count}} in the pack.',
      'log.pickup.potion': 'Drank a potion and restored {{value}} HP.',
      'log.pickup.attack': 'Attack increased by {{value}}.',
      'log.pickup.defense': 'Defense increased by {{value}}.',
      'log.pickup.coin': 'Gathered {{value}} gold.',
      'log.combat.win': 'Beat the {{monster}}, losing {{loss}} HP.',
      'log.combat.blocked': 'The {{monster}} shrugs off your strikes. Power up first.',
      'log.combat.defeat': 'The {{monster}} proved too strong. Trial failed.',
      'log.door.locked': 'No key available—the gate will not budge.',
      'log.door.open': 'Unlocked the gate with a key.',
      'log.victory': 'Floor cleared! The hero is ready to climb.',
      'log.reset': 'Trial reset—stats restored to starting values.',
      'controls.up': 'Up',
      'controls.down': 'Down',
      'controls.left': 'Left',
      'controls.right': 'Right',
      'controls.restart': 'Restart',
      'controls.pad': {
        attrs: {
          'aria-label': 'Movement pad',
          title: 'Movement pad',
        },
      },
      'rules.heading': 'How to play',
      'rules.item1': 'Move with the arrows or WASD. Entering a monster tile triggers battle automatically.',
      'rules.item2': 'Defeating monsters grants coins. Collect items to boost stats or heal.',
      'rules.item3': 'A key is required to open the gate. Unlocking it clears the floor.',
      'footer.tagline': 'WebGameStation · Tower Trial.',
      'direction.up': 'north',
      'direction.down': 'south',
      'direction.left': 'west',
      'direction.right': 'east',
      'item.key': 'a key',
      'item.potion': 'a healing potion',
      'item.attack': 'a sharp blade',
      'item.defense': 'a warded shield',
      'item.coin': 'a pouch of coins',
      'entity.hero': 'hero',
      'entity.wall': 'stone wall',
      'entity.empty': 'floor tile',
      'entity.door': 'sealed gate',
      'entity.stairs': 'stairs upward',
      'entity.key': 'key',
      'entity.potion': 'potion',
      'entity.attack': 'attack relic',
      'entity.defense': 'defense charm',
      'entity.coin': 'coin pouch',
      'entity.monster.slime': 'slime',
      'entity.monster.guard': 'tower guard',
    },
  };

  const baseLayout = [
    ['#', '#', '#', '#', '#', '#', '#'],
    ['#', 'H', '.', '.', 'M', 'D', '#'],
    ['#', '.', '#', '.', '#', '.', '#'],
    ['#', 'K', '.', 'A', 'P', '.', '#'],
    ['#', '.', '#', 'G', '#', '.', '#'],
    ['#', 'C', 'B', '.', '.', '.', '#'],
    ['#', '#', '#', '#', '#', '#', '#'],
  ];

  const monsters = {
    slime: {
      hp: 60,
      attack: 18,
      defense: 6,
      reward: 18,
      icon: '👾',
      nameKey: 'entity.monster.slime',
    },
    guard: {
      hp: 95,
      attack: 28,
      defense: 12,
      reward: 32,
      icon: '🛡️',
      nameKey: 'entity.monster.guard',
    },
  };

  const entityIcons = {
    empty: '',
    wall: '⬛',
    door: '🚪',
    stairs: '🌀',
    key: '🔑',
    potion: '🧪',
    attack: '⚔️',
    defense: '🛡️',
    coin: '💰',
    hero: '🧝',
  };

  const directionVectors = {
    up: [-1, 0],
    down: [1, 0],
    left: [0, -1],
    right: [0, 1],
  };

  const directionKeys = {
    ArrowUp: 'up',
    ArrowDown: 'down',
    ArrowLeft: 'left',
    ArrowRight: 'right',
    w: 'up',
    W: 'up',
    s: 'down',
    S: 'down',
    a: 'left',
    A: 'left',
    d: 'right',
    D: 'right',
  };

  const gridEl = document.getElementById('tower-grid');
  const statusEl = document.getElementById('tower-status');
  const logEl = document.getElementById('tower-log');
  const restartBtn = document.getElementById('restart-btn');
  const toggleButton = document.querySelector('.lang-toggle');
  const yearEl = document.getElementById('game-year');

  const statEls = {
    hp: document.getElementById('stat-hp'),
    attack: document.getElementById('stat-atk'),
    defense: document.getElementById('stat-def'),
    keys: document.getElementById('stat-keys'),
    coins: document.getElementById('stat-coins'),
    floor: document.getElementById('stat-floor'),
  };

  let currentLang = 'zh';
  let board = [];
  let hero = null;
  let heroPosition = { row: 0, col: 0 };
  let statusKey = 'game.status.ready';
  let statusParams = {};
  let logEntries = [];
  let gameOver = false;

  const baseHero = {
    hp: 220,
    attack: 28,
    defense: 12,
    keys: 0,
    coins: 0,
    floor: 1,
  };

  function format(template, params = {}) {
    if (!template) {
      return '';
    }
    return template.replace(/{{(\w+)}}/g, (match, key) => {
      return params[key] !== undefined ? params[key] : match;
    });
  }

  function getPack(lang) {
    return translations[lang] || translations.zh;
  }

  function translate(key, params = {}, lang = currentLang) {
    const pack = getPack(lang);
    const value = pack[key];
    if (!value) {
      return key;
    }

    if (typeof value === 'string') {
      return format(value, params);
    }

    if (typeof value === 'object') {
      const text = value.text !== undefined ? value.text : value.html || '';
      return format(text, params);
    }

    return key;
  }

  function makeCell(char) {
    switch (char) {
      case '#':
        return { type: 'wall' };
      case '.':
        return { type: 'empty' };
      case 'M':
        return { type: 'monster', id: 'slime' };
      case 'G':
        return { type: 'monster', id: 'guard' };
      case 'D':
        return { type: 'door' };
      case 'K':
        return { type: 'key' };
      case 'P':
        return { type: 'potion', value: 60 };
      case 'A':
        return { type: 'attack', value: 8 };
      case 'B':
        return { type: 'defense', value: 6 };
      case 'C':
        return { type: 'coin', value: 30 };
      default:
        return { type: 'empty' };
    }
  }

  function resetBoard() {
    board = baseLayout.map((row, rowIndex) =>
      row.map((char, colIndex) => {
        if (char === 'H') {
          heroPosition = { row: rowIndex, col: colIndex };
          return makeCell('.');
        }
        return makeCell(char);
      }),
    );
    hero = { ...baseHero };
    statusKey = 'game.status.ready';
    statusParams = {};
    logEntries = [];
    gameOver = false;
    hero.floor = 1;
    pushLog('log.start');
    updateStats();
    renderBoard();
    updateStatusMessage();
    renderLog();
  }

  function updateStats() {
    if (!hero) {
      return;
    }
    statEls.hp.textContent = hero.hp;
    statEls.attack.textContent = hero.attack;
    statEls.defense.textContent = hero.defense;
    statEls.keys.textContent = hero.keys;
    statEls.coins.textContent = hero.coins;
    statEls.floor.textContent = hero.floor;
  }

  function renderBoard() {
    if (!gridEl) {
      return;
    }
    gridEl.innerHTML = '';

    board.forEach((row, rowIndex) => {
      row.forEach((cell, colIndex) => {
        const cellEl = document.createElement('div');
        cellEl.className = 'tower-cell';
        cellEl.setAttribute('role', 'gridcell');
        const isHero = heroPosition.row === rowIndex && heroPosition.col === colIndex;
        const entityType = isHero ? 'hero' : cell.type;
        cellEl.dataset.entity = entityType;
        cellEl.tabIndex = isHero ? 0 : -1;
        if (isHero) {
          cellEl.textContent = entityIcons.hero;
          cellEl.setAttribute('aria-label', translate('entity.hero'));
        } else if (cell.type === 'monster') {
          const monster = monsters[cell.id];
          cellEl.textContent = monster ? monster.icon : '👹';
          const labelKey = monster ? monster.nameKey : 'entity.monster.guard';
          cellEl.setAttribute('aria-label', translate(labelKey));
        } else {
          const icon = entityIcons[cell.type] || '';
          cellEl.textContent = icon;
          const entityKey = cell.type === 'empty' ? 'entity.empty' : `entity.${cell.type}`;
          cellEl.setAttribute('aria-label', translate(entityKey));
        }
        gridEl.appendChild(cellEl);
      });
    });
  }

  function updateStatusMessage() {
    if (!statusEl) {
      return;
    }
    statusEl.textContent = translate(statusKey, resolveParams(statusParams));
  }

  function renderLog() {
    if (!logEl) {
      return;
    }
    logEl.innerHTML = '';
    logEntries.slice(0, 7).forEach((entry) => {
      const li = document.createElement('li');
      li.textContent = translate(entry.key, resolveParams(entry.params));
      logEl.appendChild(li);
    });
  }

  function pushLog(key, params = {}) {
    logEntries.unshift({ key, params });
    renderLog();
  }

  function resolveParams(raw = {}) {
    const resolved = {};
    Object.entries(raw).forEach(([key, value]) => {
      if (key === 'direction') {
        resolved.direction = translate(`direction.${value}`);
      } else if (key === 'monster') {
        resolved.monster = translate(value);
      } else if (key === 'item') {
        resolved.item = translate(value);
      } else {
        resolved[key] = value;
      }
    });
    return resolved;
  }

  function tryMove(direction) {
    if (gameOver) {
      return;
    }
    const vector = directionVectors[direction];
    if (!vector) {
      return;
    }

    const nextRow = heroPosition.row + vector[0];
    const nextCol = heroPosition.col + vector[1];

    if (!board[nextRow] || !board[nextRow][nextCol]) {
      statusKey = 'game.status.wall';
      statusParams = {};
      updateStatusMessage();
      return;
    }

    const target = board[nextRow][nextCol];

    switch (target.type) {
      case 'wall':
        statusKey = 'game.status.wall';
        statusParams = {};
        updateStatusMessage();
        return;
      case 'monster':
        handleCombat(target, nextRow, nextCol, direction);
        return;
      case 'door':
        handleDoor(nextRow, nextCol);
        return;
      case 'key':
        hero.keys += 1;
        pushLog('log.pickup.key', { count: hero.keys });
        setStatusWithPickup('item.key');
        moveHero(nextRow, nextCol);
        board[nextRow][nextCol] = makeCell('.');
        return;
      case 'potion':
        hero.hp += target.value;
        pushLog('log.pickup.potion', { value: target.value });
        setStatusWithPickup('item.potion');
        moveHero(nextRow, nextCol);
        board[nextRow][nextCol] = makeCell('.');
        return;
      case 'attack':
        hero.attack += target.value;
        pushLog('log.pickup.attack', { value: target.value });
        setStatusWithPickup('item.attack');
        moveHero(nextRow, nextCol);
        board[nextRow][nextCol] = makeCell('.');
        return;
      case 'defense':
        hero.defense += target.value;
        pushLog('log.pickup.defense', { value: target.value });
        setStatusWithPickup('item.defense');
        moveHero(nextRow, nextCol);
        board[nextRow][nextCol] = makeCell('.');
        return;
      case 'coin':
        hero.coins += target.value;
        pushLog('log.pickup.coin', { value: target.value });
        setStatusWithPickup('item.coin');
        moveHero(nextRow, nextCol);
        board[nextRow][nextCol] = makeCell('.');
        return;
      case 'empty':
      case 'stairs':
        moveHero(nextRow, nextCol);
        statusKey = 'game.status.moved';
        statusParams = { direction };
        pushLog('log.move', { direction });
        updateStatusMessage();
        return;
      default:
        moveHero(nextRow, nextCol);
        statusKey = 'game.status.moved';
        statusParams = { direction };
        pushLog('log.move', { direction });
        updateStatusMessage();
    }
  }

  function setStatusWithPickup(itemKey) {
    statusKey = 'game.status.pickup';
    statusParams = { item: itemKey };
    updateStatusMessage();
  }

  function moveHero(row, col) {
    heroPosition = { row, col };
    updateStats();
    renderBoard();
  }

  function handleCombat(target, row, col, direction) {
    const monsterData = monsters[target.id];
    if (!monsterData) {
      moveHero(row, col);
      statusKey = 'game.status.moved';
      statusParams = { direction };
      pushLog('log.move', { direction });
      updateStatusMessage();
      return;
    }

    const heroDamage = Math.max(hero.attack - monsterData.defense, 0);
    if (heroDamage <= 0) {
      statusKey = 'game.status.blocked';
      statusParams = { monster: monsterData.nameKey };
      pushLog('log.combat.blocked', { monster: monsterData.nameKey });
      updateStatusMessage();
      return;
    }

    const monsterDamage = Math.max(monsterData.attack - hero.defense, 0);
    let heroHp = hero.hp;
    let monsterHp = monsterData.hp;
    let totalLoss = 0;

    while (monsterHp > 0 && heroHp > 0) {
      monsterHp -= heroDamage;
      if (monsterHp <= 0) {
        break;
      }
      heroHp -= monsterDamage;
      totalLoss += monsterDamage;
    }

    if (heroHp <= 0) {
      hero.hp = 0;
      statusKey = 'game.status.defeat';
      statusParams = {};
      pushLog('log.combat.defeat', { monster: monsterData.nameKey });
      gameOver = true;
      updateStats();
      renderBoard();
      updateStatusMessage();
      return;
    }

    hero.hp = heroHp;
    hero.coins += monsterData.reward;
    statusKey = 'game.status.combat-win';
    statusParams = { monster: monsterData.nameKey };
    pushLog('log.combat.win', {
      monster: monsterData.nameKey,
      loss: totalLoss,
    });
    board[row][col] = makeCell('.');
    moveHero(row, col);
    updateStatusMessage();
  }

  function handleDoor(row, col) {
    if (hero.keys <= 0) {
      statusKey = 'game.status.locked';
      statusParams = {};
      pushLog('log.door.locked', {});
      updateStatusMessage();
      return;
    }

    hero.keys -= 1;
    hero.floor += 1;
    gameOver = true;
    statusKey = 'game.status.victory';
    statusParams = {};
    pushLog('log.door.open');
    pushLog('log.victory');
    board[row][col] = { type: 'stairs' };
    moveHero(row, col);
    updateStatusMessage();
  }

  function handleKeydown(event) {
    const direction = directionKeys[event.key];
    if (!direction) {
      return;
    }
    event.preventDefault();
    tryMove(direction);
  }

  function handleControlClick(event) {
    const button = event.target.closest('button[data-dir]');
    if (!button) {
      return;
    }
    const direction = button.dataset.dir;
    tryMove(direction);
  }

  function restartGame() {
    resetBoard();
    pushLog('log.reset');
    statusKey = 'game.status.ready';
    statusParams = {};
    updateStatusMessage();
  }

  function applyTranslations(lang) {
    const pack = getPack(lang);
    document.querySelectorAll('[data-i18n-key]').forEach((el) => {
      const key = el.dataset.i18nKey;
      const value = pack[key];
      if (!value) {
        return;
      }

      if (typeof value === 'string') {
        el.textContent = value;
        return;
      }

      if (typeof value === 'object') {
        if (value.text !== undefined) {
          el.textContent = value.text;
        }
        if (value.html !== undefined) {
          el.innerHTML = value.html;
        }
        if (value.attrs) {
          Object.entries(value.attrs).forEach(([attr, attrValue]) => {
            el.setAttribute(attr, attrValue);
          });
        }
      }
    });

    document.documentElement.setAttribute('lang', lang === 'en' ? 'en' : 'zh-CN');

    if (toggleButton) {
      toggleButton.setAttribute('aria-pressed', lang === 'en' ? 'true' : 'false');
    }

    updateStats();
    renderBoard();
    renderLog();
    updateStatusMessage();
  }

  function initLanguage() {
    try {
      const stored = localStorage.getItem(langStorageKey);
      if (stored && translations[stored]) {
        currentLang = stored;
      }
    } catch (error) {
      currentLang = 'zh';
    }

    applyTranslations(currentLang);

    if (toggleButton) {
      toggleButton.addEventListener('click', () => {
        currentLang = currentLang === 'zh' ? 'en' : 'zh';
        applyTranslations(currentLang);
        try {
          localStorage.setItem(langStorageKey, currentLang);
        } catch (error) {
          // ignore storage errors
        }
      });
    }
  }

  function init() {
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }

    resetBoard();
    initLanguage();

    document.addEventListener('keydown', handleKeydown);

    if (gridEl) {
      gridEl.addEventListener('click', handleControlClick);
    }

    const controls = document.querySelector('.tower-controls');
    if (controls) {
      controls.addEventListener('click', handleControlClick);
    }

    if (restartBtn) {
      restartBtn.addEventListener('click', restartGame);
    }
  }

  init();
})();
