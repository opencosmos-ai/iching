---
work: "說文解字"
work_english: "Shuowen Jiezi — Explaining Graphs and Analysing Characters"
author: "許慎"
author_english: "Xu Shen"
author_dates: "c. 58 – c. 148 CE"
edition: "四部叢刊初編 (Sibu Congkan, first series), facsimile"
transcription: "Chinese Wikisource, mainspace, tagged public domain worldwide"
obtained: "https://zh.wikisource.org/wiki/說文解字"
punctuation: "modern editorial, present in the transcription and retained"
rights: "public domain by age (author d. c. 148 CE)"
scope: "SELECTION — only characters occurring in the Zhouyi and its Wings, not the whole dictionary"
imported_by: "npm run import-sources -- --only shuowen"
transcribed: 2026-09-25
---

# 說文解字 — the characters of the Zhouyi

*The earliest systematic analysis of Chinese characters, c. 100 CE, and the third of the four corners
[`method.md`](../../method.md) §2 argues from. Vendored as a **selection**: only the characters that occur in
the core text and the Wings as `sources/` holds them. The Chinese is Xu Shen's and is public domain by age;
the parse into semantic and phonetic components is mechanical, from his own 从X / X聲 formulas.*

**The parser is the Tao Te Ching project's** (`tools/import_shuowen.py`), ported to
[`scripts/shuowen.ts`](../../scripts/shuowen.ts), and every import re-checks the port against that project's
own table. **So is the list of verified old forms** — 明 is filed as 朙, 以 as 㠯 — and no mapping is added here
that was not verified there: a wrong one would put another word's etymology under a right character.

**The definitions are untranslated, deliberately.** Machine-rendering classical Chinese definitions would
manufacture scholarship nobody did. They are glossed by hand, in `glossary/`, as characters earn entries.

**1228 of the 1374 characters in the Zhouyi are matched** (89.4%) — 755 phonetic-compound, 358 compound, 95 pictograph, 19 unanalysed, 1 phonetic-only.

**Columns.** `char` (as the Zhouyi writes it) · `headword` (the graph 說文 files it under) · `matched_by` ·
`radical` (the 說文 section, not always the Kangxi one) · `kind` · `semantic` (从X — components carrying meaning) ·
`phonetic` (X聲 — present for sound alone) · `fanqie` (the Middle Chinese spelling, where the transcription
carries one) · `definition` (Xu Shen, verbatim).

