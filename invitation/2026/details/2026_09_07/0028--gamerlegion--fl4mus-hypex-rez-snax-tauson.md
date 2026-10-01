### Roster Details<br />
Team Name: GamerLegion<br />
Roster: FL4MUS, hypex, REZ, Snax, Tauson<br />
Global Rank: [28](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_09_07.md)<br />
Regional Rank: [21]( ../../standings_europe_2026_09_07.md)<br />
<br />
Final Rank Value:  1345.1<br />
<br />
Final Rank Value (1345.1) = Starting Rank Value (1384.2) + Head To Head Adjustments (-39.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.682[<sup>1</sup>](#table2)
- Bounty Collected: 0.549[<sup>2</sup>](#table1)
- Opponent Network: 0.188[<sup>2</sup>](#table1)
- LAN Wins: 0.650[<sup>2</sup>](#table1)

The average of these factors is 0.517<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1384.2
- 400 + ( ( 0.517 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 1384.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           32 |      130 | 2026-09-02 | K27               | L   | 1.000      | -            | -                | -                | -         |   -18.78 | FL4MUS, hypex, Maden, REZ, Snax  |
|           31 |      149 | 2026-09-02 | Nuclear TigeRES   | L   | 1.000      | -            | -                | -                | -         |   -22.46 | FL4MUS, hypex, Maden, REZ, Snax  |
|           30 |      651 | 2026-08-19 | MOUZ              | L   | 1.000      | -            | -                | -                | -         |    -1.78 | FL4MUS, hypex, REZ, Snax, Tauson |
|           29 |      841 | 2026-08-13 | JiJieHao          | W   | 1.000      | 1.000        | 0.070 (0.070)    | 0.424 (0.424)    | 1 (1.000) |    16.11 | FL4MUS, hypex, REZ, Snax, Tauson |
|           28 |      872 | 2026-08-12 | Luminosity        | W   | 1.000      | 1.000        | 0.145 (0.145)    | 0.183 (0.183)    | 1 (1.000) |    10.14 | FL4MUS, hypex, REZ, Snax, Tauson |
|           27 |     1495 | 2026-07-22 | HOTU              | L   | 0.885      | -            | -                | -                | -         |   -11.51 | FL4MUS, hypex, REZ, Snax, Tauson |
|           26 |     2044 | 2026-06-24 | 9INE              | L   | 0.699      | -            | -                | -                | -         |   -19.35 | hypex, PR, REZ, Snax, Tauson     |
|           25 |     2055 | 2026-06-23 | Acend             | L   | 0.693      | -            | -                | -                | -         |   -15.38 | hypex, PR, REZ, Snax, Tauson     |
|           24 |     2359 | 2026-06-07 | B8                | L   | 0.585      | -            | -                | -                | -         |    -7.47 | hypex, PR, REZ, Snax, Tauson     |
|           23 |     2384 | 2026-06-06 | BETBOOM           | L   | 0.579      | -            | -                | -                | -         |    -7.36 | hypex, PR, REZ, Snax, Tauson     |
|           22 |     2408 | 2026-06-06 | Astralis          | L   | 0.576      | -            | -                | -                | -         |    -8.72 | hypex, PR, REZ, Snax, Tauson     |
|           21 |     2444 | 2026-06-04 | BIG               | W   | 0.565      | 0.624        | 0.151 (0.053)    | 0.569 (0.201)    | 1 (0.565) |    11.77 | hypex, PR, REZ, Snax, Tauson     |
|           20 |     2467 | 2026-06-03 | BETBOOM           | L   | 0.558      | -            | -                | -                | -         |    -7.35 | hypex, PR, REZ, Snax, Tauson     |
|           19 |     2486 | 2026-06-02 | FlyQuest          | W   | 0.552      | -            | -                | -                | 1 (0.552) |     2.75 | hypex, PR, REZ, Snax, Tauson     |
|           18 |     2498 | 2026-06-02 | NRG               | W   | 0.551      | 0.624        | -                | 0.358 (0.123)    | 1 (0.551) |     3.00 | hypex, PR, REZ, Snax, Tauson     |
|           17 |     3068 | 2026-05-17 | Natus Vincere     | L   | 0.446      | -            | -                | -                | -         |    -3.88 | hypex, PR, REZ, Snax, Tauson     |
|           16 |     3094 | 2026-05-16 | Legacy            | W   | 0.439      | 1.000        | 1.000 (0.439)    | 0.456 (0.200)    | 1 (0.439) |    12.58 | hypex, PR, REZ, Snax, Tauson     |
|           15 |     3127 | 2026-05-15 | paiN              | W   | 0.432      | 1.000        | 0.300 (0.130)    | 0.320 (0.138)    | 1 (0.432) |     5.31 | hypex, PR, REZ, Snax, Tauson     |
|           14 |     3172 | 2026-05-13 | Astralis          | W   | 0.420      | 1.000        | 0.378 (0.159)    | 0.315 (0.132)    | 1 (0.420) |     7.45 | hypex, PR, REZ, Snax, Tauson     |
|           13 |     3179 | 2026-05-13 | Liquid            | W   | 0.419      | 1.000        | 0.206 (0.086)    | 0.388 (0.163)    | 1 (0.419) |     7.94 | hypex, PR, REZ, Snax, Tauson     |
|           12 |     3213 | 2026-05-12 | Natus Vincere     | L   | 0.413      | -            | -                | -                | -         |    -3.42 | hypex, PR, REZ, Snax, Tauson     |
|           11 |     3254 | 2026-05-11 | SINNERS           | W   | 0.407      | 1.000        | 0.102 (0.042)    | 0.477 (0.194)    | 1 (0.407) |     2.06 | hypex, PR, REZ, Snax, Tauson     |
|           10 |     3484 | 2026-05-02 | Vitality          | L   | 0.346      | -            | -                | -                | -         |    -0.59 | hypex, PR, REZ, Snax, Tauson     |
|            9 |     3528 | 2026-05-01 | Astralis          | W   | 0.341      | 1.000        | 0.378 (0.129)    | -                | -         |     6.22 | hypex, PR, REZ, Snax, Tauson     |
|            8 |     3581 | 2026-04-30 | Natus Vincere     | L   | 0.334      | -            | -                | -                | -         |    -2.79 | hypex, PR, REZ, Snax, Tauson     |
|            7 |     3626 | 2026-04-29 | FURIA             | W   | 0.327      | 1.000        | 0.779 (0.255)    | 0.375 (0.123)    | -         |     9.32 | hypex, PR, REZ, Snax, Tauson     |
|            6 |     4459 | 2026-04-04 | BETBOOM           | L   | 0.157      | -            | -                | -                | -         |    -1.92 | hypex, PR, REZ, Snax, Tauson     |
|            5 |     4537 | 2026-04-03 | G2                | L   | 0.151      | -            | -                | -                | -         |    -0.57 | hypex, PR, REZ, Snax, Tauson     |
|            4 |     4607 | 2026-04-02 | Ninjas in Pyjamas | W   | 0.146      | -            | -                | -                | -         |     0.09 | hypex, PR, REZ, Snax, Tauson     |
|            3 |     4718 | 2026-04-01 | 9INE              | W   | 0.138      | -            | -                | -                | -         |     0.61 | hypex, PR, REZ, Snax, Tauson     |
|            2 |     5134 | 2026-03-27 | Alliance          | L   | 0.104      | -            | -                | -                | -         |    -1.52 | hypex, PR, REZ, Snax, Tauson     |
|            1 |     5338 | 2026-03-23 | Metizport         | W   | 0.078      | -            | -                | -                | -         |     0.37 | hypex, PR, REZ, Snax, Tauson     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($173,338.73)
- Divide that value by the 5th highest value among all rosters ($506,225.55)
- The final value (0.34) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-08-23 |      1.000 | $35,000.00     | $35,000.00      |
| 2026-07-26 |      0.912 | $7,500.00      | $6,840.38       |
| 2026-06-28 |      0.726 | $2,000.00      | $1,452.48       |
| 2026-06-09 |      0.599 | $10,000.00     | $5,987.81       |
| 2026-05-17 |      0.446 | $170,000.00    | $75,819.75      |
| 2026-05-03 |      0.352 | $130,000.00    | $45,816.83      |
| 2026-04-04 |      0.159 | $13,500.00     | $2,141.55       |
| 2026-03-28 |      0.112 | $2,500.00      | $279.92         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
