### Roster Details<br />
Team Name: FlyQuest RED<br />
Roster: BiBiAhn, emy, Fawx, marie, vanessa<br />
Global Rank: [294](../../standings_global_2026_06_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_06_07.md)<br />
Regional Rank: [72]( ../../standings_americas_2026_06_07.md)<br />
<br />
Final Rank Value:  559.3<br />
<br />
Final Rank Value (559.3) = Starting Rank Value (596.4) + Head To Head Adjustments (-37.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.209[<sup>1</sup>](#table2)
- Bounty Collected: 0.196[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.102<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 596.4
- 400 + ( ( 0.102 - 0.000 ) / ( 0.831 - 0.000 ) ) * 1600 = 596.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.031
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |     2043 | 2026-04-03 | BOSS           | L   | 0.762      | -            | -                | -                | -         |    -3.70 | BiBiAhn, emy, Fawx, marie, vanessa       |
|           13 |     2127 | 2026-04-02 | Regain         | L   | 0.756      | -            | -                | -                | -         |    -6.38 | BiBiAhn, emy, Fawx, marie, vanessa       |
|           12 |     2964 | 2026-03-21 | Wanted Goons   | L   | 0.676      | -            | -                | -                | -         |    -8.74 | BiBiAhn, emy, Fawx, marie, vanessa       |
|           11 |     3026 | 2026-03-20 | Shimmer        | L   | 0.669      | -            | -                | -                | -         |   -11.79 | BiBiAhn, emy, Fawx, Shakezullah, vanessa |
|           10 |     4035 | 2026-02-27 | Fisher College | L   | 0.529      | -            | -                | -                | -         |    -0.71 | BiBiAhn, emy, Fawx, marie, vanessa       |
|            9 |     4083 | 2026-02-26 | Life's A Game  | L   | 0.523      | -            | -                | -                | -         |    -0.75 | BiBiAhn, emy, Fawx, marie, vanessa       |
|            8 |     4411 | 2026-02-20 | 900FPSvsECO    | L   | 0.483      | -            | -                | -                | -         |    -5.39 | BiBiAhn, emy, Fawx, marie, vanessa       |
|            7 |     4465 | 2026-02-19 | Akimbo Esports | W   | 0.476      | 0.363        | 0.005 (0.001)    | 0.136 (0.023)    | 0 (0.000) |     9.67 | BiBiAhn, emy, Fawx, marie, vanessa       |
|            6 |     4506 | 2026-02-18 | Marsborne      | L   | 0.469      | -            | -                | -                | -         |    -1.12 | BiBiAhn, emy, Fawx, marie, vanessa       |
|            5 |     4566 | 2026-02-17 | OverKnight     | W   | 0.463      | 0.363        | 0.000 (0.000)    | 0.035 (0.006)    | 0 (0.000) |     5.33 | BiBiAhn, emy, Fawx, marie, vanessa       |
|            4 |     4912 | 2026-02-10 | F5 Esports     | L   | 0.416      | -            | -                | -                | -         |    -2.10 | BiBiAhn, emy, Fawx, marie, vanessa       |
|            3 |     4970 | 2026-02-08 | Insane players | L   | 0.403      | -            | -                | -                | -         |    -3.59 | BiBiAhn, emy, Fawx, marie, vanessa       |
|            2 |     5033 | 2026-02-06 | Reign Above    | L   | 0.389      | -            | -                | -                | -         |    -7.79 | BiBiAhn, emy, Fawx, marie, vanessa       |
|            1 |     5151 | 2026-02-02 | Wildcard       | L   | 0.362      | -            | -                | -                | -         |    -0.09 | BiBiAhn, emy, Fawx, marie, vanessa       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($103.91)
- Divide that value by the 5th highest value among all rosters ($618,382.51)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-02-10 |      0.416 | $250.00        | $103.91         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
