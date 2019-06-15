//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //资源：
    'Berry': '浆果',
    'Brushwood': '灌木',
    'Mushroom': '蘑菇',
    'clothes': '衣服',
    'Forest': '森林',
    'FOOD': '食物',
    'Stone': '石头',
    'Log': '木头',
    'Wheat': '小麦',
    'Fish': '鱼',
    'Meat': '肉',
    'Fur': '毛皮',
    'Cotton': '棉花',
    'Copper': '铜',
    'Coins': '钱币',
    'Barley': '大麦',
    'Cooked meat': '熟肉制品',
    'Vegetable soup': '蔬菜汤',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',

    //建筑
    'Hut': '棚屋',
    'Warehouse': '仓库',
    'Loggers hut': '伐木工小屋',
    'Workshop': '工作台',
    'Hut heating': '棚屋加热',
    'Bakery': '面包店',
    'Brewery': '啤酒厂',
    'Cotton mill': '纺织厂',
    'Sawmill': '锯木厂',
    'Mint': '造币厂',
    'Fishers hut': '渔民小屋',
    'House': '房屋',
    'Stonemason': '石匠',
    'Tailor': '裁缝',
    'Tannery': '制革厂',
    'Tavern': '酒馆',
    'Windmill': '风车',
    'Winery': '酿酒厂',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',

    //科技
    'Bow': '弓箭',
    'Calendar': '日历',
    'Fire': '火',
    'Fishing': '渔业',
    'Foresight': '预卜',
    'Mortar': '砂浆',
    'Stone axe': '石斧',
    'Stone Axe': '石斧',
    'Stone hammer': '石锤',
    'Stone pickaxe': '石镐',
    'Stone shovel': '石铲',
    'Stone spear': '石矛',
    'Stone Hammer': '石锤',
    'Stone Shovel': '石铲',
    'Stone Spear': '石矛',
    'Can hitting with stone be easier?': '用石头击打会更容易吗？',
    'Could there be something edible in the water?': '水中有可食用的东西吗？',
    'Could we kill without coming closer?': '我们可以杀死而不用靠近吗？',
    'If only we knew what we don\'t know': '只要我们知道我们不知道的事情',
    'Is there some pattern to seasons?': '季节有一些模式吗？',
    'It should be better to get your stone dirty and not your hands?': '你的石头应该更好而不是你的手？',
    'It\'s probably more effective to hit trees with sharp stone?': '用锋利的石头打树可能更有效吗？',
    'We would have better chance of survival if we keep enemy at distance?': '如果我们让敌人保持距离，我们将有更好的生存机会？',
    'Would it be useful if we could start fire on demand?': '如果我们可以按需开火，它会有用吗？',
    'Would it be useful to ground things up?': '将事情搞清楚会有用吗？',
    'Would stone win against stone?': '石头会打赢石头吗？',
    'Are you sure you want to unlock researching Stone pickaxe?': '你确定要解锁研究石镐吗？',
    'Are you sure you want to unlock researching Stone axe?': '你确定要解锁研究石斧吗？',
    'Are you sure you want to unlock researching Foresight?': '您确定要解锁研究预卜吗？',
    'Are you sure you want to unlock researching Calendar?': '您确定要解锁研究日历吗？',
    'Are you sure you want to cancel crafting Plank?': '你确定要取消制作木板吗？',
    'Mining': '采矿',
    'If we dig deep enough maybe there is something nice?': '如果我们挖得足够深，也许有一些不错的东西？',
    'Barracks': '军营',
    'Agriculture': '农业',
    'Bigger fire': '更大的火',
    'Buff production': '抛光生产',
    'Can we hide our goods somewhere?': '我们可以把货物隐藏在某个地方吗？',
    'Cooking': '烹饪',
    'Fish food': '鱼食',
    'Could we make our fire bigger and last for longer?': '我们可以让我们的火更大，持续更久吗？',
    'Forestry': '林业',
    'How can we make those of us more aggressive less of a threat to others?': '我们怎样才能使我们这些人更具侵略性而不是对他人构成威胁呢？',
    'Human resources': '人力资源',
    'Hunting': '狩猎',
    'If others have resources we need maybe we could trade with them?': '如果其他人有我们需要的资源，也许我们可以与他们交易？',
    'Is it possible to lure more fish?': '是否有可能吸引更多的鱼？',
    'Is it possible to produce planks even faster?': '是否有可能更快地生产木板？',
    'Is there any reason why trees grow out of dirt?': '树木长出泥土有什么理由吗？',
    'Management': '管理',
    'Mathematics': '数学',
    'Maybe we can optimize work?': '也许我们可以优化工作？',
    'Maybe we could make some hard decisions which could help us survive?': '也许我们可以做出一些可以帮助我们生存的艰难决定？',
    'Maybe we could rearrange buildings?': '也许我们可以重新安排建筑物？',
    'Maybe we could redesign our pickaxes?': '也许我们可以重新设计我们的镐？',
    'Pickaxe design': '镐头设计',
    'Prerequisites': '先决条件',
    'Prospecting for ore': '勘探矿石',
    'Stash': '贮藏',
    'There must be something useful under all this dirt': '这堆土下面一定有什么有用的东西',
    'Trade': '贸易',
    'Urban planning': '城市规划',
    'Weather': '天气',
    'What if hunted became the hunter?': '如果被猎者变成了猎人?',
    'What if huts were bigger?': '如果小屋更大呢?',
    'What if we calculate things first?': '如果我们先计算呢?',
    'What would happen if we heat up raw food?': '如果我们加热生的食物会发生什么?',
    'Why should we risk looking for food in the forest if we can grow it it the open?': '如果我们可以在森林里露天种植食物，我们为什么要冒险在森林里寻找食物呢?',
    'Would it be good to know the weather in advance?': '提前知道天气会好吗?',
    'Would people work better if we give them better tools?': '如果我们给人们提供更好的工具，他们会工作得更好吗?',
    'Are you sure you want to unlock researching Management?': '您确定要解锁研究管理吗?',
    'Specialised production': '专业生产',
    'Trade routes': '贸易路线',
    'Is it possible to attract more merchants?': '有可能吸引更多的商人吗?',
    'Can we specialise in crafting one thing to do it better and faster?': '我们能专注于制造一件事来做得更好更快吗?',
    'Stone axe researched': '石斧已研究',
    'Are you sure you want to unlock researching Bigger fire?': '你确定要解锁研究更大火吗？',
    'Alcohol': '酒精',
    'Are you sure you want to unlock researching Human resources?': '您确定要解锁研究人力资源吗？',
    'Are you sure you want to unlock researching Mathematics?': '你确定要解锁研究数学吗？',
    'Are you sure you want to unlock researching Mortar?': '你确定要解锁研究迫击炮吗？',
    'Are you sure you want to unlock researching Sawmill?': '你确定你要解锁研究锯木厂？',
    'Could we use dead animals fur in our advantage?': '我们能否利用死去的动物皮毛？',
    'Would it boost our moods if we took some time to have fun??': '如果我们花一些时间玩得开心会增强我们的情绪吗？',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',

    //工艺
    '': '',
    '': '',
    '': '',

    //杂项
    'Close': '关闭',
    'CLOSE': '关闭',
    'day': '天',
    'clear': '清除',
    'CANCEL': '取消',
    'Import save': '导入存档',
    'loaded': '已加载',
    'Import': '导入',
    'HARD RESET': '硬复位',
    'Hard Reset': '硬复位',
    ' buildings': ' 建筑',
    'CONFIRM': '确认',
    'Copy to clipboard': '复制到剪切板',
    'NEXT': '下一条',
    'PREVIOUS': '上一条',
    'YES': '是',
    'NO': '不',
    'OK': '好的',
    'Options': '选项',
    'Other': '其它',
    'pause game': '暂停游戏',
    'Search': '搜索',
    'save logs': '保存日志',
    'sound on/off': '声音 开/关',
    'sound volume': '音量',
    'Update': '更新',
    'Villager Kings v1.': '土皇帝 v1.',
    'Village': '村庄',
    'You will still be able to load game from exported save.': '您仍然可以从导出的存档中加载游戏进度。',
    'auto save on/off': '自动保存 开/关',
    'auto save period': '自动保存间隔',
    'Buildings number limit is now added to build window': '建筑物数量限制现在已添加到建筑窗口中',
    'Export save': '导出存档',
    'minutes': '分',
    'nutrition': '营养',
    'Resources': '资源',
    'Royal perks': '皇家福利',
    'Are you sure you want to hard reset your progress?': '您确定要硬复位您的游戏进度吗?',
    'Choose how many Royal Points you would like to buy': '选择你想买多少皇家点数',
    'Decreased brushwood fuel cost and increased brushwood energy': '降低了原木燃料成本，提高了原木能源',
    'heating energy': '热量能源',
    'saved': '已保存',
    'Build': '建造',
    'All': '全部',
    'building power': '建筑力量',
    'Arrange': '排列',
    'Buildings': '建筑',
    'Demolish': '拆除',
    'famine': '饥荒',
    'Filter': '过滤',
    'food nutrition': '食物营养',
    'happiness effects': '幸福度影响',
    'heating fuel': '加热燃料',
    'Tutorials have been enabled': '教程已启用',
    'This should only be done if you have backup save or want to start from the beginning.': '只有在您有备份存档或希望从头开始时才应该这样做。',
    'Implemented new extended reserver that can define different limit for most of the consumers': '实现了新的扩展储量，可以为大多数使用者定义不同的限制',
    'permanent royal upgrades': '永久皇家升级',
    'royal points,': '皇家点数,',
    'This will remove ALL progress and saved game (except settings and tutorial state).': '这将删除所有进度和游戏存档（设置和教程状态除外）。',
    'Display moving progress bars (on) or just text (off': '显示移动进度条（打开）或仅显示文本（关闭',
    'Gatherer': '采集者',
    'gathering food': '收集食物',
    'gather resources': '收集资源',
    'Stop': '停止',
    'Stores selected type of resources': '存储选定类型的资源',
    'Tutorial 1/': '教程 1/',
    'weather multiplier: -': '天气加成: -',
    'occupants: 1/': '居住者: 1/',
    'occupants: 2/': '居住者: 2/',
    'last find: Berry': '最后发现:浆果',
    'last find: Nothing': '最后发现:无',
    'last find: Brushwood': '最后发现：灌木',
    'SKIP TUTORIAL': '跳过教程',
    'and Gatherer that collects various resources when wandering in the forest. Gatherer has two operating modes': '和采集者在森林里游荡时收集各种资源。 采集者有两种工作模式',
    'At the workshop workers can research new things or build complex things': '在工作台，工人可以研究新事物或制造复杂的东西',
    'food nutrition: -': '食物营养: -',
    'Worker working here can either focus on looking for food or useful and sometimes rare resources': '在这里工作的工人要么专注于寻找食物，要么专注于寻找有用的，有时甚至是稀有的资源',
    'In the forest you have two working buildings': '在森林里，你有两座工作类型的建筑',
    'Logger\'s hut that cuts forest trees and produces logs': '伐木工小屋，用来砍伐森林树木和生产原木',
    'waiting for warehouse space': '等待仓库空间',
    'There are two icons on both sides of building name.': '建筑名称的两侧有两个图标。',
    'To the left there is details icon. If you hover over it,': '左边是详细信息图标。如果你悬停在它上面，',
    'To the right you can see a cog icon which allows you to stop and start production by hiring or firing worker': '在右边你可以看到一个齿轮图标，它允许你停止和开始生产雇用或解雇工人',
    'a tooltip with more technical details regarding a building will popup (not active during tutorial),': '将弹出一个工具提示，其中包含关于建筑物的更多技术细节(在教程期间不活动)，',
    'Second one allows you to set buildings to be demolished by free worker': '第二种允许你设置由自由工人拆除的建筑',
    'In future you will discover many more types of building to build.': '将来你会发现更多类型的建筑需要建造。',
    'Above buildings you can see \'Build\' and \'Demolish\' buttons.': '在建筑物上方，你可以看到“建造”和“拆除”按钮。',
    'First one opens a window with all buildings you can build in this region.': '首先，打开一个窗口，里面有你可以在这个地区建造的所有建筑。',
    'You will receive small portion of resources used to build demolished building': '拆毁建筑物时，你将获得一小部分资源用于建造',
    'Now let\'s order your people to build more gatherers and continue to the \'Resources\' tab in the left menu': '现在让我们命令你的员工建立更多收集者，并继续点击左侧菜单中的“资源”选项卡',
    'FINISH': '完成',
    'Very primitive shelter but keeps rain and cold away': '非常原始的避难所，但可以抵御雨水和保暖',
    'heating required': '需要加热',
    'RAW': '生的',
    'TOOLS': '工具',
    'used by': '用于',
    'To the right there are two additional icons present for each resource': '在右侧，每个资源都有两个额外的图标',
    'To really start progressing you should work towards building Workshop in the village which will open new opportunities': '要真正开始进步，你应该努力在村里建一个车间，这将打开新的机会',
    'That\'s all for the basics.': '这些都是基本的。',
    'Storage can be extended by building warehouses in the village': '仓储可以通过在村里建仓库来扩展',
    'Second icon toggles which resources should be highlighted in the game header': '第二个图标切换哪些资源应该突出显示在游戏头部',
    'PROCESSED': '已处理',
    'Player initiated action can on the other hand use reserved resources': '另一方面，玩家发起的动作可以使用预留资源',
    'Next to the resource icon there is current amount that you have and storage limit for that resource.': '资源图标旁边是您拥有的当前金额和该资源的存储限制。',
    'keep in mind that some actions like for example invasion can still reduce resources below reserved amount!': '请记住，某些操作（例如入侵）仍然可以减少低于预留金额的资源！',
    'In this tab you can browse all of the resources that you have discovered': '在此选项卡中，您可以浏览已发现的所有资源',
    'In the header you can highlight up to 7 resources to know their amounts in any tab of the game': '在标题中，您可以突出显示最多7个资源，以便在游戏的任何标签中了解其数量',
    'First one allows you to set amount that will be reserved and no automated action can use them': '第一个允许您设置将被保留的数量，并且没有自动操作可以使用它们',
    'Welcome to this quick tutorial that will guide you through basic controls of Villager Kings': '欢迎阅读本快速教程，它将指导您完成土皇帝的基本控制',
    '1. Population of your village/max population': '1.你的村庄人口/最大人口',
    '2. Free workers that can be assigned to work': '2.可以分配到工作岗位的空闲工人',
    '3. Size of your empty land where you can build': '3.您空闲土地的大小，你可以建立建筑',
    '4. Size of your whole village (all regions': '4.整个村庄的规模（所有地区',
    '5. Your people happiness, which will influence their productivity': '5.你的人民幸福度，这将影响他们的生产力',
    'Above your buildings you can see most important metrics for current region.': '在您的建筑物上方，您可以看到当前区域的最重要指标。',
    'Currently in your village there are only Huts which produce workers for your village.': '目前在您的村庄里只有棚屋为您的村庄生产工人。',
    'First thing you need to focus on is to make sure that your people will survive winter.': '您需要关注的第一件事是确保您的员工能够度过冬天。',
    'For village those are': '对于村庄来说那些',
    'Good luck!': '祝你好运！',
    'Housing buildings cannot be stopped and require constant supply of food, fuel (in winter) and clothes': '住房建筑无法停止，需要不断供应食物，燃料（冬季）和衣服',
    'In the middle of the village region you can see your buildings. There are many different types of buildings.': '在村庄中间，您可以看到您的建筑物。 有许多不同类型的建筑物。',
    'New King will affect all buildings with +100% of their base power for 90 days': '新国王将在90天内影响所有建筑物的基础能力+ 100％',
    'Remember that winter is not the only threat to your people!': '请记住，冬天不是对你的人民的唯一威胁！',
    'Right now we are in the village tab and using top menu you can navigate between village regions': '现在我们在村庄标签中，使用顶级菜单，您可以在村庄区域之间导航',
    'Some of them produce items, others consume them to produce more advanced items.': '他们中的一些人生产产品，另一些人消费它们来生产更高级的产品。',
    'temporary effects': '暂时性效应',
    'That\'s all here for now let\'s move into the Forest region': '现在就讲到这里，让我们进入森林地区',
    'To the left you can see navigation menu that will allow you to browse tabs representing different aspects of your village': '在左边，您可以看到导航菜单，它将允许您浏览代表村庄不同方面的选项卡',
    'using top menu and continue the tutorial there': '使用顶部菜单并在那里继续教程',
    'Villager Kings': '土皇帝',
    'Welcome to': '欢迎来到',
    'Will you manage to lead your people to greatness?': '你能带领你的人民走向伟大吗?',
    'You start as a leader of a small village.': '你从一个小村庄的领导者开始。',
    'You will need to increase food production and have some wood to heat houses.': '你将需要增加粮食产量和一些木材来加热房屋。',
    '(will use it\'s own limit number if enabled': '(将使用它自己的限制号码，如果启用',
    'Crafting': '工艺',
    'Exceptions': '例外',
    'Log management': '日志管理',
    'reserved amount': '保留金额',
    'SAVE': '保存',
    'chopping trees': '砍树',
    'transporting log': '运输日志',
    'waiting for trees': '等待树',
    'Construction': '建造',
    'constructing Workshop': '正在建造工作台',
    'Missing 10 Plank': '缺少10木板',
    'Missing 5 Cut stone': '缺少5切割石材',
    'constructing Hut': '正在建造棚屋',
    'Missing 10 Brushwood': '缺少10灌木',
    'occupants: 0/': '居住者: 0/',
    'Research': '研究',
    'nothing': '无',
    'nothing to research': '没有什么可以研究的',
    'Research points: 0/': '研究点: 0/',
    'Researching': '正在研究',
    'Researching unlocked': '研究已解锁',
    'SCIENCE': '科学',
    'Scientific method': '科学方法',
    'show finished': '显示完成',
    'TECHNOLOGY': '技术',
    'MILITARY': '军事',
    'Maybe there is something we don\'t know about yet?': '也许有些事情我们还不知道?',
    'GENERAL': '常规',
    'Crafting unlocked': '工艺已解锁',
    'craft': '工艺',
    'AGRICULTURE': '农业',
    'ALL': '全部',
    'amount': '数量',
    'continuous': '连续',
    'Cost': '成本',
    'Cut Stone': '切割石块',
    'Difficulty': '困难',
    'Leather': '皮革',
    'Orders': '订单',
    'OTHER': '其它',
    'Plank': '板材',
    'Recipes': '配方',
    'selected amount': '已选择数量',
    'until X available': '直到X可用',
    'Are you sure you want to unlock researching Scientific method?': '你确定要开启科学研究方法吗?',
    'requires 5 more research points': '需要5个研究点',
    'researching': '研究中',
    'and Wonders and their effects will be deleted.': '和奇迹及其影响将被删除。',
    'Are you sure you want to soft reset your progress?': '您确定要软重置进度吗？',
    'You will start from the beginning and all progress except for': '你将从头开始，所有游戏进度除了',
    'heating': '加热',
    'Missing 20 Brushwood!': '缺少20个灌木！',
    'Brushwood management': '灌木管理',
    'Missing 10 Stone!': '缺少10石头',
    'Very primitive shelter but keeps rain and cold away. Houses 2 villagers': '非常原始的庇护所，但可以避雨和御寒。可以容纳2村民',
    'cost': '成本',
    'At the workshop workers can do research projects or build complex things': '在工作台里，工人们可以做研究项目或建造复杂的东西',
    'Stone management': '石头管理',
    'Clothes': '衣服',
    'Plank management': '板材管理',
    'Order queue is full': '订单队列已满',
    'gathering resources': '收集资源',
    'transporting': '运输',
    'gather food': '收集食物',
    'crafting Plank': '制作板材',
    'cancel crafting': '取消制作',
    'research': '研究',
    'crafting': '工艺',
    'nothing to craft': '没有东西可制作',
    'Auto saved': '自动保存',
    'Hut clothing': '小屋衣服',
    'Stone Pickaxe': '石镐',
    'Stone pickaxe researched': '石镐已研究',
    'can produce': '可以生产',
    'No workshop set to research.': '没有工作台设置为研究',
    'Too many highlighted resources': '突出显示的资源过多，最多7种',
    'constructing Loggers hut': '建造伐木工小屋',
    'Couldn\'t unlock construction. Not enough free workers.': '无法解锁施工。 空闲工人不够。',
    'Gatherer can find all kinds of useful things in the forest.': '收集者可以在森林中找到各种有用的东西。',
    'Loggers cut trees in the forest': '伐木工在森林里砍伐树木',
    'They can look for either food or resources': '他们可以寻找食物或资源',
    ' 10 Brushwood': ' 10灌木',
    ' 2 Plank': ' 2 板材',
    ' 21 Wheat': ' 21 小麦',
    ' 24 Log': ' 24 木头',
    'Invasion': '入侵',
    'INVASION': '入侵',
    'Management researched': '管理已研究',
    'Management tab unlocked': '管理标签页已解锁',
    'We have been plundered': '我们被掠夺了',
    'alcohol': '酒精',
    'allow fur when no clothes available': '没有衣服的时候允许穿皮草',
    'Effects': '效果',
    'food': '食物',
    'General': '常规',
    'General Management': '常规管理',
    'Rations': '给养',
    'show total food nutrition in village tab': '显示总食物营养在村庄标签',
    'Cannot unlock production of Construction. Number of free workers': '无法解锁建筑生产。空闲工人数量',
    'Cannot unlock production of Loggers hut. Number of free workers': '无法解锁伐木工小屋的生产。空闲工人数量',
    'Cannot unlock production of Gatherer. Number of free workers': '无法解锁收集者的生产。 空闲工人数量',
    'Cannot unlock production of Fishers hut. Number of free workers': '无法解锁渔民小屋的生产。 空闲工人数量',
    'Calendar researched': '日历已研究',
    'We are now able to track years and seasons': '我们现在能够追踪年份和季节',
    'Are you sure you want to unlock researching Trade?': '你确定要开启研究贸易吗?',
    'Advanced ore processing': '先进的矿石加工',
    'Advanced prospecting': '先进的勘探',
    'Animals': '动物',
    'Bread': '面包',
    'Built smithy': '建造铁匠铺',
    'Cooked Meat': '熟肉制品',
    'Could we get precious resources from under the ground?': '我们能从地下获得宝贵的资源吗？',
    'Could we make fabric using cotton?': '我们可以用棉布制作面料吗？',
    'Could we reuse what animals produce?': '我们能重复利用动物生产的东西？',
    'Crafted': '精心制作',
    'Cut stone': '切割石材',
    'enable automated work management for some buildings': '为一些建筑物实现自动化工作管理',
    'Fabric': '织品',
    'Faith': '信仰',
    'Faith shield': '信仰之盾',
    'Fertility': '生殖力',
    'Fertilizer': '肥料',
    'Fish food researched': '鱼食已研究',
    'Flour': '面粉',
    'Fuel': '燃料',
    'How can me make new clothes?': '我怎样才能做新衣服?',
    'Is it possible to breed animals near farms?': '有可能在农场附近饲养动物吗?',
    'Is there anything else to find?': '还有什么要找的吗?',
    'Marketplace invented': '市场发明',
    'Master prospecting': '掌握勘探',
    'Maybe we could use logs to defend ourselves?': '也许我们可以用木头来自卫?',
    'Meat Soup': '肉汤',
    'Meat soup': '肉汤',
    'Metallurgy': '冶金',
    'Nature': '自然',
    'New resource discovered: Fish food': '新发现的资源:鱼类食物',
    'None': '无',
    'offering': '提供',
    'Ore processing': '矿石加工',
    'Pit mine': '矿井',
    'Prayers': '祈祷',
    'Preach': '传道',
    'Religion': '宗教',
    'Religions': '宗教',
    'save imported': '存档已导入',
    'Tailoring': '裁剪',
    'Technology': '技术',
    'There must be something even more valuable under the ground?': '地下一定有更值钱的东西吧?',
    'Trade researched': '贸易已研究',
    'Vegetable Soup': '蔬菜汤',
    'War': '战争',
    'We shall spread our beliefs to others': '我们应该把我们的信仰传播给别人',
    'What about heating other ores?': '那加热其他矿石呢?',
    'What happens if we heat ore in fire?': '如果我们用火加热矿石会发生什么?',
    'What would happen if we mix two metals?': '如果我们混合两种金属会发生什么?',
    'Wooden defences': '木制的防御',
    'storage': '存储',
    'Mountains': '山地',
    'NONE': '无',
    'Fort': '要塞',
    'Field': '田地',
    'permanent effects': '永久效果',
    'Plateau': '高原',
    'prayers': '祈祷',
    'Sea': '海洋',
    'Shrine': '圣地',
    'waiting for fuel': '等待燃料',
    'fish': '鱼',
    'fish food': '鱼食',
    'fishing': '钓鱼',
    'hire worker': '雇佣工人',
    'produce fish food': '生产鱼食',
    'School of fish': '鱼群',
    'Stonehenge': '巨石阵',
    'Stonehenge construction': '巨石阵建筑',
    'fire worker': '消防员',
    'add materials': '添加材料',
    'add fish food': '添加鱼食',
    'BARLEY': '大麦',
    'building level': '建筑等级',
    'Combine': '组合',
    'COTTON': '棉花',
    'Cotton field': '棉田',
    'cutting  plank': '切割木板',
    'fallow': '休耕',
    'Farm': '农场',
    'Forester': '森林人',
    'growing difficulty': '成长困难',
    'Hay': '草料',
    'HAY': '草料',
    'HOP': 'HOP',
    'Hunter lodge': '猎人小屋',
    'hunting': '狩猎',
    'last find: Mushroom': '最后发现:蘑菇',
    'mining stone': '开采石头',
    'planting trees': '种树',
    'Quarry': '采石场',
    'size': '大小',
    'Split': '分割',
    'stash size': '储备规模',
    'stone': '石头',
    'Temperature': '温度',
    'waiting for fur': '等待皮毛',
    'waiting for stone': '等待石头',
    'weather multiplier': '天气加成',
    'Weather: sun': '天气: 晴朗',
    'WHEAT': '小麦',
    'workers: 1/': '工人: 1/',
    'working': '工作',
    'yield multiplier': '收益加成',
    'Temperature: -': '温度: -',
    'Weather: storm': '天气: 风暴',
    'Weather: snow': '天气: 下雪',
    'Weather: sun': '天气: 晴朗',
    'Weather: wind': '天气: 大风',
    'Weather: clouds': '天气: 多云',
    'Weather: rain': '天气: 下雨',
    'Upgrade to level': '升级到等级',
    'Are you sure you want to change religion?': '你确定要改变宗教吗?',
    'Are you sure you want to unlock researching Fabric?': '您确定要解锁研究织品吗？',
    'Army effects': '军队效果',
    'building': '建筑',
    'Buildings effects': '建筑效果',
    'Cut trees if': '砍树如果',
    'duration': '持续时间',
    'effect': '效果',
    'Effects Management': '效果管理',
    'Forest bigger than': '森林大于',
    'Forest Management': '森林管理',
    'forest smaller than': '森林小于',
    'free land bigger than': '空闲土地大于',
    'name': '名称',
    'permanent': '常驻',
    'Plant trees if': '种树如果',
    'fetching wheat': '取小麦',
    'waiting for fish': '等鱼',
    'Advanced prospecting not researched!': '没有研究过高级勘探！',
    'no enough free land': '没有足够的空闲土地',
    'Blessing': '祝福',
    'May everything go according to our plans': '愿一切都按照我们的计划进行',
    'Not enough faith for this prayer!': '对这个祷告没有足够的信仰！',
    'Our faith will protect us from harm': '我们的信仰将保护我们免受伤害',
    'Buy Royal points': '购买皇家点数',
    'Call to arms': '武装召唤',
    'Family jewels': '传家宝',
    'Heritage': '遗产',
    'King of the forest': '森林之王',
    'King of the people': '人民之王',
    'King of the war': '战争之王',
    'Motivation speech': '动机演讲',
    'People love you unconditionally. You start with House unlocked and built instead of huts (awarded after any soft reset or abdication': '人们无条件地爱你。 你可以从房屋解锁并建造而不是棚屋（在任何软复位或退位后获得）',
    'royal points.': '皇家点数。',
    'Royal prophecy': '皇家预言',
    'Unite with the people': '与人民团结起来',
    'Usages: unlimited': '用途：无限制',
    'Use your royal position to motivate people to harder work. 25% production upgrade for all buildings for 1 year (single use': '利用你的王室职位来激励人们更加努力工作。 所有建筑物的生产升级25％，为期1年（单次使用',
    'War is your game. You start with military unlocked and small army (awarded after any soft reset or abdication': '战争是你的游戏。 你从军事解锁和小军队开始（在任何软复位或退位后获得',
    'We will fight till the last of us drops dead. You can convert up to 10 villagers to militia (single use': '我们将战斗直到我们最后一个人死亡。 您最多可以将10名村民转为民兵（单次使用',
    'You can use them to acquire special upgrades.': '您可以使用它们获取特殊升级。',
    'You have': '你有',
    'You rule everything in the forests. You start with a few forest buildings unlocked (awarded after any soft reset or abdication': '你统治森林里的一切。 您可以从一些解锁的森林建筑开始（在任何软复位或退位后获得',
    'You step down from your throne and live with others. Permanent 20% upgrade to all buildings (persists through soft resets and abdications': '你从宝座上下台，和别人一起生活。 永久20％升级到所有建筑物（通过软重置和退役持续存在',
    'Your predecessors left you with more riches. You start with extra resources (awarded after any soft reset or abdication': '你的前辈给你留下了更多的财富。 您可以从额外的资源开始（在任何软复位或退位后获得',
    'Your predecessors ruled better. You start with extra building (awarded after any soft reset or abdication': '你的前任统治得更好。 您从额外的建筑开始（在任何软复位或退位后获得',
    'Your royal blood allows prophets to look into the future. Unlocks certain research for each perk level (awarded immediately and after any soft reset or abdication': '你的王室血液允许先知展望未来。 为每个额外水平解锁某些研究（立即授予以及在任何软复位或退位后获得',
    'Village buildings': '村庄建筑',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',

    //更新日志
    'Bug fixes': '修复bug',
    'Fixed building Smithy required to research tech allowing to build it': '修复建筑铁匠铺需要研究技术，允许建立它',
    'New features': '新功能',
    'Doubled iron deposit find chance': '找到铁矿的机会翻倍',
    'Most probably fixed overscrolling from game to kongregate window': '最大可能修复了从游戏到kongregate窗口的滚动',
    'use metric units': '使用公制单位',
    'Ore deposits found limited at 50 each': '发现的矿床数量限制在50个',
    'Slightly increased happiness reduction from half food rations': '幸福指数从食物配给的一半略微下降',
    'Fixed limited buildings allowed to build over the limit': '修复有限制的建筑物允许建设超过限制',
    'Fixed missions finishing without calculating outcome': '修复任务结束没有计算结果',
    'Troops multiplier now shows multiplied required resources in tooltip. If you cannot afford - troop turns grey': '现在，部队乘数显示工具提示中所需的多个资源。 如果你负担不起 - 部队变灰了',
    'Added buttons to hire/fire workers in all currently viewed buildings': '在所有当前查看的建筑物中添加了雇佣/解雇工人的按钮',
    'Added option to show only current view tutorial': '添加了仅显示当前视图教程的选项',
    'Added Stonehenge effect for manufacture': '为制造增加了巨石阵效应',
    'Added troops list to mission in progress': '新增部队列出进行中的任务',
    'all off': '全部关闭',
    'all on': '全部开启',
    'building base power': '建设基础力量',
    'Changed some missions times': '改变了一些任务时间',
    'Changed wonders to reapply missing effects on soft reset or abdication': '改变奇迹，重新应用软重置或退位的缺失效果',
    'Choose recipe': '选择配方',
    'Decreased chicken and pigs breeding speed': '减少鸡和猪的繁殖速度',
    'Fixed Forester not returning land when demolished': '修复了林务员拆迁时没有返回土地的问题',
    'Fixed some wonders add effects after each reset': '修复了一些奇迹在每次重置后添加效果',
    'Forest management improved and moved into management tab': '森林管理得到改善，并进入管理标签',
    'Forestry research now requires management to be researched': '林业研究现在需要对管理进行研究',
    'Increased expeditions cost': '增加了探险费用',
    'Removed autofill \'1\' for crafting amount input': '删除自动填充"1"以进行制作量输入',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',

    //原样
    '°C': '°C',
    'v1.': 'v1.',
    '打开手机QQ': '打开手机QQ',
    '点击加群': '点击加群',
    '更多同类游戏': '更多同类游戏',
    '旧版': '旧版',
    '论坛': '论坛',
    '扫码加群': '扫码加群',
    '一起讨论吧': '一起讨论吧',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    '': '',
    '': '',

}

