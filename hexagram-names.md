# The names — the English for 8 trigrams and 64 hexagrams

*A working brief, not a ruling. Shalom reviews it over time; a name leaves this file's "proposed"
column only by Shalom's approval, and only then goes into a `render:` field and a
[`glossary/`](glossary/README.md) entry that argues it. The generated concordance these names were
checked against is [`glossary/NAMES.md`](glossary/NAMES.md); what is owed is
[`WORKLIST.md`](WORKLIST.md) A7.*

**Standing: first drafted 2026-09-24**, from a four-corners dossier on every hexagram (the Chinese
and its lines, the Wings, 說文 (*shuōwén*, the c. 100 CE character dictionary), 王弼 (*Wáng Bì*),
and the three vendored translations), then decided as one set so that no two names share a word.
Every name was judged on **properties of the word** — does it survive its own lines, does it meet a
lock, does it import what the Chinese lacks. That a previous translator used a word, or did not, was
neither a reason for it nor against it
([`convergence-is-evidence`](principles/convergence-is-evidence.md)).

## How to use this file

- **Edit the `status` column** as you go: `proposed` → `approved`, or write your own English into
  the row and mark it `approved`. `pending` means the name waits on a ruling elsewhere — see
  [§ The five that wait](#the-five-that-wait-on-a-ruling).
- **Each row carries every candidate** the dossiers produced, best first after the proposal, so a
  change of mind does not need the research redone.
- **Nothing here is checked by `npm run check`.** A name is checked once it is a `render:`.

## What is already ruled

**Shalom, 2026-09-24:**

1. **The image names the trigram; the lines name the hexagram.** Each trigram keeps its 說卦
   (*shuōguà*) image as its English. Each hexagram is named for how **its own lines** use its
   character — so the eight doubled hexagrams (1, 2, 29, 30, 51, 52, 57, 58) take English different
   from their trigrams. → [`principles/the-image-names-the-trigram-the-lines-name-the-hexagram.md`](principles/the-image-names-the-trigram-the-lines-name-the-hexagram.md)
2. **Romanization is standard modern pinyin**, with the traditional reading recorded in the
   name's glossary entry where it differs — 21 噬嗑 *shì kè* (traditionally *shì hé*), 8 比 *bǐ*
   (*bì*), 20 觀 *guān* (*guàn*, "display"), 9 and 26 畜 *chù* (*xù*, "store"). → [`README.md`](README.md#what-is-a-fact-here-and-what-is-a-decision)
3. **An exclusion names what is wrong with the word, never who used it.** → [`method.md`](method.md) § 0, [`glossary/README.md`](glossary/README.md#what-an-entry-owes) item 4

## The eight trigrams

Drafted 2026-09-12 and argued in [`glossary/`](glossary/INDEX.md). Not yet locked.

| | | pinyin | image | English | other candidates | status |
|---|---|---|---|---|---|---|
| 1 | 乾 | qián | 天 | **sky** | — (天 is locked to *sky*) | proposed |
| 2 | 兌 | duì | 澤 | **lake** | marsh · pool · basin | proposed |
| 3 | 離 | lí | 火 | **fire** | — | proposed |
| 4 | 震 | zhèn | 雷 | **thunder** | — | proposed |
| 5 | 巽 | xùn | 風 | **wind** | wood | proposed |
| 6 | 坎 | kǎn | 水 | **water** | — | proposed |
| 7 | 艮 | gèn | 山 | **mountain** | — | proposed |
| 8 | 坤 | kūn | 地 | **earth** | — | proposed |

## The sixty-four

**The first three columns after the pinyin are each hexagram's place on the four spectrums** — the
formation every name sits on (see [§ The pattern in the formation](#the-pattern-in-the-formation)),
and the check each name is read against
([`read-a-figure-through-its-spectrums`](principles/read-a-figure-through-its-spectrums.md)):

- ***within · without*** — the lower trigram, then the upper, in the trigrams' English, each with
  its **pole**: *yang* where its odd line is firm (or all three are), *yin* where it is open.
- ***spectrums*** — the one or two spectrums the figure is built from. **Doubled** is one pole
  twice; **crossed** is both poles of one spectrum; *A × B* is a pole of each of two.
- ***action within → without*** — 說卦 ch 7's action for each trigram, in the English of
  [`README.md`](README.md#the-shape-of-the-figures). This is the shape the 彖傳 reads a hexagram
  in (31 咸 止而說, "stopping → releasing"), and **it is commentary: it may suggest a
  candidate, and only the lines admit it.**

**Two more columns come from each hexagram's signature reading** — the `## The signature — a
reading` section at the foot of every `hexagrams/NN.md`, drafted 2026-09-25:

- ***signature says*** — whether the signature **supports** the proposed English, **deepens** it
  (supports it and adds something the name should carry), or **strains** it (the figure pulls
  another way; worth a second look).
- **◇** in *other candidates* marks a word the signature suggested, with the result of testing it
  against the hexagram's own lines: **✓** survives, **✗** fails, **✓ strained** survives with a
  cost the reading names, **✗ lock** collides with a locked term. A ◇ word that duplicates an
  earlier candidate is kept, because the signature's verdict on it is new information.

The first three signature columns were generated once, on 2026-09-24, from `generated/iching-data.ts`, so they
agree with the trigram data `npm run check` enforces. **Nothing regenerates them**: if a trigram's
English changes, these cells go stale with it. A **seam** is where the English
cannot carry something the Chinese does; it goes in the glossary entry, not the name.

| # | | pinyin | within · without | spectrums | action within → without | English | signature says | other candidates | why, in brief | status |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | 乾 | qián | sky (yang) · sky (yang) | sky ↔ earth, **doubled** | vigour → vigour | **Striving** | deepens | Vigour · Drive · Sky · ◇ The Dragon ✓ partly · ◇ Unresting ✗ | 乾乾 (*qián qián*) in line 3 needs a verb: "striving all day, wary at dusk". 強 is locked to *strong*; *vigour* is kept for 34 | proposed |
| 2 | 坤 | kūn | earth (yin) · earth (yin) | sky ↔ earth, **doubled** | going along → going along | **Carrying** | deepens | Earth · Compliance · Accord · ◇ Receiving ✓ · ◇ Following ✗ | 坤厚載物, "坤 is thick and carries things"; 地勢坤 reads "the lie of the land carries". 弱 is locked to *yielding* and 生 to *bear*. Pairs with 1 | proposed |
| 3 | 屯 | zhūn | thunder (yang) · water (yang) | thunder ↔ wind × water ↔ fire | moving out → sinking in | **Sprouting** | deepens | First Growth · Holding Back · Difficult Beginning · ◇ Crowding ✓ · ◇ Breaking Through ✗ | 說文: a sprout piercing the ground-line, 屯然而難; 序卦 物之始生. Stays out of the difficulty cluster. *Seam:* 屯其膏 (line 5) reads *tún*, "hoard" | proposed |
| 4 | 蒙 | méng | water (yang) · mountain (yang) | water ↔ fire × mountain ↔ lake | sinking in → stopping | **Unknowing** | deepens | Covering · Ignorance · Obscurity · ◇ Unopened ✓ · ◇ The Covered Spring ✗ | Survives every line: "the child's unknowing", "lift the unknowing", "strike the unknowing". 說文: a vine that covers. **Collision (2026-09-25):** the Tao Te Ching already uses *unknowing* for 無知 (chs 3, 10), a state it asks *of* the sage; here 蒙 is a state to be opened. *Unopened* ✓ avoids it | proposed |
| 5 | 需 | xū | sky (yang) · water (yang) | sky ↔ earth × water ↔ fire | vigour → sinking in | **Waiting** | supports | Biding · Held Up · ◇ Biding ✓ · ◇ Standing Off ✗ | Waiting at the outskirts, in the sand, the mud, the blood. 說文 遇雨不進 ("meets rain, does not go on"). Legge and McClatchie agree; de Harlez reads *obstacle* | proposed |
| 6 | 訟 | sòng | water (yang) · sky (yang) | water ↔ fire × sky ↔ earth | sinking in → vigour | **Dispute** | deepens | Lawsuit · Contention · Quarrel · ◇ Grievance ✓ · ◇ Going Apart ✗ | Can be won or lost (不克訟). *Contention* is the parent project's word for 爭 | proposed |
| 7 | 師 | shī | water (yang) · earth (yin) | water ↔ fire × sky ↔ earth | sinking in → going along | **The Army** | deepens | Troops · The Host · ◇ The Levy ✓ · ◇ Discipline ✗ | All five lines and every use elsewhere (行師, 大師). 眾 is locked, with *multitude* forbidden | proposed |
| 8 | 比 | bǐ | earth (yin) · water (yang) | sky ↔ earth × water ↔ fire | going along → sinking in | **Drawing Near** | deepens | Alliance · Closeness · Union · ◇ Rallying ✓ · ◇ Pooling ✗ | 說文: two figures side by side. Works in 比之匪人 ("drawing near to the wrong people"). 執 forbids *attachment* | proposed |
| 9 | 小畜 | xiǎo chù | sky (yang) · wind (yin) | sky ↔ earth × thunder ↔ wind | vigour → entering | **Small Keeping** | deepens | Small Taming · Small Restraint · Small Store · ◇ Small Store ✓ · ◇ Clouds Held ✗ | 畜 = keeping: livestock, stores, holding back. Must also serve the verb 畜 at 30 (畜牝牛, "keep a cow") and 33. Pairs with 26 | proposed |
| 10 | 履 | lǚ | lake (yin) · sky (yang) | mountain ↔ lake × sky ↔ earth | releasing → vigour | **Treading** | supports | Tread · Footing · Conduct · ◇ Footing ✓ · ◇ Stepping Softly ✗ | Tread on the tiger's tail; plain treading. All three translators agree | proposed |
| 11 | 泰 | tài | sky (yang) · earth (yin) | sky ↔ earth, **crossed** | vigour → going along | **Flow** | strains | Passage · Free Flow · Meeting · Peace · see § pending · ◇ Meeting ✓ · ◇ Exchange ✓ thinly | 說文 滑 (water through hands); 序卦 泰者通也. *Peace* is unsupported: 序卦 puts 安 after 泰. **Waits on 亨** (A6) | pending |
| 12 | 否 | pǐ | earth (yin) · sky (yang) | sky ↔ earth, **crossed** | going along → vigour | **Blockage** | strains | Stagnation · Obstruction · Closing · Standstill · see § pending · ◇ Standstill ✓ · ◇ Parting ✗ | "The blockage rests", "topple the blockage", "first blocked, then glad". Pairs with 11. **Waits on 亨** | pending |
| 13 | 同人 | tóng rén | fire (yin) · sky (yang) | water ↔ fire × sky ↔ earth | attaching → vigour | **People Together** | deepens | Joining People · Fellowship · Companionship · ◇ Joining People ✓ · ◇ Kindred ✗ | "People together in the open country / at the gate". Keeping 人 matches 37 家人 | proposed |
| 14 | 大有 | dà yǒu | sky (yang) · fire (yin) | sky ↔ earth × water ↔ fire | vigour → attaching | **Great Possession** | strains | Great Having · Great Holdings · Great Harvest · see § pending · ◇ Great Having ✓ · ◇ Great Harvest ✓ · ◇ Great Light ✗ | 大 is locked to *great*. 有 here is having, not the Tao Te Ching's presence. **Waits on the 有 question.** *From the readings (2026-09-25):* the Tao Te Ching renders verbal 有 *possessing* ("giving birth without possessing", chs 2, 10, 51), so *Great Possession* would put one word to opposite uses across the books — the evidence now favours ***Great Having*** | pending |
| 15 | 謙 | qiān | mountain (yang) · earth (yin) | mountain ↔ lake × sky ↔ earth | stopping → going along | **Modesty** | deepens | Humility · Deference · Lowliness · ◇ Lowliness ✓ strained · ◇ Hidden Height ✗ | "Modest, modest noble one". *Modus* is measure, which matches 稱物平施 ("weigh things and give evenly") | proposed |
| 16 | 豫 | yù | earth (yin) · thunder (yang) | sky ↔ earth × thunder ↔ wind | going along → moving out | **Ease** | supports | Delight · Readiness · Contentment · ◇ Readiness ✓ · ◇ Rousing ✗ | Takes every modifier (crowing ease, benighted ease). 說文: a large elephant that harms nothing. Leaves *delight* for 58 | proposed |
| 17 | 隨 | suí | thunder (yang) · lake (yin) | thunder ↔ wind × mountain ↔ lake | moving out → releasing | **Following** | deepens | Follow · Going Along · ◇ Keeping Pace ✓ · ◇ Answering ✗ | Works in both lines, and as "what follows" (the leg) in 31 and 52 | proposed |
| 18 | 蠱 | gǔ | wind (yin) · mountain (yang) | thunder ↔ wind × mountain ↔ lake | entering → stopping | **Rot** | deepens | Decay · Corruption · Blight · ◇ Festering ✓ · ◇ The Sealed Jar ✗ | 說文 皿蟲: worms in a vessel. "Set right the father's rot". *Affairs* is locked to 事, which occurs in 18.6 | proposed |
| 19 | 臨 | lín | lake (yin) · earth (yin) | mountain ↔ lake × sky ↔ earth | releasing → going along | **Overseeing** | strains | Presiding · Approach · Drawing Near · ◇ Approach ✓ · ◇ Rising ✗ | 說文 監臨: bending to look down. "Sweet overseeing", "knowing overseeing". 王 is locked to *ruler* | proposed |
| 20 | 觀 | guān | earth (yin) · wind (yin) | sky ↔ earth × thunder ↔ wind | going along → entering | **Watching** | supports | View · Observing · Contemplation · ◇ Beholding ✓ · ◇ The Lookout ✗ | "A child's watching", "watch my life". *Seam:* traditional *guàn*, "display". **Corrected 2026-09-25:** this said *Watching* "matches the parent's 觀 (ch 16)" — it does not; the Tao Te Ching renders 觀 ***observe*** (chs 1, 16, 54), which argues for *Observing* | proposed |
| 21 | 噬嗑 | shì kè | thunder (yang) · fire (yin) | thunder ↔ wind × water ↔ fire | moving out → attaching | **Biting Through** | supports | Bite and Close · Jaws Closing · ◇ Bite and Close ✓ · ◇ Judgement ✗ | Shares "bite" with all four 噬 lines; Wang Bi 齧而合之. Pinyin kept at modern *shì kè* (traditional *shì hé*) | proposed |
| 22 | 賁 | bì | fire (yin) · mountain (yang) | water ↔ fire × mountain ↔ lake | attaching → stopping | **Adornment** | deepens | Ornament · Embellishment · ◇ Pattern ✓ · ◇ Glow ✗ | Adorn his toes; adorned and glistening; white adornment. 明 is locked, so *radiance* is out | proposed |
| 23 | 剝 | bō | earth (yin) · mountain (yang) | sky ↔ earth × mountain ↔ lake | going along → stopping | **Stripping** | supports | Stripping Away · Peeling · Collapse · ◇ Peeling ✓ · ◇ Collapse ✗ | The lines are transitive (strip the bed at the legs… to the skin), which rules out *collapse* | proposed |
| 24 | 復 | fù | thunder (yang) · earth (yin) | thunder ↔ wind × sky ↔ earth | moving out → going along | **Return** | deepens | Returning · Coming Back · ◇ Coming Back ✓ · ◇ Regrowth ✗ | Eight lines ("a lost return", "returning alone"). Agrees with the parent's 復命 | proposed |
| 25 | 无妄 | wú wàng | thunder (yang) · sky (yang) | thunder ↔ wind × sky ↔ earth | moving out → vigour | **Innocence** | deepens | Without Recklessness · The Unexpected · Without Pretence · see § pending · ◇ The Unplanned ✓ · ◇ Spontaneity ✗ | Works in every line ("an innocent's calamity"). *Blameless* would collide with 无咎 in 25.4. **Waits on A11** | pending |
| 26 | 大畜 | dà chù | sky (yang) · mountain (yang) | sky ↔ earth × mountain ↔ lake | vigour → stopping | **Great Keeping** | supports | Great Taming · Great Restraint · Great Store · ◇ Great Restraint ✓ · ◇ Great Store ✗ | Paired with 9. The ox's horn-board and the gelded boar favour *Taming* here, but 9's clouds and cart do not | proposed |
| 27 | 頤 | yí | thunder (yang) · mountain (yang) | thunder ↔ wind × mountain ↔ lake | moving out → stopping | **Jaws** | deepens | Nourishing · Feeding · ◇ Nourishing ✗ · ◇ The Mouth ✗ | Survives all seven (朵頤, "working jaws"); the nourishing comes out of the image. *Mouth* collides with 口實 in its own judgment | proposed |
| 28 | 大過 | dà guò | wind (yin) · lake (yin) | thunder ↔ wind × mountain ↔ lake | entering → releasing | **Great Exceeding** | deepens | Great Excess · Great Overstepping · Great Overload · ◇ Great Overreach ✓ · ◇ Great Overload ✗ | Must match 62, where 過 is a verb four times. *Excess* is a noun only | proposed |
| 29 | 坎 | kǎn | water (yang) · water (yang) | water ↔ fire, **doubled** | sinking in → sinking in | **The Pit** | supports | Hollow · Water · The Pit Doubled · ◇ The Deep ✓ · ◇ Sinking ✗ | Every use is a pit (入于坎窞; 說文 quotes this line). *Danger* would read "danger has danger" (坎有險) | proposed |
| 30 | 離 | lí | fire (yin) · fire (yin) | water ↔ fire, **doubled** | attaching → attaching | **Blaze** | supports | Fire · Attaching · Glow · ◇ Flame ✓ · ◇ Attaching ✗ | "Yellow blaze", "the blaze of the setting sun", 焚如. Clears the 明 lock. *Seam:* 說文 reads 離 as the yellow oriole, and 黃離 matches it | proposed |
| 31 | 咸 | xián | mountain (yang) · lake (yin) | mountain ↔ lake, **crossed** | stopping → releasing | **Touch** | deepens | Stirring · Feeling · Influence · ◇ Quickening ✓ · ◇ Response ✗ | Touch his big toe, calf, thigh, jaws; also *touched* in feeling (感). 彖 止而說 | proposed |
| 32 | 恆 | héng | wind (yin) · thunder (yang) | thunder ↔ wind, **crossed** | entering → moving out | **Constancy** | deepens | Enduring · Duration · Lasting · ◇ Continuance ✓ · ◇ Renewal ✗ | The translators agree. 常 is locked to *the abiding*; 貞 needs *perseverance* | proposed |
| 33 | 遯 | dùn | mountain (yang) · sky (yang) | mountain ↔ lake × sky ↔ earth | stopping → vigour | **Withdrawal** | deepens | Retreat · Escape · ◇ Receding ✓ · ◇ Keeping Distance ✗ | "A fine withdrawal". Leaves *retreat* for 退 in 進退 | proposed |
| 34 | 大壯 | dà zhuàng | sky (yang) · thunder (yang) | sky ↔ earth × thunder ↔ wind | vigour → moving out | **Great Vigour** | strains | Great Strength · Vigour of the Great · ◇ Great Force ✓ · ◇ Great Strength ✓ strained | 說文 壯: a man in his prime. "Vigour in the toes", "the horse is vigorous" (36, 59). 強 is locked to *strong* | proposed |
| 35 | 晉 | jìn | earth (yin) · fire (yin) | sky ↔ earth × water ↔ fire | going along → attaching | **Progress** | deepens | Advance · Rising · ◇ Rising ✓ · ◇ Sunrise ✗ | Leaves *advance* for 進. 說文: the sun rises and all things go forward | proposed |
| 36 | 明夷 | míng yí | fire (yin) · earth (yin) | water ↔ fire × sky ↔ earth | attaching → going along | **Clarity Wounded** | deepens | Clarity Brought Low · Clarity Hidden · ◇ Clarity Brought Low ✓ strained · ◇ Clarity Hidden ✗ | 明 is locked to *clarity*; 夷于左股 repeats 夷 as a verb, "wounded"; 雜卦 has 誅 | proposed |
| 37 | 家人 | jiā rén | fire (yin) · wind (yin) | water ↔ fire × thunder ↔ wind | attaching → entering | **The Household** | supports | Family · Kin · ◇ Kin ✓ · ◇ The Hearth ✗ | Includes wives, children and dependents; fits 閑有家 and 富家 | proposed |
| 38 | 睽 | kuí | lake (yin) · fire (yin) | mountain ↔ lake × water ↔ fire | releasing → attaching | **Estrangement** | deepens | Divergence · Opposition · Looking Apart · ◇ Looking Apart ✓ · ◇ Drifting Apart ✓ strained | 雜卦 家人內也 / 睽外也: the outside to 37's inside. 說文: eyes that do not heed each other. 睽孤, "estranged and alone" | proposed |
| 39 | 蹇 | jiǎn | mountain (yang) · water (yang) | mountain ↔ lake × water ↔ fire | stopping → sinking in | **Hobbling** | supports | Limping · Halting · Hardship · ◇ Halting ✓ · ◇ Impasse ✗ | 說文 跛, lame. "Going, hobbling; coming, praise". Hobbled legs are tied, which sets up 40's release | proposed |
| 40 | 解 | xiè | water (yang) · thunder (yang) | water ↔ fire × thunder ↔ wind | sinking in → moving out | **Release** | deepens | Loosening · Untying · Deliverance · ◇ Untying ✓ · ◇ Breaking Open ✗ | "Release your big toe"; pardon (赦), escape (免). *Deliverance* has a devotional register | proposed |
| 41 | 損 | sǔn | lake (yin) · mountain (yang) | mountain ↔ lake, **crossed** | releasing → stopping | **Decrease** | deepens | Diminishing · Reduction · ◇ Paring ✓ · ◇ Tribute ✗ | 說文 減. Agrees with the parent project (chs 42 and 48). *Loss* is taken by 喪 | proposed |
| 42 | 益 | yì | thunder (yang) · wind (yin) | thunder ↔ wind, **crossed** | moving out → entering | **Increase** | deepens | Benefit · Gain · Enrichment · ◇ Bestowal ✓ · ◇ Groundwork ✗ | Paired with 41. *Gain* is taken by 得; *benefit* sits too near 利 | proposed |
| 43 | 夬 | guài | sky (yang) · lake (yin) | sky ↔ earth × mountain ↔ lake | vigour → releasing | **Resolve** | deepens | Parting · Breakthrough · Decision · ◇ Clearing ✓ · ◇ Breakthrough ✗ | 夬夬 must double ("resolute, resolute"); Wang Bi 決之不疑. *Seam:* the graph is a split, a breach | proposed |
| 44 | 姤 | gòu | wind (yin) · sky (yang) | thunder ↔ wind × sky ↔ earth | entering → vigour | **Encounter** | supports | Meeting · Coupling · ◇ Chance Meeting ✓ · ◇ Infiltration ✗ | Every Wing glosses 遇. Keeps *meet* free for 遇 itself. *Seam:* 說文 偶, mate | proposed |
| 45 | 萃 | cuì | earth (yin) · lake (yin) | sky ↔ earth × mountain ↔ lake | going along → releasing | **Gathering** | supports | Assembly · Massing · Union · ◇ Muster ✓ · ◇ Confluence ✗ | "Now disorder, now gathering"; stands beside 亂 (*disorder*). 說文: thick grass | proposed |
| 46 | 升 | shēng | wind (yin) · earth (yin) | thunder ↔ wind × sky ↔ earth | entering → going along | **Ascent** | supports | Ascending · Climbing · Rising · ◇ Climbing ✓ · ◇ Sprouting ✗ | "Ascend the steps / into an empty city". The translators agree | proposed |
| 47 | 困 | kùn | water (yang) · lake (yin) | water ↔ fire × mountain ↔ lake | sinking in → releasing | **Hemmed In** | deepens | Confinement · Straits · Exhaustion · ◇ Pressed ✓ · ◇ Drained ✗ | 說文: a tree inside an enclosure. "Hemmed in by wine and food". *Exhaustion* is kept for 窮 | proposed |
| 48 | 井 | jǐng | wind (yin) · water (yang) | thunder ↔ wind × water ↔ fire | entering → sinking in | **The Well** | supports | Wellspring · ◇ The Shaft ✓ · ◇ The Spring ✗ | All three translators, eleven uses. *Wellspring* collides with 泉 | proposed |
| 49 | 革 | gé | fire (yin) · lake (yin) | water ↔ fire × mountain ↔ lake | attaching → releasing | **Shedding** | deepens | Change · Molting · Revolution · ◇ Molting ✓ strained · ◇ Tanning ✗ | 說文: a hide with the hair stripped; 雜卦 去故 ("removes the old"). *Change* collides with 改 and 變 in its own lines | proposed |
| 50 | 鼎 | dǐng | wind (yin) · fire (yin) | thunder ↔ wind × water ↔ fire | entering → attaching | **The Cauldron** | supports | Tripod · Vessel · ◇ The Vessel ✗ lock · ◇ Cooking ✗ | All three translators. 器 is locked to *vessel* | proposed |
| 51 | 震 | zhèn | thunder (yang) · thunder (yang) | thunder ↔ wind, **doubled** | moving out → moving out | **Thunderclap** | strains | Thunder · Shock ✗ · Quake · ◇ Shock ✗ collides · ◇ Peals ✓ strained | 說文 劈歴, the single strike. "The thunderclap comes", "strikes not his body but his neighbour's". Stays distinct from 雷. **Shock collides (2026-09-25):** 驚 stands in 51's own judgment (震驚百里) and the Tao Te Ching renders 驚 *shock* (ch 13) | proposed |
| 52 | 艮 | gèn | mountain (yang) · mountain (yang) | mountain ↔ lake, **doubled** | stopping → stopping | **Stilling** | deepens | Keeping Still · Holding Firm · Stopping · ◇ Keeping Still ✓ · ◇ Summit ✗ | "Stilling his back / toes / jaws". *Keeping Still* works as well; it was barred only as the trigram image. **Collision (2026-09-25):** *still* / *stillness* is the Tao Te Ching's word for 靜 (22×), and *Stopping* is now 止's — every candidate here brushes a word already spoken for; this name needs a deliberate ruling | proposed |
| 53 | 漸 | jiàn | mountain (yang) · wind (yin) | mountain ↔ lake × thunder ↔ wind | stopping → entering | **By Degrees** | supports | Gradual Advance · By Stages · ◇ Gradual Advance ✓ · ◇ Rooting ✗ | The manner, not the motion (坤文言 其所由來者漸矣). Keeps clear of 35 and 46 | proposed |
| 54 | 歸妹 | guī mèi | lake (yin) · thunder (yang) | mountain ↔ lake × thunder ↔ wind | releasing → moving out | **The Younger Sister's Marriage** | supports | The Younger Sister Given in Marriage · Marrying Off the Younger Sister · The Marrying Maiden · ◇ Given in Marriage ✓ · ◇ Consent ✗ | Keeps 妹 ("younger sister") and the 娣 system the lines depend on. Long | proposed |
| 55 | 豐 | fēng | fire (yin) · thunder (yang) | water ↔ fire × thunder ↔ wind | attaching → moving out | **Abundance** | deepens | Fullness · Plenty · ◇ Fullness ✓ · ◇ Noon ✗ | 說文: a ritual dish heaped full. *Great* is locked to 大. *Seam:* the 彖 argues fullness at noon, just before decline | proposed |
| 56 | 旅 | lǚ | mountain (yang) · fire (yin) | mountain ↔ lake × water ↔ fire | stopping → attaching | **The Traveller** | supports | The Stranger · The Sojourner · The Wanderer · ◇ The Guest ✓ · ◇ Wildfire ✗ | Subject of every line (burns his lodging). *Sojourner* is chiefly biblical | proposed |
| 57 | 巽 | xùn | wind (yin) · wind (yin) | thunder ↔ wind, **doubled** | entering → entering | **Kneeling** | deepens | Lying Low · Yielding · Submission · Entering · ◇ Getting Under ✓ · ◇ Pervading ✗ | "Kneeling beneath the couch", "kneeling again and again". 雜卦 巽伏. **Corrected 2026-09-25:** this said "說文: two kneeling figures" — wrong. 說文 glosses 巽 as 具也, "set out, made ready", and treats the doubled figure only as the sound; the kneeling figures are a modern reading of the graph. *Kneeling* stands on the lines, not the dictionary | proposed |
| 58 | 兌 | duì | lake (yin) · lake (yin) | mountain ↔ lake, **doubled** | releasing → releasing | **Delight** | strains | Talk · Pleasing · Gladness · ◇ Talk ✓ · ◇ Opening ✗ | Takes every modifier (harmonious delight, delight that comes). *Live fork:* 說 read as speech gives *Talk*, which also fits every line | proposed |
| 59 | 渙 | huàn | water (yang) · wind (yin) | water ↔ fire × thunder ↔ wind | sinking in → entering | **Scattering** | supports | Dispersal · Dissolving · Flowing Out · ◇ Dissolving ✓ · ◇ Thawing ✗ | Transitive: scatter his flock, his blood. 雜卦 pairs it with 60 (渙離也，節止也) | proposed |
| 60 | 節 | jié | lake (yin) · water (yang) | mountain ↔ lake × water ↔ fire | releasing → sinking in | **Restraint** | strains | Measure · Limits · Joints · ◇ Measure ✓ · ◇ Capacity ✗ | "Bitter / sweet restraint"; "does not know restraint" (64's 小象). 說文: the bamboo joint | proposed |
| 61 | 中孚 | zhōng fú | lake (yin) · wind (yin) | mountain ↔ lake × thunder ↔ wind | releasing → entering | **Confidence Within** | strains | Inner Confidence · Truth Within · Holding True · The Hatching · see § pending · ◇ Brooding Within ✓ · ◇ The Answer Within ✗ | 雜卦 中孚信也, but 信 is locked to *trust*, with *sincerity* and *faith* forbidden. **Waits on 孚** (A6) | pending |
| 62 | 小過 | xiǎo guò | mountain (yang) · thunder (yang) | mountain ↔ lake × thunder ↔ wind | stopping → moving out | **Small Exceeding** | supports | Small Excess · Small Overstepping · ◇ Small Overstepping ✓ · ◇ Flying Low ✗ | 彖 小者過, so 小 is the subject, not "slightly" | proposed |
| 63 | 既濟 | jì jì | fire (yin) · water (yang) | water ↔ fire, **crossed** | attaching → sinking in | **Already Across** | deepens | Crossing Complete · After the Crossing · Completion · ◇ Arrived ✓ · ◇ Settled ✗ | Keeps the fox and the river. Pairs with 64 | proposed |
| 64 | 未濟 | wèi jì | water (yang) · fire (yin) | water ↔ fire, **crossed** | sinking in → attaching | **Not Yet Across** | deepens | Crossing Incomplete · Unfinished · ◇ Unfinished ✓ · ◇ Parting ✗ | "Not yet across: setting out is ominous" (64.3) | proposed |

## The five that wait on a ruling

**None of these can be settled by choosing a better word.** Each waits on a decision about a
graph that recurs through the whole book, and the name has to use whatever that decision gives
it — [`repeat-yourself`](https://github.com/opencosmos-ai/taoteching) applies.

### 11 泰 (*tài*) and 12 否 (*pǐ*) — wait on 亨 (*hēng*)

**What the Chinese says.** 泰：小往大來，吉亨 — "泰: the small goes, the great comes; auspicious,
亨." 否之匪人，不利君子貞，大往小來 — "否 it: not the right people; not favourable to the noble
one's 貞 (*zhēn*); the great goes, the small comes." The two are one figure turned over, and 雜卦
(*záguà*) says so: 否、泰，反其類也, "否 and 泰 reverse their kinds."

**What the graphs picture.** 泰: 說文 滑也, "slippery, smooth" — two hands and water, water running
through the hands. 否: 不也, "no" — a mouth and the negative.

**What the Wings make of them.** 序卦 (*xùguà*) 泰者通也, "泰 is getting through"; the 彖
(*tuàn*) 天地交而萬物通, "sky and earth meet and the countless things get through" — and for 否 the
exact negation, 天地不交而萬物不通.

**Why it waits.** 亨 (48× in the core) is the word the book will most likely render as
*getting through* — Legge's "successful progress" is that reading — and 泰's own judgment ends
吉亨. If 亨 takes a flow word, **a flow word for 泰 duplicates it in the same sentence.** If 亨
takes the older, sacrificial reading (the graph is shared with 享, *make an offering*), the flow
words are free.

| If 亨 becomes… | 11 泰 | 12 否 |
|---|---|---|
| an offering word (*offering*, *offering accepted*) | **Flow** · Passage · Free Flow | **Blockage** · Stagnation |
| a getting-through word (*gets through*, *passage*) | **Meeting** (sky and earth meet — 天地交) · Openness | **Parting** · Closing · Standstill |
| either | *Peace* is a weak candidate: 序卦 has 履而泰，然後安 — "tread, and 泰; only then settled (安)" — so it treats being settled as what **follows** 泰 | *Stagnation* keeps 泰's water image: water that stops running |

**Recommendation:** decide 亨 first (A6); then **Flow / Stagnation** or **Flow / Blockage** if it
is free, **Meeting / Parting** if not.

### 14 大有 (*dà yǒu*) — waits on what 有 (*yǒu*) is here

**What the lock says.** 無 & 有 are locked together in the parent project to *absence / presence*,
forbidding *Being, Non-Being, existence, the Void, nothingness*. That lock was made for the Tao Te
Ching's philosophical pair.

**What this book does with 有.** **120 times in the core text**, almost always "there is / has":
有孚 (26×), 利有攸往 ("it is favourable to have somewhere to go", 13×), 有言, 有終. Read *presence*
into those and the lines stop being English. So the lock's forbidden words bind here — nobody wants
*Great Being* — but its positive rendering does not describe this book's 有. **"Great Presence"
would pass the checker and fail the register rule**; it reads as modern spiritual idiom.

**What is actually open is what is had.**

| Reading | Evidence | English |
|---|---|---|
| possessions, holdings | 大車以載, "a big cart, loaded"; Wang Bi 大有豐富之世, "an age of plenty and wealth" | **Great Possession** · Great Holdings · Great Having |
| a harvest | 有 in early usage marks a harvest year (有年 — outside the Zhouyi, not in the vendored text); the 公 (*gōng*, "lord") offers to the 天子 (*tiānzǐ*) in line 3 | **Great Harvest** |
| the many who come | 雜卦 大有眾也, "大有 is the many"; 序卦 物必歸焉, "things come home to it" | Great Gathering *(collides with 45)* · Much Following |

**Recommendation:** **Great Possession**, with *Great Harvest* the live alternative. Record in
the glossary that the 有 lock binds by its forbidden list only in this book.

### 25 无妄 (*wú wàng*) — waits on WORKLIST A11

**What the graphs say.** 无 is the Zhouyi's negative (158× in the core); 妄 is 說文 亂也,
"disorder" — acting wildly, beyond what is fitting. So: *without wildness*.

**Why it waits — and how little it matters for the name.** A11 asks whether the lock on 無 binds
the Zhouyi's 无. **None of the candidates below uses a forbidden word**, so the lock cannot decide
the name either way. What it decides is whether the *absence* has to be visible in the English —
which is really a question about 无咎 (92×), and the name should follow that.

**The live question is meaning, and the witnesses split from the Wings:**

| Reading | Evidence | English |
|---|---|---|
| a moral state: without wildness, without falseness | all three translators (Legge "free from insincerity", de Harlez "conduite irréprochable", McClatchie "faultlessness"); 序卦 復則不妄矣 | **Innocence** · Without Recklessness · Without Pretence · Guilelessness |
| an event: the unexpected | 雜卦 无妄災也, "无妄 is calamity"; lines 3 and 5 (无妄之災, 无妄之疾 — "the calamity / illness of 无妄"); the 史記's variant 無望, "unlooked-for" (not vendored) | The Unexpected · The Unforeseen |

*Innocence* holds both: an innocent is one who did nothing wild, and an innocent's calamity is an
undeserved one. It carries its own negative (Latin *in-nocens*, "not harming"). *Blameless* and
*Faultless* are out — 无咎 sits in this hexagram's own line 4.

**Recommendation:** **Innocence**, pending A11 only to confirm the absence need not be visible.

### 61 中孚 (*zhōng fú*) — waits on 孚 (*fú*)

**The first constraint is a lock nobody had noticed.** 雜卦 glosses the name 中孚信也 — "中孚 is
信 (*xìn*)" — and 信 is locked in the parent project to ***trust / trustworthy***, forbidding
*faith*, *sincerity* and *belief*. So the three obvious Englishes for 孚 are already spoken for or
forbidden. **"Trust Within", the first draft of this name, collides with that lock** and is
withdrawn.

**What the graph pictures.** 說文 卵孚也 — "brooding on eggs"; a hand (爪) over a child (子). It is
shared with 俘, *a captive*. The hexagram's own lines are full of birds (鳴鶴在陰，其子和之, "a
crane calls in the shade, its young answer"), and its 大象 is about law courts and executions
(議獄緩死) — so the concrete readings both have support inside 61.

**Why it waits.** 孚 is 42× in the core, 26 of them as 有孚. Whatever it becomes, it becomes
everywhere, and this name has to use it.

| If 孚 becomes… | 中孚 |
|---|---|
| an inward word — confidence, being true | **Confidence Within** · Inner Confidence · Truth Within · Holding True |
| a proof or pledge | The Pledge Within · Proof at the Centre |
| the brooding graph | The Hatching · Brooding Within *(English "brooding" also means moody)* |
| a captive | *no plausible name* — every Wing reads 61 inwardly; this is where the declared lens of ADR 0016 would have to carry the name |

**Recommendation:** decide 孚 (A6) with 信's lock in view; **Confidence Within** if it goes inward.

## The pattern in the formation

**Research, 2026-09-24 — every count below was computed from `generated/iching-data.ts` and
`sources/`, and is recomputable.** It answers the question *are the 64 built from four pairs of
qualities on four spectrums?* — yes, at the level of the trigrams, and more exactly than that.

### Four spectrums, two poles each

**繫辭上 (*xìcí shàng*) gives the generation as a doubling**: 易有太極，是生兩儀，兩儀生四象，
四象生八卦 — "the Yi has a great pole; it gives rise to two forms, the two to four images, the four
to eight trigrams." One line has two values; three lines have eight.

**The eight are four exact complements** — flip every line of one and you get its partner — and
說卦 ch 3 arranges them as precisely those four pairs: 天地定位，山澤通氣，雷風相薄，水火不相射
(see [`the-8-trigrams-are-arranged-in-4-pairs`](principles/the-8-trigrams-are-arranged-in-4-pairs.md)).
說卦 ch 7 then gives each an action, and **the actions pair on the same four axes**.

**One logic defines all four: where the odd line sits.** Sky and earth have none — every line is
the same. In the other six, one line differs from the other two, and each spectrum is that odd
line at one height: **the bottom** for thunder ↔ wind, **the middle** for water ↔ fire, **the top**
for mountain ↔ lake. Each pair can then be read at three levels, and the three agree. *(The
Chinese in each cell is the text; the bold English is this brief's reading of it. **↔ joins
figures, which are true opposites; · separates each pole's own word**, which is not its partner's
antonym — see [`README.md` → *The polarity is in the lines*](README.md#the-polarity-is-in-the-lines).)*

| Spectrum | Odd line | Figure (bottom → top) | Action (說卦 ch 7) | Image (說卦 ch 3) |
|---|---|---|---|---|
| sky ↔ earth | none | `111` ↔ `000` — **all firm ↔ all yielding** | 健 (*jiàn*) · 順 (*shùn*) — **vigour · going along** | 天 ↔ 地, 定位 — **above · below**: "they set the positions" |
| thunder ↔ wind | bottom | `100` ↔ `011` — **firm at the base ↔ open at the base** | 動 (*dòng*) · 入 (*rù*) — **moving out · entering** | 雷 ↔ 風, 相薄 — **the strike · the pervading**: "they rouse each other" |
| water ↔ fire | middle | `010` ↔ `101` — **firm within ↔ hollow within** | 陷 (*xiàn*) · 麗 (*lì*) — **sinking in · attaching** | 水 ↔ 火, 不相射 — **descending · rising**: "they do not quench each other" |
| mountain ↔ lake | top | `001` ↔ `110` — **closed at the top ↔ open at the top** | 止 (*zhǐ*) · 說 (*yuè*) — **stopping · releasing** | 山 ↔ 澤, 通氣 — **height · hollow**: "they exchange breath" |

**How the figure reads, pair by pair.** Thunder is a firm line under two open ones — force at the
base breaking upward; wind is an open line under two firm ones — something yielding that slips in
underneath. Water is a firm line held inside open ones — the strength (and the hazard) hidden in the
middle; fire is an open line inside firm ones — a hollow centre, bright at the edges, needing
something to attach to. Mountain is two open lines capped by a firm one — a lid, a ridge; lake is two
firm lines under an open one — a basin, a mouth.

**Mountain ↔ lake is the one that needs its Chinese to read clearly, because 說 is usually glossed
*delight*.** In the Zhouyi's own lines 說 most often means **to loosen, let go** (the sense later
written 脫, *tuō*): 用說桎梏 "use it to take off the fetters" (4), 輿說輻 / 輿說輹 "the cart sheds its
spokes / its axle-strap" (9, 26), 後說之弧 "then lays down the bow" (38). Delight is release felt
from the inside, and 說 as *shuō* is speech — the mouth opening. 說卦's lists agree: 兌 為口舌, 為巫
("mouth and tongue", "the one who speaks for the spirits"); 艮 為門闕, 為閽寺, 為手 ("gate-towers",
"the gatekeeper", "the hand"). **What shuts and what opens.** And it is the only pair 說卦 describes
as trading (通氣) — on the usual reading, vapour rising from the lake to the peaks and springs running
down from the mountain into the lake. The same breadth of 說 is behind 58 兌's open fork between
*Delight* and *Talk*.

**A hexagram is one trigram within (below) and one without (above)** — eight by eight, every
combination exactly once. So every hexagram is **a pole of one spectrum inside a pole of another**,
and the 64 fall into three classes:

| Class | Count | Hexagrams |
|---|---|---|
| **doubled** — one pole, twice | 8 | 1 乾, 2 坤, 29 坎, 30 離, 51 震, 52 艮, 57 巽, 58 兌 |
| **crossed** — both poles of one spectrum | 8 | 11 泰, 12 否, 31 咸, 32 恆, 41 損, 42 益, 63 既濟, 64 未濟 |
| **two spectrums** | 48 | the rest |

### The received order is framed by those sixteen

The received text divides after 30 into an upper and a lower canon, and **the sixteen single-spectrum
hexagrams frame both halves**:

- **The upper canon (1–30) opens with sky and earth doubled and closes with water and fire
  doubled.** All four sky ↔ earth hexagrams are in it (1, 2, 11, 12).
- **The lower canon (31–64) opens with mountain ↔ lake and thunder ↔ wind crossed (31, 32) and
  closes with water ↔ fire crossed (63, 64).** All eight hexagrams of those two spectrums are in it
  (31, 32, 41, 42, 51, 52, 57, 58).
- **Water ↔ fire is the hinge**: doubled at the end of the first half, crossed at the end of the
  second.

**And the order pairs every hexagram with its neighbour**: 28 of the 32 pairs are one figure turned
upside down; the other 4 (1/2, 27/28, 29/30, 61/62) are the only figures that read the same upside
down, and they pair by complement instead. (`npm run check` already enforces this.)

### The Wings read each hexagram as a signature

**The 彖 reads at least 33 of the 64 as *inner action + outer action***, always bottom first:
蒙 險而止 ("sinking within, stopping without"), 隨 動而說, 豫 順以動, 咸 止而說, 恆 巽而動,
夬 健而說, 歸妹 說以動 … The 大象 reads the same pair as **images in space**: 山上有澤, "a lake on
the mountain" (咸). So each hexagram has two signatures in the oldest commentary — an image
relation and an action relation — and both come straight out of the formation.

**For two of the four spectrums the crossed pairs also carry a direction.** Sky rises and earth
sinks; fire rises and water sinks. Put the rising one below and the sinking one above, and they
move into each other — 11 泰 (彖 天地交, "sky and earth meet") and 63 既濟 (水在火上, water over
fire: cooking). Reverse them and they part — 12 否 (天地不交) and 64 未濟. **It does not work as
simply for thunder ↔ wind and mountain ↔ lake**: there the 彖 argues by exchange instead — 41 損
損下益上, "decrease below, increase above", and 42 益 the reverse.

**A second, older-sounding formation sits beside it.** 說卦 ch 2: 立天之道曰陰與陽，立地之道曰柔與剛，
立人之道曰仁與義。兼三才而兩之，故易六畫而成卦 — "the way of sky is yin and yang, of earth soft and
firm, of people 仁 and 義; take the three powers and double them, so the Yi makes a figure of six
lines." That is **three pairs** — lines 1–2 earth, 3–4 person, 5–6 sky — rather than two trigrams,
and it is the ground of reading a line by its position.

### How this can serve the translation — and where it must not

**The signature may suggest a candidate; only the lines admit it** (Shalom, 2026-09-24). Every name
in this file can be read against its signature: 31 *Touch* against 止而說 ("stopping within,
releasing without"), 17 *Following* against 動而說, 39 *Hobbling* against 險 ahead and 止 below
(彖 見險而能止). A name its signature cannot account for is worth a second look, and a word the
signature suggests is worth trying. But the signature is commentary, the shape of an answer, and
ruling 1 above says the name comes from **the lines** — so a suggested word is admitted only once
it works where the character stands in the judgment and the six lines
([`read-a-figure-through-its-spectrums`](principles/read-a-figure-through-its-spectrums.md),
[`a-source-shaped-like-your-answer`](principles/a-source-shaped-like-your-answer.md)). Each
hexagram's file carries its signature reading and the candidates it suggests, tested.

**Three limits, stated so they are not forgotten:**

1. **This is the Wings' reading of the book.** The judgments and line texts almost never mention a
   trigram; whether the figures were *composed* from trigrams or the trigrams were *found* in them
   later is not settled, and ADR 0016 (WORKLIST A10) is the open ruling on declaring that lens.
2. **The five phases (五行 — wood, fire, earth, metal, water) are not this system.** Their mapping
   onto the trigrams is Han-era, later than every Wing vendored here, and it cuts across 說卦's
   four pairs: it puts 乾 with 兌 and 坤 with 艮, and only thunder ↔ wind (both *wood*) survives as
   a pair. Mixing it in imports a second cosmology.
3. **The canon frame is a fact about the received order**, and the Mawangdui silk manuscript runs
   the hexagrams in a different order entirely (see [`README.md`](README.md#what-is-not-here-and-why)).
   It says how the book was arranged, not how the figures were made.

**Worth building, if Shalom wants it:** a signature column — the 彖's action pair and the 大象's image
relation for all 64, pulled from `sources/` by script — beside the names in this table. It would
make the check above systematic rather than remembered.
