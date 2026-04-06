### Roster Details<br />
Team Name: InControl<br />
Roster: aelor, ayaneuu, jsfeltner, Scorchyy, TyRa<br />
Global Rank: [200](../../standings_global_.md)<br />
<br />
Region: [Americas]( ../../standings_americas_.md)<br />
Regional Rank: [45]( ../../standings_americas_.md)<br />
<br />
Final Rank Value:  737.2<br />
<br />
Final Rank Value (737.2) = Starting Rank Value (698.1) + Head To Head Adjustments (39.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.298[<sup>1</sup>](#table2)
- Bounty Collected: 0.269[<sup>2</sup>](#table1)
- Opponent Network: 0.043[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.152<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 698.1
- 400 + ( ( 0.152 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 698.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.224
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           26 |      381 | 2026-03-28 | Fisher College       | L   | 1.000      | -            | -                | -                | -         |    -8.15 | aelor, ayaneuu, jsfeltner, Scorchyy, TyRa  |
|           25 |      460 | 2026-03-27 | Beneath Reality      | W   | 1.000      | 0.404        | 0.002 (0.001)    | -                | 0 (0.000) |     7.37 | aelor, ayaneuu, jsfeltner, Scorchyy, TyRa  |
|           24 |     1242 | 2026-03-11 | Zomblers             | W   | 1.000      | 0.143        | 0.002 (0.000)    | 0.253 (0.036)    | 0 (0.000) |    17.08 | aelor, ayaneuu, jsfeltner, Scorchyy, TyRa  |
|           23 |     1458 | 2026-03-07 | Fisher College       | W   | 1.000      | 0.143        | 0.008 (0.001)    | 0.324 (0.046)    | 0 (0.000) |    22.94 | aelor, ayaneuu, jsfeltner, Scorchyy, TyRa  |
|           22 |     2197 | 2026-02-20 | Zomblers             | L   | 0.903      | -            | -                | -                | -         |   -12.27 | aelor, ayaneuu, jsfeltner, Scorchyy, TyRa  |
|           21 |     2249 | 2026-02-19 | Life's A Game        | W   | 0.896      | 0.363        | 0.027 (0.009)    | 0.679 (0.221)    | 0 (0.000) |    22.16 | aelor, ayaneuu, jsfeltner, Scorchyy, TyRa  |
|           20 |     2297 | 2026-02-18 | OverKnight           | W   | 0.889      | 0.363        | -                | 0.075 (0.024)    | 0 (0.000) |     7.08 | aelor, ayaneuu, jsfeltner, Scorchyy, TyRa  |
|           19 |     2352 | 2026-02-17 | Marsborne            | L   | 0.883      | -            | -                | -                | -         |    -1.29 | aelor, ayaneuu, jsfeltner, Scorchyy, TyRa  |
|           18 |     2462 | 2026-02-15 | Outfit 49            | L   | 0.868      | -            | -                | -                | -         |   -13.81 | aelor, ayaneuu, jsfeltner, Scorchyy, TyRa  |
|           17 |     2581 | 2026-02-13 | Reign Above          | W   | 0.856      | 0.333        | -                | 0.110 (0.031)    | 0 (0.000) |     9.83 | aelor, ayaneuu, jsfeltner, Scorchyy, TyRa  |
|           16 |     2703 | 2026-02-10 | Sakura Esports       | W   | 0.835      | 0.333        | 0.021 (0.006)    | 0.054 (0.015)    | 0 (0.000) |    13.92 | aelor, ayaneuu, jsfeltner, Scorchyy, TyRa  |
|           15 |     2818 | 2026-02-06 | Chicken Coop Esports | L   | 0.809      | -            | -                | -                | -         |   -11.83 | aelor, ayaneuu, jsfeltner, Scorchyy, TyRa  |
|           14 |     2900 | 2026-02-03 | Zomblers             | L   | 0.789      | -            | -                | -                | -         |   -12.71 | aelor, ayaneuu, jsfeltner, Scorchyy, TyRa  |
|           13 |     3903 | 2025-12-11 | Life's A Game        | L   | 0.429      | -            | -                | -                | -         |    -3.42 | aelor, calamity, jsfeltner, Scorchyy, TyRa |
|           12 |     3914 | 2025-12-10 | SkinRave Esports     | L   | 0.422      | -            | -                | -                | -         |    -4.60 | aelor, calamity, jsfeltner, Scorchyy, TyRa |
|           11 |     3965 | 2025-12-07 | Team Voca            | L   | 0.402      | -            | -                | -                | -         |    -0.35 | aelor, calamity, jsfeltner, Scorchyy, TyRa |
|           10 |     4013 | 2025-12-05 | Outfit 49            | W   | 0.389      | 0.333        | 0.008 (0.001)    | 0.311 (0.040)    | 0 (0.000) |     6.10 | aelor, calamity, jsfeltner, Scorchyy, TyRa |
|            9 |     4077 | 2025-12-02 | Lotus                | W   | 0.369      | 0.333        | 0.000 (0.000)    | 0.005 (0.001)    | 0 (0.000) |     4.04 | aelor, calamity, jsfeltner, Scorchyy, TyRa |
|            8 |     5122 | 2025-10-27 | Zomblers             | L   | 0.129      | -            | -                | -                | -         |    -2.10 | Beast, calamity, jsfeltner, Scorchyy, TyRa |
|            7 |     5123 | 2025-10-27 | Regain               | L   | 0.129      | -            | -                | -                | -         |    -2.20 | Beast, calamity, jsfeltner, Scorchyy, TyRa |
|            6 |     5162 | 2025-10-26 | SkinRave Esports     | L   | 0.123      | -            | -                | -                | -         |    -1.48 | Beast, calamity, jsfeltner, Scorchyy, TyRa |
|            5 |     5276 | 2025-10-24 | Sakura Esports       | W   | 0.109      | 0.363        | 0.021 (0.001)    | 0.054 (0.002)    | 0 (0.000) |     1.95 | Beast, calamity, jsfeltner, Scorchyy, TyRa |
|            4 |     5341 | 2025-10-23 | Outfit 49            | W   | 0.102      | 0.333        | 0.008 (0.000)    | 0.311 (0.011)    | -         |     1.65 | Beast, calamity, jsfeltner, Scorchyy, TyRa |
|            3 |     5384 | 2025-10-22 | Ex-Nocturnal Esports | W   | 0.096      | 0.333        | 0.000 (0.000)    | -                | -         |     0.78 | Beast, calamity, jsfeltner, Scorchyy, TyRa |
|            2 |     5468 | 2025-10-17 | SportsBetExpert      | L   | 0.062      | -            | -                | -                | -         |    -0.88 | Beast, calamity, jsfeltner, Scorchyy, TyRa |
|            1 |     5532 | 2025-10-15 | Chicken Coop Esports | L   | 0.049      | -            | -                | -                | -         |    -0.68 | Beast, calamity, jsfeltner, Scorchyy, TyRa |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,000.00)
- Divide that value by the 5th highest value among all rosters ($457,592.01)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-29 |      1.000 | $2,000.00      | $2,000.00       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