//需处理的前缀
var cnPrefix = {
    "(-": "(-",
    "(+": "(+",
    "(": "(",
    "-": "-",
    "+": "+",
    " ": " ",
    ": ": "： ",
}

//需处理的后缀
var cnPostfix = {
    ":": "：",
    "：": "：",
    ": ": "： ",
    "： ": "： ",
    " ": "",
    "/s)": "/s)",
    "/s": "/s",
    ")": ")",
    "%": "%",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^x?\d+(\.\d+)?[A-Za-z%]{0,2}(\s.C)?\s*$/, //12.34K,23.4 °C
    /^x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/, //12.34e+4
    /^\s*$/, //纯空格
    /^\d+(\.\d+)?[A-Za-z]{0,2}.?\(?([+\-]?(\d+(\.\d+)?[A-Za-z]{0,2})?)?$/, //12.34M (+34.34K
    /^(\d+(\.\d+)?[A-Za-z]{0,2}\/s)?.?\(?([+\-]?\d+(\.\d+)?[A-Za-z]{0,2})?\/s\stot$/, //2.74M/s (112.4K/s tot
    /^\d+(\.\d+)?(e[+\-]?\d+)?.?\(?([+\-]?(\d+(\.\d+)?(e[+\-]?\d+)?)?)?$/, //2.177e+6 (+4.01+4
    /^(\d+(\.\d+)?(e[+\-]?\d+)?\/s)?.?\(?([+\-]?(\d+(\.\d+)?(e[+\-]?\d+)?)?)?\/s\stot$/, //2.177e+6/s (+4.01+4/s tot
];
var cnExcludePostfix = [
    /:?\s*x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/, //12.34e+4
    /:?\s*x?\d+(\.\d+)?[A-Za-z]{0,2}$/, //: 12.34K, x1.5
]

//正则替换
var cnRegReplace = new Map([
	[/^requires (\d+) more research points$/, '需要$1个研究点'],
	[/^(\d+) Royal points$/, '$1 皇家点数'],
	[/^Cost: (\d+) RP$/, '成本：$1 皇家点数'],
	[/^Usages: (\d+)\/$/, '用途：$1\/'],
	[/^Missing (\d+) Hay!$/, '缺少$1干草！'],
	[/^Missing (\d+) Food!$/, '缺少$1食物！'],
	[/^Missing (\d+) Fuel!$/, '缺少$1燃料！'],
	[/^Missing (\d+) Bow!$/, '缺少$1弓箭！'],
	[/^Missing (\d+) Stone!$/, '缺少$1石头！'],
	[/^Missing (\d+) Plank!$/, '缺少$1板材！'],
	[/^Missing (\d+) Coins!$/, '缺少$1硬币！'],
	[/^Missing (\d+) Stone spear!$/, '缺少$1石矛！'],
	[/^Missing (\d+) Fur!$/, '缺少$1毛皮！'],
	[/^Missing (\d+) Stone axe!$/, '缺少$1石斧！'],
	[/^Missing (\d+) Stone shovel!$/, '缺少$1石铲！'],
	[/^Missing (\d+) Fabric!$/, '缺少$1织品！'],
	[/^Missing (\d+) Stone hammer!$/, '缺少$1石锤！'],
	[/^Missing (\d+) Copper ore!$/, '缺少$1铜矿石！'],
	[/^Missing (\d+) Stone pickaxe!$/, '缺少$1石镐！'],
	[/^Missing (\d+) Cut stone!$/, '缺少$1切割石材！'],
    [/^day: (\d+) year: (\d+) spring\n$/, '日: $1 年: $2 春天\n'],
    [/^day: (\d+) year: (\d+) summer\n$/, '日: $1 年: $2 夏天\n'],
    [/^day: (\d+) year: (\d+) autumn\n$/, '日: $1 年: $2 秋天\n'],
    [/^day: (\d+) year: (\d+) winter\n$/, '日: $1 年: $2 冬天\n'],
	[/^Incoming attack in (\d+) days!$/, '$1天内将受到攻击!'],
	[/^Research points: (\d+)\/$/, '研究点: $1\/'],
    
]);

//2.采集新词
//20190320@JAR

var cnItem = function () {

    //传参是否非空字串
    if (!arguments[0]) return;

    //检验传参是否对象
    let text = arguments[0],
        s = '';
    if (typeof (text) != "string")
        return text;
    else
        s = arguments[0].charCodeAt();

    //检验传参是否英文
    // if (
    //     s < 65 || (s > 90 && s < 97) || (s > 122)
    //
    // ) return text;

    //处理前缀
    let text_prefix = "";
    for (let prefix in cnPrefix) {
        if (text.substr(0, prefix.length) === prefix) {
            text_prefix = cnPrefix[prefix];
            text = text.substr(prefix.length);
        }
    }
    //处理后缀
    let text_postfix = "";
    for (let postfix in cnPostfix) {
        if (text.substr(-postfix.length) === postfix) {
            text_postfix = cnPostfix[postfix];
            text = text.substr(0, text.length - postfix.length);
        }
    }
    //处理正则后缀
    let text_reg_exclude_postfix = "";
    for (let reg of cnExcludePostfix) {
        let result = text.match(reg);
        if (result) {
            text_reg_exclude_postfix = result[0];
            text = text.substr(0, text.length - text_reg_exclude_postfix.length);
        }
    }

    //检验字典是否可存
    if (!cnItems._OTHER_) cnItems._OTHER_ = [];

    //检查是否排除
    for (let reg of cnExcludeWhole) {
        if (reg.test(text)) {
            return arguments[0];
        }
    }
	
	//尝试正则替换
	for(let [key, value] of cnRegReplace.entries()){
		if(key.test(text)){
			return text.replace(key,value);
		}
	}

    //遍历尝试匹配
    for (let i in cnItems) {
        //字典已有词汇或译文、且译文不为空，则返回译文
        if (
            text == i || text == cnItems[i] &&
            cnItems[i] != ''
        )
            return text_prefix + cnItems[i] + text_reg_exclude_postfix + text_postfix;
    }

    //调整收录的词条，0=收录原文，1=收录去除前后缀的文本
    let save_cfg = 1;
    let save_text = save_cfg ? text : arguments[0]
    //遍历生词表是否收录
    for (
        let i = 0; i < cnItems._OTHER_.length; i++
    ) {
        //已收录则直接返回
        if (save_text == cnItems._OTHER_[i])
            return arguments[0];
    }

    if (cnItems._OTHER_.length < 500) {
        //未收录则保存
        cnItems._OTHER_.push(save_text);
        cnItems._OTHER_.sort(
            function (a, b) {
                return a.localeCompare(b)
            }
        );
    }

    /*
        //开启生词打印
        //console.log(
            '有需要汉化的英文：', text
        );
    */

    //返回生词字串
    return arguments[0];
};

transTaskMgr = {
	tasks: [],
	addTask: function(node, attr, text){this.tasks.push({node,attr,text})},
	doTask: function(){
		let task = null;
		while(task = this.tasks.pop())
			task.node[task.attr] = task.text;
	},
}

function TransSubTextNode(node) {
    if (node.childNodes.length > 0) {
        for (let subnode of node.childNodes) {
            if (subnode.nodeName === "#text") {
				let text = subnode.textContent;
				let cnText = cnItem(text);
                cnText !== text && transTaskMgr.addTask(subnode,'textContent',cnText);
                //console.log(subnode);
            } else if (subnode.nodeName !== "SCRIPT" && subnode.nodeName !== "TEXTAREA" && subnode.innerHTML && subnode.innerText) {
                if (subnode.innerHTML === subnode.innerText) {
					let text = subnode.innerText;
					let cnText = cnItem(text);
					cnText !== text && transTaskMgr.addTask(subnode,'innerText',cnText);
                    //console.log(subnode);
                } else {
                    TransSubTextNode(subnode);
                }
            } else {
                // do nothing;
            }
        }
    }
}

! function () {
    console.log("加载汉化模块");

    let observer_config = {
        attributes: false,
        characterData: true,
        childList: true,
        subtree: true
    };
    let targetNode = document.body;
    //汉化静态页面内容
    TransSubTextNode(targetNode);
	transTaskMgr.doTask();
    //监听页面变化并汉化动态内容
    let observer = new MutationObserver(function (e) {
		//window.beforeTransTime = performance.now();
        observer.disconnect();
        for (let mutation of e) {
            if (mutation.target.nodeName === "SCRIPT" || mutation.target.nodeName === "TEXTAREA") continue;
            if (mutation.target.innerHTML && mutation.target.innerText && mutation.target.innerHTML === mutation.target.innerText) {
                mutation.target.innerText = cnItem(mutation.target.innerText);
            }
			else if(mutation.target.nodeName === "#text"){
				mutation.target.textContent = cnItem(mutation.target.textContent);
			}
			else if (mutation.addedNodes.length > 0) {
                for (let node of mutation.addedNodes) {
                    if (node.nodeName === "#text") {
                        node.textContent = cnItem(node.textContent);
                        //console.log(node);
                    } else if (node.nodeName !== "SCRIPT" && node.nodeName !== "TEXTAREA" && node.innerHTML && node.innerText) {
                        if (node.innerHTML === node.innerText) {
                            node.innerText = cnItem(node.innerText);
                        } else {
                            TransSubTextNode(node);
							transTaskMgr.doTask();
                        }
                    }
                }
            }
        }
        observer.observe(targetNode, observer_config);
		//window.afterTransTime = performance.now();
		//console.log("捕获到页面变化并执行汉化，耗时" + (afterTransTime - beforeTransTime) + "毫秒");
    });
    observer.observe(targetNode, observer_config);
}();
