### Roster Details<br />
Team Name: Washed (Danish team)<br />
Roster: ANSG1, kiR, kroK, Lucky, suma<br />
Global Rank: [114](../../standings_global_2026_07_12.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_07_12.md)<br />
Regional Rank: [77]( ../../standings_europe_2026_07_12.md)<br />
<br />
Final Rank Value:  927.6<br />
<br />
Final Rank Value (927.6) = Starting Rank Value (890.9) + Head To Head Adjustments (36.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.347[<sup>1</sup>](#table2)
- Bounty Collected: 0.237[<sup>2</sup>](#table1)
- Opponent Network: 0.027[<sup>2</sup>](#table1)
- LAN Wins: 0.426[<sup>2</sup>](#table1)

The average of these factors is 0.259<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 890.9
- 400 + ( ( 0.259 - 0.000 ) / ( 0.844 - 0.000 ) ) * 1600 = 890.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.156
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent              | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      460 | 2026-06-13 | MASONIC               | W   | 1.000      | 0.357        | 0.011 (0.004)    | 0.493 (0.176)    | 1 (1.000) |    15.37 | ANSG1, kiR, kroK, Lucky, suma |
|            4 |      474 | 2026-06-13 | MASQ                  | W   | 1.000      | 0.357        | 0.001 (0.001)    | 0.078 (0.028)    | 1 (1.000) |    10.05 | ANSG1, kiR, kroK, Lucky, suma |
|            3 |      495 | 2026-06-13 | Ex-Sashi Academy      | W   | 1.000      | 0.357        | 0.003 (0.001)    | 0.157 (0.056)    | 1 (1.000) |    11.79 | ANSG1, kiR, kroK, Lucky, suma |
|            2 |      509 | 2026-06-12 | WOPA Esport           | L   | 0.998      | -            | -                | -                | -         |    -7.16 | ANSG1, kiR, kroK, Lucky, suma |
|            1 |      515 | 2026-06-12 | Invicta (Danish team) | W   | 0.998      | 0.357        | 0.001 (0.001)    | 0.034 (0.012)    | 1 (0.998) |     6.58 | ANSG1, kiR, kroK, Lucky, suma |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,980.00)
- Divide that value by the 5th highest value among all rosters ($534,654.57)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-06-13 |      1.000 | $6,980.00      | $6,980.00       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
