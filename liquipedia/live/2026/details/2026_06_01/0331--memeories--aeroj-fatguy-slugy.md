### Roster Details<br />
Team Name: Memeories<br />
Roster: AEROj, fatguy, Slugy<br />
Global Rank: [331](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_06_01.md)<br />
Regional Rank: [86]( ../../standings_americas_2026_06_01.md)<br />
<br />
Final Rank Value:  494.8<br />
<br />
Final Rank Value (494.8) = Starting Rank Value (475.9) + Head To Head Adjustments (18.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.158[<sup>2</sup>](#table1)

The average of these factors is 0.040<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 475.9
- 400 + ( ( 0.040 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 475.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.026
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     2456 | 2026-03-28 | Fisher College | L   | 0.774      | -            | -                | -                | -         |    -0.57 | AbbyDog, AEROj, fatguy, ryn, Slugy  |
|            5 |     2466 | 2026-03-28 | Beyond Limits  | W   | 0.773      | 0.354        | 0.000 (0.000)    | 0.026 (0.007)    | 1 (0.773) |    10.23 | AbbyDog, AEROj, fatguy, ryn, Slugy  |
|            4 |     2481 | 2026-03-28 | Team Voca      | L   | 0.773      | -            | -                | -                | -         |    -0.27 | AbbyDog, AEROj, fatguy, ryn, Slugy  |
|            3 |     2498 | 2026-03-28 | Beyond Limits  | W   | 0.772      | 0.354        | 0.000 (0.000)    | 0.026 (0.007)    | 1 (0.772) |    10.53 | AbbyDog, AEROj, fatguy, ryn, Slugy  |
|            2 |     5810 | 2026-01-03 | F5 Esports     | L   | 0.215      | -            | -                | -                | -         |    -0.51 | AEROj, fatguy, Fezera, Slugy, Tisky |
|            1 |     5814 | 2026-01-03 | 9INE           | L   | 0.214      | -            | -                | -                | -         |    -0.48 | AEROj, fatguy, Fezera, Slugy, Tisky |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($625,058.91)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
