### Roster Details<br />
Team Name: WW TEAM<br />
Roster: ct0m, deko, kelieN, m3wsu, StRoGo<br />
Global Rank: [90](../../standings_global_2026_07_12.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_07_12.md)<br />
Regional Rank: [63]( ../../standings_europe_2026_07_12.md)<br />
<br />
Final Rank Value:  1008.8<br />
<br />
Final Rank Value (1008.8) = Starting Rank Value (1024.0) + Head To Head Adjustments (-15.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.355[<sup>1</sup>](#table2)
- Bounty Collected: 0.355[<sup>2</sup>](#table1)
- Opponent Network: 0.177[<sup>2</sup>](#table1)
- LAN Wins: 0.430[<sup>2</sup>](#table1)

The average of these factors is 0.329<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1024.0
- 400 + ( ( 0.329 - 0.000 ) / ( 0.844 - 0.000 ) ) * 1600 = 1024.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.449
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           68 |      364 | 2026-06-19 | CYBERSHOKE Esports      | L   | 1.000      | -            | -                | -                | -         |   -13.03 | ct0m, kelieN, KENSi, m3wsu, tried    |
|           67 |      824 | 2026-05-30 | Gentle Mates            | L   | 0.911      | -            | -                | -                | -         |    -5.58 | ct0m, deko, kelieN, m3wsu, StRoGo    |
|           66 |      845 | 2026-05-30 | Johnny Speeds           | W   | 0.909      | 0.384        | 0.047 (0.016)    | 0.749 (0.262)    | -         |    17.03 | ct0m, deko, kelieN, m3wsu, StRoGo    |
|           65 |      873 | 2026-05-29 | Nemiga Gaming           | W   | 0.903      | 0.384        | 0.108 (0.038)    | 0.746 (0.259)    | -         |    22.11 | ct0m, deko, kelieN, m3wsu, StRoGo    |
|           64 |      903 | 2026-05-28 | Ex-RUBY                 | W   | 0.898      | 0.384        | 0.036 (0.012)    | 1.000 (0.345)    | -         |    16.91 | ct0m, deko, kelieN, m3wsu, StRoGo    |
|           63 |     1019 | 2026-05-25 | PsychoFace              | L   | 0.879      | -            | -                | -                | -         |   -14.63 | ct0m, deko, kelieN, m3wsu, StRoGo    |
|           62 |     1021 | 2026-05-25 | K27                     | L   | 0.879      | -            | -                | -                | -         |    -5.42 | ct0m, deko, kelieN, m3wsu, StRoGo    |
|           61 |     1028 | 2026-05-25 | Team Tricksters         | W   | 0.878      | -            | -                | -                | 1 (0.878) |     1.83 | ct0m, deko, kelieN, m3wsu, StRoGo    |
|           60 |     2913 | 2026-04-02 | AKPO6ATbI               | L   | 0.523      | -            | -                | -                | -         |   -15.05 | ct0m, deko, kelieN, m3wsu, StRoGo    |
|           59 |     3016 | 2026-04-01 | Bebop                   | L   | 0.516      | -            | -                | -                | -         |   -12.11 | ct0m, deko, kelieN, m3wsu, StRoGo    |
|           58 |     3018 | 2026-04-01 | Illwill                 | W   | 0.516      | 0.769        | 0.018 (0.007)    | -                | -         |     5.87 | ct0m, deko, kelieN, m3wsu, StRoGo    |
|           57 |     3098 | 2026-03-31 | K27                     | L   | 0.510      | -            | -                | -                | -         |    -3.13 | ct0m, deko, kelieN, m3wsu, StRoGo    |
|           56 |     3338 | 2026-03-28 | Megoshort               | L   | 0.490      | -            | -                | -                | -         |   -12.82 | ct0m, deko, kelieN, m3wsu, StRoGo    |
|           55 |     3443 | 2026-03-25 | Endless Journey         | W   | 0.472      | -            | -                | -                | -         |     2.28 | ct0m, deko, kelieN, m3wsu, StRoGo    |
|           54 |     3458 | 2026-03-25 | SPARTA Esports          | W   | 0.471      | 0.624        | 0.025 (0.007)    | 0.752 (0.221)    | -         |     8.27 | ct0m, deko, kelieN, m3wsu, StRoGo    |
|           53 |     4075 | 2026-03-13 | Team Nemesis            | L   | 0.391      | -            | -                | -                | -         |    -1.86 | ct0m, deko, kelieN, m3wsu, StRoGo    |
|           52 |     4121 | 2026-03-12 | K27                     | L   | 0.385      | -            | -                | -                | -         |    -2.71 | ct0m, deko, kelieN, m3wsu, StRoGo    |
|           51 |     4138 | 2026-03-12 | Nemiga Gaming           | W   | 0.383      | 0.371        | 0.108 (0.015)    | 0.746 (0.106)    | 1 (0.383) |     8.03 | ct0m, deko, kelieN, m3wsu, StRoGo    |
|           50 |     4174 | 2026-03-11 | Nuclear TigeRES         | W   | 0.378      | 0.371        | 0.079 (0.011)    | 0.786 (0.110)    | 1 (0.378) |     9.02 | ct0m, deko, kelieN, m3wsu, StRoGo    |
|           49 |     4211 | 2026-03-10 | Los kogutos             | W   | 0.371      | 0.384        | -                | 0.940 (0.134)    | -         |     4.40 | ct0m, deko, kelieN, m3wsu, StRoGo    |
|           48 |     4245 | 2026-03-09 | K27                     | W   | 0.365      | 0.371        | 0.082 (0.011)    | -                | 1 (0.365) |     9.19 | ct0m, deko, kelieN, m3wsu, StRoGo    |
|           47 |     4262 | 2026-03-09 | Arch Esports            | W   | 0.364      | -            | -                | -                | 1 (0.364) |     1.46 | ct0m, deko, kelieN, m3wsu, StRoGo    |
|           46 |     4362 | 2026-03-08 | FUZOS                   | W   | 0.357      | -            | -                | -                | -         |     1.71 | ct0m, deko, kelieN, m3wsu, StRoGo    |
|           45 |     4399 | 2026-03-07 | Clutchain Female        | W   | 0.351      | -            | -                | -                | -         |     1.81 | ct0m, deko, kelieN, m3wsu, StRoGo    |
|           44 |     4423 | 2026-03-06 | ARCRED                  | L   | 0.346      | -            | -                | -                | -         |    -3.76 | ct0m, deko, kelieN, m3wsu, StRoGo    |
|           43 |     4426 | 2026-03-06 | SPARTA Esports          | W   | 0.345      | -            | -                | -                | 1 (0.345) |     7.00 | ct0m, deko, kelieN, m3wsu, StRoGo    |
|           42 |     4438 | 2026-03-06 | ARCRED                  | L   | 0.344      | -            | -                | -                | -         |    -3.75 | ct0m, deko, kelieN, m3wsu, StRoGo    |
|           41 |     4454 | 2026-03-06 | Eternal Fire            | L   | 0.343      | -            | -                | -                | -         |    -4.68 | ct0m, deko, kelieN, m3wsu, StRoGo    |
|           40 |     4459 | 2026-03-05 | Virtus.pro              | W   | 0.340      | -            | -                | -                | 1 (0.340) |     8.36 | ct0m, deko, kelieN, m3wsu, StRoGo    |
|           39 |     4482 | 2026-03-05 | TDK                     | W   | 0.338      | 0.333        | 0.058 (0.006)    | 0.957 (0.108)    | 1 (0.338) |     7.74 | ct0m, deko, kelieN, m3wsu, StRoGo    |
|           38 |     4527 | 2026-03-04 | HEROIC Academy          | L   | 0.332      | -            | -                | -                | -         |    -7.57 | ct0m, deko, kelieN, m3wsu, StRoGo    |
|           37 |     4569 | 2026-03-03 | Premghouls              | W   | 0.326      | -            | -                | -                | 1 (0.326) |     0.71 | ct0m, deko, kelieN, m3wsu, StRoGo    |
|           36 |     4577 | 2026-03-03 | G2 Ares                 | L   | 0.325      | -            | -                | -                | -         |    -5.57 | ct0m, degster, kelieN, m3wsu, StRoGo |
|           35 |     4591 | 2026-03-03 | Nemiga Gaming           | L   | 0.324      | -            | -                | -                | -         |    -3.16 | ct0m, deko, kelieN, m3wsu, StRoGo    |
|           34 |     4596 | 2026-03-03 | Ex-Zero Tenacity        | L   | 0.323      | -            | -                | -                | -         |    -7.66 | ct0m, deko, kelieN, m3wsu, StRoGo    |
|           33 |     4605 | 2026-03-03 | B52                     | W   | 0.323      | -            | -                | -                | 1 (0.323) |     0.35 | ct0m, deko, kelieN, m3wsu, StRoGo    |
|           32 |     4608 | 2026-03-03 | FUZOS                   | W   | 0.323      | -            | -                | -                | -         |     1.49 | ct0m, deko, kelieN, m3wsu, StRoGo    |
|           31 |     4629 | 2026-03-02 | SPARTA Esports          | W   | 0.318      | -            | -                | -                | -         |     0.66 | ct0m, deko, KENSi, StRoGo, tried     |
|           30 |     4639 | 2026-03-02 | ECSTATIC                | L   | 0.317      | -            | -                | -                | -         |    -5.63 | ct0m, deko, kelieN, m3wsu, StRoGo    |
|           29 |     4649 | 2026-03-02 | Oxuji Esports           | L   | 0.316      | -            | -                | -                | -         |    -2.96 | ct0m, kelieN, m3wsu, StRoGo, tried   |
|           28 |     4692 | 2026-03-01 | ENCE                    | L   | 0.309      | -            | -                | -                | -         |    -7.76 | ct0m, deko, kelieN, m3wsu, StRoGo    |
|           27 |     4716 | 2026-02-28 | UNiTY esports           | L   | 0.304      | -            | -                | -                | -         |    -7.63 | ct0m, deko, kelieN, m3wsu, StRoGo    |
|           26 |     4726 | 2026-02-28 | KOLESIE                 | L   | 0.303      | -            | -                | -                | -         |    -7.57 | ct0m, deko, kelieN, m3wsu, StRoGo    |
|           25 |     4752 | 2026-02-27 | Leo Team                | W   | 0.298      | -            | -                | -                | -         |     1.59 | ct0m, kelieN, m3wsu, StRoGo, tried   |
|           24 |     4773 | 2026-02-27 | Leo Team                | W   | 0.297      | -            | -                | -                | -         |     1.60 | ct0m, deko, kelieN, m3wsu, StRoGo    |
|           23 |     4813 | 2026-02-26 | SINNERS Esports         | L   | 0.292      | -            | -                | -                | -         |    -2.22 | ct0m, deko, kelieN, m3wsu, StRoGo    |
|           22 |     4879 | 2026-02-25 | Team Nemesis            | W   | 0.284      | 0.435        | 0.229 (0.028)    | 0.950 (0.117)    | -         |     7.64 | ct0m, deko, kelieN, m3wsu, tried     |
|           21 |     4925 | 2026-02-24 | Lazer Cats              | W   | 0.278      | -            | -                | -                | -         |     1.73 | ct0m, deko, kelieN, m3wsu, StRoGo    |
|           20 |     4941 | 2026-02-24 | Hashiras                | W   | 0.277      | -            | -                | -                | -         |     1.58 | ct0m, deko, kelieN, m3wsu, StRoGo    |
|           19 |     4980 | 2026-02-23 | Ex-RUBY                 | L   | 0.270      | -            | -                | -                | -         |    -5.37 | ct0m, deko, kelieN, m3wsu, tried     |
|           18 |     5116 | 2026-02-21 | SPARTA Esports          | W   | 0.256      | -            | -                | -                | -         |     0.44 | ct0m, deko, kelieN, m3wsu, tried     |
|           17 |     5132 | 2026-02-20 | Ex-RUBY                 | W   | 0.252      | 0.435        | -                | 1.000 (0.109)    | -         |     3.06 | ct0m, deko, kelieN, m3wsu, StRoGo    |
|           16 |     5166 | 2026-02-20 | Cirahvi                 | W   | 0.249      | -            | -                | -                | -         |     1.24 | ct0m, deko, kelieN, m3wsu, tried     |
|           15 |     5185 | 2026-02-19 | Players (European team) | W   | 0.245      | -            | -                | -                | -         |     0.46 | ct0m, deko, kelieN, m3wsu, StRoGo    |
|           14 |     5268 | 2026-02-18 | OMEGA                   | W   | 0.236      | -            | -                | -                | -         |     4.53 | ct0m, deko, kelieN, m3wsu, StRoGo    |
|           13 |     5296 | 2026-02-17 | INOX Division           | L   | 0.232      | -            | -                | -                | -         |    -4.98 | ct0m, deko, kelieN, m3wsu, StRoGo    |
|           12 |     5306 | 2026-02-17 | Bushido Wildcats        | W   | 0.231      | -            | -                | -                | -         |     1.36 | ct0m, deko, kelieN, m3wsu, StRoGo    |
|           11 |     5359 | 2026-02-16 | Just Players            | W   | 0.224      | -            | -                | -                | -         |     0.86 | ct0m, deko, kelieN, m3wsu, StRoGo    |
|           10 |     5401 | 2026-02-15 | Ex-Partizan Esports     | W   | 0.218      | -            | -                | -                | -         |     0.21 | ct0m, deko, kelieN, m3wsu, StRoGo    |
|            9 |     5414 | 2026-02-15 | Hashiras                | W   | 0.218      | -            | -                | -                | -         |     1.26 | ct0m, deko, kelieN, m3wsu, StRoGo    |
|            8 |     5473 | 2026-02-14 | DragonClaw              | L   | 0.211      | -            | -                | -                | -         |    -4.41 | ct0m, deko, kelieN, m3wsu, StRoGo    |
|            7 |     5529 | 2026-02-13 | Lazer Cats              | W   | 0.204      | -            | -                | -                | -         |     1.27 | ct0m, deko, kelieN, m3wsu, StRoGo    |
|            6 |     5776 | 2026-02-06 | Rebels Gaming           | L   | 0.156      | -            | -                | -                | -         |    -2.00 | ct0m, kelieN, m3wsu, StRoGo, tried   |
|            5 |     5854 | 2026-02-03 | Clutchain Female        | W   | 0.136      | -            | -                | -                | -         |     0.68 | ct0m, deko, kelieN, m3wsu, StRoGo    |
|            4 |     5888 | 2026-02-02 | Aurora Young Blud       | L   | 0.129      | -            | -                | -                | -         |    -3.74 | ct0m, deko, kelieN, m3wsu, StRoGo    |
|            3 |     5926 | 2026-01-31 | RUSTEC                  | L   | 0.120      | -            | -                | -                | -         |    -2.98 | ct0m, deko, kelieN, m3wsu, tried     |
|            2 |     5932 | 2026-01-31 | Virtus.pro              | W   | 0.118      | -            | -                | -                | -         |     0.20 | ct0m, deko, kelieN, m3wsu, tried     |
|            1 |     5955 | 2026-01-31 | ARCRED                  | L   | 0.116      | -            | -                | -                | -         |    -1.44 | ct0m, deko, kelieN, m3wsu, StRoGo    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($8,097.08)
- Divide that value by the 5th highest value among all rosters ($534,654.57)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-05-30 |      0.911 | $5,000.00      | $4,555.56       |
| 2026-03-12 |      0.385 | $5,000.00      | $1,925.00       |
| 2026-03-06 |      0.346 | $2,500.00      | $864.58         |
| 2026-03-01 |      0.312 | $500.00        | $155.83         |
| 2026-02-27 |      0.298 | $2,000.00      | $596.11         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
