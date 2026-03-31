### Roster Details<br />
Team Name: NIP Impact<br />
Roster: aiM, Nayomy, Qiyarah, vilga, Zana<br />
Global Rank: [169](../../standings_global_2026_03_22.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_22.md)<br />
Regional Rank: [119]( ../../standings_europe_2026_03_22.md)<br />
<br />
Final Rank Value:  789.3<br />
<br />
Final Rank Value (789.3) = Starting Rank Value (783.1) + Head To Head Adjustments (6.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.395[<sup>1</sup>](#table2)
- Bounty Collected: 0.274[<sup>2</sup>](#table1)
- Opponent Network: 0.011[<sup>2</sup>](#table1)
- LAN Wins: 0.088[<sup>2</sup>](#table1)

The average of these factors is 0.192<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 783.1
- 400 + ( ( 0.192 - 0.000 ) / ( 0.802 - 0.000 ) ) * 1600 = 783.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.063
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent            | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           16 |     3176 | 2025-11-30 | BIG EQUIPA          | L   | 0.450      | -            | -                | -                | -         |    -5.20 | aiM, Nayomy, Qiyarah, vilga, Zana |
|           15 |     3247 | 2025-11-28 | Atrix Esports       | W   | 0.438      | 0.605        | 0.022 (0.006)    | 0.038 (0.010)    | 1 (0.438) |     6.46 | aiM, Nayomy, Qiyarah, vilga, Zana |
|           14 |     3257 | 2025-11-28 | Team Pigeons        | W   | 0.437      | 0.605        | 0.049 (0.013)    | 0.326 (0.086)    | 1 (0.437) |     8.14 | aiM, Nayomy, Qiyarah, vilga, Zana |
|           13 |     3718 | 2025-11-09 | Team Pigeons        | L   | 0.311      | -            | -                | -                | -         |    -4.13 | aiM, Nayomy, Qiyarah, vilga, Zana |
|           12 |     3817 | 2025-11-07 | Nemesis Impact      | W   | 0.298      | 0.317        | 0.001 (0.000)    | 0.012 (0.001)    | 0 (0.000) |     3.06 | aiM, Nayomy, Qiyarah, vilga, Zana |
|           11 |     3982 | 2025-11-04 | NoKami              | W   | 0.276      | 0.317        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.54 | aiM, Nayomy, Qiyarah, vilga, Zana |
|           10 |     4348 | 2025-10-24 | Let Her Cook        | W   | 0.205      | 0.523        | 0.032 (0.003)    | 0.123 (0.013)    | 0 (0.000) |     3.21 | aiM, Nayomy, Qiyarah, vilga, Zana |
|            9 |     4422 | 2025-10-23 | RUBY                | L   | 0.197      | -            | -                | -                | -         |    -3.43 | aiM, Nayomy, Qiyarah, vilga, Zana |
|            8 |     4436 | 2025-10-22 | ENCE Academy        | L   | 0.192      | -            | -                | -                | -         |    -2.37 | aiM, Nayomy, Qiyarah, vilga, Zana |
|            7 |     4575 | 2025-10-16 | NOVAQ               | L   | 0.149      | -            | -                | -                | -         |    -0.50 | aiM, Nayomy, Qiyarah, vilga, Zana |
|            6 |     4614 | 2025-10-15 | SPARTA Esports      | L   | 0.142      | -            | -                | -                | -         |    -2.04 | aiM, Nayomy, Qiyarah, vilga, Zana |
|            5 |     4759 | 2025-10-09 | AKA HERO KAJO       | W   | 0.105      | 0.523        | 0.001 (0.000)    | 0.007 (0.000)    | 0 (0.000) |     0.86 | aiM, Nayomy, Qiyarah, vilga, Zana |
|            4 |     5150 | 2025-10-01 | Hindsight           | W   | 0.052      | 0.523        | 0.002 (0.000)    | 0.033 (0.001)    | 0 (0.000) |     0.49 | aiM, Nayomy, Qiyarah, vilga, Zana |
|            3 |     5443 | 2025-09-25 | 1w Team             | L   | 0.009      | -            | -                | -                | -         |    -0.02 | aiM, Nayomy, Qiyarah, vilga, Zana |
|            2 |     5453 | 2025-09-24 | Flame Sharks Female | W   | 0.005      | 0.523        | 0.001 (0.000)    | 0.014 (0.000)    | 0 (0.000) |     0.04 | aiM, Nayomy, Qiyarah, vilga, Zana |
|            1 |     5473 | 2025-09-24 | UNiTY esports       | L   | 0.002      | -            | -                | -                | -         |    -0.02 | aiM, Nayomy, Qiyarah, vilga, Zana |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($11,941.56)
- Divide that value by the 5th highest value among all rosters ($404,624.76)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-11-30 |      0.451 | $26,500.00     | $11,941.56      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
