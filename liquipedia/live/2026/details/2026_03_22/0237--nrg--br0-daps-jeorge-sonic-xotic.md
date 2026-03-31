### Roster Details<br />
Team Name: NRG<br />
Roster: br0, daps, Jeorge, Sonic, XotiC<br />
Global Rank: [237](../../standings_global_2026_03_22.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_03_22.md)<br />
Regional Rank: [54]( ../../standings_americas_2026_03_22.md)<br />
<br />
Final Rank Value:  649.7<br />
<br />
Final Rank Value (649.7) = Starting Rank Value (625.2) + Head To Head Adjustments (24.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.347[<sup>2</sup>](#table1)
- Opponent Network: 0.022[<sup>2</sup>](#table1)
- LAN Wins: 0.082[<sup>2</sup>](#table1)

The average of these factors is 0.113<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 625.2
- 400 + ( ( 0.113 - 0.000 ) / ( 0.802 - 0.000 ) ) * 1600 = 625.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.029
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     3264 | 2025-11-27 | Imperial Esports  | L   | 0.431      | -            | -                | -                | -         |    -0.43 | br0, daps, Jeorge, Sonic, XotiC |
|            4 |     3274 | 2025-11-26 | Fnatic            | L   | 0.425      | -            | -                | -                | -         |    -0.51 | br0, daps, Jeorge, Sonic, XotiC |
|            3 |     3290 | 2025-11-25 | M80               | L   | 0.418      | -            | -                | -                | -         |    -0.24 | br0, daps, Jeorge, Sonic, XotiC |
|            2 |     3313 | 2025-11-24 | FaZe Clan         | W   | 0.413      | 0.624        | 0.433 (0.112)    | 0.282 (0.073)    | 1 (0.413) |    12.90 | br0, daps, Jeorge, Sonic, XotiC |
|            1 |     3335 | 2025-11-24 | Ninjas in Pyjamas | W   | 0.411      | 0.624        | 0.081 (0.021)    | 0.560 (0.143)    | 1 (0.411) |    12.75 | br0, daps, Jeorge, Sonic, XotiC |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($404,624.76)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
