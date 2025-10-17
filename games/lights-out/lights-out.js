(function () {
  const size = 5;
  const langStorageKey = 'webgamestation-lang';
  const bestStorageKey = 'lights-out-best';

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
      'hero.tags.logic': '逻辑',
      'hero.tags.relax': '舒压',
      'hero.title': '极光灯阵',
      'hero.description':
        '点击棋盘翻转灯面，解开极光主题的 5×5 灯阵谜题。每一步都会影响相邻灯光，考验你的推理与节奏掌控。',
      'hero.meta.grid': '5×5 灯阵',
      'hero.meta.moves': '统计步数',
      'hero.meta.undo': '支持重置',
      'panel.heading': '立即开局',
      'panel.description': '点击任意灯面将其与上下左右相邻灯同时切换状态。让棋盘回归全暗即可获胜，试着用最少的步数解开谜题。',
      'panel.moves': '步数',
      'panel.best': '最佳纪录',
      'panel.note': '提示：棋盘总能被解开。遇到卡关时可点击“重置灯面”恢复当前局面或重新开局。',
      'scoreboard.heading': '进度追踪',
      'controls.new': '开始新局',
      'controls.reset': '重置灯面',
      'rules.heading': '玩法说明',
      'rules.item1': '每次点击会翻转目标灯与其上下左右相邻灯的状态。',
      'rules.item2': '棋盘所有灯熄灭即达成胜利，可记录最少步数挑战自己。',
      'rules.item3': '最佳纪录会保存在本地浏览器，可随时刷新或清空。',
      'footer.tagline': 'WebGameStation · 极光灯阵。',
      'game.status.ready': '点击“开始新局”生成随机灯阵。',
      'game.status.playing': '随机灯阵已生成，尽量用最少步数熄灭所有灯。',
      'game.status.reset': '已恢复当前局面，可继续尝试更优解。',
      'game.status.solved': '恭喜！灯阵全部熄灭，看看还能否刷新纪录。',
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
      'hero.tags.logic': 'Logic',
      'hero.tags.relax': 'Relax',
      'hero.title': 'Aurora Lights',
      'hero.description':
        'Flip the aurora grid to solve a soothing 5×5 light puzzle. Each tap toggles adjacent tiles—plan ahead to clear them all.',
      'hero.meta.grid': '5×5 grid',
      'hero.meta.moves': 'Move counter',
      'hero.meta.undo': 'Reset friendly',
      'panel.heading': 'Play instantly',
      'panel.description': 'Tap any light to toggle it and its neighbors. Turn every panel off to win, aiming for the fewest moves possible.',
      'panel.moves': 'Moves',
      'panel.best': 'Best record',
      'panel.note': 'Tip: every puzzle is solvable. Reset to revisit the current layout or start a fresh challenge anytime.',
      'scoreboard.heading': 'Progress tracker',
      'controls.new': 'New puzzle',
      'controls.reset': 'Reset board',
      'rules.heading': 'How to play',
      'rules.item1': 'Each tap flips the chosen light plus its four orthogonal neighbors.',
      'rules.item2': 'Clear the entire board to win—track your lowest move count for a personal challenge.',
      'rules.item3': 'Your best record is saved locally in the browser and can be improved anytime.',
      'footer.tagline': 'WebGameStation · Aurora Lights.',
      'game.status.ready': 'Tap “New puzzle” to generate a random light grid.',
      'game.status.playing': 'New lights generated—see how few moves it takes to switch them all off.',
      'game.status.reset': 'Board restored to its starting layout. Try a different approach!',
      'game.status.solved': 'Well done! Every light is off—can you beat that move count?',
    },
  };

  const gridEl = document.getElementById('lights-grid');
  const statusEl = document.getElementById('lights-status');
  const movesEl = document.getElementById('moves-value');
  const bestEl = document.getElementById('best-value');
  const newGameBtn = document.getElementById('new-game-btn');
  const resetBtn = document.getElementById('reset-btn');
  const yearEl = document.getElementById('game-year');
  const toggleButton = document.querySelector('.lang-toggle');

  let currentLang = 'zh';
  let board = [];
  let initialBoard = null;
  let moves = 0;
  let bestRecord = null;
  let statusKey = 'game.status.ready';
  const cellRefs = [];

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

  try {
    const storedBest = localStorage.getItem(bestStorageKey);
    if (storedBest) {
      const parsed = Number.parseInt(storedBest, 10);
      if (!Number.isNaN(parsed)) {
        bestRecord = parsed;
      }
    }
  } catch (error) {
    bestRecord = null;
  }

  function getPack(lang) {
    return translations[lang] || translations.zh;
  }

  function applyTranslations(lang) {
    const langPack = getPack(lang);

    document.querySelectorAll('[data-i18n-key]').forEach((el) => {
      const key = el.dataset.i18nKey;
      const value = langPack[key];
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
    if (statusEl && pack[statusKey]) {
      statusEl.textContent = pack[statusKey];
    }
  }

  function updateMovesDisplay() {
    if (movesEl) {
      movesEl.textContent = moves.toString();
    }
  }

  function updateBestDisplay() {
    if (bestEl) {
      bestEl.textContent = bestRecord == null ? '—' : bestRecord.toString();
    }
  }

  function cloneBoard(target) {
    return target.map((row) => row.slice());
  }

  function isSolved(target) {
    return target.every((row) => row.every((cell) => !cell));
  }

  function setCellState(row, col, isOn) {
    const cell = cellRefs[row][col];
    cell.classList.toggle('light-on', isOn);
    cell.setAttribute('aria-pressed', isOn ? 'true' : 'false');
    cell.textContent = isOn ? '✦' : '·';
  }

  function syncBoard() {
    for (let row = 0; row < size; row += 1) {
      for (let col = 0; col < size; col += 1) {
        setCellState(row, col, board[row][col]);
      }
    }
  }

  function toggleCell(row, col) {
    if (row < 0 || row >= size || col < 0 || col >= size) {
      return;
    }
    board[row][col] = !board[row][col];
  }

  function applyToggle(row, col) {
    toggleCell(row, col);
    toggleCell(row - 1, col);
    toggleCell(row + 1, col);
    toggleCell(row, col - 1);
    toggleCell(row, col + 1);
  }

  function finishIfSolved() {
    if (isSolved(board)) {
      gridEl.classList.add('lights-grid--solved');
      statusKey = 'game.status.solved';
      updateStatusMessage();

      if (moves > 0 && (bestRecord == null || moves < bestRecord)) {
        bestRecord = moves;
        updateBestDisplay();
        try {
          localStorage.setItem(bestStorageKey, String(bestRecord));
        } catch (error) {
          // Ignore storage errors
        }
      }
    }
  }

  function handleCellInteraction(row, col) {
    if (!initialBoard) {
      return;
    }

    gridEl.classList.remove('lights-grid--solved');
    applyToggle(row, col);
    moves += 1;
    syncBoard();
    updateMovesDisplay();

    if (statusKey !== 'game.status.playing') {
      statusKey = 'game.status.playing';
      updateStatusMessage();
    }

    finishIfSolved();
  }

  function resetBoard() {
    if (!initialBoard) {
      return;
    }

    board = cloneBoard(initialBoard);
    moves = 0;
    syncBoard();
    updateMovesDisplay();
    gridEl.classList.remove('lights-grid--solved');
    statusKey = 'game.status.reset';
    updateStatusMessage();
  }

  function randomizeBoard() {
    board = Array.from({ length: size }, () => Array(size).fill(false));

    const toggles = size * size;
    for (let i = 0; i < toggles; i += 1) {
      const row = Math.floor(Math.random() * size);
      const col = Math.floor(Math.random() * size);
      applyToggle(row, col);
    }

    if (isSolved(board)) {
      // Ensure puzzle isn't already solved
      applyToggle(0, 0);
    }

    initialBoard = cloneBoard(board);
    moves = 0;
    syncBoard();
    updateMovesDisplay();
    gridEl.classList.remove('lights-grid--solved');
    statusKey = 'game.status.playing';
    updateStatusMessage();
  }

  function createGrid() {
    gridEl.innerHTML = '';
    cellRefs.length = 0;

    for (let row = 0; row < size; row += 1) {
      const rowCells = [];
      for (let col = 0; col < size; col += 1) {
        const button = document.createElement('button');
        button.type = 'button';
        button.dataset.row = String(row);
        button.dataset.col = String(col);
        button.setAttribute('role', 'gridcell');
        button.setAttribute('aria-pressed', 'false');
        button.textContent = '·';
        button.addEventListener('click', () => {
          handleCellInteraction(row, col);
        });
        rowCells.push(button);
        gridEl.appendChild(button);
      }
      cellRefs.push(rowCells);
    }

    board = Array.from({ length: size }, () => Array(size).fill(false));
    syncBoard();
  }

  createGrid();
  updateBestDisplay();
  applyTranslations(currentLang);
  updateMovesDisplay();

  if (toggleButton) {
    toggleButton.addEventListener('click', () => {
      currentLang = currentLang === 'zh' ? 'en' : 'zh';
      applyTranslations(currentLang);
      try {
        localStorage.setItem(langStorageKey, currentLang);
      } catch (error) {
        // Ignore storage errors
      }
    });
  }

  if (newGameBtn) {
    newGameBtn.addEventListener('click', () => {
      randomizeBoard();
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      resetBoard();
    });
  }
})();
