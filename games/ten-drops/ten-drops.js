(function () {
  const size = 6;
  const maxMoves = 10;
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
      'hero.tags.puzzle': '益智',
      'hero.tags.strategy': '策略',
      'hero.tags.chain': '连锁反应',
      'hero.title': '十滴水',
      'hero.description': '将有限的水滴倾注在棋盘上，制造绚丽的连锁爆裂。善用 10 次加水机会，让所有水滴回归宁静。',
      'hero.meta.grid': '6×6 水滴棋盘',
      'hero.meta.moves': '10 次加水机会',
      'hero.meta.random': '每局随机初始局面',
      'panel.heading': '立即挑战',
      'panel.description':
        '点击任意水滴格加 1 滴水。格子装满后会爆裂，把水滴传递到上下左右邻格，触发更多连锁反应。将全盘清零即可获胜。',
      'panel.moves': '剩余加水',
      'panel.cleared': '已清空',
      'panel.note': '提示：剩余加水次数耗尽仍未清空棋盘则判定失败，随时可点击“开始新局”换一个随机挑战。',
      'scoreboard.heading': '进度追踪',
      'controls.new': '开始新局',
      'controls.reset': '重置当前局',
      'rules.heading': '玩法说明',
      'rules.item1': '格子可容纳与其相邻方向数量相同的水滴（四向为 4 滴）。超过阈值将爆裂并向四周扩散。',
      'rules.item2': '一次爆裂可能触发更多连锁反应，轻点角落与边缘可创造更戏剧化的局面。',
      'rules.item3': '清空棋盘即可获胜，使用的加水次数越少代表策略越高效。',
      'footer.tagline': 'WebGameStation · 十滴水。',
      'game.status.ready': '点击“开始新局”生成棋盘。',
      'game.status.playing': '随机棋盘已就绪，合理分配 10 次加水机会。',
      'game.status.reset': '已恢复初始布局，继续寻找完美的连锁方案。',
      'game.status.keep': '连锁反应进行中，留意剩余加水次数。',
      'game.status.cleared': '太棒了！你成功清空棋盘，十滴水挑战完成。',
      'game.status.failed': '加水次数已用尽。再试一次，或许下一局就能成功。',
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
      'hero.tags.puzzle': 'Puzzle',
      'hero.tags.strategy': 'Strategy',
      'hero.tags.chain': 'Chain reaction',
      'hero.title': 'Ten Drops',
      'hero.description': 'Pour limited droplets into the grid to spark dazzling chain reactions. Use just 10 pours to calm every cell.',
      'hero.meta.grid': '6×6 droplet grid',
      'hero.meta.moves': '10 pours per round',
      'hero.meta.random': 'Fresh random layouts',
      'panel.heading': 'Start playing',
      'panel.description':
        'Tap any cell to add a droplet. When it overflows it bursts, sending droplets to the four neighbors and triggering cascading reactions. Clear the board to win.',
      'panel.moves': 'Pours left',
      'panel.cleared': 'Cleared',
      'panel.note': 'Tip: running out of pours before the grid is empty ends the round—start a new layout anytime for a fresh challenge.',
      'scoreboard.heading': 'Progress tracker',
      'controls.new': 'New round',
      'controls.reset': 'Reset layout',
      'rules.heading': 'How it works',
      'rules.item1': 'Each cell can hold as many droplets as it has neighbors (four for inner cells). Overflow bursts outward to orthogonal tiles.',
      'rules.item2': 'Chain reactions can get dramatic—lightly tapping corners or edges changes how the wave propagates.',
      'rules.item3': 'Clear every droplet to win. Fewer pours used means a sharper strategy.',
      'footer.tagline': 'WebGameStation · Ten Drops.',
      'game.status.ready': 'Tap “New round” to generate the puzzle.',
      'game.status.playing': 'Random grid ready—plan how to spend your 10 pours.',
      'game.status.reset': 'Layout restored. Experiment with a different chain reaction!',
      'game.status.keep': 'Chain reactions in motion. Watch your remaining pours.',
      'game.status.cleared': 'Great job! Every droplet is gone—Ten Drops complete.',
      'game.status.failed': 'You are out of pours. Try again for a cleaner cascade.',
    },
  };

  const gridEl = document.getElementById('drops-grid');
  const statusEl = document.getElementById('drops-status');
  const movesEl = document.getElementById('moves-value');
  const clearedEl = document.getElementById('cleared-value');
  const newGameBtn = document.getElementById('new-game-btn');
  const resetBtn = document.getElementById('reset-btn');
  const yearEl = document.getElementById('game-year');
  const toggleButton = document.querySelector('.lang-toggle');

  let currentLang = 'zh';
  let board = [];
  let initialBoard = [];
  let movesLeft = maxMoves;
  let statusKey = 'game.status.ready';
  let playing = false;
  let isResolving = false;
  const cellRefs = [];

  function createEmptyBoard() {
    return Array.from({ length: size }, () => Array(size).fill(0));
  }

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  try {
    const storedLang = localStorage.getItem(langStorageKey);
    if (storedLang && translations[storedLang]) {
      currentLang = storedLang;
    }
  } catch (error) {
    currentLang = 'zh';
  }

  function getPack(lang) {
    return translations[lang] || translations.zh;
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

    updateStatusMessage();
  }

  function updateStatusMessage() {
    const pack = getPack(currentLang);
    const message = pack[statusKey];
    if (message && statusEl) {
      statusEl.textContent = typeof message === 'string' ? message : message.text;
    }
  }

  function getCapacity(row, col) {
    let cap = 4;
    if (row === 0 || row === size - 1) {
      cap -= 1;
    }
    if (col === 0 || col === size - 1) {
      cap -= 1;
    }
    return cap;
  }

  function cloneBoard(source) {
    return source.map((row) => row.slice());
  }

  function updateCell(row, col) {
    const cell = cellRefs[row][col];
    const value = board[row][col];
    if (!cell) {
      return;
    }

    cell.dataset.level = String(Math.min(value, 4));
    cell.dataset.drops = String(value);
    cell.setAttribute('aria-label', `${value}`);
  }

  function updateCleared() {
    const total = size * size;
    let zeroCount = 0;
    for (let r = 0; r < size; r += 1) {
      for (let c = 0; c < size; c += 1) {
        if (board[r][c] === 0) {
          zeroCount += 1;
        }
      }
    }
    const percent = Math.round((zeroCount / total) * 100);
    if (clearedEl) {
      clearedEl.textContent = `${percent}%`;
    }
  }

  function updateMoves() {
    if (movesEl) {
      movesEl.textContent = String(movesLeft);
    }
  }

  function renderBoard() {
    gridEl.innerHTML = '';
    cellRefs.length = 0;

    for (let row = 0; row < size; row += 1) {
      const rowRefs = [];
      for (let col = 0; col < size; col += 1) {
        const cell = document.createElement('button');
        cell.type = 'button';
        cell.className = 'drops-cell';
        cell.setAttribute('role', 'gridcell');
        cell.dataset.row = String(row);
        cell.dataset.col = String(col);
        cell.dataset.level = '0';
        cell.dataset.drops = '0';
        cell.setAttribute('aria-label', '0');
        cell.addEventListener('click', () => handleCellClick(row, col));
        cell.addEventListener('keydown', (event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            handleCellClick(row, col);
          }
        });
        gridEl.appendChild(cell);
        rowRefs.push(cell);
      }
      cellRefs.push(rowRefs);
    }
  }

  function applyDrop(row, col) {
    const queue = [{ row, col }];

    while (queue.length > 0) {
      const current = queue.shift();
      const { row: r, col: c } = current;
      board[r][c] += 1;
      updateCell(r, c);
      const cap = getCapacity(r, c);

      if (board[r][c] > cap) {
        board[r][c] = 0;
        updateCell(r, c);
        const neighbors = [
          { row: r - 1, col: c },
          { row: r + 1, col: c },
          { row: r, col: c - 1 },
          { row: r, col: c + 1 },
        ];

        neighbors.forEach((neighbor) => {
          const { row: nr, col: nc } = neighbor;
          if (nr >= 0 && nr < size && nc >= 0 && nc < size) {
            queue.push({ row: nr, col: nc });
          }
        });
      }
    }
  }

  function checkOutcome() {
    const allClear = board.every((row) => row.every((value) => value === 0));
    if (allClear) {
      playing = false;
      statusKey = 'game.status.cleared';
      updateStatusMessage();
      return;
    }

    if (movesLeft <= 0) {
      playing = false;
      statusKey = 'game.status.failed';
      updateStatusMessage();
    }
  }

  function handleCellClick(row, col) {
    if (!playing || isResolving || movesLeft <= 0) {
      return;
    }

    isResolving = true;
    movesLeft -= 1;
    applyDrop(row, col);
    updateMoves();
    updateCleared();

    if (playing) {
      statusKey = 'game.status.keep';
    }

    checkOutcome();
    if (!playing && statusKey === 'game.status.failed') {
      updateCleared();
    }
    updateStatusMessage();
    isResolving = false;
  }

  function randomBoard() {
    const generated = [];
    let nonZero = 0;
    for (let row = 0; row < size; row += 1) {
      const rowValues = [];
      for (let col = 0; col < size; col += 1) {
        const cap = getCapacity(row, col);
        const value = Math.floor(Math.random() * (cap + 1));
        if (value > 0) {
          nonZero += 1;
        }
        rowValues.push(value);
      }
      generated.push(rowValues);
    }

    if (nonZero === 0) {
      generated[2][3] = 2;
    }

    return generated;
  }

  function updateBoardDisplay() {
    for (let row = 0; row < size; row += 1) {
      for (let col = 0; col < size; col += 1) {
        updateCell(row, col);
      }
    }
    updateCleared();
    updateMoves();
  }

  function startNewGame() {
    board = randomBoard();
    initialBoard = cloneBoard(board);
    movesLeft = maxMoves;
    playing = true;
    statusKey = 'game.status.playing';
    updateBoardDisplay();
    updateStatusMessage();
  }

  function resetGame() {
    if (!initialBoard.length) {
      return;
    }
    board = cloneBoard(initialBoard);
    movesLeft = maxMoves;
    playing = true;
    statusKey = 'game.status.reset';
    updateBoardDisplay();
    updateStatusMessage();
  }

  function setupLanguageToggle() {
    if (!toggleButton) {
      return;
    }
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

  board = createEmptyBoard();
  initialBoard = cloneBoard(board);

  renderBoard();
  applyTranslations(currentLang);
  setupLanguageToggle();
  updateBoardDisplay();

  if (newGameBtn) {
    newGameBtn.addEventListener('click', () => {
      startNewGame();
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      resetGame();
    });
  }
})();
