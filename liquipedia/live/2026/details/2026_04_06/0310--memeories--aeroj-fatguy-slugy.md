### Roster Details<br />
Team Name: Memeories<br />
Roster: AEROj, fatguy, Slugy<br />
Global Rank: [310](../../standings_global_.md)<br />
<br />
Region: [Americas]( ../../standings_americas_.md)<br />
Regional Rank: [85]( ../../standings_americas_.md)<br />
<br />
Final Rank Value:  525.5<br />
<br />
Final Rank Value (525.5) = Starting Rank Value (509.1) + Head To Head Adjustments (16.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.221[<sup>2</sup>](#table1)

The average of these factors is 0.056<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 509.1
- 400 + ( ( 0.056 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 509.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.037
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            9 |      387 | 2026-03-28 | Fisher College | L   | 1.000      | -            | -                | -                | -         |    -3.08 | AbbyDog, AEROj, fatguy, ryn, Slugy  |
|            8 |      398 | 2026-03-28 | Beyond Limits  | W   | 1.000      | 0.354        | 0.000 (0.000)    | 0.031 (0.011)    | 1 (1.000) |    12.29 | AbbyDog, AEROj, fatguy, ryn, Slugy  |
|            7 |      411 | 2026-03-28 | Team Voca      | L   | 1.000      | -            | -                | -                | -         |    -0.38 | AbbyDog, AEROj, fatguy, ryn, Slugy  |
|            6 |      428 | 2026-03-28 | Beyond Limits  | W   | 1.000      | 0.354        | 0.000 (0.000)    | 0.031 (0.011)    | 1 (1.000) |    12.76 | AbbyDog, AEROj, fatguy, ryn, Slugy  |
|            5 |     3697 | 2026-01-03 | F5 Esports     | L   | 0.582      | -            | -                | -                | -         |    -2.89 | AEROj, fatguy, Fezera, Slugy, Tisky |
|            4 |     3701 | 2026-01-03 | 9INE           | L   | 0.581      | -            | -                | -                | -         |    -0.17 | AEROj, fatguy, Fezera, Slugy, Tisky |
|            3 |     4693 | 2025-11-08 | Reign Above    | L   | 0.209      | -            | -                | -                | -         |    -2.67 | AEROj, fatguy, Ounce, Slugy, Tiski  |
|            2 |     4696 | 2025-11-08 | Outfit 49      | W   | 0.209      | 0.333        | 0.000 (0.000)    | 0.005 (0.000)    | 1 (0.209) |     3.20 | AEROj, fatguy, Ounce, Slugy, Tiski  |
|            1 |     4706 | 2025-11-08 | Reign Above    | L   | 0.207      | -            | -                | -                | -         |    -2.66 | AEROj, fatguy, Ounce, Slugy, Tiski  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($457,592.01)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
