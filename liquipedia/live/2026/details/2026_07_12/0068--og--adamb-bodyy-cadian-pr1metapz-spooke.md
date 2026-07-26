### Roster Details<br />
Team Name: OG<br />
Roster: adamb, bodyy, cadiaN, pr1metapz, spooke<br />
Global Rank: [68](../../standings_global_2026_07_12.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_07_12.md)<br />
Regional Rank: [48]( ../../standings_europe_2026_07_12.md)<br />
<br />
Final Rank Value:  1085.3<br />
<br />
Final Rank Value (1085.3) = Starting Rank Value (1071.2) + Head To Head Adjustments (14.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.342[<sup>1</sup>](#table2)
- Bounty Collected: 0.344[<sup>2</sup>](#table1)
- Opponent Network: 0.135[<sup>2</sup>](#table1)
- LAN Wins: 0.596[<sup>2</sup>](#table1)

The average of these factors is 0.354<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1071.2
- 400 + ( ( 0.354 - 0.000 ) / ( 0.844 - 0.000 ) ) * 1600 = 1071.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.302
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           30 |      298 | 2026-06-24 | Betclic Apogee Esports    | L   | 1.000      | -            | -                | -                | -         |   -17.80 | adamb, bodyy, cadiaN, pr1metapz, spooke  |
|           29 |      317 | 2026-06-23 | FOKUS                     | L   | 1.000      | -            | -                | -                | -         |    -9.02 | adamb, bodyy, cadiaN, pr1metapz, spooke  |
|           28 |      798 | 2026-05-31 | TDK                       | L   | 0.916      | -            | -                | -                | -         |   -11.72 | adamb, bodyy, cadiaN, pr1metapz, spooke  |
|           27 |      850 | 2026-05-30 | Just Players              | W   | 0.909      | 0.396        | -                | 0.447 (0.161)    | -         |     6.80 | adamb, bodyy, cadiaN, pr1metapz, spooke  |
|           26 |      875 | 2026-05-29 | Esport Academy Copenhagen | W   | 0.903      | 0.396        | 0.015 (0.005)    | 0.675 (0.242)    | -         |    11.22 | adamb, bodyy, cadiaN, pr1metapz, spooke  |
|           25 |     1183 | 2026-05-22 | IC Esports                | L   | 0.856      | -            | -                | -                | -         |    -4.66 | adamb, bodyy, cadiaN, pr1metapz, spooke  |
|           24 |     1201 | 2026-05-21 | Passion UA                | W   | 0.852      | 0.435        | 0.023 (0.008)    | 0.295 (0.109)    | 1 (0.852) |    12.38 | adamb, bodyy, cadiaN, pr1metapz, spooke  |
|           23 |     1203 | 2026-05-21 | Rebels Gaming             | W   | 0.852      | 0.435        | -                | 0.597 (0.221)    | 1 (0.852) |    11.68 | adamb, bodyy, cadiaN, pr1metapz, spooke  |
|           22 |     1208 | 2026-05-21 | Betclic Apogee Esports    | L   | 0.851      | -            | -                | -                | -         |   -13.68 | adamb, bodyy, cadiaN, pr1metapz, spooke  |
|           21 |     1213 | 2026-05-21 | Metizport                 | W   | 0.851      | 0.435        | 0.028 (0.010)    | 0.454 (0.168)    | 1 (0.851) |    13.35 | adamb, bodyy, cadiaN, pr1metapz, spooke  |
|           20 |     2978 | 2026-04-01 | ALGO Esports              | L   | 0.517      | -            | -                | -                | -         |   -14.01 | adamb, arrozdoce, bodyy, cadiaN, spooke  |
|           19 |     3180 | 2026-03-30 | BESTIA                    | L   | 0.502      | -            | -                | -                | -         |    -6.92 | adamb, arrozdoce, bodyy, cadiaN, spooke  |
|           18 |     3244 | 2026-03-29 | BIG                       | W   | 0.497      | 0.340        | 0.166 (0.028)    | 0.785 (0.133)    | 1 (0.497) |    14.21 | adamb, arrozdoce, bodyy, cadiaN, spooke  |
|           17 |     3253 | 2026-03-29 | JiJieHao                  | W   | 0.496      | 0.340        | 0.054 (0.009)    | 0.433 (0.073)    | 1 (0.496) |    10.95 | adamb, arrozdoce, bodyy, cadiaN, spooke  |
|           16 |     3255 | 2026-03-29 | SINNERS Esports           | L   | 0.496      | -            | -                | -                | -         |    -4.26 | adamb, arrozdoce, bodyy, cadiaN, spooke  |
|           15 |     3495 | 2026-03-24 | 9INE                      | L   | 0.465      | -            | -                | -                | -         |    -7.85 | adamb, arrozdoce, bodyy, cadiaN, spooke  |
|           14 |     3509 | 2026-03-24 | INFINITE Talent           | W   | 0.464      | -            | -                | -                | 1 (0.464) |     0.29 | adamb, arrozdoce, bodyy, cadiaN, spooke  |
|           13 |     3526 | 2026-03-24 | IC Esports                | L   | 0.463      | -            | -                | -                | -         |    -1.78 | adamb, arrozdoce, bodyy, cadiaN, spooke  |
|           12 |     3971 | 2026-03-15 | Ninjas in Pyjamas         | L   | 0.406      | -            | -                | -                | -         |    -2.20 | adamb, arrozdoce, bodyy, cadiaN, spooke  |
|           11 |     3997 | 2026-03-15 | Team Liquid               | W   | 0.403      | 0.349        | 0.095 (0.013)    | -                | 1 (0.403) |     8.76 | adamb, arrozdoce, bodyy, cadiaN, spooke  |
|           10 |     4014 | 2026-03-14 | JiJieHao                  | W   | 0.398      | 0.349        | 0.054 (0.008)    | 0.433 (0.060)    | 1 (0.398) |     8.79 | adamb, arrozdoce, bodyy, cadiaN, spooke  |
|            9 |     4049 | 2026-03-13 | BC.Game Esports           | W   | 0.393      | 0.349        | 0.038 (0.005)    | -                | 1 (0.393) |     3.40 | adamb, arrozdoce, bodyy, cadiaN, spooke  |
|            8 |     4052 | 2026-03-13 | Alliance                  | L   | 0.393      | -            | -                | -                | -         |    -0.57 | adamb, arrozdoce, bodyy, cadiaN, spooke  |
|            7 |     4054 | 2026-03-13 | Nexus Gaming              | W   | 0.392      | -            | -                | -                | 1 (0.392) |     1.21 | adamb, arrozdoce, bodyy, cadiaN, spooke  |
|            6 |     4060 | 2026-03-13 | GRINGOS                   | W   | 0.392      | -            | -                | -                | -         |     0.27 | adamb, arrozdoce, bodyy, cadiaN, spooke  |
|            5 |     5614 | 2026-02-11 | Alliance                  | L   | 0.190      | -            | -                | -                | -         |    -0.23 | adamb, arrozdoce, cadiaN, FL4MUS, spooke |
|            4 |     5633 | 2026-02-10 | Team Nemesis              | W   | 0.186      | 0.769        | 0.229 (0.033)    | 0.950 (0.136)    | -         |     4.82 | adamb, arrozdoce, cadiaN, FL4MUS, spooke |
|            3 |     5655 | 2026-02-10 | Fnatic                    | L   | 0.184      | -            | -                | -                | -         |    -2.72 | adamb, arrozdoce, cadiaN, FL4MUS, spooke |
|            2 |     5692 | 2026-02-08 | Phantom Esports           | W   | 0.172      | -            | -                | -                | -         |     0.39 | adamb, arrozdoce, cadiaN, FL4MUS, spooke |
|            1 |     5699 | 2026-02-08 | Metizport                 | W   | 0.171      | 0.624        | 0.028 (0.003)    | 0.454 (0.049)    | -         |     2.97 | adamb, arrozdoce, cadiaN, FL4MUS, spooke |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,381.42)
- Divide that value by the 5th highest value among all rosters ($534,654.57)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-06-28 |      1.000 | $2,000.00      | $2,000.00       |
| 2026-05-31 |      0.918 | $3,000.00      | $2,753.61       |
| 2026-03-15 |      0.406 | $4,014.00      | $1,627.81       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
