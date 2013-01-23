var gws = {
    lang: {
        NAMES: [['灵巧的', '敏锐的', '荣耀的', '欢快的', '沉静的', '暴怒的', '忧郁的', '嗜血的', '凶残的', '慈祥的', '睿智的', '邪恶的', '辛劳的', '威严的', '正义的', '善良的', '苍老的', '年轻的', '古怪的', '圣洁的'], ['临冬城', '明焰湾', '狼林', '鹰巢城', '冰封海岸', '熊岛', '艾林谷', '奔流城', '千面屿', '魂丘', '冬泉谷', '灼热平原', '暴风城', '西部荒野', '银月城', '铁炉堡', '荆棘谷', '刀锋山', '湿地', '黑石山'], ['骑士', '国王', '将领', '巫师', '工匠', '乐手', '刺客', '学士', '王子', '贵族', '战士', '游侠', '盗贼', '法师', '术士', '猎人', '恶魔', '巨龙', '精灵', '矮人']],
        getName: function(a, b) {
            var c = [20, 20, 20];
            return gws.lang.NAMES[a][b % c[a]];
        },
        LANG_VARIABLE: 'zh-CN',
        HEAD_TITLE: '六边拼图 (Entanglement) - Gopherwood Studios 出品',
        HEAD_KEYWORDS: '拼图,游戏,休闲,益智,六边形,砖块,网格,路线,禅',
        HEAD_DESCRIPTION: '和您的朋友比试一下“六边拼图”，看谁连的路线更长。',
        TILES_LEFT: '剩余砖块数',
        LEAVE_GAME: '您确定要退出此游戏吗？',
        NAME: '名号',
        BUY_NOW: '立即购买',
        GET_ALL_THREE: '获得全部三种模式，只需',
        SOLITAIRE: '单人游戏',
        MULTIPLAYER: '多人游戏',
        NEW: '新功能！',
        MORE_MODES: '更多模式',
        HIGH_SCORES: '高分排行榜',
        ABOUT_ENTANGLEMENT: '关于“六边拼图”',
        CLASSIC: '经典',
        SAKURA_GROVE: '樱树丛',
        HANA_BLOSSOM: '哈娜花',
        LOTUS_PETAL: '莲花瓣',
        TWO_PLAYER: '双人',
        THREE_PLAYER: '三人',
        FOUR_PLAYER: '四人',
        FIVE_PLAYER: '五人',
        SIX_PLAYER: '六人',
        EXPANSION_SET: '扩展包',
        LOGIN: '登录',
        DAILY_CHALLENGE: '每日挑战',
        COMING_SOON: '即将推出！',
        PRODUCED_BY: '制作：',
        MUSIC_BY: '音乐：',
        BLOG: '博客',
        MODE: '模式',
        PERSONAL_SCORES: '个人得分',
        TODAYS_SCORES: '今日得分',
        WEEKS_SCORES: '本周得分',
        ALL_TIME_SCORES: '纪录得分',
        SCORE: '得分',
        RECORD: '纪录',
        CURRENT_PATH: '当前路线',
        LONGEST_PATH: '最长路线',
        SWAP: '切换',
        SEGMENTS: '线段',
        MENU: '菜单',
        MAIN_MENU: '主菜单',
        NEW_GAME: '新游戏',
        HOW_TO_PLAY: '玩法介绍',
        SCOREBOARD: '得分榜',
        PLAY_AGAIN: '再玩一次',
        SIGNED_OUT: '已退出。',
        ONLINE_GAME: '在线游戏',
        OFFLINE_GAME: '离线游戏',
        SUBMIT_SCORE: '您要提交自己的得分吗？',
        ACCOUNT_FOR_AUTHENTIFICATION: '（我们使用您的 Google 帐户进行身份验证。）',
        YES: '是',
        NO: '否',
        SELECT_NAME: '为您自己选择一个名号：',
        OK: '确定',
        CANCEL: '取消',
        PLAY_SFX: '播放音效',
        MUTE_SFX: '关闭音效',
        PLAY_MUSIC: '播放背景音乐',
        MUTE_MUSIC: '关闭背景音乐',
        SIGN_IN: '登录',
        SIGN_OUT: '退出',
        GOPHERWOOD_STUDIOS: 'Gopherwood Studios',
        OMNI_AUDIO: 'Omni Audio',
        GOOGLE_CHECKOUT: 'Google Checkout',
        LOADING: '正在载入...',
        FOLLOW_US: '关注我们！',
        FOLLOW_FACEBOOK: '在 Facebook 上关注我们',
        FOLLOW_TWITTER: '在 Twitter 上关注我们',
        INSTALL_APP: '在“Chrome 浏览器”中安装该免费应用程序后就可以离线玩游戏了！',
        AVAILABLE_CWS: '“Chrome 网上应用店”有售',
        NOW_ON_IOS: '现在还可以在 iPhone 和 iPad 上玩！',
        NEW_MAPS: '新拼图已推出！',
        ORDER_POSSIBILITIES: '您所请求的订单不存在、仍在进行处理或已完成。',
        ORDER_PROCESSING: '您的订单仍在进行处理。',
        PLEASE_WAIT: '请耐心等待...',
        WAIT_FOR_NOTIFICATION: '如果您刚刚下了此订单，请在您的 Google Checkout 电子邮件帐户中查收关于订单状态的通知邮件。 如果您在 15 分钟内未收到回复， ',
        FEEDBACK_EMAIL: '请与 feedback@gopherwoodstudios.com 联系',
        ONLINE_TO_ADD: '您必须处于在线状态才能添加扩展包。',
        TIED_TO_ACCOUNT: '您的购买操作是与您的 Google 帐户关联的。',
        TITLE: '六边拼图',
        ONE_MORE_STEP: '还有一步',
        HTML5_REQUIRED: ' 使用了 HTML5 这一尖端的浏览器技术，而您的浏览器似乎不支持这种技术。 不过您仍然可以玩！ 以下浏览器的最新版本均支持 HTML5：',
        INTERNET_EXPLORER: '您也可以使用某些早期版本的 Internet Explorer 玩此游戏 ',
        CHROME_FRAME: '只需安装“Chrome 浏览器内嵌框架”插件即可',
        IE: 'Microsoft Internet Explorer',
        SAFARI: 'Apple Safari',
        CHROME: 'Google Chrome 浏览器',
        FIREFOX: 'Mozilla Firefox',
        OPERA: 'Opera',
        RESULTS: '结果',
        PLACE: '放置',
        LENGTH: '长度',
        SCORE: '得分',
        SAKURA_GROVE_EXPANSION: '“樱树丛”扩展包',
        FOR_ENTHUSIAST: '面向“六边拼图”爱好者',
        LOGIN_IF_OWN: '如果您已拥有此扩展包，请登录。',
        LOGIN_CONNECT_ACCOUNT: '要在您的帐户中添加“樱树丛”扩展包，您需要登录希望与此扩展包关联的帐户。',
        PURCHASED_TIED_TO_ACCOUNT: '（您的购买操作是与您的 Google 帐户关联的。）',
        USE_CHROME: '使用“Chrome 浏览器”吗？ 安装该免费应用程序后就可以离线玩游戏了！',
        INSTALL_FOR_OFFLINE: '在“Chrome 浏览器”中安装该免费应用程序后就可以离线玩游戏了！',
        LONGEST_LINE_POSSIBLE: '尽可能连出最长的路线。 您的路线拥有的线段越多，得分就越高。',
        USE_ARROW_KEYS2: '使用箭头键或鼠标滚轮可旋转砖块。 点击鼠标左键或按空格键可放置砖块，并可观察路线的延伸趋势。',
        GAME_ENDS2: '如果路线碰触到墙壁，游戏就结束了，因此要避开墙壁！',
        SPARE_TILE: '如果当前盘面上放置砖块的路线不合您意，点击左下角的备用砖块即可进行切换。 您也可以通过点击鼠标右键或按键盘上的字母“Z”键进行切换。',
        USED_LATER: '切换后，原来的砖块就成了备用砖块，可以在以后使用。',
        AVOID_OTHER_PLAYERS: '注意避开墙壁和其他玩家的路线，否则游戏就结束了。 当所有玩家都放置了自己所能放置的最多砖块后，得分最多的玩家将胜出！',
        LONGEST_LINE_POSSIBLE2: '尽可能连出最长的路线。 您的路线拥有的线段越多，得分就越高。',
        NO_SCORES_OFFLINE: '离线游戏：您的得分无法提交到全球排行榜。',
        PREVIOUS: '上一个',
        NEXT: '下一个',
        CURRENT_WINNER: '当前赢家',
        TIME_REMAINING: '剩余时间 - ',
        USE_ARROW_KEYS: '使用箭头键或鼠标滚轮可旋转六边形砖块。',
        SPACEBAR_TO_PLACE: '决定方位后，按空格键或点击鼠标左键可放置砖块。',
        WEAVE_AROUND: '请尽量沿盘面连出最长的路线，但是要避开墙壁。',
        LOOP_THROUGH: '穿过多个砖块可以得到更多分数！',
        MORE: '更多',
        GET_THE_MUSIC: '下载音乐',
        GET_THE_SOUNDTRACK: '喜欢游戏音乐吗？ 此处可下载音乐。',
        SWAP_HOVER: '按“Z”键或点击鼠标右键可切换砖块。',
        CANT_FIND_USER: '无法找到已登录的用户。 请登录您的 Google 帐户，然后重试。 如果您依然遇到问题，请发送电子邮件至 feedback@gopherwoodstudios.com。',
        NOT_IN_DATABASE: '无法在数据库中找到当前登录的用户。 请将此问题报告给 feedback@gopherwoodstudios.com。 谢谢！',
        TOO_MANY_MATCHING: '我们数据库中的匹配用户太多。 请将此问题报告给 feedback@gopherwoodstudios.com。 谢谢！',
        ORDER_DONE_OR_NONEXISTANT: '您所请求的订单不存在或已完成。 如果不是这种情况，请与 feedback@gopherwoodstudios.com 联系。',
        ORDER_HAD_ERROR: '您所请求的订单曾发生过错误。 请将此问题报告给 feedback@gopherwoodstudios.com。 谢谢！',
        ORDER_SERIOUS_ERROR: '您所请求的订单发生了严重的错误。 请将此问题报告给 feedback@gopherwoodstudios.com。 谢谢！',
        PURCHASE_ITEM_PROBLEM: '您所请求的购买项出现了问题。 请将此问题报告给 feedback@gopherwoodstudios.com。 谢谢！',
        USER_ALREADY_HAS_IT: '该用户已购买了此内容。 您可以通过其他帐户使用此购买内容。 如果您有任何疑问或问题，请与 feedback@gopherwoodstudios.com 联系。 谢谢！',
        DAILY_CHALLENGE_RULES: '“每日挑战”每天都会向所有玩家给出完全相同的拼图（相同的盘面、规则和砖块）。 排除了所有随机性因素后，您的得分就完全取决于您的技巧了。<br /><br />当前的最高分得主会显示在屏幕一角，旁边还有一个计时器，显示距离今天的挑战结束以及拼图刷新还有多长时间。',
        GET_MORE: '获得更多 ',
        TRY_MORE: '尝试更多',
        TRY_SAKURA_GROVE: '尝试“樱树丛”',
        GET_MUSIC: '下载音乐',
        OTHER_DEVICES: '在移动设备上玩',
        TRY_OUT_SAKURA: '试试“樱树丛”吧！',
        SAKURA_INSTRUCTIONS: '“樱树丛”模式在原有游戏的基础上加入了一些新花样，可让玩家通过新的挑战来探索“六边拼图”的花园。<br /><br />您的砖块数量是有限的。 中心砖块上会显示剩余砖块的数量。<br /><br />如果您的路线穿过了樱树砖块，就可以获得更多砖块。 在单人游戏中，您每次穿过一个樱树砖块时，都可以额外获得一个砖块。 在多人游戏中，其他玩家每次穿过一个樱树砖块时，您都可以额外获得一个砖块。<br /><br />如果您的路线穿过中心砖块，可以获得奖励加分。 当然，您穿过中心砖块的频率越高，获得的奖励加分就越多。',
        MULTIPLAYER_INSTRUCTIONS: '尽可能连出最长的路线。 您的路线拥有的线段越多，得分就越高。</p><p>使用箭头键或鼠标滚轮可旋转砖块。 点击鼠标左键或按空格键可放置砖块，并可观察路线的延伸趋势。</p><p>注意避开墙壁和其他玩家的路线，否则游戏就结束了。 当所有玩家都放置了自己所能放置的最多砖块后，得分最多的玩家将胜出！',
        CURRENT_WINNER: '当前赢家',
        EVERYDAY_AD: '每天都有新挑战！ 每天都会决出新的冠军！',
        YOU_MUST_BE_ONLINE: '您必须处于在线状态才能查看所有得分。',
        UNABLE_TO_SIGNIN: '无法登录。 请重试。',
        GET_MORE_BOARDS: '获得更多盘面！',
        GET_MORE_MAPS: '获得更多拼图！',
        LAST_TILE: '最后一块砖了！',
        AND: '结果',
        LONGEST_LINE_YET: '：这是您目前为止最长的路线！',
        PERSONAL_BEST: '个人最佳成绩！',
        PRICE: '1.99',
        GET_THEM_ALL: '获得所有模式，只需',
        BONUS_POINTS: '奖励加分',
        SWAP_TILE: '切换砖块',
        BONUS_TILE: '奖励砖块',
        PLAYER_NAME_RED: '红',
        PLAYER_NAME_BLUE: '蓝',
        PLAYER_NAME_YELLOW: '黄',
        PLAYER_NAME_GREEN: '绿',
        PLAYER_NAME_ORANGE: '橙',
        PLAYER_NAME_PURPLE: '紫',
        PLAYER_NAME_DEFAULT_NAME: '默认名号',
        DAILY_CHALLENGE_NO_HIGH_SCORE: '还没有任何人！',
        LOGIN_WINDOW_TEXT: '您可以关闭此窗口',
        CHECKOUT_EXPANSION_NAME: '“六边拼图”扩展包 - 樱树丛',
        CHECKOUT_EXPANSION_DESCRIPTION: 'Gopherwood Studios 出品的“六边拼图”还有更多玩法。 包括“樱树丛”、“哈娜花”和“莲花瓣”。',
        CHECKOUT_EXPANSION_POST_PURCHASE: '感谢您购买“六边拼图”的“樱树丛”扩展包！<br><br>点击下面的“点击此处检索您的购买内容”(Click here to retrieve your purchase) 链接，然后登录“六边拼图”，启用您购买的扩展包。 我们会向您的 Google Checkout 电子邮件地址发送同样的链接。<br><br>如有任何问题，请通过 feedback@gopherwoodstudios.com 告知我们。 谢谢！<br><br><b>请点击下面的链接检索您的购买内容！</b>',
        ERROR_LOGGED_IN_BUT_NO_ACCESS: '出错：您已登录，但无法访问此游戏类型',
        ERROR_NOT_LOGGED_IN: '出错：未登录的帐户无法访问此内容',
        DAYS_AGO: '2天前',
        CONDUIT_USE_ARROW_KEYS: '使用您的手机上的箭头旋转的瓷砖。',
        MOBILE_USE_ARROW_KEYS: '使用箭头按钮旋转的瓷砖。',
        CONDUIT_TAP_TO_PLACE: '点击在您的手机上设置的瓷砖到位。',
        MOBILE_TAP_TO_PLACE: '点击董事会锁定瓷砖。',
        CLASSIC_INSTRUCTIONS_MOBILE: '评分最高分，通过创建一个长长的线。你通过每瓦赚取积分。通过一个以上的在一个单一的举动，即使以赚取更多的积分！</ P>使用箭头按钮旋转的瓷砖。点击游戏板将瓷砖，看你的线长。</ P>避免墙壁或游戏将结束。',
        MULTIPLAYER_INSTRUCTIONS_MOBILE: '评分最高分，通过创建一个长长的线。你通过每瓦赚取积分。通过一个以上的在一个单一的举动，即使以赚取更多的积分！</ P>使用箭头按钮旋转的瓷砖。点击游戏板将瓷砖，看你的线长。</ P>避免墙壁和其他玩家的线，你的游戏将结束。一旦所有的球员们，因为他们能够尽可能多地砖，积分最高的玩家获胜！',
        BACK: '返回',
        TRANQUIL_GARDEN: '花园扩展',
        TRANQUIL_GARDEN_TITLE: '“静园”扩展',
        TRANQUIL_GARDEN_SUBTITLE: '一个全新的方式来发挥纠缠',
        CLASSIC_MODE: '经典的扩展',
        CLASSIC_MODE_TITLE: '经典模式扩展',
        CLASSIC_MODE_SUBTITLE: '即使你爱的纠缠态',
        COMBO_PACK: '组合扩展',
        COMBO_PACK_TITLE: '扩展套装',
        COMBO_PACK_SUBTITLE: '的最佳扩展举棋不定的',
        PLAY: '玩',
        CHECK_IT_OUT: '检查出来',
        THE_MARKET: '市场',
        YOU_ALREADY_OWN: '你已经拥有了这一点。现在就来试试！',
        TRY_IT: '试试吧！',
        PURCHASE_FOR: '购买的',
        TRY_A_TRIAL_A: '尝试免费1天的试用所有的扩展！',
        FREE: '免费',
        ALL: 'ALL',
        TRIAL_ACTIVE: '您的试用，是目前活跃！',
        LOGIN_TRIAL: '登录到发挥了为期一天的免费试用',
        LOGIN_PURCHASE: '或购买这种扩张！',
        PURCHASE: '采购',
        ADD_TO_HOME_SCREEN: '点击IOSSHARE，并选择“添加到主屏幕”添加到您的主屏幕上的纠缠！'
    },
    assetList: ['i/bg.jpg', 'i/button-tiny.png', 'i/bonus-tiles.png', 'i/tab-small.png', 'i/tiles12.png', 'i/ss-classic.jpg', 'i/ss-sakura.jpg', 'i/ss-hana.jpg', 'i/ss-petal.jpg', 'i/ss-daily-challenge.jpg', 'i/ad-sakura.png', 'i/ad-fb.png', 'i/ad-tw.png', 'i/dialog-box.png', 'i/browsers.png', 'i/entanglement-logo-250.png', 'i/score_background.png', 'i/button.png', 'i/button-highlight.png', 'i/line.png', 'i/line-red.png', 'i/exit.png', 'i/side-menu-reflection.png', 'i/icon_logo.png', 'i/bg-highscores.png', 'i/VERY_TOP_GLOW.png', 'i/swap.png', 'i/red.png', 'i/blue.png', 'i/yellow.png', 'i/green.png', 'i/orange.png', 'i/purple.png', 'i/field_places.png', 'i/field_lengths.png', 'i/field_scores.png', 'i/menu_bg2.png', 'i/field.png', 'i/button_numberbar.png', 'i/button_namebar.png', 'i/button_scorebar.png', 'i/arrow-left.png', 'i/arrow-right.png', 'i/sparks1.png', 'i/sparks2.png', 'i/online.png', 'i/offline.png', 'i/field_names_highlight.png', 'i/field_small_highlight.png', 'i/icon_star.png', 'i/field_names.png', 'i/field_small.png', 'i/bar.png', 'i/bar-buttons1.png', 'i/credits-gw.png', 'i/credits-oa.png', 'i/bar-horizontal.png', 'i/scrollbar_middle.png', 'i/scrollbar_small.png', 'i/tile-jewelry2.png', 'i/rotate-buttons.png', 'i/bonus-tile-shadow.png', 'i/expansion-box.png', 'i/back-button.png', 'i/background.jpg', 'i/button_default1.png', 'i/button_roll.png', 'i/logo.png', 'i/logo-mobile.png', 'i/menu_background.png', 'i/menu-icons-2.png', 'i/main-menu-buttons.png', 'i/main_menu_toplayer.png', 'i/side-menu-buttons.png', 'i/side-icons.png', 'i/side-background.png', 'a/click.ogg', 'a/Layer1_1.ogg', 'a/Layer1_2.ogg', 'a/Layer1_3.ogg', 'a/Layer1_4.ogg', 'a/Layer1_5.ogg', 'a/Layer1_6.ogg', 'a/Layer2_1.ogg', 'a/Layer2_2.ogg', 'a/Layer2_3.ogg', 'a/Layer2_4.ogg', 'a/Layer2_5.ogg', 'a/end-game.ogg', 'a/sfx.ogg', 'a/Turn0.ogg', 'a/Turn1.ogg', 'a/Turn2.ogg', 'a/bonus-unlock.ogg', 'a/bonus-tile.ogg', 'a/bonus-points.ogg', 'a/daily-challenge.ogg', 'a/click.mp3', 'a/Layer1_1.mp3', 'a/Layer1_2.mp3', 'a/Layer1_3.mp3', 'a/Layer1_4.mp3', 'a/Layer1_5.mp3', 'a/Layer1_6.mp3', 'a/Layer2_1.mp3', 'a/Layer2_2.mp3', 'a/Layer2_3.mp3', 'a/Layer2_4.mp3', 'a/Layer2_5.mp3', 'a/end-game.mp3', 'a/sfx.mp3', 'a/Turn0.mp3', 'a/Turn1.mp3', 'a/Turn2.mp3', 'a/bonus-unlock.mp3', 'a/bonus-tile.mp3', 'a/bonus-points.mp3', 'a/daily-challenge.mp3', 'a/sfx.m4a']
};

