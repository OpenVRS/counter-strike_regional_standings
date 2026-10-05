### Roster Details<br />
Team Name: Banda Chuya<br />
Roster: ezox, manio<br />
Global Rank: [373](../../standings_global_2026_10_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_10_05.md)<br />
Regional Rank: [243]( ../../standings_europe_2026_10_05.md)<br />
<br />
Final Rank Value:  402.0<br />
<br />
Final Rank Value (402.0) = Starting Rank Value (400.0) + Head To Head Adjustments (2.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.000<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 400.0
- 400 + ( ( 0.000 - 0.000 ) / ( 0.800 - 0.000 ) ) * 1600 = 400.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     1068 | 2026-09-11 | LPH           | L   | 1.000      | -            | -                | -                | -         |    -2.31 | ezox, manio, pendzelek, Showk, wazak |
|            4 |     1189 | 2026-09-09 | JUMBO         | W   | 1.000      | 0.357        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |    15.43 | ezox, manio, pendzelek, run1c, wazak |
|            3 |     1376 | 2026-09-05 | Dark Moon     | L   | 1.000      | -            | -                | -                | -         |    -5.79 | ezox, manio, pendzelek, run1c, Showk |
|            2 |     2584 | 2026-07-31 | mellren       | L   | 0.760      | -            | -                | -                | -         |    -1.68 | ezox, manio, Pelle, Showk, wazak     |
|            1 |     2613 | 2026-07-30 | Young TigeRES | L   | 0.754      | -            | -                | -                | -         |    -3.65 | ezox, manio, Pelle, Showk, wazak     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($479,090.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
