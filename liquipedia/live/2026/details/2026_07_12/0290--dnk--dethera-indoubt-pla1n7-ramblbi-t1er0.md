### Roster Details<br />
Team Name: DNK<br />
Roster: dethera, indoubt, Pla1n7, RamBLBi, t1er0<br />
Global Rank: [290](../../standings_global_2026_07_12.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_07_12.md)<br />
Regional Rank: [184]( ../../standings_europe_2026_07_12.md)<br />
<br />
Final Rank Value:  607.3<br />
<br />
Final Rank Value (607.3) = Starting Rank Value (628.4) + Head To Head Adjustments (-21.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.256[<sup>1</sup>](#table2)
- Bounty Collected: 0.159[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.067[<sup>2</sup>](#table1)

The average of these factors is 0.121<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 628.4
- 400 + ( ( 0.121 - 0.000 ) / ( 0.844 - 0.000 ) ) * 1600 = 628.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.025
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent            | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      881 | 2026-05-29 | WRAITH PCIFIC       | L   | 0.903      | -            | -                | -                | -         |    -5.07 | dethera, indoubt, Pla1n7, RamBLBi, t1er0 |
|            4 |      891 | 2026-05-29 | Rune Eaters Esports | L   | 0.902      | -            | -                | -                | -         |    -5.19 | dethera, indoubt, Pla1n7, RamBLBi, t1er0 |
|            3 |     2303 | 2026-04-19 | WINNERS Esports     | L   | 0.636      | -            | -                | -                | -         |    -8.54 | dethera, indoubt, Pla1n7, RamBLBi, t1er0 |
|            2 |     2321 | 2026-04-18 | THE UNIT            | W   | 0.630      | 0.277        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.630) |     6.36 | dethera, indoubt, Pla1n7, RamBLBi, t1er0 |
|            1 |     2325 | 2026-04-18 | WINNERS Esports     | L   | 0.629      | -            | -                | -                | -         |    -8.67 | dethera, indoubt, Pla1n7, RamBLBi, t1er0 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($667.78)
- Divide that value by the 5th highest value among all rosters ($534,654.57)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-05-31 |      0.917 | $500.00        | $458.40         |
| 2026-04-19 |      0.636 | $329.06        | $209.38         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
