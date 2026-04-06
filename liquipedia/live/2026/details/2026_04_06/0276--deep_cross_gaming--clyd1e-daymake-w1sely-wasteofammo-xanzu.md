### Roster Details<br />
Team Name: Deep Cross Gaming<br />
Roster: clyd1e, DayMake, w1sely, WasteOfAmmo, xanzu<br />
Global Rank: [276](../../standings_global_.md)<br />
<br />
Region: [Asia]( ../../standings_asia_.md)<br />
Regional Rank: [32]( ../../standings_asia_.md)<br />
<br />
Final Rank Value:  600.0<br />
<br />
Final Rank Value (600.0) = Starting Rank Value (621.4) + Head To Head Adjustments (-21.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.268[<sup>1</sup>](#table2)
- Bounty Collected: 0.144[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.041[<sup>2</sup>](#table1)

The average of these factors is 0.113<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 621.4
- 400 + ( ( 0.113 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 621.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.013
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     2332 | 2026-02-18 | Team Arise                  | L   | 0.886      | -            | -                | -                | -         |   -12.59 | clyd1e, DayMake, w1sely, WasteOfAmmo, xanzu |
|            4 |     2394 | 2026-02-17 | BORING PLAYER               | L   | 0.879      | -            | -                | -                | -         |   -11.16 | clyd1e, DayMake, w1sely, WasteOfAmmo, xanzu |
|            3 |     4690 | 2025-11-08 | Team Unitronic              | W   | 0.211      | 0.433        | 0.000 (0.000)    | 0.006 (0.001)    | 1 (0.211) |     2.21 | clyd1e, DayMake, w1sely, WasteOfAmmo, xanzu |
|            2 |     4812 | 2025-11-07 | Wicked Gaming (Indian team) | W   | 0.199      | 0.433        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.199) |     2.11 | clyd1e, DayMake, w1sely, WasteOfAmmo, xanzu |
|            1 |     4851 | 2025-11-06 | Mousquetaires               | L   | 0.197      | -            | -                | -                | -         |    -1.97 | clyd1e, DayMake, w1sely, WasteOfAmmo, xanzu |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($845.14)
- Divide that value by the 5th highest value among all rosters ($457,592.01)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-11-09 |      0.211 | $4,000.00      | $845.14         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
