### Roster Details<br />
Team Name: ex-RUBY<br />
Roster: danistzz, H4SAN4TOR, Kaide, sh1nejezzz, YumsaN<br />
Global Rank: [243](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_09_07.md)<br />
Regional Rank: [166]( ../../standings_europe_2026_09_07.md)<br />
<br />
Final Rank Value:  654.1<br />
<br />
Final Rank Value (654.1) = Starting Rank Value (631.1) + Head To Head Adjustments (23.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.221[<sup>1</sup>](#table2)
- Bounty Collected: 0.242[<sup>2</sup>](#table1)
- Opponent Network: 0.022[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.121<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 631.1
- 400 + ( ( 0.121 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 631.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           29 |     3891 | 2026-04-25 | Nemiga           | L   | 0.293      | -            | -                | -                | -         |    -1.22 | danistzz, H4SAN4TOR, Kaide, sh1nejezzz, YumsaN |
|           28 |     3942 | 2026-04-24 | ex-RUSTEC        | L   | 0.286      | -            | -                | -                | -         |    -1.24 | danistzz, H4SAN4TOR, Kaide, sh1nejezzz, YumsaN |
|           27 |     3973 | 2026-04-23 | playersclub      | L   | 0.280      | -            | -                | -                | -         |    -6.16 | danistzz, H4SAN4TOR, Kaide, sh1nejezzz, YumsaN |
|           26 |     4042 | 2026-04-20 | Butterfly        | W   | 0.259      | 0.435        | 0.034 (0.004)    | 0.839 (0.094)    | 0 (0.000) |     7.50 | danistzz, H4SAN4TOR, Kaide, sh1nejezzz, YumsaN |
|           25 |     4091 | 2026-04-18 | 1win             | L   | 0.246      | -            | -                | -                | -         |    -0.14 | danistzz, H4SAN4TOR, Kaide, sh1nejezzz, YumsaN |
|           24 |     4109 | 2026-04-17 | MOUZ NXT         | W   | 0.239      | 0.435        | -                | 0.099 (0.010)    | 0 (0.000) |     3.64 | danistzz, H4SAN4TOR, Kaide, sh1nejezzz, YumsaN |
|           23 |     4153 | 2026-04-14 | Phantom          | W   | 0.219      | 0.435        | 0.002 (0.000)    | 0.162 (0.015)    | 0 (0.000) |     4.66 | H4SAN4TOR, Kaide, riskyb0b, sh1nejezzz, YumsaN |
|           22 |     4176 | 2026-04-13 | Metizport        | L   | 0.212      | -            | -                | -                | -         |    -0.58 | danistzz, H4SAN4TOR, Kaide, sh1nejezzz, YumsaN |
|           21 |     4222 | 2026-04-11 | STATE            | W   | 0.198      | 0.371        | 0.013 (0.001)    | 0.283 (0.021)    | 0 (0.000) |     5.39 | danistzz, H4SAN4TOR, Kaide, sh1nejezzz, YumsaN |
|           20 |     4301 | 2026-04-08 | BBL              | L   | 0.178      | -            | -                | -                | -         |    -0.31 | danistzz, H4SAN4TOR, Kaide, sh1nejezzz, YumsaN |
|           19 |     4406 | 2026-04-05 | STATE            | W   | 0.159      | 0.435        | 0.013 (0.001)    | 0.283 (0.020)    | 0 (0.000) |     4.37 | danistzz, H4SAN4TOR, Kaide, sh1nejezzz, YumsaN |
|           18 |     4581 | 2026-04-03 | los kogutos      | W   | 0.145      | 0.435        | 0.003 (0.000)    | 0.080 (0.005)    | 0 (0.000) |     2.64 | danistzz, H4SAN4TOR, Kaide, sh1nejezzz, YumsaN |
|           17 |     4786 | 2026-04-01 | Lavked           | L   | 0.131      | -            | -                | -                | -         |    -0.80 | danistzz, H4SAN4TOR, Kaide, sh1nejezzz, YumsaN |
|           16 |     4811 | 2026-03-31 | Nuclear TigeRES  | L   | 0.127      | -            | -                | -                | -         |    -0.34 | danistzz, H4SAN4TOR, Kaide, sh1nejezzz, YumsaN |
|           15 |     4887 | 2026-03-31 | Bebop            | W   | 0.124      | -            | -                | -                | 0 (0.000) |     1.17 | danistzz, H4SAN4TOR, Kaide, sh1nejezzz, YumsaN |
|           14 |     4953 | 2026-03-30 | PsychoFace       | L   | 0.117      | -            | -                | -                | -         |    -0.57 | danistzz, H4SAN4TOR, Kaide, sh1nejezzz, YumsaN |
|           13 |     5374 | 2026-03-23 | ex-MANA          | W   | 0.072      | 0.435        | 0.004 (0.000)    | 0.549 (0.017)    | 0 (0.000) |     1.50 | danistzz, H4SAN4TOR, Kaide, sh1nejezzz, YumsaN |
|           12 |     5413 | 2026-03-22 | los kogutos      | L   | 0.067      | -            | -                | -                | -         |    -0.89 | fozil, H4SAN4TOR, Kaide, sh1nejezzz, YumsaN    |
|           11 |     5456 | 2026-03-21 | K27              | L   | 0.060      | -            | -                | -                | -         |    -0.02 | fozil, H4SAN4TOR, Kaide, sh1nejezzz, YumsaN    |
|           10 |     5472 | 2026-03-21 | Black Phoenix    | W   | 0.060      | 0.435        | 0.017 (0.000)    | 0.948 (0.025)    | 0 (0.000) |     1.50 | danistzz, H4SAN4TOR, Kaide, sh1nejezzz, YumsaN |
|            9 |     5573 | 2026-03-19 | Omega            | W   | 0.047      | 0.384        | 0.027 (0.000)    | 0.395 (0.007)    | 0 (0.000) |     1.44 | H4SAN4TOR, Kaide, robo, sh1nejezzz, YumsaN     |
|            8 |     5589 | 2026-03-19 | cirahvi          | W   | 0.045      | 0.435        | 0.002 (0.000)    | -                | -         |     0.70 | H4SAN4TOR, Kaide, riskyb0b, sh1nejezzz, YumsaN |
|            7 |     5643 | 2026-03-18 | The Last Resort  | L   | 0.038      | -            | -                | -                | -         |    -0.16 | H4SAN4TOR, Kaide, riskyb0b, sh1nejezzz, YumsaN |
|            6 |     5652 | 2026-03-17 | Walczaki         | L   | 0.034      | -            | -                | -                | -         |    -0.11 | H4SAN4TOR, Kaide, robo, sh1nejezzz, YumsaN     |
|            5 |     5679 | 2026-03-17 | megoshort        | W   | 0.031      | -            | -                | -                | -         |     0.33 | H4SAN4TOR, Kaide, robo, sh1nejezzz, YumsaN     |
|            4 |     5764 | 2026-03-15 | ex-Zero Tenacity | W   | 0.019      | 0.435        | 0.031 (0.000)    | 1.000 (0.008)    | -         |     0.49 | H4SAN4TOR, Kaide, robo, sh1nejezzz, YumsaN     |
|            3 |     5832 | 2026-03-13 | HOTU             | W   | 0.007      | -            | -                | -                | -         |     0.11 | H4SAN4TOR, Kaide, robo, sh1nejezzz, YumsaN     |
|            2 |     5855 | 2026-03-13 | CYBERSHOKE       | W   | 0.005      | -            | -                | -                | -         |     0.12 | H4SAN4TOR, Kaide, robo, sh1nejezzz, YumsaN     |
|            1 |     5887 | 2026-03-12 | los kogutos      | W   | 0.000      | -            | -                | -                | -         |     0.01 | H4SAN4TOR, Kaide, robo, sh1nejezzz, YumsaN     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($151.36)
- Divide that value by the 5th highest value among all rosters ($502,597.17)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-13 |      0.007 | $22,000.00     | $151.36         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
