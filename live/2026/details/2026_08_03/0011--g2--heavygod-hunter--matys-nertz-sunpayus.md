### Roster Details<br />
Team Name: G2<br />
Roster: HeavyGod, huNter-, MATYS, NertZ, SunPayus<br />
Global Rank: [11](../../standings_global_2026_08_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_08_03.md)<br />
Regional Rank: [8]( ../../standings_europe_2026_08_03.md)<br />
<br />
Final Rank Value:  1687.8<br />
<br />
Final Rank Value (1687.8) = Starting Rank Value (1693.1) + Head To Head Adjustments (-5.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.737[<sup>1</sup>](#table2)
- Bounty Collected: 0.687[<sup>2</sup>](#table1)
- Opponent Network: 0.371[<sup>2</sup>](#table1)
- LAN Wins: 0.876[<sup>2</sup>](#table1)

The average of these factors is 0.668<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1693.1
- 400 + ( ( 0.668 - 0.000 ) / ( 0.826 - 0.000 ) ) * 1600 = 1693.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           54 |      210 | 2026-07-25 | Liquid            | L   | 1.000      | -            | -                | -                | -         |   -26.96 | HeavyGod, huNter-, MATYS, NertZ, r1nkle     |
|           53 |      293 | 2026-07-22 | Nemiga            | W   | 1.000      | 0.903        | -                | 0.713 (0.644)    | -         |     1.75 | HeavyGod, huNter-, MATYS, NertZ, r1nkle     |
|           52 |      901 | 2026-06-19 | Spirit            | L   | 0.900      | -            | -                | -                | -         |    -3.90 | HeavyGod, huNter-, MATYS, NertZ, SunPayus   |
|           51 |      945 | 2026-06-15 | Natus Vincere     | W   | 0.874      | 1.000        | 1.000 (0.874)    | 0.368 (0.321)    | 1 (0.874) |    17.72 | HeavyGod, huNter-, MATYS, NertZ, SunPayus   |
|           50 |      968 | 2026-06-14 | Legacy            | W   | 0.867      | 1.000        | 0.884 (0.766)    | 0.568 (0.492)    | 1 (0.867) |    17.14 | HeavyGod, huNter-, MATYS, NertZ, SunPayus   |
|           49 |     1013 | 2026-06-13 | Aurora            | L   | 0.859      | -            | -                | -                | -         |   -14.40 | HeavyGod, huNter-, MATYS, NertZ, SunPayus   |
|           48 |     1060 | 2026-06-12 | FUT               | W   | 0.853      | 1.000        | 0.589 (0.503)    | 0.342 (0.292)    | 1 (0.853) |    12.88 | HeavyGod, huNter-, MATYS, NertZ, SunPayus   |
|           47 |     1077 | 2026-06-11 | Falcons           | L   | 0.847      | -            | -                | -                | -         |    -4.98 | HeavyGod, huNter-, MATYS, NertZ, SunPayus   |
|           46 |     1132 | 2026-06-08 | BIG               | W   | 0.827      | 0.809        | 0.170 (0.114)    | 0.725 (0.485)    | 1 (0.827) |     7.12 | HeavyGod, huNter-, MATYS, NertZ, SunPayus   |
|           45 |     1148 | 2026-06-07 | FUT               | L   | 0.821      | -            | -                | -                | -         |   -13.29 | HeavyGod, huNter-, MATYS, NertZ, SunPayus   |
|           44 |     1181 | 2026-06-06 | Luminosity        | W   | 0.814      | 0.809        | 0.187 (0.123)    | 0.397 (0.261)    | 1 (0.814) |     6.60 | HeavyGod, huNter-, MATYS, NertZ, SunPayus   |
|           43 |     1193 | 2026-06-06 | M80               | W   | 0.812      | 0.809        | -                | 0.644 (0.423)    | 1 (0.812) |     3.45 | HeavyGod, huNter-, MATYS, NertZ, SunPayus   |
|           42 |     1937 | 2026-05-15 | Spirit            | L   | 0.665      | -            | -                | -                | -         |    -3.27 | HeavyGod, huNter-, MATYS, NertZ, SunPayus   |
|           41 |     1995 | 2026-05-13 | Luminosity        | W   | 0.651      | 1.000        | 0.187 (0.122)    | 0.397 (0.258)    | 1 (0.651) |     5.29 | HeavyGod, huNter-, MATYS, NertZ, SunPayus   |
|           40 |     2025 | 2026-05-12 | PARIVISION        | W   | 0.646      | 1.000        | 0.582 (0.376)    | 0.425 (0.275)    | 1 (0.646) |    11.57 | HeavyGod, huNter-, MATYS, NertZ, SunPayus   |
|           39 |     2077 | 2026-05-11 | The MongolZ       | L   | 0.638      | -            | -                | -                | -         |   -11.16 | HeavyGod, huNter-, MATYS, NertZ, SunPayus   |
|           38 |     2117 | 2026-05-10 | MOUZ              | L   | 0.631      | -            | -                | -                | -         |    -4.59 | HeavyGod, huNter-, MATYS, NertZ, SunPayus   |
|           37 |     2145 | 2026-05-08 | Fisher College    | W   | 0.624      | -            | -                | -                | 1 (0.624) |     0.34 | HeavyGod, huNter-, MATYS, NertZ, SunPayus   |
|           36 |     2325 | 2026-05-01 | FaZe              | L   | 0.575      | -            | -                | -                | -         |    -9.07 | HeavyGod, huNter-, MATYS, NertZ, SunPayus   |
|           35 |     2382 | 2026-04-30 | Vitality          | L   | 0.568      | -            | -                | -                | -         |    -5.14 | HeavyGod, huNter-, MATYS, NertZ, SunPayus   |
|           34 |     2430 | 2026-04-29 | Astralis          | W   | 0.561      | 1.000        | 0.532 (0.299)    | 0.459 (0.257)    | 1 (0.561) |     6.75 | HeavyGod, huNter-, MATYS, NertZ, SunPayus   |
|           33 |     2892 | 2026-04-15 | Spirit            | L   | 0.467      | -            | -                | -                | -         |    -2.54 | HeavyGod, MATYS, NertZ, SunPayus, tAk       |
|           32 |     2902 | 2026-04-15 | 3DMAX             | W   | 0.466      | 1.000        | 0.337 (0.157)    | -                | -         |     3.26 | HeavyGod, MATYS, NertZ, SunPayus, tAk       |
|           31 |     2919 | 2026-04-14 | Vitality          | L   | 0.460      | -            | -                | -                | -         |    -4.61 | HeavyGod, MATYS, NertZ, SunPayus, tAk       |
|           30 |     2938 | 2026-04-13 | Gentle Mates      | W   | 0.453      | -            | -                | -                | -         |     0.99 | HeavyGod, MATYS, NertZ, SunPayus, tAk       |
|           29 |     3233 | 2026-04-04 | BetBoom           | W   | 0.394      | -            | -                | -                | -         |     7.07 | HeavyGod, huNter-, MATYS, NertZ, SunPayus   |
|           28 |     3330 | 2026-04-03 | GamerLegion       | W   | 0.387      | -            | -                | -                | -         |     4.08 | HeavyGod, huNter-, MATYS, NertZ, SunPayus   |
|           27 |     3422 | 2026-04-02 | BetBoom           | W   | 0.380      | -            | -                | -                | -         |     7.03 | HeavyGod, huNter-, MATYS, NertZ, SunPayus   |
|           26 |     3543 | 2026-04-01 | Nemesis           | W   | 0.372      | -            | -                | -                | -         |     1.42 | HeavyGod, huNter-, MATYS, NertZ, SunPayus   |
|           25 |     3667 | 2026-03-30 | Bulgaria          | W   | 0.362      | -            | -                | -                | -         |     1.84 | HeavyGod, huNter-, MATYS, NertZ, SunPayus   |
|           24 |     3670 | 2026-03-30 | BetBoom           | L   | 0.361      | -            | -                | -                | -         |    -4.76 | HeavyGod, huNter-, MATYS, NertZ, SunPayus   |
|           23 |     3706 | 2026-03-30 | Fluxo             | W   | 0.359      | -            | -                | -                | -         |     1.07 | HeavyGod, huNter-, MATYS, NertZ, SunPayus   |
|           22 |     3733 | 2026-03-29 | Bulgaria          | W   | 0.354      | -            | -                | -                | -         |     1.82 | HeavyGod, huNter-, MATYS, NertZ, SunPayus   |
|           21 |     3742 | 2026-03-29 | cswalkers         | W   | 0.354      | -            | -                | -                | -         |     0.02 | HeavyGod, huNter-, MATYS, NertZ, SunPayus   |
|           20 |     3764 | 2026-03-29 | Walczaki          | W   | 0.353      | -            | -                | -                | -         |     0.58 | HeavyGod, huNter-, MATYS, NertZ, SunPayus   |
|           19 |     3771 | 2026-03-29 | CarritoSpain      | W   | 0.353      | -            | -                | -                | -         |     0.02 | HeavyGod, huNter-, MATYS, NertZ, SunPayus   |
|           18 |     3980 | 2026-03-25 | SINNERS           | L   | 0.328      | -            | -                | -                | -         |    -9.72 | HeavyGod, huNter-, MATYS, NertZ, SunPayus   |
|           17 |     4014 | 2026-03-25 | aimclub           | W   | 0.326      | -            | -                | -                | -         |     0.03 | HeavyGod, huNter-, MATYS, NertZ, SunPayus   |
|           16 |     4743 | 2026-03-10 | FUT               | L   | 0.227      | -            | -                | -                | -         |    -3.85 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|           15 |     4781 | 2026-03-09 | Aurora            | L   | 0.221      | -            | -                | -                | -         |    -3.90 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|           14 |     4856 | 2026-03-08 | Spirit            | L   | 0.214      | -            | -                | -                | -         |    -1.03 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|           13 |     4940 | 2026-03-07 | Natus Vincere     | W   | 0.206      | 0.805        | 1.000 (0.166)    | -                | -         |     3.96 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|           12 |     4974 | 2026-03-06 | FaZe              | W   | 0.200      | -            | -                | -                | -         |     3.90 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|           11 |     5026 | 2026-03-05 | Ninjas in Pyjamas | W   | 0.193      | -            | -                | -                | -         |     1.52 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|           10 |     5064 | 2026-03-04 | paiN              | L   | 0.188      | -            | -                | -                | -         |    -4.51 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|            9 |     5113 | 2026-03-03 | M80               | W   | 0.181      | -            | -                | -                | -         |     0.58 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|            8 |     5154 | 2026-03-02 | Legacy            | L   | 0.175      | -            | -                | -                | -         |    -1.76 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|            7 |     5220 | 2026-03-01 | Gaimin Gladiators | W   | 0.166      | -            | -                | -                | -         |     0.08 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|            6 |     5781 | 2026-02-18 | Natus Vincere     | L   | 0.094      | -            | -                | -                | -         |    -1.16 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|            5 |     5856 | 2026-02-17 | HEROIC            | W   | 0.086      | -            | -                | -                | -         |     0.51 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|            4 |     5889 | 2026-02-16 | paiN              | W   | 0.080      | -            | -                | -                | -         |     0.59 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|            3 |     5968 | 2026-02-15 | PARIVISION        | L   | 0.072      | -            | -                | -                | -         |    -0.92 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|            2 |     6001 | 2026-02-14 | Vitality          | L   | 0.067      | -            | -                | -                | -         |    -0.74 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |
|            1 |     6296 | 2026-02-06 | MOUZ              | L   | 0.014      | -            | -                | -                | -         |    -0.10 | HeavyGod, huNter-, malbsMd, MATYS, SunPayus |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($218,703.26)
- Divide that value by the 5th highest value among all rosters ($497,826.14)
- The final value (0.44) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-07-26 |      1.000 | $28,750.00     | $28,750.00      |
| 2026-06-21 |      0.914 | $45,000.00     | $41,113.01      |
| 2026-05-17 |      0.679 | $80,000.00     | $54,338.58      |
| 2026-05-03 |      0.588 | $85,000.00     | $49,954.37      |
| 2026-04-19 |      0.494 | $42,000.00     | $20,756.53      |
| 2026-04-04 |      0.394 | $25,000.00     | $9,847.36       |
| 2026-03-30 |      0.362 | $1,740.00      | $629.66         |
| 2026-03-10 |      0.228 | $34,500.00     | $7,864.14       |
| 2026-02-22 |      0.121 | $31,250.00     | $3,768.60       |
| 2026-02-08 |      0.028 | $61,000.00     | $1,681.01       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
