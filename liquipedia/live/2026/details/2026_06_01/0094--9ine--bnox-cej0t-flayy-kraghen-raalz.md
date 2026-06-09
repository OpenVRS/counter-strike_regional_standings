### Roster Details<br />
Team Name: 9INE<br />
Roster: bnox, cej0t, Flayy, kraghen, raalz<br />
Global Rank: [94](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_01.md)<br />
Regional Rank: [62]( ../../standings_europe_2026_06_01.md)<br />
<br />
Final Rank Value:  1079.1<br />
<br />
Final Rank Value (1079.1) = Starting Rank Value (1060.4) + Head To Head Adjustments (18.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.374[<sup>1</sup>](#table2)
- Bounty Collected: 0.342[<sup>2</sup>](#table1)
- Opponent Network: 0.135[<sup>2</sup>](#table1)
- LAN Wins: 0.537[<sup>2</sup>](#table1)

The average of these factors is 0.347<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1060.4
- 400 + ( ( 0.347 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 1060.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.237
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           21 |      805 | 2026-05-08 | Walczaki        | L   | 1.000      | -            | -                | -                | -         |    -8.83 | adamS, Flayy, kraghen, notineki, raalz |
|           20 |     1047 | 2026-04-30 | 33              | L   | 0.990      | -            | -                | -                | -         |   -10.87 | adamS, bnox, Flayy, kraghen, raalz     |
|           19 |     1241 | 2026-04-26 | Gentle Mates    | L   | 0.964      | -            | -                | -                | -         |    -5.38 | bnox, cej0t, Flayy, kraghen, raalz     |
|           18 |     1317 | 2026-04-25 | HYPERSPIRIT     | W   | 0.957      | 0.435        | 0.005 (0.002)    | 0.551 (0.229)    | 1 (0.957) |    10.04 | bnox, cej0t, Flayy, kraghen, raalz     |
|           17 |     1365 | 2026-04-24 | Dripmen         | L   | 0.951      | -            | -                | -                | -         |   -27.10 | bnox, cej0t, Flayy, kraghen, raalz     |
|           16 |     1380 | 2026-04-23 | Misa Esports    | L   | 0.946      | -            | -                | -                | -         |   -26.21 | bnox, cej0t, Flayy, kraghen, raalz     |
|           15 |     1985 | 2026-04-03 | BetBoom Team    | L   | 0.811      | -            | -                | -                | -         |    -2.93 | bnox, cej0t, Flayy, kraghen, raalz     |
|           14 |     2087 | 2026-04-02 | Gentle Mates    | W   | 0.804      | 0.500        | 0.145 (0.058)    | 0.523 (0.210)    | 1 (0.804) |    20.75 | bnox, cej0t, Flayy, kraghen, raalz     |
|           13 |     2154 | 2026-04-01 | GamerLegion     | L   | 0.799      | -            | -                | -                | -         |    -1.11 | bnox, cej0t, Flayy, kraghen, raalz     |
|           12 |     2654 | 2026-03-25 | Monte           | L   | 0.751      | -            | -                | -                | -         |    -2.68 | bnox, cej0t, Flayy, kraghen, raalz     |
|           11 |     2675 | 2026-03-24 | OG              | W   | 0.747      | 0.435        | 0.013 (0.004)    | 0.362 (0.117)    | 1 (0.747) |    15.58 | bnox, cej0t, Flayy, kraghen, raalz     |
|           10 |     2696 | 2026-03-24 | IC Esports      | L   | 0.745      | -            | -                | -                | -         |    -5.12 | bnox, cej0t, Flayy, kraghen, raalz     |
|            9 |     2707 | 2026-03-24 | INFINITE Talent | W   | 0.745      | 0.435        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.745) |     0.40 | bnox, cej0t, Flayy, kraghen, raalz     |
|            8 |     3193 | 2026-03-14 | Alliance        | L   | 0.680      | -            | -                | -                | -         |    -4.01 | bnox, cej0t, Flayy, kraghen, raalz     |
|            7 |     3311 | 2026-03-12 | Rebels Gaming   | W   | 0.665      | 0.349        | 0.011 (0.003)    | 0.722 (0.168)    | 1 (0.665) |    11.28 | bnox, cej0t, Flayy, kraghen, raalz     |
|            6 |     3314 | 2026-03-12 | Nebula In Chaox | W   | 0.665      | 0.349        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.665) |     0.37 | bnox, cej0t, Flayy, kraghen, raalz     |
|            5 |     3322 | 2026-03-12 | M80             | L   | 0.664      | -            | -                | -                | -         |    -4.39 | bnox, cej0t, Flayy, kraghen, raalz     |
|            4 |     3323 | 2026-03-12 | JiJieHao        | W   | 0.664      | 0.349        | 0.061 (0.014)    | 0.565 (0.131)    | 1 (0.664) |    16.21 | bnox, cej0t, Flayy, kraghen, raalz     |
|            3 |     3491 | 2026-03-08 | FOKUS           | W   | 0.640      | 0.435        | 0.090 (0.025)    | 0.578 (0.161)    | 0 (0.000) |    17.25 | bnox, cej0t, Flayy, kraghen, raalz     |
|            2 |     3562 | 2026-03-07 | Fnatic          | W   | 0.633      | 0.435        | 0.016 (0.004)    | 0.655 (0.180)    | 0 (0.000) |    11.03 | bnox, cej0t, Flayy, kraghen, raalz     |
|            1 |     3678 | 2026-03-05 | Tricked Esport  | W   | 0.618      | 0.435        | 0.035 (0.009)    | 0.574 (0.154)    | 0 (0.000) |    14.35 | bnox, cej0t, Flayy, kraghen, raalz     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($13,163.89)
- Divide that value by the 5th highest value among all rosters ($625,058.91)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-04-26 |      0.966 | $6,000.00      | $5,793.89       |
| 2026-04-04 |      0.819 | $9,000.00      | $7,370.00       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
