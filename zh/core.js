//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //资源：
    'Berry':'浆果',
    'Brushwood':'灌木',
    'Mushroom':'蘑菇',
    'clothes':'衣服',
    'Forest':'森林',
    'FOOD':'食物',
    '':'',
    '':'',
    '':'',
    '':'',
    '':'',
    '':'',

    //建筑
    'Hut':'棚屋',
    'Warehouse':'仓库',
    'Loggers hut':'伐木工小屋',
    'Workshop':'工作台',
    'Hut heating':'棚屋加热',
    '':'',
    '':'',
    '':'',
    '':'',
    '':'',

    //科技
    '':'',
    '':'',
    '':'',
    '':'',
    '':'',
    '':'',
    '':'',
    '':'',
    '':'',
    '':'',
    '':'',

    //工艺
    '':'',
    '':'',
    '':'',

    //杂项
    'Close':'关闭',
    'CLOSE':'关闭',
    'day':'天',
    'clear':'清除',
    'CANCEL':'取消',
    'Import save':'导入存档',
    'loaded':'已加载',
    'Log':'日志',
    'Import':'导入',
    'HARD RESET':'硬复位',
    'Hard Reset':'硬复位',
    ' buildings':' 建筑',
    'CONFIRM':'确认',
    'Copy to clipboard':'复制到剪切板',
    'NEXT':'下一条',
    'PREVIOUS':'上一条',
    'YES':'是',
    'NO':'不',
    'OK':'好的',
    'Options':'选项',
    'Other':'其它',
    'pause game':'暂停游戏',
    'Search':'搜索',
    'save logs':'保存日志',
    'sound on/off':'声音 开/关',
    'sound volume':'音量',
    'Update':'更新',
    'Villager Kings v1.':'土皇帝 v1.',
    'Village':'村庄',
    'You will still be able to load game from exported save.':'您仍然可以从导出的存档中加载游戏进度。',
    'auto save on/off':'自动保存 开/关',
    'auto save period':'自动保存间隔',
    'Buildings number limit is now added to build window':'建筑物数量限制现在已添加到建筑窗口中',
    'Export save':'导出存档',
    'minutes':'分',
    'nutrition':'营养',
    'Resources':'资源',
    'Royal perks':'皇家福利',
    'Are you sure you want to hard reset your progress?':'您确定要硬复位您的游戏进度吗?',
    'Choose how many Royal Points you would like to buy':'选择你想买多少皇家点数',
    'Decreased brushwood fuel cost and increased brushwood energy':'降低了原木燃料成本，提高了原木能源',
    'heating energy':'热量能源',
    'saved':'已保存',
    'Build':'建造',
    'All':'全部',
    'building power':'建筑力量',
    'Arrange':'排列',
    'Buildings':'建筑',
    'Demolish':'拆除',
    'famine':'饥荒',
    'Filter':'过滤',
    'food nutrition':'食物营养',
    'happiness effects':'幸福度影响',
    'heating fuel':'加热燃料',
    'Tutorials have been enabled':'教程已启用',
    'This should only be done if you have backup save or want to start from the beginning.':'只有在您有备份存档或希望从头开始时才应该这样做。',
    'Implemented new extended reserver that can define different limit for most of the consumers':'实现了新的扩展储量，可以为大多数使用者定义不同的限制',
    'permanent royal upgrades':'永久皇家升级',
    'royal points,':'皇家点数,',
    'This will remove ALL progress and saved game (except settings and tutorial state).':'这将删除所有进度和游戏存档（设置和教程状态除外）。',
    '10 Royal points':'10 皇家点数',
    '20 Royal points':'20 皇家点数',
    '55 Royal points':'55 皇家点数',
    '125 Royal points':'125 皇家点数',
    'Display moving progress bars (on) or just text (off':'显示移动进度条（打开）或仅显示文本（关闭',
    'Gatherer':'采集者',
    'gathering food':'收集食物',
    'gather resources':'收集资源',
    'Stop':'停止',
    'Stores selected type of resources':'存储选定类型的资源',
    'Tutorial 1/':'教程 1/',
    'weather multiplier: -':'天气加成: -',
    'occupants: 1/':'居住者: 1/',
    'occupants: 2/':'居住者: 2/',
    'last find: Berry':'最后发现:浆果',
    'SKIP TUTORIAL':'跳过教程',
    'and Gatherer that collects various resources when wandering in the forest. Gatherer has two operating modes':'和采集者在森林里游荡时收集各种资源。 采集者有两种工作模式',
    'At the workshop workers can research new things or build complex things':'在工作台，工人可以研究新事物或制造复杂的东西',
    'food nutrition: -':'食物营养: -',
    'Worker working here can either focus on looking for food or useful and sometimes rare resources':'在这里工作的工人要么专注于寻找食物，要么专注于寻找有用的，有时甚至是稀有的资源',
    'In the forest you have two working buildings':'在森林里，你有两座工作类型的建筑',
    'Logger\'s hut that cuts forest trees and produces logs':'伐木工小屋，用来砍伐森林树木和生产原木',
    'waiting for warehouse space':'等待仓库空间',
    'There are two icons on both sides of building name.':'建筑名称的两侧有两个图标。',
    'To the left there is details icon. If you hover over it,':'左边是详细信息图标。如果你悬停在它上面，',
    'To the right you can see a cog icon which allows you to stop and start production by hiring or firing worker':'在右边你可以看到一个齿轮图标，它允许你停止和开始生产雇用或解雇工人',
    'a tooltip with more technical details regarding a building will popup (not active during tutorial),':'将弹出一个工具提示，其中包含关于建筑物的更多技术细节(在教程期间不活动)，',
    'Second one allows you to set buildings to be demolished by free worker':'第二种允许你设置由自由工人拆除的建筑',
    'In future you will discover many more types of building to build.':'将来你会发现更多类型的建筑需要建造。',
    'Above buildings you can see \'Build\' and \'Demolish\' buttons.':'在建筑物上方，你可以看到“建造”和“拆除”按钮。',
    'First one opens a window with all buildings you can build in this region.':'首先，打开一个窗口，里面有你可以在这个地区建造的所有建筑。',
    'You will receive small portion of resources used to build demolished building':'拆毁建筑物时，你将获得一小部分资源用于建造',
    'Now let\'s order your people to build more gatherers and continue to the \'Resources\' tab in the left menu':'现在让我们命令你的员工建立更多收集者，并继续点击左侧菜单中的“资源”选项卡',
    'FINISH':'完成',
    'Very primitive shelter but keeps rain and cold away':'非常原始的避难所，但可以抵御雨水和保暖',
    'heating required':'需要加热',
    'RAW':'生的',
    'TOOLS':'工具',
    'used by':'用于',
    'To the right there are two additional icons present for each resource':'在右侧，每个资源都有两个额外的图标',
    'To really start progressing you should work towards building Workshop in the village which will open new opportunities':'要真正开始进步，你应该努力在村里建一个车间，这将打开新的机会',
    'That\'s all for the basics.':'这些都是基本的。',
    'Storage can be extended by building warehouses in the village':'仓储可以通过在村里建仓库来扩展',
    'Second icon toggles which resources should be highlighted in the game header':'第二个图标切换哪些资源应该突出显示在游戏头部',
    'PROCESSED':'已处理',
    'Player initiated action can on the other hand use reserved resources':'另一方面，玩家发起的动作可以使用预留资源',
    'Next to the resource icon there is current amount that you have and storage limit for that resource.':'资源图标旁边是您拥有的当前金额和该资源的存储限制。',
    'keep in mind that some actions like for example invasion can still reduce resources below reserved amount!':'请记住，某些操作（例如入侵）仍然可以减少低于预留金额的资源！',
    'In this tab you can browse all of the resources that you have discovered':'在此选项卡中，您可以浏览已发现的所有资源',
    'In the header you can highlight up to 7 resources to know their amounts in any tab of the game':'在标题中，您可以突出显示最多7个资源，以便在游戏的任何标签中了解其数量',
    'First one allows you to set amount that will be reserved and no automated action can use them':'第一个允许您设置将被保留的数量，并且没有自动操作可以使用它们',
    '':'',
    '':'',
    '':'',
    '':'',
    '':'',
    '':'',
    '':'',
    '':'',
    '':'',
    '':'',
    '':'',
    '':'',
    '':'',
    '':'',
    '':'',
    '':'',
    '':'',
    '':'',
    '':'',
    '':'',
    '':'',
    '':'',
    '':'',
    '':'',
    '':'',
    '':'',
    '':'',
    '':'',
    '':'',
    '':'',
    '':'',
    '':'',
    '':'',
    '':'',
    '':'',
    '':'',
    '':'',
    
    //更新日志
    'Bug fixes':'修复bug',
    'Fixed building Smithy required to research tech allowing to build it':'修复建筑铁匠铺需要研究技术，允许建立它',
    'New features':'新功能',
    'Doubled iron deposit find chance':'找到铁矿的机会翻倍',
    'Most probably fixed overscrolling from game to kongregate window':'最大可能修复了从游戏到kongregate窗口的滚动',
    'use metric units':'使用公制单位',
    'Ore deposits found limited at 50 each':'发现的矿床数量限制在50个',
    'Slightly increased happiness reduction from half food rations':'幸福指数从食物配给的一半略微下降',
    'Fixed limited buildings allowed to build over the limit':'修复有限制的建筑物允许建设超过限制',
    'Fixed missions finishing without calculating outcome':'修复任务结束没有计算结果',
    'Troops multiplier now shows multiplied required resources in tooltip. If you cannot afford - troop turns grey':'现在，部队乘数显示工具提示中所需的多个资源。 如果你负担不起 - 部队变灰了',
    '':'',
    '':'',
    '':'',
    '':'',
    '':'',
    '':'',
    '':'',
    '':'',
    '':'',
    '':'',
    '':'',
    '':'',
    '':'',
    '':'',
    '':'',
    '':'',
    '':'',
    '':'',
    '':'',
    '':'',
    '':'',
    '':'',
    '':'',
    '':'',
    '':'',
    '':'',
    '':'',
    '':'',
    '':'',
    '':'',
    '':'',
    '':'',
    '':'',
    '':'',
    '':'',
    '':'',
    '':'',
    '':'',
    '':'',
    '':'',
    '':'',
    '':'',
    '':'',
    '':'',
    '':'',
    '':'',
    '':'',
    '':'',
    
    //原样
    '°C':'°C',
    'v1.':'v1.',
    '打开手机QQ':'打开手机QQ',
    '点击加群':'点击加群',
    '更多同类游戏':'更多同类游戏',
    '旧版':'旧版',
    '论坛':'论坛',
    '扫码加群':'扫码加群',
    '一起讨论吧':'一起讨论吧',
    'Git游戏':'Git游戏',
    'QQ群号':'QQ群号',
    '':'',
    '':'',
    
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
var cnExcludeWhole= [
    /^x?\d+(\.\d+)?[A-Za-z%]{0,2}(\s.C)?\s*$/,                                           //12.34K,23.4 °C
    /^x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/,                                          //12.34e+4
    /^\s*$/,                                                                //纯空格
    /^\d+(\.\d+)?[A-Za-z]{0,2}.?\(?([+\-]?(\d+(\.\d+)?[A-Za-z]{0,2})?)?$/,    //12.34M (+34.34K
    /^(\d+(\.\d+)?[A-Za-z]{0,2}\/s)?.?\(?([+\-]?\d+(\.\d+)?[A-Za-z]{0,2})?\/s\stot$/,                         //2.74M/s (112.4K/s tot
    /^\d+(\.\d+)?(e[+\-]?\d+)?.?\(?([+\-]?(\d+(\.\d+)?(e[+\-]?\d+)?)?)?$/,         //2.177e+6 (+4.01+4
    /^(\d+(\.\d+)?(e[+\-]?\d+)?\/s)?.?\(?([+\-]?(\d+(\.\d+)?(e[+\-]?\d+)?)?)?\/s\stot$/,         //2.177e+6/s (+4.01+4/s tot
];
var cnExcludePostfix = [
    /:?\s*x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/,                                          //12.34e+4
    /:?\s*x?\d+(\.\d+)?[A-Za-z]{0,2}$/,  //: 12.34K, x1.5
]

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
    for(let prefix in cnPrefix){
        if (text.substr(0,prefix.length) === prefix){
            text_prefix = cnPrefix[prefix];
            text = text.substr(prefix.length);
        }
    }
    //处理后缀
    let text_postfix = "";
    for(let postfix in cnPostfix){
        if (text.substr(-postfix.length) === postfix){
            text_postfix = cnPostfix[postfix];
            text = text.substr(0,text.length-postfix.length);
        }
    }
    //处理正则后缀
    let text_reg_exclude_postfix = "";
    for(let reg of cnExcludePostfix){
        let result = text.match(reg);
        if (result){
            text_reg_exclude_postfix = result[0];
            text = text.substr(0, text.length-text_reg_exclude_postfix.length);
        }
    }

    //检验字典是否可存
    if (!cnItems._OTHER_) cnItems._OTHER_ = [];

    //检查是否排除
    for(let reg of cnExcludeWhole){
        if (reg.test(text)){
            return arguments[0];
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
    let save_text = save_cfg?text:arguments[0]
    //遍历生词表是否收录
    for (
        let i = 0; i < cnItems._OTHER_.length; i++
    ) {
        //已收录则直接返回
        if (save_text == cnItems._OTHER_[i])
            return arguments[0];
    }

    if (cnItems._OTHER_.length < 500){
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

function TransSubTextNode(node){
    if (node.childNodes.length > 0){
        for(let subnode of node.childNodes){
            if (subnode.nodeName === "#text") {
                subnode.textContent = cnItem(subnode.textContent);
                //console.log(subnode);
            }
            else if (subnode.nodeName !=="SCRIPT" && subnode.innerHTML && subnode.innerText){
                if (subnode.innerHTML === subnode.innerText){
                    subnode.innerText = cnItem(subnode.innerText);
                    //console.log(subnode);
                }
                else {
                    TransSubTextNode(subnode);
                }
            }
            else{
                // do nothing;
            }
        }
    }
}

!function(){
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
    //监听页面变化并汉化动态内容
    let observer = new MutationObserver(function(e){
        observer.disconnect();
        for(let mutation of e){
            if (mutation.target.nodeName === "SCRIPT") continue;
            if (mutation.target.innerHTML && mutation.target.innerText && mutation.target.innerHTML === mutation.target.innerText){
                mutation.target.innerText = cnItem(mutation.target.innerText);
            }
            else if (mutation.addedNodes.length > 0){
                for(let node of mutation.addedNodes){
                    if (node.nodeName === "#text") {
                        node.textContent = cnItem(node.textContent);
                        //console.log(node);
                    }
                    else if (node.nodeName !=="SCRIPT" && node.innerHTML && node.innerText){
                        if (node.innerHTML === node.innerText){
                            node.innerText = cnItem(node.innerText);
                        }
                        else{
                            TransSubTextNode(node);
                        }
                    }
                }
            }
        }
        observer.observe(targetNode, observer_config);
    });
    observer.observe(targetNode, observer_config);
}();