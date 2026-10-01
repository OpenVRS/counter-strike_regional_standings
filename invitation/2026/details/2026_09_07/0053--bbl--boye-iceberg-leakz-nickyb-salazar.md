### Roster Details<br />
Team Name: BBL<br />
Roster: Boye, IceBerg, leakz, NickyB, salazar<br />
Global Rank: [53](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_09_07.md)<br />
Regional Rank: [40]( ../../standings_europe_2026_09_07.md)<br />
<br />
Final Rank Value:  1136.5<br />
<br />
Final Rank Value (1136.5) = Starting Rank Value (1155.8) + Head To Head Adjustments (-19.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.406[<sup>1</sup>](#table2)
- Bounty Collected: 0.392[<sup>2</sup>](#table1)
- Opponent Network: 0.196[<sup>2</sup>](#table1)
- LAN Wins: 0.594[<sup>2</sup>](#table1)

The average of these factors is 0.397<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1155.8
- 400 + ( ( 0.397 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 1155.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           57 |       15 | 2026-09-06 | SINNERS           | L   | 1.000      | -            | -                | -                | -         |   -18.47 | Boye, IceBerg, leakz, NickyB, salazar |
|           56 |       22 | 2026-09-06 | UPGRADE           | W   | 1.000      | -            | -                | -                | -         |    10.13 | Boye, IceBerg, leakz, NickyB, salazar |
|           55 |       40 | 2026-09-05 | fnatic            | L   | 1.000      | -            | -                | -                | -         |    -8.72 | Boye, IceBerg, leakz, NickyB, salazar |
|           54 |       79 | 2026-09-04 | Walczaki          | W   | 1.000      | -            | -                | -                | -         |     8.47 | Boye, IceBerg, leakz, NickyB, salazar |
|           53 |      219 | 2026-08-31 | Black Phoenix     | L   | 1.000      | -            | -                | -                | -         |   -23.31 | Boye, IceBerg, leakz, NickyB, salazar |
|           52 |      531 | 2026-08-24 | CYBERSHOKE        | L   | 1.000      | -            | -                | -                | -         |   -21.44 | Boye, IceBerg, leakz, NickyB, salazar |
|           51 |      907 | 2026-08-09 | GenOne            | L   | 1.000      | -            | -                | -                | -         |   -19.99 | Boye, IceBerg, leakz, NickyB, salazar |
|           50 |      949 | 2026-08-08 | OG                | W   | 0.997      | 0.818        | 0.024 (0.019)    | 0.442 (0.360)    | 1 (0.997) |     7.79 | Boye, IceBerg, leakz, NickyB, salazar |
|           49 |      982 | 2026-08-07 | Passion Chicha    | W   | 0.992      | -            | -                | -                | 1 (0.992) |     0.35 | Boye, IceBerg, leakz, NickyB, salazar |
|           48 |     1406 | 2026-07-25 | Aurora            | L   | 0.904      | -            | -                | -                | -         |    -3.44 | Boye, IceBerg, leakz, NickyB, salazar |
|           47 |     1447 | 2026-07-24 | Nuclear TigeRES   | W   | 0.898      | 0.143        | 0.105 (0.013)    | -                | -         |    12.01 | Boye, IceBerg, leakz, NickyB, salazar |
|           46 |     1470 | 2026-07-23 | Ninjas in Pyjamas | L   | 0.891      | -            | -                | -                | -         |    -8.61 | Altekz, Boye, IceBerg, leakz, salazar |
|           45 |     1494 | 2026-07-22 | Nuclear TigeRES   | W   | 0.885      | 0.143        | 0.105 (0.013)    | -                | -         |    11.59 | Altekz, Boye, IceBerg, leakz, salazar |
|           44 |     1552 | 2026-07-19 | Belgium           | W   | 0.864      | -            | -                | -                | -         |     0.30 | IceBerg, leakz, Lucky, salazar, Vster |
|           43 |     1969 | 2026-06-28 | DENDELE           | W   | 0.725      | 0.548        | 0.130 (0.052)    | 0.409 (0.162)    | 1 (0.725) |    16.28 | Boye, IceBerg, leakz, NickyB, salazar |
|           42 |     1982 | 2026-06-27 | Acend             | L   | 0.719      | -            | -                | -                | -         |    -8.46 | Boye, IceBerg, leakz, NickyB, salazar |
|           41 |     2020 | 2026-06-25 | Walczaki          | W   | 0.705      | 0.548        | 0.064 (0.025)    | 0.780 (0.301)    | 1 (0.705) |    10.43 | Boye, IceBerg, leakz, NickyB, salazar |
|           40 |     2047 | 2026-06-24 | FOKUS             | W   | 0.698      | 0.548        | 0.116 (0.044)    | 0.525 (0.201)    | 1 (0.698) |    11.92 | Boye, IceBerg, leakz, NickyB, salazar |
|           39 |     2064 | 2026-06-23 | Betclic           | W   | 0.691      | 0.548        | 0.059 (0.022)    | 0.356 (0.135)    | 1 (0.691) |    16.47 | Boye, IceBerg, leakz, NickyB, salazar |
|           38 |     2079 | 2026-06-21 | K27               | L   | 0.677      | -            | -                | -                | -         |    -4.40 | Boye, IceBerg, leakz, NickyB, salazar |
|           37 |     2092 | 2026-06-20 | Inner Circle      | W   | 0.671      | 0.435        | 0.178 (0.052)    | 0.556 (0.162)    | -         |    18.46 | Boye, IceBerg, leakz, NickyB, salazar |
|           36 |     2121 | 2026-06-18 | KOLESIE           | W   | 0.658      | 0.435        | -                | 0.494 (0.141)    | -         |     6.22 | Boye, IceBerg, leakz, NickyB, salazar |
|           35 |     2463 | 2026-06-03 | Phantom           | L   | 0.559      | -            | -                | -                | -         |   -10.82 | Boye, IceBerg, leakz, NickyB, salazar |
|           34 |     2583 | 2026-05-30 | Nemiga            | L   | 0.531      | -            | -                | -                | -         |   -10.35 | Boye, IceBerg, leakz, NickyB, salazar |
|           33 |     2603 | 2026-05-29 | Nordic Partners   | W   | 0.525      | -            | -                | -                | -         |     2.90 | Boye, IceBerg, leakz, NickyB, salazar |
|           32 |     2666 | 2026-05-28 | Just Players      | L   | 0.517      | -            | -                | -                | -         |   -11.86 | Boye, IceBerg, leakz, NickyB, salazar |
|           31 |     2959 | 2026-05-21 | Color             | L   | 0.471      | -            | -                | -                | -         |   -10.38 | Boye, IceBerg, leakz, NickyB, salazar |
|           30 |     2968 | 2026-05-21 | HOTU              | W   | 0.470      | 0.435        | 0.144 (0.029)    | 1.000 (0.204)    | -         |    12.30 | Boye, IceBerg, leakz, NickyB, salazar |
|           29 |     2999 | 2026-05-20 | Walczaki          | W   | 0.466      | 0.435        | 0.064 (0.013)    | 0.780 (0.158)    | -         |     6.11 | Boye, IceBerg, leakz, NickyB, salazar |
|           28 |     3050 | 2026-05-18 | BET-M             | W   | 0.452      | -            | -                | -                | -         |     3.51 | Boye, IceBerg, leakz, NickyB, salazar |
|           27 |     3181 | 2026-05-13 | ex-RUBY           | W   | 0.419      | 0.435        | -                | 0.766 (0.139)    | -         |     5.11 | Boye, IceBerg, leakz, NickyB, salazar |
|           26 |     3319 | 2026-05-10 | MOUZ NXT          | W   | 0.396      | -            | -                | -                | -         |     0.88 | Boye, IceBerg, leakz, NickyB, salazar |
|           25 |     3336 | 2026-05-09 | Walczaki          | W   | 0.391      | -            | -                | -                | -         |     5.04 | Boye, IceBerg, leakz, NickyB, salazar |
|           24 |     3384 | 2026-05-07 | AM                | L   | 0.377      | -            | -                | -                | -         |   -10.78 | Boye, IceBerg, leakz, NickyB, salazar |
|           23 |     3604 | 2026-04-30 | magic             | L   | 0.330      | -            | -                | -                | -         |    -2.48 | Boye, IceBerg, leakz, NickyB, salazar |
|           22 |     3683 | 2026-04-28 | Walczaki          | L   | 0.318      | -            | -                | -                | -         |    -6.81 | Boye, IceBerg, leakz, NickyB, salazar |
|           21 |     3897 | 2026-04-24 | SINNERS           | W   | 0.293      | -            | -                | -                | -         |     3.90 | Boye, IceBerg, leakz, NickyB, salazar |
|           20 |     3943 | 2026-04-23 | fnatic            | W   | 0.285      | -            | -                | -                | -         |     7.07 | Boye, IceBerg, leakz, NickyB, salazar |
|           19 |     4010 | 2026-04-20 | Johnny Speeds     | W   | 0.266      | -            | -                | -                | -         |     1.48 | Boye, IceBerg, leakz, NickyB, salazar |
|           18 |     4121 | 2026-04-14 | Young Ninjas      | L   | 0.225      | -            | -                | -                | -         |    -6.69 | Boye, IceBerg, leakz, NickyB, salazar |
|           17 |     4144 | 2026-04-13 | Alliance          | L   | 0.218      | -            | -                | -                | -         |    -1.25 | Boye, IceBerg, leakz, NickyB, salazar |
|           16 |     4247 | 2026-04-09 | Walczaki          | L   | 0.190      | -            | -                | -                | -         |    -4.10 | Boye, IceBerg, leakz, NickyB, salazar |
|           15 |     4273 | 2026-04-08 | ex-RUBY           | W   | 0.183      | -            | -                | -                | -         |     0.34 | Boye, IceBerg, leakz, NickyB, salazar |
|           14 |     4399 | 2026-04-05 | Sangal            | L   | 0.163      | -            | -                | -                | -         |    -4.75 | Boye, IceBerg, leakz, NickyB, salazar |
|           13 |     4543 | 2026-04-03 | BESTIA            | W   | 0.151      | -            | -                | -                | 1 (0.151) |     1.18 | Boye, IceBerg, leakz, NickyB, salazar |
|           12 |     4563 | 2026-04-03 | HAVENs            | W   | 0.150      | -            | -                | -                | 1 (0.150) |     0.07 | Boye, IceBerg, leakz, NickyB, salazar |
|           11 |     4887 | 2026-03-30 | AM                | L   | 0.125      | -            | -                | -                | -         |    -3.66 | Boye, IceBerg, leakz, NickyB, salazar |
|           10 |     5190 | 2026-03-25 | HOTU              | L   | 0.093      | -            | -                | -                | -         |    -0.48 | Boye, IceBerg, leakz, NickyB, salazar |
|            9 |     5208 | 2026-03-25 | HEROIC            | W   | 0.092      | -            | -                | -                | 1 (0.092) |     2.24 | Boye, IceBerg, leakz, NickyB, salazar |
|            8 |     5240 | 2026-03-24 | BASEMENT BOYS     | W   | 0.086      | -            | -                | -                | 1 (0.086) |     1.02 | Boye, IceBerg, leakz, NickyB, salazar |
|            7 |     5251 | 2026-03-24 | Passion UA        | W   | 0.085      | -            | -                | -                | -         |     0.34 | Boye, IceBerg, leakz, NickyB, salazar |
|            6 |     5282 | 2026-03-24 | BESTIA            | L   | 0.083      | -            | -                | -                | -         |    -2.05 | Boye, IceBerg, leakz, NickyB, salazar |
|            5 |     5731 | 2026-03-15 | Sashi             | W   | 0.025      | -            | -                | -                | -         |     0.48 | Boye, IceBerg, leakz, NickyB, salazar |
|            4 |     5740 | 2026-03-15 | ECSTATIC          | W   | 0.024      | -            | -                | -                | -         |     0.04 | Boye, IceBerg, leakz, NickyB, salazar |
|            3 |     5769 | 2026-03-14 | struggletony      | W   | 0.018      | -            | -                | -                | -         |     0.03 | Boye, IceBerg, leakz, NickyB, salazar |
|            2 |     5780 | 2026-03-14 | Fortress          | W   | 0.017      | -            | -                | -                | -         |     0.05 | Boye, IceBerg, leakz, NickyB, salazar |
|            1 |     5785 | 2026-03-14 | struggletony      | L   | 0.017      | -            | -                | -                | -         |    -0.49 | Boye, IceBerg, leakz, NickyB, salazar |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($17,492.76)
- Divide that value by the 5th highest value among all rosters ($506,225.55)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-06-28 |      0.726 | $15,000.00     | $10,893.57      |
| 2026-05-31 |      0.539 | $2,000.00      | $1,077.94       |
| 2026-05-21 |      0.471 | $10,000.00     | $4,711.13       |
| 2026-04-10 |      0.198 | $2,000.00      | $396.56         |
| 2026-04-05 |      0.165 | $1,000.00      | $165.28         |
| 2026-03-26 |      0.099 | $750.00        | $74.44          |
| 2026-03-15 |      0.025 | $7,055.00      | $173.84         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
