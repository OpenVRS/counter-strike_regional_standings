### Roster Details<br />
Team Name: VP.Prodigy<br />
Roster: AquaRS, F0R3VER, kaito, sun, TriBorgg1<br />
Global Rank: [298](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_01.md)<br />
Regional Rank: [189]( ../../standings_europe_2026_06_01.md)<br />
<br />
Final Rank Value:  555.8<br />
<br />
Final Rank Value (555.8) = Starting Rank Value (555.3) + Head To Head Adjustments (0.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.196[<sup>1</sup>](#table2)
- Bounty Collected: 0.130[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.082<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 555.3
- 400 + ( ( 0.082 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 555.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.001
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     5884 | 2025-12-20 | Phantom Esports                           | L   | 0.120      | -            | -                | -                | -         |    -0.11 | AquaRS, F0R3VER, kaito, sun, TriBorgg1 |
|            4 |     6053 | 2025-12-09 | Johnny Speeds                             | L   | 0.044      | -            | -                | -                | -         |    -0.02 | AquaRS, F0R3VER, kaito, sun, TriBorgg1 |
|            3 |     6074 | 2025-12-08 | Magic                                     | L   | 0.037      | -            | -                | -                | -         |    -0.00 | AquaRS, F0R3VER, kaito, sun, TriBorgg1 |
|            2 |     6114 | 2025-12-06 | FORZE Reload                              | W   | 0.025      | 0.371        | 0.000 (0.000)    | 0.099 (0.001)    | 0 (0.000) |     0.52 | AquaRS, F0R3VER, kaito, sun, TriBorgg1 |
|            1 |     6183 | 2025-12-03 | Copenhagen Wolves (American organization) | W   | 0.004      | 0.371        | 0.000 (0.000)    | 0.002 (0.000)    | 0 (0.000) |     0.06 | AquaRS, F0R3VER, kaito, sun, TriBorgg1 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($50.28)
- Divide that value by the 5th highest value among all rosters ($625,058.91)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-12-10 |      0.050 | $1,000.00      | $50.28          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