| char | headword | matched_by | radical | kind | semantic | phonetic | fanqie | definition |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 一 | 一 | exact | 一 | unanalysed |  |  | 於悉切 | 惟初太始，道立於一，造分天地，化成萬物。凡一之屬皆从一。 |
| 七 | 七 | exact | 七 | compound | 一 |  |  | 陽之正也。从一，微陰从中衺出也。凡七之屬皆从七。 |
| 丈 | 丈 | exact | 十 | compound | 又持十 |  |  | 十尺也。从又持十。 |
| 三 | 三 | exact | 三 | compound | 三數 |  | 穌甘切 | 天、地、人之道也。从三數。凡三之屬皆从三。 |
| 上 | 上 | exact | 丄 | unanalysed |  |  | 時掌切 | 高也。此古文上，指事也。凡丄之屬皆从丄。 |
| 下 | 下 | exact | 丄 | unanalysed |  |  | 胡雅切 | 底也。指事。 |
| 不 | 不 | exact | 不 | compound | 一 |  |  | 鳥飛上翔不下來也。从一，一猶天也。象形。凡不之屬皆从不。 |
| 丑 | 丑 | exact | 丑 | pictograph |  |  |  | 紐也。十二月，萬物動，用事。象手之形。時加丑，亦舉手時也。凡丑之屬皆从丑。 |
| 且 | 且 | exact | 且 | compound | 几 |  |  | 薦也。从几，足有二橫，一其下地也。凡且之屬皆从且。 |
| 世 | 世 | exact | 卅 | compound | 卅而曳長之 |  |  | 三十年爲一丗。从卅而曳長之。亦取其聲也。 |
| 丘 | 丘 | exact | 丘 | compound | 北一 |  |  | 土之高也，非人所爲也。从北从一。一，地也，人居在丘南，故从北。中邦之居，在崐崘東南。一曰四方高，中央下爲丘。象形。凡丘之屬皆从丘。今隷變作丘。 |
| 中 | 中 | exact | 丨 | compound | 口 |  | 陟弓切 | 内也。从口。丨，上下通。 |
| 主 | 主 | exact | 丶 | phonetic-compound | 丶 | 丶 |  | 鐙中火主也。从{{?|⿱凵土}}，象形。从丶，丶亦聲。 |
| 乃 | 乃 | exact | 乃 | pictograph |  |  |  | 曳詞之難也。象气之出難。凡𠄎之屬皆从𠄎。 |
| 久 | 久 | exact | 久 | pictograph |  |  |  | 以後灸之，象人兩脛後有距也。《周禮》曰：“久諸牆以觀其橈。”凡久之屬皆从久。 |
| 之 | 之 | exact | 之 | pictograph |  |  |  | 出也。象艸過屮，枝莖益大，有所之。一者，地也。凡之之屬皆从之。 |
| 乎 | 乎 | exact | 兮 | compound | 兮 |  |  | 語之餘也。从兮，象聲上越揚之形也。 |
| 乘 | 椉 | old-form | 桀 | compound | 入 |  |  | 覆也。从入、桀。桀，黠也。軍法曰乘。 |
| 乙 | 乙 | exact | 乙 | pictograph |  |  |  | 象春艸木冤曲而出，陰气尚彊，其出乙乙也。與丨同意。乙承甲，象人頸。凡乙之屬皆从乙。 |
| 九 | 九 | exact | 九 | pictograph |  |  |  | 陽之變也。象其屈曲究盡之形。凡九之屬皆从九。 |
| 也 | 也 | exact | 乁 | pictograph |  |  |  | 女陰也。象形。 |
| 乾 | 乾 | exact | 乙 | phonetic-compound | 乙 | 倝 |  | 上出也。从乙，乙，物之達也；倝聲。 |
| 亂 | 亂 | exact | 乙 | compound | 乙𤔔 |  |  | 治也。从乙，乙，治之也；从𤔔。 |
| 事 | 事 | exact | 史 | phonetic-compound | 史 | 之 |  | 職也。从史，之省聲。 |
| 二 | 二 | exact | 二 | compound | 偶一 |  |  | 地之數也。从偶一。凡二之屬皆从二。 |
| 五 | 五 | exact | 五 | compound | 二 |  |  | 五行也。从二，陰陽在天地閒交午也。凡五之屬皆从五。 |
| 井 | 井 | exact | 井 | pictograph |  |  |  | 八家一井，象構韓形。•，𦉥之象也。古者伯益初作井。凡井之屬皆从井。 |
| 亟 | 亟 | exact | 二 | compound | 人口又二 |  |  | 敏疾也。从人从口，从又从二。二，天地也。 |
| 亡 | 亡 | exact | 亡 | compound | 人乚 |  |  | 逃也。从人从乚。凡亡之屬皆从亡。 |
| 亢 | 亢 | exact | 亢 | compound | 大 |  |  | 人頸也。从大省，象頸脈形。凡亢之屬皆从亢。 |
| 交 | 交 | exact | 交 | compound | 大 |  |  | 交脛也。从大，象交形。凡交之屬皆从交。 |
| 亦 | 亦 | exact | 亦 | compound | 大 |  |  | 人之臂亦也。从大，象兩亦之形。凡亦之屬皆从亦。 |
| 享 | 亯 | old-form | 亯 | compound | 高 |  |  | 獻也。从高省，曰象進孰物形。《孝經》曰：“祭則鬼亯之。”凡亯之屬皆从亯。 |
| 人 | 人 | exact | 人 | pictograph |  |  |  | 天地之性最貴者也。此籒文。象臂脛之形。凡人之屬皆从人。 |
| 仁 | 仁 | exact | 人 | compound | 人二 |  |  | 親也。从人从二。 |
| 仇 | 仇 | exact | 人 | phonetic-compound | 人 | 九 |  | 讎也。从人九聲。 |
| 介 | 介 | exact | 八 | compound | 八人 |  |  | 畫也。从八从人。人各有介。 |
| 代 | 代 | exact | 人 | phonetic-compound | 人 | 弋 |  | 更也。从人弋聲。 |
| 以 | 㠯 | old-form | 巳 | compound | 反巳 |  |  | 用也。从反巳。賈侍中說：巳，意巳實也。象形。 |
| 仰 | 仰 | exact | 人 | compound | 人卬 |  |  | 舉也。从人从卬。 |
| 任 | 任 | exact | 人 | phonetic-compound | 人 | 壬 |  | 符也。从人壬聲。 |
| 伍 | 伍 | exact | 人 | compound | 人五 |  |  | 相參伍也。从人从五。 |
| 伏 | 伏 | exact | 人 | compound | 人犬 |  |  | 司也。从人从犬。 |
| 伐 | 伐 | exact | 人 | compound | 人持戈 |  |  | 擊也。从人持戈。一曰敗也。 |
| 休 | 休 | exact | 木 | compound | 人依木 |  |  | 息止也。从人依木。 |
| 伸 | 伸 | exact | 人 | phonetic-compound | 人 | 申 |  | 屈伸。从人申聲。 |
| 似 | 佀 | old-form | 人 | phonetic-compound | 人 | 㠯 |  | 象也。从人㠯聲。 |
| 佃 | 佃 | exact | 人 | phonetic-compound | 人 | 田 |  | 中也。从人田聲。《春秋傳》曰：“乘中佃。”一轅車。 |
| 位 | 位 | exact | 人 | compound | 人 |  |  | 列中庭之左右謂之位。从人、立。 |
| 何 | 何 | exact | 人 | phonetic-compound | 人 | 可 |  | 儋也。从人可聲。 |
| 作 | 作 | exact | 人 | compound | 人乍 |  |  | 起也。从人从乍。 |
| 使 | 使 | exact | 人 | phonetic-compound | 人 | 吏 |  | 伶也。从人吏聲。 |
| 來 | 來 | exact | 來 | pictograph |  |  |  | 周所受瑞麥來麰。一來二縫，象芒朿之形。天所來也，故爲行來之來。《詩》曰：“詒我來麰。”凡來之屬皆从來。 |
| 依 | 依 | exact | 人 | phonetic-compound | 人 | 衣 |  | 倚也。从人衣聲。 |
| 侯 | 矦 | old-form | 矢 | compound | 人厂 |  |  | 春饗所䠶矦也。从人；从厂，象張布；矢在其下。天子䠶熊虎豹，服猛也；諸矦䠶熊豕虎；大夫射麋，麋，惑也；士射鹿豕，爲田除害也。其祝曰：“毋若不寕矦，不朝于王所，故伉而䠶汝也。” |
| 侵 | 侵 | exact | 人 | compound | 人 |  |  | 漸進也。从人、又持帚，若埽之進。又，手也。 |
| 係 | 係 | exact | 人 | phonetic-compound | 人系 | 系 |  | 絜束也。从人从系，系亦聲。 |
| 俗 | 俗 | exact | 人 | phonetic-compound | 人 | 谷 |  | 習也。从人谷聲。 |
| 保 | 保 | exact | 人 | compound | 人𤓽 |  |  | 養也。从人，从𤓽省。𤓽，古文孚。 |
| 俟 | 俟 | exact | 人 | phonetic-compound | 人 | 矣 |  | 大也。从人矣聲。《詩》曰：“伾伾俟俟。” |
| 信 | 信 | exact | 言 | compound | 人言 |  |  | 誠也。从人从言。會意。 |
| 修 | 修 | exact | 彡 | phonetic-compound | 彡 | 攸 |  | 飾也。从彡攸聲。 |
| 倍 | 倍 | exact | 人 | phonetic-compound | 人 | 咅 |  | 反也。从人咅聲。 |
| 倚 | 倚 | exact | 人 | phonetic-compound | 人 | 奇 |  | 依也。从人奇聲。 |
| 倦 | 倦 | exact | 人 | phonetic-compound | 人 | 卷 |  | 罷也。从人卷聲。 |
| 假 | 假 | exact | 人 | phonetic-compound | 人 | 叚 |  | 非眞也。从人叚聲。一曰至也。《虞書》曰：“假于上下。” |
| 偏 | 偏 | exact | 人 | phonetic-compound | 人 | 扁 |  | 頗也。从人扁聲。 |
| 偕 | 偕 | exact | 人 | phonetic-compound | 人 | 皆 |  | 彊也。从人皆聲。《詩》曰：“偕偕士子。”一曰俱也。 |
| 健 | 健 | exact | 人 | phonetic-compound | 人 | 建 |  | 伉也。从人建聲。 |
| 偶 | 偶 | exact | 人 | phonetic-compound | 人 | 禺 |  | 桐人也。从人禺聲。 |
| 偽 | 僞 | old-form | 人 | phonetic-compound | 人 | 爲 |  | 詐也。从人爲聲。 |
| 備 | 備 | exact | 人 | phonetic-compound | 人 | 𤰈 |  | 愼也。从人𤰈聲。 |
| 傷 | 傷 | exact | 人 | phonetic-compound | 人 | 𥏻 |  | 創也。从人，𥏻省聲。 |
| 傾 | 傾 | exact | 人 | phonetic-compound | 人頃 | 頃 |  | 仄也。从人从頃，頃亦聲。 |
| 像 | 像 | exact | 人 | phonetic-compound | 人象 | 象 |  | 象也。从人从象，象亦聲。讀若養。 |
| 僕 | 僕 | exact | 菐 | phonetic-compound | 人菐 | 菐 |  | 給事者。从人从菐，菐亦聲。 |
| 儀 | 儀 | exact | 人 | phonetic-compound | 人 | 義 |  | 度也。从人義聲。 |
| 億 | 億 | exact | 人 | phonetic-compound | 人 | 𢡃 |  | 安也。从人𢡃聲。 |
| 儉 | 儉 | exact | 人 | phonetic-compound | 人 | 僉 |  | 約也。从人僉聲。 |
| 允 | 允 | exact | -{儿}- | unanalysed |  |  |  | 信也。从-{儿}-㠯聲。 |
| 元 | 元 | exact | 一 | compound | 一兀 |  | 愚袁切 | 始也。从一，从兀。 |
| 兄 | 兄 | exact | 兄 | unanalysed |  |  |  | 長也。从-{儿}-从口。凡兄之屬皆从兄。 |
| 先 | 先 | exact | 先 | unanalysed |  |  |  | 前進也。从-{儿}-从之。凡先之屬皆从先。 |
| 光 | 光 | exact | 火 | compound | 火在人上 |  |  | 明也。从火在人上，光明意也。 |
| 克 | 克 | exact | 克 | pictograph |  |  |  | 肩也。象屋下刻木之形。凡克之屬皆从克。 |
| 兌 | 兌 | exact | -{儿}- | unanalysed |  |  |  | 說也。从-{儿}-㕣聲。 |
| 入 | 入 | exact | 入 | pictograph |  |  |  | 内也。象从上俱下也。凡入之屬皆从入。 |
| 內 | 內 | exact | 入 | compound | 口 |  |  | 入也。从口，自外而入也。 |
| 全 | 仝 | old-form | 入 | compound | 入工 |  |  | 完也。从入从工。 |
| 兩 | 兩 | exact | 㒳 | compound | 一 |  |  | 二十四銖爲一兩。从一；㒳，平分，亦聲。 |
| 八 | 八 | exact | 八 | pictograph |  |  |  | 別也。象分別相背之形。凡八之屬皆从八。 |
| 公 | 公 | exact | 八 | compound | 八厶 |  |  | 平分也。从八从厶。八猶背也。韓非曰：背厶爲公。 |
| 六 | 六 | exact | 六 | compound | 入八 |  |  | 《易》之數，陰變於六，正於八。从入从八。凡六之屬皆从六。 |
| 兵 | 兵 | exact | 𠬞 | compound | 廾持斤 |  |  | 械也。从廾持斤，并力之皃。 |
| 典 | 典 | exact | 丌 | compound | 冊在丌上 |  |  | 五帝之書也。从冊在丌上，尊閣之也。莊都說，典，大冊也。 |
| 兼 | 兼 | exact | 秝 | compound | 又持秝 |  |  | 并也。从又持秝。兼持二禾，秉持一禾。 |
| 再 | 再 | exact | 冓 | compound | 冓 |  |  | 一舉而二也。从冓省。 |
| 冑 | 冑 | exact | 冃 | phonetic-compound | 冃 | 由 |  | 兜鍪也。从冃由聲。 |
| 冒 | 冒 | exact | 冃 | compound | 冃目 |  |  | 冡而前也。从冃从目。 |
| 冥 | 冥 | exact | 冥 | phonetic-compound | 日六 | 冖 |  | 幽也。从日从六，冖聲。日數十。十六日而月始虧幽也。凡冥之屬皆从冥。 |
| 冰 | 冰 | exact | 仌 | compound | 仌水 |  |  | 水堅也。从仌从水。 |
| 冶 | 冶 | exact | 仌 | phonetic-compound | 仌 | 台 |  | 銷也。从仌台聲。 |
| 几 | 几 | exact | 几 | pictograph |  |  |  | 踞几也。象形。《周禮》五几：玉几、雕几、彤几、䰍几、素几。凡几之屬皆从几。 |
| 凡 | 凡 | exact | 二 | compound | 二𠄎 |  |  | 最括也。从二，二，偶也。从𠄎，𠄎，古文及。 |
| 凶 | 凶 | exact | 凶 | pictograph |  |  |  | 惡也。象地穿交陷其中也。凡凶之屬皆从凶。 |
| 出 | 出 | exact | 出 | pictograph |  |  |  | 進也。象艸木益滋，上出達也。凡出之屬皆从出。 |
| 分 | 分 | exact | 八 | compound | 八刀 |  |  | 別也。从八从刀，刀以分別物也。 |
| 切 | 切 | exact | 刀 | phonetic-compound | 刀 | 七 |  | 刌也。从刀七聲。 |
| 刑 | 刑 | exact | 刀 | phonetic-compound | 刀 | 幵 |  | 剄也。从刀幵聲。 |
| 刖 | 刖 | exact | 刀 | phonetic-compound | 刀 | 月 |  | 絕也。从刀月聲。 |
| 列 | 列 | exact | 刀 | phonetic-compound | 刀 | 𡿪 |  | 分解也。从刀𡿪聲。 |
| 初 | 初 | exact | 刀 | compound | 刀衣 |  |  | 始也。从刀从衣。裁衣之始也。 |
| 利 | 利 | exact | 刀 | compound | 刀和 |  |  | 銛也。从刀。和然後利，从和省。《易》曰：“利者，義之和也。” |
| 刲 | 刲 | exact | 刀 | phonetic-compound | 刀 | 圭 |  | 刺也。从刀圭聲。《易》曰：“士刲羊。” |
| 刳 | 刳 | exact | 刀 | phonetic-compound | 刀 | 夸 |  | 判也。从刀夸聲。 |
| 制 | 制 | exact | 刀 | compound | 刀未 |  |  | 裁也。从刀从未。未，物成有滋味，可裁斷。一曰止也。 |
| 則 | 則 | exact | 刀 | compound | 刀貝 |  |  | 等畫物也。从刀从貝。貝，古之物貨也。 |
| 前 | 前 | exact | 止 | compound | 止在舟上 |  |  | 不行而進謂之歬。从止在舟上。 |
| 剛 | 剛 | exact | 刀 | phonetic-compound | 刀 | 岡 |  | 彊斷也。从刀岡聲。 |
| 剝 | 剝 | exact | 刀 | phonetic-compound | 刀彔 | 彔 |  | 裂也。从刀从彔。彔，刻割也。彔亦聲。 |
| 剡 | 剡 | exact | 刀 | phonetic-compound | 刀 | 炎 |  | 銳利也。从刀炎聲。 |
| 力 | 力 | exact | 力 | pictograph |  |  |  | 筋也。象人筋之形。治功曰力，能圉大災。凡力之屬皆从力。 |
| 功 | 功 | exact | 力 | phonetic-compound | 力工 | 工 |  | 以勞定國也。从力从工，工亦聲。 |
| 加 | 加 | exact | 力 | compound | 力口 |  |  | 語相增加也。从力从口。 |
| 助 | 助 | exact | 力 | phonetic-compound | 力 | 且 |  | 左也。从力且聲。 |
| 動 | 動 | exact | 力 | phonetic-compound | 力 | 重 |  | 作也。从力重聲。 |
| 務 | 務 | exact | 力 | phonetic-compound | 力 | 敄 |  | 趣也。从力敄聲。 |
| 勝 | 勝 | exact | 力 | phonetic-compound | 力 | 朕 |  | 任也。从力朕聲。 |
| 勞 | 勞 | exact | 力 | compound | 力 |  |  | 劇也。从力，熒省。熒，火燒冂，用力者勞。 |
| 勢 | 勢 | exact | 力 | phonetic-compound | 力 | 埶 |  | 盛力權也。从力埶聲。經典通用埶。 |
| 勸 | 勸 | exact | 力 | phonetic-compound | 力 | 雚 |  | 勉也。从力雚聲。 |
| 勿 | 勿 | exact | 勿 | pictograph |  |  |  | 州里所建旗。象其柄，有三游。雜帛，幅半異。所以趣民，故遽，稱勿勿。凡勿之屬皆从勿。 |
| 包 | 包 | exact | 包 | pictograph |  |  |  | 象人褢妊，巳在中，象子未成形也。元气起於子。子，人所生也。男左行三十，女右行二十，俱立於巳，爲夫婦。褢妊於巳，巳爲子，十月而生。男起巳至寅，女起巳至申。故男秊始寅，女秊始申也。凡包之屬皆从包。 |
| 匕 | 匕 | exact | 匕 | compound | 反人 |  |  | 相與比敘也。从反人。匕，亦所以用比取飯，一名柶。凡匕之屬皆从匕。 |
| 化 | 化 | exact | 𠤎 | phonetic-compound | 𠤎人 | 𠤎 |  | 教行也。从𠤎从人，𠤎亦聲。 |
| 北 | 北 | exact | 北 | compound | 二人相背 |  |  | 𦮃也。从二人相背。凡北之屬皆从北。 |
| 匪 | 匪 | exact | 匚 | phonetic-compound | 匚 | 非 |  | 器，似竹筐。从匚非聲。《逸周書》曰：“實玄黃于匪。” |
| 匹 | 匹 | exact | 匸 | phonetic-compound | 八 | 八 |  | 四丈也。从八、匸。八揲一匹，八亦聲。 |
| 十 | 十 | exact | 十 | unanalysed |  |  |  | 數之具也。一爲東西，丨爲南北，則四方中央備矣。凡十之屬皆从十。 |
| 千 | 千 | exact | 十 | compound | 十人 |  |  | 十百也。从十从人。 |
| 升 | 升 | exact | 斗 | compound | 斗 |  |  | 十龠也。从斗，亦象形。 |
| 半 | 半 | exact | 半 | compound | 八牛 |  |  | 物中分也。从八从牛。牛爲物大，可以分也。凡半之屬皆从半。 |
| 卑 | 卑 | exact | 𠂇 | compound | 𠂇 |  |  | 賤也。執事也。从𠂇、甲。 |
| 卒 | 卒 | exact | 衣 | unanalysed |  |  |  | 隸人給事者衣爲卒。卒，衣有題識者。 |
| 南 | 南 | exact | 𣎵 | phonetic-compound | 𣎵 | 𢆉 |  | 艸木至南方，有枝任也。从𣎵𢆉聲。 |
| 博 | 博 | exact | 十 | compound | 十尃 |  |  | 大通也。从十从尃。尃，布也。 |
| 卜 | 卜 | exact | 卜 | pictograph |  |  |  | 灼剥龜也，象灸龜之形。一曰象龜兆之從橫也。凡卜之屬皆从卜。 |
| 占 | 占 | exact | 卜 | compound | 卜口 |  |  | 視兆問也。从卜从口。 |
| 卦 | 卦 | exact | 卜 | phonetic-compound | 卜 | 圭 |  | 筮也。从卜圭聲。 |
| 危 | 危 | exact | 危 | compound | 厃 |  |  | 在高而懼也。从厃，自卪止之。凡危之屬皆从危。 |
| 厚 | 厚 | exact | 㫗 | compound | 𣆪厂 |  |  | 山陵之厚也。从𣆪从厂。 |
| 厥 | 厥 | exact | 厂 | phonetic-compound | 厂 | 欮 |  | 發石也。从厂欮聲。 |
| 厭 | 厭 | exact | 厂 | phonetic-compound | 厂 | 猒 |  | 笮也。从厂猒聲。一曰合也。 |
| 厲 | 厲 | exact | 厂 | phonetic-compound | 厂 | 蠆 |  | 旱石也。从厂，蠆省聲。 |
| 去 | 去 | exact | 去 | phonetic-compound | 大 | 𠙴 |  | 人相違也。从大𠙴聲。凡去之屬皆从去。 |
| 又 | 又 | exact | 又 | pictograph |  |  |  | 手也。象形。三指者，手之𠛱多略不過三也。凡又之屬皆从又。 |
| 及 | 及 | exact | 又 | compound | 又人 |  |  | 逮也。从又从人。 |
| 友 | 友 | exact | 又 | compound | 二又 |  |  | 同𢖽爲友。从二又。相交友也。 |
| 反 | 反 | exact | 又 | compound | 又 |  |  | 覆也。从又，厂反形。 |
| 取 | 取 | exact | 又 | compound | 又耳 |  |  | 捕取也。从又从耳。《周禮》：“獲者取左耳。”《司馬法》曰：“載獻聝。”聝者，耳也。 |
| 受 | 受 | exact | 𠬪 | phonetic-compound | 𠬪 | 舟 |  | 相付也。从𠬪，舟省聲。 |
| 叛 | 叛 | exact | 半 | phonetic-compound | 半 | 反 |  | 半也。从半反聲。 |
| 叡 | 叡 | exact | 𣦼 | compound | 𣦼目谷 |  |  | 深明也。通也。从𣦼从目，从谷省。 |
| 叢 | 叢 | exact | 丵 | phonetic-compound | 丵 | 取 |  | 聚也。从丵取聲。 |
| 口 | 口 | exact | 口 | pictograph |  |  |  | 人所以言食也。象形。凡口之屬皆从口。 |
| 古 | 古 | exact | 古 | compound | 十 |  |  | 故也。从十、口。識前言者也。凡古之屬皆从古。 |
| 可 | 可 | exact | 可 | phonetic-compound | 口丂 | 丂 |  | 𦘫也。从口丂，丂亦聲。凡可之屬皆从可。 |
| 史 | 史 | exact | 史 | compound | 又持中 |  |  | 記事者也。从又持中。中，正也。凡史之屬皆从史。 |
| 右 | 右 | exact | 口 | compound | 口又 |  |  | 助也。从口从又。 |
| 各 | 各 | exact | 口 | compound | 口 |  |  | 異辭也。从口、夊。夊者，有行而止之，不相聽也。 |
| 合 | 合 | exact | 亼 | compound | 亼口 |  |  | 合口也。从亼从口。 |
| 吉 | 吉 | exact | 口 | compound | 士 |  |  | 善也。从士、口。 |
| 同 | 同 | exact | 𠔼 | compound | 𠔼口 |  |  | 合會也。从𠔼从口。 |
| 名 | 名 | exact | 口 | compound | 口夕 |  |  | 自命也。从口从夕。夕者，冥也。冥不相見，故以口自名。 |
| 后 | 后 | exact | 后 | compound | 一 |  |  | 繼體君也。象人之形。施令以告四方，故厂之。从一、口。發號者，君后也。凡后之屬皆从后。 |
| 君 | 君 | exact | 口 | compound | 尹 |  |  | 尊也。从尹。發號，故从口。 |
| 吝 | 吝 | exact | 口 | phonetic-compound | 口 | 文 |  | 恨惜也。从口文聲。易曰：“以往吝。” |
| 否 | 否 | exact | 口 | compound | 口不 |  |  | 不也。从口从不。 |
| 含 | 含 | exact | 口 | phonetic-compound | 口 | 今 |  | 嗛也。从口今聲。 |
| 吾 | 吾 | exact | 口 | phonetic-compound | 口 | 五 |  | 我，自稱也。从口五聲。 |
| 告 | 告 | exact | 告 | compound | 口牛 |  |  | 牛觸人，角箸橫木，所以告人也。从口从牛。易曰：“僮牛之告。”凡告之屬皆从告。 |
| 周 | 周 | exact | 口 | compound | 用 |  |  | 密也。从用、口。 |
| 命 | 命 | exact | 口 | compound | 口令 |  |  | 使也。从口从令。 |
| 和 | 和 | exact | 口 | phonetic-compound | 口 | 禾 |  | 相譍也。从口禾聲。 |
| 咎 | 咎 | exact | 人 | compound | 人各 |  |  | 災也。从人从各。各者，相違也。 |
| 咥 | 咥 | exact | 口 | phonetic-compound | 口 | 至 |  | 大笑也。从口至聲。詩曰：“咥其笑矣。” |
| 咨 | 咨 | exact | 口 | phonetic-compound | 口 | 次 |  | 謀事曰咨。从口次聲。 |
| 咷 | 咷 | exact | 口 | phonetic-compound | 口 | 兆 |  | 楚謂兒泣不止曰噭咷。从口兆聲。 |
| 咸 | 咸 | exact | 口 | compound | 口戌 |  |  | 皆也。悉也。从口从戌。戌，悉也。 |
| 哀 | 哀 | exact | 口 | phonetic-compound | 口 | 衣 |  | 閔也。从口衣聲。 |
| 品 | 品 | exact | 品 | compound | 三口 |  |  | 眾庶也。从三口。凡品之屬皆从品。 |
| 哉 | 哉 | exact | 口 | phonetic-compound | 口 | 𢦔 |  | 言之閒也。从口𢦔聲。 |
| 唯 | 唯 | exact | 口 | phonetic-compound | 口 | 隹 |  | 諾也。从口隹聲。 |
| 商 | 商 | exact | 㕯 | phonetic-compound | 外知内也㕯 | 章 |  | 从外知内也。从㕯，章省聲。 |
| 問 | 問 | exact | 口 | phonetic-compound | 口 | 門 |  | 訊也。从口門聲。 |
| 啞 | 啞 | exact | 口 | phonetic-compound | 口 | 亞 |  | 笑也。从口亞聲。易曰：“笑言啞啞。” |
| 善 | 譱 | old-form | 誩 | compound | 誩羊 |  |  | 吉也。从誩从羊。此與義美同意。 |
| 喙 | 喙 | exact | 口 | phonetic-compound | 口 | 彖 |  | 口也。从口彖聲。 |
| 喜 | 喜 | exact | 喜 | compound | 壴口 |  |  | 樂也。从壴从口。凡喜之屬皆从喜。 |
| 喪 | 喪 | exact | 哭 | phonetic-compound | 哭亾 | 亾 |  | 亾也。从哭从亾。會意。亾亦聲。 |
| 嗃 | 嗃 | exact | 口 | phonetic-compound | 口 | 高 |  | 嗃嗃，嚴酷皃。从口高聲。 |
| 嗇 | 嗇 | exact | 嗇 | compound | 來㐭 |  |  | 愛瀒也。从來从㐭。來者，㐭而藏之。故田夫謂之嗇夫。凡嗇之屬皆从嗇。 |
| 嗑 | 嗑 | exact | 口 | phonetic-compound | 口 | 盍 |  | 多言也。从口盍聲。讀若甲。 |
| 嘉 | 嘉 | exact | 壴 | phonetic-compound | 壴 | 加 |  | 美也。从壴加聲。 |
| 嘗 | 嘗 | exact | 旨 | phonetic-compound | 旨 | 尚 |  | 口味之也。从旨尚聲。 |
| 器 | 器 | exact | 㗊 | pictograph |  |  |  | 皿也。象器之口，犬所以守之。 |
| 噫 | 噫 | exact | 口 | phonetic-compound | 口 | 意 |  | 飽食息也。从口意聲。 |
| 噬 | 噬 | exact | 口 | phonetic-compound | 口 | 筮 |  | 啗也。喙也。从口筮聲。 |
| 嚴 | 嚴 | exact | 吅 | phonetic-compound | 吅 | 𠪚 |  | 教命急也。从吅𠪚聲。 |
| 囊 | 囊 | exact | 㯻 | phonetic-compound | 㯻 | 襄 |  | 橐也。从㯻省，襄省聲。 |
| 四 | 四 | exact | 四 | pictograph |  |  |  | 陰數也。象四分之形。凡四之屬皆从四。 |
| 因 | 因 | exact | 囗 | compound | 囗 |  |  | 就也。从囗、大。 |
| 困 | 困 | exact | 囗 | compound | 木在囗中 |  |  | 故廬也。从木在囗中。 |
| 固 | 固 | exact | 囗 | phonetic-compound | 囗 | 古 |  | 四塞也。从囗古聲。 |
| 國 | 國 | exact | 囗 | compound | 囗或 |  |  | 邦也。从囗从或。 |
| 圍 | 圍 | exact | 囗 | phonetic-compound | 囗 | 韋 |  | 守也。从囗韋聲。 |
| 園 | 園 | exact | 囗 | phonetic-compound | 囗 | 袁 |  | 所以樹果也。从囗袁聲。 |
| 圓 | 圓 | exact | 囗 | phonetic-compound | 囗 | 員 |  | 圜全也。从囗員聲。讀若員。 |
| 圖 | 圖 | exact | 囗 | compound | 囗啚 |  |  | 畫計難也。从囗从啚。啚，難意也。 |
| 圜 | 圜 | exact | 囗 | phonetic-compound | 囗 | 瞏 |  | 天體也。从囗瞏聲。 |
| 土 | 土 | exact | 土 | pictograph |  |  |  | 地之吐生物者也。二象地之下、地之中，物出形也。凡土之屬皆从土。 |
| 在 | 在 | exact | 土 | phonetic-compound | 土 | 才 |  | 存也。从土才聲。 |
| 圭 | 圭 | exact | 土 | compound | 重土 |  |  | 瑞玉也。上圜下方。公執桓圭，九寸；矦執信圭，伯執躬圭，皆七寸；子執穀璧，男執蒲璧，皆五寸。以封諸矦。从重土。楚爵有執圭。 |
| 地 | 地 | exact | 土 | phonetic-compound | 土 | 也 |  | 元气初分，輕清陽爲天，重濁陰爲地。萬物所陳𠛱也。从土也聲。 |
| 均 | 均 | exact | 土 | phonetic-compound | 土勻 | 勻 |  | 平徧也。从土从勻，勻亦聲。 |
| 坎 | 坎 | exact | 土 | phonetic-compound | 土 | 欠 |  | 陷也。从土欠聲。 |
| 坤 | 坤 | exact | 土 | compound | 土申 |  |  | 地也。《易》之卦也。从土从申。土位在申。 |
| 坦 | 坦 | exact | 土 | phonetic-compound | 土 | 旦 |  | 安也。从土旦聲。 |
| 坼 | 坼 | exact | 土 | phonetic-compound | 土 | 㡿 |  | 裂也。《詩》曰：“不𡍩不疈。”从土㡿聲。 |
| 垂 | 垂 | exact | 土 | phonetic-compound | 土 | 𠂹 |  | 遠邊也。从土𠂹聲。 |
| 城 | 城 | exact | 土 | phonetic-compound | 土成 | 成 |  | 以盛民也。从土从成，成亦聲。 |
| 執 | 執 | exact | 㚔 | phonetic-compound | 丮幸 | 幸 |  | 捕罪人也。从丮从幸，幸亦聲。 |
| 基 | 基 | exact | 土 | phonetic-compound | 土 | 其 |  | 牆始也。从土其聲。 |
| 堅 | 堅 | exact | 臤 | compound | 臤土 |  |  | 剛也。从臤从土。 |
| 堯 | 堯 | exact | 垚 | compound | 垚在兀上 |  |  | 高也。从垚在兀上，高遠也。 |
| 報 | 報 | exact | 㚔 | compound | 幸𠬝 |  |  | 當罪人也。从幸从𠬝。𠬝，服罪也。 |
| 塞 | 塞 | exact | 土 | compound | 土𡨄 |  |  | 隔也。从土从𡨄。 |
| 墉 | 墉 | exact | 土 | phonetic-compound | 土 | 庸 |  | 城垣也。从土庸聲。 |
| 士 | 士 | exact | 士 | compound | 一十 |  | 鉏里切 | 事也。數始於一，終於十。从一从十。孔子曰：「推十合一爲士。」凡士之屬皆从士。 |
| 壯 | 壯 | exact | 士 | phonetic-compound | 士 | 爿 | 側亮切 | 大也。从士爿聲。 |
| 夕 | 夕 | exact | 夕 | compound | 月半見 |  |  | 莫也。从月半見。凡夕之屬皆从夕。 |
| 外 | 外 | exact | 夕 | unanalysed |  |  |  | 遠也。卜尚平旦，今夕卜，於事外矣。 |
| 多 | 多 | exact | 多 | compound | 重夕 |  |  | 重也。从重夕。夕者，相繹也，故爲多。重夕爲多，重日爲曡。凡多之屬皆从多。 |
| 夜 | 夜 | exact | 夕 | compound | 夕 |  |  | 舍也。天下休舍也。从夕，亦省聲。 |
| 夤 | 夤 | exact | 夕 | phonetic-compound | 夕 | 寅 |  | 敬惕也。从夕寅聲。《易》曰：“夕惕若夤。” |
| 大 | 大 | exact | 大 | pictograph |  |  |  | 天大，地大，人亦大。故大象人形。古文𠘲也。凡大之屬皆从大。 |
| 天 | 天 | exact | 一 | compound | 一大 |  | 他前切 | 顛也。至高無上。从一大。 |
| 夫 | 夫 | exact | 夫 | compound | 大 |  |  | 丈夫也。从大，一以象簪也。周制以八寸爲尺，十尺爲丈。人長八尺，故曰丈夫。凡夫之屬皆从夫。 |
| 夬 | 夬 | exact | 又 | pictograph |  |  |  | 分決也。从又{{?|叏的上部}}，象決形。 |
| 失 | 失 | exact | 手 | phonetic-compound | 手 | 乙 |  | 縱也。从手乙聲。 |
| 夷 | 夷 | exact | 大 | compound | 大弓 |  |  | 平也。从大从弓。東方之人也。 |
| 奇 | 奇 | exact | 可 | compound | 大可 |  |  | 異也。一曰不耦。从大从可。 |
| 奉 | 奉 | exact | 𠬞 | phonetic-compound | 手廾 | 𡴀 |  | 承也。从手从廾，𡴀聲。 |
| 契 | 契 | exact | 大 | compound | 大㓞 |  |  | 大約也。从大从㓞。《易》曰：“後代聖人易之以書契。” |
| 奔 | 奔 | exact | 夭 | phonetic-compound | 夭 | 賁 |  | 走也。从夭，賁省聲。與走同意，俱从夭。 |
| 奪 | 奪 | exact | 奞 | compound | 又奞 |  |  | 手持隹失之也。从又从奞。 |
| 奮 | 奮 | exact | 奞 | compound | 奞在田上 |  |  | 翬也。从奞在田上。《詩》曰：“不能奮飛。” |
| 女 | 女 | exact | 女 | pictograph |  |  |  | 婦人也。象形。王育說。凡女之屬皆从女。 |
| 好 | 好 | exact | 女 | compound | 女 |  |  | 美也。从女、子。 |
| 如 | 如 | exact | 女 | compound | 隨也女口 |  |  | 从隨也。从女从口。 |
| 妄 | 妄 | exact | 女 | phonetic-compound | 女 | 亡 |  | 亂也。从女亡聲。 |
| 妣 | 妣 | exact | 女 | phonetic-compound | 女 | 比 |  | 殁母也。从女比聲。 |
| 妹 | 妹 | exact | 女 | phonetic-compound | 女 | 未 |  | 女弟也。从女未聲。 |
| 妻 | 妻 | exact | 女 | compound | 女屮又 |  |  | 婦與夫齊者也。从女从屮从又。又，持事，妻職也。 |
| 妾 | 妾 | exact | 䇂 | compound | 䇂女 |  |  | 有辠女子，給事之得接於君者。从䇂从女。《春秋》云：“女爲人妾。”妾，不娉也。 |
| 始 | 始 | exact | 女 | phonetic-compound | 女 | 台 |  | 女之初也。从女台聲。 |
| 姓 | 姓 | exact | 女 | phonetic-compound | 女生 | 生 |  | 人所生也。古之神聖母，感天而生子，故稱天子。从女从生，生亦聲。《春秋傳》曰：“天子因生以賜姓。” |
| 姤 | 姤 | exact | 女 | phonetic-compound | 女 | 后 |  | 偶也。从女后聲。 |
| 威 | 威 | exact | 女 | compound | 女戌 |  |  | 姑也。从女从戌。漢律曰：“婦告威姑。” |
| 娣 | 娣 | exact | 女 | phonetic-compound | 女弟 | 弟 |  | 女弟也。从女从弟，弟亦聲。 |
| 婚 | 婚 | exact | 女 | phonetic-compound | 女昏 | 昏 |  | 婦家也。《禮》：娶婦以昏時，婦人陰也，故曰婚。从女从昏，昏亦聲。 |
| 婦 | 婦 | exact | 女 | compound | 女持帚灑掃也 |  |  | 服也。从女持帚灑掃也。 |
| 媾 | 媾 | exact | 女 | phonetic-compound | 女 | 冓 |  | 重㛰也。从女冓聲。《易》曰：“匪寇，㛰媾。” |
| 嫌 | 嫌 | exact | 女 | phonetic-compound | 女 | 兼 |  | 不平於心也。一曰疑也。从女兼聲。 |
| 子 | 子 | exact | 子 | pictograph |  |  |  | 十一月，陽气動，萬物滋，人以爲偁。象形。凡子之屬皆从子。 |
| 孕 | 孕 | exact | 子 | compound | 子几 |  |  | 褢子也。从子从几。 |
| 字 | 字 | exact | 子 | phonetic-compound | 子在宀下 | 子 |  | 乳也。从子在宀下，子亦聲。 |
| 存 | 存 | exact | 子 | phonetic-compound | 子 | 才 |  | 恤問也。从子才聲。 |
| 孚 | 孚 | exact | 爪 | compound | 爪子 |  |  | 卵孚也。从爪从子。一曰信也。 |
| 孝 | 孝 | exact | 老 | compound | 老子 |  |  | 善事父母者。从老省，从子。子承老也。 |
| 孤 | 孤 | exact | 子 | phonetic-compound | 子 | 瓜 |  | 無父也。从子瓜聲。 |
| 孰 | 𦏧 | old-form | 丮 | phonetic-compound | 丮 | 𦎫 |  | 食飪也。从丮𦎫聲。《易》曰：“孰飪。” |
| 學 | 斆 | old-form | 教 | phonetic-compound | 教冂 | 臼 |  | 覺悟也。从教从冂。冂，尚矇也。臼聲。 |
| 它 | 它 | exact | 它 | compound | 虫而長 |  |  | 虫也。从虫而長，象冤曲垂尾形。上古艸居患它，故相問無它乎。凡它之屬皆从它。 |
| 宅 | 宅 | exact | 宀 | phonetic-compound | 宀 | 乇 |  | 所託也。从宀乇聲。 |
| 宇 | 宇 | exact | 宀 | phonetic-compound | 宀 | 于 |  | 屋邊也。从宀于聲。《易》曰：“上棟下宇。” |
| 守 | 守 | exact | 宀 | compound | 宀寸 |  |  | 守官也。从宀从寸。寺府之事者。从寸。寸，法度也。 |
| 安 | 安 | exact | 宀 | compound | 女在宀下 |  |  | 靜也。从女在宀下。 |
| 宗 | 宗 | exact | 宀 | compound | 宀示 |  |  | 尊祖廟也。从宀从示。 |
| 官 | 官 | exact | 𠂤 | compound | 宀𠂤 |  |  | 史，事君也。从宀从𠂤。𠂤猶眾也。此與師同意。 |
| 定 | 定 | exact | 宀 | compound | 宀正 |  |  | 安也。从宀从正。 |
| 宜 | 宐 | old-form | 宀 | phonetic-compound | 宀之下 | 多 |  | 所安也。从宀之下，一之上，多省聲。 |
| 客 | 客 | exact | 宀 | phonetic-compound | 宀 | 各 |  | 寄也。从宀各聲。 |
| 室 | 室 | exact | 宀 | compound | 宀至 |  |  | 實也。从宀从至。至，所止也。 |
| 宥 | 宥 | exact | 宀 | phonetic-compound | 宀 | 有 |  | 寬也。从宀有聲。 |
| 宮 | 宮 | exact | 宮 | phonetic-compound | 宀 | 躳 |  | 室也。从宀，躳省聲。凡宮之屬皆从宮。 |
| 害 | 害 | exact | 宀 | phonetic-compound | 宀口 | 丯 |  | 傷也。从宀从口。宀、口，言从家起也。丯聲。 |
| 宴 | 宴 | exact | 宀 | phonetic-compound | 宀 | 妟 |  | 安也。从宀妟聲。 |
| 家 | 家 | exact | 宀 | phonetic-compound | 宀 | 豭 |  | 居也。从宀，豭省聲。 |
| 容 | 容 | exact | 宀 | compound | 宀 |  |  | 盛也。从宀、谷。 |
| 密 | 密 | exact | 山 | phonetic-compound | 山 | 宓 |  | 山如堂者。从山宓聲。 |
| 寇 | 寇 | exact | 攴 | compound | 攴完 |  |  | 暴也。从攴从完。 |
| 富 | 富 | exact | 宀 | phonetic-compound | 宀 | 畐 |  | 備也。一曰厚也。从宀畐聲。 |
| 寒 | 寒 | exact | 宀 | compound | 人在宀下 |  |  | 凍也。从人在宀下，以茻薦覆之，下有仌。 |
| 寘 | 寘 | exact | 宀 | phonetic-compound | 宀 | 眞 |  | 置也。从宀眞聲。 |
| 察 | 察 | exact | 宀 | compound | 宀 |  |  | 覆也。从宀、祭。 |
| 寡 | 寡 | exact | 宀 | compound | 宀頒 |  |  | 少也。从宀从頒。頒，分賦也，故爲少。 |
| 實 | 實 | exact | 宀 | compound | 宀貫 |  |  | 富也。从宀从貫。貫，貨貝也。 |
| 寧 | 寧 | exact | 丂 | phonetic-compound | 丂 | 寍 |  | 願詞也。从丂寍聲。 |
| 寬 | 寬 | exact | 宀 | phonetic-compound | 宀 | 萈 |  | 屋寬大也。从宀萈聲。 |
| 寵 | 寵 | exact | 宀 | phonetic-compound | 宀 | 龍 |  | 尊居也。从宀龍聲。 |
| 寶 | 寶 | exact | 宀 | phonetic-compound | 宀王貝 | 缶 |  | 珍也。从宀从王从貝，缶聲。 |
| 寺 | 寺 | exact | 寸 | phonetic-compound | 寸 | 之 |  | 廷也。有法度者也。从寸之聲。 |
| 封 | 封 | exact | 土 | compound | 之土寸 |  |  | 爵諸矦之土也。从之从土从寸，守其制度也。公侯，百里；伯，七十里；子男，五十里。 |
| 將 | 將 | exact | 寸 | phonetic-compound | 寸 | 𤖕 |  | 帥也。从寸，𤖕省聲。 |
| 專 | 專 | exact | 寸 | phonetic-compound | 寸 | 叀 |  | 六寸簿也。从寸叀聲。一曰專，紡專。 |
| 尊 | 𢍜 | old-form | 酋 | compound | 酋 |  |  | 酒器也。从酋，廾以奉之。《周禮》六尊：犧尊、象尊、著尊、壺尊、太尊、山尊，以待祭祀賓客之禮。 |
| 對 | 對 | exact | 丵 | compound | 丵口寸 |  |  | 譍無方也。从丵从口从寸。 |
| 小 | 小 | exact | 小 | compound | 八 |  |  | 物之微也。从八，丨見而分之。凡小之屬皆从小。 |
| 少 | 少 | exact | 小 | phonetic-compound | 小 | 丿 |  | 不多也。从小丿聲。 |
| 尚 | 尚 | exact | 八 | phonetic-compound | 八 | 向 |  | 曾也。庶幾也。从八向聲。 |
| 就 | 就 | exact | 京 | compound | 京尤 |  |  | 就，高也。从京从尤。尤，異於凡也。 |
| 尸 | 尸 | exact | -{尸}- | pictograph |  |  |  | 陳也。象臥之形。凡尸之屬皆从尸。 |
| 尺 | 尺 | exact | 尺 | compound | 尸乙 |  |  | 十寸也。人手卻十分動脈爲寸口。十寸爲尺。尺，所以指尺䂓榘事也。从尸从乙。乙，所識也。周制，寸、尺、咫、尋、常、仞諸度量，皆以人之體爲法。凡尺之屬皆从尺。 |
| 尾 | 尾 | exact | 尾 | compound | 到毛在尸後 |  |  | 微也。从到毛在尸後。古人或飾系尾，西南夷亦然。凡尾之屬皆从尾。今隸變作尾。 |
| 居 | 居 | exact | -{尸}- | compound | 尸古者 |  |  | 蹲也。从尸古者，居从古。 |
| 屈 | 屈 | exact | 尾 | phonetic-compound | 尾 | 出 |  | 無尾也。从尾出聲。 |
| 屋 | 屋 | exact | -{尸}- | compound | 尸至 |  |  | 居也。从尸。尸，所主也。一曰尸，象屋形。从至。至，所至止。室、屋皆从至。 |
| 屢 | 屢 | exact | -{尸}- | compound | 尸 |  |  | 數也。案：今之婁字本是屢空字，此字後人所加。从尸，未詳。 |
| 履 | 履 | exact | 履 | compound | 尸彳夊 |  |  | 足所依也。从尸从彳从夊，舟象履形。一曰尸聲。凡履之屬皆从履。 |
| 屨 | 屨 | exact | 履 | phonetic-compound | 履 | 婁 |  | 履也。从履省，婁聲。一曰鞮也。 |
| 屬 | 屬 | exact | 尾 | phonetic-compound | 尾 | 蜀 |  | 連也。从尾蜀聲。 |
| 屯 | 屯 | exact | 屮 | compound | 屮貫一 |  | 陟倫切 | 難也。象艸木之初生。屯然而難。从屮貫一。一，地也。尾曲。《易》曰：「屯，剛柔始交而難生。」 |
| 山 | 山 | exact | 山 | pictograph |  |  |  | 宣也。宣气𢿱，生萬物，有石而高。象形。凡山之屬皆从山。 |
| 崇 | 崇 | exact | 山 | phonetic-compound | 山 | 宗 |  | 嵬高也。从山宗聲。 |
| 川 | 川 | exact | 川 | unanalysed |  |  |  | 貫穿通流水也。《虞書》曰：“濬𡿨巜，距川。”言深𡿨巜之水會爲川也。凡川之屬皆从川。 |
| 巢 | 巢 | exact | 巢 | compound | 木 |  |  | 鳥在木上曰巢，在穴曰窠。从木，象形。凡巢之屬皆从巢。 |
| 工 | 工 | exact | 工 | pictograph |  |  |  | 巧飾也。象人有規榘也。與巫同意。凡工之屬皆从工。 |
| 左 | 左 | exact | 左 | compound | 𠂇 |  |  | 手相左助也。从𠂇、工。凡左之屬皆从左。 |
| 巫 | 巫 | exact | 巫 | pictograph |  |  |  | 祝也。女能事無形，以舞降神者也。象人兩褎舞形。與工同意。古者巫咸初作巫。凡巫之屬皆从巫。 |
| 已 | 巳 | orthographic | 巳 | pictograph |  |  |  | 巳也。四月，陽气巳出，陰气巳藏，萬物見，成文章，故巳爲蛇，象形。凡巳之屬皆从巳。 |
| 巳 | 巳 | exact | 巳 | pictograph |  |  |  | 巳也。四月，陽气巳出，陰气巳藏，萬物見，成文章，故巳爲蛇，象形。凡巳之屬皆从巳。 |
| 巽 | 巽 | exact | 丌 | phonetic-compound | 丌 | 𠨎 |  | 具也。从丌𠨎聲。 |
| 市 | 市 | exact | 冂 | phonetic-compound | 冂乁 | 之 |  | 買賣所之也。市有垣，从冂从乁，乁，古文及，象物相及也。之省聲。 |
| 布 | 布 | exact | 巾 | phonetic-compound | 巾 | 父 |  | 枲織也。从巾父聲。 |
| 帛 | 帛 | exact | 帛 | phonetic-compound | 巾 | 白 |  | 繒也。从巾白聲。凡帛之屬皆从帛。 |
| 帝 | 帝 | exact | 丄 | phonetic-compound | 丄 | 朿 | 都計切 | 諦也，王天下之號也。从丄，朿聲。 |
| 帥 | 帥 | exact | 巾 | compound | 巾 |  |  | 佩巾也。从巾、𠂤。 |
| 師 | 師 | exact | 帀 | compound | 帀𠂤 |  |  | 二千五百人爲師。从帀从𠂤。𠂤，四帀，眾意也。 |
| 帶 | 帶 | exact | 巾 | compound | 巾 |  |  | 紳也。男子鞶帶，婦人帶絲。象繫佩之形。佩必有巾，从巾。 |
| 常 | 常 | exact | 巾 | phonetic-compound | 巾 | 尚 |  | 下帬也。从巾尚聲。 |
| 幕 | 幕 | exact | 巾 | phonetic-compound | 巾 | 莫 |  | 帷在上曰幕，覆食案亦曰幕。从巾莫聲。 |
| 干 | 干 | exact | -{干}- | compound | 反入一 |  |  | 犯也。从反入，从一。凡干之屬皆从干。 |
| 平 | 平 | exact | 亏 | compound | 亏八 |  |  | 語平舒也。从亏从八。八，分也。爰禮說。 |
| 年 | 秊 | old-form | 禾 | phonetic-compound | 禾 | 千 |  | 穀孰也。从禾千聲。《春秋傳》曰：“大有秊。” |
| 幽 | 幽 | exact | 𢆶 | phonetic-compound | 山中𢆶 | 𢆶 |  | 隱也。从山中𢆶，𢆶亦聲。 |
| 幾 | 幾 | exact | 𢆶 | compound | 𢆶戍 |  |  | 微也。殆也。从𢆶从戍。戍，兵守也。𢆶而兵守者，危也。 |
| 序 | 序 | exact | 广 | phonetic-compound | 广 | 予 |  | 東西牆也。从广予聲。 |
| 庚 | 庚 | exact | 庚 | pictograph |  |  |  | 位西方，象秋時萬物庚庚有實也。庚承己，象人𪗇。凡庚之屬皆从庚。 |
| 度 | 度 | exact | 又 | phonetic-compound | 又 | 庶 |  | 法制也。从又，庶省聲。 |
| 庭 | 庭 | exact | 广 | phonetic-compound | 广 | 廷 |  | 宮中也。从广廷聲。 |
| 庶 | 庶 | exact | 广 | compound | 广 |  |  | 屋下眾也。从广、炗。炗，古文光字。 |
| 庸 | 庸 | exact | 用 | compound | 用庚 |  |  | 用也。从用从庚。庚，更事也。《易》曰：“先庚三日。” |
| 廟 | 廟 | exact | 广 | phonetic-compound | 广 | 朝 |  | 尊先祖皃也。从广朝聲。 |
| 廢 | 廢 | exact | 广 | phonetic-compound | 广 | 發 |  | 屋頓也。从广發聲。 |
| 廣 | 廣 | exact | 广 | phonetic-compound | 广 | 黃 |  | 殿之大屋也。从广黃聲。 |
| 廬 | 廬 | exact | 广 | phonetic-compound | 广 | 盧 |  | 寄也。秋冬去，春夏居。从广盧聲。 |
| 建 | 建 | exact | 廴 | compound | 聿廴 |  |  | 立朝律也。从聿从廴。 |
| 弋 | 弋 | exact | 𠂆 | compound | 𠂆 |  |  | 橜也。象折木衺銳著形。从𠂆，象物挂之也。 |
| 弓 | 弓 | exact | 弓 | pictograph |  |  |  | 以近窮遠。象形。古者揮作弓。《周禮》六弓：王弓、弧弓以射甲革甚質；夾弓、庾弓以射干矦鳥獸；唐弓、大弓以授學射者。凡弓之屬皆从弓。 |
| 引 | 引 | exact | 弓 | compound | 弓 |  |  | 開弓也。从弓、丨。 |
| 弗 | 弗 | exact | 丿 | compound | 丿乀韋 |  |  | 撟也。从丿从乀，从韋省。 |
| 弘 | 弘 | exact | 弓 | phonetic-compound | 弓 | 厶 |  | 弓聲也。从弓厶聲。厶，古文肱字。 |
| 弟 | 弟 | exact | 弟 | compound | 古字之象 |  |  | 韋束之次弟也。从古字之象。凡弟之屬皆从弟。 |
| 弦 | 弦 | exact | 弦 | compound | 弓 |  |  | 弓弦也。从弓，象絲軫之形。凡弦之屬皆从弦。 |
| 弧 | 弧 | exact | 弓 | phonetic-compound | 弓 | 瓜 |  | 木弓也。从弓瓜聲。一曰往體寡，來體多曰弧。 |
| 弱 | 弱 | exact | 彡 | pictograph |  |  |  | 橈也。上象橈曲，彡象毛氂橈弱也。弱物并，故从二𢎥。 |
| 張 | 張 | exact | 弓 | phonetic-compound | 弓 | 長 |  | 施弓弦也。从弓長聲。 |
| 強 | 強 | exact | 虫 | phonetic-compound | 虫 | 弘 |  | 蚚也。从虫弘聲。 |
| 彌 | 镾 | old-form | 長 | phonetic-compound | 長 | 爾 |  | 久長也。从長爾聲。 |
| 彖 | 彖 | exact | 彑 | compound | 彑豕 |  |  | 豕走也。从彑，从豕省。 |
| 形 | 形 | exact | 彡 | phonetic-compound | 彡 | 幵 |  | 象形也。从彡幵聲。 |
| 彭 | 彭 | exact | 壴 | phonetic-compound | 壴 | 彡 |  | 鼓聲也。从壴彡聲。 |
| 彰 | 彰 | exact | 彡 | phonetic-compound | 彡章 | 章 |  | 文彰也。从彡从章，章亦聲。 |
| 役 | 役 | exact | 殳 | compound | 殳彳 |  |  | 戍邊也。从殳从彳。 |
| 彼 | 彼 | exact | 彳 | phonetic-compound | 彳 | 皮 |  | 往，有所加也。从彳皮聲。 |
| 往 | 往 | exact | 彳 | phonetic-compound | 彳 | 㞷 |  | 之也。从彳㞷聲。 |
| 待 | 待 | exact | 彳 | phonetic-compound | 彳 | 寺 |  | 竢也。从彳寺聲。 |
| 律 | 律 | exact | 彳 | phonetic-compound | 彳 | 聿 |  | 均布也。从彳聿聲。 |
| 後 | 後 | exact | 彳 | compound | 彳 |  |  | 遲也。从彳、幺、夊者，後也。 |
| 徐 | 徐 | exact | 彳 | phonetic-compound | 彳 | 余 |  | 安行也。从彳余聲。 |
| 徑 | 徑 | exact | 彳 | phonetic-compound | 彳 | 巠 |  | 步道也。从彳巠聲。 |
| 得 | 得 | exact | 彳 | phonetic-compound | 彳 | 㝵 |  | 行有所得也。从彳㝵聲。 |
| 從 | 從 | exact | 从 | compound | 辵 |  |  | 隨行也。从辵、从，从亦聲。 |
| 御 | 御 | exact | 彳 | compound | 彳卸 |  |  | 使馬也。从彳从卸。 |
| 復 | 復 | exact | 彳 | phonetic-compound | 彳 | 复 |  | 往來也。从彳复聲。 |
| 微 | 微 | exact | 彳 | phonetic-compound | 彳 | 𢼸 |  | 隱行也。从彳𢼸聲。春秋傳曰：“白公其徒微之。” |
| 德 | 德 | exact | 彳 | phonetic-compound | 彳 | 㥁 |  | 升也。从彳㥁聲。 |
| 徽 | 徽 | exact | 糸 | phonetic-compound | 糸 | 微 |  | 衺幅也。一曰三糾繩也。从糸，微省聲。 |
| 心 | 心 | exact | 心 | pictograph |  |  |  | 人心，土藏，在身之中。象形。博士說以爲火藏。凡心之屬皆从心。 |
| 必 | 必 | exact | 八 | phonetic-compound | 八 | 弋 |  | 分極也。从八、弋，弋亦聲。 |
| 忌 | 忌 | exact | 心 | phonetic-compound | 心 | 己 |  | 憎惡也。从心己聲。 |
| 忒 | 忒 | exact | 心 | phonetic-compound | 心 | 弋 |  | 更也。从心弋聲。 |
| 志 | 志 | exact | 心 | phonetic-compound | 心 | 之 |  | 意也。从心之聲。 |
| 忘 | 忘 | exact | 心 | phonetic-compound | 心亡 | 亡 |  | 不識也。从心从亡，亡亦聲。 |
| 忠 | 忠 | exact | 心 | phonetic-compound | 心 | 中 |  | 敬也。从心中聲。 |
| 快 | 快 | exact | 心 | phonetic-compound | 心 | 夬 |  | 喜也。从心夬聲。 |
| 忿 | 忿 | exact | 心 | phonetic-compound | 心 | 分 |  | 悁也。从心分聲。 |
| 思 | 思 | exact | 思 | phonetic-compound | 心 | 囟 |  | 容也。从心囟聲。凡思之屬皆从思。 |
| 怠 | 怠 | exact | 心 | phonetic-compound | 心 | 台 |  | 慢也。从心台聲。 |
| 性 | 性 | exact | 心 | phonetic-compound | 心 | 生 |  | 人之陽气性善者也。从心生聲。 |
| 怨 | 怨 | exact | 心 | phonetic-compound | 心 | 夗 |  | 恚也。从心夗聲。 |
| 恆 | 恆 | exact | 二 | compound | 心舟 |  |  | 常也。从心从舟，在二之閒上下。心以舟施，恆也。 |
| 恐 | 恐 | exact | 心 | phonetic-compound | 心 | 𢀜 |  | 懼也。从心𢀜聲。 |
| 恤 | 恤 | exact | 心 | phonetic-compound | 心 | 血 |  | 憂也。收也。从心血聲。 |
| 恥 | 恥 | exact | 心 | phonetic-compound | 心 | 耳 |  | 辱也。从心耳聲。 |
| 恭 | 恭 | exact | 心 | phonetic-compound | 心 | 共 |  | 肅也。从心共聲。 |
| 息 | 息 | exact | 心 | phonetic-compound | 心自 | 自 |  | 喘也。从心从自，自亦聲。 |
| 悉 | 悉 | exact | 釆 | compound | 心釆 |  |  | 詳盡也。从心从釆。 |
| 悔 | 悔 | exact | 心 | phonetic-compound | 心 | 𣫭 |  | 悔恨也。从心𣫭聲。 |
| 患 | 患 | exact | 心 | phonetic-compound | 心上貫吅 | 吅 |  | 憂也。从心上貫吅，吅亦聲。 |
| 悶 | 悶 | exact | 心 | phonetic-compound | 心 | 門 |  | 懣也。从心門聲。 |
| 情 | 情 | exact | 心 | phonetic-compound | 心 | 青 |  | 人之陰气有欲者。从心青聲。 |
| 惕 | 惕 | exact | 心 | phonetic-compound | 心 | 易 |  | 敬也。从心易聲。 |
| 惟 | 惟 | exact | 心 | phonetic-compound | 心 | 隹 |  | 凡思也。从心隹聲。 |
| 惠 | 惠 | exact | 叀 | compound | 心叀 |  |  | 仁也。从心从叀。 |
| 惡 | 惡 | exact | 心 | phonetic-compound | 心 | 亞 |  | 過也。从心亞聲。 |
| 惻 | 惻 | exact | 心 | phonetic-compound | 心 | 則 |  | 痛也。从心則聲。 |
| 愁 | 愁 | exact | 心 | phonetic-compound | 心 | 秋 |  | 憂也。从心秋聲。 |
| 愆 | 愆 | exact | 心 | phonetic-compound | 心 | 衍 |  | 過也。从心衍聲。 |
| 意 | 意 | exact | 心 | compound | 心察言而知意也音 |  |  | 志也。从心察言而知意也。从心从音。 |
| 愛 | 愛 | exact | 夊 | phonetic-compound | 夊 | 㤅 |  | 行皃。从夊㤅聲。 |
| 感 | 感 | exact | 心 | phonetic-compound | 心 | 咸 |  | 動人心也。从心咸聲。 |
| 愿 | 愿 | exact | 心 | phonetic-compound | 心 | 原 |  | 謹也。从心原聲。 |
| 慍 | 慍 | exact | 心 | phonetic-compound | 心 | 𥁕 |  | 怒也。从心𥁕聲。 |
| 慎 | 愼 | orthographic | 心 | phonetic-compound | 心 | 眞 |  | 謹也。从心眞聲。 |
| 慢 | 慢 | exact | 心 | phonetic-compound | 心 | 曼 |  | 惰也。从心曼聲。一曰慢，不畏也。 |
| 慮 | 慮 | exact | 思 | phonetic-compound | 思 | 虍 |  | 謀思也。从思虍聲。 |
| 慶 | 慶 | exact | 心 | compound | 心夂 |  |  | 行賀人也。从心从夂。吉禮以鹿皮爲贄，故从鹿省。 |
| 憂 | 憂 | exact | 夊 | phonetic-compound | 夊 | 𢚧 |  | 和之行也。从夊𢚧聲。《詩》曰：“布政憂憂。” |
| 憧 | 憧 | exact | 心 | phonetic-compound | 心 | 童 |  | 意不定也。从心童聲。 |
| 應 | 應 | exact | 心 | phonetic-compound | 心 | 𤸰 |  | 當也。从心𤸰聲。 |
| 懲 | 懲 | exact | 心 | phonetic-compound | 心 | 徵 |  | 㣻也。从心徵聲。 |
| 懷 | 懷 | exact | 心 | phonetic-compound | 心 | 褱 |  | 念思也。从心褱聲。 |
| 懼 | 懼 | exact | 心 | phonetic-compound | 心 | 瞿 |  | 恐也。从心瞿聲。 |
| 懿 | 懿 | exact | 壹 | phonetic-compound | 壹 | 恣 |  | 專久而美也。从壹，从恣省聲。 |
| 戈 | 戈 | exact | 戈 | compound | 弋 |  |  | 平頭𢧢也。从弋，一橫之。象形。凡戈之屬皆从戈。 |
| 戎 | 𢦦 | old-form | 戈 | compound | 戈甲 |  |  | 兵也。从戈从甲。 |
| 成 | 成 | exact | 戊 | phonetic-compound | 戊 | 丁 |  | 就也。从戊丁聲。 |
| 我 | 我 | exact | 我 | compound | 戈𠄒 |  |  | 施身自謂也。或說我，頃頓也。从戈从𠄒。𠄒，或說古垂字。一曰古殺字。凡我之屬皆从我。 |
| 戒 | 戒 | exact | 𠬞 | compound | 廾持戈 |  |  | 警也。从廾持戈，以戒不虞。 |
| 戔 | 戔 | exact | 戈 | compound | 二戈 |  |  | 賊也。从二戈。《周書》曰：“戔戔巧言。” |
| 戕 | 戕 | exact | 戈 | phonetic-compound | 戈 | 爿 |  | 搶也。他國臣來弑君曰戕。从戈爿聲。 |
| 或 | 或 | exact | 戈 | compound | 囗戈 |  |  | 邦也。从囗从戈，以守一。一，地也。 |
| 戚 | 戚 | exact | 戉 | phonetic-compound | 戉 | 尗 |  | 戉也。从戉尗聲。 |
| 戰 | 戰 | exact | 戈 | phonetic-compound | 戈 | 單 |  | 鬬也。从戈單聲。 |
| 戶 | 戶 | exact | 戶 | pictograph |  |  |  | 護也。半門曰戶。象形。凡戶之屬皆从戶。 |
| 所 | 所 | exact | 斤 | phonetic-compound | 斤 | 戶 |  | 伐木聲也。从斤戶聲。《詩》曰：“伐木所所。” |
| 手 | 手 | exact | 手 | pictograph |  |  |  | 拳也。象形。凡手之屬皆从手。 |
| 才 | 才 | exact | 才 | compound | 丨上貫一 |  |  | 艸木之初也。从丨上貫一，將生枝葉。一，地也。凡才之屬皆从才。 |
| 扐 | 扐 | exact | 手 | phonetic-compound | 手 | 力 |  | 《易》筮，再扐而後卦。从手力聲。 |
| 承 | 承 | exact | 手 | compound | 手卪𠬞 |  |  | 奉也。受也。从手从卪从𠬞。 |
| 拂 | 拂 | exact | 手 | phonetic-compound | 手 | 弗 |  | 過擊也。从手弗聲。 |
| 拇 | 拇 | exact | 手 | phonetic-compound | 手 | 母 |  | 將指也。从手母聲。 |
| 拔 | 拔 | exact | 手 | phonetic-compound | 手 | 犮 |  | 擢也。从手犮聲。 |
| 拘 | 拘 | exact | 句 | phonetic-compound | 句手 | 句 |  | 止也。从句从手，句亦聲。 |
| 招 | 招 | exact | 手 | compound | 手 |  |  | 手呼也。从手、召。 |
| 括 | 括 | exact | 手 | phonetic-compound | 手 | 𠯑 |  | 絜也。从手𠯑聲。 |
| 指 | 指 | exact | 手 | phonetic-compound | 手 | 旨 |  | 手指也。从手旨聲。 |
| 振 | 振 | exact | 手 | phonetic-compound | 手 | 辰 |  | 舉救也。从手辰聲。一曰奮也。 |
| 掇 | 掇 | exact | 手 | phonetic-compound | 手 | 叕 |  | 拾取也。从手叕聲。 |
| 掘 | 掘 | exact | 手 | phonetic-compound | 手 | 屈 |  | 搰也。从手屈聲。 |
| 探 | 探 | exact | 手 | phonetic-compound | 手 | 罙 |  | 遠取之也。从手罙聲。 |
| 接 | 接 | exact | 手 | phonetic-compound | 手 | 妾 |  | 交也。从手妾聲。 |
| 推 | 推 | exact | 手 | phonetic-compound | 手 | 隹 |  | 排也。从手隹聲。 |
| 掩 | 掩 | exact | 手 | phonetic-compound | 手 | 奄 |  | 斂也。小上曰掩。从手奄聲。 |
| 揆 | 揆 | exact | 手 | phonetic-compound | 手 | 癸 |  | 葵也。从手癸聲。 |
| 揚 | 揚 | exact | 手 | phonetic-compound | 手 | 昜 |  | 飛舉也。从手昜聲。 |
| 揜 | 揜 | exact | 手 | phonetic-compound | 手 | 弇 |  | 自關以東謂取曰揜。一曰覆也。从手弇聲。 |
| 握 | 握 | exact | 手 | phonetic-compound | 手 | 屋 |  | 搤持也。从手屋聲。 |
| 揮 | 揮 | exact | 手 | phonetic-compound | 手 | 軍 |  | 奮也。从手軍聲。 |
| 揲 | 揲 | exact | 手 | phonetic-compound | 手 | 枼 |  | 閱持也。从手枼聲。 |
| 損 | 損 | exact | 手 | phonetic-compound | 手 | 員 |  | 減也。从手員聲。 |
| 摧 | 摧 | exact | 手 | phonetic-compound | 手 | 崔 |  | 擠也。从手崔聲。一曰挏也，一曰折也。 |
| 摩 | 摩 | exact | 手 | phonetic-compound | 手 | 麻 |  | 研也。从手麻聲。 |
| 撝 | 撝 | exact | 手 | phonetic-compound | 手 | 爲 |  | 裂也。从手爲聲。一曰手指也。 |
| 擊 | 擊 | exact | 手 | phonetic-compound | 手 | 毄 |  | 攴也。从手毄聲。 |
| 據 | 據 | exact | 手 | phonetic-compound | 手 | 豦 |  | 杖持也。从手豦聲。 |
| 擬 | 擬 | exact | 手 | phonetic-compound | 手 | 疑 |  | 度也。从手疑聲。 |
| 攣 | 攣 | exact | 手 | phonetic-compound | 手 | 䜌 |  | 係也。从手䜌聲。 |
| 支 | 支 | exact | 支 | compound | 手持半竹 |  |  | 去竹之枝也。从手持半竹。凡支之屬皆从支。 |
| 收 | 收 | exact | 攴 | phonetic-compound | 攴 | 丩 |  | 捕也。从攴丩聲。 |
| 攸 | 攸 | exact | 攴 | compound | 攴人 |  |  | 行水也。从攴从人，水省。 |
| 改 | 改 | exact | 攴 | compound | 攴 |  |  | 更也。从攴、己。李陽冰曰：“已有過，攴之卽改。” |
| 攻 | 攻 | exact | 攴 | phonetic-compound | 攴 | 工 |  | 擊也。从攴工聲。 |
| 政 | 政 | exact | 攴 | phonetic-compound | 攴正 | 正 |  | 正也。从攴从正，正亦聲。 |
| 故 | 故 | exact | 攴 | phonetic-compound | 攴 | 古 |  | 使爲之也。从攴古聲。 |
| 效 | 效 | exact | 攴 | phonetic-compound | 攴 | 交 |  | 象也。从攴交聲。 |
| 敕 | 敕 | exact | 攴 | phonetic-compound | 攴 | 束 |  | 誡也。臿地曰敕。从攴束聲。 |
| 敗 | 敗 | exact | 攴 | compound | 攴 |  |  | 毀也。从攴、貝。敗、賊皆从貝，會意。 |
| 教 | 教 | exact | 教 | compound | 攴孝 |  |  | 上所施下所效也。从攴从孝。凡教之屬皆从教。 |
| 敝 | 敝 | exact | 㡀 | phonetic-compound | 攴㡀 | 㡀 |  | 帗也。一曰敗衣。从攴从㡀，㡀亦聲。 |
| 敦 | 敦 | exact | 攴 | phonetic-compound | 攴 | 𦎫 |  | 怒也。詆也。一曰誰何也。从攴𦎫聲。 |
| 敬 | 敬 | exact | 茍 | compound | 攴 |  |  | 肅也。从攴、茍。 |
| 敵 | 敵 | exact | 攴 | phonetic-compound | 攴 | 啻 |  | 仇也。从攴啻聲。 |
| 數 | 數 | exact | 攴 | phonetic-compound | 攴 | 婁 |  | 計也。从攴婁聲。 |
| 文 | 文 | exact | 文 | pictograph |  |  |  | 錯畫也。象交文。凡文之屬皆从文。 |
| 斗 | 斗 | exact | 斗 | pictograph |  |  |  | 十升也。象形，有柄。凡斗之屬皆从斗。 |
| 斧 | 斧 | exact | 斤 | phonetic-compound | 斤 | 父 |  | 斫也。从斤父聲。 |
| 斯 | 斯 | exact | 斤 | phonetic-compound | 斤 | 其 |  | 析也。从斤其聲。《詩》曰：“斧以斯之。” |
| 新 | 新 | exact | 斤 | phonetic-compound | 斤 | 新 |  | 取木也。从斤新聲。 |
| 斲 | 斲 | exact | 斤 | compound | 斤 |  |  | 斫也。从斤、𠁁。 |
| 方 | 方 | exact | 方 | pictograph |  |  |  | 併船也。象兩舟省、緫頭形。凡方之屬皆从方。 |
| 施 | 施 | exact | 㫃 | phonetic-compound | 㫃 | 也 |  | 旗皃。从㫃也聲。亝欒施字子旗，知施者旗也。 |
| 旁 | 旁 | exact | 丄 | phonetic-compound | 𠄞 | 方 | 步光切 | 溥也。从𠄞，闕，方聲。 |
| 旅 | 旅 | exact | 㫃 | compound | 㫃 |  |  | 軍之五百人爲旅。从㫃从从。从，俱也。 |
| 旋 | 旋 | exact | 㫃 | compound | 㫃疋 |  |  | 周旋，旌旗之指麾也。从㫃从疋。疋，足也。 |
| 族 | 族 | exact | 㫃 | compound | 㫃矢 |  |  | 矢鋒也。束之族族也。从㫃从矢。 |
| 既 | 旣 | old-form | 皀 | phonetic-compound | 皀 | 旡 |  | 小食也。从皀旡聲。《論語》曰：“不使勝食旣。” |
| 日 | 日 | exact | 日 | compound | 囗一 |  |  | 實也。太陽之精不虧。从囗一。象形。凡日之屬皆从日。 |
| 旨 | 旨 | exact | 旨 | phonetic-compound | 甘 | 匕 |  | 美也。从甘匕聲。凡旨之屬皆从旨。 |
| 早 | 早 | exact | 日 | compound | 日在甲上 |  |  | 晨也。从日在甲上。 |
| 旬 | 旬 | exact | 勹 | compound | 勹 |  |  | 徧也。十日爲旬。从勹、日。 |
| 昃 | 昃 | exact | 日 | phonetic-compound | 日 | 仄 |  | 日在西方時。側也。从日仄聲。《易》曰：“日𣅛之離。” |
| 明 | 朙 | old-form | 朙 | compound | 月囧 |  |  | 照也。从月从囧。凡朙之屬皆从朙。 |
| 易 | 易 | exact | 易 | pictograph |  |  |  | 蜥易，蝘蜓，守宮也。象形。《祕書》說：日月爲易，象陰陽也。一曰从勿。凡易之屬皆从易。 |
| 昔 | 昔 | exact | 日 | compound | 殘肉 |  |  | 乾肉也。从殘肉，日以晞之。與俎同意。 |
| 昧 | 昧 | exact | 日 | phonetic-compound | 日 | 未 |  | 爽，旦明也。从日未聲。一曰闇也。 |
| 昭 | 昭 | exact | 日 | phonetic-compound | 日 | 召 |  | 日明也。从日召聲。 |
| 是 | 是 | exact | 是 | compound | 日 |  |  | 直也。从日、正。凡是之屬皆从是。 |
| 時 | 時 | exact | 日 | phonetic-compound | 日 | 寺 |  | 四時也。从日寺聲。 |
| 晉 | 晉 | exact | 日 | compound | 日臸 |  |  | 進也。日出萬物進。从日从臸。《易》曰：“明出地上，㬜。” |
| 晝 | 晝 | exact | 畫 | compound | 畫日 |  |  | 日之出入，與夜爲界。从畫省，从日。 |
| 晦 | 晦 | exact | 日 | phonetic-compound | 日 | 每 |  | 月盡也。从日每聲。 |
| 普 | 普 | exact | 日 | compound | 日並 |  |  | 日無色也。从日从並。 |
| 暉 | 暉 | exact | 日 | phonetic-compound | 日 | 軍 |  | 光也。从日軍聲。 |
| 暑 | 暑 | exact | 日 | phonetic-compound | 日 | 者 |  | 熱也。从日者聲。 |
| 曰 | 曰 | exact | 曰 | phonetic-compound | 口 | 乙 |  | 詞也。从口乙聲。亦象口气出也。凡曰之屬皆从曰。 |
| 曲 | 曲 | exact | 曲 | pictograph |  |  |  | 象器曲受物之形。或說曲，蠶薄也。凡曲之屬皆从曲。 |
| 曳 | 曳 | exact | 申 | phonetic-compound | 申 | 丿 |  | 臾曳也。从申丿聲。 |
| 曷 | 曷 | exact | 曰 | phonetic-compound | 曰 | 匃 |  | 何也。从曰匃聲。 |
| 書 | 書 | exact | 聿 | phonetic-compound | 聿 | 者 |  | 著也。从聿者聲。 |
| 會 | 會 | exact | 會 | compound | 亼曾 |  |  | 合也。从亼，从曾省。曾，益也。凡會之屬皆从會。 |
| 月 | 月 | exact | 月 | pictograph |  |  |  | 闕也。大陰之精。象形。凡月之屬皆从月。 |
| 有 | 有 | exact | 有 | phonetic-compound | 月 | 又 |  | 不宜有也。《春秋傳》曰：“日月有食之。”从月又聲。凡有之屬皆从有。 |
| 服 | 服 | exact | 舟 | phonetic-compound | 舟 | 𠬝 |  | 用也。一曰車右騑，所以舟旋。从舟𠬝聲。 |
| 望 | 望 | exact | 亡 | phonetic-compound | 亡 | 朢 |  | 出亡在外，望其還也。从亡，朢省聲。 |
| 期 | 期 | exact | 月 | phonetic-compound | 月 | 其 |  | 會也。从月其聲。 |
| 木 | 木 | exact | 木 | compound | 屮 |  |  | 冒也。冒地而生。東方之行。从屮，下象其根。凡木之屬皆从木。 |
| 未 | 未 | exact | 未 | pictograph |  |  |  | 味也。六月，滋味也。五行，木老於未。象木重枝葉也。凡未之屬皆从未。 |
| 末 | 末 | exact | 木 | compound | 木 |  |  | 木上曰末。从木，一在其上。 |
| 本 | 本 | exact | 木 | compound | 木 |  |  | 木下曰本。从木，一在其下。 |
| 朱 | 朱 | exact | 木 | compound | 木 |  |  | 赤心木。松柏屬。从木，一在其中。 |
| 机 | 机 | exact | 木 | phonetic-compound | 木 | 几 |  | 木也。从木几聲。 |
| 材 | 材 | exact | 木 | phonetic-compound | 木 | 才 |  | 木梃也。从木才聲。 |
| 杞 | 杞 | exact | 木 | phonetic-compound | 木 | 己 |  | 枸杞也。从木己聲。 |
| 束 | 束 | exact | 束 | compound | 囗 |  |  | 縛也。从囗、木。凡束之屬皆从束。 |
| 東 | 東 | exact | 東 | compound | 木日在中 |  |  | 動也。从木。官溥說：从日在木中。凡東之屬皆从東。 |
| 杵 | 杵 | exact | 木 | phonetic-compound | 木 | 午 |  | 舂杵也。从木午聲。 |
| 枕 | 枕 | exact | 木 | phonetic-compound | 木 | 冘 |  | 臥所薦首者。从木冘聲。 |
| 林 | 林 | exact | 林 | compound | 二木 |  |  | 平土有叢木曰林。从二木。凡林之屬皆从林。 |
| 果 | 果 | exact | 木 | compound | 木 |  |  | 木實也。从木，象果形在木之上。 |
| 枝 | 枝 | exact | 木 | phonetic-compound | 木 | 支 |  | 木别生條也。从木支聲。 |
| 枯 | 枯 | exact | 木 | phonetic-compound | 木 | 古 |  | 槀也。从木古聲。《夏書》曰：“唯箘輅枯。”木名也。 |
| 柄 | 柄 | exact | 木 | phonetic-compound | 木 | 丙 |  | 柯也。从木丙聲。 |
| 柅 | 柅 | exact | 木 | phonetic-compound | 木 | 尼 |  | 木也。實如棃。从木尼聲。 |
| 柔 | 柔 | exact | 木 | phonetic-compound | 木 | 矛 |  | 木曲直也。从木矛聲。 |
| 柝 | 柝 | exact | 木 | phonetic-compound | 木 | 㡿 |  | 判也。从木㡿聲。《易》曰：“重門擊𣔳。” |
| 校 | 校 | exact | 木 | phonetic-compound | 木 | 交 |  | 木囚也。从木交聲。 |
| 株 | 株 | exact | 木 | phonetic-compound | 木 | 朱 |  | 木根也。从木朱聲。 |
| 桎 | 桎 | exact | 木 | phonetic-compound | 木 | 至 |  | 足械也。从木至聲。 |
| 桑 | 桑 | exact | 叒 | compound | 叒 |  |  | 蠶所食葉木。从叒、木。 |
| 桓 | 桓 | exact | 木 | phonetic-compound | 木 | 亘 |  | 亭郵表也。从木亘聲。 |
| 桷 | 桷 | exact | 木 | phonetic-compound | 木 | 角 |  | 榱也。椽方曰桷。从木角聲。《春秋傳》曰：“刻桓宫之桷。” |
| 梏 | 梏 | exact | 木 | phonetic-compound | 木 | 告 |  | 手械也。从木告聲。 |
| 棄 | 棄 | exact | 𠦒 | compound | 廾推𠦒棄之𠫓 |  |  | 捐也。从廾推𠦒棄之，从𠫓。𠫓，逆子也。 |
| 棘 | 棘 | exact | 朿 | compound | 並朿 |  |  | 小棗叢生者。从並朿。 |
| 棟 | 棟 | exact | 木 | phonetic-compound | 木 | 東 |  | 極也。从木東聲。 |
| 棺 | 棺 | exact | 木 | phonetic-compound | 木 | 官 |  | 關也。所以掩尸。从木官聲。 |
| 楊 | 楊 | exact | 木 | phonetic-compound | 木 | 昜 |  | 木也。从木昜聲。 |
| 楫 | 楫 | exact | 木 | phonetic-compound | 木 | 咠 |  | 舟櫂也。从木咠聲。 |
| 業 | 業 | exact | 丵 | compound | 丵巾 |  |  | 大版也。所以飾縣鍾鼓。捷業如鋸齒，以白畫之。象其鉏鋙相承也。从丵从巾。巾象版。《詩》曰：“巨業維樅。” |
| 極 | 極 | exact | 木 | phonetic-compound | 木 | 亟 |  | 棟也。从木亟聲。 |
| 榮 | 榮 | exact | 木 | phonetic-compound | 木 | 熒 |  | 桐木也。从木，熒省聲。一曰屋梠之兩頭起者爲榮。 |
| 槁 | 槀 | old-form | 木 | phonetic-compound | 木 | 高 |  | 木枯也。从木高聲。 |
| 構 | 構 | exact | 木 | phonetic-compound | 木 | 冓 |  | 蓋也。从木冓聲。杜林以爲椽桷字。 |
| 樂 | 樂 | exact | 木 | pictograph |  |  |  | 五聲八音緫名。象鼓鞞。木，虡也。 |
| 樞 | 樞 | exact | 木 | phonetic-compound | 木 | 區 |  | 戶樞也。从木區聲。 |
| 樹 | 樹 | exact | 木 | phonetic-compound | 木 | 尌 |  | 生植之緫名。从木尌聲。 |
| 橈 | 橈 | exact | 木 | phonetic-compound | 木 | 堯 |  | 曲木。从木堯聲。 |
| 機 | 機 | exact | 木 | phonetic-compound | 木 | 幾 |  | 主發謂之機。从木幾聲。 |
| 權 | 權 | exact | 木 | phonetic-compound | 木 | 雚 |  | 黃華木。从木雚聲。一曰反常。 |
| 次 | 次 | exact | 欠 | phonetic-compound | 欠 | 二 |  | 不前，不精也。从欠二聲。 |
| 欲 | 欲 | exact | 欠 | phonetic-compound | 欠 | 谷 |  | 貪欲也。从欠谷聲。 |
| 歌 | 歌 | exact | 欠 | phonetic-compound | 欠 | 哥 |  | 詠也。从欠哥聲。 |
| 止 | 止 | exact | 止 | pictograph |  |  |  | 下基也。象艸木出有址，故以止爲足。凡止之屬皆从止。 |
| 正 | 正 | exact | 正 | compound | 止 |  |  | 是也。从止，一以止。凡正之屬皆从正。 |
| 此 | 此 | exact | 此 | compound | 止匕 |  |  | 止也。从止从匕。匕，相比次也。凡此之屬皆从此。 |
| 武 | 武 | exact | 戈 | unanalysed |  |  |  | 楚莊王曰：“夫武，定功戢兵。故止戈爲武。” |
| 歲 | 歲 | exact | 步 | phonetic-compound | 步 | 戌 |  | 木星也。越歴二十八宿，宣徧陰陽，十二月一次。从步戌聲。律歴書名五星爲五步。 |
| 歷 | 歷 | exact | 止 | phonetic-compound | 止 | 厤 |  | 過也。从止厤聲。 |
| 歸 | 歸 | exact | 止 | phonetic-compound | 止婦 | 𠂤 |  | 女嫁也。从止，从婦省，𠂤聲。 |
| 死 | 死 | exact | 死 | compound | 歺人 |  |  | 澌也，人所離也。从歺从人。凡死之屬皆从死。 |
| 殃 | 殃 | exact | 歺 | phonetic-compound | 歺 | 央 |  | 咎也。从歺央聲。 |
| 殆 | 殆 | exact | 歺 | phonetic-compound | 歺 | 台 |  | 危也。从歺台聲。 |
| 殊 | 殊 | exact | 歺 | phonetic-compound | 歺 | 朱 |  | 死也。从歺朱聲。漢令曰：“蠻夷長有罪，當殊之。” |
| 殷 | 殷 | exact | 㐆 | compound | 㐆殳 |  |  | 作樂之盛稱殷。从㐆从殳。《易》曰：“殷薦之上帝。” |
| 殺 | 殺 | exact | 殺 | phonetic-compound | 殳 | 杀 |  | 戮也。从殳杀聲。凡殺之屬皆从殺。 |
| 毀 | 毀 | exact | 土 | phonetic-compound | 土 | 毇 |  | 缺也。从土，毇省聲。 |
| 母 | 母 | exact | 女 | compound | 女 |  |  | 牧也。从女，象褱子形。一曰象乳子也。 |
| 毒 | 毒 | exact | 屮 | compound | 屮毐 |  | 徒沃切 | 厚也。害人之艸，往往而生。从屮从毐。 |
| 比 | 比 | exact | 比 | unanalysed |  |  |  | 密也。二人爲从，反从爲比。凡比之屬皆从比。 |
| 氏 | 氏 | exact | 氏 | phonetic-only |  | 乁 |  | 巴蜀山名岸脅之㫄箸欲落𡐦者曰氏，氏崩，聞數百里。象形，乁聲。凡氏之屬皆从氏。楊雄賦：響若氏隤。 |
| 民 | 民 | exact | 民 | compound | 古文之象 |  |  | 眾萌也。从古文之象。凡民之屬皆从民。 |
| 氣 | 氣 | exact | 米 | phonetic-compound | 米 | 气 |  | 饋客芻米也。从米气聲。《春秋傳》曰：“齊人來氣諸矦。” |
| 水 | 水 | exact | 水 | pictograph |  |  |  | 凖也。北方之行。象眾水並流，中有微陽之气也。凡水之屬皆从水。 |
| 永 | 永 | exact | 永 | pictograph |  |  |  | 長也。象水坙理之長。《詩》曰：“江之永矣。”凡永之屬皆从永。 |
| 汔 | 汔 | exact | 水 | phonetic-compound | 水 | 气 |  | 水涸也。或曰泣下。从水气聲。《詩》曰：“汽可小康。” |
| 汗 | 汗 | exact | 水 | phonetic-compound | 水 | 干 |  | 人液也。从水干聲。 |
| 汲 | 汲 | exact | 水 | phonetic-compound | 水及 | 及 |  | 引水於井也。从水从及，及亦聲。 |
| 決 | 決 | exact | 水 | compound | 水夬 |  |  | 行流也。从水从夬。廬江有決水，出於大別山。 |
| 沒 | 沒 | exact | 水 | compound | 水𠬸 |  |  | 沈也。从水从𠬸。 |
| 沙 | 沙 | exact | 水 | compound | 水少 |  |  | 水𢿱石也。从水从少。水少沙見。楚東有沙水。 |
| 沛 | 沛 | exact | 水 | phonetic-compound | 水 | 巿 |  | 水。出遼東番汗塞外，西南入海。从水巿聲。 |
| 没 | 沒 | orthographic | 水 | compound | 水𠬸 |  |  | 沈也。从水从𠬸。 |
| 沫 | 沫 | exact | 水 | phonetic-compound | 水 | 末 |  | 水。出蜀西徼外，東南入江。从水末聲。 |
| 沱 | 沱 | exact | 水 | phonetic-compound | 水 | 它 |  | 江別流也。出㟭山東，別爲沱。从水它聲。 |
| 河 | 河 | exact | 水 | phonetic-compound | 水 | 可 |  | 水。出焞煌塞外昆侖山，發原注海。从水可聲。 |
| 治 | 治 | exact | 水 | phonetic-compound | 水 | 台 |  | 水。出東萊曲城陽丘山，南入海。从水台聲。 |
| 況 | 況 | exact | 水 | phonetic-compound | 水 | 兄 |  | 寒水也。从水兄聲。 |
| 泉 | 泉 | exact | 泉 | pictograph |  |  |  | 水原也。象水流出成川形。凡泉之屬皆从泉。 |
| 法 | 灋 | old-form | 𢊁 | compound | 水去 |  |  | 刑也。平之如水，从水；𢊁，所以觸不直者；去之，从去。 |
| 泣 | 泣 | exact | 水 | phonetic-compound | 水 | 立 |  | 無聲出涕曰泣。从水立聲。 |
| 泥 | 泥 | exact | 水 | phonetic-compound | 水 | 尼 |  | 水。出北地郁郅北蠻中。从水尼聲。 |
| 泰 | 泰 | exact | 水 | phonetic-compound | 廾水 | 大 |  | 滑也。从廾从水，大聲。 |
| 洗 | 洗 | exact | 水 | phonetic-compound | 水 | 先 |  | 洒足也。从水先聲。 |
| 洛 | 洛 | exact | 水 | phonetic-compound | 水 | 各 |  | 水。出左馮翊歸德北夷界中，東南入渭。从水各聲。 |
| 洟 | 洟 | exact | 水 | phonetic-compound | 水 | 夷 |  | 鼻液也。从水夷聲。 |
| 浚 | 浚 | exact | 水 | phonetic-compound | 水 | 夋 |  | 杼也。从水夋聲。 |
| 涂 | 涂 | exact | 水 | phonetic-compound | 水 | 余 |  | 水。出益州牧靡南山，西北入澠。从水余聲。 |
| 消 | 消 | exact | 水 | phonetic-compound | 水 | 肖 |  | 盡也。从水肖聲。 |
| 涕 | 涕 | exact | 水 | phonetic-compound | 水 | 弟 |  | 泣也。从水弟聲。 |
| 淫 | 淫 | exact | 水 | phonetic-compound | 水 | 㸒 |  | 侵淫隨理也。从水㸒聲。一曰久雨爲淫。 |
| 深 | 深 | exact | 水 | phonetic-compound | 水 | 罙 |  | 水。出桂陽南平，西入營道。从水罙聲。 |
| 淵 | 淵 | exact | 水 | compound | 水 |  |  | 回水也。从水，象形。左右，岸也。中象水皃。 |
| 清 | 清 | exact | 水 | phonetic-compound | 水 | 青 |  | 朖也。澂水之皃。从水青聲。 |
| 渙 | 渙 | exact | 水 | phonetic-compound | 水 | 奐 |  | 流𢿱也。从水奐聲。 |
| 渝 | 渝 | exact | 水 | phonetic-compound | 水 | 俞 |  | 變汙也。从水俞聲。一曰渝水，在遼西臨俞，東出塞。 |
| 渥 | 渥 | exact | 水 | phonetic-compound | 水 | 屋 |  | 霑也。从水屋聲。 |
| 渫 | 渫 | exact | 水 | phonetic-compound | 水 | 枼 |  | 除去也。从水枼聲。 |
| 測 | 測 | exact | 水 | phonetic-compound | 水 | 則 |  | 深所至也。从水則聲。 |
| 游 | 游 | exact | 㫃 | phonetic-compound | 㫃 | 汓 |  | 旌旗之流也。从㫃汓聲。 |
| 湯 | 湯 | exact | 水 | phonetic-compound | 水 | 昜 |  | 熱水也。从水昜聲。 |
| 準 | 準 | exact | 水 | phonetic-compound | 水 | 隼 |  | 平也。从水隼聲。 |
| 溝 | 溝 | exact | 水 | phonetic-compound | 水 | 冓 |  | 水瀆。廣四尺、深四尺。从水冓聲。 |
| 滅 | 滅 | exact | 水 | phonetic-compound | 水 | 𤇳 |  | 盡也。从水𤇳聲。 |
| 滕 | 滕 | exact | 水 | phonetic-compound | 水 | 朕 |  | 水超涌也。从水朕聲。 |
| 滿 | 滿 | exact | 水 | phonetic-compound | 水 | 㒼 |  | 盈溢也。从水㒼聲。 |
| 漏 | 漏 | exact | 水 | phonetic-compound | 水 | 屚 |  | 以銅受水，刻節，晝夜百刻。从水屚聲。 |
| 漸 | 漸 | exact | 水 | phonetic-compound | 水 | 斬 |  | 水。出丹陽黟南蠻中，東入海。从水斬聲。 |
| 潔 | 潔 | exact | 水 | phonetic-compound | 水 | 絜 |  | 瀞也。从水絜聲。 |
| 潛 | 潛 | exact | 水 | phonetic-compound | 水 | 朁 |  | 涉水也。一曰藏也。一曰漢水爲潛。从水朁聲。 |
| 潤 | 潤 | exact | 水 | phonetic-compound | 水 | 閏 |  | 水曰潤下。从水閏聲。 |
| 澤 | 澤 | exact | 水 | phonetic-compound | 水 | 睪 |  | 光潤也。从水睪聲。 |
| 濕 | 濕 | exact | 水 | phonetic-compound | 水 | 㬎 |  | 水。出東郡東武陽，入海。从水㬎聲。桑欽云：出平原高唐。 |
| 濟 | 濟 | exact | 水 | phonetic-compound | 水 | 齊 |  | 水。出常山房子贊皇山，東入泜。从水齊聲。 |
| 濡 | 濡 | exact | 水 | phonetic-compound | 水 | 需 |  | 水。出涿郡故安，東入漆涑。从水需聲。 |
| 瀆 | 瀆 | exact | 水 | phonetic-compound | 水 | 賣 |  | 溝也。从水賣聲。一曰邑中溝。 |
| 火 | 火 | exact | 火 | pictograph |  |  |  | 燬也。南方之行，炎而上。象形。凡火之屬皆从火。 |
| 炳 | 炳 | exact | 火 | phonetic-compound | 火 | 丙 |  | 明也。从火丙聲。 |
| 為 | 爲 | orthographic | 爪 | pictograph |  |  |  | 母猴也。其爲禽好爪。爪，母猴象也。下腹爲母猴形。王育曰：“爪，象形也。” |
| 焉 | 焉 | exact | 烏 | pictograph |  |  |  | 焉鳥，黃色，出於江淮。象形。凡字：朋者，羽蟲之屬；烏者，日中之禽；舄者，知太歲之所在；燕者，請子之𠋫，作巢避戊己。所䝿者故皆象形。焉亦是也。 |
| 無 | 無 | exact | 亡 | phonetic-compound | 亡 | 無 |  | 亡也。从亡無聲。 |
| 然 | 然 | exact | 火 | phonetic-compound | 火 | 肰 |  | 燒也。从火肰聲。 |
| 照 | 照 | exact | 火 | phonetic-compound | 火 | 昭 |  | 明也。从火昭聲。 |
| 熯 | 熯 | exact | 火 | phonetic-compound | 火 | 漢 |  | 乾皃。从火，漢省聲。《詩》曰：“我孔熯矣。” |
| 燕 | 燕 | exact | 燕 | pictograph |  |  |  | 玄鳥也。籋口，布翄，枝尾。象形。凡燕之屬皆从燕。 |
| 營 | 營 | exact | 宮 | phonetic-compound | 宮 | 熒 |  | 市居也。从宮，熒省聲。 |
| 燥 | 燥 | exact | 火 | phonetic-compound | 火 | 喿 |  | 乾也。从火喿聲。 |
| 爵 | 爵 | exact | 鬯 | pictograph |  |  |  | 禮器也。象爵之形，中有鬯酒，又持之也。所以飲。器象爵者，取其鳴節節足足也。 |
| 父 | 父 | exact | 又 | compound | 又舉杖 |  |  | 矩也。家長率教者。从又舉杖。 |
| 爻 | 爻 | exact | 爻 | pictograph |  |  |  | 交也。象《易》六爻頭交也。凡爻之屬皆从爻。 |
| 爾 | 爾 | exact | 㸚 | phonetic-compound | 冂㸚 | 尒 |  | 麗爾，猶靡麗也。从冂从㸚，其孔㸚，尒聲。此與爽同意。 |
| 牀 | 牀 | exact | 木 | phonetic-compound | 木 | 爿 |  | 安身之坐者。从木爿聲。 |
| 牖 | 牖 | exact | 片 | compound | 片 |  |  | 穿壁以木爲交窻也。从片、戶、甫。譚長以爲：甫上日也，非戶也。牖，所以見日。 |
| 牙 | 牙 | exact | 牙 | pictograph |  |  |  | 牡齒也。象上下相錯之形。凡牙之屬皆从牙。 |
| 牛 | 牛 | exact | 牛 | pictograph |  |  |  | 大牲也。牛，件也；件，事理也。象角頭三、封㞑之形。凡牛之屬皆从牛。 |
| 牝 | 牝 | exact | 牛 | phonetic-compound | 牛 | 匕 |  | 畜母也。从牛匕聲。易曰：“畜牝牛，吉。” |
| 牧 | 牧 | exact | 攴 | compound | 攴牛 |  |  | 養牛人也。从攴从牛。《詩》曰：“牧人乃夢。” |
| 物 | 物 | exact | 牛 | phonetic-compound | 牛 | 勿 |  | 萬物也。牛爲大物；天地之𢿙，起於牽牛，故从牛。勿聲。 |
| 牲 | 牲 | exact | 牛 | phonetic-compound | 牛 | 生 |  | 牛完全。从牛生聲。 |
| 牽 | 牽 | exact | 牛 | phonetic-compound | 牛 | 玄 |  | 引前也。从牛，象引牛之縻也。玄聲。 |
| 牿 | 牿 | exact | 牛 | phonetic-compound | 牛 | 告 |  | 牛馬牢也。从牛告聲。周書曰：“今惟牿牛馬。” |
| 犧 | 犧 | exact | 牛 | phonetic-compound | 牛 | 羲 |  | 宗廟之牲也。从牛羲聲。賈侍中說：此非古字。 |
| 犯 | 犯 | exact | 犬 | unanalysed |  |  |  | 侵也。从犬巳（段註改為㔾）聲。 |
| 狀 | 狀 | exact | 犬 | phonetic-compound | 犬 | 爿 |  | 犬形也。从犬爿聲。 |
| 狐 | 狐 | exact | 犬 | phonetic-compound | 犬 | 瓜 |  | 䄏獸也。鬼所乘之。有三徳：其色中和，小前大後，死則丘首。从犬瓜聲。 |
| 狗 | 狗 | exact | 犬 | phonetic-compound | 犬 | 句 |  | 孔子曰：“狗，叩也。叩气吠以守。”从犬句聲。 |
| 狩 | 狩 | exact | 犬 | phonetic-compound | 犬 | 守 |  | 犬田也。从犬守聲。《易》曰：“明夷于南狩。” |
| 猶 | 猶 | exact | 犬 | phonetic-compound | 犬 | 酋 |  | 玃屬。从犬酋聲。一曰隴西謂犬子爲猷。 |
| 獄 | 獄 | exact | 㹜 | compound | 㹜言 |  |  | 确也。从㹜从言。二犬，所以守也。 |
| 獨 | 獨 | exact | 犬 | phonetic-compound | 犬 | 蜀 |  | 犬相得而鬬也。从犬蜀聲。羊爲羣，犬爲獨也。一曰北嚻山有獨𤞞獸，如虎，白身，豕鬣，尾如馬。 |
| 獲 | 獲 | exact | 犬 | phonetic-compound | 犬 | 蒦 |  | 獵所獲也。从犬蒦聲。 |
| 獸 | 獸 | exact | 嘼 | compound | 嘼犬 |  |  | 守備者。从嘼从犬。 |
| 玄 | 玄 | exact | 玄 | pictograph |  |  |  | 幽遠也。黑而有赤色者爲玄。象幽而入覆之也。凡玄之屬皆从玄。 |
| 率 | 率 | exact | 率 | pictograph |  |  |  | 捕鳥畢也。象絲罔，上下其竿柄也。凡率之屬皆从率。 |
| 玉 | 玉 | exact | 玉 | pictograph |  |  | 魚欲切 | 石之美。有五德：潤澤以溫，仁之方也；䚡理自外，可以知中，義之方也；其聲舒揚，尃以遠聞，智之方也；不橈而折，勇之方也；銳廉而不技，絜之方也。象三玉之連，丨其貫也。凡玉之屬皆从玉。 |
| 王 | 王 | exact | 王 | unanalysed |  |  | 雨方切 | 天下所歸往也。董仲舒曰：「古之造文者，三畫而連其中謂之王。三者，天、地、人也，而參通之者，王也。」孔子曰：「一貫三爲王。」凡王之屬皆从王。 |
| 玩 | 玩 | exact | 玉 | phonetic-compound | 玉 | 元 | 五換切 | 弄也。从玉，元聲。 |
| 班 | 班 | exact | 𤤴 | compound | 𤤴刀 |  | 布還切 | 分瑞玉。从𤤴，从刀。 |
| 理 | 理 | exact | 玉 | phonetic-compound | 玉 | 里 | 良止切 | 治玉也。从玉，里聲。 |
| 瑣 | 瑣 | exact | 玉 | phonetic-compound | 玉 | 𧴪 | 蘇果切 | 玉聲也。从玉，𧴪聲。 |
| 瓜 | 瓜 | exact | 瓜 | pictograph |  |  |  | 㼌也。象形。凡瓜之屬皆从瓜。 |
| 瓮 | 瓮 | exact | 瓦 | phonetic-compound | 瓦 | 公 |  | 罌也。从瓦公聲。 |
| 甃 | 甃 | exact | 瓦 | phonetic-compound | 瓦 | 秋 |  | 井壁也。从瓦秋聲。 |
| 甘 | 甘 | exact | 甘 | compound | 口含一 |  |  | 美也。从口含一。一，道也。凡甘之屬皆从甘。 |
| 甚 | 甚 | exact | 甘 | compound | 甘匹耦也 |  |  | 尤安樂也。从甘，从匹耦也。 |
| 生 | 生 | exact | 生 | pictograph |  |  |  | 進也。象艸木生出土上。凡生之屬皆从生。 |
| 用 | 用 | exact | 用 | compound | 卜中 |  |  | 可施行也。从卜从中。衞宏說。凡用之屬皆从用。 |
| 田 | 田 | exact | 田 | pictograph |  |  |  | 陳也。樹穀曰田。象四囗。十，阡陌之制也。凡田之屬皆从田。 |
| 甲 | 甲 | exact | 甲 | compound | 木戴孚甲之象 |  |  | 東方之孟，陽气萌動，从木戴孚甲之象。一曰人頭宐爲甲，甲象人頭。凡甲之屬皆从甲。 |
| 申 | 申 | exact | 申 | compound | 臼 |  |  | 神也。七月，陰气成，體自申束。从臼，自持也。吏臣餔時聽事，申旦政也。凡申之屬皆从申。 |
| 男 | 男 | exact | 男 | compound | 田力 |  |  | 丈夫也。从田从力。言男用力於田也。凡男之屬皆从男。 |
| 畏 | 畏 | exact | 甶 | compound | 甶 |  |  | 惡也。从甶，虎省。鬼頭而虎爪，可畏也。 |
| 畜 | 畜 | exact | 田 | unanalysed |  |  |  | 田畜也。《淮南子》曰：“玄田爲畜。” |
| 畢 | 畢 | exact | 𠦒 | phonetic-compound | 𠦒 | 甶 |  | 田罔也。从𠦒，象畢形。微也。或曰：甶聲。 |
| 畫 | 畫 | exact | 畫 | pictograph |  |  |  | 界也。象田四界。聿，所以畫之。凡畫之屬皆从畫。 |
| 畬 | 畬 | exact | 田 | phonetic-compound | 田 | 余 |  | 三歲治田也。《易》曰：“不葘，畬田。”从田余聲。 |
| 異 | 異 | exact | 異 | compound | 廾畀 |  |  | 分也。从廾从畀。畀，予也。凡異之屬皆从異。 |
| 當 | 當 | exact | 田 | phonetic-compound | 田 | 尚 |  | 田相值也。从田尚聲。 |
| 疇 | 疇 | exact | 田 | compound | 田 |  |  | 耕治之田也。从田，象耕屈之形。 |
| 疑 | 疑 | exact | 子 | phonetic-compound | 子 | 矢 |  | 惑也。从子、止、匕，矢聲。 |
| 疵 | 疵 | exact | 疒 | phonetic-compound | 疒 | 此 |  | 病也。从疒此聲。 |
| 疾 | 疾 | exact | 疒 | phonetic-compound | 疒 | 矢 |  | 病也。从疒矢聲。 |
| 病 | 病 | exact | 疒 | phonetic-compound | 疒 | 丙 |  | 疾加也。从疒丙聲。 |
| 痛 | 痛 | exact | 疒 | phonetic-compound | 疒 | 甬 |  | 病也。从疒甬聲。 |
| 登 | 登 | exact | 癶 | compound | 癶 |  |  | 上車也。从癶、豆。象登車形。 |
| 發 | 發 | exact | 弓 | phonetic-compound | 弓 | 癹 |  | 䠶發也。从弓癹聲。 |
| 白 | 白 | exact | 白 | compound | 入合二 |  |  | 西方色也。陰用事，物色白。从入合二。二，陰數。凡白之屬皆从白。 |
| 百 | 百 | exact | 𪞶 | compound | 一 |  |  | 十十也。从一、白。數，十百爲一貫。相章也。 |
| 皆 | 皆 | exact | 𪞶 | compound | 比𪞶 |  |  | 俱詞也。从比从𪞶。 |
| 皤 | 皤 | exact | 白 | phonetic-compound | 白 | 番 |  | 老人白也。从白番聲。《易》曰：“賁如皤如。” |
| 盈 | 盈 | exact | 皿 | compound | 皿 |  |  | 滿器也。从皿、夃。 |
| 益 | 益 | exact | 皿 | compound | 水 |  |  | 饒也。从水、皿。皿，益之意也。 |
| 盛 | 盛 | exact | 皿 | phonetic-compound | 皿 | 成 |  | 黍稷在器中以祀者也。从皿成聲。 |
| 盜 | 盜 | exact | 㳄 | compound | 㳄 |  |  | 私利物也。从㳄，㳄欲皿者。 |
| 盡 | 盡 | exact | 皿 | phonetic-compound | 皿 | 㶳 |  | 器中空也。从皿㶳聲。 |
| 盥 | 盥 | exact | 皿 | compound | 𦥑水臨皿 |  |  | 澡手也。从𦥑水臨皿。《春秋傳》曰：“奉𠤷沃盥。” |
| 目 | 目 | exact | 目 | pictograph |  |  |  | 人眼。象形。重童子也。凡目之屬皆从目。 |
| 盱 | 盱 | exact | 目 | phonetic-compound | 目 | 于 |  | 張目也。从目于聲。一曰朝鮮謂盧童子曰盱。 |
| 直 | 直 | exact | 乚 | compound | 乚十目 |  |  | 正見也。从乚从十从目。 |
| 相 | 相 | exact | 目 | compound | 目木 |  |  | 省視也。从目从木。《易》曰：“地可觀者，莫可觀於木。”《詩》曰：“相鼠有皮。” |
| 省 | 省 | exact | 眉 | compound | 眉屮 |  |  | 視也。从眉省，从屮。 |
| 眇 | 眇 | exact | 目 | phonetic-compound | 目少 | 少 |  | 一目小也。从目从少，少亦聲。 |
| 眈 | 眈 | exact | 目 | phonetic-compound | 目 | 冘 |  | 視近而志遠。从目冘聲。《易》曰：“虎視眈眈。” |
| 眚 | 眚 | exact | 目 | phonetic-compound | 目 | 生 |  | 目病生翳也。从目生聲。 |
| 眼 | 眼 | exact | 目 | phonetic-compound | 目 | 𥃩 |  | 目也。从目𥃩聲。 |
| 眾 | 眾 | exact | 㐺 | compound | 乑 |  |  | 多也。从乑、目，衆意。 |
| 睽 | 睽 | exact | 目 | phonetic-compound | 目 | 癸 |  | 目不相聽也。从目癸聲。 |
| 矍 | 矍 | exact | 瞿 | compound | 又持之 |  |  | 隹欲逸走也。从又持之，矍矍也。讀若《詩》云“穬彼淮夷”之“穬”。一曰視遽皃。 |
| 矢 | 矢 | exact | 矢 | compound | 入 |  |  | 弓弩矢也。从入，象鏑栝羽之形。古者夷牟初作矢。凡矢之屬皆从矢。 |
| 矣 | 矣 | exact | 矢 | phonetic-compound | 矢 | 以 |  | 語已詞也。从矢以聲。 |
| 知 | 知 | exact | 矢 | compound | 口矢 |  |  | 詞也。从口从矢。 |
| 矯 | 矯 | exact | 矢 | phonetic-compound | 矢 | 喬 |  | 揉箭箝也。从矢喬聲。 |
| 石 | 石 | exact | 石 | pictograph |  |  |  | 山石也。在厂之下；囗，象形。凡石之屬皆从石。 |
| 研 | 研 | exact | 石 | phonetic-compound | 石 | 幵 |  | 䃺也。从石幵聲。 |
| 碩 | 碩 | exact | 頁 | phonetic-compound | 頁 | 石 |  | 頭大也。从頁石聲。 |
| 示 | 示 | exact | 示 | compound | 𠄞 |  |  | 天垂象，見吉凶，所以示人也。从𠄞， |
| 社 | 社 | exact | 示 | compound | 示 |  | 常者切 | 地主也。从示、土。《春秋傳》曰：「共工之子句龍爲社神。」周禮，二十五家爲社，各樹其土所宜之木。 |
| 祀 | 祀 | exact | 示 | phonetic-compound | 示 | 巳 | 詳里切 | 祭無已也。从示，巳聲。 |
| 祇 | 祇 | exact | 示 | phonetic-compound | 示 | 氏 | 巨支切 | 地祇，提出萬物者也。从示，氏聲。 |
| 祉 | 祉 | exact | 示 | phonetic-compound | 示 | 止 | 敕里切 | 福也。从示，止聲。 |
| 祐 | 祐 | exact | 示 | phonetic-compound | 示 | 右 | 于救切 | 助也。从示，右聲。 |
| 祖 | 祖 | exact | 示 | phonetic-compound | 示 | 且 | 則古切 | 始廟也。从示，且聲。 |
| 祗 | 祗 | exact | 示 | phonetic-compound | 示 | 氐 | 旨移切 | 敬也。从示，氐聲。 |
| 神 | 神 | exact | 示 | phonetic-compound | 示 | 申 | 食鄰切 | 天神，引出萬物者也。从示，申聲。 |
| 祥 | 祥 | exact | 示 | phonetic-compound | 示 | 羊 | 似羊切 | 福也。从示，羊聲。一云善。 |
| 祭 | 祭 | exact | 示 | compound | 示 |  | 子例切 | 祭祀也。从示，以手持肉。 |
| 祿 | 祿 | exact | 示 | phonetic-compound | 示 | 彔 | 盧谷切 | 福也。从示，彔聲。 |
| 禁 | 禁 | exact | 示 | phonetic-compound | 示 | 林 | 居蔭切 | 吉凶之忌也。从示，林聲。 |
| 福 | 福 | exact | 示 | phonetic-compound | 示 | 畐 | 方六切 | 祐也。从示，畐聲。 |
| 禦 | 禦 | exact | 示 | phonetic-compound | 示 | 御 | 魚舉切 | 祀也。从示，御聲。 |
| 禮 | 禮 | exact | 示 | phonetic-compound | 示豊 | 豊 | 靈啓切 | 履也，所以事神致福也。从示，从豊，豊亦聲。 |
| 禽 | 禽 | exact | 禸 | phonetic-compound | 厹 | 今 |  | 走獸緫名。从厹，象形，今聲。禽、离、兕頭相似。 |
| 秋 | 秋 | exact | 禾 | phonetic-compound | 禾 | 𤒅 |  | 禾穀孰也。从禾，𤒅省聲。 |
| 科 | 科 | exact | 禾 | compound | 禾斗 |  |  | 程也。从禾从斗。斗者，量也。 |
| 稱 | 稱 | exact | 禾 | phonetic-compound | 禾 | 爯 |  | 銓也。从禾爯聲。春分而禾生。日夏至，晷景可度。禾有秒，秋分而秒定。律數：十二秒而當一分，十分而寸。其以爲重：十二粟爲一分，十二分爲一銖。故諸程品皆从禾。 |
| 稷 | 稷 | exact | 禾 | phonetic-compound | 禾 | 畟 |  | 𪗉也。五穀之長。从禾畟聲。 |
| 稼 | 稼 | exact | 禾 | phonetic-compound | 禾 | 家 |  | 禾之秀實爲稼，莖節爲禾。从禾家聲。一曰稼，家事也。一曰在野曰稼。 |
| 稽 | 稽 | exact | 稽 | phonetic-compound | 𥝌尤 | 旨 |  | 畱止也。从𥝌从尤，旨聲。凡稽之屬皆从稽。 |
| 積 | 積 | exact | 禾 | phonetic-compound | 禾 | 責 |  | 聚也。从禾責聲。 |
| 穫 | 穫 | exact | 禾 | phonetic-compound | 禾 | 蒦 |  | 刈穀也。从禾蒦聲。 |
| 穴 | 穴 | exact | 穴 | phonetic-compound | 宀 | 八 |  | 土室也。从宀八聲。凡穴之屬皆从穴。 |
| 究 | 究 | exact | 穴 | phonetic-compound | 穴 | 九 |  | 窮也。从穴九聲。 |
| 突 | 突 | exact | 穴 | compound | 穴中暫出也犬在 |  |  | 犬从穴中暫出也。从犬在穴中。一曰滑也。 |
| 窒 | 窒 | exact | 穴 | phonetic-compound | 穴 | 至 |  | 塞也。从穴至聲。 |
| 窞 | 窞 | exact | 穴 | phonetic-compound | 穴臽 | 臽 |  | 坎中小坎也。从穴从臽，臽亦聲。《易》曰：“入于坎窞。”一曰㫄入也。 |
| 窮 | 竆 | old-form | 穴 | phonetic-compound | 穴 | 躳 |  | 極也。从穴躳聲。 |
| 窺 | 窺 | exact | 穴 | phonetic-compound | 穴 | 規 |  | 小視也。从穴規聲。 |
| 竄 | 竄 | exact | 穴 | compound | 鼠在穴中 |  |  | 墜也。从鼠在穴中。 |
| 立 | 立 | exact | 立 | compound | 大立一之上 |  |  | 住也。从大立一之上。凡立之屬皆从立。 |
| 章 | 章 | exact | 音 | compound | 音十 |  |  | 樂竟爲一章。从音从十。十，數之終也。 |
| 童 | 童 | exact | 䇂 | phonetic-compound | 䇂 | 重 |  | 男有辠曰奴，奴曰童，女曰妾。从䇂，重省聲。 |
| 竹 | 竹 | exact | 竹 | pictograph |  |  |  | 冬生艸也。象形。下垂者，箁箬也。凡竹之屬皆从竹。 |
| 笑 | 笑 | exact | 竹 | unanalysed |  |  |  | 此字本闕。 |
| 等 | 等 | exact | 竹 | compound | 竹寺 |  |  | 齊簡也。从竹从寺。寺，官曹之等平也。 |
| 策 | 策 | exact | 竹 | phonetic-compound | 竹 | 朿 |  | 馬箠也。从竹朿聲。 |
| 筤 | 筤 | exact | 竹 | phonetic-compound | 竹 | 良 |  | 籃也。从竹良聲。 |
| 筮 | 筮 | exact | 竹 | compound | 竹𢍮 |  |  | 《易》卦用蓍也。从竹从𢍮。𢍮，古文巫字。 |
| 箕 | 箕 | exact | 箕 | compound | 竹 |  |  | 簸也。从竹；𠀠，象形；下其丌也。凡箕之屬皆从箕。 |
| 節 | 節 | exact | 竹 | phonetic-compound | 竹 | 即 |  | 竹約也。从竹即聲。 |
| 範 | 範 | exact | 車 | phonetic-compound | 車 | 笵 |  | 範軷也。从車，笵省聲。讀與犯同。 |
| 篇 | 篇 | exact | 竹 | phonetic-compound | 竹 | 扁 |  | 書也。一曰關西謂榜曰篇。从竹扁聲。 |
| 篤 | 篤 | exact | 馬 | phonetic-compound | 馬 | 竹 |  | 馬行頓遟。从馬竹聲。 |
| 簋 | 簋 | exact | 竹 | compound | 竹皿皀 |  |  | 黍稷方器也。从竹从皿从皀。 |
| 簡 | 簡 | exact | 竹 | phonetic-compound | 竹 | 閒 |  | 牒也。从竹閒聲。 |
| 粹 | 粹 | exact | 米 | phonetic-compound | 米 | 卒 |  | 不雜也。从米卒聲。 |
| 精 | 精 | exact | 米 | phonetic-compound | 米 | 青 |  | 擇也。从米青聲。 |
| 系 | 系 | exact | 系 | phonetic-compound | 糸 | 丿 |  | 繋也。从糸丿聲。凡系之屬皆从系。 |
| 紂 | 紂 | exact | 糸 | phonetic-compound | 糸 | 肘 |  | 馬緧也。从糸，肘省聲。 |
| 約 | 約 | exact | 糸 | phonetic-compound | 糸 | 勺 |  | 纏束也。从糸勺聲。 |
| 納 | 納 | exact | 糸 | phonetic-compound | 糸 | 内 |  | 絲溼納納也。从糸内聲。 |
| 純 | 純 | exact | 糸 | phonetic-compound | 糸 | 屯 |  | 絲也。从糸屯聲。《論語》曰：“今也純，儉。” |
| 紛 | 紛 | exact | 糸 | phonetic-compound | 糸 | 分 |  | 馬尾韜也。从糸分聲。 |
| 素 | 素 | exact | 素 | compound | 糸 |  |  | 白緻繒也。从糸、𠂹，取其澤也。凡素之屬皆从素。 |
| 索 | 索 | exact | 𣎵 | compound | 𣎵 |  |  | 艸有莖葉，可作繩索。从𣎵、糸。杜林說：𣎵亦朱木字。 |
| 終 | 終 | exact | 糸 | phonetic-compound | 糸 | 冬 |  | 絿絲也。从糸冬聲。 |
| 結 | 結 | exact | 糸 | phonetic-compound | 糸 | 吉 |  | 締也。从糸吉聲。 |
| 絕 | 絕 | exact | 糸 | compound | 糸刀卩 |  |  | 斷絲也。从糸从刀从卩。 |
| 統 | 統 | exact | 糸 | phonetic-compound | 糸 | 充 |  | 紀也。从糸充聲。 |
| 經 | 經 | exact | 糸 | phonetic-compound | 糸 | 巠 |  | 織也。从糸巠聲。 |
| 綜 | 綜 | exact | 糸 | phonetic-compound | 糸 | 宗 |  | 機縷也。从糸宗聲。 |
| 維 | 維 | exact | 糸 | phonetic-compound | 糸 | 隹 |  | 車蓋維也。从糸隹聲。 |
| 綸 | 綸 | exact | 糸 | phonetic-compound | 糸 | 侖 |  | 青絲綬也。从糸侖聲。 |
| 縕 | 縕 | exact | 糸 | phonetic-compound | 糸 | 𥁕 |  | 紼也。从糸𥁕聲。 |
| 縣 | 縣 | exact | 𥄉 | compound | 系持𥄉 |  |  | 繫也。从系持𥄉。 |
| 繘 | 繘 | exact | 糸 | phonetic-compound | 糸 | 矞 |  | 綆也。从糸矞聲。 |
| 繩 | 繩 | exact | 糸 | phonetic-compound | 糸 | 蠅 |  | 索也。从糸，蠅省聲。 |
| 繫 | 繫 | exact | 糸 | phonetic-compound | 糸 | 毄 |  | 繫𦃇也。一曰惡絮。从糸毄聲。 |
| 繻 | 繻 | exact | 糸 | phonetic-compound | 糸 | 需 |  | 繒采色。从糸需聲。讀若《易》“繻有衣”。 |
| 繼 | 繼 | exact | 糸 | compound | 糸 |  |  | 續也。从糸、㡭。一曰反𢇍爲繼。 |
| 續 | 續 | exact | 糸 | phonetic-compound | 糸 | 賣 |  | 連也。从糸賣聲。 |
| 缶 | 缶 | exact | 缶 | pictograph |  |  |  | 瓦器。所以盛酒𤖅。秦人鼓之以節謌。象形。凡缶之屬皆从缶。 |
| 罟 | 罟 | exact | -{网}- | phonetic-compound | 网 | 古 |  | 网也。从网古聲。 |
| 罪 | 罪 | exact | -{网}- | compound | 网 |  |  | 捕魚竹网。从网、非。秦以罪爲辠字。 |
| 罷 | 罷 | exact | -{网}- | compound | 网 |  |  | 遣有辠也。从网、能。言有賢能而入网，而貫遣之。《周禮》曰：“議能之辟。” |
| 羊 | 羊 | exact | 羊 | compound | 𦫳 |  |  | 祥也。从𦫳，象頭角足尾之形。孔子曰：“牛羊之字以形舉也。”凡羊之屬皆从羊。 |
| 美 | 美 | exact | 羊 | compound | 羊大 |  |  | 甘也。从羊从大。羊在六畜主給膳也。美與善同意。 |
| 羝 | 羝 | exact | 羊 | phonetic-compound | 羊 | 氐 |  | 牡羊也。从羊氐聲。 |
| 羞 | 羞 | exact | 丑 | phonetic-compound | 羊丑 | 丑 |  | 進獻也。从羊，羊，所進也；从丑，丑亦聲。 |
| 羣 | 羣 | exact | 羊 | phonetic-compound | 羊 | 君 |  | 輩也。从羊君聲。 |
| 義 | 義 | exact | 我 | compound | 我 |  |  | 己之威儀也。從我、羊。 |
| 羸 | 羸 | exact | 羊 | phonetic-compound | 羊 | 𣎆 |  | 瘦也。从羊𣎆聲。 |
| 羽 | 羽 | exact | 羽 | pictograph |  |  |  | 鳥長毛也。象形。凡羽之屬皆从羽。 |
| 習 | 習 | exact | 習 | compound | 羽𪞶 |  |  | 數飛也。从羽从𪞶。凡習之屬皆从習。 |
| 翔 | 翔 | exact | 羽 | phonetic-compound | 羽 | 羊 |  | 回飛也。从羽羊聲。 |
| 翕 | 翕 | exact | 羽 | phonetic-compound | 羽 | 合 |  | 起也。从羽合聲。 |
| 翩 | 翩 | exact | 羽 | phonetic-compound | 羽 | 扁 |  | 疾飛也。从羽扁聲。 |
| 翰 | 翰 | exact | 羽 | phonetic-compound | 羽 | 倝 |  | 天雞赤羽也。从羽倝聲。《逸周書》曰：“大翰，若翬雉，一名鷐風。周成王時蜀人獻之。” |
| 老 | 老 | exact | 老 | compound | 人 |  |  | 考也。七十曰老。从人、毛、匕。言須髮變白也。凡老之屬皆从老。 |
| 考 | 考 | exact | 老 | phonetic-compound | 老 | 丂 |  | 老也。从老省，丂聲。 |
| 者 | 者 | exact | 𪞶 | phonetic-compound | 𪞶 | 𣥐 |  | 別事詞也。从𪞶𣥐聲。𣥐，古文旅字。 |
| 而 | 而 | exact | 而 | pictograph |  |  |  | 頰毛也。象毛之形。《周禮》曰：“作其鱗之而。”凡而之屬皆从而。 |
| 耒 | 耒 | exact | 耒 | compound | 木推丯 |  |  | 手耕曲木也。从木推丯。古者垂作耒㭒以振民也。凡耒之屬皆从耒。 |
| 耕 | 耕 | exact | 耒 | phonetic-compound | 耒 | 井 |  | 犂也。从耒井聲。一曰古者井田。 |
| 耳 | 耳 | exact | 耳 | pictograph |  |  |  | 主聽也。象形。凡耳之屬皆从耳。 |
| 聖 | 聖 | exact | 耳 | phonetic-compound | 耳 | 呈 |  | 通也。从耳呈聲。 |
| 聚 | 聚 | exact | 㐺 | phonetic-compound | 乑 | 取 |  | 會也。从乑取聲。邑落云聚。 |
| 聞 | 聞 | exact | 耳 | phonetic-compound | 耳 | 門 |  | 知聞也。从耳門聲。 |
| 聰 | 聰 | exact | 耳 | phonetic-compound | 耳 | 怱 |  | 察也。从耳怱聲。 |
| 聲 | 聲 | exact | 耳 | phonetic-compound | 耳 | 殸 |  | 音也。从耳殸聲。殸，籒文磬。 |
| 聽 | 聽 | exact | 耳 | phonetic-compound | 耳 | 壬 |  | 聆也。从耳、㥁，壬聲。 |
| 肆 | 𨽸 | old-form | 長 | phonetic-compound | 長 | 隶 |  | 極、陳也。从長隶聲。 |
| 肉 | 肉 | exact | 肉 | pictograph |  |  |  | 胾肉。象形。凡肉之屬皆从肉。 |
| 股 | 股 | exact | 肉 | phonetic-compound | 肉 | 殳 |  | 髀也。从肉殳聲。 |
| 肥 | 肥 | exact | 肉 | compound | 肉卪 |  |  | 多肉也。从肉从卪。 |
| 育 | 育 | exact | 𠫓 | phonetic-compound | 𠫓 | 肉 |  | 養子使作善也。从𠫓肉聲。《虞書》曰：“教育子。” |
| 背 | 背 | exact | 肉 | phonetic-compound | 肉 | 北 |  | 𦟝也。从肉北聲。 |
| 能 | 能 | exact | 能 | phonetic-compound | 肉 | 㠯 |  | 熊屬。足似鹿。从肉㠯聲。能獸堅中，故稱賢能；而彊壯，稱能傑也。凡能之屬皆从能。 |
| 脊 | 脊 | exact | 𠦬 | compound | 𠦬肉 |  |  | 背呂也。从𠦬从肉。 |
| 脢 | 脢 | exact | 肉 | phonetic-compound | 肉 | 𣫭 |  | 背肉也。从肉𣫭聲。《易》曰：“咸其脢。” |
| 脩 | 脩 | exact | 肉 | phonetic-compound | 肉 | 攸 |  | 脯也。从肉攸聲。 |
| 腓 | 腓 | exact | 肉 | phonetic-compound | 肉 | 非 |  | 脛腨也。从肉非聲。 |
| 腹 | 腹 | exact | 肉 | phonetic-compound | 肉 | 复 |  | 厚也。从肉复聲。 |
| 膏 | 膏 | exact | 肉 | phonetic-compound | 肉 | 高 |  | 𦘺也。从肉高聲。 |
| 臘 | 臘 | exact | 肉 | phonetic-compound | 肉 | 巤 |  | 冬至後三戌，臘祭百神。从肉巤聲。 |
| 臣 | 臣 | exact | 臣 | pictograph |  |  |  | 牽也。事君也。象屈服之形。凡臣之屬皆从臣。 |
| 臧 | 臧 | exact | 臣 | phonetic-compound | 臣 | 戕 |  | 善也。从臣戕聲。 |
| 臨 | 臨 | exact | 臥 | phonetic-compound | 臥 | 品 |  | 監臨也。从臥品聲。 |
| 自 | 自 | exact | 自 | pictograph |  |  |  | 鼻也。象鼻形。凡自之屬皆从自。 |
| 臭 | 臭 | exact | 犬 | compound | 犬自 |  |  | 禽走，臭而知其迹者，犬也。从犬从自。 |
| 至 | 至 | exact | 至 | compound | 高下至地也一 |  |  | 鳥飛从高下至地也。从一，一猶地也。象形。不，上去；而至，下來也。凡至之屬皆从至。 |
| 致 | 致 | exact | 夊 | compound | 夊至 |  |  | 送詣也。从夊从至。 |
| 臼 | 臼 | exact | 臼 | pictograph |  |  |  | 舂也。古者掘地爲臼，其後穿木石。象形。中，米也。凡臼之屬皆从臼。 |
| 與 | 與 | exact | 舁 | compound | 舁与 |  |  | 黨與也。从舁从与。 |
| 興 | 興 | exact | 舁 | compound | 舁同 |  |  | 起也。从舁从同。同力也。 |
| 舉 | 擧 | old-form | 手 | phonetic-compound | 手 | 與 |  | 對舉也。从手與聲。 |
| 舊 | 舊 | exact | 雈 | phonetic-compound | 雈 | 臼 |  | 𨾦舊，舊畱也。从雈臼聲。 |
| 舌 | 舌 | exact | 口 | phonetic-compound | 口 | 氒 |  | 塞口也。从口，氒省聲。 |
| 舍 | 舍 | exact | 亼 | compound | 亼 |  |  | 市居曰舍。从亼、屮，象屋也。口象築也。 |
| 舜 | 舜 | exact | 舜 | phonetic-compound | 舛 | 舛 |  | 艸也。楚謂之葍，秦謂之藑。蔓地連華。象形。从舛，舛亦聲。凡䑞之屬皆从䑞。今隸變作舜。 |
| 舞 | 舞 | exact | 舛 | phonetic-compound | 舛 | 無 |  | 樂也。用足相背，从舛；無聲。 |
| 舟 | 舟 | exact | 舟 | pictograph |  |  |  | 船也。古者，共鼓、貨狄，刳木爲舟，剡木爲楫，以濟不通。象形。凡舟之屬皆从舟。 |
| 艮 | 艮 | exact | 匕 | compound | 匕 |  |  | 很也。从匕、目。匕目，猶目相匕，不相下也。《易》曰：“𥃩其限。”匕目爲𥃩，𠤎目爲眞也。 |
| 良 | 良 | exact | 畗 | phonetic-compound | 畗 | 亡 |  | 善也。从畗省，亡聲。 |
| 艱 | 艱 | exact | 堇 | phonetic-compound | 堇 | 艮 |  | 土難治也。从堇艮聲。 |
| 色 | 色 | exact | 色 | compound | 人卪 |  |  | 顔气也。从人从卪。凡色之屬皆从色。 |
| 苞 | 苞 | exact | 艸 | phonetic-compound | 艸 | 包 |  | 艸也。南陽以爲麤履。从艸包聲。 |
| 苟 | 苟 | exact | 艸 | phonetic-compound | 艸 | 句 |  | 艸也。从艸句聲。 |
| 若 | 若 | exact | 艸 | compound | 艸 |  |  | 擇菜也。从艸、右。右，手也。一曰杜若，香艸。 |
| 苦 | 苦 | exact | 艸 | phonetic-compound | 艸 | 古 |  | 大苦，苓也。从艸古聲。 |
| 茀 | 茀 | exact | 艸 | phonetic-compound | 艸 | 弗 |  | 道多艸，不可行。从艸弗聲。 |
| 茂 | 茂 | exact | 艸 | phonetic-compound | 艸 | 戊 |  | 艸豐盛。从艸戊聲。 |
| 茅 | 茅 | exact | 艸 | phonetic-compound | 艸 | 矛 |  | 菅也。从艸矛聲。 |
| 茲 | 茲 | exact | 艸 | phonetic-compound | 艸 | 兹 |  | 艸木多益。从艸，兹省聲。 |
| 茹 | 茹 | exact | 艸 | phonetic-compound | 艸 | 如 |  | 飤馬也。从艸如聲。 |
| 草 | 草 | exact | 艸 | phonetic-compound | 艸 | 早 |  | 草斗，櫟實也。一曰象斗子。从艸早聲。 |
| 荐 | 荐 | exact | 艸 | phonetic-compound | 艸 | 存 |  | 薦蓆也。从艸存聲。 |
| 荒 | 荒 | exact | 艸 | phonetic-compound | 艸 | 㠩 |  | 蕪也。从艸㠩聲。一曰艸淹地也。 |
| 莧 | 莧 | exact | 艸 | phonetic-compound | 艸 | 見 |  | 莧菜也。从艸見聲。 |
| 莫 | 莫 | exact | 茻 | compound | 日在茻中 |  |  | 日且冥也。从日在茻中。 |
| 莽 | 莽 | exact | 茻 | phonetic-compound | 犬茻 | 茻 |  | 南昌謂犬善逐菟艸中爲莽。从犬从茻，茻亦聲。 |
| 菑 | 菑 | exact | 艸 | compound | 艸 |  |  | 不耕田也。从艸、甾。《易》曰：「不菑畬。」 |
| 華 | 華 | exact | 華 | compound | 艸𠌶 |  |  | 榮也。从艸从𠌶。凡華之屬皆从華。 |
| 萃 | 萃 | exact | 艸 | phonetic-compound | 艸 | 卒 |  | 艸皃。从艸卒聲。讀若瘁。 |
| 萑 | 萑 | exact | 艸 | phonetic-compound | 艸 | 隹 |  | 艸多皃。从艸隹聲。 |
| 萬 | 萬 | exact | 禸 | compound | 厹 |  |  | 蟲也。从厹，象形。 |
| 葛 | 葛 | exact | 艸 | phonetic-compound | 艸 | 曷 |  | 絺綌艸也。从艸曷聲。 |
| 葦 | 葦 | exact | 艸 | phonetic-compound | 艸 | 韋 |  | 大葭也。从艸韋聲。 |
| 葬 | 葬 | exact | 茻 | compound | 死在茻中 |  |  | 藏也。从死在茻中；一其中，所以薦之。《易》曰：「古之葬者，厚衣之以薪。」 |
| 蒙 | 蒙 | exact | 艸 | phonetic-compound | 艸 | 冡 |  | 王女也。从艸冡聲。 |
| 蒼 | 蒼 | exact | 艸 | phonetic-compound | 艸 | 倉 |  | 艸色也。从艸倉聲。 |
| 蓋 | 葢 | old-form | 艸 | phonetic-compound | 艸 | 盇 |  | 苫也。从艸盇聲。 |
| 蓍 | 蓍 | exact | 艸 | phonetic-compound | 艸 | 耆 |  | 蒿屬。生十歲，百莖。《易》以爲𢿙。天子蓍九尺，諸侯七尺，大夫五尺，士三尺。从艸耆聲。 |
| 蓏 | 蓏 | exact | 艸 | compound | 艸㼌 |  |  | 在木曰果，在地曰蓏。从艸从㼌。 |
| 蔑 | 蔑 | exact | 𥄕 | compound | 𥄕戍 |  |  | 勞目無精也。从𥄕，人勞則蔑然；从戍。 |
| 蔚 | 蔚 | exact | 艸 | phonetic-compound | 艸 | 𤈫 |  | 牡蒿也。从艸𤈫聲。 |
| 蕃 | 蕃 | exact | 艸 | phonetic-compound | 艸 | 番 |  | 艸茂也。从艸番聲。 |
| 薄 | 薄 | exact | 艸 | phonetic-compound | 艸 | 溥 |  | 林薄也。一曰蠶薄。从艸溥聲。 |
| 薦 | 薦 | exact | 𢊁 | compound | 𢊁艸 |  |  | 獸之所食艸。从𢊁从艸。古者神人以𢊁遺黃帝。帝曰：“何食？何處？”曰：“食薦；夏處水澤，冬處松柏。” |
| 薪 | 薪 | exact | 艸 | phonetic-compound | 艸 | 新 |  | 蕘也。从艸新聲。 |
| 薰 | 薰 | exact | 艸 | phonetic-compound | 艸 | 熏 |  | 香艸也。从艸熏聲。 |
| 藉 | 藉 | exact | 艸 | phonetic-compound | 艸 | 耤 |  | 祭藉也。一曰艸不編，狼藉。从艸耤聲。 |
| 藏 | 藏 | exact | 艸 | unanalysed |  |  |  | 匿也。 |
| 藜 | 藜 | exact | 艸 | phonetic-compound | 艸 | 黎 |  | 艸也。从艸黎聲。 |
| 藟 | 藟 | exact | 艸 | phonetic-compound | 艸 | 畾 |  | 艸也。从艸畾聲。《詩》曰：「莫莫葛藟。」一曰秬鬯也。 |
| 藥 | 藥 | exact | 艸 | phonetic-compound | 艸 | 樂 |  | 治病艸。从艸樂聲。 |
| 藩 | 藩 | exact | 艸 | phonetic-compound | 艸 | 潘 |  | 屏也。从艸潘聲。 |
| 蘇 | 蘇 | exact | 艸 | phonetic-compound | 艸 | 穌 |  | 桂荏也。从艸穌聲。 |
| 蘭 | 蘭 | exact | 艸 | phonetic-compound | 艸 | 闌 |  | 香艸也。从艸闌聲。 |
| 虎 | 虎 | exact | 虎 | compound | 虍 |  |  | 山獸之君。从虍，虎足象人足。象形。凡虎之屬皆从虎。 |
| 處 | 処 | old-form | 几 | compound | 几夂 |  |  | 止也。得几而止。从几从夂。 |
| 虛 | 虛 | exact | 丘 | phonetic-compound | 丘 | 虍 |  | 大丘也。崐崘丘謂之崐崘虛。古者九夫爲井，四井爲邑，四邑爲丘。丘謂之虛。从丘虍聲。 |
| 虞 | 虞 | exact | 虍 | phonetic-compound | 虍 | 吳 |  | 騶虞也。白虎黑文，尾長於身。仁獸，食自死之肉。从虍吳聲。《詩》曰：“于嗟乎，騶虞。” |
| 號 | 號 | exact | 号 | compound | 号虎 |  |  | 呼也。从号从虎。 |
| 虧 | 虧 | exact | 亏 | phonetic-compound | 亏 | 雐 |  | 气損也。从亏雐聲。 |
| 虩 | 虩 | exact | 虎 | phonetic-compound | 虎 | 𡭴 |  | 《易》：“履虎尾虩虩。”恐懼。一曰蠅虎也。从虎𡭴聲。 |
| 蚌 | 蚌 | exact | 虫 | phonetic-compound | 虫 | 𡴀 |  | 蜃屬。从虫𡴀聲。 |
| 蟄 | 蟄 | exact | 虫 | phonetic-compound | 虫 | 執 |  | 藏也。从虫執聲。 |
| 蠃 | 蠃 | exact | 虫 | phonetic-compound | 虫 | 𣎆 |  | 蜾蠃也。从虫𣎆聲。一曰虒蝓。 |
| 蠖 | 蠖 | exact | 虫 | phonetic-compound | 虫 | 蒦 |  | 尺蠖，屈申蟲。从虫蒦聲。 |
| 蠱 | 蠱 | exact | 蟲 | compound | 蟲皿 |  |  | 腹中蟲也。《春秋傳》曰：“皿蟲爲蠱。”“晦淫之所生也。”臬桀死之鬼亦爲蠱。从蟲从皿。皿，物之用也。 |
| 血 | 血 | exact | 血 | compound | 皿 |  |  | 祭所薦牲血也。从皿，一象血形。凡血之屬皆从血。 |
| 行 | 行 | exact | 行 | compound | 彳亍 |  |  | 人之步趨也。从彳从亍。凡行之屬皆从行。 |
| 衍 | 衍 | exact | 水 | compound | 水行 |  |  | 水朝宗于海也。从水从行。 |
| 衎 | 衎 | exact | 行 | phonetic-compound | 行 | 干 |  | 行喜皃。从行干聲。 |
| 術 | 術 | exact | 行 | phonetic-compound | 行 | 术 |  | 邑中道也。从行术聲。 |
| 衛 | 衞 | old-form | 行 | compound | 韋行 |  |  | 宿衞也。从韋、帀，从行。行，列衞也。 |
| 衢 | 衢 | exact | 行 | phonetic-compound | 行 | 瞿 |  | 四達謂之衢。从行瞿聲。 |
| 衣 | 衣 | exact | 衣 | pictograph |  |  |  | 依也。上曰衣，下曰裳。象覆二人之形。凡衣之屬皆从衣。 |
| 衰 | 衰 | exact | 衣 | compound | 衣 |  |  | 艸雨衣。秦謂之萆。从衣，象形。 |
| 袂 | 袂 | exact | 衣 | phonetic-compound | 衣 | 夬 |  | 袖也。从衣夬聲。 |
| 袛 | 袛 | exact | 衣 | phonetic-compound | 衣 | 氐 |  | 袛裯，短衣。从衣氐聲。 |
| 裁 | 裁 | exact | 衣 | phonetic-compound | 衣 | 𢦔 |  | 制衣也。从衣𢦔聲。 |
| 裕 | 裕 | exact | 衣 | phonetic-compound | 衣 | 谷 |  | 衣物饒也。从衣谷聲。《易》曰：“有孚，裕無咎。” |
| 補 | 補 | exact | 衣 | phonetic-compound | 衣 | 甫 |  | 完衣也。从衣甫聲。 |
| 褫 | 褫 | exact | 衣 | phonetic-compound | 衣 | 虒 |  | 奪衣也。从衣虒聲。讀若池。 |
| 西 | 西 | exact | 西 | pictograph |  |  |  | 鳥在巢上。象形。日在西方而鳥棲，故因以爲東西之西。凡西之屬皆从西。 |
| 要 | 要 | exact | 𦥑 | phonetic-compound | 𦥑 | 交 |  | 身中也。象人要自𦥑之形。从𦥑，交省聲。 |
| 覆 | 覆 | exact | 襾 | phonetic-compound | 襾 | 復 |  | 覂也。一曰蓋也。从襾復聲。 |
| 見 | 見 | exact | 見 | unanalysed |  |  |  | 視也。从-{儿}-从目。凡見之屬皆从見。 |
| 視 | 視 | exact | 見 | compound | 見 |  |  | 瞻也。从見、示。 |
| 親 | 親 | exact | 見 | phonetic-compound | 見 | 亲 |  | 至也。从見亲聲。 |
| 覿 | 覿 | exact | 見 | phonetic-compound | 見 | 𧸇 |  | 見也。从見𧸇聲。 |
| 觀 | 觀 | exact | 見 | phonetic-compound | 見 | 雚 |  | 諦視也。从見雚聲。 |
| 角 | 角 | exact | 角 | pictograph |  |  |  | 獸角也。象形，角與刀、魚相似。凡角之屬皆从角。 |
| 解 | 解 | exact | 角 | compound | 刀判牛角 |  |  | 判也。从刀判牛角。一曰解𢊁，獸也。 |
| 觸 | 觸 | exact | 角 | phonetic-compound | 角 | 蜀 |  | 抵也。从角蜀聲。 |
| 言 | 言 | exact | 言 | phonetic-compound | 口 | 䇂 |  | 直言曰言，論難曰語。从口䇂聲。凡言之屬皆从言。 |
| 訟 | 訟 | exact | 言 | phonetic-compound | 言 | 公 |  | 爭也。从言公聲。曰：謌訟。 |
| 設 | 設 | exact | 言 | compound | 言殳 |  |  | 施陳也。从言从殳。殳，使人也。 |
| 試 | 試 | exact | 言 | phonetic-compound | 言 | 式 |  | 用也。从言式聲。《虞書》曰：“明試以功。” |
| 詳 | 詳 | exact | 言 | phonetic-compound | 言 | 羊 |  | 審議也。从言羊聲。 |
| 誅 | 誅 | exact | 言 | phonetic-compound | 言 | 朱 |  | 討也。从言朱聲。 |
| 語 | 語 | exact | 言 | phonetic-compound | 言 | 吾 |  | 論也。从言吾聲。 |
| 誠 | 誠 | exact | 言 | phonetic-compound | 言 | 成 |  | 信也。从言成聲。 |
| 誡 | 誡 | exact | 言 | phonetic-compound | 言 | 戒 |  | 敕也。从言戒聲。 |
| 誣 | 誣 | exact | 言 | phonetic-compound | 言 | 巫 |  | 加也。从言巫聲。 |
| 誥 | 誥 | exact | 言 | phonetic-compound | 言 | 告 |  | 告也。从言告聲。 |
| 誨 | 誨 | exact | 言 | phonetic-compound | 言 | 每 |  | 曉教也。从言每聲。 |
| 說 | 說 | exact | 言 | compound | 言 |  |  | 說，釋也。从言、兌。一曰談說。 |
| 誰 | 誰 | exact | 言 | phonetic-compound | 言 | 隹 |  | 何也。从言隹聲。 |
| 諸 | 諸 | exact | 言 | phonetic-compound | 言 | 者 |  | 辯也。从言者聲。 |
| 謀 | 謀 | exact | 言 | phonetic-compound | 言 | 某 |  | 慮難曰謀。从言某聲。 |
| 謂 | 謂 | exact | 言 | phonetic-compound | 言 | 胃 |  | 報也。从言胃聲。 |
| 謙 | 謙 | exact | 言 | phonetic-compound | 言 | 兼 |  | 敬也。从言兼聲。 |
| 講 | 講 | exact | 言 | phonetic-compound | 言 | 冓 |  | 和解也。从言冓聲。 |
| 謹 | 謹 | exact | 言 | phonetic-compound | 言 | 堇 |  | 愼也。从言堇聲。 |
| 識 | 識 | exact | 言 | phonetic-compound | 言 | 戠 |  | 常也。一曰知也。从言戠聲。 |
| 議 | 議 | exact | 言 | phonetic-compound | 言 | 義 |  | 語也。从言義聲。 |
| 譽 | 譽 | exact | 言 | phonetic-compound | 言 | 與 |  | 稱也。从言與聲。 |
| 變 | 變 | exact | 攴 | phonetic-compound | 攴 | 䜌 |  | 更也。从攴䜌聲。 |
| 谷 | 谷 | exact | 谷 | compound | 水半見 |  |  | 泉出通川爲谷。从水半見，出於口。凡谷之屬皆从谷。 |
| 豐 | 豐 | exact | 豐 | compound | 豆 |  |  | 豆之豐滿者也。从豆，象形。一曰《鄉飲酒》有豐侯者。凡豐之屬皆从豐。 |
| 豕 | 豕 | exact | 豕 | pictograph |  |  |  | 彘也。竭其尾，故謂之豕。象毛足而後有尾。讀與豨同。凡豕之屬皆从豕。 |
| 豚 | 豚 | exact | 豚 | compound | 彖又持肉 |  |  | 小豕也。从彖省，象形。从又持肉，以給祠祀。凡豚之屬皆从豚。 |
| 象 | 象 | exact | 象 | pictograph |  |  |  | 長鼻牙，南越大獸，三秊一乳，象耳牙四足之形。凡象之屬皆从象。 |
| 豫 | 豫 | exact | 象 | phonetic-compound | 象 | 予 |  | 象之大者。賈侍中說：不害於物。从象予聲。 |
| 豶 | 豶 | exact | 豕 | phonetic-compound | 豕 | 賁 |  | 羠豕也。从豕賁聲。 |
| 豹 | 豹 | exact | 豸 | phonetic-compound | 豸 | 勺 |  | 似虎，圜文。从豸勺聲。 |
| 貝 | 貝 | exact | 貝 | pictograph |  |  |  | 海介蟲也。居陸名猋，在水名蜬。象形。古者貨貝而寶龜，周而有泉，至秦廢貝行錢。凡貝之屬皆从貝。 |
| 貞 | 貞 | exact | 卜 | compound | 卜 |  |  | 卜問也。从卜，貝以爲贄。一曰鼎省聲。京房所說。 |
| 負 | 負 | exact | 貝 | compound | 人守貝 |  |  | 恃也。从人守貝，有所恃也。一曰受貸不償。 |
| 財 | 財 | exact | 貝 | phonetic-compound | 貝 | 才 |  | 人所寶也。从貝才聲。 |
| 貢 | 貢 | exact | 貝 | phonetic-compound | 貝 | 工 |  | 獻功也。从貝工聲。 |
| 貨 | 貨 | exact | 貝 | phonetic-compound | 貝 | 化 |  | 財也。从貝化聲。 |
| 貫 | 貫 | exact | 毌 | compound | 毌 |  |  | 錢貝之貫。从毌、貝。 |
| 貳 | 貳 | exact | 貝 | phonetic-compound | 貝 | 弍 |  | 副、益也。从貝弍聲。弍，古文二。 |
| 貴 | 貴 | exact | 貝 | phonetic-compound | 貝 | 臾 |  | 物不賤也。从貝臾聲。臾，古文蕢。 |
| 賁 | 賁 | exact | 貝 | phonetic-compound | 貝 | 卉 |  | 飾也。从貝卉聲。 |
| 資 | 資 | exact | 貝 | phonetic-compound | 貝 | 次 |  | 貨也。从貝次聲。 |
| 賓 | 賓 | exact | 貝 | phonetic-compound | 貝 | 𡧍 |  | 所敬也。从貝𡧍聲。 |
| 賞 | 賞 | exact | 貝 | phonetic-compound | 貝 | 尚 |  | 賜有功也。从貝尚聲。 |
| 賢 | 賢 | exact | 貝 | phonetic-compound | 貝 | 臤 |  | 多才也。从貝臤聲。 |
| 賤 | 賤 | exact | 貝 | phonetic-compound | 貝 | 戔 |  | 賈少也。从貝戔聲。 |
| 質 | 質 | exact | 貝 | compound | 貝斦 |  |  | 以物相贅。从貝从斦。闕。 |
| 贊 | 贊 | exact | 貝 | compound | 貝兟 |  |  | 見也。从貝从兟。 |
| 赤 | 赤 | exact | 赤 | compound | 大火 |  |  | 南方色也。从大从火。凡赤之屬皆从赤。 |
| 赦 | 赦 | exact | 攴 | phonetic-compound | 攴 | 赤 |  | 置也。从攴赤聲。 |
| 起 | 起 | exact | 走 | phonetic-compound | 走 | 巳 |  | 能立也。从走巳聲。 |
| 越 | 越 | exact | 走 | phonetic-compound | 走 | 戉 |  | 度也。从走戉聲。 |
| 趣 | 趣 | exact | 走 | phonetic-compound | 走 | 取 |  | 疾也。从走取聲。 |
| 足 | 足 | exact | 足 | compound | 止 |  |  | 人之足也。在下。从止、口。凡足之屬皆从足。 |
| 跛 | 跛 | exact | 足 | phonetic-compound | 足 | 皮 |  | 行不正也。从足皮聲。一曰足排之。讀若彼。 |
| 路 | 路 | exact | 足 | compound | 足各 |  |  | 道也。从足从各。 |
| 蹇 | 蹇 | exact | 足 | phonetic-compound | 足 | 寒 |  | 跛也。从足，寒省聲。 |
| 躁 | 趮 | old-form | 走 | phonetic-compound | 走 | 喿 |  | 疾也。从走喿聲。 |
| 躅 | 躅 | exact | 足 | phonetic-compound | 足 | 蜀 |  | 蹢躅也。从足蜀聲。 |
| 躋 | 躋 | exact | 足 | phonetic-compound | 足 | 齊 |  | 登也。从足齊聲。商書曰：“予顚躋。” |
| 躍 | 躍 | exact | 足 | phonetic-compound | 足 | 翟 |  | 迅也。从足翟聲。 |
| 身 | 身 | exact | 身 | phonetic-compound | 人 | 𠂆 |  | 躳也。象人之身。从人𠂆聲。凡身之屬皆从身。 |
| 車 | 車 | exact | 車 | pictograph |  |  |  | 輿輪之緫名。夏后時奚仲所造。象形。凡車之屬皆从車。 |
| 載 | 載 | exact | 車 | phonetic-compound | 車 | 𢦔 |  | 乘也。从車𢦔聲。 |
| 輔 | 輔 | exact | 車 | phonetic-compound | 車 | 甫 |  | 人頰車也。从車甫聲。 |
| 輕 | 輕 | exact | 車 | phonetic-compound | 車 | 坙 |  | 輕車也。从車坙聲。 |
| 輪 | 輪 | exact | 車 | phonetic-compound | 車 | 侖 |  | 有輻曰輪，無輻曰輇。从車侖聲。 |
| 輮 | 輮 | exact | 車 | phonetic-compound | 車 | 柔 |  | 車軔也。从車柔聲。 |
| 輹 | 輹 | exact | 車 | phonetic-compound | 車 | 复 |  | 車軸縛也。从車复聲。《易》曰：“輿脫輹。” |
| 輻 | 輻 | exact | 車 | phonetic-compound | 車 | 畐 |  | 輪轑也。从車畐聲。 |
| 輿 | 輿 | exact | 車 | phonetic-compound | 車 | 舁 |  | 車輿也。从車舁聲。 |
| 辟 | 辟 | exact | 辟 | compound | 卩辛口 |  |  | 法也。从卩从辛，節制其辠也；从口，用法者也。凡辟之屬皆从辟。 |
| 辨 | 辨 | exact | 心 | phonetic-compound | 心 | 辡 |  | 憂也。从心辡聲。一曰急也。 |
| 辭 | 辭 | exact | 辛 | compound | 𤔔 |  |  | 訟也。从𤔔，𤔔猶理辜也。𤔔，理也。 |
| 辯 | 辯 | exact | 辡 | compound | 言在辡之閒 |  |  | 治也。从言在辡之閒。 |
| 辱 | 辱 | exact | 辰 | compound | 寸在辰下 |  |  | 恥也。从寸在辰下。失耕時，於封畺上戮之也。辰者，農之時也。故房星爲辰，田候也。 |
| 近 | 近 | exact | 辵 | phonetic-compound | 辵 | 斤 |  | 附也。从辵斤聲。 |
| 迭 | 迭 | exact | 辵 | phonetic-compound | 辵 | 失 |  | 更迭也。从辵失聲。一曰达。 |
| 迷 | 迷 | exact | 辵 | phonetic-compound | 辵 | 米 |  | 或也。从辵米聲。 |
| 逆 | 逆 | exact | 辵 | phonetic-compound | 辵 | 屰 |  | 迎也。从辵屰聲。關東曰逆，關西曰迎。 |
| 逋 | 逋 | exact | 辵 | phonetic-compound | 辵 | 甫 |  | 亾也。从辵甫聲。 |
| 逐 | 逐 | exact | 辵 | compound | 辵豚 |  |  | 追也。从辵，从豚省。 |
| 逖 | 逖 | exact | 辵 | phonetic-compound | 辵 | 狄 |  | 遠也。从辵狄聲。 |
| 通 | 通 | exact | 辵 | phonetic-compound | 辵 | 甬 |  | 達也。从辵甬聲。 |
| 速 | 速 | exact | 辵 | phonetic-compound | 辵 | 束 |  | 疾也。从辵束聲。 |
| 造 | 造 | exact | 辵 | phonetic-compound | 辵 | 告 |  | 就也。从辵告聲。譚長說：造，上士也。 |
| 連 | 連 | exact | 辵 | compound | 辵車 |  |  | 員連也。从辵从車。 |
| 逮 | 逮 | exact | 辵 | phonetic-compound | 辵 | 隶 |  | 唐逮，及也。从辵隶聲。 |
| 進 | 進 | exact | 辵 | phonetic-compound | 辵 | 閵 |  | 登也。从辵，閵省聲。 |
| 逾 | 逾 | exact | 辵 | phonetic-compound | 辵 | 俞 |  | 𨒋進也。从辵俞聲。周書曰：“無敢昬逾。” |
| 遂 | 遂 | exact | 辵 | phonetic-compound | 辵 | 㒸 |  | 亾也。从辵㒸聲。 |
| 遄 | 遄 | exact | 辵 | phonetic-compound | 辵 | 耑 |  | 往來𢿙也。从辵耑聲。易曰：“㠯事遄往。” |
| 遇 | 遇 | exact | 辵 | phonetic-compound | 辵 | 禺 |  | 逢也。从辵禺聲。 |
| 運 | 運 | exact | 辵 | phonetic-compound | 辵 | 軍 |  | 迻徙也。从辵軍聲。 |
| 過 | 過 | exact | 辵 | phonetic-compound | 辵 | 咼 |  | 度也。从辵咼聲。 |
| 遏 | 遏 | exact | 辵 | phonetic-compound | 辵 | 曷 |  | 微止也。从辵曷聲。讀若桑蟲之蝎。 |
| 遐 | 遐 | exact | 辵 | phonetic-compound | 辵 | 叚 |  | 遠也。从辵叚聲。 |
| 道 | 道 | exact | 辵 | compound | 辵𩠐 |  |  | 所行道也。从辵从𩠐。一達謂之道。 |
| 違 | 違 | exact | 辵 | phonetic-compound | 辵 | 韋 |  | 離也。从辵韋聲。 |
| 遠 | 遠 | exact | 辵 | phonetic-compound | 辵 | 袁 |  | 遼也。从辵袁聲。 |
| 適 | 適 | exact | 辵 | phonetic-compound | 辵 | 啻 |  | 之也。从辵啻聲。適，宋魯語。 |
| 遯 | 遯 | exact | 辵 | compound | 辵豚 |  |  | 逃也。从辵从豚。 |
| 遲 | 遲 | exact | 辵 | phonetic-compound | 辵 | 犀 |  | 徐行也。从辵犀聲。詩曰：“行道遲遲。” |
| 遷 | 遷 | exact | 辵 | phonetic-compound | 辵 | 𠨧 |  | 登也。从辵𠨧聲。 |
| 遺 | 遺 | exact | 辵 | phonetic-compound | 辵 | 䝿 |  | 亾也。从辵䝿聲。 |
| 邇 | 邇 | exact | 辵 | phonetic-compound | 辵 | 爾 |  | 近也。从辵爾聲。 |
| 邑 | 邑 | exact | 邑 | compound | 囗卪 |  |  | 國也。从囗；先王之制，尊卑有大小，从卪。凡邑之屬皆从邑。 |
| 邦 | 邦 | exact | 邑 | phonetic-compound | 邑 | 丰 |  | 國也。从邑丰聲。 |
| 邪 | 邪 | exact | 邑 | phonetic-compound | 邑 | 牙 |  | 琅邪郡。从邑牙聲。 |
| 郊 | 郊 | exact | 邑 | phonetic-compound | 邑 | 交 |  | 距國百里爲郊。从邑交聲。 |
| 鄰 | 鄰 | exact | 邑 | phonetic-compound | 邑 | 粦 |  | 五家爲鄰。从邑粦聲。 |
| 酌 | 酌 | exact | 酉 | phonetic-compound | 酉 | 勺 |  | 盛酒行觴也。从酉勺聲。 |
| 配 | 配 | exact | 酉 | phonetic-compound | 酉 | 己 |  | 酒色也。从酉己聲。 |
| 酒 | 酒 | exact | 酉 | phonetic-compound | 水酉 | 酉 |  | 就也，所以就人性之善惡。从水从酉，酉亦聲。一曰造也，吉凶所造也。古者儀狄作酒醪，禹嘗之而美，遂䟽儀狄。杜康作秫酒。 |
| 酢 | 酢 | exact | 酉 | phonetic-compound | 酉 | 乍 |  | 醶也。从酉乍聲。 |
| 醇 | 醇 | exact | 酉 | phonetic-compound | 酉 | 𦎫 |  | 不澆酒也。从酉𦎫聲。 |
| 醜 | 醜 | exact | 鬼 | phonetic-compound | 鬼 | 酉 |  | 可惡也。从鬼酉聲。 |
| 里 | 里 | exact | 里 | compound | 田土 |  |  | 居也。从田从土。凡里之屬皆从里。 |
| 重 | 重 | exact | 重 | phonetic-compound | 壬 | 東 |  | 厚也。从壬東聲。凡重之屬皆从重。 |
| 野 | 野 | exact | 里 | phonetic-compound | 里 | 予 |  | 郊外也。从里予聲。 |
| 金 | 金 | exact | 金 | phonetic-compound | 革不違土 | 今 |  | 五色金也。黃爲之長。久薶不生衣，百鍊不輕，从革不違。西方之行。生於土，从土；左右注，象金在土中形；今聲。凡金之屬皆从金。 |
| 鉉 | 鉉 | exact | 金 | phonetic-compound | 金 | 玄 |  | 舉鼎也。《易》謂之鉉，《禮》謂之鼏。从金玄聲。 |
| 鉤 | 鉤 | exact | 句 | phonetic-compound | 金句 | 句 |  | 曲也。从金从句，句亦聲。 |
| 錫 | 錫 | exact | 金 | phonetic-compound | 金 | 易 |  | 銀鉛之閒也。从金易聲。 |
| 錯 | 錯 | exact | 金 | phonetic-compound | 金 | 昔 |  | 金涂也。从金昔聲。 |
| 長 | 長 | exact | 長 | phonetic-compound | 兀匕 | 亾 |  | 久遠也。从兀从匕。兀者，高遠意也。久則變化。亾聲。{{?|⿸⌈丫}}者，倒亾也。凡長之屬皆从長。 |
| 門 | 門 | exact | 門 | compound | 二戶 |  |  | 聞也。从二戶。象形。凡門之屬皆从門。 |
| 閉 | 閉 | exact | 門 | compound | 門 |  |  | 闔門也。从門；才，所以歫門也。 |
| 開 | 開 | exact | 門 | compound | 門幵 |  |  | 張也。从門从幵。 |
| 閏 | 閏 | exact | 王 | compound | 王在門中 |  | 如順切 | 餘分之月，五歲再閏，告朔之禮，天子居宗廟，閏月居門中。从王在門中，《周禮》曰「閏月，王居門中終月」也。 |
| 閑 | 閑 | exact | 門 | compound | 門中有木 |  |  | 闌也。从門中有木。 |
| 間 | 閒 | old-form | 門 | compound | 門月 |  |  | 隟也。从門从月。 |
| 閽 | 閽 | exact | 門 | phonetic-compound | 門昏 | 昏 |  | 常以昏閉門隸也。从門从昏，昏亦聲。 |
| 闃 | 闃 | exact | 門 | phonetic-compound | 門 | 狊 |  | 靜也。从門狊聲。 |
| 闔 | 闔 | exact | 門 | phonetic-compound | 門 | 盍 |  | 門扇也。一曰閉也。从門盍聲。 |
| 闕 | 闕 | exact | 門 | phonetic-compound | 門 | 欮 |  | 門觀也。从門欮聲。 |
| 關 | 關 | exact | 門 | phonetic-compound | 門 | 𢇅 |  | 以木橫持門戶也。从門𢇅聲。 |
| 闡 | 闡 | exact | 門 | phonetic-compound | 門 | 單 |  | 開也。从門單聲。《易》曰：“闡幽。” |
| 闢 | 闢 | exact | 門 | phonetic-compound | 門 | 辟 |  | 開也。从門辟聲。 |
| 防 | 防 | exact | 𨸏 | phonetic-compound | 𨸏 | 方 |  | 隄也。从𨸏方聲。 |
| 阻 | 阻 | exact | 𨸏 | phonetic-compound | 𨸏 | 且 |  | 險也。从𨸏且聲。 |
| 陂 | 陂 | exact | 𨸏 | phonetic-compound | 𨸏 | 皮 |  | 阪也。一曰沱也。从𨸏皮聲。 |
| 附 | 附 | exact | 𨸏 | phonetic-compound | 𨸏 | 付 |  | 附𡝤，小土山也。从𨸏付聲。《春秋傳》曰：“附𡝤無松栢。” |
| 限 | 限 | exact | 𨸏 | phonetic-compound | 𨸏 | 艮 |  | 阻也。一曰門榍。从𨸏艮聲。 |
| 除 | 除 | exact | 𨸏 | phonetic-compound | 𨸏 | 余 |  | 殿陛也。从𨸏余聲。 |
| 陰 | 陰 | exact | 𨸏 | phonetic-compound | 𨸏 | 侌 |  | 闇也。水之南、山之北也。从𨸏侌聲。 |
| 陳 | 陳 | exact | 𨸏 | phonetic-compound | 𨸏木 | 申 |  | 宛丘，舜後嬀滿之所封。从𨸏从木，申聲。 |
| 陵 | 陵 | exact | 𨸏 | phonetic-compound | 𨸏 | 夌 |  | 大𨸏也。从𨸏夌聲。 |
| 陷 | 陷 | exact | 𨸏 | phonetic-compound | 𨸏臽 | 臽 |  | 高下也。一曰陊也。从𨸏从臽，臽亦聲。 |
| 陸 | 陸 | exact | 𨸏 | phonetic-compound | 𨸏坴 | 坴 |  | 高平地。从𨸏从坴，坴亦聲。 |
| 陽 | 陽 | exact | 𨸏 | phonetic-compound | 𨸏 | 昜 |  | 高、明也。从𨸏昜聲。 |
| 隍 | 隍 | exact | 𨸏 | phonetic-compound | 𨸏 | 皇 |  | 城池也。有水曰池，無水曰隍。从𨸏皇聲。《易》曰：“城復于隍。” |
| 階 | 階 | exact | 𨸏 | phonetic-compound | 𨸏 | 皆 |  | 陛也。从𨸏皆聲。 |
| 隕 | 隕 | exact | 𨸏 | phonetic-compound | 高下也𨸏 | 員 |  | 從高下也。从𨸏員聲。《易》曰：“有隕自天。” |
| 際 | 際 | exact | 𨸏 | phonetic-compound | 𨸏 | 祭 |  | 壁會也。从𨸏祭聲。 |
| 隤 | 隤 | exact | 𨸏 | phonetic-compound | 𨸏 | 貴 |  | 下隊也。从𨸏貴聲。 |
| 隨 | 隨 | exact | 辵 | phonetic-compound | 也辵 | 𡐦 |  | 从也。从辵，𡐦省聲。 |
| 險 | 險 | exact | 𨸏 | phonetic-compound | 𨸏 | 僉 |  | 阻，難也。从𨸏僉聲。 |
| 隱 | 隱 | exact | 𨸏 | phonetic-compound | 𨸏 | 㥯 |  | 蔽也。从𨸏㥯聲。 |
| 雉 | 雉 | exact | 隹 | phonetic-compound | 隹 | 矢 |  | 有十四種：盧諸雉，喬雉，鳪雉，鷩雉，秩秩海雉，翟山雉，翰雉，卓雉，伊洛而南曰翬，江淮而南曰搖，南方曰𢏚，東方曰甾，北方曰稀，西方曰蹲。从隹矢聲。 |
| 雖 | 雖 | exact | 虫 | phonetic-compound | 虫 | 唯 |  | 似蜥蜴而大。从虫唯聲。 |
| 雜 | 雜 | exact | 衣 | phonetic-compound | 衣 | 集 |  | 五彩相會。从衣集聲。 |
| 雞 | 雞 | exact | 隹 | phonetic-compound | 隹 | 奚 |  | 知時畜也。从隹奚聲。 |
| 離 | 離 | exact | 隹 | phonetic-compound | 隹 | 离 |  | 黃倉庚也。鳴則蠶生。从隹离聲。 |
| 雨 | 雨 | exact | 雨 | compound | 雲下也 |  |  | 水从雲下也。一象天，冂象雲，水霝其閒也。凡雨之屬皆从雨。 |
| 雲 | 雲 | exact | 雲 | compound | 雨 |  |  | 山川气也。从雨，云象雲回轉形。凡雲之屬皆从雲。 |
| 電 | 電 | exact | 雨 | compound | 雨申 |  |  | 陰陽激燿也。从雨从申。 |
| 需 | 需 | exact | 雨 | phonetic-compound | 雨 | 而 |  | 𩓣也。遇雨不進，止𩓣也。从雨而聲。《易》曰：“雲上於天，需。” |
| 霆 | 霆 | exact | 雨 | phonetic-compound | 雨 | 廷 |  | 雷餘聲也鈴鈴。所以挺出萬物。从雨廷聲。 |
| 震 | 震 | exact | 雨 | phonetic-compound | 雨 | 辰 |  | 劈歴，振物者。从雨辰聲。《春秋傳》曰：“震夷伯之廟。” |
| 霜 | 霜 | exact | 雨 | phonetic-compound | 雨 | 相 |  | 喪也。成物者。从雨相聲。 |
| 靈 | 𩆜 | old-form | 玉 | phonetic-compound | 玉 | 霝 | 郎丁切 | 𩆜巫，以玉事神。从玉，霝聲。 |
| 靜 | 靜 | exact | 青 | phonetic-compound | 青 | 爭 |  | 審也。从青爭聲。 |
| 非 | 非 | exact | 非 | compound | 飛下翄 |  |  | 違也。从飛下翄，取其相背。凡非之屬皆从非。 |
| 靡 | 靡 | exact | 非 | phonetic-compound | 非 | 麻 |  | 披靡也。从非麻聲。 |
| 面 | 面 | exact | 面 | compound | 𦣻 |  |  | 顔前也。从𦣻，象人面形。凡面之屬皆从面。 |
| 革 | 革 | exact | 革 | pictograph |  |  |  | 獸皮治去其毛，革更之。象古文革之形。凡革之屬皆从革。 |
| 鞏 | 鞏 | exact | 革 | phonetic-compound | 革 | 巩 |  | 以韋束也。《易》曰：“鞏用黃牛之革。”从革巩聲。 |
| 鞶 | 鞶 | exact | 革 | phonetic-compound | 革 | 般 |  | 大帶也。《易》曰：“或錫之鞶帶。”男子帶鞶，婦人帶絲。从革般聲。 |
| 音 | 音 | exact | 音 | compound | 言含一 |  |  | 聲也。生於心，有節於外，謂之音。宮商角徵羽，聲；絲竹金石匏土革木，音也。从言含一。凡音之屬皆从音。 |
| 響 | 響 | exact | 音 | phonetic-compound | 音 | 鄉 |  | 聲也。从音鄉聲。 |
| 頂 | 頂 | exact | 頁 | phonetic-compound | 頁 | 丁 |  | 顚也。从頁丁聲。 |
| 順 | 順 | exact | 頁 | compound | 頁巛 |  |  | 理也。从頁从巛。 |
| 須 | 須 | exact | 須 | compound | 頁彡 |  |  | 面毛也。从頁从彡。凡須之屬皆从須。 |
| 頰 | 頰 | exact | 頁 | phonetic-compound | 頁 | 夾 |  | 面㫄也。从頁夾聲。 |
| 顒 | 顒 | exact | 頁 | phonetic-compound | 頁 | 禺 |  | 大頭也。从頁禺聲。《詩》曰：“其大有顒。” |
| 願 | 願 | exact | 頁 | phonetic-compound | 頁 | 原 |  | 大頭也。从頁原聲。 |
| 顙 | 顙 | exact | 頁 | phonetic-compound | 頁 | 桑 |  | 頟也。从頁桑聲。 |
| 類 | 類 | exact | 犬 | phonetic-compound | 犬 | 頪 |  | 種類相似，唯犬爲甚。从犬頪聲。 |
| 顯 | 顯 | exact | 頁 | phonetic-compound | 頁 | 㬎 |  | 頭明飾也。从頁㬎聲。 |
| 風 | 風 | exact | 風 | phonetic-compound | 虫 | 凡 |  | 八風也。東方曰明庶風，東南曰清明風，南方曰景風，西南曰涼風，西方曰閶闔風，西北曰不周風，北方曰廣莫風，東北曰融風。風動蟲生。故蟲八日而化。从虫凡聲。凡風之屬皆从風。 |
| 飛 | 飛 | exact | 飛 | pictograph |  |  |  | 鳥翥也。象形。凡飛之屬皆从飛。 |
| 食 | 食 | exact | 食 | phonetic-compound | 皀 | 亼 |  | 一米也。从皀亼聲。或說亼皀也。凡食之屬皆从食。 |
| 飪 | 飪 | exact | 食 | phonetic-compound | 食 | 壬 |  | 大孰也。从食壬聲。 |
| 飭 | 飭 | exact | 力 | phonetic-compound | 人力 | 食 |  | 致堅也。从人从力，食聲。讀若敕。 |
| 飲 | 㱃 | old-form | 㱃 | phonetic-compound | 欠 | 酓 |  | 歠也。从欠酓聲。凡㱃之屬皆从㱃。 |
| 飽 | 飽 | exact | 食 | phonetic-compound | 食 | 包 |  | 猒也。从食包聲。 |
| 飾 | 飾 | exact | 巾 | phonetic-compound | 巾人 | 食 |  | 㕞也。从巾从人，食聲。讀若式。一曰襐飾。 |
| 養 | 養 | exact | 食 | phonetic-compound | 食 | 羊 |  | 供養也。从食羊聲。 |
| 餘 | 餘 | exact | 食 | phonetic-compound | 食 | 余 |  | 饒也。从食余聲。 |
| 饋 | 饋 | exact | 食 | phonetic-compound | 食 | 貴 |  | 餉也。从食貴聲。 |
| 首 | 首 | exact | 首 | pictograph |  |  |  | 𦣻同。古文𦣻也。巛象髪，謂之鬊，鬊卽巛也。凡𩠐之屬皆从𩠐。 |
| 馬 | 馬 | exact | 馬 | pictograph |  |  |  | 怒也。武也。象馬頭髦尾四足之形。凡馬之屬皆从馬。 |
| 馮 | 馮 | exact | 馬 | phonetic-compound | 馬 | 冫 |  | 馬行疾也。从馬冫聲。 |
| 馴 | 馴 | exact | 馬 | phonetic-compound | 馬 | 川 |  | 馬順也。从馬川聲。 |
| 馵 | 馵 | exact | 馬 | compound | 馬 |  |  | 馬後左足白也。从馬，二其足。讀若注。 |
| 駁 | 駁 | exact | 馬 | phonetic-compound | 馬 | 爻 |  | 馬色不純。从馬爻聲。 |
| 驅 | 驅 | exact | 馬 | phonetic-compound | 馬 | 區 |  | 馬馳也。从馬區聲。 |
| 驕 | 驕 | exact | 馬 | phonetic-compound | 馬 | 喬 |  | 馬高六尺爲驕。从馬喬聲。《詩》曰：“我馬唯驕。”一曰野馬。 |
| 驚 | 驚 | exact | 馬 | phonetic-compound | 馬 | 敬 |  | 馬駭也。从馬敬聲。 |
| 體 | 體 | exact | 骨 | phonetic-compound | 骨 | 豊 |  | 緫十二屬也。从骨豊聲。 |
| 高 | 高 | exact | 高 | compound | 冂 |  |  | 崇也。象臺觀高之形。从冂、口。與倉、舍同意。凡高之屬皆从高。 |
| 髮 | 髮 | exact | 髟 | phonetic-compound | 髟 | 犮 |  | 根也。从髟犮聲。 |
| 鬯 | 鬯 | exact | 鬯 | compound | 𠙴 |  |  | 以秬釀𩰪艸，芬芳攸服，以降神也。从𠙴，𠙴，器也；中象米；匕，所以扱之。《易》曰：“不喪匕鬯。”凡鬯之屬皆从鬯。 |
| 鬼 | 鬼 | exact | 鬼 | compound | 人厶 |  |  | 人所歸爲鬼。从人，象鬼頭。鬼陰气賊害，从厶。凡鬼之屬皆从鬼。 |
| 魂 | 魂 | exact | 鬼 | phonetic-compound | 鬼 | 云 |  | 陽气也。从鬼云聲。 |
| 魚 | 魚 | exact | 魚 | pictograph |  |  |  | 水蟲也。象形。魚尾與燕尾相似。凡魚之屬皆从魚。 |
| 鮒 | 鮒 | exact | 魚 | phonetic-compound | 魚 | 付 |  | 魚名。从魚付聲。 |
| 鮮 | 鮮 | exact | 魚 | phonetic-compound | 魚 | 羴 |  | 魚名。出貉國。从魚，羴省聲。 |
| 鳥 | 鳥 | exact | 鳥 | compound | 匕 |  |  | 長尾禽緫名也。象形。鳥之足似匕，从匕。凡鳥之屬皆从鳥。 |
| 鳴 | 鳴 | exact | 鳥 | compound | 鳥口 |  |  | 鳥聲也。从鳥从口。 |
| 鴻 | 鴻 | exact | 鳥 | phonetic-compound | 鳥 | 江 |  | 鴻鵠也。从鳥江聲。 |
| 鶴 | 鶴 | exact | 鳥 | phonetic-compound | 鳥 | 隺 |  | 鳴九臯，聲聞于天。从鳥隺聲。 |
| 鹵 | 鹵 | exact | 鹵 | compound | 西 |  |  | 西方鹹地也。从西省，象鹽形。安定有鹵縣。東方謂之㡿，西方謂之鹵。凡鹵之屬皆从鹵。 |
| 鹿 | 鹿 | exact | 鹿 | compound | 匕 |  |  | 獸也。象頭角四足之形。鳥鹿足相似，从匕。凡鹿之屬皆从鹿。 |
| 麗 | 麗 | exact | 鹿 | phonetic-compound | 鹿 | 丽 |  | 旅行也。鹿之性，見食急則必旅行。从鹿丽聲。《禮》：麗皮納聘。蓋鹿皮也。 |
| 黃 | 黃 | exact | 黃 | phonetic-compound | 田炗 | 炗 |  | 地之色也。从田从炗，炗亦聲。炗，古文光。凡黃之屬皆从黃。 |
| 黑 | 黑 | exact | 黑 | compound | 炎 |  |  | 火所熏之色也。从炎，上出𡆧。𡆧，古窻字。凡黑之屬皆从黑。 |
| 黔 | 黔 | exact | 黑 | phonetic-compound | 黑 | 今 |  | 黎也。从黑今聲。秦謂民爲黔首，謂黑色也。周謂之黎民。《易》曰：“爲黔喙。” |
| 默 | 默 | exact | 犬 | phonetic-compound | 犬 | 黑 |  | 犬暫逐人也。从犬黑聲。讀若墨。 |
| 鼎 | 鼎 | exact | 鼎 | pictograph |  |  |  | 三足兩耳，和五味之寶器也。昔禹收九牧之金，鑄鼎荊山之下，入山林川澤，螭魅蝄蜽，莫能逢之，以協承天休。《易》卦：巽木於下者爲鼎，象析木以炊也。籒文以鼎爲貞字。凡鼎之屬皆从鼎。 |
| 鼓 | 鼓 | exact | 攴 | phonetic-compound | 攴壴 | 壴 |  | 擊鼓也。从攴从壴，壴亦聲。 |
| 鼠 | 鼠 | exact | 鼠 | pictograph |  |  |  | 穴蟲之緫名也。象形。凡鼠之屬皆从鼠。 |
| 鼫 | 鼫 | exact | 鼠 | phonetic-compound | 鼠 | 石 |  | 五技鼠也。能飛，不能過屋；能緣，不能窮木；能游，不能渡谷；能穴，不能掩身；能走，不能先人。从鼠石聲。 |
| 鼻 | 鼻 | exact | 鼻 | compound | 自 |  |  | 引气自𢌿也。从自、𢌿。凡鼻之屬皆从鼻。 |
| 齊 | 齊 | exact | 齊 | pictograph |  |  |  | 禾麥吐穗上平也。象形。凡亝之屬皆从亝。 |
| 齎 | 齎 | exact | 貝 | phonetic-compound | 貝 | 齊 |  | 持遺也。从貝齊聲。 |
| 龍 | 龍 | exact | 龍 | phonetic-compound | 肉 | 童 |  | 鱗蟲之長。能幽，能明，能細，能巨，能短，能長；春分而登天，秋分而潛淵。从肉，飛之形，童省聲。凡龍之屬皆从龍。 |
| 龜 | 龜 | exact | 龜 | compound | 它 |  |  | 舊也。外骨内肉者也。从它，龜頭與它頭同。天地之性，廣肩無雄；龜鼈之類，以它爲雄。象足甲尾之形。凡龜之屬皆从龜。 |

