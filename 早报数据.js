/* 每日早报数据存档：最新一期在最前面。
   每天由本机 Codex 定时任务自动抓取后，往数组开头插入一期。
   板块顺序：AI 前沿（重点）→ 中国 → 美国·国际 → 财经 → 昨日最热（知乎/B站/抖音榜首）
   格式说明见 每日播报_操作规程.md。人物志由 人物志故事库.js 按日轮换，不在本文件。 */
const DAILY_ARCHIVE = [
  {
    date: "2026-07-19",
    weekday: "周日",
    news: [
      {
        cat: "🤖 AI 前沿",
        items: [
          { t: "AI治理引入哲学讨论", s: "量子位报道，随着智能系统进入社会运行场景，围绕AI治理的讨论正吸收哲学视角，以处理技术应用中的规范与责任问题。", link: "https://www.qbitai.com/2026/07/455041.html" },
          { t: "WAIC展示模型“读心术”探索", s: "WAIC现场展示了以主观世界模型为线索的AI研究与产品演示，关注模型对人的状态、意图和环境信息的理解能力。", link: "https://www.qbitai.com/2026/07/455031.html" },
          { t: "国产GPU直通方案公布实测", s: "一项面向国产GPU的直通方案公布测试结果，报道提到其不依赖英伟达网卡，并比较了吞吐量和延迟等性能指标。", link: "https://www.qbitai.com/2026/07/454932.html" },
          { t: "非营利组织推进开放AI网络", s: "TechCrunch报道，非营利组织Current AI正尝试建设面向公众开放的AI网络基础设施，主张以开放方式连接AI能力与资源。", link: "https://techcrunch.com/2026/07/19/nonprofit-current-ai-is-racing-to-build-the-world-wide-web-of-ai-free-for-all/" },
          { t: "诺兰称AI可能是“特洛伊木马”", s: "导演克里斯托弗·诺兰在谈及新作时表达了对AI的警惕，认为社会在接纳相关技术时需要更审慎地看待潜在影响。", link: "https://techcrunch.com/2026/07/19/odyssey-director-christopher-nolan-calls-ai-an-obvious-trojan-horse/" }
        ]
      },
      {
        cat: "🇨🇳 中国",
        items: [
          { t: "WAIC展示健康预警与中医机器人", s: "36氪报道，安顿健康在WAIC发布生命预警表标准和七诊合参中医机器人，方案结合多类生理信号与AI辅助评估。", link: "https://36kr.com/p/3902428274427525?f=rss" },
          { t: "印奇谈智能体进入物理世界", s: "在WAIC主论坛上，印奇围绕智能体与物理世界的结合发表演讲，讨论模型能力、编程能力及产业落地的演进。", link: "https://36kr.com/p/3900439867147909?f=rss" },
          { t: "1688拟推AI时代B2B开放标准", s: "36氪汇总消息称，阿里1688宣布将在本月底推出面向AI时代的B2B交易互联互通开放标准。", link: "https://36kr.com/p/3896564485572489?f=rss" }
        ]
      },
      {
        cat: "🇺🇸 美国·国际",
        items: [
          { t: "揭阳虐狗事件引发跨地域舆论", s: "BBC中文报道，中国揭阳虐狗事件在多地引发声援、广告投放和抵制等行动，并带动对动物保护立法的讨论。", link: "https://www.bbc.com/zhongwen/trad" },
          { t: "脱北者谈K-pop进入朝鲜", s: "多名脱北者向BBC表示，尽管存在严格限制，韩国流行音乐仍通过不同渠道进入朝鲜，并对部分民众产生影响。", link: "https://www.bbc.com/zhongwen/trad" },
          { t: "研究关注矮小双胞胎的癌症线索", s: "BBC报道，一对身高不足1.2米的双胞胎及相关研究为癌症预防研究提供线索，研究人员比较了其与同村人群的健康差异。", link: "https://www.bbc.com/zhongwen/trad" }
        ]
      },
      {
        cat: "💰 财经",
        items: [
          { t: "苹果市值重返全球第一", s: "36氪早间资讯汇总提到，苹果市值重返全球第一；同一轮市场资讯还覆盖了国内成品油价格调整等消息。", link: "https://36kr.com/p/3900449325287305?f=rss" },
          { t: "具身智能融资规模受关注", s: "36氪援引研究与行业数据称，中国具身智能市场持续扩张，2026年上半年相关融资金额和事件数量均较上年同期增长。", link: "https://36kr.com/p/3899597215745664?f=rss" }
        ]
      },
      {
        cat: "🔥 昨日最热·知乎",
        items: [
          { t: "【第1】马龙/许昕获全锦赛男双冠军", s: "知乎热榜第1，讨论马龙与许昕夺得全国乒乓球锦标赛男双冠军及本场比赛表现。", link: "https://www.zhihu.com/question/2062261231742707046" },
          { t: "【第2】于东来谈带薪年假与40小时工作制", s: "知乎热榜第2，话题聚焦每年新增带薪年假和严格执行每周40小时工作制的用工建议。", link: "https://www.zhihu.com/question/2061431899038409047" },
          { t: "【第3】西班牙对阿根廷世界杯决赛前瞻", s: "知乎热榜第3，网友讨论美加墨世界杯决赛西班牙与阿根廷的胜负走向及关键因素。", link: "https://www.zhihu.com/question/2061433680585811334" },
          { t: "【第4】宜家集中出售商场", s: "知乎热榜第4，讨论宜家出售8座商场、其中多家商场关停的资产处置及零售业变化。", link: "https://www.zhihu.com/question/2061839991072990909" },
          { t: "【第5】清华学生“过目不忘”传言", s: "知乎热榜第5，围绕清华学生中“80%过目不忘”的说法展开事实辨析和学习能力讨论。", link: "https://www.zhihu.com/question/27686348" }
        ]
      },
      {
        cat: "🔥 昨日最热·B站",
        items: [
          { t: "【第1】订书钉演奏《千本樱》", s: "UP主不那么肝的老肝妈投稿，榜单抓取时播放量约739万。", link: "https://www.bilibili.com/video/BV13YNd6dEb9" },
          { t: "【第2】寻找卢本伟", s: "STN工作室投稿，榜单抓取时播放量约947万。", link: "https://www.bilibili.com/video/BV1oHNv6kEzB" },
          { t: "【第3】古典美声与喉音技巧融合", s: "UP主时代新声古典松子吟投稿，榜单抓取时播放量约276万。", link: "https://www.bilibili.com/video/BV1y9K364EaB" },
          { t: "【第4】苏新皓夏日运动会音乐现场", s: "UP主JUSTSU_苏新皓发布4K直拍，榜单抓取时播放量约52万。", link: "https://www.bilibili.com/video/BV1N7KL6BErW" },
          { t: "【第5】《崩坏：星穹铁道》公益第二卷", s: "崩坏星穹铁道官方投稿，榜单抓取时播放量约132万。", link: "https://www.bilibili.com/video/BV1WQKn6SEaP" }
        ]
      },
      {
        cat: "🔥 昨日最热·抖音",
        items: [
          { t: "今日抓取失败", s: "抖音热榜接口在本次抓取时发生SSL连接错误，未写入未经核实的榜单内容。", link: "" }
        ]
      },
      {
        cat: "🔥 昨日最热·X",
        items: [
          { t: "【第1】Good Sunday", s: "Trends24抓取的美国X趋势榜第1，反映周日问候类话题的集中讨论。", link: "https://twitter.com/search?q=Good%20Sunday" },
          { t: "【第2】#BelgianGP", s: "Trends24抓取的美国X趋势榜第2，话题指向比利时大奖赛相关讨论。", link: "https://twitter.com/search?q=%23BelgianGP" },
          { t: "【第3】#PerthSantaConcertD2", s: "Trends24抓取的美国X趋势榜第3，围绕珀斯圣诞音乐会相关内容传播。", link: "https://twitter.com/search?q=%23PerthSantaConcertD2" },
          { t: "【第4】George Russell", s: "Trends24抓取的美国X趋势榜第4，围绕F1车手乔治·拉塞尔的讨论升温。", link: "https://twitter.com/search?q=George%20Russell" },
          { t: "【第5】Tate", s: "Trends24抓取的美国X趋势榜第5，相关词条进入美国地区实时趋势列表。", link: "https://twitter.com/search?q=Tate" }
        ]
      }
    ],
    podcasts: [
      { show: "What's Next｜科技早知道", title: "如何「兜住」一颗火箭？| S10E21", note: "节目围绕长征十号乙的海上网系捕获回收，讨论不同火箭回收路径及中国航天后续看点。", audio: "https://aphid.fireside.fm/d/1437767933/4931937e-0184-4c61-a658-6b03c254754d/b66fdf0f-d428-4f0c-8412-b0c7581132d0.mp3", link: "https://guiguzaozhidao.fireside.fm/20240435" },
      { show: "硅谷101", title: "E244｜机器人走错路了？与苏度韩铮聊聊具身智能的3D数据、路径分野与硅谷竞赛", note: "节目讨论具身智能的3D数据、软硬件协同和仿真迁移，并邀请苏度科技CEO韩铮解析机器人操作能力。", audio: "https://aphid.fireside.fm/d/1437767933/f0f20376-8faf-4940-b920-84af6c734e2d/fc9a3737-81a9-49cf-a7d6-530c77df836e.mp3", link: "https://sv101.fireside.fm/257" }
    ]
  },
  {
    date: "2026-07-18",
    weekday: "周六",
    news: [
      {
        cat: "📢 创刊说明",
        items: [
          { t: "《每日世界》创刊号", s: "本站每天早晨自动更新：AI 前沿重点播报 + 中美要闻 + 昨日知乎/B站/抖音最热 + 热门播客，并每日轮换一篇大佬人物志。正式播报从明早开始。", link: "" }
        ]
      }
    ],
    podcasts: []
  }
];
