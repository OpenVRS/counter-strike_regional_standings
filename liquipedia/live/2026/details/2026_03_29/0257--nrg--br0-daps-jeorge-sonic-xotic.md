### Roster Details<br />
Team Name: NRG<br />
Roster: br0, daps, Jeorge, Sonic, XotiC<br />
Global Rank: [257](../../standings_global_2026_03_29.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_03_29.md)<br />
Regional Rank: [64]( ../../standings_americas_2026_03_29.md)<br />
<br />
Final Rank Value:  628.2<br />
<br />
Final Rank Value (628.2) = Starting Rank Value (606.8) + Head To Head Adjustments (21.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.337[<sup>2</sup>](#table1)
- Opponent Network: 0.016[<sup>2</sup>](#table1)
- LAN Wins: 0.073[<sup>2</sup>](#table1)

The average of these factors is 0.107<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 606.8
- 400 + ( ( 0.107 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 606.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.023
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     3746 | 2025-11-27 | Imperial Esports  | L   | 0.385      | -            | -                | -                | -         |    -0.45 | br0, daps, Jeorge, Sonic, XotiC |
|            4 |     3756 | 2025-11-26 | Fnatic            | L   | 0.378      | -            | -                | -                | -         |    -0.54 | br0, daps, Jeorge, Sonic, XotiC |
|            3 |     3772 | 2025-11-25 | M80               | L   | 0.372      | -            | -                | -                | -         |    -0.22 | br0, daps, Jeorge, Sonic, XotiC |
|            2 |     3795 | 2025-11-24 | FaZe Clan         | W   | 0.366      | 0.624        | 0.366 (0.084)    | 0.230 (0.052)    | 1 (0.366) |    11.38 | br0, daps, Jeorge, Sonic, XotiC |
|            1 |     3817 | 2025-11-24 | Ninjas in Pyjamas | W   | 0.364      | 0.624        | 0.104 (0.024)    | 0.484 (0.110)    | 1 (0.364) |    11.28 | br0, daps, Jeorge, Sonic, XotiC |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($491,244.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
