/* 人物志·精选播客单：从小宇宙挑选的高播放人物访谈单集，固定展示。
   听完让 AI 换一批即可（编辑本文件后 git push）。链接均已逐条验证有效。 */
const FIGURE_PODCASTS = [
  {
    show: "岩中花述",
    title: "S7E3 鲁豫对话李翊云 | 有些艰难无法走出，我始终与其共处",
    guest: "李翊云（作家、普林斯顿教授）",
    why: "百万播放的年度深访：接连失去两个孩子的作家如何与苦难共处，被听众称为“生命教育课”",
    link: "https://www.xiaoyuzhoufm.com/episode/67eb91c10decaeb094327570",
    plays: "124万"
  },
  {
    show: "罗永浩的十字路口",
    title: "蔡康永×罗永浩！在残酷的世界寻找自在与和解、保持慈悲与真实",
    guest: "蔡康永",
    why: "两位表达高手聊如何在残酷世界里保持慈悲与真实，该节目播放量最高单集之一",
    link: "https://www.xiaoyuzhoufm.com/episode/69f12bc9d97e02e4ca5d1bc6",
    plays: "95万"
  },
  {
    show: "罗永浩的十字路口",
    title: "杨笠×罗永浩！不想成为“靶心”，也无意成为“灯塔”",
    guest: "杨笠",
    why: "身处舆论风暴中心的脱口秀演员罕见坦诚复盘争议与成长",
    link: "https://www.xiaoyuzhoufm.com/episode/69c45e30e73b70b045dc11c5",
    plays: "83万"
  },
  {
    show: "天真不天真",
    title: "vol.30 对谈邵亦波：一个学霸的“学会爱自己”之路",
    guest: "邵亦波（易趣网创始人、经纬创投联合创始人）",
    why: "哈佛神童、亿万富豪为何转身研究“爱自己”，成功者的内心成长课",
    link: "https://www.xiaoyuzhoufm.com/episode/685986762a38b4d97928da10",
    plays: "80万"
  },
  {
    show: "罗永浩的十字路口",
    title: "李想×罗永浩！四小时马拉松访谈！李想首度公开讲述 25 年创业之路",
    guest: "李想（理想汽车创始人）",
    why: "从高中创业到三次公司生死劫，25 年创业史首次完整公开，成长故事天花板",
    link: "https://www.xiaoyuzhoufm.com/episode/68a3d1fe293471fed44ce974",
    plays: "74万"
  },
  {
    show: "无人知晓",
    title: "E38 孟岩对话陈行甲：他们落水了，水很凉",
    guest: "陈行甲（前“网红县委书记”、公益人）",
    why: "从全国优秀县委书记到裸辞做公益的人生转轨故事，2200+条评论口碑爆棚",
    link: "https://www.xiaoyuzhoufm.com/episode/674993fcc3b2a2f334681d1c",
    plays: "44万"
  },
  {
    show: "罗永浩的十字路口",
    title: "何小鹏×罗永浩！从财富自由奔赴无尽地狱模式的创业故事",
    guest: "何小鹏（小鹏汽车创始人）",
    why: "卖掉UC财富自由后为何再入造车地狱模式，创业者的自我拷问与翻盘",
    link: "https://www.xiaoyuzhoufm.com/episode/68acd788293471fed470ef39",
    plays: "34万"
  },
  {
    show: "罗永浩的十字路口",
    title: "五条人之仁科×罗永浩！近五个小时的变态超长对谈！",
    guest: "仁科（五条人乐队）",
    why: "近5小时聊透一个从城中村走出的音乐人的野生成长史，松弛又密度极高",
    link: "https://www.xiaoyuzhoufm.com/episode/68c086ac2c82c9dcca930f35",
    plays: "32万"
  },
  {
    show: "张小珺Jùn｜商业访谈录",
    title: "118. 对李想的第二次3小时访谈：CEO大模型、能量、记忆、对抗人性",
    guest: "李想（理想汽车创始人）",
    why: "AI访谈标杆节目的3小时深访，从大模型聊到对抗人性与亲密关系，思考密度极高",
    link: "https://www.xiaoyuzhoufm.com/episode/6902c5f7abb5e1cf581296be",
    plays: "6万"
  },
  {
    show: "张小珺Jùn｜商业访谈录",
    title: "62. 你们要的朱啸虎，来了",
    guest: "朱啸虎（金沙江创投主管合伙人）",
    why: "AI投资圈最出圈的“中国现实主义”访谈，大模型暴论原始出处，引发全行业讨论",
    link: "https://www.xiaoyuzhoufm.com/episode/66090a2c1519139e4fa97f99",
    plays: "2.9万"
  }
];