gws.assets = {
    cdn: "",
    images: [],
    streamingEnabled: "untested",
    saveScaledImages: true,
    sounds: [],
    assetCount: 0,
    assetsLoaded: 0,
    assetsFailed: 0,
    imageCount: 0,
    imagesLoaded: 0,
    soundCount: 0,
    soundsLoaded: 0,
    onFinishOne: function(b, a) {},
    onFinishImages: function() {},
    onFinishSounds: function() {},
    onFinishAll: function() {},
    unloadedAssets: [],
    loadedAssets: [],
    loadedImage: function(a) {
        this.loaded(a);
        this.imagesLoaded += 1;
        if (this.imagesLoaded >= this.imageCount) {
            this.onFinishImages()
        }
    },
    loadedSound: function(a) {
        this.loaded(a);
        this.soundsLoaded += 1;
        if (this.soundsLoaded >= this.soundCount) {
            this.onFinishSounds()
        }
    },
    loaded: function(b) {
        if (this.cdn != "") {
            b = b.replace(this.cdn, "")
        }
        this.assetsLoaded += 1;
        if (DEBUG) {
            if (console) {
                console.log(b + " (" + this.assetsLoaded + " of " + this.assetCount + ") is loaded")
            }
        }
        this.onFinishOne(this.assetsLoaded / this.assetCount, b);
        for (var a = 0; a < this.unloadedAssets.length; a++) {
            if (this.unloadedAssets[a] == b) {
                this.unloadedAssets.splice(a, 1)[0];
                break
            }
        }
        this.loadedAssets.push(b);
        if (this.assetsLoaded >= this.assetCount) {
            this.onFinishAll()
        }
    },
    load: function(d, l, b, f, a) {
        var h, c;
        if (d.length == 0) {
            if (b) {
                b()
            }
            return false
        }
        this.unloadedAssets = d;
        this.onFinishOne = function(n, m) {};
        this.onFinishImages = function() {};
        this.onFinishSounds = function() {};
        this.onFinishAll = function() {};
        if (l) {
            this.onFinishOne = l
        }
        if (b) {
            this.onFinishAll = b
        }
        if (f) {
            this.onFinishImages = f
        }
        if (a) {
            this.onFinishSounds = a
        }
        for (var g in d) {
            c = d[g];
            this.assetCount += 1;
            h = c.length - 4;
            if (h >= 0) {
                var k = c.toUpperCase().substring(h);
                switch (k) {
                case ".PNG":
                case ".JPG":
                case "JPEG":
                    this.images[c] = new Image();
                    this.images[c].addEventListener("load", this.eventListeners.loadImage, false);
                    this.images[c].addEventListener("error", this.eventListeners.fail, false);
                    this.images[c].src = this.cdn + c;
                    this.imageCount += 1;
                    break;
                case ".MP3":
                case ".M4A":
                case ".WAV":
                case ".OGG":
                    if (window.Audia && window.Audia.supported && (gws.assets.streamingEnabled !== "disabled")) {
                        this.sounds[c] = new Audia();
                        this.sounds[c].onload = this.eventListeners.loadSound;
                        try {
                            this.sounds[c].src = this.cdn + c;
                            gws.assets.streamingEnabled = "enabled"
                        } catch(j) {
                            gws.assets.streamingEnabled = "disabled";
                            this.sounds[c] = new Audio();
                            this.sounds[c].addEventListener("loadeddata", this.eventListeners.loadSound, false);
                            this.sounds[c].addEventListener("error", this.eventListeners.fail, false);
                            this.sounds[c].src = this.cdn + c
                        }
                    } else {
                        this.sounds[c] = new Audio();
                        this.sounds[c].addEventListener("loadeddata", this.eventListeners.loadSound, false);
                        this.sounds[c].addEventListener("error", this.eventListeners.fail, false);
                        this.sounds[c].src = this.cdn + c
                    }
                    this.soundCount += 1;
                    break;
                case ".ICO":
                default:
                    this.assetsLoaded += 1
                }
            } else {
                this.assetsLoaded += 1
            }
        }
    },
    eventListeners: {
        loadImage: function() {
            gws.assets.loadedImage(this.getAttribute("src"))
        },
        loadSound: function() {
            var a = this.getAttribute ? this.getAttribute("src") : this.src;
            gws.assets.loadedSound(a)
        },
        fail: function() {
            gws.assets.loaded(this.getAttribute ? this.getAttribute("src") : this.src);
            gws.assets.assetsFailed += 1;
            if (DEBUG) {
                if (console) {
                    console.error((this.getAttribute ? this.getAttribute("src") : this.src) + " failed to load.")
                }
            }
        }
    },
    getImage: function(k, a, l) {
        var f = this.images[k];
        if (f) {
            if (this.saveScaledImages) {
                var h = Math.ceil(a);
                var j = Math.ceil(l || (((h == f.width) || (!h)) ? f.height: h * f.height / f.width));
                if (!h) {
                    h = Math.ceil((j == f.height) ? f.width: j * f.width / f.height)
                }
                var b = ((h == f.width) && (j == f.height));
                var c = b ? k: k + "-" + h + "x" + j;
                if (!this.images[c]) {
                    var d = document.createElement("canvas");
                    d.width = h;
                    d.height = j;
                    var m = d.getContext("2d");
                    try {
                        m.drawImage(f, 0, 0, f.width, f.height, 0, 0, h, j)
                    } catch(g) {}
                    this.images[c] = d
                }
                return this.images[c]
            } else {
                return f
            }
        } else {
            if (DEBUG) {
                console.warn('"' + k + '" is not a loaded asset!')
            }
            return false
        }
    },
    removeImage: function(a) {
        this.images[a] = undefined
    },
    getTile: function(h, c, j, f, b) {
        var g = h + "-" + c + "_" + j;
        var d = this.images[g];
        if (!d) {
            var a = h.split("-");
            a = a[a.length - 1].split(".")[0].split("x");
            if (!this.createSpriteSheet(h, false, a[0], a[1])) {
                if (DEBUG) {
                    console.error("Tile of (" + c + "," + j + ") on " + h + " cannot be created.")
                }
            }
        }
        return this.getImage(g, f, b)
    },
    createSpriteSheet: function(n, a, b, p) {
        var h = b || 1;
        var l = p || 1;
        var d = this.images[a || n];
        if (d) {
            var m = Math.floor(d.width / h);
            var k = Math.floor(d.height / l);
            for (var g = 0; g < h; g++) {
                for (var j = 0; j < l; j++) {
                    var c = document.createElement("canvas");
                    c.width = m;
                    c.height = k;
                    var o = c.getContext("2d");
                    try {
                        o.drawImage(d, g * m, j * k, m, k, 0, 0, m, k)
                    } catch(f) {}
                    this.images[n + "-" + g + "_" + j] = c
                }
            }
            this.removeImage(a || n);
            return true
        } else {
            if (DEBUG) {
                console.error('gws.assets.createSpriteSheet: "' + n + '" is not in the list of assets.')
            }
            return false
        }
    },
    setImageName: function(b, a) {
        this.images[a] = b;
        return b
    },
    setSoundName: function(b, a) {
        this.sounds[a] = b;
        return b
    },
    getSound: function(a) {
        if (this.sounds[a]) {
            return this.sounds[a]
        } else {
            if (DEBUG) {
                throw '"' + a + '" is not a loaded asset!'
            }
            return false
        }
    },
    removeSound: function(a) {
        this.sounds[a] = undefined
    },
    combine: function(d) {
        var l = d || {};
        var g = l.layers || [];
        var c = l.minWidth || 0;
        var b = l.minHeight || 0;
        c = Math.ceil(c / 2);
        b = Math.ceil(b / 2);
        var h = b,
        o = b,
        a = c,
        n = c,
        j, m = "";
        for (var k in g) {
            j = g[k];
            j.x = j.x || 0;
            j.y = j.y || 0;
            m += j.image;
            if (j.spriteXY) {
                j.imageSrc = this.getTile(j.image, j.spriteXY.x, j.spriteXY.y, j.width, j.height)
            } else {
                j.imageSrc = this.getImage(j.image, j.width, j.height)
            }
            j.width = j.width || j.imageSrc.width;
            j.height = j.height || j.imageSrc.height;
            h = Math.max(h, j.y);
            o = Math.max(o, j.height - j.y);
            a = Math.max(a, j.x);
            n = Math.max(n, j.width - j.x)
        }
        m = l.title || m;
        var f = document.createElement("canvas");
        f.width = a + n;
        f.height = h + o;
        var r = a;
        var p = h;
        var q = f.getContext("2d");
        for (var k in g) {
            j = g[k];
            q.save();
            if (j.mirror) {
                if (j.mirror == "horizontal") {
                    q.translate(r, 0);
                    q.scale( - 1, 1);
                    q.translate( - r, 0)
                } else {
                    if (j.mirror == "vertical") {
                        q.translate(0, p);
                        q.scale(1, -1);
                        q.translate(0, -p)
                    }
                }
            }
            q.drawImage(j.imageSrc, 0, 0, j.imageSrc.width, j.imageSrc.height, r - j.x, p - j.y, j.width, j.height);
            q.restore()
        }
        return this.setImageName(f, m)
    },
    copyTile: function(b, a, c) {
        return this.copyImage(b, this.getTile(b, a, c))
    },
    copyImage: function(f, d) {
        var b = d || this.getImage(f);
        var c = document.createElement("canvas");
        c.width = b.width;
        c.height = b.height;
        var a = c.getContext("2d");
        a.save();
        a.drawImage(b, 0, 0, b.width, b.height, 0, 0, b.width, b.height);
        a.restore();
        return c
    },
    filterAudio: function(c, a) {
        var d = [],
        b;
        if (a.ogg) {
            for (b in c) {
                if ((c[b].indexOf("mp3") < 0) && (c[b].indexOf("m4a") < 0)) {
                    d.push(c[b])
                }
            }
        } else {
            if (a.m4a && (a.android || a.iOS)) {
                for (b in c) {
                    if ((c[b].indexOf("ogg") < 0) && (c[b].indexOf("mp3") < 0)) {
                        d.push(c[b])
                    }
                }
            } else {
                for (b in c) {
                    if ((c[b].indexOf("ogg") < 0) && (c[b].indexOf("m4a") < 0)) {
                        d.push(c[b])
                    }
                }
            }
        }
        c = d;
        return c
    },
    referenceAudio: function(d, a) {
        if (a.mobile) {
            var f = [],
            c,
            b;
            for (b in d) {
                if ((d[b].indexOf("ogg") > 0) || (d[b].indexOf("mp3") > 0) || (d[b].indexOf("m4a") > 0)) {
                    c = new Audio();
                    c.src = d[b];
                    this.setSoundName(c, d[b].replace("a/", "").replace(".mp3", "").replace(".m4a", "").replace(".ogg", ""))
                } else {
                    f.push(d[b])
                }
            }
            d = f
        }
        return d
    }
};
gws.classes = gws.classes || {};
gws.classes.frame = function(b) {
    var a = b || {};
    this.edges = [];
    this.t = a.t;
    this.time = a.time;
    this.x = a.x;
    this.y = a.y;
    this.z = a.z;
    this.image = a.image;
    this.sprite = a.sprite;
    this.spriteSize = a.spriteSize
};
gws.classes.frame.prototype.setEdge = function(a, b) {
    this.edges[a] = b
};
gws.classes.frame.prototype.getEdge = function(a) {
    return this.edges[a]
};
gws.classes.frame.prototype.getNode = function(b) {
    var a = this.getEdge(b);
    if (a) {
        return a.getNode(this)
    } else {
        return false
    }
};
gws.classes.animation = function(a, b, c) {
    this.layer = b;
    this.div = false;
    if (!b.context) {
        this.div = gws.createElement(b.canvas, "div", "animation");
        this.div.style.position = "absolute";
        this.div.style.top = "0px";
        this.div.style.left = "0px";
        this.div.style.webkitTransformOrigin = "50% 50% 0";
        this.div.style.mozTransformOrigin = "50% 50% 0";
        this.div.style.msTransformOrigin = "50% 50% 0";
        this.div.style.oTransformOrigin = "50% 50% 0";
        this.div.style.transformOrigin = "50% 50% 0"
    }
    this.currentFrame = {
        assets: c
    };
    this.lastFrame = {
        assets: c
    };
    this.sequences = [];
    this.setupAnimation(a);
    this.isDifferent = true;
    this.update()
};
gws.classes.animation.prototype.addSequence = function(a) {
    this.destroyOnEnd = false;
    this.sequences.push(a)
};
gws.classes.animation.prototype.replaceSequence = function(a) {
    this.destroyOnEnd = false;
    this.sequences = a
};
gws.classes.animation.prototype.interruptSequence = function(a) {
    this.destroyOnEnd = false;
    this.sequences = a;
    this.interrupt = true
};
gws.classes.animation.prototype.nextSequence = function(a) {
    if (this.onEnd) {
        this.onEnd();
        this.onEnd = false
    }
    if ((this.sequences.length > 0) && (!this.destroyNow)) {
        if (this.sequences[0].delay) {
            if (this.sequences[0].startTime) {
                if (a >= this.sequences[0].startTime) {
                    this.setupAnimation(this.sequences.splice(0, 1)[0], a);
                    this.update(a);
                    return true
                } else {
                    return false
                }
            } else {
                this.sequences[0].startTime = a + this.sequences[0].delay;
                this.sequences[0].delay = 1;
                return false
            }
        }
        this.setupAnimation(this.sequences.splice(0, 1)[0], a);
        this.update(a);
        return true
    } else {
        if ((this.destroyOnEnd || this.destroyNow) && !this.destroyed) {
            this.destroyed = true;
            return false
        } else {
            if (this.referenceObj) {
                return false
            } else {
                if (!this.destroyed) {
                    this.destroyed = true;
                    return true
                }
            }
        }
    }
};
gws.classes.animation.prototype.setupAnimation = function(d, f) {
    if (d.onBegin) {
        d.onBegin();
        if (DEBUG) {
            if (this.console) {
                console.log("Animation onBegin at " + (f || new Date().getTime()))
            }
        }
    }
    this.onEnd = d.onEnd;
    this.referenceObj = d.object || this.referenceObj || false;
    this.relative = d.relative || false;
    if (!this.relative) {
        this.relativeX = 0;
        this.relativeY = 0
    } else {
        this.relativeX = this.relativeX || d.relativeX || 0;
        this.relativeY = this.relativeY || d.relativeY || 0
    }
    var c = d;
    var h = c.frames || [];
    this.x1 = c.x1 || c.x || this.x2 || 0;
    this.y1 = c.y1 || c.y || this.y2 || 0;
    this.z1 = c.z1 || c.z || this.z2 || 0;
    this.x2 = c.x2 || c.x || this.x2 || 0;
    this.y2 = c.y2 || c.y || this.y2 || 0;
    this.z2 = c.z2 || c.z || this.z2 || 0;
    this.height1 = c.height1 || c.height || this.height2 || 0;
    this.height2 = c.height2 || c.height || this.height2 || 0;
    this.radius1 = c.radius1 || c.radius || this.radius2 || 0;
    this.radius2 = c.radius2 || c.radius || this.radius2 || 0;
    this.width1 = c.width1 || c.width || this.width2 || 0;
    this.width2 = c.width2 || c.width || this.width2 || 0;
    this.rotation1 = c.rotation1 || c.rotation || this.rotation2 || 0;
    this.rotation2 = c.rotation2 || c.rotation || this.rotation2 || 0;
    this.opacity1 = (typeof c.opacity1 != "undefined") ? c.opacity1: (c.opacity || this.opacity2 || 1);
    this.opacity2 = (typeof c.opacity2 != "undefined") ? c.opacity2: (c.opacity || this.opacity2 || 1);
    this.cycles = c.cycles || 1;
    this.totalFrames = h.length * this.cycles;
    var g = 0,
    j = 0,
    b = 0;
    this.frames = [];
    for (var a = 0; a < this.totalFrames; a++) {
        j = a % h.length;
        this.frames[a] = {
            x: h[j].x || 0,
            y: h[j].y || 0,
            z: h[j].z || 0,
            time: h[j].time || 66,
            image: h[j].image,
            sprite: h[j].sprite || false,
            spriteSize: h[j].spriteSize || false,
            t: g
        };
        g += this.frames[a].time;
        b++
    }
    if (c.time && (c.time > g)) {
        this.cycles = Math.ceil(c.time / g);
        this.totalFrames = h.length * this.cycles;
        for (var a = b; a < this.totalFrames; a++) {
            j = a % h.length;
            this.frames[a] = {
                x: h[j].x || 0,
                y: h[j].y || 0,
                z: h[j].z || 0,
                time: h[j].time || 66,
                image: h[j].image,
                sprite: h[j].sprite || false,
                spriteSize: h[j].spriteSize || false,
                t: g
            };
            g += this.frames[a].time
        }
    }
    this.frames = new gws.classes.way({
        points: this.frames,
        nodeClass: gws.classes.frame
    });
    this.audio = c.audio || false;
    if (this.audio) {
        g = this.audio.getLength()
    }
    g = c.time || g;
    this.delay = c.delay || 0;
    this.startTime = (c.startTime || f || new Date().getTime()) + this.delay;
    this.endTime = c.endTime || this.startTime + g;
    this.time = Math.min(this.endTime - this.startTime, g);
    this.infiniteCycle = c.infiniteCycle || false;
    this.currentFrame.scale = c.scale;
    this.currentFrame.scaleX = c.scaleX;
    this.currentFrame.scaleY = c.scaleY;
    this.currentFrame.offset = (typeof c.offset == "undefined") ? 0.5 : c.offset;
    this.currentFrame.offsetX = (typeof c.offsetX == "undefined") ? this.currentFrame.offset: c.offsetX;
    this.currentFrame.offsetY = (typeof c.offsetY == "undefined") ? this.currentFrame.offset: c.offsetY;
    this.currentFrame.color = c.color;
    this.currentFrame.mirror = c.mirror;
    this.currentFrame.clippingRect = c.clippingRect;
    this.currentFrame.clippingRegion = c.clippingRegion;
    this.destroyOnEnd = c.remove || false;
    this.destroyed = false
};
gws.classes.animation.prototype.update = function(b) {
    this.doNotRender = false;
    this.isDifferent = false;
    this.updated = b || new Date().getTime();
    var c = 0;
    if (this.audio) {
        c = this.audio.getCurrentTime();
        if (c >= this.audio.getDuration()) {
            this.audio = false
        }
    }
    if (((b > this.endTime) && (!this.infiniteCycle)) || this.interrupt) {
        if (this.interrupt) {
            this.interrupt = false
        }
        if (this.nextSequence(b)) {
            return
        }
    }
    if (b >= this.startTime) {
        var a = Math.min(c || (b - this.startTime), this.time);
        var f;
        if (this.infiniteCycle) {
            f = this.frames.destination;
            f = this.frames.getXYZ((b - this.startTime) % (f.t + f.time))
        } else {
            f = this.frames.getXYZ(a)
        }
        var d = a / this.time;
        this.currentFrame.x = (d * (this.x2 - this.x1)) + this.x1 + f.node.x + this.relativeX;
        this.currentFrame.y = (d * (this.y2 - this.y1)) + this.y1 + f.node.y + this.relativeY;
        this.currentFrame.z = (d * (this.z2 - this.z1)) + this.z1 + f.node.z;
        this.currentFrame.imageName = f.node.image;
        this.currentFrame.spriteXY = f.node.sprite;
        this.currentFrame.spriteSize = f.node.spriteSize;
        this.currentFrame.height = (d * (this.height2 - this.height1)) + this.height1;
        this.currentFrame.width = (d * (this.width2 - this.width1)) + this.width1;
        this.currentFrame.radius = (d * (this.radius2 - this.radius1)) + this.radius1;
        this.currentFrame.rotation = (d * (this.rotation2 - this.rotation1)) + this.rotation1;
        this.currentFrame.opacity = (d * (this.opacity2 - this.opacity1)) + this.opacity1;
        if ((this.currentFrame.x != this.lastFrame.x) || (this.currentFrame.y != this.lastFrame.y) || (this.currentFrame.z != this.lastFrame.z) || (this.currentFrame.offset != this.lastFrame.offset) || (this.currentFrame.offsetX != this.lastFrame.offsetX) || (this.currentFrame.offsetY != this.lastFrame.offsetY) || (this.currentFrame.imageName != this.lastFrame.imageName) || (this.currentFrame.spriteXY != this.lastFrame.spriteXY) || (this.currentFrame.height != this.lastFrame.height) || (this.currentFrame.width != this.lastFrame.width) || (this.currentFrame.radius != this.lastFrame.radius) || (this.currentFrame.rotation != this.lastFrame.rotation) || (this.currentFrame.mirror != this.lastFrame.mirror) || (this.currentFrame.opacity != this.lastFrame.opacity)) {
            this.isDifferent = true
        }
        if ((b > this.endTime) && this.infiniteCycle) {
            this.nextSequence(b)
        }
    } else {
        if (!this.referenceObj) {
            this.doNotRender = true
        }
    }
};
gws.classes.animation.prototype.clear = function() {
    if (this.layer && (!this.doNotRender) && (!this.div)) {
        this.layer.clearRectangle(this.lastFrame)
    }
};
gws.classes.animation.prototype.getSpriteSize = function(b) {
    var a = b.split("-");
    if (a.length > 1) {
        a = a[a.length - 1].split(".")[0].split("x");
        if (a.length > 1) {
            return {
                x: a[0],
                y: a[1]
            }
        } else {
            return {
                x: 1,
                y: 1
            }
        }
    } else {
        return {
            x: 1,
            y: 1
        }
    }
};
gws.classes.animation.prototype.render = function() {
    if (this.layer && (!this.destroyed) && (!this.doNotRender)) {
        if (this.div) {
            if (this.isDifferent) {
                if (this.currentFrame.z != this.lastFrame.z) {
                    this.div.style.zIndex = Math.floor(this.currentFrame.z)
                }
                if (this.currentFrame.imageName != this.lastFrame.imageName) {
                    var f = this.currentFrame.assets.images[this.currentFrame.imageName];
                    this.div.style.backgroundImage = "url(" + f.src + ")";
                    this.bgSize = this.currentFrame.spriteSize || this.getSpriteSize(this.currentFrame.imageName);
                    if (!this.height1 && !this.height2) {
                        this.currentFrame.height = ((f.height / this.bgSize.y) / (f.width / this.bgSize.x)) * this.currentFrame.width;
                        this.div.style.height = this.layer.world2windowY(this.currentFrame.height) + "px"
                    }
                    if (!this.width1 && !this.width2) {
                        this.currentFrame.width = ((f.width / this.bgSize.x) / (f.height / this.bgSize.y)) * this.currentFrame.height;
                        this.div.style.width = this.layer.world2windowX(this.currentFrame.width) + "px"
                    }
                    this.div.style.backgroundSize = (this.bgSize.x * 100) + "%";
                    if (DEBUG) {
                        if (!this.currentFrame.assets.images[this.currentFrame.imageName].src) {
                            console.warn(this.currentFrame.imageName)
                        }
                    }
                }
                if ((this.currentFrame.height > 0) && (this.currentFrame.height != this.lastFrame.height)) {
                    this.div.style.height = this.layer.world2windowY(this.currentFrame.height) + "px"
                }
                if ((this.currentFrame.width > 0) && (this.currentFrame.width != this.lastFrame.width)) {
                    this.div.style.width = this.layer.world2windowX(this.currentFrame.width) + "px"
                }
                if (this.currentFrame.spriteXY != this.lastFrame.spriteXY) {
                    var b = 0;
                    var a = 0;
                    if (this.bgSize.x > 1) {
                        b = ((100 * this.currentFrame.spriteXY.x) / (this.bgSize.x - 1))
                    }
                    if (this.bgSize.y > 1) {
                        a = ((100 * this.currentFrame.spriteXY.y) / (this.bgSize.y - 1))
                    }
                    this.div.style.backgroundPosition = b + "% " + a + "%"
                }
                if (this.currentFrame.opacity != this.lastFrame.opacity) {
                    this.div.style.opacity = this.currentFrame.opacity
                }
                if ((this.currentFrame.x != this.lastFrame.x) || (this.currentFrame.y != this.lastFrame.y) || (this.currentFrame.rotation != this.lastFrame.rotation) || (this.currentFrame.mirror != this.lastFrame.mirror)) {
                    var d = "";
                    if (this.currentFrame.mirror == "horizontal") {
                        d = "scale3d(-1,1,1) "
                    }
                    if (this.currentFrame.mirror == "vertical") {
                        d = "scale3d(1,-1,1) "
                    }
                    var j = this.layer.world2windowX(this.currentFrame.x - (this.currentFrame.offsetX * (this.currentFrame.width || this.div.style.width.replace("px", ""))));
                    var h = this.layer.world2windowY(this.currentFrame.y - (this.currentFrame.offsetY * (this.currentFrame.height || this.div.style.height.replace("px", ""))));
                    this.div.style.webkitTransform = "translate3D(" + j + "px," + h + "px,0px)" + d + " rotate(" + (this.currentFrame.rotation || 0) + "rad)";
                    this.div.style.mozTransform = "translate3D(" + j + "px," + h + "px,0px)" + d + " rotate(" + (this.currentFrame.rotation || 0) + "rad)";
                    this.div.style.msTransform = "translate3D(" + j + "px," + h + "px,0px)" + d + " rotate(" + (this.currentFrame.rotation || 0) + "rad)";
                    this.div.style.oTransform = "translate3D(" + j + "px," + h + "px,0px)" + d + " rotate(" + (this.currentFrame.rotation || 0) + "rad)";
                    this.div.style.transform = "translate3D(" + j + "px," + h + "px,0px)" + d + " rotate(" + (this.currentFrame.rotation || 0) + "rad)";
                    if (this.currentFrame.clippingRect) {
                        var c = (this.layer.world2windowX(this.currentFrame.clippingRect.x) - j);
                        var k = (this.layer.world2windowY(this.currentFrame.clippingRect.y) - h);
                        var l = this.layer.world2windowX(this.currentFrame.clippingRect.width) + c;
                        var g = this.layer.world2windowY(this.currentFrame.clippingRect.height) + k;
                        this.div.style.clip = "rect(" + k + "px," + l + "px," + g + "px," + c + "px)"
                    } else {
                        this.div.style.clip = "auto"
                    }
                }
            }
        } else {
            this.layer.drawImage(this.currentFrame)
        }
        this.lastFrame.x = this.currentFrame.x;
        this.lastFrame.y = this.currentFrame.y;
        this.lastFrame.z = this.currentFrame.z;
        this.lastFrame.offsetX = this.currentFrame.offsetX;
        this.lastFrame.offsetY = this.currentFrame.offsetY;
        this.lastFrame.imageName = this.currentFrame.imageName;
        this.lastFrame.spriteXY = this.currentFrame.spriteXY;
        this.lastFrame.height = this.currentFrame.height;
        this.lastFrame.width = this.currentFrame.width;
        this.lastFrame.radius = this.currentFrame.radius;
        this.lastFrame.rotation = this.currentFrame.rotation;
        this.lastFrame.opacity = this.currentFrame.opacity;
        this.lastFrame.mirror = this.currentFrame.mirror
    }
};
gws.classes.animation.prototype.getZIndex = function() {
    return this.currentFrame.z || 0
};
gws.classes = gws.classes || {};
gws.classes.animationManager = function(a, c, b) {
    this.layer = a;
    this.assets = c;
    this.animations = [];
    this.usingDivs = !a.context;
    this.zIndexed = false;
    this.onQuiet = b
};
gws.classes.animationManager.prototype.animate = function(b) {
    var c = false;
    if (b.object) {
        for (var a in this.animations) {
            if (this.animations[a].referenceObj == b.object) {
                if ((!this.animations[a].id && !b.id) || (this.animations[a].id == b.id)) {
                    c = this.animations[a];
                    break
                }
            }
        }
    }
    if (c) {
        if (b.replace) {
            c.replaceSequence([b])
        } else {
            if (b.interrupt) {
                b.interrupt = false;
                c.interruptSequence([b])
            } else {
                c.addSequence(b)
            }
        }
        return c
    } else {
        return this.add(b)
    }
};
gws.classes.animationManager.prototype.addSequence = function(c) {
    var b = this.add(c[0]);
    for (var a = 1; a < c.length; a++) {
        b.addSequence(c[a])
    }
};
gws.classes.animationManager.prototype.animateList = function(b) {
    for (var a = 0; a < b.length; a++) {
        this.animate(b[a])
    }
};
gws.classes.animationManager.prototype.replaceSequence = function(c) {
    c[0].replace = true;
    var b = this.animate(c[0]);
    for (var a = 1; a < c.length; a++) {
        b.addSequence(c[a])
    }
};
gws.classes.animationManager.prototype.interruptSequence = function(c) {
    c[0].interrupt = true;
    var b = this.animate(c[0]);
    for (var a = 1; a < c.length; a++) {
        b.addSequence(c[a])
    }
};
gws.classes.animationManager.prototype.add = function(c) {
    if (c.z || c.z1 || c.z2) {
        this.zIndexed = true
    }
    if (c.relative) {
        var a = this.getAnimationByObject(c.relative);
        if (a) {
            c.relativeX = a.currentFrame.x;
            c.relativeY = a.currentFrame.y
        }
    }
    var b = new gws.classes.animation(c, this.layer, this.assets);
    this.animations.splice(0, 0, b);
    return b
};
gws.classes.animationManager.prototype.remove = function(b) {
    var a = [];
    for (x in this.animations) {
        if (b != this.animations[x]) {
            a.push(this.animations[x])
        } else {
            if (this.usingDivs) {
                this.layer.canvas.removeChild(this.animations[x].div)
            }
        }
    }
    this.animations = a
};
gws.classes.animationManager.prototype.sort = function() {
    this.animations.sort(function(d, c) {
        return d.getZIndex() - c.getZIndex()
    })
};
gws.classes.animationManager.prototype.update = function() {
    var a = true;
    var b = new Date().getTime();
    for (var c in this.animations) {
        if (this.updateAnimation(this.animations[c], b).isDifferent) {
            a = false
        }
    }
    if (a) {
        if (this.onQuiet) {
            this.onQuiet()
        }
        this.onQuiet = false
    }
    return a
};
gws.classes.animationManager.prototype.getAnimationByObject = function(b) {
    var c;
    for (var a in this.animations) {
        c = this.animations[a];
        if (c.referenceObj == b) {
            return c
        }
    }
    return false
};
gws.classes.animationManager.prototype.updateAnimationByObject = function(b, a) {
    var c = this.getAnimationByObject(b);
    if (c) {
        return this.updateAnimation(c, a)
    }
};
gws.classes.animationManager.prototype.updateAnimation = function(c, b) {
    var a;
    if (c.updated != b) {
        if (c.relative) {
            a = this.updateAnimationByObject(c.relative, b);
            if (a) {
                c.relativeX = a.currentFrame.x;
                c.relativeY = a.currentFrame.y
            } else {
                c.relativeX = 0;
                c.relativeY = 0
            }
        }
        c.update(b)
    }
    return c
};
gws.classes.animationManager.prototype.clear = function() {
    for (var a in this.animations) {
        this.animations[a].clear()
    }
};
gws.classes.animationManager.prototype.render = function() {
    var a = [];
    if (this.zIndexed) {
        this.sort()
    }
    for (var b = 0; b < this.animations.length; b++) {
        if (this.animations[b].destroyed) {
            a.push(this.animations[b])
        } else {
            this.animations[b].render()
        }
    }
    for (var b in a) {
        this.remove(a[b])
    }
};
gws.classes.animationManager.prototype.removeObject = function(b, c) {
    for (var a in this.animations) {
        if ((this.animations[a].referenceObj == b) && (c ? (this.animations[a].id == c) : true)) {
            this.animations[a].destroyOnEnd = true
        }
    }
};
gws.classes.animationManager.prototype.removeObjectNow = function(b, c) {
    for (var a in this.animations) {
        if ((this.animations[a].referenceObj == b) && (c ? (this.animations[a].id == c) : true)) {
            this.animations[a].destroyNow = true
        }
    }
};
gws.classes.animationManager.prototype.removeAll = function(b, c) {
    for (var a in this.animations) {
        this.animations[a].clear();
        if (this.usingDivs) {
            this.layer.canvas.removeChild(this.animations[a].div)
        }
    }
    this.animations = []
};
gws.classes = gws.classes || {};
gws.classes.audio = function(a) {
    var b = a || {};
    this.sound = b.sound;
    this.instances = b.instances || 1;
    this.start = b.start || 0;
    this.length = b.length || 0;
    this.end = b.end || (b.start + b.length);
    if (this.end <= this.start) {
        this.end = 0
    }
    if (this.end && !this.length) {
        this.length = this.end - this.start
    }
};
gws.classes.audio.prototype.play = function() {
    try {
        this.sound.currentTime = this.start;
        this.sound.play()
    } catch(a) {}
};
gws.classes.audio.prototype.update = function() {
    if ((this.end && (this.sound.currentTime >= this.end)) || this.sound.ended) {
        this.stop();
        return true
    } else {
        return false
    }
};
gws.classes.audio.prototype.pause = function() {
    try {
        this.sound.pause()
    } catch(a) {}
};
gws.classes.audio.prototype.stop = function() {
    try {
        this.sound.pause()
    } catch(a) {}
};
gws.classes.audio.prototype.getCurrentTime = function() {
    return Math.min(this.length || 999999, Math.max(0, (this.sound.currentTime - this.start))) * 1000
};
gws.classes.audio.prototype.getDuration = function() {
    return (this.end - this.start) * 1000
};
gws.classes.audio.prototype.getLength = function() {
    return this.length * 1000
};
gws.classes.audio.prototype.setVolume = function(a) {
    try {
        this.sound.volume = a
    } catch(b) {}
};
gws.classes = gws.classes || {};
gws.classes.audioManager = function(d) {
    this.time = 0;
    var b = d || {};
    this.musicMuted = b.musicMuted || b.muted || false;
    this.musicMutedByCode = b.musicStartMuted || false;
    this.sfxMuted = b.sfxMuted || b.muted || false;
    this.sfxMutedByCode = b.sfxStartMuted || false;
    this.assets = b.assets || false;
    this.musicOffset = b.musicOffset || false;
    this.offsetTracks = b.offsetTracks || false;
    this.sounds = b.sounds || [];
    this.onPlayMusic = b.onPlayMusic || false;
    this.onMuteMusic = b.onMuteMusic || false;
    this.onPlaySFX = b.onPlaySFX || false;
    this.onMuteSFX = b.onMuteSFX || false;
    this.musicFade = 100;
    this.musicVolume = 100;
    this.delayedSounds = [];
    this.playingSounds = [];
    for (var j in this.assets.sounds) {
        this.sounds[j] = new gws.classes.audio({
            sound: this.assets.getSound(j),
            layer: "sfx",
            manager: this
        })
    }
    this.musicTracks = [];
    this.currentTrack = 0;
    if (b.musicTracks) {
        for (var f in b.musicTracks) {
            this.musicTracks[f] = [];
            for (var c in b.musicTracks[f]) {
                this.musicTracks[f][c] = this.sounds[b.musicTracks[f][c]];
                if (!this.musicTracks[f][c]) {
                    this.musicMutedByCode = true
                }
            }
        }
    } else {
        if (b.musicTrack) {
            this.musicTracks[0] = [this.sounds[b.musicTrack]];
            if (!this.musicTracks[0]) {
                this.musicMutedByCode = true
            }
        }
    }
    var k = this,
    a = function() {
        k.sfxMutedByCode = true;
        k.muteMusic(true);
        k.stop()
    },
    h = function() {
        k.sfxMutedByCode = false;
        k.musicMutedByCode = false
    },
    g = function() {
        if (document.webkitHidden || document.mozHidden || document.msHidden || document.hidden) {
            a()
        } else {
            h()
        }
    };
    window.addEventListener("pagehide", a, false);
    window.addEventListener("pageshow", h, false);
    window.addEventListener("webkitvisibilitychange", g, false);
    window.addEventListener("mozvisibilitychange", g, false);
    window.addEventListener("msvisibilitychange", g, false);
    window.addEventListener("visibilitychange", g, false)
};
gws.classes.audioManager.prototype.addSoundSegment = function(f, b, c, d, a) {
    this.sounds[b] = new gws.classes.audio({
        sound: this.sounds[f].sound,
        start: c,
        length: d,
        end: a,
        layer: "sfx",
        manager: this
    })
};
gws.classes.audioManager.prototype.update = function() {
    if (this.musicFade != this.musicVolume) {
        if (this.musicFade > this.musicVolume) {
            this.musicVolume += 1
        } else {
            this.musicVolume -= 1
        }
        this.musicTracks[0][0].setVolume(this.musicVolume / 100)
    }
    if ((this.musicMuted || this.musicMutedByCode) || !this.musicOffset) {
        this.time = 0
    } else {
        var c = new Date().getTime();
        var d = (c - this.time);
        if (!this.time) {
            this.time = c - this.musicOffset
        }
        if (d >= this.musicOffset) {
            this.time += this.musicOffset;
            if (this.offsetTracks) {
                this.musicTracks[this.currentTrack][Math.floor(Math.random() * this.musicTracks[this.currentTrack].length)].play();
                this.currentTrack = (this.currentTrack + 1) % this.musicTracks.length
            } else {
                for (var f in this.musicTracks) {
                    this.musicTracks[f][Math.floor(Math.random() * this.musicTracks[f].length)].play()
                }
            }
        }
    }
    var a = new Date().getTime();
    for (soundIndex in this.delayedSounds) {
        if (this.delayedSounds[soundIndex].when < a) {
            this.play(this.delayedSounds[soundIndex].sound, 0, this.delayedSounds[soundIndex].override);
            this.delayedSounds.splice(soundIndex, 1);
            break
        }
    }
    if (this.playingSounds.length > 0) {
        var b = [];
        for (soundIndex in this.playingSounds) {
            if (!this.playingSounds[soundIndex].update()) {
                b.push(this.playingSounds[soundIndex])
            }
        }
        this.playingSounds = b
    }
};
gws.classes.audioManager.prototype.muteMusic = function(b) {
    if (b) {
        this.musicMutedByCode = true
    } else {
        this.musicMuted = true;
        if (this.onMuteMusic) {
            this.onMuteMusic()
        }
    }
    for (var c in this.musicTracks) {
        for (var a in this.musicTracks[c]) {
            if (this.musicTracks[c][a]) {
                this.musicTracks[c][a].stop()
            }
        }
    }
};
gws.classes.audioManager.prototype.muteSFX = function() {
    this.sfxMuted = true;
    if (this.onMuteSFX) {
        this.onMuteSFX()
    }
};
gws.classes.audioManager.prototype.playMusic = function() {
    this.musicMuted = false;
    if (this.onPlayMusic) {
        this.onPlayMusic()
    }
};
gws.classes.audioManager.prototype.fadeMusic = function(a) {
    this.musicFade = a
};
gws.classes.audioManager.prototype.playSFX = function() {
    this.sfxMuted = false;
    if (this.onPlaySFX) {
        this.onPlaySFX()
    }
};
gws.classes.audioManager.prototype.toggleMusic = function() {
    if (this.musicMuted) {
        this.playMusic()
    } else {
        this.muteMusic()
    }
};
gws.classes.audioManager.prototype.toggleSFX = function() {
    if (this.sfxMuted) {
        this.playSFX()
    } else {
        this.muteSFX()
    }
};
gws.classes.audioManager.prototype.play = function(d, c, a) {
    var b = (typeof(d) == "string") ? this.sounds[d] : d;
    if (b) {
        if (c) {
            this.delayedSounds.push({
                sound: b,
                when: new Date().getTime() + c,
                override: a || false
            })
        } else {
            if (this.sfxMuted ? false: (a ? true: (this.sfxMutedByCode ? false: true))) {
                if (b.end) {
                    this.stop(b.sound);
                    this.playingSounds.push(b)
                }
                b.play()
            }
        }
    } else {
        if (DEBUG) {
            console.warn("Couldn't play '" + d + "'; it's not a loaded sound.")
        }
    }
};
gws.classes.audioManager.prototype.stop = function(c) {
    if (this.playingSounds.length > 0) {
        var a = [];
        for (var b in this.playingSounds) {
            if (c && (this.playingSounds[b].sound != c)) {
                a.push(this.playingSounds[b])
            } else {
                this.playingSounds[b].stop()
            }
        }
        this.playingSounds = a
    }
};
gws.enableAudio = function(b) {
    var a = b || {},
    d = a.element,
    g = a.audio,
    c = a.onEnd ||
    function() {},
    h = false,
    f = false;
    f = function(l) {
        var k = function() {
            g.removeEventListener("play", k, false);
            g.pause();
            d.removeEventListener("touchstart", f, false);
            c()
        },
        j = function() {
            g.removeEventListener("canplaythrough", j, false);
            if (h) {
                h()
            }
        };
        g.addEventListener("play", k, false);
        g.addEventListener("canplaythrough", j, false);
        try {
            g.play()
        } catch(l) {
            h = function() {
                h = false;
                g.play()
            }
        }
    };
    d.addEventListener("touchstart", f, false)
};
gws.resize = {
    queue: false,
    orientationLock: false,
    onResize: function() {
        for (var a in gws.resize.queue) {
            gws.resize.queue[a].resize()
        }
    },
    orientationChange: function() {
        switch (gws.resize.orientationLock) {
        case "wide":
            gws.body.style.webkitTransition = "all 1s ease-in-out";
            if ((window.orientation + 90) % 180 == 0) {
                gws.body.style.webkitTransformOrigin = "";
                gws.body.style.webkitTransform = ""
            } else {
                if ((window.orientation + 90) > 0) {
                    gws.body.style.webkitTransformOrigin = "50% 50%";
                    gws.body.style.webkitTransform = "rotate(-90deg)"
                } else {
                    gws.body.style.webkitTransformOrigin = "50% 50%";
                    gws.body.style.webkitTransform = "rotate(90deg)"
                }
            }
            break;
        case "tall":
            gws.body.style.webkitTransition = "all 1s ease-in-out";
            if (window.orientation % 180 == 0) {
                gws.body.style.webkitTransformOrigin = "";
                gws.body.style.webkitTransform = ""
            } else {
                if (window.orientation > 0) {
                    gws.body.style.webkitTransformOrigin = "50% 50%";
                    gws.body.style.webkitTransform = "rotate(-90deg)"
                } else {
                    gws.body.style.webkitTransformOrigin = "50% 50%";
                    gws.body.style.webkitTransform = "rotate(90deg)"
                }
            }
            break
        }
        gws.resize.onResize()
    },
    add: function(f, c, d, b) {
        var a = d || 1024;
        var g = b || 320;
        if (!this.queue) {
            this.queue = [];
            window.addEventListener("resize", this.onResize, false);
            window.addEventListener("orientationchange", this.orientationChange, false)
        }
        if (f.resize) {} else {
            if (c) {
                f.ratio = c
            } else {
                f.ratio = f.offsetWidth / f.offsetHeight
            }
            f.resize = function() {
                window.scrollTo(0, 0);
                var k = window.innerWidth;
                var j = window.innerHeight;
                if (k > a) {
                    k = a
                }
                if (j > a / c) {
                    j = a / c
                }
                if (k < g) {
                    k = g
                }
                if (j < g / c) {
                    j = g / c
                }
                var h = k / j;
                if (h > this.ratio) {
                    this.style.height = j + "px";
                    k = j * this.ratio;
                    this.style.width = k + "px"
                } else {
                    this.style.width = k + "px";
                    j = k / this.ratio;
                    this.style.height = j + "px"
                }
                this.style.fontSize = parseInt(k / 100) + "px";
                this.style.marginTop = "-" + parseInt(j / 2) + "px";
                this.style.marginLeft = "-" + parseInt(k / 2) + "px"
            }
        }
        this.queue.push(f);
        this.orientationChange()
    },
    remove: function(b) {
        for (var a in this.queue) {
            if (b == this.queue[a]) {
                this.queue.splice(a, 1)
            }
        }
    }
};
try {
    if (top.location != location) {
        var relocateGame = function() {
            var b = window.location.href;
            var a = b.split("/")[2];
            window.location = "http://gopherwoodstudios.com/w/?g=" + a
        };
        try {
            document.domain = /(\w+)(.\w+)?$/.exec(location.hostname)[0];
            if (parent.document.domain != document.domain) {
                relocateGame()
            }
        } catch(e) {
            relocateGame()
        }
    }
} catch(e) {} (function() {
    var f = navigator.userAgent.toLowerCase(),
    a = (f.search("ipod") > -1),
    l = (f.search("iphone") > -1),
    o = (f.search("ipad") > -1),
    c = (f.search("safari") > -1),
    b = (f.search("msie") > -1),
    d = (f.search("android") > -1),
    m = (f.search("silk") > -1),
    q = (f.search("(khtml, like gecko) u/") > -1),
    k = (f.search("firefox") > -1),
    j = (f.search("chrome") > -1) || (f.search("crios") > -1),
    h = document.createElement("audio"),
    n = document.documentElement,
    g = true,
    p = true;
    if ((h.canPlayType) && !( !! h.canPlayType && "" != h.canPlayType('audio/ogg; codecs="vorbis"'))) {
        g = false;
        if (b || !( !! h.canPlayType && "" != h.canPlayType("audio/mp4"))) {
            p = false
        }
    }
    gws.browserCheck = function() {
        var s = {
            canvas: false,
            mobile: false,
            webgl: false,
            transitions: false,
            progress: false,
            css3dTransforms: false,
            touch: !!("ontouchstart" in window),
            chrome: j,
            iPod: a,
            iPhone: l,
            iPad: o,
            iOS: a || l || o,
            safari: c,
            ie: b,
            android: d,
            silk: m,
            firefox: k,
            conduitTilt: q,
            ogg: g,
            m4a: p
        };
        var r = document.createElement("canvas");
        try {
            s.canvas = !!(r.getContext("2d"))
        } catch(t) {
            s.canvas = !!(r.getContext)
        }
        delete r;
        s.webgl = false;
        if (window.WebGLRenderingContext) {
            try {
                if (document.createElement("canvas").getContext("webgl")) {
                    s.webgl = true
                }
            } catch(t) {}
            try {
                if (document.createElement("canvas").getContext("experimental-webgl")) {
                    s.webgl = true
                }
            } catch(t) {}
        }
        var u = document.createElement("div");
        u.setAttribute("style", "transition:top 1s ease;-webkit-transition:top 1s ease;-moz-transition:top 1s ease;-o-transition:top 1s ease;");
        s.transitions = !!((u.style.transition || u.style.webkitTransition || u.style.MozTransition || u.style.OTransition) && !(document.all));
        delete u;
        if (window.Modernizr) {
            s.css3dTransforms = Modernizr.csstransforms3d
        }
        s.progress = ("position" in document.createElement("progress"));
        s.mobile = s.touch;
        return s
    }
})();
gws.classes.button = function(g, c, f, b) {
    f = f || "";
    c = c || "";
    this.base = gws.createElement(g, "div", c, f);
    this.layers = [];
    for (var a = 0; a < b.length; a++) {
        var h = b[a];
        h.id = h.id || a;
        h.generalStyle = h.generalStyle || "button-default";
        h.specificStyle = h.specificStyle || "";
        h.textStyle = h.textStyle || "";
        this.layers[h.id] = gws.createElement(this.base, "div", h.generalStyle, h.specificStyle);
        if (h.image) {
            var d = h.image;
            d.style.width = "100%";
            d.style.height = "100%";
            this.layers[h.id].appendChild(d)
        }
        if (h.altText) {
            this.layers[h.id].setAttribute("title", h.altText)
        }
        if (h.text) {
            this.layers[h.id].textElement = gws.createTextBlock(this.layers[h.id], "div", h.textStyle, false, h.text)
        }
        if (h.onClickFunction) {
            this.layers[h.id].onclick = h.onClickFunction
        }
        if (h.onMouseOverFunction) {
            this.layers[h.id].onmouseover = h.onMouseOverFunction
        }
        if (h.onMouseOutFunction) {
            this.layers[h.id].onmouseout = h.onMouseOutFunction
        }
    }
    gws.classes.button.prototype.hide = function() {
        this.base.style.display = "none"
    };
    gws.classes.button.prototype.show = function() {
        this.base.style.display = "block"
    };
    gws.classes.button.prototype.hideLayer = function(j) {
        this.layers[j].style.display = "none"
    };
    gws.classes.button.prototype.showLayer = function(j) {
        this.layers[j].style.display = "block"
    };
    gws.classes.button.prototype.setText = function(k, j) {
        if (this.layers[k].textElement) {
            this.layers[k].textElement.innerHTML = j
        } else {
            this.layers[k].textElement = gws.createTextBlock(this.layers[k], "div", false, false, j)
        }
    }
};
gws.draw = {
    boundingbox: function(c, g, b) {
        var j = Math.PI;
        while (b < 0) {
            b += (j * 2)
        }
        var f = Math.cos(b);
        var d = Math.sin(b);
        switch (Math.floor(b / (j / 2)) % 4) {
        case 0:
            return {
                width:
                g * d + c * f,
                height: g * f + c * d
            };
        case 1:
            return {
                width:
                g * d - c * f,
                height: -g * f + c * d
            };
        case 2:
            return {
                width:
                -g * d - c * f,
                height: -g * f - c * d
            };
        case 3:
            return {
                width:
                -g * d + c * f,
                height: g * f - c * d
            }
        }
    },
    clear: function(g) {
        var n = g || {};
        var o = n.context || false;
        var u = n.scale || 1;
        var t = n.scaleX || u;
        var s = n.scaleY || u;
        var f = (typeof n.offset == "undefined") ? 0.5 : n.offset;
        var r = (typeof n.offsetX == "undefined") ? f: n.offsetX;
        var q = (typeof n.offsetY == "undefined") ? f: n.offsetY;
        var j = t * gws.choose(n.lastX, n.x, 0);
        var h = s * gws.choose(n.lastY, n.y, 0);
        var p = gws.choose(n.lastRotation, n.rotate, n.rotation, 0);
        var k = n.lastMirror || n.mirror || false;
        var c = u * gws.choose(n.lastRadius, n.radius, 0);
        var m = gws.choose(n.lastWidth, n.width, c * 2, 0);
        var l = gws.choose(n.lastHeight, n.height, c * 2, 0);
        if (p) {
            var d = this.boundingbox(m, l, p);
            m = d.width;
            l = d.height
        }
        m = m * t + ((p || k) ? 8 : 0);
        l = l * s + ((p || k) ? 8 : 0);
        var b = j - r * m;
        var a = h - q * l;
        if (o) {
            o.clearRect(Math.floor(b), Math.floor(a), Math.ceil(m), Math.ceil(l))
        }
    },
    circle: function(g) {
        var q = g || {};
        var r = q.context || false;
        var C = q.scale || 1;
        var B = q.scaleX || C;
        var A = q.scaleY || C;
        var f = (typeof q.offset == "undefined") ? 0.5 : q.offset;
        var w = (typeof q.offsetX == "undefined") ? f: q.offsetX;
        var v = (typeof q.offsetY == "undefined") ? f: q.offsetY;
        var j = B * (q.x || 0);
        var h = A * (q.y || 0);
        var d = C * (q.radius || 0);
        var o = B * (q.width || d * 2 || 0);
        var m = A * (q.height || d * 2 || 0);
        var t = q.rotate || q.rotation || 0;
        var s = q.color || false;
        var k = q.mirror || false;
        var c = (typeof q.opacity != "undefined") ? q.opacity: 1;
        var u = q.assets || false;
        var z = q.imageName || false;
        var p = q.spriteXY || false;
        if ((!p) && (typeof q.spriteX != "undefined") && (typeof q.spriteY != "undefined")) {
            p = {
                x: q.spriteX,
                y: q.spriteY
            }
        }
        var l = q.image || ((u && z) ? (p ? u.getTile(z, p.x, p.y, o, m) : u.getImage(z, o, m)) : false);
        if (l) {
            if (l.width > l.height) {
                m = o * l.height / l.width
            } else {
                o = m * l.width / l.height
            }
        }
        var b = j - w * o;
        var a = h - v * m;
        if (r) {
            r.save();
            if (t) {
                r.translate(j, h);
                r.rotate(t);
                r.translate( - j, -h)
            }
            if (s) {
                r.fillStyle = s;
                r.beginPath();
                r.arc(b, a, d, 0, 2 * Math.PI, true);
                r.fill()
            }
            r.globalAlpha = c;
            if (l) {
                if (k) {
                    var n = 0;
                    if (k == "horizontal") {
                        n = Math.round(j * 2) / 2;
                        r.translate(n, 0);
                        r.scale( - 1, 1);
                        r.translate( - n, 0)
                    } else {
                        if (k == "vertical") {
                            n = Math.round(h * 2) / 2;
                            r.translate(0, n);
                            r.scale(1, -1);
                            r.translate(0, -n)
                        }
                    }
                }
                r.drawImage(l, 0, 0, l.width, l.height, Math.floor(b), Math.floor(a), Math.ceil(o), Math.ceil(m))
            }
            r.restore()
        }
    },
    rectangle: function(j) {
        var n = 0,
        m = 0,
        M = 0,
        f = 0;
        var D = [];
        var w = j || {};
        var z = w.context || false;
        var N = w.scale || 1;
        var L = w.scaleX || N;
        var K = w.scaleY || N;
        var h = (typeof w.offset == "undefined") ? 0.5 : w.offset;
        var H = (typeof w.offsetX == "undefined") ? h: w.offsetX;
        var F = (typeof w.offsetY == "undefined") ? h: w.offsetY;
        var l = L * (w.x || 0);
        var k = K * (w.y || 0);
        var g = N * (w.radius || 0);
        var u = L * (w.width || g * 2 || 0);
        var q = K * (w.height || g * 2 || 0);
        var s = !!w.clippingRect;
        if (s) {
            n = L * (w.clippingRect.x || 0);
            m = K * (w.clippingRect.y || 0);
            M = L * (w.clippingRect.width || 0);
            f = K * (w.clippingRect.height || 0);
            if ((M <= 0) || (f <= 0)) {
                return
            }
        }
        var r = !!w.clippingRegion;
        if (r) {
            for (var J = 0; J < w.clippingRegion.length; J++) {
                D[J] = [];
                D[J][0] = L * w.clippingRegion[J][0];
                D[J][1] = K * w.clippingRegion[J][1]
            }
        }
        var C = w.rotate || w.rotation || 0;
        var A = w.color || false;
        var o = w.mirror || false;
        var d = (typeof w.opacity != "undefined") ? w.opacity: 1;
        var E = w.assets || false;
        var I = w.imageName || false;
        var v = w.spriteXY || false;
        if ((!v) && (typeof w.spriteX != "undefined") && (typeof w.spriteY != "undefined")) {
            v = {
                x: w.spriteX,
                y: w.spriteY
            }
        }
        var p = w.image || ((E && I) ? (v ? E.getTile(I, v.x, v.y, u, q) : E.getImage(I, u, q)) : false);
        if (!u) {
            w.width = Math.round((p.width / L) * (q / p.height) * 1000) / 1000;
            u = L * w.width;
            p = w.image || ((E && I) ? (v ? E.getTile(I, v.x, v.y, u, q) : E.getImage(I, u, q)) : false)
        }
        if (!q) {
            w.height = Math.round((p.height / K) * (u / p.width) * 1000) / 1000;
            q = K * w.height;
            p = w.image || ((E && I) ? (v ? E.getTile(I, v.x, v.y, u, q) : E.getImage(I, u, q)) : false)
        }
        var b = l - H * u;
        var a = k - F * q;
        if (z) {
            z.save();
            if (s) {
                z.beginPath();
                z.rect(n, m, M, f);
                z.closePath();
                z.clip()
            }
            if (r) {
                z.beginPath();
                for (var B = 0; B < D.length; B++) {
                    if (B == 0) {
                        z.moveTo(D[B][0], D[B][1])
                    } else {
                        z.lineTo(D[B][0], D[B][1])
                    }
                }
                z.closePath();
                z.clip()
            }
            if (C) {
                z.translate(l, k);
                z.rotate(C);
                z.translate( - l, -k)
            }
            if (A) {
                z.beginPath();
                z.fillStyle = A;
                z.rect(Math.floor(b), Math.floor(a), Math.ceil(u), Math.ceil(q));
                z.fill()
            }
            z.globalAlpha = d;
            if (p) {
                if (o) {
                    var t = 0;
                    if (o == "horizontal") {
                        t = Math.round(l * 2) / 2;
                        z.translate(t, 0);
                        z.scale( - 1, 1);
                        z.translate( - t, 0)
                    } else {
                        if (o == "vertical") {
                            t = Math.round(k * 2) / 2;
                            z.translate(0, t);
                            z.scale(1, -1);
                            z.translate(0, -t)
                        }
                    }
                }
                try {
                    z.drawImage(p, 0, 0, p.naturalWidth || p.width, p.naturalHeight || p.height, Math.floor(b), Math.floor(a), Math.ceil(u), Math.ceil(q))
                } catch(G) {
                    if (DEBUG) {
                        console.log("Could not draw ", p)
                    }
                }
            }
            z.restore()
        }
    },
    image: function(a) {
        this.rectangle(a)
    },
    text: function(m) {
        var w = m || {};
        var z = w.context || false;
        var I = w.scale || 1;
        var G = w.scaleX || I;
        var F = w.scaleY || I;
        var j = (typeof w.offset == "undefined") ? 0.5 : w.offset;
        var E = (typeof w.offsetX == "undefined") ? j: w.offsetX;
        var C = (typeof w.offsetY == "undefined") ? j: w.offsetY;
        var o = G * (w.x || 0);
        var n = F * (w.y || 0);
        var g = I * (w.radius || 0);
        var v = G * (w.width || g * 2 || 0);
        var u = F * (w.height || g * 2 || 0);
        var B = w.rotate || w.rotation || 0;
        var l = w.fillStyle || w.color || "#000000";
        var A = w.strokeStyle || w.color || "#000000";
        var r = w.mirror || false;
        var f = w.opacity || 1;
        var a = w.lineWidth || w.border || false;
        var k = w.lineJoin || "round";
        var H = w.lineCap || "butt";
        var t = w.baseline || "middle";
        var h = w.textAlign || "center";
        var s = (w.fontSize || "1em") + " " + (w.font || '"Arial"');
        var q = w.text || false;
        var d = o - E * v;
        var c = n - C * u;
        if (z && q) {
            z.save();
            if (B) {
                z.translate(o, n);
                z.rotate(B);
                z.translate( - o, -n)
            }
            z.globalAlpha = f;
            z.textBaseline = t;
            z.textAlign = h;
            z.font = s;
            z.fillStyle = l;
            z.strokeStyle = A;
            if (a) {
                z.lineWidth = a;
                z.lineJoin = k;
                z.lineCap = H
            }
            if (r) {
                if (r == "horizontal") {
                    z.translate(d, 0);
                    z.scale( - 1, 1)
                } else {
                    if (r == "vertical") {
                        z.translate(0, c);
                        z.scale(1, -1)
                    }
                }
            }
            try {
                if (u) {
                    var b = q.split("\n");
                    c -= ((b.length - 1) * u) / 2;
                    for (var p in b) {
                        if (a) {
                            z.strokeText(b[p], d, c)
                        }
                        z.fillText(b[p], d, c);
                        n += u
                    }
                } else {
                    if (a) {
                        z.strokeText(q, d, c)
                    }
                    z.fillText(q, d, c)
                }
            } catch(D) {}
            z.restore()
        }
    }
};
try {
    if (!window.console) {
        window.console = {
            log: function(d, c) {},
            error: function(d, c) {},
            warn: function(d, c) {},
            info: function(d, c) {}
        }
    }
} catch(e) {}
gws.zeroify = function(a) {
    if (isNaN(a)) {
        return 0
    } else {
        return (a) ? ( + a) : 0
    }
};
gws.copyObject = function(a) {
    return JSON.parse(JSON.stringify(a))
};
gws.polarToCartesian = function(d) {
    var b = d || {
        m: 0,
        a: 0
    };
    var a = b.m * Math.cos(b.a);
    var c = b.m * Math.sin(b.a);
    return {
        x: a,
        y: c
    }
};
gws.cartesianToPolar = function(f) {
    var d = f || {
        x: 0,
        y: 0
    };
    var b = Math.sqrt(Math.pow(d.x, 2) + Math.pow(d.y, 2));
    var c = 0;
    if (b != 0) {
        c = Math.acos(d.x / b);
        if (d.y < 0) {
            c = (Math.PI * 2) - c
        }
    }
    return {
        m: b,
        a: c
    }
};
gws.getDistance = function(b, a) {
    return gws.cartesianToPolar({
        x: b.x - a.x,
        y: b.y - a.y
    }).m
};
gws.choose = function(h, g, m, l, k, j) {
    if (typeof h != "undefined") {
        return h
    }
    if (typeof g != "undefined") {
        return g
    }
    if (typeof m != "undefined") {
        return m
    }
    if (typeof l != "undefined") {
        return l
    }
    if (typeof k != "undefined") {
        return k
    }
    if (typeof j != "undefined") {
        return j
    }
};
function getLocationSearch(a) {
    return (location.search.substring(location.search.indexOf(a + "=") + a.length + 1) + "& ").split("&")[0]
}
gws.createElement = function(d, a, c, f) {
    var b = document.createElement(a);
    c ? b.className = c: false;
    f ? b.id = f: false;
    d ? d.appendChild(b) : false;
    return b
};
gws.createImage = function(f, a, d, h, b, g) {
    var c = gws.createElement(f, a, d, h);
    c.src = b;
    if (g) {
        c.setAttribute("alt", g)
    }
    return c
};
gws.createTextBlock = function(d, a, c, h, g, f) {
    var b = gws.createElement(d, a, c, h);
    b.innerHTML = g;
    if (f) {
        b.setAttribute("title", f)
    }
    return b
};
gws.classes.layer = function(d, c, b, a, f) {
    this.parent = d;
    this.container = d.element;
    this.assets = d.assets;
    if (f) {
        this.canvas = gws.createElement(this.container, "div", c || "map-layer");
        this.context = false
    } else {
        this.canvas = gws.createElement(this.container, "canvas", c || "map-layer");
        this.context = this.canvas.getContext("2d")
    }
    this.animator = new gws.classes.animationManager(this, this.assets);
    this.clear = true;
    this.setResolution = function(g) {
        this.resolution = g;
        this.canvas.width = this.canvas.offsetWidth / g;
        this.canvas.height = this.canvas.offsetHeight / g;
        this.clear = true;
        this.isUpdated = false
    };
    this.getResolution = function() {
        return this.resolution
    };
    this.setResolution(1 / (window.devicePixelRatio || 1));
    this.resize = function() {
        this.setResolution(this.resolution)
    };
    this.width = b || this.parent.width;
    this.height = a || this.parent.height
};
gws.classes.layer.prototype.update = function() {
    this.isUpdated = this.animator.update()
};
gws.classes.layer.prototype.render = function() {
    if (!this.isUpdated) {
        this.animator.clear();
        this.animator.render();
        this.isUpdated = true
    }
};
gws.classes.layer.prototype.world2windowX = function(a) {
    return a * this.canvas.width / this.width
};
gws.classes.layer.prototype.world2windowY = function(a) {
    return a * this.canvas.height / this.height
};
gws.classes.layer.prototype.window2worldX = function(a) {
    return a * this.width / this.canvas.width
};
gws.classes.layer.prototype.window2worldY = function(a) {
    return a * this.height / this.canvas.height
};
gws.classes.layer.prototype.clearAll = function() {
    var a = {
        x: 0,
        y: 0,
        offset: 0,
        width: this.width,
        height: this.height
    };
    return this.clearRectangle(a)
};
gws.classes.layer.prototype.clearRectangle = function(a) {
    a.scaleX = this.world2windowX(1);
    a.scaleY = this.world2windowY(1);
    a.context = this.context;
    return gws.draw.clear(a)
};
gws.classes.layer.prototype.drawCircle = function(a) {
    a.scale = this.world2windowX(1);
    a.context = this.context;
    a.assets = this.assets;
    return gws.draw.circle(a)
};
gws.classes.layer.prototype.drawRectangle = function(a) {
    a.scaleX = this.world2windowX(1);
    a.scaleY = this.world2windowY(1);
    a.context = this.context;
    a.assets = this.assets;
    return gws.draw.rectangle(a)
};
gws.classes.layer.prototype.drawImage = function(a) {
    return this.drawRectangle(a)
};
gws.classes.layer.prototype.drawText = function(a) {
    a.scaleX = this.world2windowX(1);
    a.scaleY = this.world2windowY(1);
    a.context = this.context;
    return gws.draw.text(a)
};
gws.classes.layer.prototype.destroy = function() {
    this.container.removeChild(this.canvas);
    this.animator = undefined
};
gws.storage = new
function() {};
gws.storage.get = function(b) {
    try {
        if (window.localStorage.getItem(b)) {
            return window.localStorage.getItem(b)
        } else {
            return false
        }
    } catch(a) {
        return false
    }
};
gws.storage.set = function(c, a) {
    gws.storage.remove(c);
    try {
        window.localStorage.setItem(c, a)
    } catch(b) {}
};
gws.storage.remove = function(b) {
    try {
        window.localStorage.removeItem(b)
    } catch(a) {}
};
gws.storage.getObject = function(c) {
    var b = gws.storage.get(c);
    if (b) {
        try {
            return JSON.parse(b)
        } catch(a) {
            return false
        }
    } else {
        return false
    }
};
gws.storage.setObject = function(c, b) {
    try {
        gws.storage.set(c, JSON.stringify(b))
    } catch(a) {}
};
gws.loop = {
    stepperTimeSpan: 30,
    lastTime: 0,
    renders: [],
    animation: function() {
        gws.loop.update(new Date().getTime());
        gws.loop.render();
        window.requestAnimFrame(gws.loop.animation)
    },
    last: 0,
    addRender: function(a) {
        this.renders.push(a);
        return a
    },
    removeRender: function(b) {
        for (var a in this.renders) {
            if (b == this.renders[a]) {
                this.renders.splice(a, 1)
            }
        }
    },
    render: function() {
        for (var a in this.renders) {
            this.renders[a].render()
        }
    },
    updates: [],
    addUpdate: function(a) {
        this.updates.splice(0, 0, a);
        return a
    },
    removeUpdate: function(a) {
        for (x in this.updates) {
            if (a == this.updates[x]) {
                this.updates.splice(x, 1)
            }
        }
    },
    update: function(b) {
        var a = b - this.lastTime;
        var c = Math.floor(a / this.stepperTimeSpan);
        this.lastTime += (this.stepperTimeSpan * c);
        if (c > 1) {
            c = 1
        }
        for (var d = 0; d < c; d++) {
            for (x in this.updates) {
                this.updates[x].update(b)
            }
            for (x in this.renders) {
                this.renders[x].update(b)
            }
        }
    },
    start: function() {
        this.animation();
        self = this;
        setInterval(function() {
            var b = new Date().getTime();
            var a = b - self.lastTime;
            if (a > 1000) {
                self.update(b)
            }
        },
        1000)
    }
};
window.requestAnimFrame = (function() {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
    function(b, a) {
        window.setTimeout(b, 30)
    }
})();
gws.classes = gws.classes || {};
gws.classes.mapNode = function(a) {
    this.contains = a.contains || false;
    this.edges = []
};
gws.classes.mapNode.prototype.update = function() {
    return false
};
gws.classes.mapNode.prototype.setState = function(a) {};
gws.classes.mapNode.prototype.getState = function() {
    return false
};
gws.classes.mapNode.prototype.setEdge = function(a, b) {
    this.edges[a] = b
};
gws.classes.mapNode.prototype.getEdge = function(a) {
    return this.edges[a]
};
gws.classes.mapEdge = function() {
    this.nodes = [false, false]
};
gws.classes.mapEdge.prototype.update = function() {
    return false
};
gws.classes.mapEdge.prototype.setState = function(a) {};
gws.classes.mapEdge.prototype.getState = function() {
    return false
};
gws.classes.mapEdge.prototype.setNode = function(a) {
    if (!this.nodes[0]) {
        this.nodes[0] = a
    } else {
        this.nodes[1] = a
    }
};
gws.classes.mapEdge.prototype.getNode = function(a) {
    if (a == this.nodes[0]) {
        return this.nodes[1]
    } else {
        return this.nodes[0]
    }
};
gws.classes.map = function(k) {
    var b = k || {};
    this.mapType = b.mapType || "grid";
    this.nodeClass = b.nodeClass || gws.classes.mapNode;
    this.edgeClass = b.edgeClass || gws.classes.mapEdge;
    this.manager = b.manager || false;
    this.onStateChange = b.onStateChange ||
    function() {};
    this.nodes = [];
    this.edges = [];
    this.grid = false;
    switch (this.mapType) {
    case "grid":
        this.grid = b.structure || [[{},
        {}], [{},
        {}]];
        for (var j in this.grid) {
            for (var h in this.grid[j]) {
                this.grid[j][h] = new this.nodeClass(this.grid[j][h]);
                this.grid[j][h].x = j;
                this.grid[j][h].y = h;
                this.addNode(this.grid[j][h])
            }
        }
        var a = +j + 1;
        var m = +h + 1;
        var c, l, f, d;
        for (var j in this.grid) {
            for (var h in this.grid[j]) {
                l = [ + h > 0, +j < a - 1, +h < m - 1, +j > 0];
                f = [ + j, +j + 1, +j, +j - 1];
                d = [ + h - 1, +h, +h + 1, +h];
                for (var g = 0; g < 4; g++) {
                    c = false;
                    if (l[g]) {
                        c = this.grid[f[g]][d[g]].getEdge(( + g + 2) % 4)
                    }
                    if (!c) {
                        c = new this.edgeClass();
                        this.addEdge(c)
                    }
                    c.setNode(this.grid[j][h]);
                    this.grid[j][h].setEdge( + g, c)
                }
            }
        }
        break;
    case "line":
        this.line = b.structure || [{},
        {}];
        for (var j in this.line) {
            this.line[j] = new this.nodeClass(this.line[j]);
            this.addNode(this.line[j]);
            c = false;
            if (( + j - 1) >= 0) {
                c = new this.edgeClass();
                this.addEdge(c);
                c.setNode(this.line[j - 1]);
                c.setNode(this.line[j]);
                this.line[j - 1].setEdge(1, c);
                this.line[j].setEdge(0, c)
            }
        }
        break
    }
    this.onStateChange()
};
gws.classes.map.prototype.addNode = function(a) {
    this.nodes.push(a);
    return a
};
gws.classes.map.prototype.removeNode = function(a) {
    for (var b in this.nodes) {
        if (a == this.nodes[b]) {
            this.nodes.splice(b, 1)
        }
    }
};
gws.classes.map.prototype.addEdge = function(a) {
    this.edges.splice(0, 0, a);
    return a
};
gws.classes.map.prototype.removeEdge = function(a) {
    for (var b in this.edges) {
        if (a == this.edges[b]) {
            this.edges.splice(b, 1)
        }
    }
};
gws.classes.map.prototype.update = function(a) {
    var c = false;
    for (var d in this.nodes) {
        c = this.nodes[d].update() || c
    }
    for (var b in this.edges) {
        c = this.edges[b].update() || c
    }
    if (c) {
        this.onStateChange()
    }
    return c
};
gws.classes.map.prototype.getState = function() {
    var a = {
        nodes: [],
        edges: []
    };
    for (var c in this.nodes) {
        a.nodes[c] = this.nodes[c].getState()
    }
    for (var b in this.edges) {
        a.edges[b] = this.edges[b].getState()
    }
    return a
};
gws.classes.map.prototype.setState = function(a) {
    var c = false;
    if (a.nodes) {
        for (var d in a.nodes) {
            if (this.nodes[d]) {
                c = c || this.nodes[d].setState(a.nodes[d])
            }
        }
    }
    if (a.edges) {
        for (var b in a.edges) {
            if (this.edges[b]) {
                c = c || this.edges[b].setState(a.edges[b])
            }
        }
    }
    if (c) {
        this.onStateChange()
    }
    return c
};
gws.classes = gws.classes || {};
gws.classes.progressBar = function(b, a) {
    this.parent = b;
    this.onLoaded = a;
    this.barElement = document.createElement("progress");
    this.parent.appendChild(this.barElement);
    this.barElement.setAttribute("value", 0);
    this.barElement.setAttribute("max", 1000);
    this.ratio = 0;
    this.update = function(c) {
        this.ratio = c
    };
    this.render = function() {
        this.barElement.setAttribute("value", this.ratio * 1000);
        if (this.ratio == 1) {
            if (this.onLoaded) {
                this.onLoaded()
            }
        }
    }
};
gws.classes = gws.classes || {};
gws.classes.waypoint = function(b) {
    var a = b || {};
    this.edges = [];
    this.t = a.t;
    this.x = a.x;
    this.y = a.y;
    this.z = a.z
};
gws.classes.waypoint.prototype.setEdge = function(a, b) {
    this.edges[a] = b
};
gws.classes.waypoint.prototype.getEdge = function(a) {
    return this.edges[a]
};
gws.classes.waypoint.prototype.getNode = function(b) {
    var a = this.getEdge(b);
    if (a) {
        return a.getNode(this)
    } else {
        return false
    }
};
gws.classes.way = function(d) {
    var g = d || {};
    var a;
    var j = ((typeof g.points[0]["t"]) != "undefined");
    if (!j) {
        var h = [];
        var b = 0;
        var c = 100 / (g.points.length - 1);
        for (var f in g.points) {
            h.push({
                x: g.points[f][0],
                y: g.points[f][1],
                t: b
            });
            b += c
        }
        a = h
    } else {
        a = g.points
    }
    a.sort(function(m, l) {
        return m.t - l.t
    });
    var k = {
        mapType: "line",
        structure: a,
        nodeClass: g.nodeClass || gws.classes.waypoint
    };
    this.path = new gws.classes.map(k);
    this.origin = this.path.nodes[0];
    this.destination = this.path.nodes[this.path.nodes.length - 1]
};
gws.classes.way.prototype.getXYZ = function(k, b) {
    var c = b || this.origin;
    if ((c.t >= k) || (!c.getNode(1))) {
        return {
            x: c.x,
            y: c.y,
            z: c.z,
            t: k,
            node: c
        }
    } else {
        nextNode = c.getNode(1);
        if (nextNode.t <= k) {
            return this.getXYZ(k, nextNode)
        } else {
            var d = (k - c.t);
            var a = (nextNode.t - c.t);
            var f = d / a;
            var j = (f * (nextNode.x - c.x)) + c.x;
            var h = (f * (nextNode.y - c.y)) + c.y;
            var g = (f * (nextNode.z - c.z)) + c.z;
            return {
                x: j,
                y: h,
                z: g,
                t: k,
                node: c
            }
        }
    }
};
gws.classes.way.prototype.getStraightXYZ = function(n, b, l) {
    var k, h;
    if (typeof b != "undefined") {
        k = this.getXYZ(b)
    } else {
        k = this.origin
    }
    if (typeof l != "undefined") {
        h = this.getXYZ(l)
    } else {
        h = this.destination
    }
    if (k.t > h.t) {
        var m = k;
        k = h;
        h = m
    }
    if (k.t >= n) {
        return {
            x: k.x,
            y: k.y,
            z: k.z
        }
    } else {
        if (h.t <= n) {
            return {
                x: h.x,
                y: h.y,
                z: h.z
            }
        } else {
            var c = (n - k.t);
            var a = (h.t - k.t);
            var d = c / a;
            var j = (d * (h.x - k.x)) + k.x;
            var g = (d * (h.y - k.y)) + k.y;
            var f = (d * (h.z - k.z)) + k.z;
            return {
                x: j,
                y: g,
                z: f
            }
        }
    }
};
gws.classes = gws.classes || {};
gws.classes.account = function(a) {
    this.expansions = 0;
    if (a) {
        this.onLogOn = a.onLogOn;
        this.onLogOff = a.onLogOff
    }
};
gws.classes.account.prototype.signOut = function() {
    loggedIn = 0;
    if (this.onLogOff) {
        this.onLogOff()
    }
};
gws.classes.account.prototype.setFreeDay = function(callback) {
    var self = this;
    gws.client.setFreeDay(function(obj) {
        try {
            user = eval("(" + obj + ")");
            if (user.freeTime) {
                self.freeTime = Math.max(0, +user.freeTime)
            } else {
                self.freeTime = undefined
            }
        } catch(e) {}
        if (callback) {
            callback(self.freeTime)
        }
    })
};
var lastLoggedIn = gws.storage.get("lastLoggedIn");
var playerName = gws.storage.get("playerName");
if (!playerName) {
    playerName = "Anonymous Local User"
}
var loggedIn = 0;
function signinToggle() {
    if (loggedIn) {
        doThisAfterSignIn = displayName;
        var a = popupManager.createPopupOpener({
            opEndpoint: "engine?logout=1",
            returnToUrl: "close",
            onCloseHandler: function() {
                gws.account.signOut()
            },
            shouldEncodeUrls: true
        });
        a.popup(512, 384)
    } else {
        doThisAfterSignIn = displayName;
        var a = popupManager.createPopupOpener({
            opEndpoint: "verify",
            returnToUrl: "verify",
            onCloseHandler: signIn,
            shouldEncodeUrls: true
        });
        a.popup(512, 384)
    }
}
var iSignInCounter = 0;
var doThisAfterSignIn;
function signIn() {
    gws.client.getUser(function(a) {
        gws.account.signedIn(a)
    });
    iSignInCounter++
}
gws.classes.account.prototype.signedIn = function(obj) {
    if (obj != "offline") {
        var user;
        try {
            user = eval("(" + obj + ")")
        } catch(e) {
            if (iSignInCounter > 3) {
                iSignInCounter = 0;
                doThisAfterSignIn(false)
            } else {
                setTimeout("signIn();", 1000)
            }
            return
        }
        lastLoggedIn = user.id;
        gws.storage.set("lastLoggedIn", lastLoggedIn);
        playerName = gws.lang.getName(0, user.name1) + " " + gws.lang.getName(1, user.name2) + " " + gws.lang.getName(2, user.name3);
        gws.storage.set("playerName", playerName);
        loggedIn = user.id;
        this.expansions = user.expansions;
        if (user.freeTime) {
            self.freeTime = Math.max(0, +user.freeTime)
        } else {
            self.freeTime = undefined
        }
        gws.storage.set("expansions", this.expansions);
        if ( + user.newAccount) {
            showDialog(DIALOG_NAME_PICKER);
            createSelectors()
        } else {
            doThisAfterSignIn(true)
        }
        gws.mainMenu.refresh();
        if (this.onLogOn) {
            this.onLogOn()
        }
    } else {
        doThisAfterSignIn(false)
    }
};
function checkLogin() {
    if (loggedIn) {
        submitScore()
    } else {
        doThisAfterSignIn = displayNameScore;
        var a = popupManager.createPopupOpener({
            opEndpoint: "verify",
            returnToUrl: "verify",
            onCloseHandler: signIn,
            shouldEncodeUrls: true
        });
        a.popup(512, 384)
    }
}
function checkLoginForPurchase() {
    if (loggedIn) {
        connectPurchaseToAccount(true)
    } else {
        doThisAfterSignIn = connectPurchaseToAccount;
        var a = popupManager.createPopupOpener({
            opEndpoint: "verify",
            returnToUrl: "verify",
            onCloseHandler: signIn,
            shouldEncodeUrls: true
        });
        a.popup(512, 384)
    }
}
function checkLoginForExpansionMenu() {
    if (loggedIn) {
        showExpansionMenu(true)
    } else {
        doThisAfterSignIn = showExpansionMenu;
        var a = popupManager.createPopupOpener({
            opEndpoint: "verify",
            returnToUrl: "verify",
            onCloseHandler: signIn,
            shouldEncodeUrls: true
        });
        a.popup(512, 384)
    }
}
gws.ads = function() {
    var c = [];
    var a = [];
    c[0] = {
        id: "SakE",
        show: "exp-1",
        count: 6,
        link: "javascript:showExpansionMenu(); if (pageTracker) pageTracker._trackPageview('/entanglement-purchase-sakE');",
        ad: gws.lang.NEW_MAPS,
        className: "ad-big-ad ad-sakura"
    };
    c[1] = {
        id: "SakG",
        show: "exp-1",
        count: 6,
        link: "javascript:showExpansionMenu(); if (pageTracker) pageTracker._trackPageview('/entanglement-purchase-sakG');",
        ad: gws.lang.TRY_OUT_SAKURA,
        className: "ad-big-ad ad-sakura"
    };
    a[0] = {
        id: "iosA",
        show: "non-app",
        count: 6,
        link: "http://blog.gopherwoodstudios.com/p/entanglement-on-iphone-and-ipad.html",
        ad: gws.lang.NOW_ON_IOS,
        className: "ad-big-ad ad-ios"
    };
    var j = [{
        id: "Chro",
        show: "non-app",
        count: 4,
        link: "https://chrome.google.com/webstore/detail/aciahcmjmecflokailenpkdchphgkefd",
        ad: gws.lang.INSTALL_FOR_OFFLINE + " <img id='webstore-image' src='i/chrome-web-store.png' alt='" + gws.lang.AVAILABLE_CWS + "' />",
        className: "ad-text"
    },
    {
        id: "FTG",
        show: "all",
        count: 6,
        link: false,
        ad: "<div id='social-text'>" + gws.lang.FOLLOW_US + "</div><a href='http://www.facebook.com/pages/Gopherwood-Studios/237949546250' target='_blank'><img class='social-image' src='i/ad-fb.png' alt='" + gws.lang.FOLLOW_FACEBOOK + "' /></a><a href='http://twitter.com/#!/Gopherwood' target='_blank'><img class='social-image' src='i/ad-tw.png' alt='" + gws.lang.FOLLOW_TWITTER + "'  /></a><a href='https://plus.google.com/114621611441562099714/' target='_blank'><img class='social-image' src='https://ssl.gstatic.com/images/icons/gplus-64.png'/></a>",
        className: "ad-text"
    },
    a[0], {
        id: "music",
        show: "music",
        count: 4,
        link: "http://blog.gopherwoodstudios.com/2011/02/entanglement-soundtrack-by-omni-audio.html",
        ad: gws.lang.GET_THE_SOUNDTRACK,
        className: "ad-text"
    },
    {
        id: "appar",
        show: "all",
        count: 4,
        link: "http://www.cafepress.com/gopherwoodstudios",
        ad: "<div style='text-align: center;'><img class='tshirt-image' src='i/ad-t.png' alt='Gopherwood Studios Apparel' /><br />" + gws.lang.NEW + " Entanglement T-shirts</div>",
        className: "ad-text"
    },
    c[0], c[1]];
    this.iAdTimer = 0;
    this.ads = gws.storage.get("ads");
    if (!this.ads) {
        this.ads = []
    } else {
        try {
            this.ads = JSON.parse(this.ads)
        } catch(g) {
            this.ads = []
        }
    }
    var b, f;
    for (var d in this.ads) {
        b = true;
        for (var h in j) {
            if (j[h].id == this.ads[d].id) {
                b = false
            }
        }
        if (b) {
            this.ads.splice( + d, 1)
        }
    }
    for (var h in j) {
        f = true;
        for (var d in this.ads) {
            if (j[h].id == this.ads[d].id) {
                f = false
            }
        }
        if (f) {
            this.ads.splice(0, 0, j[h])
        }
    }
    gws.storage.set("ads", JSON.stringify(this.ads));
    this.currentAd = false;
    this.show = function() {
        if (! (gws.browser.mobile || gws.browser.buongiorno)) {
            var k = new Date().getTime();
            if (k < (this.iAdTimer + 600000)) {} else {
                this.adSequence(this.nextAd);
                this.iAdTimer = k
            }
        }
    };
    this.nextAd = 0;
    this.adSequence = function(l) {
        if (l < this.ads.length) {
            this.currentAd = this.ads[l];
            this.nextAd = l + 1;
            var m = true;
            if (this.currentAd.count < 1) {
                m = false
            }
            if (this.currentAd.show == "non-app") {
                if (window.chrome) {
                    if (window.chrome.app.isInstalled) {
                        m = false
                    }
                }
            }
            if (this.currentAd.show == "exp-1") {
                if (gws.account.expansions) {
                    m = false
                }
            }
            if (m) {
                var n = document.createElement("div");
                if (this.currentAd.link) {
                    var k = ' target="_blank"';
                    if (this.currentAd.link.substring(0, 10) == "javascript") {
                        k = ""
                    }
                    if (this.currentAd.className) {
                        k += ' class="' + this.currentAd.className + '"'
                    }
                    n.innerHTML = "<a" + k + ' href="' + this.currentAd.link + '"><span>' + this.currentAd.ad + "</span></a>";
                    showSubtleMessage(n, 0, gws.ads.hideCurrentAd)
                } else {
                    n.innerHTML = this.currentAd.ad;
                    showSubtleMessage(n, 0, gws.ads.hideCurrentAd)
                }
                if (pageTracker) {
                    pageTracker._trackPageview("/entanglement-ad-" + this.currentAd.id)
                }
            } else {
                this.adSequence( + l + 1)
            }
        } else {
            hideSubtleMessage()
        }
    };
    this.adSequenceRenew = function(k) {
        hideSubtleMessage();
        if (k < this.ads.length) {
            this.adTimeout = setTimeout(function() {
                gws.ads.adSequence(k)
            },
            7000)
        }
    };
    this.hideCurrentAd = function() {
        clearTimeout(this.adTimeout);
        if (this.currentAd) {
            this.currentAd.count -= 1;
            if (pageTracker) {
                pageTracker._trackPageview("/entanglement-ad-" + this.currentAd.id + "-hide")
            }
            gws.storage.set("ads", JSON.stringify(this.ads))
        }
    }
};
beginGame = (function() {
    var gameIsOffline = false,
    numberOfPlayers = 0,
    storedGames = {},
    loadStoredGame = function(gameType, playerCount) {
        var returnGame = false;
        var games = storedGames["game" + gameType] = storedGames["game" + gameType] || gws.storage.getObject("Entanglement-Game-" + gameType) || [];
        var repopulateGameArray = 0;
        if (games && (games.length > 0)) {
            returnGame = games.splice(0, 1)[0];
            gws.storage.setObject("Entanglement-Game-" + gameType, games);
            repopulateGameArray = Math.min(50 - games.length, 5);
            loadGame(returnGame, playerCount)
        } else {
            repopulateGameArray = 5
        }
        gws.client.getGame(gameType, repopulateGameArray,
        function(obj) {
            var newGames = false;
            try {
                newGames = eval("(" + obj + ")")
            } catch(e) {}
            if ((obj != "offline") && newGames) {
                games = games.concat(newGames);
                if (!returnGame) {
                    returnGame = games.splice(0, 1)[0];
                    loadGame(returnGame, playerCount)
                }
                gws.storage.setObject("Entanglement-Game-" + gameType, games)
            } else {
                if (!returnGame) {
                    loadGame("offline", playerCount)
                }
            }
        })
    },
    loadGame = function(obj, playerCount) {
        numberOfPlayers = playerCount || numberOfPlayers;
        if (obj == "gws.lang.ERROR_NOT_LOGGED_IN") {
            currentGame = false
        } else {
            if ((obj == "offline") || gameIsOffline) {
                gameIsOffline = true;
                currentGame = gws.createLocalGame("map2", numberOfPlayers || +currentGameType - 1)
            } else {
                if (obj.id) {
                    currentGame = obj
                } else {
                    try {
                        currentGame = eval("(" + obj + ")")[0]
                    } catch(e) {
                        if (!gws.browser.buongiorno) {
                            gameIsOffline = true
                        }
                        currentGame = gws.createLocalGame("map2", numberOfPlayers || +currentGameType - 1)
                    }
                }
            }
        }
        if (currentGame) {
            if (typeof currentGame.map == "string") {
                currentGame = gws.loadGame(currentGame, numberOfPlayers || currentGame.players)
            }
            if (currentGame.players) {
                if (currentGame.players.length == 1) {
                    if (gameIsOffline) {
                        showSubtleMessage('<img src="i/offline.png" style="float: right; margin-bottom: 3em; width: 3.3em height: 3.4em" /><div style="font-size: 1.8em; margin-left: 0.8em">' + gws.lang.NO_SCORES_OFFLINE + "</div>", 2000)
                    } else {
                        showSubtleMessage('<img src="i/online.png" style="float: right; margin-bottom: 3em; width: 3.3em height: 3.4em" /><div style="font-size: 1.8em; line-height: 1.9em; margin-left: 0.8em">' + gws.lang.ONLINE_GAME + "</div>", 2000)
                    }
                }
            }
            gws.currentGame = currentGame;
            startingHighScore = 0;
            startingHighSegments = 0;
            nextMove = 0;
            gameHasBeenWon = false;
            numberOfLosers = 0;
            numberOfTeams = currentGame.players.length;
            currentTeam = numberOfTeams - 1;
            currentHSMode = currentGame.id;
            currentHSMap = currentGame.iMapType;
            previewBoard.canvas.style.display = "block";
            if (controlCanvas) {
                controlCanvas.style.display = "block"
            }
            teams = [];
            currentTileIndex = 0;
            tileArray = [];
            if (numberOfTeams == 1) {
                var localHighScore = getLocalHigh(currentGameType);
                startingHighScore = localHighScore[1];
                startingHighSegments = localHighScore[0];
                if (!startingHighScore) {
                    startingHighScore = 0
                }
                if (!startingHighSegments) {
                    startingHighSegments = 0
                }
            }
            tileArray = currentGame.tiles;
            var spriteTileSet = 0;
            if (currentGame.limitedtiles) {
                spriteTileSet = 1
            }
            gameBoard.load(currentGame.map, spriteTileSet, gws.browser.mobile);
            var scoreItem;
            for (scoreItem in gameBoard.incrementalScores) {
                gameBoard.incrementalScores[scoreItem].killMe = true
            }
            startTile = gameBoard.getTile(0, 0);
            gws.background.reposition();
            for (player in currentGame.players) {
                teams[player] = new aPlayer(player, currentGame.players[player][1], currentGame.players[player][2], gameBoard.getTile(currentGame.players[player][0][0], currentGame.players[player][0][1]), currentGame.players[player][0][2], gameBoard);
                for (var y = 0; y <= currentGame.sparetiles; y++) {
                    teams[player].addTile(new aTile(0, 0, 0, 0, previewBoard)).pairs = currentGame.players[player][3][y].slice()
                }
                if (currentGame.limitedtiles) {
                    teams[player].aTileReserve = tileArray.splice(0, currentGame.limitedtiles)
                }
            }
            currentGame.instructions = gws.getInstructions(currentGameType, gws.browser.mobile);
            gameBoard.render();
            showNextMove();
            verifySequence = "";
            verifyLastRotation = [0, 0];
            verifyTileSwap = "";
            verifyTileIndex = 0;
            if (gws.browser.mobile) {
                gws.controlBar.showMenuButton()
            } else {
                displaySideMenu()
            }
            if (gws.tutorial.index) {
                gws.tutorial.show()
            } else {
                setTimeout(function() {
                    gws.ads.show()
                },
                7000)
            }
            if (gws.mainMenu.showing) {
                gws.mainMenu.hide({
                    removeBG: true
                })
            } else {
                if (gws.sideMenu.showing) {
                    gws.sideMenu.hide();
                    hideMenuBackground();
                    showTitle()
                } else {
                    hideMenuBackground();
                    showTitle()
                }
            }
            goBack("game");
            if (pageTracker) {
                pageTracker._trackPageview("/entanglement-game-" + currentGameType)
            }
            gameInPlay = true;
            scoreIncrementor = 0;
            gws.windows.showScores();
            document.getElementById("loading-panel").style.display = "none";
            if (gws.currentGame && gws.currentGame.timeleft) {
                gameBoard.incrementalScores.splice(0, 0, new bigGameBoardMessage('<div id="daily-challenge-title">' + gws.lang.DAILY_CHALLENGE + "</div>"));
                gws.audio.play("daily-challenge");
                if (gws.currentGame.highscorename == "none") {
                    gws.windows.currentWinner.show(gws.lang.DAILY_CHALLENGE_NO_HIGH_SCORE, gws.secondsToHM(gws.currentGame.timeleft))
                } else {
                    var assembledHighScoreName = gws.lang.getName(0, gws.currentGame.highscorename[0]) + " " + gws.lang.getName(1, gws.currentGame.highscorename[1]) + " " + gws.lang.getName(2, gws.currentGame.highscorename[2]);
                    gws.windows.currentWinner.show(assembledHighScoreName + " - " + gws.currentGame.highscorevalue, gws.secondsToHM(gws.currentGame.timeleft))
                }
            } else {
                gws.windows.currentWinner.hide()
            }
            if (bShowInstructionsOnLoad) {
                showDialog(currentGame.instructions);
                bShowInstructionsOnLoad = false
            }
        } else {
            showMenu()
        }
    };
    return function beginGame(id, playerCount) {
        numberOfPlayers = playerCount || numberOfPlayers;
        if (gws.tutorial.index > 0) {
            gws.tutorial.index = 1
        }
        gameIsOffline = false;
        lastScore = false;
        if (id == -2) {
            showMenu();
            showMenu("expansion")
        } else {
            if ((id == "") || (id == -1)) {
                showMenu()
            } else {
                currentGameType = id;
                gws.storage.set("lastGamePlayed", currentGameType);
                var bNeedNewGame = false;
                if (gws.nextGame) {
                    if ( + gws.nextGame.id == +id) {
                        loadGame(gws.nextGame, playerCount);
                        gws.nextGame = false
                    } else {
                        bNeedNewGame = true
                    }
                } else {
                    bNeedNewGame = true
                }
                if (bNeedNewGame) {
                    if (id == 27) {
                        gws.client.getGame(27, 1, loadGame)
                    } else {
                        if (gws.browser.buongiorno) {
                            loadGame("buongiorno", numberOfPlayers)
                        } else {
                            loadStoredGame(id, numberOfPlayers)
                        }
                    }
                }
            }
        }
    }
})();
gws.logOffTimeout = new
function() {
    this.timeout = false;
    this.reset = function() {
        if (loggedIn) {
            clearTimeout(this.timeout);
            this.timeout = setTimeout(function() {
                gws.account.signOut()
            },
            3600000)
        } else {
            clearTimeout(this.timeout)
        }
    }
};
var currentHSMode = 2;
var currentHSMap = 7;
var currentHSOrder = 1;
var currentHSBreadth = 0;
var currentHSTime = 1;
var hsDC = false;
var currentDaysAgo = 0;
function toggleBreadth(a) {
    if (hsDC) {
        currentDaysAgo = a
    } else {
        switch ( + a) {
        case 0:
            currentHSBreadth = 2;
            currentHSTime = 3;
            break;
        case 1:
            currentHSBreadth = 0;
            currentHSTime = 1;
            break;
        case 2:
            currentHSBreadth = 0;
            currentHSTime = 2;
            break;
        case 3:
            currentHSBreadth = 0;
            currentHSTime = 3;
            break
        }
    }
    grabScores()
}
function scoreSegmentToggle() {
    if (currentHSOrder == 1) {
        document.getElementById("hs-score").innerHTML = "<span>" + gws.lang.LENGTH + "</span>";
        currentHSOrder = 2
    } else {
        document.getElementById("hs-score").innerHTML = "<span>" + gws.lang.SCORE + "</span>";
        currentHSOrder = 1
    }
    grabScores()
}
function grabScores(d, c, b) {
    var a = hsDC ? currentDaysAgo: -1;
    if (d) {
        currentHSMode = +d
    }
    if (c) {
        currentHSMap = +c
    }
    if (b) {
        currentHSOrder = +b
    }
    gws.highScoreTable.innerHTML = '<br /><br /><div class="scoreboard-error">' + gws.lang.LOADING + "</div>";
    if (gws.account.expansions || (currentHSMode == 2)) {
        document.getElementById("scoreboard-ad").style.display = "none"
    } else {
        document.getElementById("scoreboard-ad").style.display = "block"
    }
    gws.client.getHighScores(currentHSMode, currentHSMap, a, currentHSOrder + currentHSBreadth, currentHSTime, displayScores)
}
var displayScores = function(obj) {
    var scoreArray;
    var localArray = getLocalScores(currentHSMode, currentHSOrder);
    var offlineMessage = "";
    if (!gws.client.online) {
        if (localArray) {
            scoreArray = localArray.sort(function(a, b) {
                return (b[1] - a[1])
            })
        } else {
            scoreArray = []
        }
        offlineMessage = '<div class="scoreboard-error">' + gws.lang.YOU_MUST_BE_ONLINE + "</div>"
    } else {
        scoreArray = eval("(" + obj + ")").HighScores;
        if (currentHSBreadth == 2) {
            var x;
            for (x in localArray) {
                if (localArray[x][3]) {
                    scoreArray.splice(0, 0, localArray[x])
                }
            }
            scoreArray.sort(function(a, b) {
                return (b[1] - a[1])
            })
        }
    }
    var formatted = htmlScores(scoreArray, ( + currentGameType == +currentHSMode) ? ((hsDC && currentDaysAgo) ? false: lastScore) : false);
    gws.highScoreTable.innerHTML = formatted[0] + offlineMessage;
    gws.highScoreTable.scrollTop = 34 * ( + formatted[1] - 3)
};
var lastScore = false;
function submitScore(offline) {
    if (offline || !gws.client.online) {
        var timeNow = new Date().getTime();
        setLocalScore(currentGameType, lastLoggedIn, playerName, teams[0].score, teams[0].segments, 1, timeNow);
        lastScore = [playerName, teams[0].score, 1, 1, currentGameType];
        showPlayAgain()
    } else {
        gws.client.setScore(currentGame.id, teams[currentTeam].score, teams[currentTeam].segments, currentGame.randomseed || currentGame.randomSeed, verifySequence,
        function(obj) {
            try {
                gws.nextGame = eval("(" + obj + ")")[0]
            } catch(e) {}
            showScoreBoard2(false, currentGameType)
        });
        lastScore = [playerName, teams[0].score, 1, 0, currentGameType];
        setLocalScore(currentGameType, lastLoggedIn, playerName, teams[0].score, teams[0].segments, 0, new Date().getTime())
    }
}
var sKeyProvided = false;
function checkPurchase(a) {
    if ((a.length > 15) || (a == "paypal")) {
        sKeyProvided = a;
        hideMenu();
        showDialog(DIALOG_LOGIN_FOR_PURCHASE, true);
        if (pageTracker) {
            pageTracker._trackPageview("/entanglement-purchase-key")
        }
    }
    return sKeyProvided
}
var iCheckoutProcessingIncrement = 0;
var bShowInstructionsOnLoad = false;
function connectPurchaseToAccount(bLoggedIn) {
    if (bLoggedIn) {
        gws.client.setPurchase(gws.lang.LANG_VARIABLE, (sKeyProvided && (sKeyProvided != "paypal")) ? sKeyProvided: false,
        function(obj) {
            var error = false;
            try {
                var user = eval("(" + obj + ")");
                gws.account.expansions = user.expansions;
                gws.storage.set("expansions", gws.account.expansions);
                if (pageTracker) {
                    pageTracker._trackPageview("/entanglement-purchase-complete")
                }
            } catch(e) {
                error = true;
                hideMenu();
                if (obj.substring(0, 50) == "The order you are requesting either does not exist") {
                    if (iCheckoutProcessingIncrement < 5) {
                        iCheckoutProcessingIncrement++;
                        setTimeout("connectPurchaseToAccount(true)", 20000);
                        if (iCheckoutProcessingIncrement == 1) {
                            showDialog(gws.lang.ORDER_PROCESSING + "<br />" + gws.lang.PLEASE_WAIT, true)
                        }
                    } else {
                        showDialog(gws.lang.ORDER_POSSIBILITIES + "<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />" + gws.lang.WAIT_FOR_NOTIFICATION + '<a href="mailto:feedback@gopherwoodstudios.com">' + gws.lang.FEEDBACK_EMAIL + "</a>.", true)
                    }
                } else {
                    if (obj != "") {
                        showDialog(obj, true)
                    }
                }
            }
            if (!error) {
                bShowInstructionsOnLoad = true;
                hideDialog();
                beginGame(21)
            }
        })
    } else {
        showDialog(DIALOG_LOGIN_FOR_PURCHASE, true)
    }
}
function getCheckoutInfo(d) {
    if (!d) {
        d = "sakura"
    }
    if (pageTracker) {
        pageTracker._trackPageview("/entanglement-purchase-promo")
    }
    if (loggedIn) {
        hideMenu();
        var b = '<div style="height:2.4em;"><span style="line-height: 2em;">-' + (gws.lang.OR || "OR") + '-</span><div style="float:left;padding-top: 5px;"><a href="javascript: gws.iap.buy(\'' + d + '\');"><img src="https://checkout.google.com/buttons/checkoutMobile.gif?w=152&h=30&style=trans&variant=no-text&loc=en_US" alt="' + gws.lang.BUY_NOW + '" /></a></div><div style="float:right;"><a href="javascript: gws.ppp.buy(\'' + d + '\');"><img src="https://www.paypal.com/en_US/i/btn/btn_dg_pay_w_paypal.gif" alt="' + gws.lang.BUY_NOW + '" /></a></div></div>';
        showDialog(DIALOG_BUY_SET_1 + b + '<span id="tied-to-account-login">' + gws.lang.TIED_TO_ACCOUNT + "</span>");
        var c = new aSelectBox("expansion-chooser", [gws.lang.SAKURA_GROVE, gws.lang.HANA_BLOSSOM, gws.lang.LOTUS_PETAL, gws.lang.DAILY_CHALLENGE], [0, 1, 2, 3], showSlide, 0)
    } else {
        hideMenu();
        showDialog(DIALOG_BUY_SET_1 + '<div style="text-align: center"><div class="med-button" id="login-button">' + gws.lang.LOGIN + '<a href="javascript: checkLoginForExpansionMenu();">' + gws.lang.LOGIN + '</a></div></div><span id="tied-to-account-login">' + gws.lang.TIED_TO_ACCOUNT + " " + gws.lang.LOGIN_IF_OWN + "</span>");
        var c = new aSelectBox("expansion-chooser", [gws.lang.SAKURA_GROVE, gws.lang.HANA_BLOSSOM, gws.lang.LOTUS_PETAL, gws.lang.DAILY_CHALLENGE], [0, 1, 2, 3], showSlide, 0)
    }
}
gws.confirmPurchase = function() {
    connectPurchaseToAccount(true)
};
function showSlide(c) {
    var b, a;
    switch (c[1]) {
    case 0:
        b = "i/ss-sakura.jpg";
        a = "";
        break;
    case 1:
        b = "i/ss-hana.jpg";
        a = "";
        break;
    case 2:
        b = "i/ss-petal.jpg";
        a = "";
        break;
    case 3:
        b = "i/ss-daily-challenge.jpg";
        a = "";
        break
    }
    document.getElementById("expansion-image").src = b
}
function createSelectors() {
    displayNames()
}
createNameSelections = function() {
    var f = 0;
    var b = 15;
    var d = 0;
    var c = {};
    c.a1 = [];
    c.a2 = [];
    c.n1 = [];
    for (var a = 0; a < gws.lang.NAMES.length; a++) {
        f = gws.lang.NAMES[a].length;
        d = Math.floor(Math.random() * f);
        for (var g = 0; g < b; g++) {
            d++;
            d %= f;
            if (a == 0) {
                c.a1[g] = d
            } else {
                if (a == 1) {
                    c.a2[g] = d
                } else {
                    c.n1[g] = d
                }
            }
        }
    }
    return c
};
var chooser1, chooser2, chooser3;
var userAdj1 = [],
userAdj2 = [],
userNoun = [];
displayNames = function() {
    var d = createNameSelections();
    var b, c = [[], []],
    a = [[], []],
    f = [[], []];
    for (b in d.a1) {
        c[0].splice(0, 0, gws.lang.NAMES[0][d.a1[b]]);
        c[1].splice(0, 0, d.a1[b])
    }
    for (b in d.a2) {
        a[0].splice(0, 0, gws.lang.NAMES[1][d.a2[b]]);
        a[1].splice(0, 0, d.a2[b])
    }
    for (b in d.n1) {
        f[0].splice(0, 0, gws.lang.NAMES[2][d.n1[b]]);
        f[1].splice(0, 0, d.n1[b])
    }
    chooser1 = new aSelectBox("adj1", c[0], c[1],
    function(g) {
        userAdj1 = g
    });
    chooser2 = new aSelectBox("adj2", a[0], a[1],
    function(g) {
        userAdj2 = g
    });
    chooser3 = new aSelectBox("noun", f[0], f[1],
    function(g) {
        userNoun = g
    });
    userAdj1 = [c[0][0], c[1][0]];
    userAdj2 = [a[0][0], a[1][0]];
    userNoun = [f[0][0], f[1][0]]
};
function updateName() {
    playerName = userAdj1[0] + " " + userAdj2[0] + " " + userNoun[0];
    gws.client.setName([(userAdj1[1] || 1), (userAdj2[1] || 1), (userNoun[1] || 1)],
    function(a) {
        doThisAfterSignIn(true)
    })
}
function displayNameScore(a) {
    displayName(a);
    if (a) {
        submitScore()
    } else {
        showScoreBoard2(false, currentGameType)
    }
}
function displayName(a) {
    if (a) {
        displayNameOnly(a)
    } else {
        showSubtleMessage('<a href="javascript: signinToggle();" style="font-size: 1.8em">' + gws.lang.UNABLE_TO_SIGNIN + "</a>", 3000)
    }
}
function displayNameOnly(a) {
    if (a) {
        showSubtleMessage('<a href="javascript: doThisAfterSignIn = displayNameOnly; showDialog(DIALOG_NAME_PICKER); createSelectors();" style="font-size:1.8em">' + playerName + "</a>")
    }
}
gws.buttonsBar = function(k, g) {
    this.showMenuRight = "-6.37em";
    this.hideMenuRight = "-12.61em";
    this.element = gws.createElement(k, "div", false, "button-bar");
    this.menuButtonLocked = false;
    var j = "sfx-on";
    this.sfxPlay = function() {
        document.getElementById(j).style.visibility = "visible";
        gws.audio.play("click")
    };
    this.sfxMute = function() {
        document.getElementById(j).style.visibility = "hidden";
        gws.audio.play("click")
    };
    var f = [{
        id: "default",
        generalStyle: "button-default",
        image: gws.assets.copyTile("bar-button", 0, 0),
        onClickFunction: function() {
            if (gws.audio.playSFX) {
                gws.audio.playSFX();
                if (g) {
                    gws.audio.playMusic()
                }
            }
        },
        altText: gws.lang.PLAY_SFX
    },
    {
        id: "default",
        generalStyle: "button-default",
        specificStyle: j,
        image: gws.assets.copyTile("bar-button", 0, 1),
        onClickFunction: function() {
            if (gws.audio.muteSFX) {
                gws.audio.muteSFX();
                if (g) {
                    gws.audio.muteMusic()
                }
            }
        },
        altText: gws.lang.MUTE_SFX
    }];
    new gws.classes.button(this.element, "button-bar-button", "sfx-button", f);
    var a = "music-on";
    this.musicPlay = function() {
        document.getElementById(a).style.visibility = "visible";
        gws.audio.play("click")
    };
    this.musicMute = function() {
        document.getElementById(a).style.visibility = "hidden";
        gws.audio.play("click")
    };
    var h = [{
        id: "default",
        generalStyle: "button-default",
        image: gws.assets.copyTile("bar-button", 1, 0),
        onClickFunction: function() {
            if (gws.audio.playMusic) {
                gws.audio.playMusic()
            }
        },
        altText: gws.lang.PLAY_MUSIC
    },
    {
        id: "default",
        generalStyle: "button-default",
        specificStyle: a,
        image: gws.assets.copyTile("bar-button", 1, 1),
        onClickFunction: function() {
            if (gws.audio.muteMusic) {
                gws.audio.muteMusic()
            }
        },
        altText: gws.lang.MUTE_MUSIC
    }];
    new gws.classes.button(this.element, "button-bar-button", "music-button", h);
    this.logOn = function() {
        signinToggle();
        gws.audio.play("click")
    };
    this.logOff = function() {
        signinToggle();
        gws.audio.play("click")
    };
    var m = "log-in-on";
    this.showLoggedOff = function() {
        document.getElementById(m).style.visibility = "hidden"
    };
    this.showLoggedOn = function() {
        document.getElementById(m).style.visibility = "visible"
    };
    var l = [{
        id: "default",
        generalStyle: "button-default",
        image: gws.assets.copyTile("bar-button", 2, 0),
        onClickFunction: this.logOn,
        altText: gws.lang.SIGN_IN
    },
    {
        id: "default",
        generalStyle: "button-default",
        specificStyle: m,
        image: gws.assets.copyTile("bar-button", 2, 1),
        onClickFunction: this.logOff,
        altText: gws.lang.SIGN_OUT
    }];
    new gws.classes.button(this.element, "button-bar-button", "log-in-button", l);
    var d = "bb-menu-on";
    this.menuShow = function() {};
    this.menuShow = function() {
        if (!this.menuButtonLocked) {
            gws.sideMenu.show()
        }
    };
    this.menuHide = function() {
        if (!this.menuButtonLocked) {
            gws.sideMenu.hide();
            popGoBack();
            goBack()
        }
    };
    var c = [{
        id: "default",
        generalStyle: "button-default",
        image: gws.assets.copyTile("bar-button", 3, 0),
        onClickFunction: this.menuShow
    },
    {
        id: "default",
        generalStyle: "button-default",
        specificStyle: d,
        image: gws.assets.copyTile("bar-button", 3, 1),
        onClickFunction: this.menuHide
    }];
    new gws.classes.button(this.element, "button-bar-button", "bb-menu-button", c);
    var b = [{
        id: "default",
        generalStyle: "button-default",
        image: gws.assets.copyTile("bar-button", 4, 0),
        onClickFunction: function() {
            window.open("http://www.gopherwoodstudios.com/", "_blank")
        }
    }];
    new gws.classes.button(this.element, "button-bar-button", "gopher-button", b)
};
gws.buttonsBar.prototype.showMenuButton = function() {
    if (gws.browser.mobile) {
        this.menuButtonLocked = false;
        this.element.style.right = this.showMenuRight
    }
};
gws.buttonsBar.prototype.hideMenuButton = function() {
    if (gws.browser.mobile) {
        this.menuButtonLocked = true;
        this.element.style.right = this.hideMenuRight
    }
};
var imgRotate = new Image();
imgRotate.src = "i/rotate-buttons.png";
function drawRotateButtons(r, w, q, o, s, b, c, u) {
    try {
        var l = 0.75;
        var j = l * w;
        if (s) {
            j *= 1.15
        }
        if (c) {
            j *= 0.9
        }
        var h = l * w;
        if (b) {
            h *= 1.15
        }
        if (u) {
            h *= 0.9
        }
        var k = ((1 - h) * q) / 6;
        var p = (q * 2 / 3) + ((1 - j) * q) / 6;
        var d = o * 0.66 + (1 - h) * o / 6;
        var a = o * 0.66 + (1 - j) * q / 6;
        var m = q * h / 3;
        var n = o * h / 3;
        var g = q * j / 3;
        var f = o * j / 3;
        var v = r.globalAlpha;
        r.globalAlpha = j * w;
        r.drawImage(imgRotate, imgRotate.width / 2, 0, imgRotate.width / 2, imgRotate.height, p, a, g, f);
        r.globalAlpha = h * w;
        r.drawImage(imgRotate, 0, 0, imgRotate.width / 2, imgRotate.height, k, d, m, n);
        r.globalAlpha = v
    } catch(t) {}
}
gws.classes.client = function() {};
gws.classes.client.prototype.get = function(f, g) {
    var c = new XMLHttpRequest(),
    a = this;
    var b = new Date().getTime();
    var d = "?";
    this.online = true;
    if (f.indexOf("?") > 0) {
        d = "&"
    }
    c.open("GET", f + d + "nocache=" + b, true);
    c.onreadystatechange = function() {
        if (this.readyState == 4) {
            a.online = (this.responseText !== "offline");
            g(this.responseText)
        }
    };
    c.send(null)
};
gws.classes.client.prototype.getGame = function(a, b, c) {
    this.get("engine?g=" + a + "&i=" + (b || 1) + "&sme=yes", c)
};
gws.classes.client.prototype.getHighScores = function(c, f, d, b, a, g) {
    this.get("engine?g=" + c + "&daysago=" + d + "&h=" + b + "&d=" + a, g)
};
gws.classes.client.prototype.setScore = function(c, g, b, a, d, f) {
    this.get("engine?x=1&v=" + d + "&s=" + g + "&l=" + b + "&g=" + c + "&c=" + (a || -1) + "&sme=yes", f)
};
gws.classes.client.prototype.setFreeDay = function(a) {
    this.get("engine?freeday=1&o=1", a)
};
gws.classes.client.prototype.setPurchase = function(c, a, b) {
    if (a) {
        this.get("authenticate?lang=" + c + "&order=" + a, b)
    } else {
        this.get("iap-confirm?lang=" + c, b)
    }
};
gws.classes.client.prototype.getPurchase = function(d, a, b, c) {
    this.get("iap-jwt?lang=" + d + "&item=" + a + "&sys=" + (b || ""), c)
};
gws.classes.client.prototype.setName = function(a, b) {
    this.get("engine?a1=" + a[0] + "&a2=" + a[1] + "&n=" + a[2], b)
};
gws.classes.client.prototype.getUser = function(a) {
    this.get("engine?o=1", a)
}; (function(a) {
    a.addToHomeScreen = function() {
        var d = false,
        b = a.browser,
        c = a.storage.get("offered-shortcut");
        className = "";
        if (!c && b.iOS && !b.chrome) {
            a.storage.set("offered-shortcut", "true");
            d = document.createElement("div");
            d.innerHTML = a.lang.ADD_TO_HOME_SCREEN.replace("IOSSHARE", '<img src="i/ios-share.png" />');
            if (b.iPad) {
                className = "add-to-homescreen ipad"
            } else {
                className = "add-to-homescreen ipod"
            }
            d.className = className;
            a.bodyClip.appendChild(d);
            setTimeout(function() {
                d.className = className + " slide-in";
                setTimeout(function() {
                    d.className = className;
                    setTimeout(function() {
                        a.body.removeChild(d)
                    },
                    1000)
                },
                10000)
            },
            1000)
        }
    }
})(gws);
gws.lang.hasTextImages = function() {
    return ((gws.lang.LANG_VARIABLE.substring(0, 2) == "en") && (!MOBILE))
};
function zeroify(a) {
    if (isNaN(a)) {
        return 0
    } else {
        return (a) ? ( + a) : 0
    }
}
function polarToCartesian(c) {
    var a = c[0] * Math.cos(c[1]);
    var b = c[0] * Math.sin(c[1]);
    return [a, b]
}
function cartesianToPolar(d) {
    var b = Math.sqrt(Math.pow(d[0], 2) + Math.pow(d[1], 2));
    var c = 0;
    if (b != 0) {
        var c = Math.acos(d[0] / b);
        if (d[1] < 0) {
            c = (Math.PI * 2) - c
        }
    }
    return [b, c]
}
function adjacentPath(a) {
    var b = a % 2;
    if (b) {
        return (a + 5) % 12
    } else {
        return (a + 7) % 12
    }
}
function addAlpha(c, b) {
    var f = 0;
    var d = 0;
    var a = 0;
    if (c.length == 7) {
        if (c.charAt(0) == "#") {
            f = parseInt(c.charAt(1) + c.charAt(2), 16);
            d = parseInt(c.charAt(3) + c.charAt(4), 16);
            a = parseInt(c.charAt(5) + c.charAt(6), 16)
        }
    }
    return "rgba(" + f + "," + d + "," + a + "," + b + ")"
}
function generateNumber(a) {
    return Math.abs(((a * 1711) % 1311) / 1311)
}
function getLocationSearch(a) {
    return (location.search.substring(location.search.indexOf(a + "=") + a.length + 1) + "& ").split("&")[0]
}
gws.secondsToHM = function(c) {
    var b = Math.floor(c / 3600);
    var a = Math.floor(c % 3600 / 60);
    return ((b > 0 ? b + ":": "0:") + (a >= 0 ? (a < 10 ? "0": "") + a: "0"))
};
var DIALOG_CONFIRM_END = '<div class="are-you-sure-text">' + gws.lang.LEAVE_GAME + '</div><div class="dialog-menu are-you-sure-dialog-menu"><div class="main-button-fake"><span class="main-button-text">' + gws.lang.YES + '</span></div><div class="main-button-fake"><span class="main-button-text">' + gws.lang.NO + '</span></div></div><div class="gloss"><div class="dialog-menu are-you-sure-dialog-menu"><a href="javascript: showMenu(); hideDialog();" class="main-button-real"><span class="main-button-text">' + gws.lang.YES + '</span></a><a href="javascript: hideDialog(); goBack();" class="main-button-real"><span class="main-button-text">' + gws.lang.NO + "</span></a></div></div>";
var DIALOG_CONFIRM_NEW = '<div class="are-you-sure-text">' + gws.lang.LEAVE_GAME + '</div><div class="dialog-menu are-you-sure-dialog-menu"><div class="main-button-fake"><span class="main-button-text">' + gws.lang.YES + '</span></div><div class="main-button-fake"><span class="main-button-text">' + gws.lang.NO + '</span></div></div><div class="gloss"><div class="dialog-menu are-you-sure-dialog-menu"><a href="javascript: beginGame(currentGameType); hideDialog();" class="main-button-real"><span class="main-button-text">' + gws.lang.YES + '</span></a><a href="javascript: hideDialog(); goBack();" class="main-button-real"><span class="main-button-text">' + gws.lang.NO + "</span></a></div></div>";
var DIALOG_SUBMIT_SCORE = '<span class="submit-score-text">' + gws.lang.SUBMIT_SCORE + '</span><br /><br /><br /><br /><span id="submit-score-small-text">' + gws.lang.ACCOUNT_FOR_AUTHENTIFICATION + '</span><div class="dialog-menu submit-score-dialog-menu"><div class="main-button-fake"><span class="main-button-text">' + gws.lang.YES + '</span></div><div class="main-button-fake"><span class="main-button-text">' + gws.lang.NO + '</span></div></div><div class="gloss"><div class="dialog-menu submit-score-dialog-menu"><a href="javascript: checkLogin();" class="main-button-real"><span class="main-button-text">' + gws.lang.YES + '</span></a><a href="javascript: hideDialog(); submitScore(true);" class="main-button-real"><span class="main-button-text">' + gws.lang.NO + "</span></a></div></div>";
if (window.BUON) {
    var buonScore = function() {
        hideDialog();
        ds_HS("entanglement", teams[0].score, 1);
        window.location = "http://" + ds_urlhiscore
    };
    DIALOG_SUBMIT_SCORE = '<span class="submit-score-text">' + gws.lang.SUBMIT_SCORE + '</span><div class="dialog-menu submit-score-dialog-menu"><div class="main-button-fake"><span class="main-button-text">' + gws.lang.YES + '</span></div><div class="main-button-fake"><span class="main-button-text">' + gws.lang.NO + '</span></div></div><div class="gloss"><div class="dialog-menu submit-score-dialog-menu"><a href="javascript: buonScore();" class="main-button-real"><span class="main-button-text">' + gws.lang.YES + '</span></a><a href="javascript: hideDialog();" class="main-button-real"><span class="main-button-text">' + gws.lang.NO + "</span></a></div></div>"
}
var DIALOG_NAME_PICKER = '<span id="name-chooser-text">' + gws.lang.SELECT_NAME + '</span><div class="name-chooser-chooser" id="adj1"></div><div class="name-chooser-chooser" id="adj2"></div><div class="name-chooser-chooser" id="noun"></div><div class="dialog-menu name-chooser-dialog-menu"><div class="main-button-fake"><span class="main-button-text">' + gws.lang.OK + '</span></div><div class="main-button-fake"><span class="main-button-text">' + gws.lang.CANCEL + '</span></div></div><div class="gloss"><div class="dialog-menu name-chooser-dialog-menu"><a href="javascript: updateName(); hideDialog();" class="main-button-real"><span class="main-button-text">' + gws.lang.OK + '</span></a><a href="javascript: hideDialog(); doThisAfterSignIn(false);" class="main-button-real"><span class="main-button-text">' + gws.lang.CANCEL + "</span></a></div></div>";
var DIALOG_ABOUT_GW = '<a href="http://gopherwoodstudios.com/" target="_blank"><img id="about-gopherwood" src="i/credits-gw.png" alt="' + gws.lang.GOPHERWOOD_STUDIOS + '" /></a><img id="about-line" src="i/bar-horizontal.png" /><a href="http://omniaudio.com/" target="_blank"><img id="about-omni" src="i/credits-oa.png" alt="' + gws.lang.OMNI_AUDIO + '" /></a><div id="about-filler"><div class="dialog-menu about-dialog-menu"><div class="main-button-fake"><span class="main-button-text">' + gws.lang.BLOG + '</span></div></div><div class="gloss"><div class="dialog-menu about-dialog-menu"><a href="http://blog.gopherwoodstudios.com/search/label/entanglement" target="_blank" class="main-button-real"><span class="main-button-text">' + gws.lang.BLOG + "</span></a></div></div>";
var DIALOG_BUY_SET_1 = '<div id="buy-title">' + gws.lang.SAKURA_GROVE_EXPANSION + '</div><div id="buy-subtitle">' + gws.lang.FOR_ENTHUSIAST + '</div><div id="expansion-chooser"></div><img id="expansion-image" src="i/ss-sakura.jpg" alt="' + gws.lang.SAKURA_GROVE + '" /><div id="expansion-image-bar"><div id="expansion-image-bar-text">' + gws.lang.GET_ALL_THREE + " " + gws.lang.PRICE + "</div></div>";
var DIALOG_LOGIN_FOR_PURCHASE = '<span id="login-purchase-text">' + gws.lang.LOGIN_CONNECT_ACCOUNT + '</span><br /><br /><br /><br /><span id="login-purchase-small-text">' + gws.lang.TIED_TO_ACCOUNT + '</span><div class="dialog-menu login-purchase-dialog-menu"><div class="main-button-fake"><span class="main-button-text">' + gws.lang.LOGIN + '</span></div><div class="main-button-fake"><span class="main-button-text">' + gws.lang.CANCEL + '</span></div></div><div class="gloss"><div class="dialog-menu login-purchase-dialog-menu"><a href="javascript: checkLoginForPurchase();" class="main-button-real"><span class="main-button-text">' + gws.lang.LOGIN + '</span></a><a href="javascript: hideDialog();" class="main-button-real"><span class="main-button-text">' + gws.lang.CANCEL + "</span></a></div></div>";
var SUBTLE_CHROME_APP = '<a target="_blank" href="https://chrome.google.com/webstore/detail/aciahcmjmecflokailenpkdchphgkefd">' + gws.lang.USE_CHROME + '<img src="i/chrome-web-store.png" alt="' + gws.lang.AVAILABLE_CWS + '" /></a>';
var SUBTLE_NONCHROME_APP = '<a target="_blank" href="https://chrome.google.com/webstore/detail/aciahcmjmecflokailenpkdchphgkefd">' + gws.lang.INSTALL_FOR_OFFLINE + '<img src="i/chrome-web-store.png" alt="' + gws.lang.AVAILABLE_CWS + '" /></a>';
function htmlTable(b) {
    var c = "",
    a, d;
    c += "<table>";
    for (d in b) {
        c += "<tr>";
        for (a in b[d]) {
            if (d == 0) {
                c += "<th>" + b[d][a] + "</th>"
            } else {
                c += "<td>" + b[d][a] + "</td>"
            }
        }
        c += "</tr>"
    }
    c += "</table>";
    return c
}
function htmlResultsTable() {
    var b = [];
    for (a in teams) {
        b[a] = [];
        b[a][0] = 0;
        b[a][1] = teams[a].segments;
        b[a][2] = teams[a].score;
        b[a][3] = teams[a].team.toLowerCase();
        b[a][4] = +a
    }
    b.sort(function(g, f) {
        return (f[2] - g[2])
    });
    for (a in b) {
        b[a][0] = ( + a + 1)
    }
    var c = "<table>",
    a, d;
    c += "<tr><th><div>" + gws.lang.PLACE + "</div></th><th><div>" + gws.lang.LENGTH + "</div></th><th><div>" + gws.lang.SCORE + "</div></th><th></th></tr>";
    for (d in b) {
        c += "<tr>";
        c += '<td class="scoreboard-rankings"><div>' + b[d][0] + "</div></td>";
        c += '<td class="scoreboard-player-results"><div>' + b[d][1] + "</div></td>";
        c += '<td class="scoreboard-player-results"><div>' + b[d][2] + "</div></td>";
        c += '<td class="scoreboard-icon icon-person-' + b[d][4] + '">&nbsp;</td>';
        c += "</tr>"
    }
    c += "</table>";
    return c
}
function htmlScores(f, b) {
    var d = "",
    c, h, k, j, l = true,
    a = 0;
    if (b && (currentHSOrder == 1)) {
        l = false
    }
    d += "<table>";
    for (j in f) {
        if (f[j][0].length == 3) {
            f[j][0] = gws.lang.getName(0, f[j][0][0]) + " " + gws.lang.getName(1, f[j][0][1]) + " " + gws.lang.getName(2, f[j][0][2])
        }
        if ( + f[j][2] == 1) {
            c = " highlight";
            try {
                if ( + f[j][3]) {
                    h = "offline"
                } else {
                    h = "online"
                }
            } catch(g) {
                h = "online"
            }
            if (l) {
                k = h
            } else {
                if ((b[0] == f[j][0]) && (b[1] == f[j][1]) && (b[2] == f[j][2])) {
                    k = "star";
                    l = true;
                    a = j
                } else {
                    k = h
                }
            }
        } else {
            c = "";
            k = ""
        }
        d += '<tr><td class="scoreboard-icon icon-' + k + '">&nbsp;</td>';
        d += '<td class="scoreboard-rankings"><div>' + ( + j + 1) + "</div></td>";
        d += '<td class="scoreboard-player-titles' + c + '"><div class="scoreboard-player-name"><div>' + f[j][0] + "</div></div></td>";
        d += '<td class="scoreboard-player-scores' + c + '"><div>' + f[j][1] + "</div></td>";
        d += "</tr>"
    }
    if (!l) {
        d += '<tr><td class="scoreboard-icon icon-star">&nbsp;</td>';
        d += '<td class="scoreboard-rankings"><div>' + (f.length + 1) + "</div></td>";
        d += '<td class="scoreboard-player-titles highlight"><div class="scoreboard-player-name"><div>' + b[0] + "</div></div></td>";
        d += '<td class="scoreboard-player-scores highlight"><div>' + b[1] + "</div></td>";
        d += "</tr>";
        a = f.length
    }
    d += "</table>";
    return [d, a]
}
var iPreferKeyboard = 0;
document.onkeydown = function(b) {
    var a = b || window.event;
    switch (a.keyCode) {
    case 90:
    case 46:
        swapTiles();
        break;
    case 13:
    case 32:
        placeTile();
        return false;
    case 37:
        rotateTile( - 1);
        iPreferKeyboard++;
        return false;
    case 38:
        rotateTile( - 1);
        iPreferKeyboard++;
        return false;
    case 39:
        rotateTile( + 1);
        iPreferKeyboard++;
        return false;
    case 40:
        rotateTile( + 1);
        iPreferKeyboard++;
        return false
    }
};
document.onkeyup = function(b) {
    var a = b || window.event
};
var delta = 0;
var iPreferWheel = 0;
function wheel(a) {
    if (!a) {
        a = window.event
    }
    if (a.wheelDelta) {
        if (window.opera) {
            delta += (a.wheelDelta / 120 * 2)
        } else {
            delta += a.wheelDelta / 120
        }
    } else {
        if (a.detail) {
            delta -= a.detail
        }
    }
    if (Math.abs(delta) > 1) {
        delta = delta / Math.abs(delta);
        rotateTile(delta);
        delta = 0;
        iPreferWheel++
    }
    if (a.preventDefault) {
        a.preventDefault()
    }
    a.returnValue = false
}
if (window.addEventListener) {
    window.addEventListener("DOMMouseScroll", wheel, false)
}
window.onmousewheel = document.onmousewheel = wheel;
var bShowRotateButtons = false;
var bPreferButtons = true;
var iRotateButtonSize = 0;
var bRightButtonHover = false;
var bLeftButtonHover = false;
var bRightButtonPressed = false;
var bLeftButtonPressed = false;
var bTileButtonPressed = false;
function addRotateButtons(a) {
    a.oncontextmenu = function(b) {
        swapTiles();
        return false
    };
    a.onmousedown = function(f) {
        var d = false;
        d = f.which;
        if (!d) {
            d = f.button
        }
        if (bPreferButtons) {
            var c = 0;
            var b = 0;
            if (f.offsetY || f.offsetX) {
                b = f.offsetY;
                c = f.offsetX
            } else {
                b = f.layerY;
                c = f.layerX
            }
            if (b > parseInt(f.currentTarget.offsetHeight * 0.66)) {
                var h = f.currentTarget.offsetWidth * 0.33;
                var g = f.currentTarget.offsetWidth * 0.67;
                if (c < h) {
                    bLeftButtonPressed = true
                } else {
                    if (c > g) {
                        bRightButtonPressed = true
                    } else {
                        if (d == 1) {
                            bTileButtonPressed = true
                        }
                        bRightButtonHover = false;
                        bLeftButtonHover = false
                    }
                }
            } else {
                if (d == 1) {
                    bTileButtonPressed = true
                }
                bRightButtonHover = false;
                bLeftButtonHover = false
            }
        } else {
            if (d == 1) {
                bTileButtonPressed = true
            }
        }
    };
    a.onmouseup = function(d) {
        if (bPreferButtons) {
            if (bRightButtonPressed || bLeftButtonPressed) {
                iPreferWheel = 0;
                iPreferKeyboard = 0
            }
            var c = 0;
            var b = 0;
            if (d.offsetY || d.offsetX) {
                b = d.offsetY;
                c = d.offsetX
            } else {
                b = d.layerY;
                c = d.layerX
            }
            if (b > parseInt(d.currentTarget.offsetHeight * 0.66)) {
                var g = d.currentTarget.offsetWidth * 0.33;
                var f = d.currentTarget.offsetWidth * 0.67;
                if (c < g) {
                    if (bLeftButtonPressed) {
                        rotateTile( - 1)
                    }
                } else {
                    if (c > f) {
                        if (bRightButtonPressed) {
                            rotateTile( + 1)
                        }
                    } else {
                        if (bTileButtonPressed) {
                            placeTile()
                        }
                    }
                }
            } else {
                if (bTileButtonPressed) {
                    placeTile()
                }
            }
            bRightButtonPressed = false;
            bLeftButtonPressed = false;
            bTileButtonPressed = false
        } else {
            if (bTileButtonPressed) {
                placeTile()
            }
            bTileButtonPressed = false
        }
    };
    a.onmousemove = function(f) {
        if ((iPreferWheel > 9) || (iPreferKeyboard > 9)) {
            bPreferButtons = false
        }
        if (bPreferButtons) {
            var d = 0;
            var c = 0;
            if (f.offsetY || f.offsetX) {
                c = f.offsetY;
                d = f.offsetX
            } else {
                c = f.layerY;
                d = f.layerX
            }
            var b = f.currentTarget.offsetWidth * 0.5;
            var h = f.currentTarget.offsetWidth * 0.33;
            var g = f.currentTarget.offsetWidth * 0.67;
            if (c > parseInt(f.currentTarget.offsetHeight * 0.66)) {
                bShowRotateButtons = true;
                if (d < h) {
                    bLeftButtonHover = true;
                    bRightButtonHover = false
                } else {
                    if (d > g) {
                        bRightButtonHover = true;
                        bLeftButtonHover = false
                    } else {
                        bRightButtonHover = false;
                        bLeftButtonHover = false;
                        bShowRotateButtons = true
                    }
                }
            } else {
                bRightButtonHover = false;
                bLeftButtonHover = false;
                if (cartesianToPolar([d - b, c - f.currentTarget.offsetHeight / 2])[0] < (b * 2 / 3)) {
                    bShowRotateButtons = true
                } else {
                    bShowRotateButtons = false
                }
            }
        } else {
            bRightButtonHover = false;
            bLeftButtonHover = false;
            bShowRotateButtons = false
        }
    };
    a.onmouseout = function(b) {
        bShowRotateButtons = false;
        bRightButtonHover = false;
        bLeftButtonHover = false;
        bRightButtonPressed = false;
        bLeftButtonPressed = false
    }
}
var verifySequence = "";
var verifyTileSwap = "";
var verifyTileIndex = 0;
var verifyLastRotation = [0, 0];
function rotateTile(a) {
    if (gameInPlay) {
        holdingTile.rotate(a);
        if (gws.tutorial.index == 1) {
            gws.tutorial.show(2)
        }
        verifyLastRotation[verifyTileIndex] = (verifyLastRotation[verifyTileIndex] + a + 6) % 6;
        gws.audio.play("Turn" + Math.floor(Math.random() * 3))
    }
}
var currentTileIndex = 0;
function placeTile() {
    if (!gameHasBeenWon && !windowJustFocused) {
        iRotateButtonSize = 0;
        if ((gws.tutorial.index > 2) && (gws.tutorial.index < 6)) {
            gws.tutorial.hide();
            gws.tutorial.index++
        }
        if (gws.tutorial.index == 2) {
            gws.tutorial.show(3)
        }
        if (gws.tutorial.index == 6) {
            gws.tutorial.show(6)
        }
        nextMove.setType("path", holdingTile.pairs.slice());
        nextMove.colors = ["gray", "gray", "gray", "gray", "gray", "gray", "gray", "gray", "gray", "gray", "gray", "gray"];
        nextMove.paint();
        nextMove.render();
        calculateScores();
        if (numberOfTeams == 1) {
            verifySequence += verifyTileSwap + verifyLastRotation[verifyTileIndex]
        }
        verifyTileSwap = "";
        verifyLastRotation[verifyTileIndex] = 0;
        hidePreview();
        if (teams[currentTeam].aTileReserve.length > 0) {
            teams[currentTeam].tiles[0].pairs = teams[currentTeam].aTileReserve[0].slice();
            teams[currentTeam].aTileReserve.splice(0, 1);
            if ((teams[currentTeam].aTileReserve.length > 0) && (teams[currentTeam].tiles.length == 1)) {
                teams[currentTeam].addTile(new aTile(0, 0, 0, 0, previewBoard)).pairs = teams[currentTeam].aTileReserve[0].slice();
                teams[currentTeam].aTileReserve.splice(0, 1)
            }
        } else {
            if (currentTileIndex < tileArray.length) {
                teams[currentTeam].tiles[0].pairs = tileArray[currentTileIndex].slice();
                currentTileIndex++
            } else {
                teams[currentTeam].removeTile()
            }
        }
        showNextMove()
    }
}
function swapTiles() {
    if (gameInPlay) {
        teams[currentTeam].swapTiles();
        holdingTile.pairs = teams[currentTeam].tiles[0].pairs;
        holdingTile.rotating = 0.001;
        if (teams[currentTeam].tiles.length > 1) {
            queueTile.pairs = teams[currentTeam].tiles[1].pairs;
            queueTile.render();
            gws.audio.play("swap-tile")
        }
        if (verifyTileSwap == "s") {
            verifyTileSwap = ""
        } else {
            verifyTileSwap = "s"
        }
        verifyTileIndex = 1 - verifyTileIndex;
        document.getElementById("swap").setAttribute("title", "")
    }
}
try {
    gws.storage.set("Entanglement1-segments", Math.max(zeroify(readCookie("hi")), zeroify(localStorage.getItem("Solitaire Entanglement Segments")), zeroify(localStorage.getItem("Solitaire Entanglement")), zeroify(gws.storage.get("Entanglement1-segments"))));
    gws.storage.set("Entanglement2-segments", Math.max(zeroify(readCookie("hi2")), zeroify(localStorage.getItem("Two Tile Tangle Segments")), zeroify(localStorage.getItem("Two Tile Tangle")), zeroify(gws.storage.get("Entanglement2-segments"))));
    gws.storage.set("Entanglement1-score", Math.max(zeroify(readCookie("hi")), zeroify(localStorage.getItem("Solitaire Entanglement Score")), zeroify(localStorage.getItem("Solitaire Entanglement")), zeroify(gws.storage.get("Entanglement1-score"))));
    gws.storage.set("Entanglement2-score", Math.max(zeroify(readCookie("hi2")), zeroify(localStorage.getItem("Two Tile Tangle Score")), zeroify(localStorage.getItem("Two Tile Tangle")), zeroify(gws.storage.get("Entanglement2-score"))))
} catch(e) {}
function getLocalHigh(a) {
    return [ + gws.storage.get("Entanglement" + a + "-segments"), +gws.storage.get("Entanglement" + a + "-score")]
}
function setLocalHigh(a, b, d) {
    var c = getLocalHigh(a);
    gws.storage.set("Entanglement" + a + "-segments", Math.max( + b, +c[0]));
    gws.storage.set("Entanglement" + a + "-score", Math.max( + d, +c[1]))
}
function getLocalScores(b, h) {
    var f = gws.storage.get("Entanglement" + b);
    var d = 0;
    if (f) {
        var c = JSON.parse(f);
        if (h) {
            var a, g = [];
            for (a in c) {
                d = ( + c[a][0] == +lastLoggedIn) ? 1 : 0;
                g.splice(0, 0, [c[a][1], c[a][1 + h], d, c[a][4]])
            }
            return g
        } else {
            return c
        }
    } else {
        return false
    }
}
function setLocalScore(k, b, a, c, f, j, h) {
    var g = getLocalScores(k);
    if (g) {
        g.splice(0, 0, [b, a, c, f, j, h])
    } else {
        g = [[b, a, c, f, j, h]]
    }
    g.sort(function(m, l) {
        return (l[2] > m[2])
    });
    var d = g.slice(0, 6);
    gws.storage.set("Entanglement" + k, JSON.stringify(d));
    setLocalHigh(k, f, c)
}
var OFFSET_X = +100;
var OFFSET_Y = +173;
var GRID_X = OFFSET_X * 3;
var GRID_Y = OFFSET_Y * 2;
var numberOfTeams = 0;
var currentTeam = 0;
var teams = [];
var tileArray = [];
var currentGameType = "1";
var currentMode = "";
var currentMap = "";
var gameInPlay = false;
var highScoreMode;
var highScoreBreadth;
var windowJustFocused = false;
gws.getInstructions = function(a, b) {
    switch ( + a) {
    case 21:
    case 22:
    case 23:
    case 24:
    case 25:
    case 26:
        return "<div class='instructions'>" + gws.lang.SAKURA_INSTRUCTIONS + "</div>";
        break;
    case 27:
        return "<div class='instructions'>" + gws.lang.DAILY_CHALLENGE_RULES + "</div>";
        break;
    default:
        if (numberOfTeams < 2) {
            if (b) {
                return "<div class='instructions'>" + gws.lang.CLASSIC_INSTRUCTIONS_MOBILE + "</div>"
            } else {
                return "<iframe title='YouTube video player' class='youtube-player' type='text/html' src='http://www.youtube.com/embed/0gBuNknaj-4?rel=0' frameborder='0'></iframe><img id='youtube-bar' src='i/bar-horizontal.png' /><div class='dialog-menu youtube-instructions-dialog-menu'><div class='main-button-fake'><span class='main-button-text'>" + gws.lang.OK + "</span></div></div><div class='gloss'><div class='dialog-menu youtube-instructions-dialog-menu'><a href='javascript: hideDialog(); goBack();' class='main-button-real'><span class='main-button-text'>" + gws.lang.OK + "</span></a></div></div>"
            }
        } else {
            if (b) {
                return "<div class='instructions'>" + gws.lang.MULTIPLAYER_INSTRUCTIONS_MOBILE + "</div>"
            } else {
                return "<div class='instructions'>" + gws.lang.MULTIPLAYER_INSTRUCTIONS + "</div>"
            }
        }
        break
    }
};
var activeTileBlink = 0;
var thisStep = 0;
var scorePulse = 1;
var audioTime = 0;
var bgAudio = 0;
var audioLastTrack = [ - 1, -1];
var readyForScoreboards = false;
var congratsMessage = "";
gws.drawStartTile = false;
gws.stepper = {
    pulse: 0,
    render: function(d) {
        var h = holdingTile;
        if (gameInPlay) {
            if (!h.parent.buffer) {
                h.parent.buffer = document.createElement("canvas")
            }
            var c = h.parent.buffer.getContext("2d");
            if ((h.parent.canvas.width != h.parent.buffer.width) || (h.parent.canvas.height != h.parent.buffer.height)) {
                h.parent.buffer.width = h.parent.canvas.width;
                h.parent.buffer.height = h.parent.canvas.height
            } else {
                c.clearRect(0, 0, h.parent.buffer.width, h.parent.buffer.height)
            }
            c.globalAlpha = 1;
            c.shadowOffsetX = 0;
            c.shadowOffsetY = 0;
            c.shadowBlur = this.pulse * previewBoard.scale * 700;
            var j = teams[currentTeam].color;
            if (numberOfTeams == 1) {
                j = "#8ef0c1"
            }
            c.shadowColor = j;
            previewBoard.drawHexagon(0, 0, previewBoard.scale * 1.05, j, c);
            c.shadowColor = "transparent";
            if (h.rotating) {
                var g = h.parent.width * h.parent.viewScale / 2;
                centerY = h.parent.height * h.parent.viewScale / 2;
                c.save();
                c.translate(g, centerY);
                c.rotate(h.rotating);
                c.translate( - g, -centerY);
                h.render(false, c);
                c.restore()
            } else {
                h.render(false, c)
            }
            if (bShowRotateButtons) {
                drawRotateButtons(c, iRotateButtonSize / 6, h.parent.width, h.parent.height, bRightButtonHover, bLeftButtonHover, bRightButtonPressed, bLeftButtonPressed)
            } else {
                if (iRotateButtonSize > 0) {
                    drawRotateButtons(c, iRotateButtonSize / 6, h.parent.width, h.parent.height, bRightButtonHover, bLeftButtonHover, bRightButtonPressed, bLeftButtonPressed)
                }
            }
            if (currentGame.limitedtiles) {
                var b = teams[currentTeam].aTileReserve.length + teams[currentTeam].tiles.length;
                if (b < 10) {
                    c.textAlign = "center";
                    c.textBaseline = "middle";
                    c.font = (previewBoard.scale * previewBoard.viewScale * 300) + "px Fontin-SmallCaps";
                    c.fillStyle = "rgba(255,255,255,0.4)";
                    c.fillText(b, h.windowX() * previewBoard.viewScale, h.windowY() * previewBoard.viewScale)
                }
            }
            if (gws.drawStartTile) {
                if (currentGame.limitedtiles) {
                    drawStartTile(teams[currentTeam].startTile, b, gws.lang.TILES_LEFT, teams[currentTeam].color, this.pulse)
                } else {
                    drawStartTile(teams[currentTeam].startTile, teams[currentTeam].segments, gws.lang.SEGMENTS, teams[currentTeam].color, this.pulse)
                }
                gws.drawStartTile = false
            }
            h.parent.context.clearRect(0, 0, h.parent.width, h.parent.height);
            h.parent.context.drawImage(h.parent.buffer, 0, 0, h.parent.width, h.parent.height);
            var f;
            for (f in gameBoard.animatingTiles) {
                if (gameBoard.animatingTiles[f].animate) {
                    gameBoard.animatingTiles[f].render()
                }
            }
        }
        var a;
        for (a in gameBoard.incrementalScores) {
            if (gameBoard.incrementalScores[a].killMe) {
                document.getElementById("moving-scores").removeChild(gameBoard.incrementalScores[a].element);
                gameBoard.incrementalScores.splice(a, 1)
            } else {
                gameBoard.incrementalScores[a].update(d)
            }
        }
        if (readyForScoreboards) {
            if (numberOfTeams < 2) {
                if (scoreIncrementor == teams[0].score) {
                    readyForScoreboards = false;
                    if (loggedIn || !gws.client.online) {
                        submitScore()
                    } else {
                        if (teams[0].score > 12) {
                            showDialog('<br /><br /><b style="font-size: 13em; text-shadow: 0 0 0.4em #ffffff;">' + teams[0].score + '</b><br /><br /><span class="submit-score-text">' + congratsMessage + "</span>" + DIALOG_SUBMIT_SCORE)
                        } else {
                            showPlayAgain()
                        }
                        gws.addToHomeScreen()
                    }
                }
            } else {
                readyForScoreboards = false;
                showScoreBoard()
            }
        }
    },
    update: function(a) {
        var b = holdingTile;
        this.pulse = 0.13 + 0.03 * Math.cos(thisStep / 33);
        if ((scorePulse > 1) && (!(thisStep % 5))) {
            scorePulse--
        }
        if (gameInPlay) {
            if (activeTileBlink > 0) {
                activeTileBlink--;
                this.pulse -= 0.03 * Math.cos(activeTileBlink / 2)
            }
            if (b.rotating) {
                b.rotating *= 0.75;
                if (Math.abs(b.rotating) < 0.01) {
                    b.rotating = 0
                }
            }
            if (bShowRotateButtons) {
                if (iRotateButtonSize < 6) {
                    iRotateButtonSize++
                }
            } else {
                if (iRotateButtonSize > 0) {
                    iRotateButtonSize -= 2
                }
            }
        }
        thisStep++;
        if (thisStep >= 400000) {
            thisStep = 0
        }
    }
};
function redraw() {
    gameBoard.render();
    previewBoard.render();
    queueBoard.render()
}
if (window.BUON) { (function() {
        var a = /v=(\d+)/.exec(window.location.search.substring(1));
        a = (a !== null) ? a[1] : "default";
        document.write('<script src="http://s2.motime.com/js/wl/webstore_webapp/gamescore.js?v=' + a + '"><\/script>')
    } ())
}
window.addEventListener("load",
function() {
    var l = gws.vars.view;
    gws.view = {
        addEvent: function() {},
        resize: function() {}
    };
    gws.browser = gws.browserCheck();
    gws.browser.buongiorno = window.BUON || false;
    if (gws.browser.buongiorno) {
        var m = function() {
            window.location = "http://" + ds_urlhiscore
        };
        gws.vars.view.mainMenu.pc.pages[0].buttons[3].onClickFunction = m;
        gws.vars.view.mainMenu.pc.pages[0].buttons.splice(2, 1);
        gws.vars.view.mainMenu.mobile.pages[0].buttons[3].onClickFunction = m;
        gws.vars.view.mainMenu.mobile.pages[0].buttons.splice(2, 1);
        gws.vars.view.sideMenu.pc.pages[0].buttons[3].onClickFunction = m;
        gws.vars.view.sideMenu.pc.pages.splice(1, 1);
        gws.vars.view.sideMenu.mobile.pages[0].buttons[3].onClickFunction = m;
        gws.vars.view.sideMenu.mobile.pages.splice(1, 1)
    }
    if (MOBILE) {
        gws.browser.mobile = true
    }
    gws.body = document.getElementsByTagName("body")[0];
    gws.bodyClip = document.getElementById("body-clip");
    if (gws.browser.mobile) {
        gws.body.className = "mobile";
        gws.windows.mobile = true
    }
    if (gws.browser.canvas) {
        updateFlags(getLocationSearch("flag"));
        var g = getLocationSearch("n");
        currentGameType = +g;
        if (!currentGameType) {
            currentGameType = +gws.storage.get("lastGamePlayed")
        }
        if (!currentGameType) {
            currentGameType = 2;
            gws.tutorial.index = 1
        }
        var a = gws.vars.map;
        gameBoard = new aMap("game", 0, 0, a.width, a.height, a.scale);
        previewBoard = new aMap("preview", 0, 0, 200, 200, +0.5);
        queueBoard = new aMap("queue", 0, 0, 200, 200, +0.4);
        highScoreMode = new aSelectBox("game-mode", [gws.lang.SOLITAIRE, gws.lang.SAKURA_GROVE, gws.lang.HANA_BLOSSOM, gws.lang.LOTUS_PETAL, gws.lang.DAILY_CHALLENGE], [[2, 7], [21, 31], [15, 25], [9, 19], [27, 0]],
        function(n) {
            if ((!hsDC) && (n[1][0] == 27)) {
                hsDC = true;
                highScoreBreadth = new aSelectBox("global-toggle", [gws.lang.DAYS_AGO.replace("2", "6"), gws.lang.DAYS_AGO.replace("2", "5"), gws.lang.DAYS_AGO.replace("2", "4"), gws.lang.DAYS_AGO.replace("2", "3"), gws.lang.DAYS_AGO.replace("2", "2"), gws.lang.DAYS_AGO.replace("2", "1"), gws.lang.TODAYS_SCORES], [6, 5, 4, 3, 2, 1, 0],
                function(o) {
                    toggleBreadth(o[1])
                },
                6)
            } else {
                if (hsDC && (!(n[1][0] == 27))) {
                    hsDC = false;
                    highScoreBreadth = new aSelectBox("global-toggle", [gws.lang.PERSONAL_SCORES, gws.lang.TODAYS_SCORES, gws.lang.WEEKS_SCORES, gws.lang.ALL_TIME_SCORES], [0, 1, 2, 3],
                    function(o) {
                        toggleBreadth(o[1])
                    },
                    1)
                }
            }
            grabScores(n[1][0], n[1][1])
        });
        highScoreBreadth = new aSelectBox("global-toggle", [gws.lang.PERSONAL_SCORES, gws.lang.TODAYS_SCORES, gws.lang.WEEKS_SCORES, gws.lang.ALL_TIME_SCORES], [0, 1, 2, 3],
        function(n) {
            toggleBreadth(n[1])
        },
        1);
        gws.highScoreTable = gws.createElement(document.getElementById("scoreboard-table"), "div", "scroll-table");
        gws.highScoreTable.innerHTML = '<br /><br /><div class="scoreboard-error">' + gws.lang.LOADING + "</div>";
        gameBoard.canvas.onclick = function(n) {
            placeTile()
        };
        gameBoard.canvas.oncontextmenu = function(n) {
            swapTiles();
            return false
        };
        holdingTile = new aTile(0, 0, 0, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], previewBoard, "path");
        previewBoard.add(holdingTile, true);
        previewBoard.canvas.width = 200 * (window.devicePixelRatio || 1);
        previewBoard.canvas.height = 200 * (window.devicePixelRatio || 1);
        previewBoard.setFocus(0, 0, 0.3);
        queueTile = new aTile(0, 0, 0, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], queueBoard, "path");
        queueBoard.add(queueTile, true);
        queueBoard.canvas.width = 200 * (window.devicePixelRatio || 1);
        queueBoard.canvas.height = 200 * (window.devicePixelRatio || 1);
        queueBoard.setFocus(0, 0, 0.5);
        var f, h = function() {
            clearTimeout(f);
            f = setTimeout(function() {
                if ((gws.browser.safari) && (gws.browser.iPod || gws.browser.iPhone)) {
                    var n = window.orientation ? "268px": "416px";
                    if (gws.bodyClip.style.height != n) {
                        gws.bodyClip.style.height = n
                    }
                }
                gws.body.style.fontSize = Math.max(l.unit.bodyMinimum, l.unit.bodyMaximum * Math.min(1, Math.min(gws.bodyClip.offsetWidth / l.unit.bodyWidth, gws.bodyClip.offsetHeight / l.unit.bodyHeight))) + "px";
                gameBoard.rescale();
                gameBoard.rescale();
                gws.view.resize();
                gws.background.reposition();
                if (gws.browser.mobile) {
                    window.scrollTo(0, 1)
                }
            },
            200)
        };
        window.addEventListener("resize", h, false);
        window.addEventListener("orientationchange", h, false);
        h();
        window.addEventListener("focus",
        function() {
            windowJustFocused = true;
            setTimeout(function() {
                windowJustFocused = false
            },
            400)
        },
        false);
        if (gws.browser.progress) {
            gws.progressBar = new gws.classes.progressBar(document.getElementById("loading-panel"))
        } else {
            gws.progressBar = false
        }
        var k = [],
        j = [],
        c = "",
        d;
        for (d in gws.assetList) {
            c = gws.assetList[d];
            if ((c.indexOf("ogg") > 0) || (c.indexOf("mp3") > 0) || (c.indexOf("m4a") > 0)) {
                k.push(c)
            } else {
                j.push(c)
            }
        }
        k = gws.assets.referenceAudio(gws.assets.filterAudio(k, gws.browser), gws.browser);
        gws.assets.saveScaledImages = false;
        gws.assets.load(j,
        function(o, n) {
            if (gws.progressBar) {
                gws.progressBar.update(o);
                gws.progressBar.render()
            }
        },
        function() {
            document.getElementById("loading-panel").style.display = "none";
            gws.assets.createSpriteSheet("main-menu-buttons", "i/main-menu-buttons.png", 1, 4);
            gws.assets.createSpriteSheet("side-menu-buttons", "i/side-menu-buttons.png", 1, 2);
            gws.assets.createSpriteSheet("menu-icons", "i/menu-icons-2.png", 8, 4);
            gws.assets.createSpriteSheet("side-icons", "i/side-icons.png", 5, 1);
            gws.assets.createSpriteSheet("back-button", "i/back-button.png", 2, 1);
            gws.assets.createSpriteSheet("bar-button", "i/bar-buttons1.png", 5, 2);
            gws.assets.createSpriteSheet("exit", "i/exit.png", 2, 1);
            gws.controlBar = new gws.buttonsBar(gws.bodyClip, gws.browser.mobile);
            var p = gws.controlBar;
            gws.client = new gws.classes.client();
            gws.account = new gws.classes.account({
                onLogOn: function() {
                    p.showLoggedOn()
                },
                onLogOff: function() {
                    p.showLoggedOff();
                    showSubtleMessage("<div style='font-size:1.8em'>" + playerName + " " + gws.lang.SIGNED_OUT + "</div>", 3000)
                }
            });
            gws.mainMenu = new gws.classes.menu(document.getElementById("main-menu"), gws.browser.mobile, gws.vars.view.mainMenu);
            if (gws.browser.mobile) {
                var s = gws.createElement(gws.bodyClip, "div", false, "side-menu");
                gws.sideMenu = new gws.classes.menu(s, gws.browser.mobile, gws.vars.view.sideMenu)
            } else {
                var s = gws.createElement(gws.bodyClip, "div", false, "side-menu");
                gws.createElement(s, "a", "side-menu-tab", "fake-tab");
                var q = gws.createElement(s, "a", "side-menu-tab", "main-tab");
                gws.createTextBlock(gws.createElement(q, "div", "vertical-text"), "span", "", false, gws.lang.MENU);
                var n = gws.createElement(s, "a", "side-menu-tab", "more-tab");
                gws.createTextBlock(gws.createElement(n, "div", "vertical-text"), "span", "", false, gws.lang.GET_MORE);
                var o = gws.createElement(s, "div", "return");
                gws.createElement(o, "a");
                var r = gws.createElement(s, "div", false, "inner-side-menu");
                gws.sideMenu = new gws.classes.menu(r, gws.browser.mobile, gws.vars.view.sideMenu);
                o.onclick = function() {
                    gws.sideMenu.hide()
                };
                q.onclick = function() {
                    gws.sideMenu.show("main")
                };
                n.onclick = function() {
                    gws.sideMenu.show("more")
                }
            }
            checkPurchase(getLocationSearch("key"));
            gws.audio = {
                play: function() {}
            };
            gws.view = new gws.classes.view(gws.bodyClip, gws.assets, gws.audio, gws.browser.mobile);
            gws.loop.addRender(gws.view);
            gws.loop.addRender(gws.stepper);
            gws.loop.start();
            beginGame(currentGameType);
            setTimeout(function() {
                gws.assets.load(k,
                function(u, t) {
                    if ((t.indexOf("ogg") > 0) || (t.indexOf("mp3") > 0) || (t.indexOf("m4a") > 0)) {
                        this.setSoundName(this.getSound(t), t.replace("a/", "").replace(".mp3", "").replace(".m4a", "").replace(".ogg", ""))
                    }
                },
                function() {
                    var A = 0,
                    z, u = gws.vars.view.sounds,
                    y = (gws.browser.android || gws.browser.iOS) ? 0.75 : 0;
                    gws.audio = new gws.classes.audioManager({
                        assets: gws.assets,
                        musicTracks: [["Layer1_1", "Layer1_2", "Layer1_3", "Layer1_4", "Layer1_5", "Layer1_6"], ["Layer2_1", "Layer2_2", "Layer2_3", "Layer2_4", "Layer2_5"]],
                        musicOffset: 16000,
                        offsetTracks: true,
                        onPlayMusic: function() {
                            gws.controlBar.musicPlay();
                            gws.storage.set("mute-music", false)
                        },
                        onMuteMusic: function() {
                            gws.controlBar.musicMute();
                            gws.storage.set("mute-music", true)
                        },
                        onPlaySFX: function() {
                            gws.controlBar.sfxPlay();
                            gws.storage.set("mute-sfx", false)
                        },
                        onMuteSFX: function() {
                            gws.controlBar.sfxMute();
                            gws.storage.set("mute-sfx", true)
                        },
                        musicMuted: (gws.storage.get("mute-music") == "true"),
                        sfxMuted: (gws.storage.get("mute-sfx") == "true")
                    });
                    for (A in u) {
                        z = u[A];
                        gws.audio.addSoundSegment(z.source, z.title, z.start, (z.length ? z.length + y: 0), (z.end ? z.end + y: 0))
                    }
                    if (!gws.audio.sfxMuted) {
                        gws.controlBar.sfxPlay()
                    }
                    if (!gws.audio.musicMuted) {
                        gws.controlBar.musicPlay()
                    }
                    gws.loop.addUpdate(gws.audio);
                    gws.view.audio = gws.audio;
                    if (gws.browser.iOS) {
                        gws.enableAudio({
                            element: gws.view.animationLayer.canvas,
                            audio: gws.audio.sounds.sfx.sound
                        })
                    }
                    var w = ["i/mid_1.png", "i/rock.png", "i/mid_0.png", "i/mid_2.png", "i/gameboard_glow.png", "i/corner_shadow.png", "i/top_0.png", "i/top_1.png", "i/top_2.png", "i/left-trim.png", "i/right_trim.png"],
                    v = ["bgTL1", "bgL", "bgTL2", "bgTR1", "bgGlow", "", "bgT", "bgBL", "bgTR2", "bgTL3", "bgTR3"],
                    t = false;
                    if (gws.browser.mobile) {
                        w = ["i/mid_0.png", "i/gameboard_glow.png", "i/corner_shadow.png", "i/top_0.png", "i/top_1.png", "i/top_2.png", "i/left-trim.png", "i/right_trim.png"];
                        v = ["bgTL2", "bgGlow", "", "bgT", "bgBL", "bgTR2", "bgTL3", "bgTR3"]
                    }
                    setTimeout(function() {
                        gws.assets.load(w,
                        function(D, C) {
                            var B, E = 0;
                            for (; E < w.length; E++) {
                                if (w[E] == C) {
                                    if (C == "i/corner_shadow.png") {
                                        B = this.copyImage("", this.images[C]);
                                        B.setAttribute("id", "bgSBR");
                                        B.className = "background-image";
                                        gws.bodyClip.appendChild(B);
                                        gws.background.images.bgSBR = B;
                                        B = this.copyImage("", this.images[C]);
                                        B.setAttribute("id", "bgSBL");
                                        B.className = "background-image";
                                        gws.bodyClip.appendChild(B);
                                        gws.background.images.bgSBL = B;
                                        B = this.copyImage("", this.images[C]);
                                        B.setAttribute("id", "bgSTR");
                                        B.className = "background-image";
                                        gws.bodyClip.appendChild(B);
                                        gws.background.images.bgSTR = B;
                                        B = this.copyImage("", this.images[C]);
                                        B.setAttribute("id", "bgSTL");
                                        B.className = "background-image";
                                        gws.bodyClip.appendChild(B);
                                        gws.background.images.bgSTL = B
                                    } else {
                                        B = this.images[C];
                                        B.setAttribute("id", v[E]);
                                        B.className = "background-image";
                                        gws.bodyClip.appendChild(B);
                                        gws.background.images[v[E]] = B
                                    }
                                    v.splice(E, 1);
                                    clearTimeout(t);
                                    t = setTimeout(function() {
                                        gws.background.reposition()
                                    },
                                    200);
                                    break
                                }
                            }
                        })
                    },
                    10)
                })
            },
            10)
        })
    } else {
        var b = "";
        b += '<li><a href="http://www.apple.com/safari/" title="' + gws.lang.SAFARI + '" class="safari"><span>' + gws.lang.SAFARI + "</span></a></li>";
        b += '<li><a href="http://www.google.com/chrome/" title="' + gws.lang.CHROME + '" class="chrome"><span>' + gws.lang.CHROME + "</span></a></li>";
        b += '<li><a href="http://www.mozilla.com/firefox/" title="' + gws.lang.FIREFOX + '" class="firefox"><span>' + gws.lang.FIREFOX + "</span></a></li>";
        b += '<li><a href="http://www.opera.com/" title="' + gws.lang.OPERA + '" class="opera"><span>' + gws.lang.OPERA + "</span></a></li>";
        b += '<li><a href="http://windows.microsoft.com/en-us/internet-explorer/products/ie/home" title="' + gws.lang.IE + '" class="ie-icon"><span>' + gws.lang.IE + "</span></a></li>";
        showDialog("<h2>" + gws.lang.ONE_MORE_STEP + "</h2><p><b>" + gws.lang.TITLE + "</b> " + gws.lang.HTML5_REQUIRED + '</p><ul id="browsers">' + b + "</ul><p>" + gws.lang.INTERNET_EXPLORER + ' <a href="javascript: CFInstall.require()">' + gws.lang.CHROME_FRAME + "</a>.</p>")
    }
});
function showNextMove() {
    currentTeam = (currentTeam + 1) % numberOfTeams;
    gws.windows.showScores();
    var b = false;
    if (teams[currentTeam].tiles.length < 1) {
        b = true
    } else {
        nextMove = teams[currentTeam].startTile.appendTo(teams[currentTeam].startPath);
        if ((nextMove.sTileType == "start-empty") || (nextMove.sTileType == "start-wall") || (nextMove.sTileType == "start-bonus") || (nextMove.pairs == "wall")) {
            b = true
        }
    }
    if (b) {
        numberOfLosers += 1;
        if (numberOfLosers >= numberOfTeams) {
            gameHasBeenWon = true;
            gameInPlay = false;
            previewBoard.canvas.style.display = "none";
            if (controlCanvas) {
                controlCanvas.style.display = "none"
            }
            gameBoard.render();
            goBack("game-over");
            gws.audio.play("end-game");
            if (numberOfTeams < 2) {
                teams[0].highScore = startingHighScore;
                teams[0].highSegments = startingHighSegments;
                congratsMessage = "";
                if (teams[0].score > teams[0].highScore) {
                    teams[0].highScore = teams[0].score;
                    if (startingHighScore) {
                        congratsMessage = gws.lang.PERSONAL_BEST + " "
                    }
                }
                if (teams[0].segments > teams[0].highSegments) {
                    teams[0].highSegments = teams[0].segments;
                    if ((congratsMessage == "") && (startingHighScore)) {
                        congratsMessage = gws.lang.AND + " " + teams[0].highSegments + gws.lang.LONGEST_LINE_YET + " "
                    }
                }
                if (!currentGame.limitedtiles) {
                    drawStartTile(teams[currentTeam].startTile, teams[currentTeam].segments, gws.lang.SEGMENTS, teams[currentTeam].color)
                }
                readyForScoreboards = true
            } else {
                readyForScoreboards = true
            }
            hideSwapTile();
            nextMove = false
        } else {
            showNextMove()
        }
    } else {
        numberOfLosers = 0;
        gameBoard.rescale(nextMove.x, nextMove.y);
        gws.background.reposition();
        nextMove.setType("turnstile");
        nextMove.render();
        showPreview();
        activeTileBlink = 40;
        if (currentGame.limitedtiles) {
            var a = teams[currentTeam].aTileReserve.length + teams[currentTeam].tiles.length;
            if (a == 1) {
                gameBoard.incrementalScores.splice(0, 0, new gameBoardMessage(nextMove.windowX(), nextMove.windowY(), gws.lang.LAST_TILE, teams[currentTeam]))
            }
        }
        if (numberOfTeams < 2) {
            teams[0].highScore = startingHighScore;
            teams[0].highSegments = startingHighSegments;
            if (teams[0].score > teams[0].highScore) {
                teams[0].highScore = teams[0].score
            }
            if (teams[0].segments > teams[0].highSegments) {
                teams[0].highSegments = teams[0].segments
            }
        }
        gws.drawStartTile = true;
        holdingTile.pairs = teams[currentTeam].tiles[0].pairs;
        holdingTile.rotating = 0.001;
        if (teams[currentTeam].tiles.length > 1) {
            queueTile.pairs = teams[currentTeam].tiles[1].pairs;
            queueTile.render();
            showSwapTile()
        } else {
            hideSwapTile()
        }
    }
}
function calculateScores() {
    var b = 0;
    for (b in teams) {
        var d = teams[b].segments;
        var c = teams[b].startTile.countSegments(teams[b].startPath, 0, teams[b]);
        teams[b].segments = c.iSegments;
        d = teams[b].segments - d + 1;
        if (( + b == +currentTeam) && (d > 1)) {
            switch (c.sBonusType) {
            case "points":
                gws.audio.play("bonus-points");
                break;
            case "tile":
                gws.audio.play("bonus-tile");
                break;
            case "unlock":
                gws.audio.play("bonus-unlock");
                break;
            default:
                var f = [5, 2, 2, 2, 2, 2, 1, 1, 1, 2];
                var a = Math.min(10, d - 1);
                gws.audio.play("Line" + a + Math.floor(Math.random() * f[a - 1]))
            }
        }
        teams[b].score += (Math.pow(d, 2) - d) / 2;
        teams[b].score += c.iPoints
    }
}
var startingHighScore;
var startingHighSegments;
var nextMove;
var gameHasBeenWon;
var numberOfLosers;
var gameBoard;
var startTile;
var previewBoard;
var controlCanvas = false;
var holdingTile;
var queueBoard;
var queueTile;
var currentGame;
var bFlagDailyChallenge = false;
function updateFlags(a) {
    gws.storage.remove("sakura");
    gws.storage.remove("dc")
}
function aMap(c, b, g, d, a, f) {
    this.canvas = document.getElementById(c);
    this.canvas.code = this;
    this.top = 0;
    this.left = 0;
    this.bottom = 0;
    this.right = 0;
    this.softTop = 0;
    this.softLeft = 0;
    this.softBottom = 0;
    this.softRight = 0;
    this.viewScale = (window.devicePixelRatio || 1);
    this.tileSheet = 0;
    this.animatingTiles = [];
    this.setWindow = function(j, h) {
        if (j && h) {
            this.width = j;
            this.height = h
        } else {
            this.canvas.width = this.canvas.offsetWidth * this.viewScale;
            this.canvas.height = this.canvas.offsetHeight * this.viewScale;
            this.width = this.canvas.offsetWidth;
            this.height = this.canvas.offsetHeight
        }
    };
    this.setWindow(d, a);
    this.setFocus = function(h, k, j) {
        this.scale = j;
        this.x = h + ((this.width) / (2 * j));
        this.y = k + ((this.height) / (2 * j))
    };
    this.setFocus(b, g, f);
    this.setSize = function(h, k, j) {
        if (h) {
            if (j) {
                if (h > this.right) {
                    this.right = h
                }
                if (h < this.left) {
                    this.left = h
                }
            }
            if (h > this.softRight) {
                this.softRight = h
            }
            if (h < this.softLeft) {
                this.softLeft = h
            }
        }
        if (k) {
            if (j) {
                if (k > this.bottom) {
                    this.bottom = k
                }
                if (k < this.top) {
                    this.top = k
                }
            }
            if (k > this.softBottom) {
                this.softBottom = k
            }
            if (k < this.softTop) {
                this.softTop = k
            }
        }
    };
    this.rescale = function(h, l) {
        this.setSize(h, l, true);
        var j = this.right - this.left + 2 * GRID_X;
        var k = this.bottom - this.top + 2 * GRID_Y;
        if ((j / k) > (this.width / this.height)) {
            this.setWindow();
            this.setFocus( - (this.right + this.left) / 2, -(this.bottom + this.top) / 2, this.width / j);
            this.render()
        } else {
            this.setWindow();
            this.setFocus( - (this.right + this.left) / 2, -(this.bottom + this.top) / 2, this.height / k);
            this.render()
        }
    };
    this.holding = false;
    this.mouseX = 0;
    this.mouseY = 0;
    this.canvas.onmousemove = function(h) {
        if (h.offsetX) {
            this.code.mouseX = h.offsetX;
            this.code.mouseY = h.offsetY
        } else {
            if (h.layerX) {
                this.code.mouseX = h.layerX;
                this.code.mouseY = h.layerY
            } else {
                this.code.mouseX = h.clientX;
                this.code.mouseY = h.clientY
            }
        }
    };
    this.context = this.canvas.getContext("2d");
    this.incrementalScores = [];
    this.map = [];
    this.add = function(h, j) {
        this.assignNeighbors(h);
        switch (this.tileSheet) {
        case 1:
            if (h.pairs != "empty") {
                this.setSize(h.x, h.y, j)
            }
            break;
        default:
            if (h.pairs != "wall") {
                this.setSize(h.x, h.y, j)
            }
            break
        }
        if (h.eBonus) {
            this.map.splice(this.map.length, 0, h);
            this.animatingTiles.splice(0, 0, h)
        } else {
            this.map.splice(0, 0, h)
        }
        this.isZ = false;
        return h
    };
    this.remove = function(h) {
        for (b in this.map) {
            if (h == this.map[b]) {
                this.map.splice(b, 1)
            }
        }
    };
    this.world2windowX = function(j, h) {
        return ((this.x + j) + h) * this.scale
    };
    this.world2windowY = function(j, h) {
        return ((this.y + j) + h) * this.scale
    };
    this.window2worldX = function(h) {
        return (h / this.scale) - this.x
    };
    this.window2worldY = function(h) {
        return (h / this.scale) - this.y
    };
    this.isZ = false;
    this.update = function() {
        for (b in this.map) {
            this.map[b].update()
        }
        if (!this.isZ) {
            this.map.sort(function(j, h) {
                return (j.offsetZ) - (h.offsetZ)
            });
            this.isZ = true
        }
    };
    this.render = function() {
        clearTimeout(this.redrawTimeout);
        this.redraw = false;
        this.context.clearRect(0, 0, this.width, this.height);
        for (b in this.map) {
            this.map[b].render()
        }
        if (this.redraw) {
            this.redrawTimeout = setTimeout("redraw();", 5000)
        }
    };
    this.drawHexagon = function(q, p, k, l, m) {
        var r = m || this.context;
        var o = (this.x + q) * this.scale * this.viewScale;
        var n = (this.y + p) * this.scale * this.viewScale;
        var h = OFFSET_Y * k * this.viewScale;
        var j = OFFSET_X * k * this.viewScale;
        k = this.scale * this.viewScale;
        r.fillStyle = l;
        r.strokeStyle = l;
        r.lineWidth = k;
        r.beginPath();
        r.moveTo(o - j, n - h);
        r.lineTo(o + j, n - h);
        r.lineTo(o + 2 * j, n);
        r.lineTo(o + j, n + h);
        r.lineTo(o - j, n + h);
        r.lineTo(o - 2 * j, n);
        r.lineTo(o - j, n - h);
        r.closePath();
        r.fill()
    };
    this.assignNeighbors = function(m) {
        var n = m.x + "," + (m.y - GRID_Y);
        var l = (m.x + GRID_X) + "," + (m.y - OFFSET_Y);
        var k = (m.x + GRID_X) + "," + (m.y + OFFSET_Y);
        var h = m.x + "," + (m.y + GRID_Y);
        var q = (m.x - GRID_X) + "," + (m.y + OFFSET_Y);
        var p = (m.x - GRID_X) + "," + (m.y - OFFSET_Y);
        var o;
        var j = this.map;
        for (o in j) {
            switch (j[o].description) {
            case n:
                m.connect("A", j[o]);
                break;
            case l:
                m.connect("B", j[o]);
                break;
            case k:
                m.connect("C", j[o]);
                break;
            case h:
                m.connect("D", j[o]);
                break;
            case q:
                m.connect("E", j[o]);
                break;
            case p:
                m.connect("F", j[o]);
                break
            }
        }
        return m
    };
    this.getTile = function(h, m) {
        var j = false;
        var l = this.map;
        var k = h + "," + m;
        for (index in l) {
            if (l[index].description == k) {
                j = l[index]
            }
        }
        return j
    };
    this.load = function(k, m, h) {
        this.top = 0;
        this.left = 0;
        this.bottom = 0;
        this.right = 0;
        this.softTop = 0;
        this.softLeft = 0;
        this.softBottom = 0;
        this.softRight = 0;
        this.tileSheet = m;
        this.map = [];
        this.animatingTiles = [];
        var n;
        var l = false;
        var j;
        for (tile in k) {
            if (k[tile].length > 3) {
                n = k[tile][3];
                if (k[tile].length > 4) {
                    l = k[tile][4]
                } else {
                    l = false
                }
            } else {
                n = ["empty", "wall", "bonus"][k[tile][2]];
                l = false
            }
            j = new aTile(k[tile][0], k[tile][1], "", n, this, ["empty", "wall", "bonus"][k[tile][2]], l);
            this.add(j, !h)
        }
        this.rescale(0, 0)
    }
}
gws.classes.menu = function(b, a, c) {
    this.element = b;
    this.isMobile = a;
    this.pages = [];
    this.currentPage = "";
    this.currentHoverIcon = "default";
    this.showing = false;
    this.showFunction = undefined;
    this.hideFunction = undefined;
    if (this.isMobile) {
        this.setup(c.mobile, true)
    } else {
        this.setup(c.pc)
    }
    this.showPage("main")
};
gws.classes.menu.prototype.setup = function(o, c) {
    var p = this,
    d = o.type,
    u = o.buttonType || d,
    a = function(A, B) {
        var y = B.buttons,
        z = function(E) {
            if (!E) {
                E = "default"
            }
            A.hoverIcons[p.currentHoverIcon].style.opacity = 0.01;
            p.currentHoverIcon = E;
            A.hoverIcons[p.currentHoverIcon].style.opacity = 1
        },
        D = new gws.classes.pageSwipe({
            parent: A.element,
            pages: y,
            onSwipe: function(F, E) {
                if (!F.access || (gws.account.expansions & F.access)) {
                    C.setText("default", gws.lang.PLAY || "Play");
                    C.setText("hover", gws.lang.PLAY || "Play")
                } else {
                    C.setText("default", gws.lang.CHECK_IT_OUT || "Check It Out");
                    C.setText("hover", gws.lang.CHECK_IT_OUT || "Check It Out")
                }
                z(F.icon)
            }
        }),
        C = new gws.classes.button(A.element, "play-game " + d + "-menu-button", "", [{
            id: "default",
            generalStyle: "button-default",
            image: gws.assets.copyTile(u + "-menu-buttons", 0, s),
            text: gws.lang.PLAY || "Play",
            textStyle: u + "-menu-button-text"
        },
        {
            id: "hover",
            generalStyle: "button-hover",
            image: gws.assets.copyTile(u + "-menu-buttons", 0, l),
            text: gws.lang.PLAY || "Play",
            textStyle: u + "-menu-button-text",
            onClickFunction: function() {
                var E = D.getValue();
                if (!E.access || (gws.account.expansions & E.access)) {
                    beginGame(E.gameId, E.players)
                } else {
                    showExpansionMenu(loggedIn, E.gameId, E.players)
                }
            }
        }]);
        D.setIndex(0)
    },
    r = function(H, D) {
        var F = D.buttons,
        E = function(J) {
            if (!J) {
                J = "default"
            }
            H.hoverIcons[p.currentHoverIcon].style.opacity = 0.01;
            p.currentHoverIcon = J;
            H.hoverIcons[p.currentHoverIcon].style.opacity = 1
        },
        B = new gws.classes.pageSwipe({
            parent: H.element,
            pages: F,
            onSwipe: function(K, J) {
                if (!K.access || (gws.account.expansions & K.access)) {
                    G.hideLayer("lock");
                    C.hideLayer("lock");
                    A.hideLayer("lock");
                    z.hideLayer("lock");
                    y.hideLayer("lock")
                } else {
                    G.showLayer("lock");
                    C.showLayer("lock");
                    A.showLayer("lock");
                    z.showLayer("lock");
                    y.showLayer("lock")
                }
                E(K.icon)
            }
        }),
        I = function(J) {
            var K = function() {
                var L = B.getValue();
                if (!L.access || (gws.account.expansions & L.access)) {
                    beginGame(L.gameId, J)
                } else {
                    showExpansionMenu(loggedIn, L.gameId, J)
                }
            };
            return new gws.classes.button(H.element, "mini-menu-button", "", [{
                id: "border",
                generalStyle: "mini-button-border"
            },
            {
                id: "default",
                generalStyle: "mini-button-players mini-button-" + J,
                onClickFunction: K
            },
            {
                id: "border-hover",
                generalStyle: "mini-button-border-hover"
            },
            {
                id: "hover",
                generalStyle: "mini-button-players-hover mini-button-" + J + "-hover",
                onClickFunction: K
            },
            {
                id: "lock",
                generalStyle: "mini-button-lock",
                onClickFunction: K
            }])
        },
        G = I(2),
        C = I(3),
        A = I(4),
        z = I(5),
        y = I(6);
        B.setIndex(0)
    };
    this.showFunction = o.show;
    this.hideFunction = o.hide;
    for (var m = 0; m < o.pages.length; m++) {
        var w = o.pages[m];
        this.pages[w.id] = [];
        var t = this.pages[w.id];
        t.element = document.createElement("div");
        t.element.className = d + "-menu-page";
        t.titleBar = gws.createElement(t.element, "div", false, d + "-menu-title-box");
        t.hoverIconContainer = gws.createElement(t.titleBar, "div", false, w.hoverIconContainerClass);
        t.hoverIcons = [];
        for (var j = 0; j < w.hoverIcons.length; j++) {
            var b = gws.assets.copyTile(w.hoverIconImage, w.hoverIcons[j].imageX, w.hoverIcons[j].imageY);
            b.className = "hover-icon";
            t.hoverIconContainer.appendChild(b);
            t.hoverIcons[w.hoverIcons[j].id] = b
        }
        if (w.titleImage) {
            gws.createImage(t.titleBar, "img", false, w.titleImage.styleId, w.titleImage.image)
        }
        if (w.title) {
            gws.createTextBlock(t.titleBar, "div", d + "-menu-title", false, w.title)
        }
        if (w.line) {
            gws.createImage(t.titleBar, "img", d + "-menu-title-line", false, w.line)
        }
        if (w.back) {
            var g = this.createBackFunction(w.back);
            var n = [{
                id: "default",
                generalStyle: "button-default",
                image: gws.assets.copyTile("back-button", 0, 0),
                onClickFunction: g
            },
            {
                id: "hover",
                generalStyle: "button-hover",
                image: gws.assets.copyTile("back-button", 1, 0),
                onClickFunction: g
            }];
            new gws.classes.button(t.element, d + "-menu-back-button", false, n)
        }
        if (o.pages[m].style === "page-swipe") {
            a(t, o.pages[m])
        } else {
            if (o.pages[m].style === "page-swipe-multiplayer") {
                r(t, o.pages[m])
            } else {
                for (var k = 0; k < o.pages[m].buttons.length; k++) {
                    var v = w.buttons[k];
                    var s = v.special ? 2 : 0;
                    var l = v.special ? 3 : 1;
                    var q = v.hoverIcon || "default";
                    var f = [];
                    f[0] = {
                        id: "default",
                        generalStyle: "button-default",
                        image: gws.assets.copyTile(u + "-menu-buttons", 0, s),
                        text: v.text,
                        textStyle: u + "-menu-button-text",
                        onClickFunction: v.onClickFunction
                    };
                    if (!c) {
                        var h = this.createMouseOverFunction(q);
                        f[1] = {
                            id: "hover",
                            generalStyle: "button-hover",
                            image: gws.assets.copyTile(u + "-menu-buttons", 0, l),
                            text: v.text,
                            textStyle: u + "-menu-button-text",
                            onClickFunction: v.onClickFunction,
                            onMouseOverFunction: h,
                            onMouseOutFunction: function() {
                                p.showHoverIcon("default")
                            }
                        }
                    }
                    new gws.classes.button(t.element, d + "-menu-button", v.id, f)
                }
            }
        }
    }
};
gws.classes.menu.prototype.createMouseOverFunction = function(b) {
    var a = this;
    var c = b;
    return function() {
        a.showHoverIcon(c)
    }
};
gws.classes.menu.prototype.createBackFunction = function(b) {
    var a = this;
    var c = b;
    return function() {
        a.showPage(c)
    }
};
gws.classes.menu.prototype.showHoverIcon = function(a) {
    if (!a) {
        a = "default"
    }
    this.pages[this.currentPage].hoverIcons[this.currentHoverIcon].style.opacity = 0.01;
    this.currentHoverIcon = a;
    this.pages[this.currentPage].hoverIcons[this.currentHoverIcon].style.opacity = 1
};
gws.classes.menu.prototype.refresh = function() {
    if (this.showing) {
        this.showPage("main")
    }
};
gws.classes.menu.prototype.show = function(a) {
    if (!this.showing) {
        this.showing = true;
        this.showFunction()
    }
    if (!a || !this.pages[a]) {
        a = "main"
    }
    this.showPage(a)
};
gws.classes.menu.prototype.showPage = function(c) {
    var b = undefined;
    if (pageTracker) {
        pageTracker._trackPageview("/entanglement-" + c)
    }
    if (!c || !this.pages[c]) {
        c = "main"
    }
    if (c == "main" && gws.account.expansions && this.pages["main-w-expansion"]) {
        c = "main-w-expansion"
    }
    this.currentPage = c;
    b = this.element.firstChild;
    if (b) {
        this.element.removeChild(b)
    }
    this.element.appendChild(this.pages[c].element);
    this.currentHoverIcon = "default";
    for (var a in this.pages[this.currentPage].hoverIcons) {
        this.pages[this.currentPage].hoverIcons[a].style.opacity = 0.01
    }
    this.showHoverIcon()
};
gws.classes.menu.prototype.hide = function(b) {
    var a = this;
    if (this.showing) {
        this.showing = false;
        this.hideFunction(b)
    }
}; (function() {
    var a = ["#FE3F46", "#38FFF8", "#FFF869", "#00FE5E", "#FFA425", "#D568FF"];
    defaultNames = ["Red", "Blue", "Yellow", "Green", "Orange", "Purple"];
    processTile = function(g, j, h) {
        var b = [],
        l = 0,
        k = 0,
        c = false;
        if (g && (g != "-")) {
            k = h * 300;
            b.push(k);
            if (Math.abs(h) % 2) {
                l = (j + 0.5) * 346;
                b.push(l)
            } else {
                l = j * 346;
                b.push(l)
            }
            switch (g[0]) {
            case "w":
                b.push(1);
                break;
            case "6":
                b.push(2);
                b.push([0, 7, 2, 9, 4, 11, 6, 1, 8, 3, 10, 5]);
                b.push(6);
                break;
            case "3":
                b.push(2);
                b.push([0, 7, 2, 9, 4, 11, 6, 1, 8, 3, 10, 5]);
                b.push(3);
                break;
            case "p":
                b.push(2);
                b.push([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
                b.push([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
                break;
            default:
                b.push(0);
                break
            }
            if (g.length > 1) {
                c = [];
                var d = g.length - 1;
                for (var f = 0; f < d; f++) {
                    if (g[f + 1] != "0") {
                        c.push([[k, l, +f], defaultNames[ + g[f + 1] - 1], a[ + g[f + 1] - 1], +g[f + 1]])
                    }
                }
            }
            return {
                players: c,
                kind: b
            }
        } else {
            return false
        }
    },
    convertStringToMap = function(m) {
        var f = m.replace(/\|/g, "\n").split("\n"),
        l = 0,
        k = 0,
        h = 0,
        g = f.length,
        c = [],
        d = [],
        b = 0,
        j = 0;
        for (b in f) {
            if (f[b][0] == " ") {
                f[b].replace(" ", "")
            }
            f[b] = f[b].split(" ");
            h = Math.max(h, f[b].length)
        }
        h = Math.floor(h / 2);
        g = Math.floor(g / 2);
        for (k in f) {
            for (l in f[k]) {
                j = processTile(f[k][l], +l - h, +k - g);
                if (j) {
                    c.push(j.kind);
                    if (j.players) {
                        d = d.concat(j.players)
                    }
                }
            }
        }
        d = d.sort(function(o, n) {
            return o[3] - n[3]
        });
        for (b in d) {
            d[b].length = 3
        }
        return {
            players: d,
            map: c
        }
    },
    generateTile = function() {
        var f = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
        var d, b, c;
        for (d = 1; d < 12; d++) {
            b = Math.floor(Math.random() * (1 + d));
            if (b != d) {
                c = f[d];
                f[d] = f[b];
                f[b] = c
            }
        }
        return f.slice()
    },
    generateTiles = function(c) {
        var d = [];
        var b = 0;
        for (b = 0; b < c; b++) {
            d.splice(0, 0, generateTile())
        }
        return d.slice()
    },
    gameDefinition = function(c) {
        var g = false;
        this.options = c;
        this.id = c.id;
        this.title = c.title;
        this.instructions = c.instructions || "";
        this.sparetiles = c.spareTiles || 0;
        this.limitedtiles = c.limitedTiles || 0;
        this.players = c.players;
        this.map = c.map;
        this.tiles = c.tiles || (c.limitedTiles ? generateTiles(c.limitedTiles * this.players.length) : this.tiles = generateTiles(this.map.length));
        this.randomSeed = c.randomSeed || c.randomseed;
        this.timeleft = c.timeleft,
        this.highscorename = c.highscorename,
        this.highscorevalue = c.highscorevalue,
        g = this.tiles || false;
        if (this.players.length === 1) {
            this.players[0][2] = "#b71904"
        }
        for (var d in this.players) {
            if (g) {
                this.players[d].push(g.splice(0, this.sparetiles + 1))
            } else {
                this.players[d].push(generateTiles(this.sparetiles + 1))
            }
        }
        var f;
        for (var b in this.map) {
            f = this.map[b];
            if (f[4]) {
                if (typeof f[4] === "number") {
                    if (g) {
                        f[4] = g.splice(0, f[4])
                    } else {
                        f[4] = generateTiles(f[4])
                    }
                }
            }
        }
    };
    gws.createLocalGame = function(c, b) {
        return gws.loadGame(gws.vars.engine.maps[c] || false, b)
    };
    gws.loadGame = function(b, c) {
        var d = b ? convertStringToMap(b.map, b.tiles) : false;
        if (b) {
            if (b.timeleft) {
                c = 1
            }
            d.players.length = Math.min(c, d.players.length) || 1;
            return new gameDefinition({
                id: currentGameType,
                title: b.title,
                spareTiles: b.spareTiles || b.sparetiles,
                limitedTiles: b.limitedTiles || b.limitedtiles,
                players: d.players,
                map: d.map,
                tiles: b.tiles,
                timeleft: b.timeleft,
                highscorename: b.highscorename,
                highscorevalue: b.highscorevalue,
                randomSeed: b.randomSeed || b.randomseed
            })
        } else {
            return false
        }
    }
})();
gws.applicationCache = window.applicationCache;
gws.applicationCacheUpdateReady = function() {
    try {
        gws.applicationCache.swapCache()
    } catch(a) {}
};
try {
    gws.applicationCache.addEventListener("updateready", gws.applicationCacheUpdateReady, false);
    gws.applicationCache.update()
} catch(e) {}
var popupManager = {};
popupManager.constants = {
    darkCover: "popupManager_darkCover_div",
    darkCoverStyle: ["position:absolute;", "top:0px;", "left:0px;", "padding-right:0px;", "padding-bottom:0px;", "background-color:#000000;", "opacity:0.5;", "-moz-opacity:0.5;", "filter:alpha(opacity=0.5);", "z-index:10000;", "width:100%;", "height:100%;"].join(""),
    openidSpec: {
        identifier_select: "http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select",
        namespace2: "http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0"
    }
};
popupManager.getWindowInnerSize = function() {
    var b = 0;
    var a = 0;
    var c = null;
    if ("innerWidth" in window) {
        b = window.innerWidth;
        a = window.innerHeight
    } else {
        if (("BackCompat" === window.document.compatMode) && ("body" in window.document)) {
            c = window.document.body
        } else {
            if ("documentElement" in window.document) {
                c = window.document.documentElement
            }
        }
        if (c !== null) {
            b = c.offsetWidth;
            a = c.offsetHeight
        }
    }
    return [b, a]
};
popupManager.getParentCoords = function() {
    var b = 0;
    var a = 0;
    if ("screenLeft" in window) {
        b = window.screenLeft;
        a = window.screenTop
    } else {
        if ("screenX" in window) {
            b = window.screenX;
            a = window.screenY
        }
    }
    return [b, a]
};
popupManager.getCenteredCoords = function(b, a) {
    var g = this.getWindowInnerSize();
    var f = this.getParentCoords();
    var d = f[0] + Math.max(0, Math.floor((g[0] - b) / 2));
    var c = f[1] + Math.max(0, Math.floor((g[1] - a) / 2));
    return [d, c]
};
popupManager.darkenScreen = function() {
    var a = window.document.getElementById(window.popupManager.constants.darkCover);
    if (!a) {
        a = window.document.createElement("div");
        a.id = window.popupManager.constants.darkCover;
        a.setAttribute("style", window.popupManager.constants.darkCoverStyle);
        window.document.body.appendChild(a)
    }
    a.style.visibility = "visible"
};
popupManager.createPopupOpener = (function(a) {
    var k = null;
    var t = null;
    var h = this;
    var r = ("shouldEncodeUrls" in a) ? a.shouldEncodeUrls: true;
    var d = function(v) {
        return (r ? encodeURIComponent(v) : v)
    };
    var o = ("identifier" in a) ? d(a.identifier) : this.constants.openidSpec.identifier_select;
    var u = ("identity" in a) ? d(a.identity) : this.constants.openidSpec.identifier_select;
    var g = ("namespace" in a) ? d(a.namespace) : this.constants.openidSpec.namespace2;
    var f = (("onOpenHandler" in a) && ("function" === typeof(a.onOpenHandler))) ? a.onOpenHandler: this.darkenScreen;
    var c = (("onCloseHandler" in a) && ("function" === typeof(a.onCloseHandler))) ? a.onCloseHandler: null;
    var m = ("returnToUrl" in a) ? a.returnToUrl: null;
    var l = ("realm" in a) ? a.realm: null;
    var p = ("opEndpoint" in a) ? a.opEndpoint: null;
    var b = ("extensions" in a) ? a.extensions: null;
    var j = function(w) {
        var v = "";
        for (key in w) {
            v += ["&", key, "=", d(w[key])].join("")
        }
        return v
    };
    var s = function() {
        urlToOpen = p;
        return urlToOpen
    };
    var n = function() {
        return (!t || t.closed)
    };
    var q = function() {
        if (n()) {
            t = null;
            var v = window.document.getElementById(window.popupManager.constants.darkCover);
            if (v) {
                v.style.visibility = "hidden"
            }
            if (c !== null) {
                c()
            }
            if ((null !== k)) {
                window.clearInterval(k);
                k = null
            }
        }
    };
    return {
        popup: function(w, v) {
            var y = s();
            if (f !== null) {
                f()
            }
            var z = h.getCenteredCoords(w, v);
            t = window.open(y, "", "width=" + w + ",height=" + v + ",status=1,location=1,resizable=yes,left=" + z[0] + ",top=" + z[1]);
            k = window.setInterval(q, 80);
            return true
        }
    }
});
gws.classes.pageSwipe = (function() {
    var b = function(d) {
        this.element = document.createElement("div");
        d.parent.appendChild(this.element);
        if (d.image) {
            if (typeof d.image === "string") {
                this.element.style.background = "url('" + d.image + "') no-repeat";
                this.element.style.backgroundSize = "100%"
            } else {
                this.image = d.image;
                this.image.style.width = this.element.style.width;
                this.element.appendChild(this.image)
            }
        }
        if (d.className) {
            this.element.className = d.className
        }
        if (d.text) {
            this.textDiv = document.createElement("div");
            this.textDiv.innerHTML = d.text;
            this.element.appendChild(this.textDiv)
        }
        if (d.onSwipe) {
            this.onSwipe = d.onSwipe(this.value)
        }
        this.value = d.value
    },
    c = function(h) {
        var g = this,
        k = 0,
        f = h.pages,
        d = [],
        j = h.element,
        m = h.parent,
        l = h.className || "page-swipe";
        if (h.onSwipe) {
            this.onSwipe = h.onSwipe
        }
        if (j) {
            this.element = document.getElementById(j)
        } else {
            this.element = document.createElement("div");
            m.appendChild(this.element)
        }
        this.element.className = l;
        this.innerDiv = document.createElement("div");
        this.innerDiv.className = "page-swipe-slider";
        this.element.appendChild(this.innerDiv);
        this.rightDiv = document.createElement("div");
        this.rightDiv.className = "right-arrow";
        this.rightDiv.onclick = function() {
            g.swipe(1)
        };
        this.element.appendChild(this.rightDiv);
        this.leftDiv = document.createElement("div");
        this.leftDiv.className = "left-arrow";
        this.leftDiv.onclick = function() {
            g.swipe( - 1)
        };
        this.element.appendChild(this.leftDiv);
        for (; k < f.length; k++) {
            f[k].parent = this.innerDiv;
            d.push(new b(f[k]))
        }
        this.pages = d;
        this.index = 0
    },
    a = c.prototype;
    a.swipe = function(d) {
        var f = this.pages.length;
        this.swipeTo((this.index + d + f) % f)
    };
    a.setIndex = a.swipeTo = function(d) {
        this.index = d;
        this.innerDiv.style.left = ( - d * 100) + "%";
        if (this.pages[d].onSwipe) {
            this.pages[d].onSwipe()
        }
        if (this.onSwipe) {
            this.onSwipe(this.pages[d].value, d)
        }
    };
    a.getIndex = function() {
        return this.index
    };
    a.setValue = function(f) {
        for (var d = 0; d < this.pages.length; d++) {
            if (this.pages[d].value === f) {
                this.swipeTo(d);
                return true
            }
        }
        return false
    };
    a.getValue = function() {
        return this.pages[this.index].value
    };
    return c
})();
try {
    google.load("payments", "1.0", {
        packages: ["production_config"]
    })
} catch(e) {
    if (DEBUG) {
        if (this.console) {
            console.log("Google payments package not loaded.")
        }
    }
}
gws.iap = {
    items: [],
    success: function() {
        gws.confirmPurchase()
    },
    failure: function() {
        gws.confirmPurchase()
    },
    buy: function(a) {
        var b = this,
        d = new Date().getTime(),
        f = this.items[a],
        c = function(g) {
            goog.payments.inapp.buy({
                jwt: g.jwt,
                success: b.success,
                failure: b.failure
            });
            document.getElementById("goog-cia-frame-container").style.zIndex = "4000";
            document.getElementById("goog-cia-screen-lock").style.zIndex = "3999"
        };
        if (f && (f.expires > d)) {
            c(f.item)
        } else {
            gws.client.getPurchase(gws.lang.LANG_VARIABLE, a, "google",
            function(g) {
                var h = undefined;
                try {
                    h = JSON.parse(g)
                } catch(j) {}
                if (h) {
                    b.items[a] = {
                        item: h.google,
                        expires: new Date().getTime() + 3600000
                    };
                    c(b.items[a].item)
                }
            })
        }
    }
};
gws.ppp = {
    items: [],
    success: function() {
        gws.ppp.flow.closeFlow();
        gws.confirmPurchase()
    },
    failure: function() {
        gws.ppp.flow.closeFlow();
        gws.confirmPurchase()
    },
    buy: function(a) {
        var b = this,
        d = new Date().getTime(),
        f = this.items[a],
        c = function(g) {
            if (gws.ppp.flow) {
                gws.ppp.flow.startFlow("https://www.paypal.com/incontext?token=" + g.TOKEN)
            }
        };
        if (f && (f.expires > d)) {
            c(f.item)
        } else {
            gws.client.getPurchase(gws.lang.LANG_VARIABLE, a, "paypal",
            function(g) {
                var h = undefined;
                try {
                    h = JSON.parse(g)
                } catch(j) {}
                if (h) {
                    b.items[a] = {
                        item: h.paypal,
                        expires: new Date().getTime() + 3600000
                    };
                    c(b.items[a].item)
                }
            })
        }
    }
};
try {
    gws.ppp.flow = new PAYPAL.apps.DGFlow()
} catch(e) {
    gws.ppp.flow = false
}
function aPlayer(g, c, a, b, f, d) {
    this.id = g;
    if (c) {
        this.description = g + " - " + c + " team";
        this.team = c
    } else {
        this.description = g;
        this.team = g
    }
    if (a) {
        this.color = a
    } else {
        this.color = "rgb(" + (155 + Math.floor(Math.random() * 100)) + "," + (155 + Math.floor(Math.random() * 100)) + "," + (155 + Math.floor(Math.random() * 100)) + ")"
    }
    this.startTile = b;
    this.startPath = f;
    this.startTile.colors[this.startPath] = this.color;
    this.startTile.setType("start");
    this.startTile.aStartEndpoints.splice(0, 0, this.startPath);
    this.parent = d;
    this.parent.rescale(b.x, b.y);
    this.update = function() {};
    this.aTileReserve = [];
    this.tiles = [];
    this.addTile = function(h) {
        this.tiles.splice(0, 0, h);
        return h
    };
    this.removeTile = function(h) {
        if (!h) {
            h = this.tiles[0]
        }
        for (x in this.tiles) {
            if (h == this.tiles[x]) {
                this.tiles.splice(x, 1);
                return h
            }
        }
        return false
    };
    this.swapTiles = function() {
        if (this.tiles.length > 1) {
            return this.addTile(this.removeTile(this.tiles[this.tiles.length - 1]))
        }
        return false
    };
    this.highScore = 0;
    this.score = 0;
    this.segments = 0;
    this.highSegments = 0
}
function aSelectBox(c, j, b, l, g) {
    var f = 25.9;
    this.parent = document.getElementById(c);
    this.parent.className = "selection-box";
    this.parent.selectBox = this;
    this.titles = j.slice();
    this.values = b.slice();
    this.index = 0;
    this.size = j.length;
    this.selectFunction = l;
    var h = '<div id="' + c + '-inside-window" class="selection-box-inside"><table><tr>';
    var k = 0;
    for (k in this.titles) {
        h += '<td><div class="selection-box-item"><span>' + this.titles[k] + "</span></div></td>"
    }
    h += "</tr></table></div>";
    var a = "<img src='i/arrow-left.png' alt='" + gws.lang.PREVIOUS + "' id='" + c + "-left' class='selection-box-left-arrow' />";
    var d = "<img src='i/arrow-right.png' alt='" + gws.lang.NEXT + "' id='" + c + "-right' class='selection-box-right-arrow' />";
    this.parent.innerHTML = "<table><tr><td>" + a + '</td><td class="selection-box-window-outer"><div id="' + c + '-window" class="selection-box-window-inner">' + h + "</div></td><td>" + d + "</td></tr></table>";
    this.leftButton = document.getElementById(c + "-left");
    this.rightButton = document.getElementById(c + "-right");
    this.innerWindow = document.getElementById(c + "-inside-window");
    this.leftButton.selectBox = this;
    this.rightButton.selectBox = this;
    this.rightButton.onclick = function(m) {
        this.selectBox.scroll(1)
    };
    this.leftButton.onclick = function(m) {
        this.selectBox.scroll( - 1)
    };
    if (g) {
        this.index = g % this.size;
        this.innerWindow.style.left = ( - f * this.index) + "em"
    }
    this.scroll = function(m) {
        this.index = (this.index + m + this.size) % this.size;
        this.innerWindow.style.left = ( - f * this.index) + "em";
        this.selectFunction([this.titles[this.index], this.values[this.index]])
    };
    this.getSelection = function() {
        return [this.titles[this.index], this.values[this.index]]
    };
    this.setSelectionByTitle = function(n) {
        var m = 0;
        for (m in this.titles) {
            if (this.titles[m] == n) {
                this.setIndex(m)
            }
        }
    };
    this.setSelectionByValue = function(p) {
        var m = 0;
        var n = false;
        for (m in this.values) {
            if (this.values[m] == p) {
                this.setIndex(m);
                n = true
            }
        }
        if (!n) {
            try {
                for (m in this.values) {
                    if (this.values[m][0] == p) {
                        this.setIndex(m)
                    }
                }
            } catch(o) {}
        }
    };
    this.setIndex = function(m) {
        this.index = +m;
        this.scroll(0)
    }
}
gws.vars = {
    engine: {
        maps: {
            map1: {
                title: gws.lang.SINGLE_TILE_SOLITAIRE || "Single Tile Solitaire",
                spareTiles: 0,
                map: "- - w w w w w - -\n - w . . . . w - \n- w . . . . . w -\n w . . . . . . w \nw . . . .103050204060 . . . w\n w . . . . . . w \n- w . . . . . w -\n - w . . . . w - \n- - w w w w w - -\n"
            },
            map2: {
                title: gws.lang.SOLITAIRE || "Solitaire",
                spareTiles: 1,
                map: "- - w w w w w - -\n - w . . . . w - \n- w . . . . . w -\n w . . . . . . w \nw . . . .103050204060 . . . w\n w . . . . . . w \n- w . . . . . w -\n - w . . . . w - \n- - w w w w w - -\n"
            }
        }
    },
    map: {
        width: 780,
        height: 450,
        scale: 1,
        offsetX: 100,
        offsetY: 173,
        gridX: 300,
        gridY: 346
    },
    view: {
        flyingScoreSpeed: 0.67,
        unit: {
            bodyMaximum: 10,
            bodyMinimum: 5,
            bodyWidth: 980,
            bodyHeight: 640
        },
        mainMenu: {
            pc: {
                type: "main",
                bgImage: "i/menu_background.png",
                show: function() {
                    hidePlayAgain();
                    goBack("menu");
                    gws.storage.set("lastGamePlayed", -1);
                    document.getElementById("main-menu").style.display = "block";
                    document.getElementById("main-menu").style.opacity = "0";
                    document.getElementById("main-menu-background").style.display = "block";
                    document.getElementById("main-menu-background").style.opacity = "0";
                    setTimeout("document.getElementById('main-menu').style.opacity = '1';document.getElementById('main-menu-background').style.opacity = '1';", 10);
                    gws.audio.play("WindowOpen")
                },
                hide: function(a) {
                    setTimeout(function() {
                        document.getElementById("main-menu").style.display = "none"
                    },
                    1000);
                    document.getElementById("main-menu").style.opacity = "0";
                    gws.audio.play("WindowClose");
                    if (a.removeBG) {
                        hideMenuBackground();
                        showTitle()
                    }
                },
                pages: [{
                    id: "main",
                    buttons: [{
                        id: "mm-solitaire-button",
                        text: gws.lang.SOLITAIRE,
                        hoverIcon: "solitaire",
                        onClickFunction: function() {
                            gws.mainMenu.showPage("solitaire")
                        }
                    },
                    {
                        id: "mm-multiplayer-button",
                        text: gws.lang.MULTIPLAYER,
                        hoverIcon: "multiplayer",
                        onClickFunction: function() {
                            if (gws.account.expansions) {
                                gws.mainMenu.showPage("expansion-multiplayer")
                            } else {
                                gws.mainMenu.showPage("multiplayer")
                            }
                        }
                    },
                    {
                        id: "mm-more-maps-button",
                        text: gws.lang.GET_MORE_MAPS,
                        hoverIcon: "more-maps",
                        special: true,
                        onClickFunction: function() {
                            showExpansionMenu(loggedIn)
                        }
                    },
                    {
                        id: "mm-high-scores-button",
                        text: gws.lang.HIGH_SCORES,
                        hoverIcon: "high-scores",
                        onClickFunction: function() {
                            showScoreBoard2(true, 2, 7);
                            gws.mainMenu.hide({
                                removeBG: false
                            })
                        }
                    },
                    {
                        id: "mm-about-button",
                        text: gws.lang.ABOUT_ENTANGLEMENT,
                        hoverIcon: "about",
                        onClickFunction: function() {
                            showDialog(DIALOG_ABOUT_GW);
                            gws.mainMenu.hide({
                                removeBG: false
                            })
                        }
                    }],
                    hoverIconContainerClass: "main-hover-container",
                    hoverIconImage: "menu-icons",
                    hoverIcons: [{
                        id: "default",
                        imageX: 0,
                        imageY: 0
                    },
                    {
                        id: "solitaire",
                        imageX: 1,
                        imageY: 0
                    },
                    {
                        id: "more-maps",
                        imageX: 2,
                        imageY: 0
                    },
                    {
                        id: "high-scores",
                        imageX: 3,
                        imageY: 0
                    },
                    {
                        id: "about",
                        imageX: 4,
                        imageY: 0
                    },
                    {
                        id: "multiplayer",
                        imageX: 0,
                        imageY: 2
                    }]
                },
                {
                    id: "main-w-expansion",
                    buttons: [{
                        id: "mm-solitaire-button",
                        text: gws.lang.SOLITAIRE,
                        hoverIcon: "solitaire",
                        onClickFunction: function() {
                            gws.mainMenu.showPage("solitaire")
                        }
                    },
                    {
                        id: "mm-multiplayer-button",
                        text: gws.lang.MULTIPLAYER,
                        hoverIcon: "multiplayer",
                        onClickFunction: function() {
                            gws.mainMenu.showPage("multiplayer")
                        }
                    },
                    {
                        id: "mm-high-scores-button",
                        text: gws.lang.HIGH_SCORES,
                        hoverIcon: "high-scores",
                        onClickFunction: function() {
                            showScoreBoard2(true, 2, 7);
                            gws.mainMenu.hide({
                                removeBG: false
                            })
                        }
                    },
                    {
                        id: "mm-about-button",
                        text: gws.lang.ABOUT_ENTANGLEMENT,
                        hoverIcon: "about",
                        onClickFunction: function() {
                            showDialog(DIALOG_ABOUT_GW);
                            gws.mainMenu.hide({
                                removeBG: false
                            })
                        }
                    }],
                    hoverIconContainerClass: "main-hover-container",
                    hoverIconImage: "menu-icons",
                    hoverIcons: [{
                        id: "default",
                        imageX: 0,
                        imageY: 0
                    },
                    {
                        id: "solitaire",
                        imageX: 1,
                        imageY: 0
                    },
                    {
                        id: "high-scores",
                        imageX: 3,
                        imageY: 0
                    },
                    {
                        id: "about",
                        imageX: 4,
                        imageY: 0
                    },
                    {
                        id: "multiplayer",
                        imageX: 0,
                        imageY: 2
                    }]
                },
                {
                    id: "solitaire",
                    title: gws.lang.SOLITAIRE,
                    line: "i/line.png",
                    back: "main",
                    hoverIconContainerClass: "sub-hover-container",
                    hoverIconImage: "menu-icons",
                    style: "page-swipe",
                    buttons: [{
                        className: "ss-classic",
                        text: gws.lang.CLASSIC,
                        value: {
                            gameId: 2,
                            players: 1,
                            access: 0,
                            icon: "default"
                        }
                    },
                    {
                        className: "ss-sakura-grove",
                        text: gws.lang.SAKURA_GROVE,
                        value: {
                            gameId: 21,
                            players: 1,
                            access: 5,
                            icon: "sakura"
                        }
                    },
                    {
                        className: "ss-hanna-blossom",
                        text: gws.lang.HANA_BLOSSOM,
                        value: {
                            gameId: 15,
                            players: 1,
                            access: 5,
                            icon: "sakura"
                        }
                    },
                    {
                        className: "ss-lotus-petal",
                        text: gws.lang.LOTUS_PETAL,
                        value: {
                            gameId: 9,
                            players: 1,
                            access: 5,
                            icon: "sakura"
                        }
                    },
                    {
                        className: "ss-daily-challenge",
                        text: gws.lang.DAILY_CHALLENGE,
                        value: {
                            gameId: 27,
                            players: 1,
                            access: 3,
                            icon: "default"
                        }
                    }],
                    hoverIcons: [{
                        id: "default",
                        imageX: 1,
                        imageY: 0
                    },
                    {
                        id: "sakura",
                        imageX: 5,
                        imageY: 0
                    }]
                },
                {
                    id: "multiplayer",
                    title: gws.lang.MULTIPLAYER,
                    line: "i/line.png",
                    back: "main",
                    hoverIconContainerClass: "sub-hover-container",
                    hoverIconImage: "menu-icons",
                    style: "page-swipe-multiplayer",
                    buttons: [{
                        className: "ss-classic",
                        text: gws.lang.CLASSIC,
                        value: {
                            gameId: 2,
                            access: 0,
                            icon: "default"
                        }
                    },
                    {
                        className: "ss-sakura-grove",
                        text: gws.lang.SAKURA_GROVE,
                        value: {
                            gameId: 21,
                            access: 5,
                            icon: "sakura"
                        }
                    },
                    {
                        className: "ss-hanna-blossom",
                        text: gws.lang.HANA_BLOSSOM,
                        value: {
                            gameId: 15,
                            access: 5,
                            icon: "sakura"
                        }
                    },
                    {
                        className: "ss-lotus-petal",
                        text: gws.lang.LOTUS_PETAL,
                        value: {
                            gameId: 9,
                            access: 5,
                            icon: "sakura"
                        }
                    }],
                    hoverIcons: [{
                        id: "default",
                        imageX: 1,
                        imageY: 0
                    },
                    {
                        id: "sakura",
                        imageX: 5,
                        imageY: 0
                    }]
                }]
            },
            mobile: {
                type: "main",
                bgImage: "i/menu_background.png",
                show: function() {
                    hidePlayAgain();
                    goBack("menu");
                    gws.storage.set("lastGamePlayed", -1);
                    document.getElementById("main-menu").style.display = "block";
                    document.getElementById("main-menu").style.opacity = "0";
                    document.getElementById("main-menu-background").style.display = "block";
                    document.getElementById("main-menu-background").style.opacity = "0";
                    setTimeout("document.getElementById('main-menu').style.opacity = '1';document.getElementById('main-menu-background').style.opacity = '1';", 10);
                    gws.audio.play("WindowOpen")
                },
                hide: function(a) {
                    setTimeout(function() {
                        document.getElementById("main-menu").style.display = "none"
                    },
                    1000);
                    document.getElementById("main-menu").style.opacity = "0";
                    gws.audio.play("WindowClose");
                    if (a.removeBG) {
                        hideMenuBackground();
                        showTitle()
                    }
                },
                pages: [{
                    id: "main",
                    titleImage: {
                        image: "i/logo-mobile.png",
                        styleId: "menu-logo"
                    },
                    buttons: [{
                        id: "mm-solitaire-button",
                        text: gws.lang.SOLITAIRE,
                        onClickFunction: function() {
                            gws.mainMenu.showPage("solitaire")
                        }
                    },
                    {
                        id: "mm-multiplayer-button",
                        text: gws.lang.MULTIPLAYER,
                        onClickFunction: function() {
                            if (gws.account.expansions) {
                                gws.mainMenu.showPage("expansion-multiplayer")
                            } else {
                                gws.mainMenu.showPage("multiplayer")
                            }
                        }
                    },
                    {
                        id: "mm-more-maps-button",
                        text: gws.lang.GET_MORE_MAPS,
                        special: true,
                        onClickFunction: function() {
                            showExpansionMenu(loggedIn)
                        }
                    },
                    {
                        id: "mm-high-scores-button",
                        text: gws.lang.HIGH_SCORES,
                        onClickFunction: function() {
                            showScoreBoard2(true, 2, 7);
                            gws.mainMenu.hide({
                                removeBG: false
                            })
                        }
                    },
                    {
                        id: "mm-about-button",
                        text: gws.lang.ABOUT_ENTANGLEMENT,
                        onClickFunction: function() {
                            showDialog(DIALOG_ABOUT_GW);
                            gws.mainMenu.hide({
                                removeBG: false
                            })
                        }
                    }],
                    hoverIconContainerClass: "main-hover-container",
                    hoverIconImage: "menu-icons",
                    hoverIcons: [{
                        id: "default",
                        imageX: 0,
                        imageY: 0
                    }]
                },
                {
                    id: "main-w-expansion",
                    buttons: [{
                        id: "mm-solitaire-button",
                        text: gws.lang.SOLITAIRE,
                        onClickFunction: function() {
                            gws.mainMenu.showPage("solitaire")
                        }
                    },
                    {
                        id: "mm-multiplayer-button",
                        text: gws.lang.MULTIPLAYER,
                        onClickFunction: function() {
                            gws.mainMenu.showPage("multiplayer")
                        }
                    },
                    {
                        id: "mm-high-scores-button",
                        text: gws.lang.HIGH_SCORES,
                        onClickFunction: function() {
                            showScoreBoard2(true, 2, 7);
                            gws.mainMenu.hide({
                                removeBG: false
                            })
                        }
                    },
                    {
                        id: "mm-about-button",
                        text: gws.lang.ABOUT_ENTANGLEMENT,
                        onClickFunction: function() {
                            showDialog(DIALOG_ABOUT_GW);
                            gws.mainMenu.hide({
                                removeBG: false
                            })
                        }
                    }],
                    hoverIconContainerClass: "main-hover-container",
                    hoverIconImage: "menu-icons",
                    hoverIcons: [{
                        id: "default",
                        imageX: 0,
                        imageY: 0
                    }]
                },
                {
                    id: "solitaire",
                    title: gws.lang.SOLITAIRE,
                    line: "i/line.png",
                    back: "main",
                    hoverIconContainerClass: "sub-hover-container",
                    hoverIconImage: "menu-icons",
                    style: "page-swipe",
                    buttons: [{
                        className: "ss-classic",
                        text: gws.lang.CLASSIC,
                        value: {
                            gameId: 2,
                            players: 1,
                            access: 0,
                            icon: "default"
                        }
                    },
                    {
                        className: "ss-sakura-grove",
                        text: gws.lang.SAKURA_GROVE,
                        value: {
                            gameId: 21,
                            players: 1,
                            access: 5,
                            icon: "sakura"
                        }
                    },
                    {
                        className: "ss-hanna-blossom",
                        text: gws.lang.HANA_BLOSSOM,
                        value: {
                            gameId: 15,
                            players: 1,
                            access: 5,
                            icon: "sakura"
                        }
                    },
                    {
                        className: "ss-lotus-petal",
                        text: gws.lang.LOTUS_PETAL,
                        value: {
                            gameId: 9,
                            players: 1,
                            access: 5,
                            icon: "sakura"
                        }
                    },
                    {
                        className: "ss-daily-challenge",
                        text: gws.lang.DAILY_CHALLENGE,
                        value: {
                            gameId: 27,
                            players: 1,
                            access: 3,
                            icon: "default"
                        }
                    }],
                    hoverIcons: [{
                        id: "default",
                        imageX: 1,
                        imageY: 0
                    },
                    {
                        id: "sakura",
                        imageX: 5,
                        imageY: 0
                    }]
                },
                {
                    id: "multiplayer",
                    title: gws.lang.MULTIPLAYER,
                    line: "i/line.png",
                    back: "main",
                    hoverIconContainerClass: "sub-hover-container",
                    hoverIconImage: "menu-icons",
                    style: "page-swipe-multiplayer",
                    buttons: [{
                        className: "ss-classic",
                        text: gws.lang.CLASSIC,
                        value: {
                            gameId: 2,
                            access: 0,
                            icon: "default"
                        }
                    },
                    {
                        className: "ss-sakura-grove",
                        text: gws.lang.SAKURA_GROVE,
                        value: {
                            gameId: 21,
                            access: 5,
                            icon: "sakura"
                        }
                    },
                    {
                        className: "ss-hanna-blossom",
                        text: gws.lang.HANA_BLOSSOM,
                        value: {
                            gameId: 15,
                            access: 5,
                            icon: "sakura"
                        }
                    },
                    {
                        className: "ss-lotus-petal",
                        text: gws.lang.LOTUS_PETAL,
                        value: {
                            gameId: 9,
                            access: 5,
                            icon: "sakura"
                        }
                    }],
                    hoverIcons: [{
                        id: "default",
                        imageX: 1,
                        imageY: 0
                    },
                    {
                        id: "sakura",
                        imageX: 5,
                        imageY: 0
                    }]
                }]
            }
        },
        sideMenu: {
            pc: {
                type: "side",
                show: function() {
                    document.getElementById("side-menu").style.right = 0;
                    gws.audio.play("WindowOpen")
                },
                hide: function(a) {
                    document.getElementById("side-menu").style.right = "-31.8em";
                    gws.audio.play("WindowClose")
                },
                pages: [{
                    id: "main",
                    line: "i/line-red.png",
                    buttons: [{
                        id: "sm-main-menu-button",
                        text: gws.lang.MAIN_MENU,
                        hoverIcon: "main-menu",
                        onClickFunction: function() {
                            if (gameInPlay) {
                                showDialog(DIALOG_CONFIRM_END)
                            } else {
                                gws.mainMenu.show()
                            }
                        }
                    },
                    {
                        id: "sm-new-game-button",
                        text: gws.lang.NEW_GAME,
                        hoverIcon: "new-game",
                        onClickFunction: function() {
                            if (gameInPlay) {
                                showDialog(DIALOG_CONFIRM_NEW)
                            } else {
                                beginGame(currentGameType);
                                hidePlayAgain()
                            }
                        }
                    },
                    {
                        id: "sm-how-to-play-button",
                        text: gws.lang.HOW_TO_PLAY,
                        hoverIcon: "how-to-play",
                        onClickFunction: function() {
                            showDialog(currentGame.instructions, false, true)
                        }
                    },
                    {
                        id: "sm-scoreboard-button",
                        text: gws.lang.SCOREBOARD,
                        hoverIcon: "scoreboard",
                        onClickFunction: function() {
                            showScoreBoard()
                        }
                    }],
                    hoverIconContainerClass: "side-hover-container",
                    hoverIconImage: "side-icons",
                    hoverIcons: [{
                        id: "default",
                        imageX: 0,
                        imageY: 0
                    },
                    {
                        id: "how-to-play",
                        imageX: 1,
                        imageY: 0
                    },
                    {
                        id: "main-menu",
                        imageX: 2,
                        imageY: 0
                    },
                    {
                        id: "new-game",
                        imageX: 3,
                        imageY: 0
                    },
                    {
                        id: "scoreboard",
                        imageX: 4,
                        imageY: 0
                    }]
                },
                {
                    id: "more",
                    line: "i/line-red.png",
                    buttons: [{
                        id: "sm-get-more-maps-button",
                        text: gws.lang.GET_MORE_MAPS,
                        hoverIcon: "default",
                        onClickFunction: function() {
                            showExpansionMenu(loggedIn)
                        }
                    },
                    {
                        id: "sm-get-the-music-button",
                        text: gws.lang.GET_THE_MUSIC,
                        hoverIcon: "default",
                        onClickFunction: function() {
                            window.open("http://blog.gopherwoodstudios.com/p/grab-entanglement-music.html", "_blank")
                        }
                    },
                    {
                        id: "sm-other-devices-button",
                        text: gws.lang.OTHER_DEVICES,
                        hoverIcon: "default",
                        onClickFunction: function() {
                            window.open("http://blog.gopherwoodstudios.com/p/entanglement-on-iphone-and-ipad.html", "_blank")
                        }
                    }],
                    hoverIconContainerClass: "side-hover-container",
                    hoverIconImage: "side-icons",
                    hoverIcons: [{
                        id: "default",
                        imageX: 0,
                        imageY: 0
                    }]
                }]
            },
            mobile: {
                type: "side",
                buttonType: "main",
                show: function() {
                    goBack("side-menu");
                    gws.controlBar.showMenuButton();
                    document.getElementById("side-menu").style.bottom = "50%";
                    gws.audio.play("WindowOpen");
                    document.getElementById("bb-menu-on").style.visibility = "visible"
                },
                hide: function(a) {
                    document.getElementById("side-menu").style.bottom = "-100%";
                    gws.audio.play("WindowClose");
                    document.getElementById("bb-menu-on").style.visibility = "hidden"
                },
                pages: [{
                    id: "main",
                    line: "i/line-red.png",
                    buttons: [{
                        id: "sm-main-menu-button",
                        text: gws.lang.MAIN_MENU,
                        hoverIcon: "main-menu",
                        onClickFunction: function() {
                            if (gameInPlay) {
                                showDialog(DIALOG_CONFIRM_END)
                            } else {
                                gws.mainMenu.show()
                            }
                            gws.sideMenu.hide();
                            gws.controlBar.hideMenuButton()
                        }
                    },
                    {
                        id: "sm-new-game-button",
                        text: gws.lang.NEW_GAME,
                        hoverIcon: "new-game",
                        onClickFunction: function() {
                            if (gameInPlay) {
                                showDialog(DIALOG_CONFIRM_NEW);
                                gws.controlBar.hideMenuButton()
                            } else {
                                beginGame(currentGameType);
                                hidePlayAgain()
                            }
                            gws.sideMenu.hide()
                        }
                    },
                    {
                        id: "sm-how-to-play-button",
                        text: gws.lang.HOW_TO_PLAY,
                        hoverIcon: "how-to-play",
                        onClickFunction: function() {
                            showDialog(currentGame.instructions, false, true);
                            gws.sideMenu.hide();
                            gws.controlBar.hideMenuButton()
                        }
                    },
                    {
                        id: "sm-scoreboard-button",
                        text: gws.lang.SCOREBOARD,
                        hoverIcon: "scoreboard",
                        onClickFunction: function() {
                            showScoreBoard();
                            gws.sideMenu.hide()
                        }
                    },
                    {
                        id: "sm-get-more-button",
                        text: gws.lang.GET_MORE,
                        hoverIcon: "default",
                        onClickFunction: function() {
                            gws.sideMenu.showPage("more")
                        }
                    }],
                    hoverIconContainerClass: "side-hover-container",
                    hoverIconImage: "side-icons",
                    hoverIcons: [{
                        id: "default",
                        imageX: 0,
                        imageY: 0
                    },
                    {
                        id: "how-to-play",
                        imageX: 1,
                        imageY: 0
                    },
                    {
                        id: "main-menu",
                        imageX: 2,
                        imageY: 0
                    },
                    {
                        id: "new-game",
                        imageX: 3,
                        imageY: 0
                    },
                    {
                        id: "scoreboard",
                        imageX: 4,
                        imageY: 0
                    }]
                },
                {
                    id: "more",
                    line: "i/line-red.png",
                    buttons: [{
                        id: "sm-back-button",
                        text: gws.lang.BACK,
                        hoverIcon: "default",
                        onClickFunction: function() {
                            gws.sideMenu.showPage("main")
                        }
                    },
                    {
                        id: "sm-get-more-maps-button",
                        text: gws.lang.GET_MORE_MAPS,
                        hoverIcon: "default",
                        onClickFunction: function() {
                            showExpansionMenu(loggedIn);
                            gws.sideMenu.hide();
                            gws.controlBar.hideMenuButton()
                        }
                    },
                    {
                        id: "sm-get-the-music-button",
                        text: gws.lang.GET_THE_MUSIC,
                        hoverIcon: "default",
                        onClickFunction: function() {
                            window.open("http://blog.gopherwoodstudios.com/p/grab-entanglement-music.html", "_blank")
                        }
                    },
                    {
                        id: "sm-other-devices-button",
                        text: gws.lang.OTHER_DEVICES,
                        hoverIcon: "default",
                        onClickFunction: function() {
                            window.open("http://blog.gopherwoodstudios.com/p/entanglement-on-iphone-and-ipad.html", "_blank")
                        }
                    }],
                    hoverIconContainerClass: "side-hover-container",
                    hoverIconImage: "side-icons",
                    hoverIcons: [{
                        id: "default",
                        imageX: 0,
                        imageY: 0
                    }]
                }]
            }
        },
        sounds: [{
            title: "swap-tile",
            source: "sfx",
            start: 1,
            length: 0.3
        },
        {
            title: "WindowOpen",
            source: "sfx",
            start: 2.5,
            length: 1
        },
        {
            title: "WindowClose",
            source: "sfx",
            start: 4.5,
            length: 1
        },
        {
            title: "Line10",
            source: "sfx",
            start: 6.5,
            end: 7.8
        },
        {
            title: "Line11",
            source: "sfx",
            start: 9,
            end: 10.05
        },
        {
            title: "Line12",
            source: "sfx",
            start: 11,
            end: 12.05
        },
        {
            title: "Line13",
            source: "sfx",
            start: 13,
            end: 14.05
        },
        {
            title: "Line14",
            source: "sfx",
            start: 15,
            end: 16.05
        },
        {
            title: "Line20",
            source: "sfx",
            start: 17,
            end: 18.25
        },
        {
            title: "Line21",
            source: "sfx",
            start: 19.5,
            end: 20.7
        },
        {
            title: "Line30",
            source: "sfx",
            start: 22,
            end: 23.1
        },
        {
            title: "Line31",
            source: "sfx",
            start: 24,
            end: 25.35
        },
        {
            title: "Line40",
            source: "sfx",
            start: 26.5,
            end: 28.05
        },
        {
            title: "Line41",
            source: "sfx",
            start: 29,
            end: 30.65
        },
        {
            title: "Line50",
            source: "sfx",
            start: 31.5,
            end: 33.15
        },
        {
            title: "Line51",
            source: "sfx",
            start: 34,
            end: 35.95
        },
        {
            title: "Line60",
            source: "sfx",
            start: 37,
            end: 38.75
        },
        {
            title: "Line61",
            source: "sfx",
            start: 40,
            end: 42.3
        },
        {
            title: "Line70",
            source: "sfx",
            start: 43.5,
            end: 46.25
        },
        {
            title: "Line80",
            source: "sfx",
            start: 47.5,
            end: 49.55
        },
        {
            title: "Line90",
            source: "sfx",
            start: 50.5,
            end: 53.3
        },
        {
            title: "Line100",
            source: "sfx",
            start: 54.5,
            end: 57.2
        },
        {
            title: "Line101",
            source: "sfx",
            start: 58.5,
            end: 61.15
        }]
    }
};
gws.classes = gws.classes || {};
imgSparks = [new Image(), new Image()];
imgSparks[0].src = "i/sparks1.png";
imgSparks[1].src = "i/sparks2.png";
function gameBoardMessage(a, d, c, b) {
    this.speed = gws.vars.view.flyingScoreSpeed;
    this.x = a;
    this.y = d;
    this.value = c;
    if (b) {
        this.team = b;
        this.color = b.color
    } else {
        this.color = "#fff582"
    }
    this.parent = document.getElementById("moving-scores");
    this.element = document.createElement("div");
    this.element.className = "gameboard-message";
    this.element.style.position = "absolute";
    this.element.style.top = this.y + "px";
    this.element.style.left = this.x + "px";
    this.element.style.color = this.color;
    this.element.style.textShadow = "0px 0px 3px #ffffff";
    if (numberOfTeams > 1) {
        this.element.style.textShadow = "0px 0px 3px #000000"
    }
    this.element.style.display = "none";
    this.element.object = this;
    this.parent.insertBefore(this.element, null);
    this.element.innerHTML = this.value;
    this.killMe = false;
    this.counter = 0;
    this.update = function() {
        this.counter += this.speed;
        if (this.counter >= 1) {
            this.element.style.display = "block"
        }
        if (this.counter < 50) {
            this.element.style.opacity = (50 - this.counter) / 50
        } else {
            this.killMe = true
        }
    }
}
function bigGameBoardMessage(a) {
    this.speed = gws.vars.view.flyingScoreSpeed;
    this.value = a;
    this.parent = document.getElementById("moving-scores");
    this.element = document.createElement("div");
    this.element.className = "big-gameboard-message";
    this.element.style.display = "none";
    this.element.object = this;
    this.parent.insertBefore(this.element, null);
    this.element.innerHTML = this.value;
    this.killMe = false;
    this.counter = 0;
    this.update = function() {
        this.counter += this.speed;
        if (this.counter >= 1) {
            this.element.style.display = "block"
        }
        if (this.counter < 15) {
            this.element.style.opacity = this.counter / 15
        } else {
            if (this.counter < 65) {
                this.element.style.opacity = (65 - this.counter) / 50
            } else {
                this.killMe = true
            }
        }
    }
}
function bonusNote(f, a, c, g, b, d) {
    this.speed = gws.vars.view.flyingScoreSpeed;
    this.iDelay = d;
    if (!this.iDelay) {
        this.iDelay = 75
    }
    this.kTile = f;
    this.sDescription = g;
    this.team = b;
    this.fScale = f.parent.scale * a;
    this.iNumber = c;
    this.iStartWidth = Math.floor(this.fScale * OFFSET_X * 3);
    this.iEndWidth = Math.floor(this.fScale * OFFSET_X * 5);
    this.iWidthRange = this.iEndWidth - this.iStartWidth;
    this.iStartHeight = Math.floor(this.fScale * OFFSET_Y * 1.5);
    this.iEndHeight = Math.floor(this.fScale * OFFSET_Y * 2.5);
    this.iHeightRange = this.iEndHeight - this.iStartHeight;
    this.parent = document.getElementById("moving-scores");
    this.element = document.createElement("canvas");
    this.element.className = "bonus-note";
    this.element.style.position = "absolute";
    this.element.style.zIndex = "52";
    this.element.style.top = (this.kTile.windowY() - (this.iStartHeight / 2)) + "px";
    this.element.style.left = (this.kTile.windowX() - (this.iStartWidth / 2)) + "px";
    this.element.style.width = this.iStartWidth + "px";
    this.element.style.height = this.iStartHeight + "px";
    this.element.width = "200";
    this.element.height = "173";
    this.element.style.display = "block";
    this.element.style.opacity = "0.01";
    this.element.object = this;
    this.parent.insertBefore(this.element, null);
    this.image = document.getElementById("bonus-tiles");
    this.imageX = 0;
    this.imageY = 0;
    if (g == "Bonus Tile") {
        this.imageX = 200
    }
    this.ctx = this.element.getContext("2d");
    this.killMe = false;
    this.firstStep = parseInt(0.15 * this.iDelay);
    this.secondStep = this.iDelay - this.firstStep;
    this.counter = 0;
    this.counterStart = 0;
    this.counterEnd = this.iDelay;
    this.update = function() {
        this.counter += this.speed;
        if (this.counter >= this.counterEnd) {
            this.killMe = true
        } else {
            if (this.counter <= this.firstStep) {
                this.element.style.opacity = (this.counter / this.firstStep);
                if (this.team.startTile == this.kTile) {
                    var n = this.iHeightRange * (this.counter / this.firstStep);
                    var k = this.iWidthRange * (this.counter / this.firstStep);
                    this.element.style.top = (this.kTile.windowY() - ((this.iStartHeight + n) / 2)) + "px";
                    this.element.style.left = (this.kTile.windowX() - ((this.iStartWidth + k) / 2)) + "px";
                    this.element.style.width = (this.iStartWidth + k) + "px";
                    this.element.style.height = (this.iStartHeight + n) + "px"
                } else {
                    this.element.style.top = (this.kTile.windowY() - (this.iStartHeight / 2)) + "px";
                    this.element.style.left = (this.kTile.windowX() - (this.iStartWidth / 2)) + "px";
                    this.element.style.width = this.iStartWidth + "px";
                    this.element.style.height = this.iStartHeight + "px"
                }
                if (!this.drawn) {
                    this.drawn = true;
                    if (numberOfTeams == 1) {
                        this.ctx.drawImage(this.image, this.imageX, this.imageY, 200, 173, 0, 0, this.element.width, this.element.height)
                    } else {
                        var m = 0.45;
                        var p = OFFSET_X;
                        var o = OFFSET_Y / 2;
                        var h = OFFSET_Y * m;
                        var j = OFFSET_X * m;
                        ctx = this.ctx;
                        ctx.fillStyle = this.team.color;
                        ctx.shadowOffsetX = 0;
                        ctx.shadowOffsetY = 0;
                        ctx.shadowBlur = 30 * m;
                        ctx.shadowColor = "#ffffdd";
                        ctx.beginPath();
                        ctx.moveTo(p - j, o - h);
                        ctx.lineTo(p + j, o - h);
                        ctx.lineTo(p + 2 * j, o);
                        ctx.lineTo(p + j, o + h);
                        ctx.lineTo(p - j, o + h);
                        ctx.lineTo(p - 2 * j, o);
                        ctx.lineTo(p - j, o - h);
                        ctx.closePath();
                        ctx.fill()
                    }
                    this.ctx.textAlign = "center";
                    this.ctx.textBaseline = "middle";
                    var r = OFFSET_Y / 2;
                    this.ctx.font = r + "px Fontin-SmallCaps";
                    this.ctx.fillStyle = "#ffffdd";
                    this.ctx.shadowOffsetX = 0;
                    this.ctx.shadowOffsetY = 0;
                    var l = 0.15;
                    this.ctx.shadowBlur = r * l;
                    this.ctx.shadowColor = this.ctx.fillStyle;
                    if (numberOfTeams > 1) {
                        ctx.shadowColor = "#000000"
                    }
                    this.ctx.fillText(this.iNumber, this.element.width / 2, this.element.height / 2 - (r * 0.14));
                    r = parseInt(r * 0.2);
                    this.ctx.shadowBlur = r * l;
                    this.ctx.font = r + "px Fontin-SmallCaps";
                    this.ctx.fillText(this.sDescription, this.element.width / 2, this.element.height / 2 + (r * 2));
                    this.ctx.shadowColor = "transparent"
                }
            } else {
                if (this.counter >= (this.counterEnd - this.secondStep)) {
                    var q = ((this.counterEnd - this.counter) / this.secondStep);
                    this.element.style.opacity = q;
                    if (this.team.startTile == this.kTile) {
                        var n = Math.floor((this.iStartHeight + this.iHeightRange * (2 - q)) / 2) * 2;
                        var k = Math.floor((this.iStartWidth + this.iWidthRange * (2 - q)) / 2) * 2;
                        this.element.style.top = (this.kTile.windowY() - (n / 2)) + "px";
                        this.element.style.left = (this.kTile.windowX() - (k / 2)) + "px";
                        this.element.style.width = k + "px";
                        this.element.style.height = n + "px"
                    } else {
                        this.element.style.top = ((this.team.startTile.windowY() * (1 - q) + this.kTile.windowY() * q) - (this.iStartHeight / 2)) + "px";
                        this.element.style.left = ((this.team.startTile.windowX() * (1 - q) + this.kTile.windowX() * q) - (this.iStartWidth / 2)) + "px";
                        this.counter += (3 * this.speed)
                    }
                }
            }
        }
    }
}
function throwSparks(c, a, b) {
    this.speed = gws.vars.view.flyingScoreSpeed;
    this.iDelay = b;
    if (!this.iDelay) {
        this.iDelay = 50
    }
    this.kTile = c;
    this.fScale = c.parent.scale * a;
    this.iStartWidth = Math.floor(this.fScale * OFFSET_X * 3);
    this.iEndWidth = Math.floor(this.fScale * OFFSET_X * 5);
    this.iWidthRange = this.iEndWidth - this.iStartWidth;
    this.iStartHeight = Math.floor(this.fScale * OFFSET_Y * 1.5);
    this.iEndHeight = Math.floor(this.fScale * OFFSET_Y * 2.5);
    this.iHeightRange = this.iEndHeight - this.iStartHeight;
    this.parent = document.getElementById("moving-scores");
    this.element = document.createElement("canvas");
    this.element.className = "throw-sparks";
    this.element.style.position = "absolute";
    this.element.style.top = (this.kTile.windowY() - (this.iStartHeight / 2)) + "px";
    this.element.style.left = (this.kTile.windowX() - (this.iStartWidth / 2)) + "px";
    this.element.style.width = this.iStartWidth + "px";
    this.element.style.height = this.iStartHeight + "px";
    this.element.width = "200";
    this.element.height = "173";
    this.element.style.display = "block";
    this.element.style.opacity = "0.01";
    this.element.object = this;
    this.parent.insertBefore(this.element, null);
    this.image = imgSparks[0];
    this.ctx = this.element.getContext("2d");
    this.killMe = false;
    this.firstStep = parseInt(0.15 * this.iDelay);
    this.secondStep = this.iDelay - this.firstStep;
    this.counter = 0;
    this.counterStart = 0;
    this.counterEnd = this.iDelay;
    this.update = function() {
        this.counter += this.speed;
        if (this.counter >= this.counterEnd) {
            this.killMe = true
        } else {
            if (this.counter <= this.firstStep) {
                this.element.style.opacity = (this.counter / this.firstStep);
                var d = this.iHeightRange * (this.counter / this.firstStep);
                var g = this.iWidthRange * (this.counter / this.firstStep);
                this.element.style.top = (this.kTile.windowY() - ((this.iStartHeight + d) / 2)) + "px";
                this.element.style.left = (this.kTile.windowX() - ((this.iStartWidth + g) / 2)) + "px";
                this.element.style.width = (this.iStartWidth + g) + "px";
                this.element.style.height = (this.iStartHeight + d) + "px";
                if (!this.drawn) {
                    this.drawn = true;
                    this.ctx.drawImage(this.image, 0, 0, this.element.width, this.element.height)
                }
            } else {
                if (this.counter >= (this.counterEnd - this.secondStep)) {
                    var f = ((this.counterEnd - this.counter) / this.secondStep);
                    this.element.style.opacity = f;
                    var d = Math.floor((this.iStartHeight + this.iHeightRange * (2 - f)) / 2) * 2;
                    var g = Math.floor((this.iStartWidth + this.iWidthRange * (2 - f)) / 2) * 2;
                    this.element.style.top = (this.kTile.windowY() - (d / 2)) + "px";
                    this.element.style.left = (this.kTile.windowX() - (g / 2)) + "px";
                    this.element.style.width = g + "px";
                    this.element.style.height = d + "px"
                }
            }
        }
    }
}
var subtleMessageTimer;
function showSubtleMessage(a, b, g) {
    var f = document.getElementById("subtle-message");
    var h = document.getElementById("subtle-message-content");
    h.innerHTML = "";
    var d = undefined;
    if (typeof(a) == "string") {
        var d = document.createElement("div");
        d.innerHTML = a
    } else {
        d = a
    }
    h.appendChild(d);
    clearTimeout(subtleMessageTimer);
    if (b) {
        subtleMessageTimer = setTimeout(function() {
            hideSubtleMessage()
        },
        b)
    } else {
        if (gws.browser.mobile) {
            var c = [{
                id: "default",
                generalStyle: "button-default",
                image: gws.assets.copyTile("exit", 0, 0)
                },{
                id: "hover",
                generalStyle: "button-hover",
                image: gws.assets.copyTile("exit", 1, 0),
                onClickFunction: function() {
                    hideSubtleMessage();
                    if (g) {
                        g()
                    }
                }
            }];
            new gws.classes.button(h, "subtle-message-button", false, c)
        } else {
            var j = gws.createElement(h, "a", "subtle-exit");
            j.innerHTML = "X";
            j.onclick = function() {
                hideSubtleMessage();
                if (g) {
                    g()
                }
            }
        }
    }
    f.style.top = "0"
}
function hideSubtleMessage() {
    document.getElementById("subtle-message").style.top = "-50em"
}
gws.tutorial = {
    index: 0,
    show: function(d) {
        var a = this;
        var c = "";
        var b = document.createElement("div");
        b.className = "tutorial-text";
        if (d) {
            a.index = d
        }
        switch (a.index) {
        case 1:
            if (gws.browser.conduitTilt) {
                c = gws.lang.CONDUIT_USE_ARROW_KEYS
            } else {
                if (gws.browser.mobile) {
                    c = gws.lang.MOBILE_USE_ARROW_KEYS
                } else {
                    c = gws.lang.USE_ARROW_KEYS
                }
            }
            b.innerHTML = c;
            showSubtleMessage(b);
            break;
        case 2:
            if (gws.browser.conduitTilt) {
                c = gws.lang.CONDUIT_TAP_TO_PLACE
            } else {
                if (gws.browser.mobile) {
                    c = gws.lang.MOBILE_TAP_TO_PLACE
                } else {
                    c = gws.lang.SPACEBAR_TO_PLACE
                }
            }
            b.innerHTML = c;
            showSubtleMessage(b);
            break;
        case 3:
            b.innerHTML = gws.lang.WEAVE_AROUND;
            showSubtleMessage(b);
            break;
        case 6:
            b.innerHTML = gws.lang.LOOP_THROUGH;
            showSubtleMessage(b);
            setTimeout(function() {
                a.index = 0;
                a.hide()
            },
            5000);
            break;
        default:
            setTimeout(function() {
                a.hide()
            },
            10);
            break
        }
    },
    hide: function() {
        hideSubtleMessage()
    }
};
gws.classes = gws.classes || {};
function aTile(a, h, b, f, c, d, g) {
    this.x = a;
    this.y = h;
    this.description = a + "," + h;
    this.team = b;
    this.parent = c;
    if (!d) {
        this.sTileType = f
    } else {
        this.sTileType = d
    }
    this.eBonusType = {
        NONE: false,
        TILES_3: {
            points: 0,
            tiles: 0.5,
            addition: true
        },
        TILES_6: {
            points: 0,
            tiles: 1,
            addition: true
        },
        POINTS: {
            points: 1,
            tiles: 0,
            addition: true
        }
    };
    this.eBonus = this.eBonusType.NONE;
    this.aBonus = [];
    if (g) {
        this.aBonus = g
    }
    if (this.aBonus.length > 0) {
        if (this.aBonus.length == 3) {
            this.eBonus = this.eBonusType.TILES_3
        }
        if (this.aBonus.length == 6) {
            this.eBonus = this.eBonusType.TILES_6
        }
        if (this.aBonus.length == 12) {
            this.eBonus = this.eBonusType.POINTS
        }
    }
    this.colors = ["gray", "gray", "gray", "gray", "gray", "gray", "gray", "gray", "gray", "gray", "gray", "gray"];
    this.aStartEndpoints = [];
    this.generate = function() {
        this.pairs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
        var m, k, l;
        for (m = 1; m < 12; m++) {
            k = Math.floor(Math.random() * (1 + m));
            if (k != m) {
                l = this.pairs[m];
                this.pairs[m] = this.pairs[k];
                this.pairs[k] = l
            }
        }
    };
    if (f == "generate") {
        this.generate()
    } else {
        this.pairs = f
    }
    this.connect = function(j, k) {
        switch (j) {
        case "A":
            this.sideA = k;
            k.sideD = this;
            break;
        case "B":
            this.sideB = k;
            k.sideE = this;
            break;
        case "C":
            this.sideC = k;
            k.sideF = this;
            break;
        case "D":
            this.sideD = k;
            k.sideA = this;
            break;
        case "E":
            this.sideE = k;
            k.sideB = this;
            break;
        case "F":
            this.sideF = k;
            k.sideC = this;
            break
        }
    };
    this.setType = function(j, k) {
        if (j == "start") {
            if (this.sTileType.substring(0, 5) != "start") {
                this.sTileType = "start-" + this.sTileType;
                if (k) {
                    this.pairs = k
                }
            }
        } else {
            this.sTileType = j;
            if (k) {
                this.pairs = k
            }
        }
    };
    this.paint = function() {
        var j;
        var k;
        for (j in this.colors) {
            if (this.colors[j] == "gray") {
                if (this.getPartnerColor( + j) != "gray") {
                    this.colors[j] = this.getPartnerColor( + j)
                }
            }
        }
        for (j in this.colors) {
            if (this.colors[j] != "gray") {
                this.paintTrack(j, this.colors[j])
            }
        }
    };
    this.paintTrack = function(j, l) {
        var m = 0;
        var k = true;
        var n;
        for (n in this.aStartEndpoints) {
            if (this.aStartEndpoints[n] == j) {
                k = false
            }
        }
        if (k) {
            for (m in this.pairs) {
                if (this.pairs[m] == j) {
                    if (m % 2) {
                        this.colors[this.pairs[m]] = l;
                        if (this.colors[this.pairs[ + m - 1]] == "gray") {
                            this.colors[this.pairs[ + m - 1]] = l;
                            if (this.getPartner(this.pairs[ + m - 1])) {
                                this.getPartner(this.pairs[ + m - 1]).paintTrack(adjacentPath(this.pairs[ + m - 1]), l)
                            }
                        }
                    } else {
                        this.colors[this.pairs[m]] = l;
                        if (this.colors[this.pairs[ + m + 1]] == "gray") {
                            this.colors[this.pairs[ + m + 1]] = l;
                            if (this.getPartner(this.pairs[ + m + 1])) {
                                this.getPartner(this.pairs[ + m + 1]).paintTrack(adjacentPath(this.pairs[ + m + 1]), l)
                            }
                        }
                    }
                    break
                }
            }
        }
    };
    this.appendTo = function(m) {
        var l = 0;
        var p = this.getPartner(m);
        if (p) {
            if ((p.pairs == "wall") || (p.pairs == "empty")) {
                return p
            } else {
                var o;
                var k = adjacentPath( + m);
                for (o in p.aStartEndpoints) {
                    if (p.aStartEndpoints[o] == k) {
                        return p
                    }
                }
                for (l in p.pairs) {
                    if (p.pairs[ + l] == k) {
                        if (( + l) % 2) {
                            for (o in p.aStartEndpoints) {
                                if (p.aStartEndpoints[o] == p.pairs[ + l - 1]) {
                                    return p
                                }
                            }
                            return p.appendTo(p.pairs[ + l - 1])
                        } else {
                            for (o in p.aStartEndpoints) {
                                if (p.aStartEndpoints[o] == p.pairs[ + l + 1]) {
                                    return p
                                }
                            }
                            return p.appendTo(p.pairs[ + l + 1])
                        }
                        break
                    }
                }
            }
        } else {
            var j = 0;
            var q = 0;
            switch (m) {
            case 0:
            case 1:
                j = this.x;
                q = this.y - GRID_Y;
                break;
            case 2:
            case 3:
                j = this.x + GRID_X;
                q = this.y - OFFSET_Y;
                break;
            case 4:
            case 5:
                j = this.x + GRID_X;
                q = this.y + OFFSET_Y;
                break;
            case 6:
            case 7:
                j = this.x;
                q = this.y + GRID_Y;
                break;
            case 8:
            case 9:
                j = this.x - GRID_X;
                q = this.y + OFFSET_Y;
                break;
            case 10:
            case 11:
                j = this.x - GRID_X;
                q = this.y - OFFSET_Y;
                break
            }
            var n = this.parent.add(new aTile(j, q, 0, 0, this.parent), true);
            this.parent.rescale();
            return n
        }
    };
    this.showJewelry = false;
    this.countSegments = function(m, o, n, l, s, w) {
        var u = this,
        r = 0,
        k = this.getPartner(m);
        if (!l) {
            l = 0
        }
        if (!s) {
            s = false
        }
        var t = o - n.segments;
        if (t > 0) {
            gws.view.addEvent("score-tile", {
                x: u.windowX(),
                y: u.windowY(),
                score: t,
                color: n.color,
                delay: t * 150,
                onFinished: function() {
                    scoreIncrementor += t;
                    gws.windows.showScores()
                }
            });
            switch (this.eBonus) {
            case this.eBonusType.TILES_3:
                var v = 6 - this.pairsMatching("gray");
                var j = 3 - Math.floor(v / 2);
                if (j < this.aBonus.length) {
                    this.bTileBonusIcon = false;
                    this.parent.incrementalScores.splice(0, 0, new bonusNote(this, 1, 1, gws.lang.BONUS_TILE, n));
                    this.parent.incrementalScores.splice(0, 0, new throwSparks(this, 0.8));
                    n.aTileReserve.splice(0, 0, this.aBonus[0]);
                    this.aBonus.splice(0, 1);
                    s = "tile"
                } else {
                    if (v % 2) {
                        this.bTileBonusIcon = true;
                        if (v == 1) {
                            this.animate = 1
                        }
                        s = "unlock"
                    } else {
                        this.bTileBonusIcon = false;
                        s = "tile"
                    }
                }
                this.showJewelry = true;
                break;
            case this.eBonusType.TILES_6:
                if (this.pairsMatching("gray") < this.aBonus.length) {
                    if (this.pairsMatching("gray") == 5) {
                        this.animate = 1
                    }
                    this.bTileBonusIcon = false;
                    this.parent.incrementalScores.splice(0, 0, new bonusNote(this, 1, 1, gws.lang.BONUS_TILE, n));
                    this.parent.incrementalScores.splice(0, 0, new throwSparks(this, 0.8));
                    n.aTileReserve.splice(0, 0, this.aBonus[0]);
                    this.aBonus.splice(0, 1);
                    s = "tile"
                }
                this.showJewelry = false;
                break;
            case this.eBonusType.POINTS:
                var q = (this.pairsMatching(n.color) * 10);
                l += q;
                gws.view.addEvent("score-tile", {
                    x: u.windowX(),
                    y: u.windowY(),
                    score: q,
                    color: n.color,
                    delay: 500,
                    onFinished: function() {
                        scoreIncrementor += q;
                        gws.windows.showScores()
                    }
                });
                this.parent.incrementalScores.splice(0, 0, new bonusNote(this, 1, q, gws.lang.BONUS_POINTS, n));
                s = "points";
                break;
            default:
            }
        }
        if (w) {
            for (i in this.aStartEndpoints) {
                if (this.aStartEndpoints[i] == m) {
                    return {
                        iSegments: o,
                        iPoints: l,
                        sBonusType: s
                    }
                }
            }
        }
        if (k) {
            if ((k.pairs == "wall") || (k.pairs == "empty")) {
                return {
                    iSegments: o,
                    iPoints: l,
                    sBonusType: s
                }
            } else {
                for (r in k.pairs) {
                    if (k.pairs[ + r] == adjacentPath( + m)) {
                        var p;
                        if (( + r) % 2) {
                            p = k.pairs[ + r - 1]
                        } else {
                            p = k.pairs[ + r + 1]
                        }
                        if (this.colors[m] != k.colors[p]) {
                            return {
                                iSegments: o,
                                iPoints: l,
                                sBonusType: s
                            }
                        } else {
                            return k.countSegments(p, o + 1, n, l, s, true)
                        }
                        break
                    }
                }
            }
        } else {
            return {
                iSegments: o,
                iPoints: l,
                sBonusType: s
            }
        }
    };
    this.pairsMatching = function(j) {
        var m = 0;
        for (var k in this.colors) {
            if (j == this.colors[k]) {
                m++
            }
        }
        var l = Math.floor(m / 2);
        return l
    };
    this.getPartnerColor = function(j) {
        if (this.getPartner(j)) {
            return this.getPartner(j).colors[adjacentPath(j)]
        } else {
            return "gray"
        }
    };
    this.getPartner = function(j) {
        switch (j) {
        case 0:
        case 1:
            if (this.sideA) {
                return this.sideA
            }
            break;
        case 2:
        case 3:
            if (this.sideB) {
                return this.sideB
            }
            break;
        case 4:
        case 5:
            if (this.sideC) {
                return this.sideC
            }
            break;
        case 6:
        case 7:
            if (this.sideD) {
                return this.sideD
            }
            break;
        case 8:
        case 9:
            if (this.sideE) {
                return this.sideE
            }
            break;
        case 10:
        case 11:
            if (this.sideF) {
                return this.sideF
            }
            break
        }
        return false
    };
    this.update = function() {};
    this.animate = 0;
    this.frame = 0;
    this.numberOfFrames = 8;
    this.render = function(l, k) {
        var j = this.view;
        if (!l) {
            l = this.parent.scale
        }
        if (!j) {
            this.view = new gws.classes.polygonTileView({
                reference: this,
                parent: this.parent,
                context: k || this.parent.context
            });
            j = this.view
        }
        j.render()
    };
    this.rotating = 0;
    this.rotationCount = 0;
    this.rotate = function(k) {
        var l;
        if (k > 0) {
            this.rotationCount = (this.rotationCount + 1) % 6;
            l = 2
        } else {
            this.rotationCount = (this.rotationCount + 5) % 6;
            l = 10
        }
        var j;
        for (j in this.pairs) {
            this.pairs[j] = (this.pairs[j] + l) % 12
        }
        this.rotating -= (k * Math.PI / 3)
    };
    this.windowX = function() {
        return (this.parent.x + this.x) * this.parent.scale
    };
    this.windowY = function() {
        return (this.parent.y + this.y) * this.parent.scale
    }
}
gws.classes.polygonTile = aTile;
gws.classes = gws.classes || {};
gws.classes.view = function(a, d, c, b) {
    this.parentElement = a;
    this.assets = d;
    this.audio = c;
    this.mobile = b;
    this.prepareAssets();
    this.element = document.createElement("div");
    this.element.className = "map";
    this.parentElement.appendChild(this.element);
    this.width = this.element.offsetWidth;
    this.height = this.element.offsetHeight;
    this.layers = [];
    this.images = [];
    this.events = [];
    this.prepareView(this.assets, this.audio, this.mobile)
};
gws.classes.view.prototype.getScoreDestinationX = function() {
    var a = document.getElementById("single-score") || document.getElementById("inner-scores") || document.getElementById("scores");
    return a.offsetLeft + a.offsetWidth / 2
};
gws.classes.view.prototype.getScoreDestinationY = function() {
    var a = document.getElementById("single-score") || document.getElementById("inner-scores") || document.getElementById("scores");
    return a.offsetTop + a.offsetHeight / 2
};
gws.classes.view.prototype.addLayer = function(c, b, a) {
    var d = new gws.classes.layer(this, c, b, a, this.usingDivs);
    this.layers.splice(0, 0, d);
    return d
};
gws.classes.view.prototype.addImage = function(b, a) {
    b.className = a || "map-layer";
    this.element.appendChild(b);
    this.images.splice(0, 0, b)
};
gws.classes.view.prototype.removeLayer = function(a) {
    for (x in this.layers) {
        if (a == this.layers[x]) {
            this.layers[x].destroy();
            this.layers.splice(x, 1)
        }
    }
};
gws.classes.view.prototype.addEvent = function(a, b) {
    this.processEvent(a, b)
};
gws.classes.view.prototype.processEvent = function(a, b) {
    switch (a) {
    case "score-tile":
        this.animateScore(b.score, b.x, b.y, b.color, b.delay, b.onFinished);
        break;
    default:
        break
    }
};
gws.classes.view.prototype.update = function() {
    for (x in this.layers) {
        this.layers[x].update()
    }
};
gws.classes.view.prototype.render = function() {
    for (x in this.layers) {
        this.layers[x].render()
    }
};
gws.classes.view.prototype.resize = function() {
    for (x in this.layers) {
        this.layers[x].width = this.element.offsetWidth;
        this.layers[x].height = this.element.offsetHeight;
        this.layers[x].resize()
    }
};
gws.classes.view.prototype.world2windowX = function(a) {
    return a * this.element.offsetWidth / this.width
};
gws.classes.view.prototype.world2windowY = function(a) {
    return a * this.element.offsetHeight / this.height
};
gws.classes.view.prototype.window2worldX = function(a) {
    return a * this.width / this.element.offsetWidth
};
gws.classes.view.prototype.window2worldY = function(a) {
    return a * this.height / this.element.offsetHeight
};
gws.classes.view.prototype.query = function(b, a) {};
gws.classes.view.prototype.getElementPosition = function() {
    var b = this.element,
    c = "",
    a = 0,
    d = 0;
    while (b && (typeof(b) == "object") && (typeof(b.tagName) != "undefined")) {
        d += b.offsetTop;
        a += b.offsetLeft;
        c = b.tagName.toUpperCase();
        if (c == "BODY") {
            b = 0
        }
        if (typeof(b) == "object") {
            if (typeof(b.offsetParent) == "object") {
                b = b.offsetParent
            }
        }
    }
    return {
        x: a,
        y: d
    }
};
gws.classes.view.prototype.prepareAssets = function() {
    var a = new Image();
    a.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAadEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41LjEwMPRyoQAAAA1JREFUGFdj+P//PwMACPwC/ohfBuAAAAAASUVORK5CYII=";
    this.assets.setImageName(a, "blank");
    this.assets.createSpriteSheet("tiles", "i/tiles12.png", 5, 7);
    this.assets.setImageName(this.assets.images["tiles-0_0"], "floor-1");
    this.assets.setImageName(this.assets.images["tiles-1_0"], "floor-2");
    this.assets.setImageName(this.assets.images["tiles-2_0"], "floor-3");
    this.assets.setImageName(this.assets.images["tiles-3_0"], "floor-4");
    this.assets.setImageName(this.assets.images["tiles-4_0"], "floor-5");
    this.assets.setImageName(this.assets.images["tiles-0_1"], "wall-1");
    this.assets.setImageName(this.assets.images["tiles-1_1"], "wall-2");
    this.assets.setImageName(this.assets.images["tiles-2_1"], "wall-3");
    this.assets.setImageName(this.assets.images["tiles-3_1"], "wall-4");
    this.assets.setImageName(this.assets.images["tiles-4_1"], "wall-5");
    this.assets.setImageName(this.assets.images["tiles-0_2"], "path-tile");
    this.assets.setImageName(this.assets.images["tiles-1_2"], "starting-stone-shadow");
    this.assets.setImageName(this.assets.images["tiles-2_2"], "starting-wall");
    this.assets.setImageName(this.assets.images["tiles-3_2"], "starting-bonus");
    this.assets.setImageName(this.assets.images["tiles-0_3"], "path-tile-dc");
    this.assets.setImageName(this.assets.images["tiles-1_3"], "starting-stone");
    this.assets.setImageName(this.assets.images["tiles-2_3"], "starting-wall-center");
    this.assets.setImageName(this.assets.images["tiles-0_4"], "flower-0");
    this.assets.setImageName(this.assets.images["tiles-1_4"], "flower-animation-1");
    this.assets.setImageName(this.assets.images["tiles-2_4"], "flower-animation-2");
    this.assets.setImageName(this.assets.images["tiles-3_4"], "flower-animation-3");
    this.assets.setImageName(this.assets.images["tiles-4_4"], "flower-animation-4");
    this.assets.setImageName(this.assets.images["tiles-0_4"], "flower-animation-5");
    this.assets.setImageName(this.assets.images["tiles-1_4"], "flower-animation-6");
    this.assets.setImageName(this.assets.images["tiles-2_4"], "flower-animation-7");
    this.assets.setImageName(this.assets.images["tiles-3_4"], "flower-animation-8");
    this.assets.setImageName(this.assets.images["tiles-4_5"], "flower-1");
    this.assets.setImageName(this.assets.images["tiles-0_6"], "flower-2");
    this.assets.setImageName(this.assets.images["tiles-1_6"], "flower-3");
    this.assets.setImageName(this.assets.images["tiles-2_6"], "flower-4");
    this.assets.setImageName(this.assets.images["tiles-3_6"], "flower-5");
    this.assets.setImageName(this.assets.images["tiles-4_6"], "flower-6");
    this.assets.createSpriteSheet("jewelry", "i/tile-jewelry2.png", 3, 1);
    this.assets.setImageName(this.assets.images["jewelry-0_0"], "jewel-flower");
    this.assets.setImageName(this.assets.images["jewelry-1_0"], "jewel-hex");
    this.assets.setImageName(this.assets.images["jewelry-2_0"], "jewel-lock")
};
gws.classes.view.prototype.prepareView = function(g, f, a) {
    var j, d = a ? "touchstart": "mousedown";
    click = function(k) {
        if (k.button != 2) {
            placeTile()
        } else {
            swapTiles()
        }
        return false
    },
    rotateLeft = function(k) {
        rotateTile( - 1);
        return false
    },
    rotateRight = function(k) {
        rotateTile(1);
        return false
    },
    prevent = function(k) {
        k.preventDefault();
        return false
    };
    this.animationLayer = this.addLayer();
    j = this.animationLayer.canvas;
    j.addEventListener(d, click, false);
    j.addEventListener("contextmenu", prevent, false);
    if (a) {
        var h = gws.createElement(this.parentElement, "div", "rotate-button left"),
        c = gws.createElement(this.parentElement, "div", "rotate-button right");
        g.createSpriteSheet("rotate", "i/rotate-buttons.png", 2, 1);
        h.appendChild(g.getTile("rotate", 0, 0));
        c.appendChild(g.getTile("rotate", 1, 0));
        h.addEventListener(d, rotateLeft, false);
        c.addEventListener(d, rotateRight, false)
    } else {
        var b = gws.createElement(this.parentElement, "canvas", "control-canvas");
        addRotateButtons(b);
        controlCanvas = b
    }
};
gws.classes.view.prototype.animateScore = function(h, a, j, d, f, g) {
    var c = (numberOfTeams == 1) ? "#fff582": d;
    image = "number-" + h + "-" + c;
    numberImage = this.assets.images[image],
    sparkImage = "i/sparks" + Math.floor(Math.random() * 2 + 1) + ".png";
    size = parseInt(gws.body.style.fontSize || "10"),
    sparkWidth = Math.floor((Math.random() * 10 + 35) * size),
    sparkHeight = Math.floor((Math.random() * 10 + 35) * size),
    onEnd = false;
    if (g) {
        onEnd = function() {
            g()
        }
    }
    if (!numberImage) {
        numberImage = document.createElement("canvas");
        numberImage.width = (h > 9) ? ((h > 99) ? 128 : 96) : 64;
        numberImage.height = 64;
        var b = numberImage.getContext("2d");
        b.font = "58px 'Fontin-SmallCaps'";
        b.fillStyle = c;
        b.textBaseline = "middle";
        b.textAlign = "center";
        b.shadowOffsetX = 0;
        b.shadowOffsetY = 0;
        b.shadowBlur = 3;
        b.shadowColor = "#000000";
        b.fillText("+" + h, numberImage.width / 2, numberImage.height / 2);
        this.assets.setImageName(numberImage, image)
    }
    this.animationLayer.animator.addSequence([{
        x: a,
        y1: j,
        y2: j - Math.floor(6 * size),
        height: Math.floor(6.4 * size),
        frames: [{
            image: image
        }],
        time: 1000,
        delay: f
    },
    {
        x2: this.getScoreDestinationX(),
        y2: this.getScoreDestinationY(),
        frames: [{
            image: image
        }],
        time: 500,
        onEnd: onEnd
    },
    {
        width1: 2,
        width2: sparkWidth * 0.8,
        height1: 2,
        height2: sparkHeight * 0.8,
        frames: [{
            image: sparkImage
        }],
        opacity2: 0.6,
        time: 1000
    },
    {
        width2: sparkWidth,
        height2: sparkHeight,
        frames: [{
            image: sparkImage
        }],
        opacity2: 0.01,
        time: 1000
    }])
}; (function() {
    var f = function(g, h) {
        h = h || OFFSET_X;
        switch (g) {
        case - 1 : return 0;
        case 0:
            return (h * -0.5);
        case 1:
            return (h * 0.5);
        case 2:
            return (h * 1.25);
        case 3:
            return (h * 1.75);
        case 4:
            return (h * 1.75);
        case 5:
            return (h * 1.25);
        case 6:
            return (h * 0.5);
        case 7:
            return (h * -0.5);
        case 8:
            return (h * -1.25);
        case 9:
            return (h * -1.75);
        case 10:
            return (h * -1.75);
        case 11:
            return (h * -1.25)
        }
        return c(g % 12, h)
    },
    d = function(g, h) {
        h = h || OFFSET_Y;
        switch (g) {
        case - 1 : return 0;
        case 0:
            return (h * -1);
        case 1:
            return (h * -1);
        case 2:
            return (h * -0.75);
        case 3:
            return (h * -0.25);
        case 4:
            return (h * 0.25);
        case 5:
            return (h * 0.75);
        case 6:
            return (h * 1);
        case 7:
            return (h * 1);
        case 8:
            return (h * 0.75);
        case 9:
            return (h * 0.25);
        case 10:
            return (h * -0.25);
        case 11:
            return (h * -0.75)
        }
        return b(g % 12, h)
    },
    c = function(g, h) {
        h = h || OFFSET_X;
        switch (g) {
        case - 1 : return 0;
        case 0:
            return (h * -0.5);
        case 1:
            return (h * 0.5);
        case 2:
            return (h * 0.5);
        case 3:
            return (h * 1);
        case 4:
            return (h * 1);
        case 5:
            return (h * 0.5);
        case 6:
            return (h * 0.5);
        case 7:
            return (h * -0.5);
        case 8:
            return (h * -0.5);
        case 9:
            return (h * -1);
        case 10:
            return (h * -1);
        case 11:
            return (h * -0.5)
        }
    },
    b = function(g, h) {
        h = h || OFFSET_Y;
        switch (g) {
        case - 1 : return 0;
        case 0:
            return (h * -0.5);
        case 1:
            return (h * -0.5);
        case 2:
            return (h * -0.5);
        case 3:
            return (h * 0);
        case 4:
            return (h * 0);
        case 5:
            return (h * 0.5);
        case 6:
            return (h * 0.5);
        case 7:
            return (h * 0.5);
        case 8:
            return (h * 0.5);
        case 9:
            return (h * 0);
        case 10:
            return (h * 0);
        case 11:
            return (h * -0.5)
        }
    },
    a = function(h) {
        var g = h,
        k = g.point1,
        j = g.point2;
        g.points = [{
            x: f(k),
            y: d(k)
        },
        {
            x: f(j),
            y: d(j)
        }];
        g.bezier = [{
            x: c(k),
            y: b(k)
        },
        {
            x: c(j),
            y: b(j)
        }];
        return g
    };
    gws.classes = gws.classes || {};
    gws.classes.polygonTileView = function(j) {
        var h = j || {},
        g = h.reference || false;
        this.parent = h.parent;
        this.context = h.context;
        this.width = h.width;
        this.height = h.height;
        this.reference = g;
        this.cacheString = "";
        this.cachedImage = document.createElement("canvas");
        this.cachedImage.width = OFFSET_X * 4;
        this.cachedImage.height = GRID_Y;
        this.cacheContext = this.cachedImage.getContext("2d")
    };
    gws.classes.polygonTileView.prototype.render = function() {
        var r = this.reference.x + this.parent.x,
        o = this.reference.y + this.parent.y,
        q = this,
        h = this.reference.colors,
        j = this.reference.pairs,
        l = 0,
        p = 0,
        g = h.toString() + j.toString() + this.world2windowX(1) + this.reference.frame + this.reference.animate + gameHasBeenWon,
        n = OFFSET_X * 2,
        m = OFFSET_Y,
        s = function() {
            q.paint({
                x: r,
                y: o,
                width: OFFSET_X * 4,
                height: GRID_Y,
                image: q.cachedImage
            })
        };
        if (g == this.cacheString) {
            g = true
        } else {
            this.cacheString = g;
            q.cachedImage.width = this.world2windowX(OFFSET_X * 4);
            q.cachedImage.height = this.world2windowX(GRID_Y);
            g = false
        }
        switch (this.reference.sTileType) {
        case "start-empty":
            if (!g) {
                q.paint({
                    cache: true,
                    x: n,
                    y: m,
                    width: OFFSET_X * 4,
                    height: GRID_Y,
                    image: gws.assets.getImage("starting-stone-shadow")
                });
                for (l in h) {
                    if (h[l] != "gray") {
                        q.strokePath(q.tracePath(a({
                            cache: true,
                            x: n,
                            y: m,
                            point1: +l,
                            point2: -1,
                            color1: h[l]
                        })))
                    }
                }
                q.paint({
                    cache: true,
                    x: n,
                    y: m,
                    width: OFFSET_X * 4,
                    height: GRID_Y,
                    image: gws.assets.getImage("starting-stone")
                })
            }
            s();
            break;
        case "start-wall":
            if (!g) {
                q.paint({
                    cache: true,
                    x: n,
                    y: m,
                    width: OFFSET_X * 4,
                    height: GRID_Y,
                    image: gws.assets.getImage("starting-wall")
                });
                for (l in h) {
                    if (h[l] != "gray") {
                        q.strokePath(q.tracePath(a({
                            cache: true,
                            x: n,
                            y: m,
                            point1: +l,
                            point2: -1,
                            color1: h[l]
                        })))
                    }
                }
                q.paint({
                    cache: true,
                    x: n,
                    y: m,
                    width: OFFSET_X * 4,
                    height: GRID_Y,
                    image: gws.assets.getImage("starting-wall-center")
                })
            }
            s();
            break;
        case "start-bonus":
            if (!g) {
                q.paint({
                    cache: true,
                    x: n,
                    y: m,
                    width: OFFSET_X * 4,
                    height: GRID_Y,
                    image: gws.assets.getImage("starting-bonus")
                });
                for (l = 0; l < 12; l += 2) {
                    q.strokePath(q.tracePath(a({
                        cache: true,
                        x: n,
                        y: m,
                        point1: j[ + l],
                        point2: j[ + l + 1],
                        color1: h[j[ + l]],
                        color2: h[j[ + l + 1]],
                        border: "#000000",
                        fade: true
                    })))
                }
            }
            s();
            break;
        case "wall":
            if (!g) {
                q.paint({
                    cache: true,
                    x: n,
                    y: m,
                    width: OFFSET_X * 4,
                    height: GRID_Y,
                    image: gws.assets.getImage("wall-" + ((Math.abs(this.reference.x + this.reference.y) % 5) + 1))
                })
            }
            s();
            break;
        case "bonus":
            if (!g) {
                if (this.reference.eBonus === this.reference.eBonusType.POINTS) {
                    q.paint({
                        cache: true,
                        x: n,
                        y: m,
                        width: OFFSET_X * 4,
                        height: GRID_Y,
                        image: gws.assets.getImage("starting-bonus")
                    });
                    for (l = 0; l < 12; l += 2) {
                        q.strokePath(q.tracePath(a({
                            cache: true,
                            x: n,
                            y: m,
                            point1: j[ + l],
                            point2: j[ + l + 1],
                            color1: h[j[ + l]],
                            color2: h[j[ + l + 1]],
                            border: "#000000",
                            fade: true
                        })))
                    }
                } else {
                    if (this.reference.animate) {
                        this.reference.frame += this.reference.animate;
                        if (this.reference.frame <= 0) {
                            this.reference.frame = 0;
                            this.reference.animate = 0
                        } else {
                            if (this.reference.frame > this.reference.numberOfFrames) {
                                this.reference.frame = this.reference.numberOfFrames - 1;
                                this.reference.animate = 0
                            } else {
                                q.paint({
                                    cache: true,
                                    x: n,
                                    y: m,
                                    width: OFFSET_X * 4,
                                    height: GRID_Y,
                                    image: gws.assets.getImage("flower-animation-" + this.reference.frame)
                                })
                            }
                        }
                    }
                    if (!this.reference.animate) {
                        p = (6 - this.reference.pairsMatching("gray"));
                        if (p > 0) {
                            this.drawShadow({
                                x: r,
                                y: o,
                                width: OFFSET_X * 4,
                                height: GRID_Y
                            })
                        }
                        q.paint({
                            cache: true,
                            x: n,
                            y: m,
                            width: OFFSET_X * 4,
                            height: GRID_Y,
                            image: gws.assets.getImage("flower-" + p)
                        })
                    }
                    for (l = 0; l < 12; l += 2) {
                        q.strokePath(q.tracePath(a({
                            cache: true,
                            x: n,
                            y: m,
                            point1: j[ + l],
                            point2: j[ + l + 1],
                            color1: h[j[ + l]],
                            color2: h[j[ + l + 1]],
                            border: -1
                        })))
                    }
                    if (this.reference.showJewelry) {
                        if (this.reference.bTileBonusIcon) {
                            this.drawJewelry({
                                cache: true,
                                x: n,
                                y: m,
                                image: "jewel-hex"
                            })
                        } else {
                            this.drawJewelry({
                                cache: true,
                                x: n,
                                y: m,
                                image: "jewel-lock"
                            })
                        }
                    }
                }
            }
            s();
            break;
        case "turnstile":
            previewBoard.canvas.style.width = (this.parent.scale * 2 * GRID_X * this.parent.viewScale) + "px";
            previewBoard.canvas.style.height = (this.parent.scale * 2 * GRID_Y * this.parent.viewScale) + "px";
            previewBoard.setWindow();
            previewBoard.canvas.style.left = (this.parent.world2windowX(this.reference.x, 0) + 1 - (this.parent.scale * 2 * GRID_X) / 2) + "px";
            previewBoard.canvas.style.top = (this.parent.world2windowY(this.reference.y, 0) + 1 - (this.parent.scale * 2 * GRID_Y) / 2) + "px";
            previewBoard.setFocus(0, 0, this.parent.scale * 0.95 * this.parent.viewScale);
            holdingTile.rotating = 0.001;
            if (controlCanvas) {
                controlCanvas.style.width = previewBoard.canvas.style.width;
                controlCanvas.style.height = previewBoard.canvas.style.height;
                controlCanvas.style.top = previewBoard.canvas.style.top;
                controlCanvas.style.left = previewBoard.canvas.style.left
            }
            break;
        case "empty":
            if (!g) {
                var k = false;
                absX = 0,
                absY = 0;
                if (this.parent.tileSheet === 1) {
                    absX = Math.abs(this.reference.x);
                    absY = Math.abs(this.reference.y);
                    if ((absX <= GRID_X) && (absY <= GRID_Y)) {
                        k = "floor-3"
                    } else {
                        if ((absX <= GRID_X * 2) && (absY <= GRID_Y * 1.9)) {
                            k = "floor-" + ((Math.abs(this.reference.x + this.reference.y) % 2) + 4)
                        }
                    }
                } else {
                    k = "floor-" + ((Math.abs(this.reference.x + this.reference.y) % 3) + 1)
                }
                if (k) {
                    q.paint({
                        cache: true,
                        x: n,
                        y: m,
                        width: OFFSET_X * 4,
                        height: GRID_Y,
                        image: gws.assets.getImage(k)
                    })
                }
                if (this.parent.tileSheet === 1) {
                    q.stroke(q.traceHexagon({
                        cache: true,
                        x: n,
                        y: m,
                        width: OFFSET_X * 4,
                        height: GRID_Y,
                        lineWidth: 5,
                        color: "#adab93",
                        opacity: Math.max(1 - gws.cartesianToPolar({
                            x: this.reference.x,
                            y: this.reference.y
                        }).m / (GRID_X * 6), 0.001)
                    }))
                }
            }
            s();
            break;
        default:
            if (!g) {
                q.paint({
                    cache: true,
                    x: n,
                    y: m,
                    width: OFFSET_X * 4,
                    height: GRID_Y,
                    image: gws.assets.getImage((gws.currentGame && gws.currentGame.timeleft) ? "path-tile-dc": "path-tile")
                });
                for (l = 0; l < 12; l += 2) {
                    q.strokePath(q.tracePath(a({
                        cache: true,
                        x: n,
                        y: m,
                        point1: j[ + l],
                        point2: j[ + l + 1],
                        color1: h[j[ + l]],
                        color2: h[j[ + l + 1]]
                    })))
                }
            }
            s();
            break
        }
    };
    gws.classes.polygonTileView.prototype.world2windowX = function(g) {
        return g * this.parent.scale * this.parent.viewScale
    };
    gws.classes.polygonTileView.prototype.world2windowY = function(g) {
        return g * this.parent.scale * this.parent.viewScale
    };
    gws.classes.polygonTileView.prototype.stroke = function(l) {
        var k = l,
        h = this.world2windowX(k.lineWidth || 1),
        j = k.color,
        m = k.opacity || 1,
        g = k.cache ? this.cacheContext: this.context,
        n = 0;
        g.strokeStyle = j;
        g.lineWidth = h;
        if (m === 1) {
            g.stroke()
        } else {
            n = g.globalAlpha;
            g.globalAlpha = m;
            g.stroke();
            g.globalAlpha = n
        }
    };
    gws.classes.polygonTileView.prototype.fill = function(k) {
        var j = k,
        h = j.color,
        l = j.opacity || 1,
        g = j.cache ? this.cacheContext: this.context,
        m = 0;
        g.fillStyle = h;
        if (l === 1) {
            g.fill()
        } else {
            m = g.globalAlpha;
            g.globalAlpha = l;
            g.fill();
            g.globalAlpha = m
        }
    };
    gws.classes.polygonTileView.prototype.paint = function(l) {
        var o = l,
        n = o.opacity || 1,
        t = o.cache ? this.cacheContext: this.context,
        q = this.world2windowX(o.x),
        p = this.world2windowY(o.y),
        g = this.world2windowX(o.width),
        s = this.world2windowY(o.height),
        j = o.image,
        r = q - g / 2,
        m = p - s / 2,
        k = 0;
        if (n === 1) {
            t.drawImage(j, r, m, g, s)
        } else {
            k = t.globalAlpha;
            t.globalAlpha = n;
            t.drawImage(j, r, m, g, s);
            t.globalAlpha = k
        }
    };
    gws.classes.polygonTileView.prototype.tracePath = function(n) {
        var p = n,
        t = p.cache ? this.cacheContext: this.context,
        s = p.points,
        k = this.world2windowX(p.x + s[0].x),
        r = this.world2windowY(p.y + s[0].y),
        j = this.world2windowX(p.x + s[1].x),
        q = this.world2windowY(p.y + s[1].y),
        l = p.bezier || false,
        o = 0,
        h = 0,
        m = 0,
        g = 0;
        t.beginPath();
        t.moveTo(k, r);
        if (l) {
            o = this.world2windowX(p.x + l[0].x);
            h = this.world2windowY(p.y + l[0].y);
            m = this.world2windowX(p.x + l[1].x);
            g = this.world2windowY(p.y + l[1].y);
            t.bezierCurveTo(o, h, m, g, j, q)
        } else {
            t.lineTo(j, q)
        }
        n.x1 = k;
        n.y1 = r;
        n.x2 = j;
        n.y2 = q;
        return n
    };
    gws.classes.polygonTileView.prototype.strokePath = function(k) {
        var m = k,
        j = m.color || m.color1,
        r = m.color1 || m.color,
        q = m.color2 || m.color,
        l = m.opacity || 1,
        t = m.cache ? this.cacheContext: this.context,
        p = this.world2windowX(m.x),
        n = this.world2windowY(m.y),
        h = m.border || false,
        g = m.fade,
        o = false;
        if ((r == "gray") && gameHasBeenWon) {
            return false
        } else {
            if (h != -1) {
                if (!h) {
                    if (j == "gray") {
                        if (gws.currentGame && gws.currentGame.timeleft) {
                            h = "#ffe080"
                        } else {
                            h = "#ffffff"
                        }
                    } else {
                        h = "#000000"
                    }
                }
                if (g) {
                    o = t.createRadialGradient(p, n, this.world2windowY(OFFSET_X), p, n, this.world2windowY(OFFSET_Y));
                    o.addColorStop(0, addAlpha(h, 0.5));
                    o.addColorStop(1, h);
                    h = o
                }
                this.stroke({
                    cache: m.cache,
                    lineWidth: gameHasBeenWon ? 36 : 22,
                    color: h,
                    opacity: l
                })
            }
            var s = g ? "#ffe776": ((gws.currentGame && gws.currentGame.timeleft) ? "#ab7f2e": "#786c44");
            if (r == "gray") {
                r = s
            }
            if (q == "gray") {
                q = s
            }
            if ((!q) || (r == q)) {
                if (g) {
                    o = t.createRadialGradient(p, n, this.world2windowY(OFFSET_X), p, n, this.world2windowY(OFFSET_Y));
                    o.addColorStop(0, addAlpha(r, 0.25));
                    o.addColorStop(1, r);
                    j = o
                } else {
                    if (h == -1) {
                        o = t.createRadialGradient(p, n, this.world2windowY(OFFSET_X), p, n, this.world2windowY(OFFSET_Y));
                        o.addColorStop(0, addAlpha(r, 0));
                        o.addColorStop(0.5, r);
                        j = o
                    } else {
                        j = r
                    }
                }
            } else {
                o = t.createLinearGradient(m.x1, m.y1, m.x2, m.y2);
                if (g) {
                    o.addColorStop(0, r);
                    o.addColorStop(0.2, addAlpha(r, 0.25));
                    o.addColorStop(0.8, addAlpha(q, 0.25));
                    o.addColorStop(1, q)
                } else {
                    if (h == -1) {
                        o.addColorStop(0, r);
                        o.addColorStop(0.2, addAlpha(r, 0));
                        o.addColorStop(0.8, addAlpha(q, 0));
                        o.addColorStop(1, q)
                    } else {
                        o.addColorStop(0.1, r);
                        o.addColorStop(0.9, q)
                    }
                }
                j = o
            }
            this.stroke({
                cache: m.cache,
                lineWidth: gameHasBeenWon ? 28 : 14,
                color: j,
                opacity: l
            })
        }
    };
    gws.classes.polygonTileView.prototype.traceHexagon = function(j) {
        var l = j,
        n = this.world2windowX(l.x),
        m = this.world2windowY(l.y),
        g = this.world2windowX(l.width),
        p = this.world2windowY(l.height),
        q = l.cache ? this.cacheContext: this.context,
        o = g / 4,
        k = p / 2;
        q.beginPath();
        q.moveTo(n - o, m - k);
        q.lineTo(n + o, m - k);
        q.lineTo(n + 2 * o, m);
        q.lineTo(n + o, m + k);
        q.lineTo(n - o, m + k);
        q.lineTo(n - 2 * o, m);
        q.lineTo(n - o, m - k);
        q.closePath();
        return j
    };
    gws.classes.polygonTileView.prototype.drawShadow = function(m) {
        var l = m,
        k = l.cache ? this.cacheContext: this.context,
        h = this.world2windowX(l.x),
        o = this.world2windowY(l.y),
        n = this.world2windowX(l.width),
        g = this.world2windowY(l.height),
        j = h - n / 2;
        k.drawImage(gws.assets.getImage("i/bonus-tile-shadow.png"), j, o, n, g * 2 / 3)
    };
    gws.classes.polygonTileView.prototype.drawJewelry = function(l) {
        var k = l,
        j = k.cache ? this.cacheContext: this.context,
        h = this.world2windowX(k.x),
        o = this.world2windowY(k.y),
        m = this.world2windowX(112),
        g = this.world2windowY(120),
        n = k.image;
        j.drawImage(gws.assets.getImage(n), h, o, m, g)
    }
})();
gws.windows = {
    mobile: false
};
gws.windows.currentWinner = new
function() {
    this.hide = function() {
        document.getElementById("current-winner").style.display = "none"
    };
    this.show = function(b, a) {
        document.getElementById("current-winner").innerHTML = '<div id="current-winner-text">' + gws.lang.CURRENT_WINNER + '</div><div class="team-score" style="color: #FFDF82;">' + b + '</div><div class="team-score" style="color: #FFDF82;">' + gws.lang.TIME_REMAINING + " " + a + "</div>";
        document.getElementById("current-winner").style.display = "block"
    }
};
var goBackTo = ["game"];
function goBack(a) {
    if (a) {
        if (a == "menu" || a == "game" || a == "game-over") {
            goBackTo = [a]
        } else {
            if (goBackTo[goBackTo.length - 1] != a) {
                goBackTo.push(a)
            }
        }
    } else {
        switch (goBackTo[goBackTo.length - 1]) {
        case "game":
            break;
        case "game-over":
            showPlayAgain();
            break;
        case "menu":
            showMenu();
            break;
        case "side-menu":
            gws.sideMenu.show();
            gws.controlBar.showMenuButton();
            break;
        case "expansion":
            showMenu("expansion");
            break;
        case "multiplayer":
            showMenu("multiplayer");
            break
        }
    }
}
function popGoBack() {
    goBackTo.pop()
}
function showPlayAgain() {
    document.getElementById("play-again").style.display = "block";
    document.getElementById("play-again").style.opacity = "0";
    setTimeout("document.getElementById('play-again').style.opacity = '1';", 500)
}
function hidePlayAgain() {
    setTimeout("document.getElementById('play-again').style.display = 'none';", 1000);
    document.getElementById("play-again").style.opacity = "0"
}
function showSwapTile() {
    document.getElementById("swap").style.left = "0"
}
function hideSwapTile() {
    document.getElementById("swap").style.left = "-100%"
}
var dialogTimeout;
function showDialog(c, b, a) {
    clearTimeout(dialogTimeout);
    if (b) {
        document.getElementById("dialog-content").style.background = "url(i/expansion-box.png) center center no-repeat"
    } else {
        document.getElementById("dialog-content").style.background = "transparent"
    }
    document.getElementById("dialog-content").innerHTML = c;
    if (a) {
        document.getElementById("dialog-content").style.overflow = "auto"
    } else {
        document.getElementById("dialog-content").style.overflow = "visible"
    }
    document.getElementById("dialog").style.display = "block";
    document.getElementById("dialog").style.opacity = "0";
    dialogTimeout = setTimeout("document.getElementById('dialog').style.opacity = '1';", 10);
    gws.audio.play("WindowOpen")
}
function hideDialog() {
    clearTimeout(dialogTimeout);
    dialogTimeout = setTimeout("document.getElementById('dialog').style.display = 'none'; document.getElementById('dialog-content').innerHTML = '';", 1000);
    document.getElementById("dialog").style.opacity = "0";
    gws.audio.play("WindowClose")
}
function showMenu(a) {
    gws.mainMenu.show(a)
}
function hideMenu(a) {
    gws.mainMenu.hide({
        removeBG: a
    })
}
function hideMenuBackground() {
    setTimeout("document.getElementById('main-menu-background').style.display = 'none';", 1000);
    document.getElementById("main-menu-background").style.opacity = "0"
}
gws.afterExpansionLogin = false;
function showExpansionMenu(a, b, c) {
    if (gws.afterExpansionLogin && !b) {
        b = gws.afterExpansionLogin
    }
    if (gws.account.expansions) {
        hideDialog();
        if (b) {
            beginGame(b, c)
        } else {
            showMenu("main")
        }
    } else {
        gws.afterExpansionLogin = b;
        getCheckoutInfo()
    }
}
gws.scoreBoardShowing = false;
gws.scoreBoard2Showing = false;
function showScoreBoard(a) {
    gws.scoreBoardShowing = true;
    hideDialog();
    gws.controlBar.hideMenuButton();
    if (numberOfTeams == 1) {
        showScoreBoard2(false, currentGameType)
    } else {
        if (goBackTo != "game-over") {
            document.getElementById("dialog-play-again").style.display = "none"
        } else {
            document.getElementById("dialog-play-again").style.display = "block"
        }
        document.getElementById("scoreboard-content").innerHTML = htmlResultsTable();
        document.getElementById("scoreboard").style.display = "block";
        document.getElementById("scoreboard").style.opacity = "0";
        setTimeout("document.getElementById('scoreboard').style.opacity = '1';", 10)
    }
    gws.audio.play("WindowOpen")
}
function hideScoreBoard() {
    gws.scoreBoardShowing = false;
    setTimeout("document.getElementById('scoreboard').style.display = 'none';", 1000);
    document.getElementById("scoreboard").style.opacity = "0";
    gws.audio.play("WindowClose")
}
var fromMainMenu = false;
function showScoreBoard2(a, c, b) {
    gws.scoreBoard2Showing = true;
    hideDialog();
    gws.controlBar.hideMenuButton();
    fromMainMenu = a;
    highScoreMode.setSelectionByValue(c);
    document.getElementById("scoreboard2").style.display = "block";
    document.getElementById("scoreboard2").style.opacity = "0";
    setTimeout("document.getElementById('scoreboard2').style.opacity = '1';", 10);
    if (goBackTo != "game-over") {
        document.getElementById("dialog-play-again2").style.display = "none"
    } else {
        document.getElementById("dialog-play-again2").style.display = "block"
    }
    gws.audio.play("WindowOpen")
}
function hideScoreBoard2() {
    gws.scoreBoardShowing = false;
    setTimeout("document.getElementById('scoreboard2').style.display = 'none';", 1000);
    document.getElementById("scoreboard2").style.opacity = "0";
    if (fromMainMenu) {
        showMenu()
    }
    gws.audio.play("WindowClose")
}
function hidePreview() {
    previewBoard.canvas.style.opacity = "0";
    if (controlCanvas) {
        controlCanvas.style.opacity = "0"
    }
}
function showPreview() {
    previewBoard.canvas.style.opacity = "1";
    if (controlCanvas) {
        controlCanvas.style.opacity = "1"
    }
}
function hideSideMenu() {
    gws.sideMenu.hide()
}
function showSideMenu(a) {
    gws.sideMenu.show()
}
function displaySideMenu() {
    if (( + gameBoard.width > ( + gameBoard.height * 1.5)) && ( + gameBoard.width > 1024)) {
        showSideMenu("side-menu")
    } else {
        hideSideMenu()
    }
}
function hideTitle() {
    document.getElementById("title").style.top = "-60px"
}
function showTitle() {
    document.getElementById("title").style.top = "5px"
}
function showIcon(b) {
    for (var a = 0; a < 5; a++) {
        document.getElementById("icon" + a).style.opacity = "0.01"
    }
    document.getElementById(b).style.opacity = "1"
}
var scoreIncrementor = 0;
var playersScores = [];
gws.windows.showScores = function() {
    var b = "";
    var a = 0;
    if (gameInPlay) {
        playersScores = teams.slice()
    }
    for (a in playersScores) {
        if (playersScores.length != 1) {
            b += '<div class="team-score" style="color: ' + playersScores[a].color + '">' + playersScores[a].team + " " + playersScores[a].score;
            if ( + a == +currentTeam) {
                b += " &laquo;";
                scoreIncrementor = playersScores[a].score
            }
            b += "</div>"
        } else {
            b += '<div class="team-score">' + gws.lang.RECORD + " " + playersScores[a].highScore + "</div>";
            if (!this.mobile) {
                b += '<div class="team-score">' + gws.lang.CURRENT_PATH + " " + playersScores[a].segments + "</div>";
                b += '<div class="team-score">' + gws.lang.LONGEST_PATH + " " + playersScores[a].highSegments + "</div>"
            }
        }
    }
    b = '<div id="score-title">' + gws.lang.SCORE + ' |</div> <div id="single-score" style="text-shadow: 0px 0px ' + scorePulse + 'px #ffffbe;">' + scoreIncrementor + "</div>" + b;
    if (document.getElementById("inner-scores").innerHTML != b) {
        document.getElementById("inner-scores").innerHTML = b;
        document.getElementById("scores").style.top = "0"
    }
};
function hideScores() {
    document.getElementById("scores").style.top = "-500px"
}
function drawStartTile(f, d, g, c, b) {
    var a = parseInt(gameBoard.scale * GRID_X);
    var h = parseInt(gameBoard.scale * GRID_Y);
    f.render();
    var j = gameBoard.context;
    var k = parseInt(h * 0.6);
    if (d > 9) {
        k = parseInt(h * 0.5)
    }
    if (d > 99) {
        k = parseInt(h * 0.3)
    }
    j.textAlign = "center";
    j.textBaseline = "middle";
    j.font = k + "px Fontin-SmallCaps";
    j.fillStyle = c;
    if (numberOfTeams == 1) {
        j.fillStyle = "#ffffdd"
    }
    j.shadowOffsetX = 0;
    j.shadowOffsetY = 0;
    if (!b) {
        b = 0.15
    }
    j.shadowBlur = k * b;
    j.shadowColor = j.fillStyle;
    j.fillText(d, f.windowX() * gameBoard.viewScale, f.windowY() * gameBoard.viewScale - (h * 0.08));
    k = parseInt(h * 0.1);
    j.font = k + "px Fontin-SmallCaps";
    j.fillText(g, f.windowX() * gameBoard.viewScale, f.windowY() * gameBoard.viewScale + (h * 0.2));
    j.shadowColor = "transparent"
}
gws.background = {
    images: [],
    repositionImage: function(c, d, a, b) {
        if (this.images[c]) {
            this.images[c].style[b] = Math.min(a + d, 0) + "px"
        }
    },
    reposition: function() {
        var c = true,
        d = this.images.bgGlow ? this.images.bgGlow.style: false;
        if (currentGame && currentGame.limitedtiles) {
            c = false;
            if (d && (d.opacity != "0.5")) {
                d.opacity = "0.5"
            }
        } else {
            if (d && (d.opacity != "0.75")) {
                d.opacity = "0.75"
            }
        }
        var b = ((gameBoard.width) - ((gameBoard.softRight - gameBoard.softLeft + 2 * OFFSET_X) * gameBoard.scale)) / 2;
        var a = ((gameBoard.height) - ((gameBoard.softBottom - gameBoard.softTop + 2 * OFFSET_Y) * gameBoard.scale)) / 2;
        this.repositionImage("bgTL1", -300, c ? b: 0, "left");
        this.repositionImage("bgL", -250, c ? b: 0, "left");
        this.repositionImage("bgTL2", -218, c ? b: 0, "left");
        this.repositionImage("bgTR1", -427, c ? b: 0, "right");
        this.repositionImage("bgTR2", -364, c ? b: 0, "right");
        this.repositionImage("bgBL", -409, c ? b: 0, "left");
        this.repositionImage("bgSBR", -409, b, "right");
        this.repositionImage("bgSBL", -409, c ? 0 : b, "left");
        this.repositionImage("bgSTR", -409, c ? 0 : b, "right");
        this.repositionImage("bgSTL", -409, c ? 0 : b, "left");
        this.repositionImage("bgT", -82, c ? a: 0, "top");
        this.repositionImage("bgTR3", -264, c ? 0 : 264, "right");
        this.repositionImage("bgTL3", -356, c ? 0 : 356, "left")
    }
};