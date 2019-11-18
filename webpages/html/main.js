var SentenceMaking = new Array();
var Translate = new Array();
var SentenceMakingDiv = new Array();
var timeable;
function init() {
    SentenceMakingDiv[0] = 0;
    //  1	Leisure activities
    SentenceMaking[1] = "flash a smile";
    SentenceMaking[2] = "make an attempt to do sth.";
    SentenceMaking[3] = "end with";
    SentenceMaking[4] = "like clockwork";
    SentenceMaking[5] = "take on";
    SentenceMaking[6] = "under arrest";
    SentenceMaking[7] = "a string of";
    SentenceMaking[8] = "be tempted to do sth.";
    SentenceMaking[9] = "lie in…";
    SentenceMaking[10] = "shatter one's life";
    SentenceMaking[11] = "bury one's head in";
    SentenceMaking[12] = "drive sb. to do sth.";
    SentenceMaking[13] = "exert one's fatal attraction";
    SentenceMakingDiv[1] = 13;

    //  2	Power of Words
    SentenceMaking[14] = "a pat on the back";
    SentenceMaking[15] = "attach importance to";
    SentenceMaking[16] = "be on to sth.";
    SentenceMaking[17] = "follow sth. up";
    SentenceMaking[18] = "lift up";
    SentenceMaking[19] = "make sb's day";
    SentenceMaking[20] = "pass along";
    SentenceMaking[21] = "turn around";
    SentenceMaking[22] = "walk of life";
    SentenceMaking[23] = "act on/upon";
    SentenceMaking[24] = "get out of hand";
    SentenceMaking[25] = "if only…";
    SentenceMaking[26] = "make sth. of";
    SentenceMaking[27] = "be flooded with";
    SentenceMaking[28] = "be credited for";
    SentenceMaking[29] = "thrive on";
    SentenceMaking[30] = "one in a million";
    SentenceMaking[31] = "become accustomed to doing sth.";
    SentenceMaking[32] = "proceed to sth.";
    SentenceMakingDiv[2] = 32;

    //  3 	Gender Differences
    SentenceMaking[33] = "as a matter of fact";
    SentenceMaking[34] = "in accordance with";
    SentenceMaking[35] = "put…away";
    SentenceMaking[36] = "turn out";
    SentenceMaking[37] = "up to";
    SentenceMaking[38] = "at a disadvantage";
    SentenceMaking[39] = "be in a/the minority";
    SentenceMaking[40] = "for ages";
    SentenceMaking[41] = "go too far";
    SentenceMaking[42] = "incorporate…into…";
    SentenceMaking[43] = "favor… over…";
    SentenceMaking[44] = "deprive…of…";
    SentenceMaking[45] = "be superior to";
    SentenceMaking[46] = "be typical of…";
    SentenceMaking[47] = "be obliged to do sth.";
    SentenceMakingDiv[3] = 47;

    //  4	Creativity
    SentenceMaking[48] = "for the sake of…";
    SentenceMaking[49] = "not in the least ";
    SentenceMaking[50] = "on occasion";
    SentenceMaking[51] = "time and again";
    SentenceMaking[52] = "cross the boundary";
    SentenceMaking[53] = "fit into";
    SentenceMaking[54] = "find one's way to/into…";
    SentenceMaking[55] = "intervene into…";
    SentenceMakingDiv[4] = 55;

    //  5 Athletes
    SentenceMaking[56] = "give of sth.";
    SentenceMaking[57] = "have / throw a fit ";
    SentenceMaking[58] = "measure up to";
    SentenceMaking[59] = "put / place sb. on a pedestal ";
    SentenceMaking[60] = "take sth too far ";
    SentenceMaking[61] = "worship the ground sb. Walks on";
    SentenceMaking[62] = "you name it";
    SentenceMaking[63] = "and the like";
    SentenceMaking[64] = "look to";
    SentenceMaking[65] = "needless to say";
    SentenceMaking[66] = "rise above ";
    SentenceMaking[67] = "Be bound to";
    SentenceMaking[68] = "Follow one's lead";
    SentenceMakingDiv[5] = 68;

    Translate[1] = "笔、墨、纸、砚在传统中国书法发展中扮演重要的角色。";
    Translate[2] = "中国是茶的故乡，茶也是中国的“国饮”。";
    Translate[3] = "中国瓷器不仅是生活必需品，而且也是宝贵的工艺品。";
    Translate[4] = "中国戏曲的起源可以追溯到原始社会的歌舞和宗教仪式。";
    Translate[5] = "儒家思想是中国古代的主流意识，对全世界都产生深远的影响。";
    Translate[6] = "历史学家普遍认为唐朝是中国文明的鼎盛时期，是世界文化的黄金时代。";
    Translate[7] = "丝绸之路在亚欧文明发展中发挥了重要作用。";
    Translate[8] = "欧洲通过丝绸之路出口各种商品和植物，满足中国市场的需求。";
    Translate[9] = "杭州被誉为“中国茶都”，龙井茶闻名世界。";
    Translate[10] = "自从1978年改革以来，中国已从计划经济转为以市场为基础的经济。";
    Translate[11] = "政府已设定目标减少污染，提高能源效率，扩大社会保障。";
    Translate[12] = "有些中文热词在外国媒体上愈来愈流行。";
    Translate[13] = "在消除贫困的过程中，中国正扮演着越来越重要的角色。";
    Translate[14] = "旗袍是一种雅致的中国服装，充分展现了女性之美。";
    Translate[15] = "深圳经济特区是实施社会主义市场经济的试验田。";
    Translate[16] = "如今，中国人喜欢把西方特色菜与传统中式菜肴融于一席。";
    Translate[17] = "中国企业家努力适应国内外市场的不断变化。";
    Translate[18] = "在未来20年里，预计约有3.5亿农村人口将移居到城市。";
    Translate[19] = "随着中国经济的蓬勃发展，学汉语的人数迅速增加。";
    Translate[20] = "为了维护和平、可持续发展，中国提出了建设“命运共同体”。";
    Translate[21] = "中国已经成为最受海外学生欢迎的留学目的地之一。";
    Translate[22] = "农业是中国的一个重要产业，从业者超过3亿。";
    Translate[23] = "有机农业可以服务于多种目的，如食品安全和可持续发展。";
    Translate[24] = "杭州为中国赢得两项世界文化遗产——西湖和运河。";
    Translate[25] = "西湖景区对中国其他地区乃至日本和韩国的园林设计都产生了影响。";
    Translate[26] = "经过长期努力，中国特色社会主义进入了新时代。";
    Translate[27] = "杭州拥有十分丰富的非物质文化遗产资源。";
    Translate[28] = "我国仍处于并将长期处于社会主义初级阶段。";
    Translate[29] = "推进“一带一路”建设，是加强和世界各国互利合作的需要。";
    Translate[30] = "人民健康是民族昌盛和国家富强的重要标志。";
}
// [minNum, maxNum]
function randomNum(minNum, maxNum) {
    switch (arguments.length) {
        case 1:
            return parseInt(Math.random() * minNum + 1, 10);
            break;
        case 2:
            return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
            break;
        default:
            return 0;
            break;
    }
}
function rand() {
    clearTimeout(timeable);
    document.getElementsByTagName("body")[0].style.backgroundColor = "white";
    document.getElementById("next").innerHTML = "换一组";
    document.getElementById("next").style.backgroundColor = "buttonface";
    // SentenceMaking
    var check = document.getElementsByName("che");
    var unit = new Array();
    var curList = new Array();
    for (var i = 0; i < check.length; i++) {
        if (check[i].checked) {
            unit.push(check[i].value);
        }
    }
    if (unit.length == 0) {
        window.alert("出错啦，必须要选择一个单元啦");
        return;
    }
    // console.log(unit);
    while (curList.length < 4) {
        var tmp = parseInt(unit[randomNum(0, unit.length - 1)]);
        var temp = randomNum(SentenceMakingDiv[tmp] + 1, SentenceMakingDiv[tmp + 1]);
        // console.log(temp);
        if (!curList.includes(temp))
            curList.push(temp);
    }
    for (var i = 0; i < 4; i++)
        document.getElementById(i.toString()).innerHTML = SentenceMaking[curList[i]];

    // Translate
    lens = document.getElementById("lens");
    lens.value = parseInt(lens.value);
    if (lens.value <= 1)
        lens.value = 2;
    else if (lens.value > 30 || lens.value == "NaN")
        lens.value = 30;
    // console.log(lens.value)
    var minn = 1;
    var maxn = 30;
    if (document.getElementById("selects").value == 0) {
        maxn = parseInt(lens.value);
    } else {
        minn = 30 - parseInt(lens.value) + 1;
    }
    curList.push(randomNum(minn, maxn));
    while (true) {
        var temp = randomNum(minn, maxn);
        if (temp != curList[4]) {
            curList.push(temp);
            break;
        }
    }
    document.getElementById("4").innerHTML = Translate[curList[4]];
    document.getElementById("5").innerHTML = Translate[curList[5]];
    console.log(curList);
    timeable = setTimeout("endTime();", 36000);
}
function endTime() {
    document.getElementsByTagName("body")[0].style.backgroundColor = "#2f3640";
    document.getElementById("next").innerHTML = "时间到";
    document.getElementById("next").style.backgroundColor = "red";
}
