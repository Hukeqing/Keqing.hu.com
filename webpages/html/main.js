var Translate = new Array();
var TopicList = new Array();
var timeable;
var time_log;
var timeMax;
var curMode;
var lastSecond;
var flushWaitTime = 0.01;
var hidesStatus = false;
var radialObj;
function init() {
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
    // topic
    TopicList[1] = "What is your favorite leisure activity and why do you like it so much?";
    TopicList[2] = "What is the power of humor and can you give any advice on how to be a humorous person?";
    TopicList[3] = "Can you use examples to illustrate the power of words";
    TopicList[4] = "Is letter writing better than calling? Why?";
    TopicList[5] = "How does Chinese culture affect gender roles?";
    TopicList[6] = "Which one would you prefer to be taught in, single-sex class or co-educational one? Why?"
    TopicList[7] = "What can parents do at home to encourage a child’s creativity?"
    TopicList[8] = "Which should be emphasized in education, knowledge or creativity?"
    TopicList[9] = "Do you consider star athletes good role models for young people? Why or why not?";
    TopicList[10] = "Star athletes now have not only acquired fame, but also made a lot of money. Do they deserve so much?";
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
function rand(mode) {
    // SentenceMaking
    var check = document.getElementsByName("che");
    var unit = new Array();
    var curList = new Array();
    var sqlValue = "";
    var sm;
    for (var i = 0; i < check.length; i++) {
        if (check[i].checked) {
            unit.push(parseInt(check[i].value));
            sqlValue += check[i].value;
        }
    }
    if (unit.length == 0) {
        window.alert("出错啦，必须要选择一个单元啦");
        return;
    }
    clearInterval(timeable);
    for (var i = 0; i < 6; ++i) {
        document.getElementById(i.toString()).innerHTML = "";
    }
    time_log = 0;
    curMode = mode;
    if (mode == 'topicButton') {
        document.getElementsByTagName("body")[0].style.backgroundColor = "white";
        document.getElementById("next").innerHTML = "36秒";
        document.getElementById("next").style.backgroundColor = "rgb(0, 0, 255)";
        document.getElementById("topicButton").innerHTML = "换一组";
        document.getElementById("topicButton").style.backgroundColor = "buttonface";
        timeMax = parseInt(document.getElementById("people").value) * 45;
        var tmp = parseInt(unit[randomNum(0, unit.length - 1)]);
        var temp = randomNum(tmp * 2 + 1, tmp * 2 + 2);
        console.log(temp);
        document.getElementById("0").innerHTML = TopicList[temp];
    } else {
        document.getElementsByTagName("body")[0].style.backgroundColor = "white";
        document.getElementById("next").innerHTML = "换一组";
        document.getElementById("next").style.backgroundColor = "buttonface";
        document.getElementById("topicButton").innerHTML = "Topic";
        document.getElementById("topicButton").style.backgroundColor = "rgb(0, 0, 255)";
        timeMax = 36;
        // console.log(unit);
        $.ajax({
            url: 'http://119.3.172.223/test.php?cmd=eq&type=sm&value=' + sqlValue,
            type: 'get',
            success: function (response) {
                response = eval('(' + response+ ')');
                for (var i = 0; i < 4; ++i) {
                    document.getElementById(i.toString()).innerHTML = response['a' + i.toString()];
                    console.log(response['a' + i.toString()]);
                }
            }
        });
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
        $.ajax({
            url: 'http://119.3.172.223/test.php?cmd=be&type=tr&value=' + (minn * 1000 + maxn).toString(),
            type: 'get',
            success: function (response) {
                console.log(response);
            }
        });
        //
        curList.push(randomNum(minn, maxn));
        while (true) {
            var temp = randomNum(minn, maxn);
            if (temp != curList[4]) {
                curList.push(temp);
                break;
            }
        }
        //
        document.getElementById("4").innerHTML = Translate[curList[0]];
        document.getElementById("5").innerHTML = Translate[curList[1]];
        console.log(curList);
        // timeable = setTimeout("endTime();", 36000);
    }
    radialObj.value(time_log / timeMax);
    timeable = setInterval(function () {
        time_log++;
        radialObj.value(time_log / timeMax);
        if (time_log >= timeMax) {
            endTime();
        }
    }, 1000);
}
function endTime() {
    clearInterval(timeable);
    document.getElementsByTagName("body")[0].style.backgroundColor = "#2f3640";
    document.getElementById(curMode).innerHTML = "时间到";
    document.getElementById(curMode).style.backgroundColor = "red";
}
function changeFontSize() {
    for (var i = 0; i < 6; i++)
        document.getElementById(i.toString()).style.fontSize = document.getElementById("slider").value.toString() + "px";
}
function hides() {
    hidesStatus = !hidesStatus;
    if (hidesStatus) {
        document.getElementById("footer").style.height = "0";
        document.getElementById("modeSel").style.opacity = "0";
        document.getElementById("buttons").style.bottom = "5%";
        document.getElementById("hide").innerHTML = "显示";
    }
    else {
        document.getElementById("footer").style.height = "80px";
        document.getElementById("modeSel").style.opacity = "1";
        document.getElementById("buttons").style.bottom = "30%";
        document.getElementById("hide").innerHTML = "隐藏";
    }
}
function startClock() {
    // 定义时钟
    radialObj = radialIndicator('#clock', {
        radius: 60,
        barWidth: 15,
        barColor: '#FF0000',
        minValue: 0,
        maxValue: 1,
        // fontWeight: 'normal',
        fontWeight: '700',
        roundCorner: true,
        format: function (value) {
            if ((timeMax - time_log).toString() == "NaN")
                return "Ready";
            else
                return (timeMax - time_log).toString();
        }
    });
}
function showTime() {
    if (document.getElementById("timeShow").checked)
        document.getElementById("clock").style.opacity = 1;
    else
        document.getElementById("clock").style.opacity = 0;
}
window.ontouchmove = function (event) {
    // console.log(event.target.id);
    if (event.target.id == "slider") {
        changeFontSize();
    }
}