## Not matched to a 說文 entry

*146 of the Zhouyi's characters. Most are later graphs, or are filed under an older form nobody
has verified yet. A mapping is added only when the old form is confirmed present in the vendored text and its
definition is this character's word — in the Tao Te Ching project's `SHUOWEN_VARIANTS`, which this importer
uses unchanged. This list is the worklist.*

乖 于 云 亨 亹 他 佑 俯 免 其 冽 凝 劓 即 卼 原 參 啕 嗟 嘻 嚮 夙 太 妙 寂 射 尤 岐 巷 并 幹 康 弒 彙 征 徒 恒 悖 愬 慚 憊 折 拯 掛 掣 揉 撰 敢 散 敷 斷 於 无 晰 暢 暴 朋 朝 朵 槨 樽 求 洊 流 济 浸 涉 漁 漣 災 烜 焚 爛 瓶 由 留 疆 疚 瘠 的 盍 確 磐 禴 稊 稚 穉 筐 簪 紱 絪 緩 纆 罔 罰 群 翼 耋 耜 耨 耶 聦 肱 胏 膚 臀 臲 荡 著 蒞 蒺 蔀 蔾 蛇 蟹 衆 袽 裒 裳 覩 觌 諂 賾 趾 踟 蹄 躬 輝 農 退 途 遊 邅 酬 釜 隆 隼 難 雷 頄 頤 頻 顏 顛 餗 鱉
