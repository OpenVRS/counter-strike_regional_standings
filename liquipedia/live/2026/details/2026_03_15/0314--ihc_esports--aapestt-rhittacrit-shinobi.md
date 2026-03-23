### Roster Details<br />
Team Name: IHC Esports<br />
Roster: Aapestt, rhittacrit, shinobi<br />
Global Rank: [314](../../standings_global_2026_03_15.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_03_15.md)<br />
Regional Rank: [40]( ../../standings_asia_2026_03_15.md)<br />
<br />
Final Rank Value:  487.5<br />
<br />
Final Rank Value (487.5) = Starting Rank Value (487.3) + Head To Head Adjustments (0.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.177[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.045<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 487.3
- 400 + ( ( 0.045 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 487.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.008
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     4133 | 2025-10-25 | Change The Game   | L   | 0.258      | -            | -                | -                | -         |    -1.68 | Aapestt, NEUZ, QQLIGHTNING, rhittacrit, shinobi |
|            4 |     4195 | 2025-10-24 | Chinggis Warriors | L   | 0.251      | -            | -                | -                | -         |    -1.06 | Aapestt, NEUZ, QQLIGHTNING, rhittacrit, shinobi |
|            3 |     4245 | 2025-10-23 | The QUBE Esports  | W   | 0.245      | 0.333        | 0.003 (0.000)    | 0.119 (0.010)    | 0 (0.000) |     5.49 | Aapestt, NEUZ, QQLIGHTNING, rhittacrit, shinobi |
|            2 |     4776 | 2025-10-06 | Team GATERON      | L   | 0.131      | -            | -                | -                | -         |    -1.52 | Aapestt, rate, rhittacrit, shinobi, Veccil      |
|            1 |     4835 | 2025-10-05 | FengDa Gaming     | L   | 0.125      | -            | -                | -                | -         |    -1.01 | Aapestt, rate, rhittacrit, shinobi, Veccil      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($426,498.89)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
