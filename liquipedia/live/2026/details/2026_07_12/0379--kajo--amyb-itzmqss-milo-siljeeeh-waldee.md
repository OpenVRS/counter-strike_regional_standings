### Roster Details<br />
Team Name: KAJO<br />
Roster: amyb, ItzMqss, miLo, Siljeeeh, Waldee<br />
Global Rank: [379](../../standings_global_2026_07_12.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_07_12.md)<br />
Regional Rank: [234]( ../../standings_europe_2026_07_12.md)<br />
<br />
Final Rank Value:  400.6<br />
<br />
Final Rank Value (400.6) = Starting Rank Value (401.2) + Head To Head Adjustments (-0.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.001<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 401.2
- 400 + ( ( 0.001 - 0.000 ) / ( 0.844 - 0.000 ) ) * 1600 = 401.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.020
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent            | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |     2987 | 2026-04-01 | Clutchain Female    | L   | 0.517      | -            | -                | -                | -         |    -2.87 | amyb, ItzMqss, miLo, Siljeeeh, Waldee   |
|            6 |     3054 | 2026-03-31 | Rottweilers         | W   | 0.511      | 0.384        | 0.000 (0.000)    | 0.128 (0.025)    | 0 (0.000) |    12.34 | amyb, ItzMqss, miLo, Siljeeeh, Waldee   |
|            5 |     3208 | 2026-03-29 | Yngods              | L   | 0.498      | -            | -                | -                | -         |    -2.74 | amyb, ItzMqss, miLo, Siljeeeh, Waldee   |
|            4 |     3430 | 2026-03-26 | Ex-MANA eSports     | L   | 0.476      | -            | -                | -                | -         |    -1.33 | amyb, ItzMqss, Siljeeeh, VilleS, Waldee |
|            3 |     3483 | 2026-03-25 | Lilmix              | L   | 0.469      | -            | -                | -                | -         |    -2.40 | amyb, ItzMqss, Siljeeeh, VilleS, Waldee |
|            2 |     3856 | 2026-03-18 | Ex-MANA eSports     | L   | 0.424      | -            | -                | -                | -         |    -1.24 | Kossu72, miLo, Siljeeeh, spargo, Waldee |
|            1 |     3946 | 2026-03-16 | Rune Eaters Esports | L   | 0.411      | -            | -                | -                | -         |    -2.33 | Kossu72, miLo, Siljeeeh, spargo, Waldee |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($534,654.57)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
