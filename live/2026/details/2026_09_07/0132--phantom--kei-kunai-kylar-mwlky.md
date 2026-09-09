### Roster Details<br />
Team Name: Phantom<br />
Roster: KEi, Kunai, Kylar, mwlky<br />
Global Rank: [132](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_09_07.md)<br />
Regional Rank: [101]( ../../standings_europe_2026_09_07.md)<br />
<br />
Final Rank Value:  835.6<br />
<br />
Final Rank Value (835.6) = Starting Rank Value (772.4) + Head To Head Adjustments (63.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.266[<sup>1</sup>](#table2)
- Bounty Collected: 0.323[<sup>2</sup>](#table1)
- Opponent Network: 0.097[<sup>2</sup>](#table1)
- LAN Wins: 0.096[<sup>2</sup>](#table1)

The average of these factors is 0.196<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 772.4
- 400 + ( ( 0.196 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 772.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           34 |     2074 | 2026-06-21 | FOKUS           | W   | 0.678      | 0.435        | 0.116 (0.034)    | 0.525 (0.155)    | 0 (0.000) |    19.10 | Altekz, Kunai, Kylar, mwlky, TMB  |
|           33 |     2087 | 2026-06-20 | Walczaki        | W   | 0.672      | 0.435        | 0.064 (0.019)    | 0.780 (0.228)    | 0 (0.000) |    18.32 | Altekz, Kunai, Kylar, mwlky, TMB  |
|           32 |     3391 | 2026-05-06 | Permitta        | L   | 0.372      | -            | -                | -                | -         |    -5.83 | Ayteel, KEi, Kunai, Kylar, mwlky  |
|           31 |     3420 | 2026-05-05 | GenOne          | W   | 0.363      | 0.384        | 0.055 (0.008)    | 1.000 (0.140)    | -         |     9.14 | aimy, KEi, Kunai, Kylar, mwlky    |
|           30 |     3431 | 2026-05-04 | Lavked          | L   | 0.358      | -            | -                | -                | -         |    -3.70 | aimy, KEi, Kunai, Kylar, mwlky    |
|           29 |     3459 | 2026-05-03 | aAa             | W   | 0.351      | 0.384        | 0.002 (0.000)    | 0.104 (0.014)    | -         |     4.33 | aimy, KEi, Kunai, Kylar, mwlky    |
|           28 |     3593 | 2026-04-30 | fnatic          | L   | 0.332      | -            | -                | -                | -         |    -0.42 | KEi, Kunai, Kylar, lunAtic, mwlky |
|           27 |     3640 | 2026-04-29 | GenOne          | W   | 0.325      | 0.384        | 0.055 (0.007)    | 1.000 (0.125)    | -         |     8.47 | KEi, Kunai, Kylar, lunAtic, mwlky |
|           26 |     3677 | 2026-04-28 | aAa             | W   | 0.319      | -            | -                | -                | -         |     4.13 | KEi, Kunai, Kylar, lunAtic, mwlky |
|           25 |     3720 | 2026-04-27 | The Last Resort | W   | 0.312      | 0.384        | 0.011 (0.001)    | 0.444 (0.053)    | -         |     7.12 | KEi, Kunai, Kylar, lunAtic, mwlky |
|           24 |     3783 | 2026-04-26 | ex-RUSTEC       | W   | 0.305      | 0.384        | 0.018 (0.002)    | 0.909 (0.107)    | -         |     7.42 | KEi, Kunai, Kylar, lunAtic, mwlky |
|           23 |     3844 | 2026-04-25 | Hashiras        | L   | 0.299      | -            | -                | -                | -         |    -5.77 | KEi, Kunai, Kylar, lunAtic, mwlky |
|           22 |     3959 | 2026-04-23 | Atreides        | W   | 0.284      | 0.384        | -                | 0.533 (0.058)    | -         |     4.73 | KEi, Kunai, Kylar, lunAtic, mwlky |
|           21 |     4059 | 2026-04-18 | FAVBET          | L   | 0.252      | -            | -                | -                | -         |    -5.26 | KEi, Kunai, Kylar, mwlky, mynio   |
|           20 |     4089 | 2026-04-16 | GenOne          | L   | 0.239      | -            | -                | -                | -         |    -1.18 | KEi, Kunai, Kylar, mwlky, mynio   |
|           19 |     4111 | 2026-04-15 | Lavked          | L   | 0.229      | -            | -                | -                | -         |    -2.45 | KEi, Kunai, Kylar, mwlky, mynio   |
|           18 |     4125 | 2026-04-14 | ex-RUBY         | L   | 0.225      | -            | -                | -                | -         |    -4.71 | KEi, Kunai, Kylar, mwlky, mynio   |
|           17 |     4130 | 2026-04-14 | Metizport       | L   | 0.223      | -            | -                | -                | -         |    -1.19 | KEi, Kunai, Kylar, mwlky, mynio   |
|           16 |     4149 | 2026-04-13 | HEROIC Academy  | W   | 0.216      | -            | -                | -                | -         |     2.53 | KEi, Kunai, Kylar, mwlky, mynio   |
|           15 |     4224 | 2026-04-10 | Black Phoenix   | W   | 0.196      | 0.371        | 0.017 (0.001)    | 0.952 (0.069)    | -         |     4.02 | KEi, Kunai, Kylar, mwlky, mynio   |
|           14 |     4697 | 2026-04-01 | B8              | L   | 0.139      | -            | -                | -                | -         |    -0.08 | KEi, Kunai, Kylar, mwlky, mynio   |
|           13 |     4737 | 2026-04-01 | AM              | W   | 0.137      | -            | -                | -                | 1 (0.137) |     1.78 | KEi, Kunai, Kylar, mwlky, mynio   |
|           12 |     4755 | 2026-04-01 | BESTIA          | L   | 0.136      | -            | -                | -                | -         |    -1.19 | KEi, Kunai, Kylar, mwlky, mynio   |
|           11 |     4787 | 2026-03-31 | B8              | L   | 0.132      | -            | -                | -                | -         |    -0.08 | KEi, Kunai, Kylar, mwlky, mynio   |
|           10 |     4798 | 2026-03-31 | Z7              | W   | 0.132      | -            | -                | -                | 1 (0.132) |     0.47 | KEi, Kunai, Kylar, mwlky, mynio   |
|            9 |     4811 | 2026-03-31 | maquinas        | W   | 0.131      | -            | -                | -                | 1 (0.131) |     0.45 | KEi, Kunai, Kylar, mwlky, mynio   |
|            8 |     4834 | 2026-03-31 | AM              | L   | 0.130      | -            | -                | -                | -         |    -2.46 | KEi, Kunai, Kylar, mwlky, mynio   |
|            7 |     4855 | 2026-03-31 | WAZABI          | W   | 0.130      | -            | -                | -                | 1 (0.130) |     1.62 | KEi, Kunai, Kylar, mwlky, mynio   |
|            6 |     5236 | 2026-03-24 | FOKUS           | L   | 0.087      | -            | -                | -                | -         |    -0.22 | KEi, Kunai, Kylar, mwlky, mynio   |
|            5 |     5247 | 2026-03-24 | 3DMAX           | W   | 0.086      | 0.333        | 0.301 (0.009)    | -                | 1 (0.086) |     2.56 | KEi, Kunai, Kylar, mwlky, mynio   |
|            4 |     5281 | 2026-03-24 | ASTRAL          | W   | 0.083      | 0.333        | 0.010 (0.000)    | 0.769 (0.021)    | 1 (0.083) |     2.40 | KEi, Kunai, Kylar, mwlky, mynio   |
|            3 |     5341 | 2026-03-23 | EC BANGA        | W   | 0.078      | -            | -                | -                | 1 (0.078) |     0.27 | KEi, Kunai, Kylar, mwlky, mynio   |
|            2 |     5345 | 2026-03-23 | KUUSAMO         | W   | 0.077      | -            | -                | -                | 1 (0.077) |     0.83 | KEi, Kunai, Kylar, mwlky, mynio   |
|            1 |     5351 | 2026-03-23 | Wampirki        | L   | 0.077      | -            | -                | -                | -         |    -1.97 | KEi, Kunai, Kylar, mwlky, mynio   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($893.53)
- Divide that value by the 5th highest value among all rosters ($506,225.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-05-03 |      0.352 | $1,250.00      | $440.10         |
| 2026-04-16 |      0.237 | $1,000.00      | $236.59         |
| 2026-03-24 |      0.087 | $2,500.00      | $216.85         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
