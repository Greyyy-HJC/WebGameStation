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
      'hero.description': '引导勇者穿梭扩建后的魔塔迷宫，营救被困的旅人，与神秘 NPC 对话，收集强力装备并击败更危险的守卫者。',
      'hero.meta.grid': '11×11 多层迷宫',
      'hero.meta.controls': '方向键与触控操作',
      'hero.meta.goal': '解锁塔心守卫的封印',
      'panel.heading': '塔内试炼',
      'panel.description': '利用方向键或触控按钮在魔塔内移动。提前预览战斗结果，探索牢房与密室，与 NPC 交谈获取线索，并收集装备强化自己。',
      'game.status.ready': '利用方向键或下方按钮开始探索魔塔。',
      'game.status.moved': '向{{direction}}移动。',
      'game.status.wall': '厚重的石墙挡住了去路。',
      'game.status.locked': '大门紧闭，需要一把钥匙。',
      'game.status.combat-preview': '遭遇 {{monster}}，是否发动攻击？',
      'game.status.combat-win': '击败 {{monster}}，继续前进！',
      'game.status.blocked': '攻击力不足，无法击破 {{monster}}。',
      'game.status.combat-cancel': '勇者暂缓进攻。',
      'game.status.defeat': '勇者在战斗中力竭倒下……',
      'game.status.pickup': '获得 {{item}}。',
      'game.status.victory': '成功开启大门，通往下一层的阶梯出现！',
      'game.status.floor-up': '沿着阶梯攀向更高一层。',
      'game.status.floor-down': '顺着阶梯返回了下层。',
      'game.status.shop': '旅人商店开张，挑选需要的补给吧。',
      'game.status.goal': '勇者夺得圣物，试炼圆满结束！',
      'game.status.prisonLocked': '牢门紧闭，需要钥匙才能救出囚徒。',
      'game.status.prisonFreed': '{{npc}} 获救，带来了新的情报。',
      'game.status.npc': '与 {{npc}} 交谈，获得新的情报。',
      'game.status.equipment': '装备上了 {{item}}。',
      'scoreboard.heading': '冒险状态',
      'stats.hp': '生命',
      'stats.attack': '攻击',
      'stats.defense': '防御',
      'stats.keys': '钥匙',
      'stats.coins': '金币',
      'stats.floor': '楼层',
      'equipment.heading': '装备栏',
      'equipment.slot.weapon': '武器',
      'equipment.slot.armor': '护甲',
      'equipment.slot.accessory': '饰品',
      'equipment.empty': '未装备',
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
      'log.combat.cancel': '勇者决定暂缓战斗。',
      'log.door.locked': '没有钥匙，无法开启大门。',
      'log.door.open': '使用钥匙开启了大门。',
      'log.victory': '通关本层！勇者准备继续攀登。',
      'log.floor.up': '踏上楼梯来到第 {{floor}} 层。',
      'log.floor.down': '返回第 {{floor}} 层，留意新的变化。',
      'log.shop.enter': '走进旅人商店，琳琅满目。',
      'log.shop.exit': '离开旅人商店，继续冒险。',
      'log.shop.buy': '花费 {{cost}} 金币购入 {{item}}。',
      'log.shop.cannot': '金币不足，无法购买 {{item}}。',
      'log.goal': '勇者取得魔塔之心，旅程告一段落。',
      'log.reset': '试炼重置，属性恢复初始状态。',
      'log.prison.locked': '牢门紧锁，还需要钥匙。',
      'log.prison.freed': '解救了 {{npc}}，对方激动地致谢。',
      'log.npc.talk': '与 {{npc}} 深谈，获得新的情报。',
      'log.npc.reward': '{{npc}} 赠予 {{reward}}。',
      'log.equipment.equip': '装备 {{equipment}}，属性获得提升。',
      'log.equipment.replace': '更换 {{equipment}}，旧装备被妥善收纳。',
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
      'npc.heading': '塔中邂逅',
      'npc.continue': '继续冒险',
      'npc.role.sage': '塔中贤者',
      'npc.role.blacksmith': '流浪铁匠',
      'npc.role.prisoner': '失踪旅人',
      'npc.reward.coins': '一袋金币',
      'npc.reward.upgrade': '铁匠的强化',
      'npc.reward.escape': '旅人的谢礼',
      'npc.storyteller.name': '流光智者',
      'npc.storyteller.message': '贤者向你娓娓道来塔心的秘密。',
      'npc.storyteller.messageRepeat': '贤者再次提醒你留意钥匙与装备。',
      'npc.storyteller.line1': '“塔心的封印需要勇者与钥匙的力量。”',
      'npc.storyteller.line2': '“别忘了救下被困的旅人，他们握有通往塔心的线索。”',
      'npc.storyteller.repeat': '“愿你的装备与意志同样锋利。”',
      'npc.blacksmith.name': '旅途铁匠',
      'npc.blacksmith.message': '铁匠为你锻造装备，让战斗更轻松。',
      'npc.blacksmith.messageRepeat': '铁匠叮嘱你珍惜每一次锻造的机会。',
      'npc.blacksmith.line1': '“这座塔的怪物比表面看上去更顽强。”',
      'npc.blacksmith.line2': '“我已为你加固武器与护甲，别忘了试试新装备。”',
      'npc.blacksmith.repeat': '“若再遇见我，愿能听到你的胜利故事。”',
      'npc.prisoner.name': '失踪旅人',
      'npc.prisoner.message': '旅人脱困后把珍贵的钥匙与情报交给你。',
      'npc.prisoner.line1': '“谢谢你！我在牢中听见守卫谈论顶层的封印。”',
      'npc.prisoner.line2': '“收下这把钥匙与金币，希望它们能帮到你。”',
      'npc.prisoner.messageRepeat': '旅人会在塔外为你守望。',
      'npc.prisoner.repeat': '“祝你一路平安。”',
      'rules.heading': '玩法说明',
      'rules.item1': '箭头/WASD 控制勇者移动，遇到怪物会先展示战斗信息再决定是否出手。',
      'rules.item2': '击败怪物可获得金币，拾取道具与装备提升能力或恢复生命值。',
      'rules.item3': '部分楼层需要钥匙开启大门，亦可用钥匙解锁牢房营救 NPC。',
      'rules.item4': '旅人商店与 NPC 可提供补给、装备或剧情线索，合理规划资源。',
      'rules.item5': '装备栏可随时查看当前武器、护甲与饰品，必要时更换更强的装备。',
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
      'entity.stairsUp': '通往上层的阶梯',
      'entity.stairsDown': '通往下层的阶梯',
      'entity.shop': '旅人商店',
      'entity.goal': '魔塔之心',
      'entity.key': '钥匙',
      'entity.potion': '生命药剂',
      'entity.attack': '攻击之剑',
      'entity.defense': '守护徽章',
      'entity.coin': '金币袋',
      'entity.monster.slime': '史莱姆',
      'entity.monster.guard': '塔卫',
      'entity.monster.bat': '夜翼蝙蝠',
      'entity.monster.orc': '兽人勇士',
      'entity.monster.skeleton': '骷髅队长',
      'entity.monster.warlock': '暗影术士',
      'entity.monster.flame': '炎狱幽灵',
      'entity.prison': '牢门',
      'entity.npc': '塔中旅人',
      'combat.heading': '战斗预览',
      'combat.prompt': '遭遇怪物，是否要发动攻击？',
      'combat.hero': '勇者',
      'combat.reward': '奖励',
      'combat.expected': '预计损失 {{loss}} 生命。',
      'combat.unwinnable': '{{monster}} 的防御过高，暂时无法造成伤害。',
      'combat.fatal': '{{monster}} 的攻势过猛，现在贸然进攻只会战败。',
      'combat.attack': '发动攻击',
      'combat.cancel': '暂不战斗',
      'shop.heading': '旅人商店',
      'shop.prompt': '使用金币购买补给与强化。',
      'shop.coins': '当前金币：{{coins}}',
      'shop.cost': '{{value}} 金币',
      'shop.close': '离开商店',
      'shop.buy': '购买',
      'shop.cannot-afford': '金币不足',
      'shop.item.potionSmall': '回复药剂',
      'shop.item.potionSmall.desc': '恢复 120 点生命值。',
      'shop.item.attackBoost': '精炼长剑',
      'shop.item.attackBoost.desc': '攻击力永久提升 8 点。',
      'shop.item.defenseBoost': '坚韧护盾',
      'shop.item.defenseBoost.desc': '防御力永久提升 8 点。',
      'shop.item.key': '备用钥匙',
      'shop.item.key.desc': '获得一把钥匙，用于开启大门。',
      'equipment.dawnBlade': '晨曦长刃',
      'equipment.aegisMantle': '辉耀护甲',
      'equipment.windCharm': '疾风坠饰',
      'equipment.solarSigil': '旭日纹章',
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
      'hero.description': 'Guide the hero through an expanded labyrinth, rescue trapped travellers, trade words with mysterious NPCs, gather powerful gear, and fell dangerous wardens.',
      'hero.meta.grid': '11×11 multi-floor maze',
      'hero.meta.controls': 'Keyboard & touch controls',
      'hero.meta.goal': 'Break the seal guarding the tower heart',
      'panel.heading': 'Trial inside the tower',
      'panel.description': 'Use the arrow keys or touch buttons to move. Preview battles, search cells and chambers, speak with NPCs for clues, and collect gear to grow stronger.',
      'game.status.ready': 'Use the arrow keys or the on-screen pad to begin exploring.',
      'game.status.moved': 'Moved toward the {{direction}}.',
      'game.status.wall': 'A solid wall blocks the path.',
      'game.status.locked': 'The gate is locked—you need a key.',
      'game.status.combat-preview': 'Encountered the {{monster}}. Engage?',
      'game.status.combat-win': 'Defeated the {{monster}}. Onward!',
      'game.status.blocked': 'Your attack can’t break through the {{monster}}.',
      'game.status.combat-cancel': 'The hero holds the attack for now.',
      'game.status.defeat': 'The hero fell in battle…',
      'game.status.pickup': 'Collected {{item}}.',
      'game.status.victory': 'The gate opens and stairs to the next floor appear!',
      'game.status.floor-up': 'Climbed to an upper floor.',
      'game.status.floor-down': 'Descended to a lower floor.',
      'game.status.shop': 'A travelling shop appears—time to resupply.',
      'game.status.goal': 'Hero claimed the tower heart. Trial complete!',
      'game.status.prisonLocked': 'The cell door is sealed—you need a key to help the captive.',
      'game.status.prisonFreed': '{{npc}} is freed and shares new insights.',
      'game.status.npc': 'Spoke with {{npc}} and learned more about the tower.',
      'game.status.equipment': 'Equipped {{item}}.',
      'scoreboard.heading': 'Adventure stats',
      'stats.hp': 'HP',
      'stats.attack': 'Attack',
      'stats.defense': 'Defense',
      'stats.keys': 'Keys',
      'stats.coins': 'Coins',
      'stats.floor': 'Floor',
      'equipment.heading': 'Equipment',
      'equipment.slot.weapon': 'Weapon',
      'equipment.slot.armor': 'Armor',
      'equipment.slot.accessory': 'Accessory',
      'equipment.empty': 'Unequipped',
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
      'log.combat.cancel': 'The hero decided to hold back for now.',
      'log.door.locked': 'No key available—the gate will not budge.',
      'log.door.open': 'Unlocked the gate with a key.',
      'log.victory': 'Floor cleared! The hero is ready to climb.',
      'log.floor.up': 'Reached floor {{floor}}—new foes await.',
      'log.floor.down': 'Returned to floor {{floor}}. Something may have changed.',
      'log.shop.enter': 'Stepped into the travelling shop.',
      'log.shop.exit': 'Left the travelling shop and moved on.',
      'log.shop.buy': 'Spent {{cost}} gold to buy {{item}}.',
      'log.shop.cannot': 'Not enough coins to buy {{item}}.',
      'log.goal': 'Secured the tower heart. The journey ends.',
      'log.reset': 'Trial reset—stats restored to starting values.',
      'log.prison.locked': 'The cell remains shut—you still need a key.',
      'log.prison.freed': 'Freed {{npc}}, who offers heartfelt thanks.',
      'log.npc.talk': 'Spoke with {{npc}} and gained new insight.',
      'log.npc.reward': '{{npc}} handed over {{reward}}.',
      'log.equipment.equip': 'Equipped {{equipment}} and grew stronger.',
      'log.equipment.replace': 'Swapped in {{equipment}}, stowing older gear safely.',
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
      'npc.heading': 'Tower encounter',
      'npc.continue': 'Return to the journey',
      'npc.role.sage': 'Tower sage',
      'npc.role.blacksmith': 'Wandering blacksmith',
      'npc.role.prisoner': 'Missing traveller',
      'npc.reward.coins': 'a pouch of coins',
      'npc.reward.upgrade': 'a forged upgrade',
      'npc.reward.escape': 'a rescued traveller’s gift',
      'npc.storyteller.name': 'Sage of Glimmerlight',
      'npc.storyteller.message': 'The sage shares secrets about the sealed heart.',
      'npc.storyteller.messageRepeat': 'The sage reminds you to watch your keys and gear.',
      'npc.storyteller.line1': '“The heart’s seal yields to courage and well-kept keys.”',
      'npc.storyteller.line2': '“Rescue the prisoners—their clues guide you upward.”',
      'npc.storyteller.repeat': '“Sharpen both your blade and your resolve.”',
      'npc.blacksmith.name': 'Travelling smith',
      'npc.blacksmith.message': 'The smith reinforces your gear for the battles ahead.',
      'npc.blacksmith.messageRepeat': 'The smith urges you to treasure every upgrade.',
      'npc.blacksmith.line1': '“These tower fiends endure more than they appear.”',
      'npc.blacksmith.line2': '“I strengthened your arms and armor—put them to use.”',
      'npc.blacksmith.repeat': '“Return with tales of victory, friend.”',
      'npc.prisoner.name': 'Freed traveller',
      'npc.prisoner.message': 'Grateful travellers repay you with keys and knowledge.',
      'npc.prisoner.line1': '“Thank you! I overheard guards whisper about the upper seal.”',
      'npc.prisoner.line2': '“Take these coins and a spare key—may they aid you.”',
      'npc.prisoner.messageRepeat': 'The traveller promises to watch over you from afar.',
      'npc.prisoner.repeat': '“Safe journeys, hero.”',
      'rules.heading': 'How to play',
      'rules.item1': 'Move with the arrows or WASD. Entering a monster tile previews the fight before you commit.',
      'rules.item2': 'Defeating monsters grants coins. Collect items and equipment to bolster stats or heal.',
      'rules.item3': 'Some floors lock the ascent behind gates or cells—carry keys to advance or rescue NPCs.',
      'rules.item4': 'Travelling shops and NPCs provide supplies, gear, and story clues—plan your spending wisely.',
      'rules.item5': 'Use the equipment panel to review your weapon, armor, and accessory, swapping to stronger finds.',
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
      'entity.stairsUp': 'stairs up',
      'entity.stairsDown': 'stairs down',
      'entity.shop': 'shop',
      'entity.goal': 'tower heart',
      'entity.key': 'key',
      'entity.potion': 'potion',
      'entity.attack': 'attack relic',
      'entity.defense': 'defense charm',
      'entity.coin': 'coin pouch',
      'entity.monster.slime': 'slime',
      'entity.monster.guard': 'tower guard',
      'entity.monster.bat': 'night bat',
      'entity.monster.orc': 'orc warrior',
      'entity.monster.skeleton': 'skeleton captain',
      'entity.monster.warlock': 'shadow warlock',
      'entity.monster.flame': 'ember wraith',
      'entity.prison': 'prison door',
      'entity.npc': 'tower denizen',
      'combat.heading': 'Battle preview',
      'combat.prompt': 'A monster blocks the way. Attack?',
      'combat.hero': 'Hero',
      'combat.reward': 'Reward',
      'combat.expected': 'Expected HP loss: {{loss}}.',
      'combat.unwinnable': 'Your strikes cannot harm the {{monster}} yet.',
      'combat.fatal': 'The {{monster}} would defeat you—come back stronger.',
      'combat.attack': 'Attack',
      'combat.cancel': 'Hold back',
      'shop.heading': 'Travelling shop',
      'shop.prompt': 'Spend coins on supplies and upgrades.',
      'shop.coins': 'Coins: {{coins}}',
      'shop.cost': '{{value}} coins',
      'shop.close': 'Leave shop',
      'shop.buy': 'Purchase',
      'shop.cannot-afford': 'Not enough coins',
      'shop.item.potionSmall': 'Restorative potion',
      'shop.item.potionSmall.desc': 'Restore 120 HP.',
      'shop.item.attackBoost': 'Tempered blade',
      'shop.item.attackBoost.desc': 'Permanently gain +8 attack.',
      'shop.item.defenseBoost': 'Reinforced shield',
      'shop.item.defenseBoost.desc': 'Permanently gain +8 defense.',
      'shop.item.key': 'Spare key',
      'shop.item.key.desc': 'Adds one key to your pack.',
      'equipment.dawnBlade': 'Dawnblade',
      'equipment.aegisMantle': 'Aegis Mantle',
      'equipment.windCharm': 'Windwhisper Charm',
      'equipment.solarSigil': 'Solar Sigil',
    },
  };


  const floors = [
    {
      level: 1,
      layout: [
        ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
        ['#', 'H', '.', '.', '.', 'M', '.', '.', '.', 'U', '#'],
        ['#', '.', '#', '.', '#', '.', '#', '.', '#', '.', '#'],
        ['#', '.', '.', 'K', '.', '.', '.', 'M', '.', '.', '#'],
        ['#', '.', '#', '.', '#', '.', '#', '.', '#', '.', '#'],
        ['#', '.', '.', 'P', '.', 'T', '.', 'C', '.', '.', '#'],
        ['#', '.', '#', '.', '#', '.', '#', '.', '#', '.', '#'],
        ['#', '.', '.', 'R', '.', 'A', '.', 'G', '.', '.', '#'],
        ['#', '.', '#', '.', '#', '.', '#', '.', '#', '.', '#'],
        ['#', '.', '.', 'N', '.', '.', '.', 'V', '.', '.', '#'],
        ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
      ],
    },
    {
      level: 2,
      layout: [
        ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
        ['#', 'S', '.', '.', 'M', '.', '.', '#', '.', '.', '#'],
        ['#', '.', '#', '.', '#', '.', '#', '.', '#', '.', '#'],
        ['#', '.', '.', 'C', '.', '.', 'W', '.', '.', '.', '#'],
        ['#', '.', '#', '.', '#', '.', '#', '.', '#', '.', '#'],
        ['#', '.', '.', 'L', '.', '.', 'G', '.', '.', 'D', '#'],
        ['#', '.', '#', '.', '#', '.', '#', '.', '#', '.', '#'],
        ['#', '.', '.', 'P', '.', 'T', '.', 'C', '.', '.', '#'],
        ['#', '.', '#', '.', '#', '.', '#', '.', '#', '.', '#'],
        ['#', '.', '.', 'K', '.', '.', '.', 'O', '.', '.', '#'],
        ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
      ],
    },
    {
      level: 3,
      layout: [
        ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
        ['#', 'S', '.', '.', 'V', '.', '.', '#', '.', '.', '#'],
        ['#', '.', '#', '.', '#', '.', '#', '.', '#', '.', '#'],
        ['#', '.', '.', 'Y', '.', '.', 'B', '.', '.', '.', '#'],
        ['#', '.', '#', '.', '#', '.', '#', '.', '#', '.', '#'],
        ['#', '.', '.', 'Q', '.', '.', 'P', '.', '.', 'U', '#'],
        ['#', '.', '#', '.', '#', '.', '#', '.', '#', '.', '#'],
        ['#', '.', '.', 'C', '.', '.', 'M', '.', '.', '.', '#'],
        ['#', '.', '#', '.', '#', '.', '#', '.', '#', '.', '#'],
        ['#', '.', '.', 'W', '.', '.', 'K', '.', '.', '.', '#'],
        ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
      ],
    },
    {
      level: 4,
      layout: [
        ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
        ['#', 'S', '.', '.', 'M', '.', '.', '#', '.', '.', '#'],
        ['#', '.', '#', '.', '#', '.', '#', '.', '#', '.', '#'],
        ['#', '.', '.', 'C', '.', '.', 'T', '.', '.', '.', '#'],
        ['#', '.', '#', '.', '#', '.', '#', '.', '#', '.', '#'],
        ['#', '.', '.', 'Z', '.', '.', 'X', '.', '.', 'D', '#'],
        ['#', '.', '#', '.', '#', '.', '#', '.', '#', '.', '#'],
        ['#', '.', '.', 'P', '.', '.', 'L', '.', '.', '.', '#'],
        ['#', '.', '#', '.', '#', '.', '#', '.', '#', '.', '#'],
        ['#', '.', '.', 'K', '.', '.', '.', 'O', '.', '.', '#'],
        ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
      ],
    },
    {
      level: 5,
      layout: [
        ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
        ['#', 'S', '.', '.', 'W', '.', '.', '#', '.', '.', '#'],
        ['#', '.', '#', '.', '#', '.', '#', '.', '#', '.', '#'],
        ['#', '.', '.', 'C', '.', '.', 'F', '.', '.', '.', '#'],
        ['#', '.', '#', '.', '#', '.', '#', '.', '#', '.', '#'],
        ['#', '.', '.', 'J', '.', '.', 'G', '.', '.', 'D', '#'],
        ['#', '.', '#', '.', '#', '.', '#', '.', '#', '.', '#'],
        ['#', '.', '.', 'P', '.', '.', 'B', '.', '.', '.', '#'],
        ['#', '.', '#', '.', '#', '.', '#', '.', '#', '.', '#'],
        ['#', '.', '.', 'N', '.', '.', 'M', '.', '.', '.', '#'],
        ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
      ],
    },
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
    bat: {
      hp: 70,
      attack: 22,
      defense: 10,
      reward: 24,
      icon: '🦇',
      nameKey: 'entity.monster.bat',
    },
    orc: {
      hp: 140,
      attack: 38,
      defense: 18,
      reward: 45,
      icon: '🪓',
      nameKey: 'entity.monster.orc',
    },
    skeleton: {
      hp: 190,
      attack: 46,
      defense: 24,
      reward: 68,
      icon: '💀',
      nameKey: 'entity.monster.skeleton',
    },
    warlock: {
      hp: 160,
      attack: 44,
      defense: 22,
      reward: 72,
      icon: '🪄',
      nameKey: 'entity.monster.warlock',
    },
    flame: {
      hp: 220,
      attack: 54,
      defense: 28,
      reward: 92,
      icon: '🔥',
      nameKey: 'entity.monster.flame',
    },
  };

  const shopInventory = {
    travelling: [
      {
        id: 'potionSmall',
        nameKey: 'shop.item.potionSmall',
        descKey: 'shop.item.potionSmall.desc',
        cost: 35,
        apply(heroState) {
          heroState.hp += 120;
        },
      },
      {
        id: 'attackBoost',
        nameKey: 'shop.item.attackBoost',
        descKey: 'shop.item.attackBoost.desc',
        cost: 45,
        apply(heroState) {
          heroState.attack += 8;
        },
      },
      {
        id: 'defenseBoost',
        nameKey: 'shop.item.defenseBoost',
        descKey: 'shop.item.defenseBoost.desc',
        cost: 45,
        apply(heroState) {
          heroState.defense += 8;
        },
      },
      {
        id: 'key',
        nameKey: 'shop.item.key',
        descKey: 'shop.item.key.desc',
        cost: 50,
        apply(heroState) {
          heroState.keys += 1;
        },
      },
    ],
  };

  const equipmentItems = {
    dawnBlade: {
      id: 'dawnBlade',
      nameKey: 'equipment.dawnBlade',
      slot: 'weapon',
      icon: '⚔️',
      bonus: { attack: 10 },
    },
    aegisMantle: {
      id: 'aegisMantle',
      nameKey: 'equipment.aegisMantle',
      slot: 'armor',
      icon: '🛡️',
      bonus: { defense: 12 },
    },
    windCharm: {
      id: 'windCharm',
      nameKey: 'equipment.windCharm',
      slot: 'accessory',
      icon: '💨',
      bonus: { attack: 4, defense: 4 },
    },
    solarSigil: {
      id: 'solarSigil',
      nameKey: 'equipment.solarSigil',
      slot: 'accessory',
      icon: '🌞',
      bonus: { attack: 8, defense: 8 },
    },
  };

  const npcProfiles = {
    storyteller: {
      id: 'storyteller',
      nameKey: 'npc.storyteller.name',
      roleKey: 'npc.role.sage',
      icon: '🧙',
      lines: {
        default: ['npc.storyteller.line1', 'npc.storyteller.line2'],
        repeat: ['npc.storyteller.repeat'],
      },
      message: {
        default: 'npc.storyteller.message',
        repeat: 'npc.storyteller.messageRepeat',
      },
    },
    blacksmith: {
      id: 'blacksmith',
      nameKey: 'npc.blacksmith.name',
      roleKey: 'npc.role.blacksmith',
      icon: '⚒️',
      lines: {
        default: ['npc.blacksmith.line1', 'npc.blacksmith.line2'],
        repeat: ['npc.blacksmith.repeat'],
      },
      message: {
        default: 'npc.blacksmith.message',
        repeat: 'npc.blacksmith.messageRepeat',
      },
    },
    prisoner: {
      id: 'prisoner',
      nameKey: 'npc.prisoner.name',
      roleKey: 'npc.role.prisoner',
      icon: '🧍',
      lines: {
        prison: ['npc.prisoner.line1', 'npc.prisoner.line2'],
        repeat: ['npc.prisoner.repeat'],
      },
      message: {
        prison: 'npc.prisoner.message',
        repeat: 'npc.prisoner.messageRepeat',
      },
    },
  };

  const entityIcons = {
    empty: '',
    wall: '⬛',
    door: '🚪',
    stairs: '🌀',
    stairsUp: '🛗',
    stairsDown: '🕳️',
    key: '🔑',
    potion: '🧪',
    attack: '⚔️',
    defense: '🛡️',
    coin: '💰',
    shop: '🏪',
    goal: '💎',
    prison: '🔒',
    npc: '🧙',
    equipment: '🎖️',
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

  const dialogBackdrop = document.getElementById('tower-dialog-backdrop');
  const combatDialog = document.getElementById('combat-dialog');
  const shopDialog = document.getElementById('shop-dialog');
  const combatHeroHpEl = document.getElementById('combat-hero-hp');
  const combatHeroAtkEl = document.getElementById('combat-hero-atk');
  const combatHeroDefEl = document.getElementById('combat-hero-def');
  const combatMonsterNameEl = document.getElementById('combat-monster-name');
  const combatMonsterHpEl = document.getElementById('combat-monster-hp');
  const combatMonsterAtkEl = document.getElementById('combat-monster-atk');
  const combatMonsterDefEl = document.getElementById('combat-monster-def');
  const combatMonsterRewardEl = document.getElementById('combat-monster-reward');
  const combatOutcomeEl = document.getElementById('combat-outcome');
  const combatConfirmBtn = document.getElementById('combat-confirm');
  const combatCancelBtn = document.getElementById('combat-cancel');
  const shopItemsEl = document.getElementById('shop-items');
  const shopCoinsEl = document.getElementById('shop-coins');
  const shopCloseBtn = document.getElementById('shop-close');
  const equipmentEls = {
    weapon: document.getElementById('equipment-weapon'),
    armor: document.getElementById('equipment-armor'),
    accessory: document.getElementById('equipment-accessory'),
  };
  const npcDialog = document.getElementById('npc-dialog');
  const npcTitleEl = document.getElementById('npc-title');
  const npcRoleEl = document.getElementById('npc-role');
  const npcMessageEl = document.getElementById('npc-message');
  const npcLinesEl = document.getElementById('npc-lines');
  const npcContinueBtn = document.getElementById('npc-continue');

  let currentLang = 'zh';
  let board = [];
  let hero = null;
  let heroPosition = { row: 0, col: 0 };
  let statusKey = 'game.status.ready';
  let statusParams = {};
  let logEntries = [];
  let gameOver = false;
  let floorStates = [];
  let floorPositions = [];
  let currentFloorIndex = 0;
  let pendingCombat = null;
  let activeDialog = null;
  let activeShopId = null;
  let interactionLocked = false;
  let npcStates = {};
  let activeNpc = null;

  const baseHero = {
    hp: 260,
    attack: 32,
    defense: 14,
    keys: 0,
    coins: 0,
    floor: 1,
    equipment: {
      weapon: null,
      armor: null,
      accessory: null,
    },
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
      case 'V':
        return { type: 'monster', id: 'bat' };
      case 'O':
        return { type: 'monster', id: 'orc' };
      case 'X':
        return { type: 'monster', id: 'skeleton' };
      case 'W':
        return { type: 'monster', id: 'warlock' };
      case 'F':
        return { type: 'monster', id: 'flame' };
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
      case 'R':
        return { type: 'equipment', id: 'dawnBlade' };
      case 'Y':
        return { type: 'equipment', id: 'aegisMantle' };
      case 'Z':
        return { type: 'equipment', id: 'windCharm' };
      case 'J':
        return { type: 'equipment', id: 'solarSigil' };
      case 'U':
        return { type: 'stairsUp' };
      case 'S':
        return { type: 'stairsDown' };
      case 'T':
        return { type: 'shop', id: 'travelling' };
      case 'L':
        return { type: 'prison', id: 'prisoner', opened: false };
      case 'N':
        return { type: 'npc', id: 'storyteller' };
      case 'Q':
        return { type: 'npc', id: 'blacksmith' };
      case 'E':
        return { type: 'goal' };
      default:
        return { type: 'empty' };
    }
  }

  function parseCell(char, rowIndex, colIndex, meta) {
    switch (char) {
      case 'H':
        meta.spawn = { row: rowIndex, col: colIndex };
        return makeCell('.');
      case 'U': {
        const cell = makeCell('U');
        meta.stairsUp.push({ row: rowIndex, col: colIndex });
        return cell;
      }
      case 'S': {
        const cell = makeCell('S');
        meta.stairsDown.push({ row: rowIndex, col: colIndex });
        return cell;
      }
      default:
        return makeCell(char);
    }
  }

  function createFloorStates() {
    floorStates = floors.map((floor) => {
      const meta = {
        spawn: null,
        stairsUp: [],
        stairsDown: [],
      };
      const grid = floor.layout.map((row, rowIndex) =>
        row.map((char, colIndex) => parseCell(char, rowIndex, colIndex, meta)),
      );
      return { grid, meta };
    });
    floorPositions = floors.map(() => null);
  }

  function closeAllDialogs() {
    if (combatDialog) {
      combatDialog.classList.add('hidden');
    }
    if (shopDialog) {
      shopDialog.classList.add('hidden');
    }
    if (npcDialog) {
      npcDialog.classList.add('hidden');
    }
    if (dialogBackdrop) {
      dialogBackdrop.classList.add('hidden');
    }
    activeDialog = null;
    pendingCombat = null;
    activeShopId = null;
    activeNpc = null;
    unlockInteraction();
  }

  function lockInteraction() {
    interactionLocked = true;
    document.body.classList.add('tower-dialog-open');
    if (dialogBackdrop && activeDialog) {
      dialogBackdrop.classList.remove('hidden');
    }
  }

  function unlockInteraction() {
    interactionLocked = false;
    if (!activeDialog) {
      document.body.classList.remove('tower-dialog-open');
      if (dialogBackdrop) {
        dialogBackdrop.classList.add('hidden');
      }
    }
  }

  function showDialog(dialog) {
    if (!dialog) {
      return;
    }
    activeDialog = dialog;
    if (dialogBackdrop) {
      dialogBackdrop.classList.remove('hidden');
    }
    dialog.classList.remove('hidden');
    lockInteraction();
  }

  function hideDialog(dialog) {
    if (!dialog) {
      return;
    }
    dialog.classList.add('hidden');
    if (activeDialog === dialog) {
      activeDialog = null;
    }
    unlockInteraction();
  }

  function resetBoard() {
    createFloorStates();
    closeAllDialogs();
    hero = { ...baseHero, equipment: { ...baseHero.equipment } };
    currentFloorIndex = 0;
    board = floorStates[currentFloorIndex].grid;
    const spawn =
      floorStates[currentFloorIndex].meta.spawn ||
      floorStates[currentFloorIndex].meta.stairsDown[0] ||
      { row: 1, col: 1 };
    heroPosition = { ...spawn };
    floorPositions[currentFloorIndex] = { ...heroPosition };
    statusKey = 'game.status.ready';
    statusParams = {};
    logEntries = [];
    gameOver = false;
    interactionLocked = false;
    pendingCombat = null;
    activeDialog = null;
    activeShopId = null;
    npcStates = {};
    activeNpc = null;
    hero.floor = floors[currentFloorIndex].level;
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
    updateEquipmentPanel();
  }

  function updateEquipmentPanel() {
    if (!hero) {
      return;
    }
    Object.entries(equipmentEls).forEach(([slot, el]) => {
      if (!el) {
        return;
      }
      const equipped = hero.equipment ? hero.equipment[slot] : null;
      if (equipped && equipped.nameKey) {
        el.textContent = translate(equipped.nameKey);
      } else {
        el.textContent = translate('equipment.empty');
      }
    });
  }

  function renderBoard() {
    if (!gridEl) {
      return;
    }
    gridEl.innerHTML = '';

    if (board[0]) {
      gridEl.style.setProperty('--tower-grid-size', board[0].length);
    }

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
        } else if (cell.type === 'equipment') {
          const item = equipmentItems[cell.id];
          const icon = item ? item.icon : entityIcons.equipment || '';
          const labelKey = item ? item.nameKey : 'equipment.empty';
          cellEl.textContent = icon;
          cellEl.setAttribute('aria-label', translate(labelKey));
        } else if (cell.type === 'npc') {
          const npc = npcProfiles[cell.id];
          const icon = npc ? npc.icon : entityIcons.npc || '';
          const labelKey = npc ? npc.nameKey : 'entity.npc';
          cellEl.textContent = icon;
          cellEl.setAttribute('aria-label', translate(labelKey));
        } else if (cell.type === 'prison') {
          const npc = npcProfiles[cell.id];
          cellEl.textContent = entityIcons.prison || '🔒';
          cellEl.setAttribute('aria-label', translate(npc ? npc.nameKey : 'entity.prison'));
        } else {
          const icon = entityIcons[cell.type] || '';
          const entityKey = cell.type === 'empty' ? 'entity.empty' : `entity.${cell.type}`;
          cellEl.textContent = icon;
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
      } else if (key === 'npc') {
        resolved.npc = translate(value);
      } else if (key === 'reward') {
        resolved.reward = translate(value);
      } else if (key === 'equipment') {
        resolved.equipment = translate(value);
      } else {
        resolved[key] = value;
      }
    });
    return resolved;
  }

  function tryMove(direction) {
    if (gameOver || interactionLocked) {
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
        previewCombat(target, nextRow, nextCol, direction);
        return;
      case 'stairs':
      case 'stairsUp':
        changeFloor(currentFloorIndex + 1, 'down');
        return;
      case 'stairsDown':
        changeFloor(currentFloorIndex - 1, 'up');
        return;
      case 'door':
        handleDoor(nextRow, nextCol);
        return;
      case 'shop':
        enterShop(target, nextRow, nextCol);
        return;
      case 'goal':
        completeGoal(nextRow, nextCol);
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
      case 'equipment':
        equipItem(target, nextRow, nextCol);
        return;
      case 'npc':
        encounterNpc(target.id, { row: nextRow, col: nextCol, removeTile: true, context: 'default' });
        return;
      case 'prison':
        interactPrison(target, nextRow, nextCol);
        return;
      case 'empty':
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

  function applyEquipmentBonuses(item, multiplier = 1) {
    if (!item || !item.bonus) {
      return;
    }
    const { attack = 0, defense = 0 } = item.bonus;
    hero.attack += attack * multiplier;
    hero.defense += defense * multiplier;
  }

  function equipItem(cell, row, col) {
    const item = equipmentItems[cell.id];
    if (!item || !hero.equipment) {
      moveHero(row, col);
      statusKey = 'game.status.moved';
      statusParams = {};
      updateStatusMessage();
      return;
    }

    const slot = item.slot;
    const previous = hero.equipment[slot];
    if (previous) {
      applyEquipmentBonuses(previous, -1);
    }

    hero.equipment[slot] = { ...item };
    applyEquipmentBonuses(item, 1);
    board[row][col] = makeCell('.');
    moveHero(row, col);
    const logKey = previous ? 'log.equipment.replace' : 'log.equipment.equip';
    pushLog(logKey, { equipment: item.nameKey });
    statusKey = 'game.status.equipment';
    statusParams = { item: item.nameKey };
    updateStats();
    updateStatusMessage();
  }

  function applyNpcReward(npcId, context) {
    const profile = npcProfiles[npcId];
    if (!profile) {
      return;
    }
    switch (npcId) {
      case 'storyteller':
        hero.coins += 35;
        pushLog('log.npc.reward', { npc: profile.nameKey, reward: 'npc.reward.coins' });
        break;
      case 'blacksmith':
        hero.attack += 6;
        hero.defense += 6;
        pushLog('log.npc.reward', { npc: profile.nameKey, reward: 'npc.reward.upgrade' });
        break;
      case 'prisoner':
        hero.keys += 1;
        hero.coins += 40;
        pushLog('log.npc.reward', { npc: profile.nameKey, reward: 'npc.reward.escape' });
        pushLog('log.pickup.key', { count: hero.keys });
        break;
      default:
        break;
    }
  }

  function renderNpcDialog() {
    if (!activeNpc || !npcDialog) {
      return;
    }
    const profile = npcProfiles[activeNpc.id];
    if (!profile) {
      return;
    }

    const context = profile.lines?.[activeNpc.context] ? activeNpc.context : 'default';
    if (npcTitleEl) {
      npcTitleEl.textContent = translate(profile.nameKey);
    }
    if (npcRoleEl) {
      npcRoleEl.textContent = translate(profile.roleKey);
    }
    if (npcMessageEl) {
      const messageKey = profile.message?.[context] || profile.message?.default;
      npcMessageEl.textContent = messageKey ? translate(messageKey) : '';
    }
    if (npcLinesEl) {
      npcLinesEl.innerHTML = '';
      const lines = profile.lines?.[context] || profile.lines?.default || [];
      lines.forEach((lineKey) => {
        const li = document.createElement('li');
        li.textContent = translate(lineKey);
        npcLinesEl.appendChild(li);
      });
    }
  }

  function closeNpcDialog() {
    if (!npcDialog) {
      return;
    }
    hideDialog(npcDialog);
    activeNpc = null;
  }

  function encounterNpc(npcId, options = {}) {
    const { row, col, removeTile = false, context = 'default' } = options;
    const profile = npcProfiles[npcId];

    if (typeof row === 'number' && typeof col === 'number') {
      moveHero(row, col);
      if (removeTile) {
        board[row][col] = makeCell('.');
      }
    }

    if (!profile) {
      statusKey = 'game.status.moved';
      statusParams = {};
      updateStatusMessage();
      return;
    }

    const state = npcStates[npcId] || { talked: false };
    const firstEncounter = !state.talked;
    const dialogContext = firstEncounter ? (context === 'prison' ? 'prison' : 'default') : 'repeat';

    if (firstEncounter) {
      applyNpcReward(npcId, context);
      state.talked = true;
      npcStates[npcId] = state;
      updateStats();
      pushLog('log.npc.talk', { npc: profile.nameKey });
    }

    activeNpc = { id: npcId, context: dialogContext };
    renderNpcDialog();
    showDialog(npcDialog);

    statusKey = context === 'prison' && firstEncounter ? 'game.status.prisonFreed' : 'game.status.npc';
    statusParams = { npc: profile.nameKey };
    updateStatusMessage();
  }

  function interactPrison(cell, row, col) {
    const npcId = cell.id || 'prisoner';
    const profile = npcProfiles[npcId];

    if (cell.opened) {
      encounterNpc(npcId, { row, col, removeTile: true, context: 'repeat' });
      return;
    }

    if (hero.keys <= 0) {
      statusKey = 'game.status.prisonLocked';
      statusParams = {};
      pushLog('log.prison.locked');
      updateStatusMessage();
      return;
    }

    hero.keys -= 1;
    cell.opened = true;
    board[row][col] = makeCell('.');
    pushLog('log.prison.freed', { npc: profile ? profile.nameKey : 'entity.npc' });
    moveHero(row, col);
    encounterNpc(npcId, { context: 'prison' });
    updateStats();
  }

  function moveHero(row, col) {
    heroPosition = { row, col };
    floorPositions[currentFloorIndex] = { ...heroPosition };
    updateStats();
    renderBoard();
  }

  function changeFloor(newIndex, entryDirection) {
    if (newIndex < 0 || newIndex >= floorStates.length) {
      return;
    }
    floorPositions[currentFloorIndex] = { ...heroPosition };
    currentFloorIndex = newIndex;
    board = floorStates[newIndex].grid;
    const meta = floorStates[newIndex].meta;
    let spawn = floorPositions[newIndex];
    if (!spawn) {
      if (entryDirection === 'down' && meta.stairsDown.length > 0) {
        spawn = { ...meta.stairsDown[0] };
      } else if (entryDirection === 'up' && meta.stairsUp.length > 0) {
        spawn = { ...meta.stairsUp[0] };
      } else if (meta.spawn) {
        spawn = { ...meta.spawn };
      } else {
        spawn = { row: 1, col: 1 };
      }
    }
    heroPosition = { ...spawn };
    floorPositions[newIndex] = { ...heroPosition };
    hero.floor = floors[newIndex].level;
    gameOver = false;
    pendingCombat = null;
    activeShopId = null;
    statusKey = entryDirection === 'down' ? 'game.status.floor-up' : 'game.status.floor-down';
    statusParams = {};
    pushLog(entryDirection === 'down' ? 'log.floor.up' : 'log.floor.down', {
      floor: hero.floor,
    });
    updateStats();
    renderBoard();
    updateStatusMessage();
  }

  function enterShop(target, row, col) {
    const shopId = target.id || 'travelling';
    moveHero(row, col);
    activeShopId = shopId;
    statusKey = 'game.status.shop';
    statusParams = {};
    pushLog('log.shop.enter');
    updateStatusMessage();
    renderShopItems(shopId);
    updateShopCoins();
    showDialog(shopDialog);
  }

  function leaveShop() {
    if (activeShopId) {
      pushLog('log.shop.exit');
    }
    activeShopId = null;
    hideDialog(shopDialog);
    statusKey = 'game.status.ready';
    statusParams = {};
    updateStatusMessage();
  }

  function renderShopItems(shopId) {
    if (!shopItemsEl) {
      return;
    }
    shopItemsEl.innerHTML = '';
    const items = shopInventory[shopId] || [];
    items.forEach((item) => {
      const li = document.createElement('li');
      li.className = 'shop-item';
      const header = document.createElement('div');
      header.className = 'shop-item-header';
      const title = document.createElement('h4');
      title.className = 'shop-item-title';
      title.textContent = translate(item.nameKey);
      const cost = document.createElement('span');
      cost.className = 'shop-item-cost';
      cost.textContent = translate('shop.cost', { value: item.cost });
      header.appendChild(title);
      header.appendChild(cost);
      const desc = document.createElement('p');
      desc.className = 'shop-item-desc';
      desc.textContent = translate(item.descKey);
      const button = document.createElement('button');
      button.className = 'button';
      button.type = 'button';
      const canAfford = hero.coins >= item.cost;
      button.textContent = canAfford ? translate('shop.buy') : translate('shop.cannot-afford');
      button.disabled = !canAfford;
      button.addEventListener('click', () => purchaseItem(shopId, item));
      li.appendChild(header);
      li.appendChild(desc);
      li.appendChild(button);
      shopItemsEl.appendChild(li);
    });
  }

  function updateShopCoins() {
    if (!shopCoinsEl) {
      return;
    }
    shopCoinsEl.textContent = translate('shop.coins', { coins: hero.coins });
  }

  function purchaseItem(shopId, item) {
    if (hero.coins < item.cost) {
      pushLog('log.shop.cannot', { item: item.nameKey });
      updateStatusMessage();
      renderShopItems(shopId);
      return;
    }
    hero.coins -= item.cost;
    item.apply(hero);
    pushLog('log.shop.buy', { cost: item.cost, item: item.nameKey });
    updateStats();
    updateShopCoins();
    renderShopItems(shopId);
    statusKey = 'game.status.shop';
    statusParams = {};
    updateStatusMessage();
  }

  function simulateCombat(monsterData) {
    const heroDamage = Math.max(hero.attack - monsterData.defense, 0);
    const monsterDamage = Math.max(monsterData.attack - hero.defense, 0);

    if (heroDamage <= 0) {
      return {
        canWin: false,
        heroDamage,
        monsterDamage,
        totalLoss: 0,
        rounds: 0,
        remainingHp: hero.hp,
        outcome: 'blocked',
      };
    }

    let heroHp = hero.hp;
    let monsterHp = monsterData.hp;
    let totalLoss = 0;
    let rounds = 0;

    while (monsterHp > 0 && heroHp > 0) {
      monsterHp -= heroDamage;
      rounds += 1;
      if (monsterHp <= 0) {
        break;
      }
      heroHp -= monsterDamage;
      totalLoss += monsterDamage;
      if (heroHp <= 0) {
        heroHp = Math.max(heroHp, 0);
        break;
      }
    }

    const canWin = heroHp > 0;

    return {
      canWin,
      heroDamage,
      monsterDamage,
      totalLoss,
      rounds,
      remainingHp: Math.max(heroHp, 0),
      outcome: canWin ? 'win' : 'fatal',
    };
  }

  function previewCombat(target, row, col, direction) {
    const monsterData = monsters[target.id];
    if (!monsterData) {
      moveHero(row, col);
      statusKey = 'game.status.moved';
      statusParams = { direction };
      pushLog('log.move', { direction });
      updateStatusMessage();
      return;
    }

    const result = simulateCombat(monsterData);
    pendingCombat = {
      row,
      col,
      direction,
      monsterId: target.id,
      result,
    };

    updateCombatDialog(monsterData, result);

    if (result.outcome === 'blocked') {
      statusKey = 'game.status.blocked';
      statusParams = { monster: monsterData.nameKey };
      pushLog('log.combat.blocked', { monster: monsterData.nameKey });
    } else {
      statusKey = 'game.status.combat-preview';
      statusParams = { monster: monsterData.nameKey };
    }

    updateStatusMessage();
    showDialog(combatDialog);
  }

  function updateCombatDialog(monsterData, result) {
    if (!combatDialog) {
      return;
    }

    if (combatHeroHpEl) {
      combatHeroHpEl.textContent = hero.hp;
    }
    if (combatHeroAtkEl) {
      combatHeroAtkEl.textContent = hero.attack;
    }
    if (combatHeroDefEl) {
      combatHeroDefEl.textContent = hero.defense;
    }
    if (combatMonsterNameEl) {
      combatMonsterNameEl.textContent = translate(monsterData.nameKey);
    }
    if (combatMonsterHpEl) {
      combatMonsterHpEl.textContent = monsterData.hp;
    }
    if (combatMonsterAtkEl) {
      combatMonsterAtkEl.textContent = monsterData.attack;
    }
    if (combatMonsterDefEl) {
      combatMonsterDefEl.textContent = monsterData.defense;
    }
    if (combatMonsterRewardEl) {
      combatMonsterRewardEl.textContent = monsterData.reward;
    }

    if (combatOutcomeEl) {
      if (result.canWin) {
        combatOutcomeEl.textContent = translate('combat.expected', { loss: result.totalLoss });
      } else if (result.outcome === 'fatal') {
        combatOutcomeEl.textContent = translate('combat.fatal', { monster: monsterData.nameKey });
      } else {
        combatOutcomeEl.textContent = translate('combat.unwinnable', { monster: monsterData.nameKey });
      }
    }

    if (combatConfirmBtn) {
      combatConfirmBtn.disabled = result.outcome === 'blocked';
    }
  }

  function resolvePendingCombat() {
    if (!pendingCombat) {
      hideDialog(combatDialog);
      return;
    }
    const context = pendingCombat;
    pendingCombat = null;
    hideDialog(combatDialog);
    const targetCell = board[context.row][context.col];
    handleCombat(targetCell, context.row, context.col, context.direction, context.result);
  }

  function completeGoal(row, col) {
    moveHero(row, col);
    if (!gameOver) {
      pushLog('log.goal');
    }
    statusKey = 'game.status.goal';
    statusParams = {};
    gameOver = true;
    updateStatusMessage();
  }

  function handleCombat(target, row, col, direction, previewResult) {
    const monsterData = monsters[target.id];
    if (!monsterData) {
      moveHero(row, col);
      statusKey = 'game.status.moved';
      statusParams = { direction };
      pushLog('log.move', { direction });
      updateStatusMessage();
      return;
    }

    const result = previewResult || simulateCombat(monsterData);

    if (!result.canWin) {
      if (result.outcome === 'blocked') {
        statusKey = 'game.status.blocked';
        statusParams = { monster: monsterData.nameKey };
        pushLog('log.combat.blocked', { monster: monsterData.nameKey });
        updateStatusMessage();
        return;
      }

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

    hero.hp = result.remainingHp;
    hero.coins += monsterData.reward;
    statusKey = 'game.status.combat-win';
    statusParams = { monster: monsterData.nameKey };
    pushLog('log.combat.win', {
      monster: monsterData.nameKey,
      loss: result.totalLoss,
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
    const isTopFloor = currentFloorIndex === floors.length - 1;
    pushLog('log.door.open');

    if (isTopFloor) {
      board[row][col] = { type: 'goal' };
      moveHero(row, col);
      if (!gameOver) {
        pushLog('log.goal');
      }
      statusKey = 'game.status.goal';
      statusParams = {};
      gameOver = true;
    } else {
      board[row][col] = { type: 'stairsUp' };
      pushLog('log.victory');
      statusKey = 'game.status.victory';
      statusParams = {};
    }

    updateStats();
    renderBoard();
    updateStatusMessage();
  }

  function handleKeydown(event) {
    if (interactionLocked) {
      if (event.key === 'Escape') {
        event.preventDefault();
        if (activeDialog === combatDialog) {
          if (combatCancelBtn) {
            combatCancelBtn.click();
          } else {
            hideDialog(combatDialog);
          }
        } else if (activeDialog === shopDialog) {
          leaveShop();
        } else if (activeDialog === npcDialog) {
          closeNpcDialog();
        }
      }
      return;
    }
    const direction = directionKeys[event.key];
    if (!direction) {
      return;
    }
    event.preventDefault();
    tryMove(direction);
  }

  function handleControlClick(event) {
    if (interactionLocked) {
      return;
    }
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

    if (activeNpc) {
      renderNpcDialog();
    }

    if (pendingCombat && activeDialog === combatDialog) {
      const monster = monsters[pendingCombat.monsterId];
      if (monster) {
        updateCombatDialog(monster, pendingCombat.result);
      }
    }

    if (activeShopId) {
      updateShopCoins();
      renderShopItems(activeShopId);
    }
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

    if (combatConfirmBtn) {
      combatConfirmBtn.addEventListener('click', resolvePendingCombat);
    }

    if (combatCancelBtn) {
      combatCancelBtn.addEventListener('click', () => {
        const context = pendingCombat;
        pendingCombat = null;
        hideDialog(combatDialog);
        if (context) {
          statusKey = 'game.status.combat-cancel';
          statusParams = {};
          pushLog('log.combat.cancel');
          updateStatusMessage();
        }
      });
    }

    if (shopCloseBtn) {
      shopCloseBtn.addEventListener('click', leaveShop);
    }

    if (dialogBackdrop) {
      dialogBackdrop.addEventListener('click', () => {
        if (activeDialog === combatDialog && combatCancelBtn) {
          combatCancelBtn.click();
        } else if (activeDialog === shopDialog) {
          leaveShop();
        } else if (activeDialog === npcDialog) {
          closeNpcDialog();
        }
      });
    }

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

    if (npcContinueBtn) {
      npcContinueBtn.addEventListener('click', closeNpcDialog);
    }
  }

  init();
})();
