### Roster Details<br />
Team Name: FlyQuest RED<br />
Roster: BiBiAhn, emy, Fawx, marie, vanessa<br />
Global Rank: [297](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_06_01.md)<br />
Regional Rank: [73]( ../../standings_americas_2026_06_01.md)<br />
<br />
Final Rank Value:  557.7<br />
<br />
Final Rank Value (557.7) = Starting Rank Value (596.8) + Head To Head Adjustments (-39.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.212[<sup>1</sup>](#table2)
- Bounty Collected: 0.198[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.103<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 596.8
- 400 + ( ( 0.103 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 596.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.035
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |     1933 | 2026-04-03 | BOSS           | L   | 0.815      | -            | -                | -                | -         |    -3.64 | BiBiAhn, emy, Fawx, marie, vanessa       |
|           13 |     2017 | 2026-04-02 | Regain         | L   | 0.808      | -            | -                | -                | -         |    -6.64 | BiBiAhn, emy, Fawx, marie, vanessa       |
|           12 |     2854 | 2026-03-21 | Wanted Goons   | L   | 0.728      | -            | -                | -                | -         |    -9.29 | BiBiAhn, emy, Fawx, marie, vanessa       |
|           11 |     2916 | 2026-03-20 | Shimmer        | L   | 0.722      | -            | -                | -                | -         |   -12.78 | BiBiAhn, emy, Fawx, Shakezullah, vanessa |
|           10 |     3925 | 2026-02-27 | Fisher College | L   | 0.581      | -            | -                | -                | -         |    -0.69 | BiBiAhn, emy, Fawx, marie, vanessa       |
|            9 |     3973 | 2026-02-26 | Life's A Game  | L   | 0.575      | -            | -                | -                | -         |    -0.77 | BiBiAhn, emy, Fawx, marie, vanessa       |
|            8 |     4301 | 2026-02-20 | 900FPSvsECO    | L   | 0.535      | -            | -                | -                | -         |    -5.83 | BiBiAhn, emy, Fawx, marie, vanessa       |
|            7 |     4355 | 2026-02-19 | Akimbo Esports | W   | 0.528      | 0.363        | 0.005 (0.001)    | 0.143 (0.027)    | 0 (0.000) |    10.80 | BiBiAhn, emy, Fawx, marie, vanessa       |
|            6 |     4396 | 2026-02-18 | Marsborne      | L   | 0.522      | -            | -                | -                | -         |    -1.08 | BiBiAhn, emy, Fawx, marie, vanessa       |
|            5 |     4456 | 2026-02-17 | OverKnight     | W   | 0.515      | 0.363        | 0.000 (0.000)    | 0.038 (0.007)    | 0 (0.000) |     5.95 | BiBiAhn, emy, Fawx, marie, vanessa       |
|            4 |     4802 | 2026-02-10 | F5 Esports     | L   | 0.468      | -            | -                | -                | -         |    -2.35 | BiBiAhn, emy, Fawx, marie, vanessa       |
|            3 |     4860 | 2026-02-08 | Insane players | L   | 0.455      | -            | -                | -                | -         |    -3.92 | BiBiAhn, emy, Fawx, marie, vanessa       |
|            2 |     4923 | 2026-02-06 | Reign Above    | L   | 0.441      | -            | -                | -                | -         |    -8.73 | BiBiAhn, emy, Fawx, marie, vanessa       |
|            1 |     5041 | 2026-02-02 | Wildcard       | L   | 0.415      | -            | -                | -                | -         |    -0.10 | BiBiAhn, emy, Fawx, marie, vanessa       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($116.98)
- Divide that value by the 5th highest value among all rosters ($625,058.91)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-02-10 |      0.468 | $250.00        | $116.98         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
