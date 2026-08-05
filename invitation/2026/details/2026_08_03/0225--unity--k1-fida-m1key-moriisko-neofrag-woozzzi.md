### Roster Details<br />
Team Name: UNiTY<br />
Roster: K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi<br />
Global Rank: [225](../../standings_global_2026_08_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_08_03.md)<br />
Regional Rank: [154]( ../../standings_europe_2026_08_03.md)<br />
<br />
Final Rank Value:  726.5<br />
<br />
Final Rank Value (726.5) = Starting Rank Value (676.4) + Head To Head Adjustments (50.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.239[<sup>1</sup>](#table2)
- Bounty Collected: 0.261[<sup>2</sup>](#table1)
- Opponent Network: 0.071[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.143<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 676.4
- 400 + ( ( 0.143 - 0.000 ) / ( 0.826 - 0.000 ) ) * 1600 = 676.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           29 |     2826 | 2026-04-19 | Clutchain            | W   | 0.493      | -            | -                | -                | 0 (0.000) |     3.86 | 2high, M1key, MoriiSko, NEOFRAG, woozzzi   |
|           28 |     2893 | 2026-04-15 | Alliance             | L   | 0.467      | -            | -                | -                | -         |    -0.08 | 2high, M1key, MoriiSko, NEOFRAG, woozzzi   |
|           27 |     3005 | 2026-04-10 | KOLESIE              | L   | 0.434      | -            | -                | -                | -         |    -2.05 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           26 |     3034 | 2026-04-09 | ASTRAL               | L   | 0.427      | -            | -                | -                | -         |    -0.94 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           25 |     3123 | 2026-04-06 | Inner Circle Academy | W   | 0.407      | 0.384        | 0.008 (0.001)    | 0.552 (0.086)    | 0 (0.000) |     8.97 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           24 |     3163 | 2026-04-05 | ex-MANA              | L   | 0.400      | -            | -                | -                | -         |    -5.13 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           23 |     3234 | 2026-04-04 | G2 Ares              | W   | 0.394      | 0.384        | 0.009 (0.001)    | 0.756 (0.114)    | 0 (0.000) |     9.92 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           22 |     3319 | 2026-04-03 | ENCE                 | L   | 0.387      | -            | -                | -                | -         |    -2.37 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           21 |     3508 | 2026-04-01 | Atreides             | W   | 0.374      | 0.384        | -                | 0.900 (0.129)    | 0 (0.000) |     7.61 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           20 |     3699 | 2026-03-30 | brazylijski luz      | W   | 0.359      | 0.384        | -                | 0.202 (0.028)    | 0 (0.000) |     5.53 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           19 |     3753 | 2026-03-29 | BASEMENT BOYS        | W   | 0.354      | 0.384        | 0.015 (0.002)    | 0.525 (0.071)    | 0 (0.000) |    10.29 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           18 |     3921 | 2026-03-27 | bond1e               | L   | 0.340      | -            | -                | -                | -         |    -7.81 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           17 |     4000 | 2026-03-25 | Qual4                | W   | 0.327      | -            | -                | -                | 0 (0.000) |     1.64 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           16 |     4118 | 2026-03-23 | Metizport            | L   | 0.314      | -            | -                | -                | -         |    -1.13 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           15 |     4141 | 2026-03-23 | Metizport            | L   | 0.312      | -            | -                | -                | -         |    -1.13 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           14 |     4227 | 2026-03-21 | Sangal               | L   | 0.301      | -            | -                | -                | -         |    -2.93 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           13 |     4283 | 2026-03-20 | G2 Ares              | W   | 0.295      | 0.384        | 0.009 (0.001)    | 0.756 (0.086)    | 0 (0.000) |     7.62 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           12 |     4357 | 2026-03-19 | cirahvi              | W   | 0.286      | 0.384        | 0.004 (0.000)    | 0.290 (0.032)    | 0 (0.000) |     4.67 | K1-FiDa, M1key, MoriiSko, NEOFRAG, replay  |
|           11 |     4397 | 2026-03-18 | PsychoFace           | W   | 0.279      | 0.384        | 0.023 (0.002)    | 0.987 (0.106)    | 0 (0.000) |     7.92 | K1-FiDa, M1key, MoriiSko, NEOFRAG, replay  |
|           10 |     4422 | 2026-03-17 | Persona Grata        | L   | 0.274      | -            | -                | -                | -         |    -5.88 | K1-FiDa, M1key, MoriiSko, NEOFRAG, replay  |
|            9 |     4990 | 2026-03-06 | MOUZ NXT             | L   | 0.198      | -            | -                | -                | -         |    -1.24 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|            8 |     5158 | 2026-03-02 | BET-M                | L   | 0.174      | -            | -                | -                | -         |    -0.64 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|            7 |     5253 | 2026-02-28 | WW                   | W   | 0.160      | 0.371        | 0.056 (0.003)    | 0.557 (0.033)    | -         |     4.88 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|            6 |     5524 | 2026-02-23 | ENCE                 | W   | 0.125      | 0.371        | 0.016 (0.001)    | 0.634 (0.029)    | -         |     3.31 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|            5 |     5832 | 2026-02-17 | Alliance             | L   | 0.088      | -            | -                | -                | -         |    -0.01 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|            4 |     5916 | 2026-02-15 | JiJieHao             | W   | 0.076      | 0.384        | 0.048 (0.001)    | -                | -         |     2.29 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|            3 |     5970 | 2026-02-15 | ex-Zero Tenacity     | W   | 0.072      | -            | -                | -                | -         |     1.46 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|            2 |     5988 | 2026-02-14 | Johnny Speeds        | L   | 0.068      | -            | -                | -                | -         |    -0.19 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|            1 |     6053 | 2026-02-13 | SPARTA               | W   | 0.061      | 0.384        | 0.023 (0.001)    | -                | -         |     1.64 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($320.57)
- Divide that value by the 5th highest value among all rosters ($497,826.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-04-09 |      0.427 | $750.00        | $320.57         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
