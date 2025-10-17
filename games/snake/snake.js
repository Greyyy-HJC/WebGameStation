(function () {
  const storageKey = 'webgamestation-lang';
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
      'hero.tags.arcade': '街机',
      'hero.tags.reflex': '反应',
      'hero.tags.classic': '经典',
      'hero.title': '像素贪吃蛇',
      'hero.description':
        '经典玩法与现代界面结合：随时随地开启一局贪吃蛇，享受顺滑的操作手感与渐进式速度挑战，刷新属于你的最高分。',
      'hero.meta.pure': '纯前端实现',
      'hero.meta.static': 'GitHub Pages 托管',
      'hero.meta.mobile': '键盘与触控皆可上手',
      'panel.heading': '立即游玩',
      'panel.description':
        '使用方向键或触控按键控制贪吃蛇，收集能量方块即可加分。速度会随着成绩逐渐提升，合理规划路线才能生存更久。',
      'panel.score': '得分',
      'panel.speed': '速度',
      'panel.note': '小提示：若按键无响应，请先点击游戏区域以获取焦点。Safari、Chrome、Edge 最新版本均已通过测试。',
      'scoreboard.heading': '实时数据',
      'controls.start': '开始',
      'controls.pause': '暂停',
      'controls.reset': '重开',
      'touch.group': {
        attrs: {
          'aria-label': '触控方向控制',
        },
      },
      'touch.up': {
        text: '↑',
        attrs: {
          'aria-label': '向上',
        },
      },
      'touch.left': {
        text: '←',
        attrs: {
          'aria-label': '向左',
        },
      },
      'touch.right': {
        text: '→',
        attrs: {
          'aria-label': '向右',
        },
      },
      'touch.down': {
        text: '↓',
        attrs: {
          'aria-label': '向下',
        },
      },
      'tips.heading': '玩法提示',
      'tips.item1': '贪吃蛇不能穿越墙体或碰到自身，请提前规划转向路线。',
      'tips.item2': '每吃到 1 个能量方块得 1 分，并小幅提升移动速度。',
      'tips.item3': '移动端玩家可使用触控方向键；长按可持续朝该方向移动。',
      'footer.tagline': 'WebGameStation · 像素贪吃蛇。',
      'game.status.ready': '准备就绪，按下开始键开启挑战。',
      'game.status.playing': '游戏进行中，保持专注刷新高分！',
      'game.status.paused': '已暂停，可随时继续冒险。',
      'game.status.over': '游戏结束，点击重开或开始再次挑战。',
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
      'hero.tags.arcade': 'Arcade',
      'hero.tags.reflex': 'Reflex',
      'hero.tags.classic': 'Classic',
      'hero.title': 'Pixel Snake',
      'hero.description':
        'Classic mechanics meet a modern interface—launch a quick round of snake anywhere, enjoy smooth controls, and chase ever-faster high scores.',
      'hero.meta.pure': 'Pure front-end build',
      'hero.meta.static': 'Hosted on GitHub Pages',
      'hero.meta.mobile': 'Keyboard and touch friendly',
      'panel.heading': 'Play instantly',
      'panel.description':
        'Use arrow keys or the touch pad to guide the snake. Collect energy cubes to increase your score—the pace ramps up as you survive longer.',
      'panel.score': 'Score',
      'panel.speed': 'Speed',
      'panel.note': 'Tip: if controls stop responding, click the playfield to focus. Tested on the latest Safari, Chrome, and Edge.',
      'scoreboard.heading': 'Live stats',
      'controls.start': 'Start',
      'controls.pause': 'Pause',
      'controls.reset': 'Restart',
      'touch.group': {
        attrs: {
          'aria-label': 'Touch direction controls',
        },
      },
      'touch.up': {
        text: '↑',
        attrs: {
          'aria-label': 'Move up',
        },
      },
      'touch.left': {
        text: '←',
        attrs: {
          'aria-label': 'Move left',
        },
      },
      'touch.right': {
        text: '→',
        attrs: {
          'aria-label': 'Move right',
        },
      },
      'touch.down': {
        text: '↓',
        attrs: {
          'aria-label': 'Move down',
        },
      },
      'tips.heading': 'Gameplay tips',
      'tips.item1': 'Avoid running into walls or your own tail—plan turns in advance.',
      'tips.item2': 'Each energy cube adds one point and gently increases the speed.',
      'tips.item3': 'On mobile, use the touch pad; press and hold to keep moving in a direction.',
      'footer.tagline': 'WebGameStation · Pixel Snake.',
      'game.status.ready': 'Ready when you are—press Start to begin.',
      'game.status.playing': 'Game on! Stay sharp and push your high score.',
      'game.status.paused': 'Paused. Pick up right where you left off.',
      'game.status.over': 'Game over. Hit Restart or Start for another run.',
    },
  };

  let currentLang = 'zh';

  try {
    const stored = localStorage.getItem(storageKey);
    if (stored && translations[stored]) {
      currentLang = stored;
    }
  } catch (error) {
    currentLang = 'zh';
  }

  const toggleButton = document.querySelector('.lang-toggle');
  const statusEl = document.getElementById('snake-status');
  const scoreEl = document.getElementById('score-value');
  const speedEl = document.getElementById('speed-value');
  const yearEl = document.getElementById('game-year');

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  function getPack(lang) {
    return translations[lang] || translations.zh;
  }

  function applyValue(el, pack, key) {
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
  }

  function applyTranslations(lang) {
    const pack = getPack(lang);
    document.querySelectorAll('[data-i18n-key]').forEach((el) => {
      const stateKey = el.dataset.stateKey;
      const key = stateKey || el.dataset.i18nKey;
      applyValue(el, pack, key);
    });
    document.documentElement.setAttribute('lang', lang === 'en' ? 'en' : 'zh-CN');
    if (toggleButton) {
      toggleButton.setAttribute('aria-pressed', lang === 'en' ? 'true' : 'false');
    }
  }

  function t(key) {
    const pack = getPack(currentLang);
    const value = pack[key];
    if (!value) {
      return '';
    }
    if (typeof value === 'string') {
      return value;
    }
    if (typeof value === 'object') {
      if (value.text !== undefined) {
        return value.text;
      }
      if (value.html !== undefined) {
        return value.html;
      }
      return '';
    }
    return '';
  }

  function setStatus(key) {
    if (!statusEl) {
      return;
    }
    statusEl.dataset.stateKey = key;
    statusEl.textContent = t(key);
  }

  applyTranslations(currentLang);

  if (toggleButton) {
    toggleButton.addEventListener('click', () => {
      currentLang = currentLang === 'zh' ? 'en' : 'zh';
      applyTranslations(currentLang);
      setStatus(statusEl.dataset.stateKey || 'game.status.ready');
      try {
        localStorage.setItem(storageKey, currentLang);
      } catch (error) {
        // ignore storage issues
      }
    });
  }

  const canvas = document.getElementById('snake-board');
  if (!canvas) {
    return;
  }

  const ctx = canvas.getContext('2d');
  const gridSize = 20;
  const tileSize = canvas.width / gridSize;
  const baseSpeed = 150;
  let currentSpeed = baseSpeed;
  let timerId = null;
  let isRunning = false;
  let isGameOver = false;
  let snake = [];
  let direction = { x: 1, y: 0 };
  let nextDirection = { x: 1, y: 0 };
  let food = { x: 10, y: 10 };
  let score = 0;

  function resetSnake() {
    const startX = Math.floor(gridSize / 2);
    const startY = Math.floor(gridSize / 2);
    snake = [
      { x: startX - 1, y: startY },
      { x: startX - 2, y: startY },
      { x: startX - 3, y: startY },
    ];
    direction = { x: 1, y: 0 };
    nextDirection = { x: 1, y: 0 };
  }

  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function spawnFood() {
    let newFood;
    do {
      newFood = { x: randomInt(0, gridSize - 1), y: randomInt(0, gridSize - 1) };
    } while (snake.some((segment) => segment.x === newFood.x && segment.y === newFood.y));
    food = newFood;
  }

  function updateScore() {
    if (scoreEl) {
      scoreEl.textContent = String(score);
    }
  }

  function updateSpeedDisplay() {
    if (speedEl) {
      const multiplier = 1 + Math.min(5, Math.floor(score / 5)) * 0.2;
      currentSpeed = Math.max(60, Math.round(baseSpeed / multiplier));
      speedEl.textContent = `${multiplier.toFixed(1)}×`;
    }
  }

  function clearTimer() {
    if (timerId) {
      clearTimeout(timerId);
      timerId = null;
    }
  }

  function drawBoard() {
    ctx.fillStyle = '#f7fbff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = 'rgba(10, 132, 255, 0.08)';
    ctx.lineWidth = 1;
    for (let i = 1; i < gridSize; i += 1) {
      ctx.beginPath();
      ctx.moveTo(i * tileSize, 0);
      ctx.lineTo(i * tileSize, canvas.height);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(0, i * tileSize);
      ctx.lineTo(canvas.width, i * tileSize);
      ctx.stroke();
    }
  }

  function drawRoundRectPath(x, y, width, height, radius) {
    const r = Math.min(radius, width / 2, height / 2);
    if (typeof ctx.roundRect === 'function') {
      ctx.roundRect(x, y, width, height, r);
      return;
    }
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + width - r, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + r);
    ctx.lineTo(x + width, y + height - r);
    ctx.quadraticCurveTo(x + width, y + height, x + width - r, y + height);
    ctx.lineTo(x + r, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - r);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);
    ctx.closePath();
  }

  function drawSnake() {
    snake.forEach((segment, index) => {
      const x = segment.x * tileSize;
      const y = segment.y * tileSize;
      const radius = tileSize * 0.35;

      const gradient = ctx.createLinearGradient(x, y, x + tileSize, y + tileSize);
      if (index === 0) {
        gradient.addColorStop(0, '#34c759');
        gradient.addColorStop(1, '#0fbcf9');
      } else {
        gradient.addColorStop(0, '#5fd38a');
        gradient.addColorStop(1, '#2ecf91');
      }

      ctx.fillStyle = gradient;
      ctx.beginPath();
      drawRoundRectPath(x + 2, y + 2, tileSize - 4, tileSize - 4, radius);
      ctx.fill();

      ctx.fillStyle = 'rgba(255, 255, 255, 0.35)';
      ctx.beginPath();
      drawRoundRectPath(x + 5, y + 5, tileSize - 10, tileSize - 10, radius / 1.4);
      ctx.fill();
    });
  }

  function drawFood() {
    const x = food.x * tileSize + tileSize / 2;
    const y = food.y * tileSize + tileSize / 2;
    const radius = tileSize * 0.32;

    const gradient = ctx.createRadialGradient(x, y, radius * 0.2, x, y, radius);
    gradient.addColorStop(0, '#ffd60a');
    gradient.addColorStop(1, '#ff9f0a');

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
  }

  function render() {
    drawBoard();
    drawFood();
    drawSnake();
  }

  function isOpposite(dirA, dirB) {
    return dirA.x === -dirB.x && dirA.y === -dirB.y;
  }

  function step() {
    const head = snake[0];
    direction = nextDirection;
    const newHead = { x: head.x + direction.x, y: head.y + direction.y };

    if (
      newHead.x < 0 ||
      newHead.x >= gridSize ||
      newHead.y < 0 ||
      newHead.y >= gridSize ||
      snake.some((segment) => segment.x === newHead.x && segment.y === newHead.y)
    ) {
      gameOver();
      return;
    }

    snake.unshift(newHead);

    if (newHead.x === food.x && newHead.y === food.y) {
      score += 1;
      updateScore();
      updateSpeedDisplay();
      spawnFood();
    } else {
      snake.pop();
    }

    render();
  }

  function scheduleTick() {
    clearTimer();
    timerId = setTimeout(() => {
      if (!isRunning) {
        return;
      }
      step();
      if (isRunning) {
        scheduleTick();
      }
    }, currentSpeed);
  }

  function startGame() {
    if (isRunning) {
      return;
    }
    if (isGameOver) {
      return;
    }
    isRunning = true;
    setStatus('game.status.playing');
    scheduleTick();
  }

  function pauseGame() {
    if (!isRunning) {
      return;
    }
    isRunning = false;
    clearTimer();
    setStatus('game.status.paused');
  }

  function gameOver() {
    isRunning = false;
    isGameOver = true;
    clearTimer();
    setStatus('game.status.over');
  }

  function resetGame() {
    clearTimer();
    isRunning = false;
    isGameOver = false;
    score = 0;
    currentSpeed = baseSpeed;
    resetSnake();
    spawnFood();
    updateScore();
    updateSpeedDisplay();
    render();
    setStatus('game.status.ready');
  }

  function setDirection(newDirection) {
    if (isOpposite(newDirection, direction) || isOpposite(newDirection, nextDirection)) {
      return;
    }
    nextDirection = newDirection;
    if (!isRunning && !isGameOver) {
      startGame();
    }
  }

  function handleStart() {
    if (isGameOver) {
      resetGame();
    }
    startGame();
  }

  function handlePause() {
    if (isRunning) {
      pauseGame();
    } else if (!isGameOver) {
      startGame();
    }
  }

  function handleReset() {
    resetGame();
  }

  const startBtn = document.getElementById('start-btn');
  const pauseBtn = document.getElementById('pause-btn');
  const resetBtn = document.getElementById('reset-btn');
  const dpadButtons = document.querySelectorAll('.dpad-button');

  if (startBtn) {
    startBtn.addEventListener('click', handleStart);
  }

  if (pauseBtn) {
    pauseBtn.addEventListener('click', handlePause);
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', handleReset);
  }

  dpadButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const dir = btn.dataset.direction;
      if (!dir) {
        return;
      }
      switch (dir) {
        case 'up':
          setDirection({ x: 0, y: -1 });
          break;
        case 'down':
          setDirection({ x: 0, y: 1 });
          break;
        case 'left':
          setDirection({ x: -1, y: 0 });
          break;
        case 'right':
          setDirection({ x: 1, y: 0 });
          break;
        default:
          break;
      }
    });
  });

  document.addEventListener('keydown', (event) => {
    const key = event.key;
    let handled = true;
    switch (key) {
      case 'ArrowUp':
      case 'w':
      case 'W':
        setDirection({ x: 0, y: -1 });
        break;
      case 'ArrowDown':
      case 's':
      case 'S':
        setDirection({ x: 0, y: 1 });
        break;
      case 'ArrowLeft':
      case 'a':
      case 'A':
        setDirection({ x: -1, y: 0 });
        break;
      case 'ArrowRight':
      case 'd':
      case 'D':
        setDirection({ x: 1, y: 0 });
        break;
      case ' ': // space toggles start/pause
        if (isRunning) {
          pauseGame();
        } else if (isGameOver) {
          resetGame();
          startGame();
        } else {
          startGame();
        }
        break;
      default:
        handled = false;
        break;
    }
    if (handled) {
      event.preventDefault();
    }
  });

  let touchStart = null;
  canvas.addEventListener('touchstart', (event) => {
    const touch = event.changedTouches[0];
    touchStart = { x: touch.clientX, y: touch.clientY };
  });

  canvas.addEventListener(
    'touchmove',
    (event) => {
      if (!touchStart) {
        return;
      }
      const touch = event.changedTouches[0];
      const dx = touch.clientX - touchStart.x;
      const dy = touch.clientY - touchStart.y;
      const absDx = Math.abs(dx);
      const absDy = Math.abs(dy);
      const threshold = 18;

      if (absDx < threshold && absDy < threshold) {
        return;
      }

      if (absDx > absDy) {
        setDirection({ x: dx > 0 ? 1 : -1, y: 0 });
      } else {
        setDirection({ x: 0, y: dy > 0 ? 1 : -1 });
      }

      touchStart = null;
      event.preventDefault();
    },
    { passive: false }
  );

  canvas.addEventListener('touchend', () => {
    touchStart = null;
  });

  resetGame();
  applyTranslations(currentLang);
})();
