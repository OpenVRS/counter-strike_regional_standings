### Roster Details<br />
Team Name: 9INE<br />
Roster: bnox, cej0t, Flayy, kraghen, raalz<br />
Global Rank: [95](../../standings_global_2026_06_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_07.md)<br />
Regional Rank: [63]( ../../standings_europe_2026_06_07.md)<br />
<br />
Final Rank Value:  1060.0<br />
<br />
Final Rank Value (1060.0) = Starting Rank Value (1039.6) + Head To Head Adjustments (20.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.371[<sup>1</sup>](#table2)
- Bounty Collected: 0.337[<sup>2</sup>](#table1)
- Opponent Network: 0.120[<sup>2</sup>](#table1)
- LAN Wins: 0.502[<sup>2</sup>](#table1)

The average of these factors is 0.332<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1039.6
- 400 + ( ( 0.332 - 0.000 ) / ( 0.831 - 0.000 ) ) * 1600 = 1039.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.221
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           21 |      915 | 2026-05-08 | Walczaki        | L   | 0.991      | -            | -                | -                | -         |    -8.64 | adamS, Flayy, kraghen, notineki, raalz |
|           20 |     1157 | 2026-04-30 | 33              | L   | 0.938      | -            | -                | -                | -         |   -10.13 | adamS, bnox, Flayy, kraghen, raalz     |
|           19 |     1351 | 2026-04-26 | Gentle Mates    | L   | 0.912      | -            | -                | -                | -         |    -4.94 | bnox, cej0t, Flayy, kraghen, raalz     |
|           18 |     1427 | 2026-04-25 | HYPERSPIRIT     | W   | 0.905      | 0.435        | 0.005 (0.002)    | 0.512 (0.201)    | 1 (0.905) |     9.88 | bnox, cej0t, Flayy, kraghen, raalz     |
|           17 |     1475 | 2026-04-24 | Dripmen         | L   | 0.899      | -            | -                | -                | -         |   -25.39 | bnox, cej0t, Flayy, kraghen, raalz     |
|           16 |     1490 | 2026-04-23 | Misa Esports    | L   | 0.894      | -            | -                | -                | -         |   -24.30 | bnox, cej0t, Flayy, kraghen, raalz     |
|           15 |     2095 | 2026-04-03 | BetBoom Team    | L   | 0.759      | -            | -                | -                | -         |    -2.29 | bnox, cej0t, Flayy, kraghen, raalz     |
|           14 |     2197 | 2026-04-02 | Gentle Mates    | W   | 0.752      | 0.500        | 0.141 (0.053)    | 0.492 (0.185)    | 1 (0.752) |    19.60 | bnox, cej0t, Flayy, kraghen, raalz     |
|           13 |     2264 | 2026-04-01 | GamerLegion     | L   | 0.746      | -            | -                | -                | -         |    -0.82 | bnox, cej0t, Flayy, kraghen, raalz     |
|           12 |     2764 | 2026-03-25 | Monte           | L   | 0.699      | -            | -                | -                | -         |    -2.53 | bnox, cej0t, Flayy, kraghen, raalz     |
|           11 |     2785 | 2026-03-24 | OG              | W   | 0.694      | 0.435        | 0.012 (0.004)    | 0.349 (0.105)    | 1 (0.694) |    14.75 | bnox, cej0t, Flayy, kraghen, raalz     |
|           10 |     2806 | 2026-03-24 | IC Esports      | L   | 0.693      | -            | -                | -                | -         |    -4.45 | bnox, cej0t, Flayy, kraghen, raalz     |
|            9 |     2817 | 2026-03-24 | INFINITE Talent | W   | 0.692      | 0.435        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.692) |     0.43 | bnox, cej0t, Flayy, kraghen, raalz     |
|            8 |     3303 | 2026-03-14 | Alliance        | L   | 0.627      | -            | -                | -                | -         |    -3.45 | bnox, cej0t, Flayy, kraghen, raalz     |
|            7 |     3421 | 2026-03-12 | Rebels Gaming   | W   | 0.613      | 0.349        | 0.011 (0.002)    | 0.720 (0.154)    | 1 (0.613) |    11.11 | bnox, cej0t, Flayy, kraghen, raalz     |
|            6 |     3424 | 2026-03-12 | Nebula In Chaox | W   | 0.612      | 0.349        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.612) |     0.39 | bnox, cej0t, Flayy, kraghen, raalz     |
|            5 |     3432 | 2026-03-12 | M80             | L   | 0.612      | -            | -                | -                | -         |    -3.38 | bnox, cej0t, Flayy, kraghen, raalz     |
|            4 |     3433 | 2026-03-12 | JiJieHao        | W   | 0.612      | 0.349        | 0.061 (0.013)    | 0.538 (0.115)    | 1 (0.612) |    15.47 | bnox, cej0t, Flayy, kraghen, raalz     |
|            3 |     3601 | 2026-03-08 | FOKUS           | W   | 0.588      | 0.435        | 0.087 (0.022)    | 0.556 (0.142)    | 0 (0.000) |    15.91 | bnox, cej0t, Flayy, kraghen, raalz     |
|            2 |     3672 | 2026-03-07 | Fnatic          | W   | 0.581      | 0.435        | 0.015 (0.004)    | 0.628 (0.159)    | 0 (0.000) |    10.06 | bnox, cej0t, Flayy, kraghen, raalz     |
|            1 |     3788 | 2026-03-05 | Looking for Org | W   | 0.566      | 0.435        | 0.034 (0.008)    | 0.548 (0.135)    | 0 (0.000) |    13.16 | bnox, cej0t, Flayy, kraghen, raalz     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($12,379.81)
- Divide that value by the 5th highest value among all rosters ($618,382.51)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-04-26 |      0.913 | $6,000.00      | $5,480.26       |
| 2026-04-04 |      0.767 | $9,000.00      | $6,899.56       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
